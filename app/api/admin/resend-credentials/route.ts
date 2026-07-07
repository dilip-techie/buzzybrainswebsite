import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { sendWelcomeCredentials } from '@/lib/mailer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';
import crypto from 'crypto';

function generateTempPassword(): string {
  return crypto.randomBytes(4).toString('base64url').slice(0, 8);
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || (session.user.role !== Role.Admin && session.user.role !== Role.Teacher)) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Find the existing student
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'No user found with this email' }, { status: 404 });
    }

    if (user.role !== Role.Student) {
      return NextResponse.json({ error: 'Can only resend credentials for students' }, { status: 400 });
    }

    // Generate a fresh temp password and reset the account
    const tempPassword = generateTempPassword();
    const passwordHash = await bcrypt.hash(tempPassword, 10);

    await prisma.user.update({
      where: { email },
      data: { passwordHash, mustChangePassword: true },
    });

    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const loginUrl = `${protocol}://${host}/login`;

    await sendWelcomeCredentials({
      to: email,
      studentName: user.name,
      tempPassword,
      loginUrl,
    });

    return NextResponse.json({
      message: `Credentials resent to ${email}`,
      name: user.name,
      email,
      tempPassword,
    });
  } catch (error: any) {
    console.error('Resend credentials error:', error);
    return NextResponse.json({ error: 'Failed to resend credentials' }, { status: 500 });
  }
}
