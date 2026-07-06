import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const grade = searchParams.get('grade');

    if (!grade) {
      return NextResponse.json({ error: 'grade is required' }, { status: 400 });
    }

    // Get distinct subjects + count per difficulty for this grade
    const questions = await prisma.question.groupBy({
      by: ['subject', 'difficulty'],
      where: { grade, type: 'MCQ' },
      _count: { id: true },
    });

    // Build a map: subject -> { Easy: n, Medium: n, Hard: n, Olympiad: n }
    const subjectMap: Record<string, Record<string, number>> = {};
    for (const row of questions) {
      if (!subjectMap[row.subject]) {
        subjectMap[row.subject] = { Easy: 0, Medium: 0, Hard: 0, Olympiad: 0 };
      }
      subjectMap[row.subject][row.difficulty] = row._count.id;
    }

    const subjects = Object.entries(subjectMap).map(([name, counts]) => ({
      name,
      total: Object.values(counts).reduce((a, b) => a + b, 0),
      counts,
    }));

    return NextResponse.json({ subjects });
  } catch (error: any) {
    console.error('Fetch subjects error:', error);
    return NextResponse.json({ error: 'Failed to fetch subjects' }, { status: 500 });
  }
}
