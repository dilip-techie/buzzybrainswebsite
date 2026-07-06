import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';
import { sendWelcomeCredentials } from '@/lib/mailer';
import crypto from 'crypto';

function generateTempPassword(): string {
  return crypto.randomBytes(4).toString('base64url').slice(0, 8);
}

function parseCsvText(text: string): { name: string; email: string; phone: string; grade: string; board: string }[] {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (lines.length < 2) return []; // header + at least 1 row

  const header = lines[0].toLowerCase().split(',').map(h => h.trim());
  const nameIdx = header.findIndex(h => h.includes('name'));
  const emailIdx = header.findIndex(h => h.includes('email'));
  const phoneIdx = header.findIndex(h => h.includes('phone'));
  const gradeIdx = header.findIndex(h => h.includes('grade') || h.includes('class'));
  const boardIdx = header.findIndex(h => h.includes('board'));

  if (nameIdx === -1 || emailIdx === -1) return [];

  return lines.slice(1).map(line => {
    const cols = line.split(',').map(c => c.trim());
    return {
      name: cols[nameIdx] || '',
      email: cols[emailIdx] || '',
      phone: phoneIdx >= 0 ? cols[phoneIdx] || '' : '',
      grade: gradeIdx >= 0 ? cols[gradeIdx] || '' : '',
      board: boardIdx >= 0 ? cols[boardIdx] || 'CBSE' : 'CBSE',
    };
  }).filter(r => r.name && r.email);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const batchId = formData.get('batchId') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'No CSV file provided' }, { status: 400 });
    }

    const text = await file.text();
    const rows = parseCsvText(text);

    if (rows.length === 0) {
      return NextResponse.json({ error: 'CSV must have header row (name,email,...) and at least one data row' }, { status: 400 });
    }

    // Validate batch
    if (batchId) {
      const batch = await prisma.batch.findUnique({ where: { id: batchId } });
      if (!batch) return NextResponse.json({ error: 'Batch not found' }, { status: 404 });
    }

    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    const results: { name: string; email: string; tempPassword: string; status: string }[] = [];

    for (const row of rows) {
      const existing = await prisma.user.findUnique({ where: { email: row.email } });
      if (existing) {
        results.push({ name: row.name, email: row.email, tempPassword: '', status: 'Skipped — duplicate' });
        continue;
      }

      const tempPassword = generateTempPassword();
      const passwordHash = await bcrypt.hash(tempPassword, 10);

      const user = await prisma.user.create({
        data: {
          name: row.name,
          email: row.email,
          passwordHash,
          role: Role.Student,
          phone: row.phone || null,
          grade: row.grade || null,
          board: row.board || 'CBSE',
          mustChangePassword: true,
        },
      });

      if (batchId) {
        await prisma.batchEnrollment.create({ data: { batchId, studentId: user.id } }).catch(() => {});
      } else if (row.grade) {
        const batches = await prisma.batch.findMany({
          where: { grade: row.grade, board: row.board || 'CBSE', isActive: true },
          select: { id: true },
        });
        for (const b of batches) {
          await prisma.batchEnrollment.create({ data: { batchId: b.id, studentId: user.id } }).catch(() => {});
        }
      }

      await sendWelcomeCredentials({ to: row.email, studentName: row.name, tempPassword, loginUrl: `${baseUrl}/login` });

      results.push({ name: row.name, email: row.email, tempPassword, status: 'Created' });
    }

    const created = results.filter(r => r.status === 'Created').length;
    return NextResponse.json({ message: `CSV processed: ${created} created, ${rows.length - created} skipped.`, created, skipped: rows.length - created, results });
  } catch (error: any) {
    console.error('CSV provision error:', error);
    return NextResponse.json({ error: 'Failed to process CSV upload' }, { status: 500 });
  }
}
