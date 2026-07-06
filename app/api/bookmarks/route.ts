import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const userId = new URL(req.url).searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

  const bookmarks = await prisma.bookmarkedQuestion.findMany({
    where: { userId },
    include: { question: { select: { id: true, content: true, options: true, correctAnswer: true, difficulty: true, subject: true, chapter: true, grade: true } } },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ bookmarks });
}

export async function POST(req: NextRequest) {
  const { userId, questionId } = await req.json();
  if (!userId || !questionId) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  try {
    const bookmark = await prisma.bookmarkedQuestion.create({ data: { userId, questionId } });
    return NextResponse.json({ bookmark });
  } catch {
    return NextResponse.json({ error: 'Already bookmarked or invalid ids' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  const { userId, questionId } = await req.json();
  await prisma.bookmarkedQuestion.deleteMany({ where: { userId, questionId } });
  return NextResponse.json({ success: true });
}
