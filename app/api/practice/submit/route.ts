import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, grade, subject, chapter, questionsAttempted, correctCount, totalQuestions } = body;

    if (!userId || !grade || !subject || !chapter) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const session = await prisma.practiceSession.create({
      data: { userId, grade, subject, chapter, questionsAttempted, correctCount, totalQuestions },
    });

    return NextResponse.json({ session });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to save practice session' }, { status: 500 });
  }
}
