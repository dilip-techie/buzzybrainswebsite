import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { questions } = body;

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json({ error: 'Expected a non-empty array of questions' }, { status: 400 });
    }

    // Validate and map questions
    const validQuestions = questions.map((q: any) => ({
      board: q.board || 'CBSE',
      grade: q.grade || '10',
      subject: q.subject || 'General',
      chapter: q.chapter || null,
      topic: q.topic || 'General',
      difficulty: q.difficulty || 'Medium',
      type: q.type || 'MCQ',
      content: q.content,
      options: q.options || null,
      correctAnswer: q.correctAnswer || null,
      explanation: q.explanation || null,
      tags: Array.isArray(q.tags) ? q.tags : [],
    })).filter((q: any) => q.content);

    const created = await prisma.question.createMany({
      data: validQuestions,
      skipDuplicates: true,
    });

    return NextResponse.json({ message: `Successfully imported ${created.count} questions` }, { status: 201 });
  } catch (error: any) {
    console.error('Bulk upload error:', error);
    return NextResponse.json({ error: 'Failed to perform bulk upload' }, { status: 500 });
  }
}
