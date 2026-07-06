import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Difficulty } from '@prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const board = searchParams.get('board');
    const grade = searchParams.get('grade');
    const subject = searchParams.get('subject');
    const topic = searchParams.get('topic');
    const difficulty = searchParams.get('difficulty') as Difficulty | null;
    const chapter = searchParams.get('chapter');

    const filter: any = {};

    if (board) filter.board = board;
    if (grade) filter.grade = grade;
    if (subject) filter.subject = subject;
    if (topic) filter.topic = { contains: topic, mode: 'insensitive' };
    if (difficulty && Object.values(Difficulty).includes(difficulty)) {
      filter.difficulty = difficulty;
    }
    if (chapter) {
      const chapters = chapter.split(',').map(c => c.trim()).filter(Boolean);
      if (chapters.length > 0) {
        filter.chapter = { in: chapters };
      }
    }

    const questions = await prisma.question.findMany({
      where: filter,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ questions });
  } catch (error: any) {
    console.error('Fetch questions error:', error);
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { board, grade, subject, topic, difficulty, type, content, options, correctAnswer, tags } = body;

    if (!board || !grade || !subject || !topic || !difficulty || !type || !content) {
      return NextResponse.json({ error: 'Missing required question fields' }, { status: 400 });
    }

    const newQuestion = await prisma.question.create({
      data: {
        board,
        grade,
        subject,
        topic,
        difficulty,
        type,
        content,
        options: options || null,
        correctAnswer: correctAnswer || null,
        tags: Array.isArray(tags) ? tags : [],
      },
    });

    return NextResponse.json({ message: 'Question created successfully', question: newQuestion }, { status: 201 });
  } catch (error: any) {
    console.error('Create question error:', error);
    return NextResponse.json({ error: 'Failed to create question' }, { status: 500 });
  }
}
