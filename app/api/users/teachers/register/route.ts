import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';
import { sendWelcomeCredentials } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || (session.user as any).role !== Role.Admin) {
      return NextResponse.json({ error: 'Unauthorized access. Only Admins can register teachers.' }, { status: 401 });
    }

    const { name, email, phone } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists.' }, { status: 409 });
    }

    const generatedPassword = `${name.split(' ')[0].toLowerCase()}${phone ? phone.slice(-4) : '1234'}`;
    const passwordHash = await bcrypt.hash(generatedPassword, 10);

    const newTeacher = await prisma.user.create({
      data: {
        role: Role.Teacher,
        name,
        email,
        phone,
        passwordHash,
        mustChangePassword: true,
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

    return NextResponse.json({ 
      success: true, 
      teacherId: newTeacher.id,
      generatedPassword 
    });

  } catch (error) {
    console.error('Teacher registration error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
