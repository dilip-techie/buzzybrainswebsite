import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { grade, subject, chapters, difficulty, questionCount, durationMins, createdById, title } = await req.json();

    if (!grade || !subject || !createdById) {
      return NextResponse.json({ error: 'grade, subject, and createdById are required' }, { status: 400 });
    }

    const where: any = { grade, subject, type: 'MCQ' };
    if (chapters && chapters.length > 0) where.chapter = { in: chapters };
    if (difficulty && difficulty !== 'Mixed') where.difficulty = difficulty;

    const pool = await prisma.question.findMany({ where, select: { id: true } });
    if (pool.length === 0) {
      return NextResponse.json({ error: 'No questions found for selected filters' }, { status: 404 });
    }

    const count = Math.min(questionCount || 10, pool.length);
    const selected = pool.sort(() => Math.random() - 0.5).slice(0, count);
    const marksPerQ = 5;
    const testTitle = title || `Std ${grade} ${subject} Auto-Generated Test`;

    const test = await prisma.test.create({
      data: {
        title: testTitle,
        board: 'CBSE',
        grade,
        subject,
        durationMins: durationMins || 30,
        totalMarks: count * marksPerQ,
        createdById,
        status: 'Published',
        questions: {
          create: selected.map((q, i) => ({ questionId: q.id, orderIndex: i, marks: marksPerQ })),
        },
      },
    });

    return NextResponse.json({ test });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Auto-generation failed' }, { status: 500 });
  }
}
