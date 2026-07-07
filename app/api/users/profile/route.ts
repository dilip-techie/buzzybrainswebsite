import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const userId = new URL(req.url).searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, role: true, grade: true, board: true, targetExam: true, createdAt: true },
  });

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const [practiceCount, attemptCount, bookmarkCount] = await Promise.all([
    prisma.practiceSession.count({ where: { userId } }),
    prisma.attempt.count({ where: { studentId: userId, status: 'Submitted' } }),
    prisma.bookmarkedQuestion.count({ where: { userId } }),
  ]);

  const practiceSessions = await prisma.practiceSession.findMany({
    where: { userId },
    select: { correctCount: true, totalQuestions: true },
  });

  const totalQ = practiceSessions.reduce((s, p) => s + p.totalQuestions, 0);
  const totalC = practiceSessions.reduce((s, p) => s + p.correctCount, 0);
  const practiceAccuracy = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

  return NextResponse.json({ user, stats: { practiceCount, attemptCount, bookmarkCount, practiceAccuracy, totalQuestionsAttempted: totalQ } });
}

export async function PUT(req: NextRequest) {
  const { userId, grade, board, targetExam, name } = await req.json();
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

  const user = await prisma.user.update({
    where: { id: userId },
    data: { grade, board, targetExam, ...(name ? { name } : {}) },
    select: { id: true, name: true, grade: true, board: true, targetExam: true },
  });

  return NextResponse.json({ user });
}
