import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';
import { sendWelcomeCredentials } from '@/lib/mailer';
import crypto from 'crypto';

function generateTempPassword(): string {
  return crypto.randomBytes(4).toString('base64url').slice(0, 8);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { students, batchId } = body as {
      students: { name: string; email: string; phone?: string; grade?: string; board?: string }[];
      batchId?: string;
    };

    if (!students || !Array.isArray(students) || students.length === 0) {
      return NextResponse.json({ error: 'Provide a non-empty students array' }, { status: 400 });
    }

    // Validate batch if provided
    let batch = null;
    if (batchId) {
      batch = await prisma.batch.findUnique({ where: { id: batchId } });
      if (!batch) return NextResponse.json({ error: 'Batch not found' }, { status: 404 });
    }

    const results: { name: string; email: string; tempPassword: string; status: string; userId?: string }[] = [];
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    for (const s of students) {
      if (!s.name || !s.email) {
        results.push({ name: s.name || '', email: s.email || '', tempPassword: '', status: 'Skipped — missing name or email' });
        continue;
      }

      // Check duplicate
      const existing = await prisma.user.findUnique({ where: { email: s.email } });
      if (existing) {
        results.push({ name: s.name, email: s.email, tempPassword: '', status: 'Skipped — email already exists' });
        continue;
      }

      const tempPassword = generateTempPassword();
      const passwordHash = await bcrypt.hash(tempPassword, 10);

      const user = await prisma.user.create({
        data: {
          name: s.name,
          email: s.email,
          passwordHash,
          role: Role.Student,
          phone: s.phone || null,
          grade: s.grade || null,
          board: s.board || 'CBSE',
          mustChangePassword: true,
        },
      });

      // Enroll in explicit batch
      if (batchId) {
        await prisma.batchEnrollment.create({ data: { batchId, studentId: user.id } }).catch(() => {});
      }

      // Auto-enroll in matching grade+board batches
      if (!batchId && s.grade) {
        const matchingBatches = await prisma.batch.findMany({
          where: { grade: s.grade, board: s.board || 'CBSE', isActive: true },
          select: { id: true },
        });
        for (const b of matchingBatches) {
          await prisma.batchEnrollment.create({ data: { batchId: b.id, studentId: user.id } }).catch(() => {});
        }
      }

      // Send welcome email
      await sendWelcomeCredentials({
        to: s.email,
        studentName: s.name,
        tempPassword,
        loginUrl: `${baseUrl}/login`,
      });

      results.push({ name: s.name, email: s.email, tempPassword, status: 'Created', userId: user.id });
    }

    const created = results.filter(r => r.status === 'Created').length;
    return NextResponse.json({
      message: `Provisioned ${created} of ${students.length} students.`,
      created,
      skipped: students.length - created,
      results,
    });
  } catch (error: any) {
    console.error('Provision error:', error);
    return NextResponse.json({ error: 'Failed to provision students' }, { status: 500 });
  }
}
