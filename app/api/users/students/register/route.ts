import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { generateStudentPassword } from '@/lib/studentCredentials';
import { sendWelcomeCredentials } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, grade, board } = body;

    if (!name || !email || !phone || !grade || !board) {
      return NextResponse.json(
        { error: 'Missing required student onboarding fields' },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'A student or user already exists with this email address' },
        { status: 409 }
      );
    }

    const generatedPassword = generateStudentPassword(name, phone);
    const passwordHash = await bcrypt.hash(generatedPassword, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        grade,
        board,
        passwordHash,
        role: Role.Student,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        grade: true,
        board: true,
        role: true,
        createdAt: true,
      },
    });

    // Send the welcome email with credentials
    const loginUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/login`;
    await sendWelcomeCredentials({
      to: email,
      studentName: name,
      tempPassword: generatedPassword,
      loginUrl
    });

    return NextResponse.json({ user, generatedPassword }, { status: 201 });
  } catch (error) {
    console.error('Admin student registration error:', error);
    return NextResponse.json(
      { error: 'Failed to register student account' },
      { status: 500 }
    );
  }
}
