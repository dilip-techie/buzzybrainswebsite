import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { AttemptStatus, QuestionType } from '@prisma/client';
import { getServerSession } from 'next-auth';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Authentication required to submit an attempt' }, { status: 401 });
    }

    const body = await request.json();
    const { attemptId, answers, tabSwitchCount } = body;

    if (!attemptId || !Array.isArray(answers)) {
      return NextResponse.json({ error: 'Missing attemptId or invalid answers payload' }, { status: 400 });
    }

    // Load active attempt along with test questions and correct answers
    const attempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
      include: {
        test: {
          include: {
            questions: {
              include: {
                question: true,
              },
            },
          },
        },
      },
    });

    if (!attempt) {
      return NextResponse.json({ error: 'Attempt not found' }, { status: 404 });
    }

    if (attempt.studentId !== session.user.id) {
      return NextResponse.json({ error: 'You can only submit your own authenticated attempt' }, { status: 403 });
    }

    if (attempt.status !== AttemptStatus.In_Progress) {
      return NextResponse.json({ error: 'Attempt is already submitted or closed' }, { status: 400 });
    }

    const testQuestionsMap = new Map(
      attempt.test.questions.map((tq) => [tq.questionId, tq])
    );

    let totalScore = 0;
    let requiresSubjectiveEvaluation = false;
    const finalAnswerMappings: any[] = [];

    for (const ans of answers) {
      const { questionId, studentAnswer } = ans;
      const tq = testQuestionsMap.get(questionId);

      if (!tq) continue;

      const question = tq.question;
      let isCorrect: boolean | null = null;
      let marksAwarded = 0;

      // Auto-evaluate Multiple-Choice Questions
      if (question.type === QuestionType.MCQ) {
        if (
          studentAnswer &&
          question.correctAnswer &&
          studentAnswer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase()
        ) {
          isCorrect = true;
          marksAwarded = tq.marks;
          totalScore += marksAwarded;
        } else {
          isCorrect = false;
        }
      } else {
        // Short/Long answer subjective questions require manual checking
        requiresSubjectiveEvaluation = true;
      }

      finalAnswerMappings.push({
        attemptId,
        questionId,
        studentAnswer: studentAnswer ? String(studentAnswer) : null,
        isCorrect,
        marksAwarded,
      });
    }

    // Save answer entries
    await prisma.attemptAnswer.createMany({
      data: finalAnswerMappings,
    });

    // Update Attempt completion meta
    const finalStatus = requiresSubjectiveEvaluation
      ? AttemptStatus.Submitted
      : AttemptStatus.Evaluated;

    const updatedAttempt = await prisma.attempt.update({
      where: { id: attemptId },
      data: {
        endTime: new Date(),
        totalScore,
        status: finalStatus,
        tabSwitchCount: typeof tabSwitchCount === 'number' ? tabSwitchCount : 0,
      },
    });

    // Automatically purge the pending assignment record if the test was explicitly dispatched to this candidate
    await prisma.testAssignment.deleteMany({
      where: {
        testId: attempt.testId,
        studentId: attempt.studentId,
      },
    });

    return NextResponse.json({
      message: 'Attempt submitted successfully',
      attemptSummary: {
        attemptId: updatedAttempt.id,
        totalScore: updatedAttempt.totalScore,
        status: updatedAttempt.status,
        requiresSubjectiveEvaluation,
      },
    }, { status: 200 });
  } catch (error: any) {
    console.error('Submit attempt error:', error);
    return NextResponse.json({ error: 'Failed to submit test attempt responses' }, { status: 500 });
  }
}
