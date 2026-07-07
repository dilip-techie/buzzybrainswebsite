import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const batchId = searchParams.get('batchId');

    if (!batchId) return NextResponse.json({ error: 'batchId query param required' }, { status: 400 });

    const batch = await prisma.batch.findUnique({
      where: { id: batchId },
      include: { enrollments: { select: { studentId: true } } },
    });
    if (!batch) return NextResponse.json({ error: 'Batch not found' }, { status: 404 });

    const studentIds = batch.enrollments.map(e => e.studentId);

    // Get all attempts for batch students
    const attempts = await prisma.attempt.findMany({
      where: { studentId: { in: studentIds }, status: 'Evaluated' },
      include: {
        student: { select: { id: true, name: true, email: true } },
        test: { select: { id: true, title: true, subject: true, totalMarks: true } },
      },
      orderBy: { startTime: 'desc' },
    });

    // Per-student aggregation
    const studentMap = new Map<string, { name: string; email: string; tests: number; totalScore: number; maxPossible: number; lastAttempt: string }>();
    for (const a of attempts) {
      const s = studentMap.get(a.studentId) || { name: a.student.name, email: a.student.email, tests: 0, totalScore: 0, maxPossible: 0, lastAttempt: '' };
      s.tests++;
      s.totalScore += a.totalScore;
      s.maxPossible += a.test.totalMarks;
      if (!s.lastAttempt || a.startTime.toISOString() > s.lastAttempt) s.lastAttempt = a.startTime.toISOString();
      studentMap.set(a.studentId, s);
    }

    const leaderboard = Array.from(studentMap.entries())
      .map(([id, d]) => ({ studentId: id, ...d, avgPercent: d.maxPossible > 0 ? Math.round((d.totalScore / d.maxPossible) * 100) : 0 }))
      .sort((a, b) => b.avgPercent - a.avgPercent)
      .map((s, i) => ({ ...s, rank: i + 1 }));

    // Per-test aggregation
    const testMap = new Map<string, { title: string; subject: string; totalMarks: number; scores: number[]; attempted: number }>();
    for (const a of attempts) {
      const t = testMap.get(a.testId) || { title: a.test.title, subject: a.test.subject, totalMarks: a.test.totalMarks, scores: [], attempted: 0 };
      t.scores.push(a.totalScore);
      t.attempted++;
      testMap.set(a.testId, t);
    }

    const testStats = Array.from(testMap.entries()).map(([id, t]) => ({
      testId: id,
      title: t.title,
      subject: t.subject,
      totalMarks: t.totalMarks,
      attempted: t.attempted,
      totalStudents: studentIds.length,
      completionRate: Math.round((t.attempted / studentIds.length) * 100),
      avgScore: t.scores.length > 0 ? Math.round(t.scores.reduce((a, b) => a + b, 0) / t.scores.length * 10) / 10 : 0,
      highest: t.scores.length > 0 ? Math.max(...t.scores) : 0,
      lowest: t.scores.length > 0 ? Math.min(...t.scores) : 0,
    }));

    return NextResponse.json({
      batchName: batch.name,
      totalStudents: studentIds.length,
      leaderboard,
      testStats,
    });
  } catch (error: any) {
    console.error('Batch analytics error:', error);
    return NextResponse.json({ error: 'Failed to fetch batch analytics' }, { status: 500 });
  }
}
