import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { testId, studentId } = body;

    if (!testId || !studentId) {
      return NextResponse.json({ error: 'Missing testId or studentId parameters' }, { status: 400 });
    }

    // Verify test exists
    const test = await prisma.test.findUnique({ where: { id: testId } });
    if (!test) {
      return NextResponse.json({ error: 'Target test record not found' }, { status: 404 });
    }

    // Verify student exists
    const student = await prisma.user.findUnique({ where: { id: studentId } });
    if (!student || student.role !== 'Student') {
      return NextResponse.json({ error: 'Valid target student record not found' }, { status: 404 });
    }

    // Upsert or create assignment
    const assignment = await prisma.testAssignment.create({
      data: {
        testId,
        studentId,
      },
      include: {
        test: {
          select: { title: true, subject: true, totalMarks: true },
        },
        student: {
          select: { name: true, email: true },
        },
      },
    });

    return NextResponse.json({ message: 'Test assigned successfully', assignment });
  } catch (error: any) {
    console.error('Failed to assign test:', error);
    // If unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'This test has already been assigned to the targeted student' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to complete test assignment dispatch' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    const whereClause = studentId ? { studentId } : {};

    const assignments = await prisma.testAssignment.findMany({
      where: whereClause,
      include: {
        test: {
          select: { id: true, title: true, subject: true, durationMins: true, totalMarks: true, grade: true, expiresAt: true },
        },
        student: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { assignedAt: 'desc' },
    });

    return NextResponse.json({ assignments });
  } catch (error: any) {
    console.error('Failed to list test assignments:', error);
    return NextResponse.json({ error: 'Failed to retrieve test assignments database' }, { status: 500 });
  }
}
