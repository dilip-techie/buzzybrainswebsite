import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const userId = new URL(req.url).searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

  // All incorrectly answered questions from formal attempts
  const wrongAnswers = await prisma.attemptAnswer.findMany({
    where: { attempt: { studentId: userId }, isCorrect: false },
    include: {
      question: { select: { id: true, content: true, options: true, correctAnswer: true, difficulty: true, subject: true, chapter: true, grade: true, topic: true } },
    },
    orderBy: { attempt: { endTime: 'desc' } },
    distinct: ['questionId'],
    take: 50,
  });

  return NextResponse.json({ mistakes: wrongAnswers });
}
