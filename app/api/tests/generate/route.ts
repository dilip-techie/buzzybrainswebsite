import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { QuestionType, TestStatus, Difficulty } from '@prisma/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      board,
      grade,
      subject,
      durationMins,
      createdById,
      criteria,
    } = body;

    if (!title || !board || !grade || !subject || !createdById || !criteria) {
      return NextResponse.json(
        { error: 'Missing required fields for test generation engine' },
        { status: 400 }
      );
    }

    const mcqCount = Number(criteria.mcqCount) || 0;
    const shortCount = Number(criteria.shortCount) || 0;
    const longCount = Number(criteria.longCount) || 0;

    const marksPerMcq = Number(criteria.marksPerMcq) || 1;
    const marksPerShort = Number(criteria.marksPerShort) || 3;
    const marksPerLong = Number(criteria.marksPerLong) || 5;

    const difficultyFilter = criteria.difficulty as Difficulty | undefined;
    const topicFilter = criteria.topic as string | undefined;

    // Base filter for candidate questions
    const baseFilter: any = {
      board,
      grade,
      subject,
    };

    if (difficultyFilter && Object.values(Difficulty).includes(difficultyFilter)) {
      baseFilter.difficulty = difficultyFilter;
    }
    if (topicFilter) {
      baseFilter.topic = { contains: topicFilter, mode: 'insensitive' };
    }

    // Fetch candidate pools
    const candidateMcqs = await prisma.question.findMany({
      where: { ...baseFilter, type: QuestionType.MCQ },
    });

    const candidateShorts = await prisma.question.findMany({
      where: { ...baseFilter, type: QuestionType.Short },
    });

    const candidateLongs = await prisma.question.findMany({
      where: { ...baseFilter, type: QuestionType.Long },
    });

    // Check availability
    if (candidateMcqs.length < mcqCount) {
      return NextResponse.json(
        {
          error: `Insufficient MCQ questions available. Requested: ${mcqCount}, Found: ${candidateMcqs.length}`,
        },
        { status: 422 }
      );
    }
    if (candidateShorts.length < shortCount) {
      return NextResponse.json(
        {
          error: `Insufficient Short Answer questions available. Requested: ${shortCount}, Found: ${candidateShorts.length}`,
        },
        { status: 422 }
      );
    }
    if (candidateLongs.length < longCount) {
      return NextResponse.json(
        {
          error: `Insufficient Long Answer questions available. Requested: ${longCount}, Found: ${candidateLongs.length}`,
        },
        { status: 422 }
      );
    }

    // Fisher-Yates shuffle algorithm helper
    const shuffleArray = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const selectedMcqs = shuffleArray(candidateMcqs).slice(0, mcqCount);
    const selectedShorts = shuffleArray(candidateShorts).slice(0, shortCount);
    const selectedLongs = shuffleArray(candidateLongs).slice(0, longCount);

    const totalMarks =
      selectedMcqs.length * marksPerMcq +
      selectedShorts.length * marksPerShort +
      selectedLongs.length * marksPerLong;

    // Create the test record
    const newTest = await prisma.test.create({
      data: {
        title,
        board,
        grade,
        subject,
        durationMins: Number(durationMins) || 60,
        totalMarks,
        createdById,
        status: TestStatus.Published, // Publish instantly for auto-generator
      },
    });

    // Combine selected questions and assign ordering
    const finalQuestionsMappings: any[] = [];
    let orderIndex = 1;

    for (const q of selectedMcqs) {
      finalQuestionsMappings.push({
        testId: newTest.id,
        questionId: q.id,
        orderIndex: orderIndex++,
        marks: marksPerMcq,
      });
    }

    for (const q of selectedShorts) {
      finalQuestionsMappings.push({
        testId: newTest.id,
        questionId: q.id,
        orderIndex: orderIndex++,
        marks: marksPerShort,
      });
    }

    for (const q of selectedLongs) {
      finalQuestionsMappings.push({
        testId: newTest.id,
        questionId: q.id,
        orderIndex: orderIndex++,
        marks: marksPerLong,
      });
    }

    // Multi-insert test questions
    await prisma.testQuestion.createMany({
      data: finalQuestionsMappings,
    });

    // Fetch generated test complete details
    const fullyGeneratedTest = await prisma.test.findUnique({
      where: { id: newTest.id },
      include: {
        questions: {
          include: {
            question: true,
          },
          orderBy: { orderIndex: 'asc' },
        },
      },
    });

    return NextResponse.json(
      {
        message: 'Test successfully auto-generated',
        test: fullyGeneratedTest,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Test generation engine error:', error);
    return NextResponse.json(
      { error: 'Failed to execute test generation engine' },
      { status: 500 }
    );
  }
}
