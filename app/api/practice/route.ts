import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const grade = searchParams.get('grade');
  const subject = searchParams.get('subject');
  const chapter = searchParams.get('chapter');
  const difficulty = searchParams.get('difficulty');
  const limit = parseInt(searchParams.get('limit') || '15', 10);

  try {
    const where: any = { type: 'MCQ' };
    if (grade) where.grade = grade;
    if (subject) where.subject = subject;
    if (chapter) where.chapter = chapter;
    if (difficulty && difficulty !== 'All') where.difficulty = difficulty;

    // If fetching chapter list for a grade+subject, return distinct chapters
    if (searchParams.get('listChapters') === '1') {
      const questions = await prisma.question.findMany({
        where: { grade: grade || undefined, subject: subject || undefined, type: 'MCQ' },
        select: { chapter: true, difficulty: true },
        distinct: ['chapter'],
      });
      const chapters = questions
        .filter((q) => q.chapter)
        .map((q) => q.chapter as string);
      return NextResponse.json({ chapters });
    }

    const allMatching = await prisma.question.findMany({ where, select: { id: true } });
    // Shuffle and take `limit`
    const shuffled = allMatching.sort(() => Math.random() - 0.5).slice(0, limit);
    const ids = shuffled.map((q) => q.id);

    const questions = await prisma.question.findMany({
      where: { id: { in: ids } },
      select: { id: true, content: true, options: true, correctAnswer: true, difficulty: true, chapter: true, subject: true, grade: true, topic: true },
    });

    return NextResponse.json({ questions, total: allMatching.length });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch practice questions' }, { status: 500 });
  }
}
