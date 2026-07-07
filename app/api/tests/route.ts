import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { TestStatus } from '@prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') as TestStatus | null;

    const filter: any = {};
    if (status && Object.values(TestStatus).includes(status)) {
      filter.status = status;
    }

    const tests = await prisma.test.findMany({
      where: filter,
      include: {
        createdBy: { select: { name: true, email: true } },
        _count: { select: { questions: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ tests });
  } catch (error: any) {
    console.error('Fetch tests error:', error);
    return NextResponse.json({ error: 'Failed to fetch tests' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, board, grade, subject, durationMins, totalMarks, createdById, status } = body;

    if (!title || !board || !grade || !subject || !durationMins || !totalMarks || !createdById) {
      return NextResponse.json({ error: 'Missing required test metadata fields' }, { status: 400 });
    }

    const newTest = await prisma.test.create({
      data: {
        title,
        board,
        grade,
        subject,
        durationMins: Number(durationMins),
        totalMarks: Number(totalMarks),
        createdById,
        status: status || TestStatus.Draft,
      },
    });

    return NextResponse.json({ message: 'Test metadata created successfully', test: newTest }, { status: 201 });
  } catch (error: any) {
    console.error('Create test error:', error);
    return NextResponse.json({ error: 'Failed to create test' }, { status: 500 });
  }
}
