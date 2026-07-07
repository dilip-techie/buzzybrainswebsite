import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || (session.user.role !== Role.Admin && session.user.role !== Role.Teacher)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const testId = searchParams.get('testId');

    if (!testId) {
      return NextResponse.json({ error: 'testId is required' }, { status: 400 });
    }

    const attempts = await prisma.attempt.findMany({
      where: { testId },
      include: {
        student: { select: { id: true, name: true, email: true } },
      },
      orderBy: { totalScore: 'desc' },
    });

    const results = attempts.map(a => ({
      studentId: a.student.id,
      studentName: a.student.name,
      studentEmail: a.student.email,
      totalScore: a.totalScore,
      status: a.status,
      tabSwitchCount: a.tabSwitchCount,
      startTime: a.startTime.toISOString(),
      endTime: a.endTime?.toISOString() || null,
    }));

    return NextResponse.json({ results });
  } catch (error: any) {
    console.error('Fetch results error:', error);
    return NextResponse.json({ error: 'Failed to fetch results' }, { status: 500 });
  }
}
