import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const userId = new URL(req.url).searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

  try {
    // Formal test attempts
    const attempts = await prisma.attempt.findMany({
      where: { studentId: userId, status: { in: ['Submitted', 'Evaluated'] } },
      include: { test: { select: { subject: true, totalMarks: true, title: true } } },
      orderBy: { endTime: 'asc' },
    });

    // Score trend over time
    const scoreTrend = attempts.map((a) => ({
      date: a.endTime?.toISOString().split('T')[0] || '',
      score: a.totalScore,
      totalMarks: a.test.totalMarks,
      percentage: a.test.totalMarks > 0 ? Math.round((a.totalScore / a.test.totalMarks) * 100) : 0,
      subject: a.test.subject,
      title: a.test.title,
    }));

    // Subject-wise breakdown
    const subjectMap: Record<string, { total: number; correct: number; count: number }> = {};
    for (const a of attempts) {
      const s = a.test.subject;
      if (!subjectMap[s]) subjectMap[s] = { total: 0, correct: 0, count: 0 };
      subjectMap[s].total += a.test.totalMarks;
      subjectMap[s].correct += a.totalScore;
      subjectMap[s].count++;
    }
    const subjectBreakdown = Object.entries(subjectMap).map(([subject, data]) => ({
      subject,
      accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
      attempts: data.count,
    }));

    // Practice sessions
    const practiceSessions = await prisma.practiceSession.findMany({
      where: { userId },
      orderBy: { completedAt: 'asc' },
      select: { chapter: true, subject: true, correctCount: true, totalQuestions: true, completedAt: true },
    });

    // Chapter accuracy heatmap
    const chapterMap: Record<string, { correct: number; total: number }> = {};
    for (const ps of practiceSessions) {
      const key = `${ps.subject}:${ps.chapter}`;
      if (!chapterMap[key]) chapterMap[key] = { correct: 0, total: 0 };
      chapterMap[key].correct += ps.correctCount;
      chapterMap[key].total += ps.totalQuestions;
    }
    const chapterHeatmap = Object.entries(chapterMap).map(([key, v]) => {
      const [subject, chapter] = key.split(':');
      return { subject, chapter, accuracy: v.total > 0 ? Math.round((v.correct / v.total) * 100) : 0 };
    });

    // Peer percentile for most recent attempt
    let peerPercentile = null;
    if (attempts.length > 0) {
      const latest = attempts[attempts.length - 1];
      const allForTest = await prisma.attempt.findMany({
        where: { testId: latest.testId, status: { in: ['Submitted', 'Evaluated'] } },
        select: { totalScore: true },
      });
      const beaten = allForTest.filter((a) => a.totalScore < latest.totalScore).length;
      peerPercentile = allForTest.length > 1 ? Math.round((beaten / (allForTest.length - 1)) * 100) : 100;
    }

    // Daily activity (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const recentActivity = [
      ...attempts.filter((a) => a.endTime && a.endTime >= thirtyDaysAgo).map((a) => ({ date: a.endTime!.toISOString().split('T')[0], type: 'test' })),
      ...practiceSessions.filter((p) => p.completedAt >= thirtyDaysAgo).map((p) => ({ date: p.completedAt.toISOString().split('T')[0], type: 'practice' })),
    ];
    const activityByDate: Record<string, number> = {};
    for (const item of recentActivity) {
      activityByDate[item.date] = (activityByDate[item.date] || 0) + 1;
    }

    return NextResponse.json({
      scoreTrend,
      subjectBreakdown,
      chapterHeatmap,
      peerPercentile,
      activityByDate,
      totalTests: attempts.length,
      totalPracticeSessions: practiceSessions.length,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to load analytics' }, { status: 500 });
  }
}
