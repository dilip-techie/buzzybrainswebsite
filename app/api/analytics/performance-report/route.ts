import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) return NextResponse.json({ error: 'studentId query param required' }, { status: 400 });

    const student = await prisma.user.findUnique({
      where: { id: studentId },
      select: { id: true, name: true, email: true, grade: true, board: true },
    });
    if (!student) return NextResponse.json({ error: 'Student not found' }, { status: 404 });

    const attempts = await prisma.attempt.findMany({
      where: { studentId, status: { in: ['Submitted', 'Evaluated'] } },
      include: {
        test: { select: { title: true, subject: true, grade: true, totalMarks: true, durationMins: true } },
      },
      orderBy: { startTime: 'desc' },
    });

    // Subject breakdown
    const subjectMap = new Map<string, { total: number; scored: number; count: number }>();
    for (const a of attempts) {
      const sub = a.test.subject;
      const s = subjectMap.get(sub) || { total: 0, scored: 0, count: 0 };
      s.total += a.test.totalMarks;
      s.scored += a.totalScore;
      s.count++;
      subjectMap.set(sub, s);
    }

    const subjectBreakdown = Array.from(subjectMap.entries()).map(([subject, d]) => ({
      subject,
      testsCount: d.count,
      totalMarks: d.total,
      scoredMarks: d.scored,
      accuracy: d.total > 0 ? Math.round((d.scored / d.total) * 100) : 0,
    }));

    // Timeline data (for charts)
    const timeline = attempts.map(a => ({
      testTitle: a.test.title,
      subject: a.test.subject,
      score: a.totalScore,
      totalMarks: a.test.totalMarks,
      percent: a.test.totalMarks > 0 ? Math.round((a.totalScore / a.test.totalMarks) * 100) : 0,
      date: a.startTime.toISOString(),
    }));

    // Pending tests
    const assignedTests = await prisma.testAssignment.findMany({
      where: { studentId },
      select: { testId: true },
    });
    const attemptedTestIds = new Set(attempts.map(a => a.testId));
    const pendingCount = assignedTests.filter(a => !attemptedTestIds.has(a.testId)).length;

    return NextResponse.json({
      student,
      totalAttempts: attempts.length,
      pendingTests: pendingCount,
      overallAccuracy: attempts.length > 0
        ? Math.round(
            (attempts.reduce((s, a) => s + a.totalScore, 0) /
              attempts.reduce((s, a) => s + a.test.totalMarks, 0)) * 100
          )
        : 0,
      subjectBreakdown,
      timeline,
    });
  } catch (error: any) {
    console.error('Performance report error:', error);
    return NextResponse.json({ error: 'Failed to generate performance report' }, { status: 500 });
  }
}
