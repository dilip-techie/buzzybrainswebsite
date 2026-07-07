import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { AttemptStatus } from '@prisma/client';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const studentId = resolvedParams.id;

    // Fetch all finalized attempts
    const attempts = await prisma.attempt.findMany({
      where: {
        studentId,
        status: {
          in: [AttemptStatus.Submitted, AttemptStatus.Evaluated],
        },
      },
      include: {
        test: {
          select: {
            title: true,
            subject: true,
            totalMarks: true,
          },
        },
      },
      orderBy: { startTime: 'asc' },
    });

    const totalAttempts = attempts.length;

    if (totalAttempts === 0) {
      return NextResponse.json({
        metrics: {
          totalAttempts: 0,
          averagePercentage: 0,
          subjectWiseBreakdown: {},
          performanceTrends: [],
        },
      });
    }

    let sumPercentage = 0;
    const subjectStats: Record<string, { earned: number; total: number; count: number }> = {};
    const performanceTrends: any[] = [];

    for (const att of attempts) {
      const { title, subject, totalMarks } = att.test;
      const score = att.totalScore || 0;
      const percentage = totalMarks > 0 ? (score / totalMarks) * 100 : 0;

      sumPercentage += percentage;

      // Track subject-wise performance aggregates
      if (!subjectStats[subject]) {
        subjectStats[subject] = { earned: 0, total: 0, count: 0 };
      }
      subjectStats[subject].earned += score;
      subjectStats[subject].total += totalMarks;
      subjectStats[subject].count += 1;

      // Trend point
      performanceTrends.push({
        attemptId: att.id,
        testTitle: title,
        subject,
        score,
        totalMarks,
        percentage: Number(percentage.toFixed(2)),
        date: att.startTime.toISOString(),
      });
    }

    const averagePercentage = Number((sumPercentage / totalAttempts).toFixed(2));

    // Calculate final clean breakdown percentages
    const subjectWiseBreakdown: Record<string, { averageScorePercent: number; count: number }> = {};
    for (const [subj, data] of Object.entries(subjectStats)) {
      const avgPct = data.total > 0 ? (data.earned / data.total) * 100 : 0;
      subjectWiseBreakdown[subj] = {
        averageScorePercent: Number(avgPct.toFixed(2)),
        count: data.count,
      };
    }

    return NextResponse.json({
      metrics: {
        totalAttempts,
        averagePercentage,
        subjectWiseBreakdown,
        performanceTrends,
      },
    });
  } catch (error: any) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to aggregate student analytics metrics' },
      { status: 500 }
    );
  }
}
