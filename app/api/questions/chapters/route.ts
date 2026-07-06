import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const grade = searchParams.get('grade');
    const subject = searchParams.get('subject');

    if (!grade || !subject) {
      return NextResponse.json(
        { error: 'grade and subject are required' },
        { status: 400 }
      );
    }

    // Group by chapter + difficulty to get per-chapter per-difficulty counts
    const rows = await prisma.question.groupBy({
      by: ['chapter', 'difficulty'],
      where: { grade, subject, type: 'MCQ' },
      _count: { id: true },
    });

    // Build map: chapter -> { Easy: n, Medium: n, Hard: n, Olympiad: n }
    const chapterMap: Record<string, Record<string, number>> = {};
    for (const row of rows) {
      const ch = row.chapter || 'Uncategorized';
      if (!chapterMap[ch]) {
        chapterMap[ch] = { Easy: 0, Medium: 0, Hard: 0, Olympiad: 0 };
      }
      chapterMap[ch][row.difficulty] = row._count.id;
    }

    const chapters = Object.entries(chapterMap)
      .map(([name, counts]) => ({
        name,
        total: Object.values(counts).reduce((a, b) => a + b, 0),
        counts,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({ chapters });
  } catch (error: any) {
    console.error('Fetch chapters error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chapters' },
      { status: 500 }
    );
  }
}
