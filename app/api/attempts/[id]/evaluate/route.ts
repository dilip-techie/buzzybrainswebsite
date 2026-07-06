import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { AttemptStatus } from '@prisma/client';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const attemptId = resolvedParams.id;
    const body = await request.json();
    const { evaluatedById, evaluations } = body;

    if (!evaluatedById || !Array.isArray(evaluations)) {
      return NextResponse.json(
        { error: 'Missing evaluatedById or invalid evaluations array payload' },
        { status: 400 }
      );
    }

    // Verify attempt exists
    const attempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
      include: { answers: true },
    });

    if (!attempt) {
      return NextResponse.json({ error: 'Attempt not found' }, { status: 404 });
    }

    // Process individual answer scoring updates inside a transaction for integrity
    await prisma.$transaction(async (tx) => {
      for (const evalItem of evaluations) {
        const { answerId, marksAwarded, isCorrect } = evalItem;

        if (!answerId || marksAwarded === undefined) continue;

        await tx.attemptAnswer.update({
          where: { id: answerId },
          data: {
            marksAwarded: Number(marksAwarded),
            isCorrect: typeof isCorrect === 'boolean' ? isCorrect : undefined,
            evaluatedById,
          },
        });
      }

      // Compute total final updated marks summation
      const updatedAnswers = await tx.attemptAnswer.findMany({
        where: { attemptId },
      });

      const totalFinalScore = updatedAnswers.reduce(
        (sum, a) => sum + (a.marksAwarded || 0),
        0
      );

      // Commit finalized attempt marks
      await tx.attempt.update({
        where: { id: attemptId },
        data: {
          totalScore: totalFinalScore,
          status: AttemptStatus.Evaluated,
        },
      });
    });

    const finalizedAttempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
      select: {
        id: true,
        totalScore: true,
        status: true,
      },
    });

    return NextResponse.json(
      {
        message: 'Evaluation scores saved successfully',
        attempt: finalizedAttempt,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Evaluate attempt error:', error);
    return NextResponse.json(
      { error: 'Failed to record manual teacher evaluations' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const attemptId = resolvedParams.id;

    const attempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
      include: {
        test: {
          select: { title: true, subject: true, totalMarks: true, grade: true },
        },
        answers: {
          include: {
            question: {
              select: { content: true, options: true, correctAnswer: true },
            },
          },
        },
      },
    });

    if (!attempt) {
      return NextResponse.json({ error: 'Attempt details not found' }, { status: 404 });
    }

    // Fetch peer leaderboard/rankings for this specific testId to show real comparison rankings
    const peerAttempts = await prisma.attempt.findMany({
      where: {
        testId: attempt.testId,
        status: { in: ['Submitted', 'Evaluated'] },
      },
      include: {
        student: { select: { name: true } },
      },
      orderBy: { totalScore: 'desc' },
    });

    // Map peer rankings with rank positions
    const rankings = peerAttempts.map((pa, idx) => ({
      rank: idx + 1,
      studentName: pa.student.name,
      score: pa.totalScore,
      isCurrentStudent: pa.studentId === attempt.studentId,
    }));

    return NextResponse.json({ attempt, rankings }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch review error:', error);
    return NextResponse.json({ error: 'Failed to retrieve detailed evaluation review data' }, { status: 500 });
  }
}
