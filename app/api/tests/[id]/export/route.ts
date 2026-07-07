import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const testId = resolvedParams.id;

    const test = await prisma.test.findUnique({
      where: { id: testId },
      include: {
        createdBy: {
          select: { name: true, email: true },
        },
        questions: {
          include: {
            question: true,
          },
          orderBy: { orderIndex: 'asc' },
        },
      },
    });

    if (!test) {
      return NextResponse.json({ error: 'Test not found' }, { status: 404 });
    }

    // Format suitable for easy clean printing
    const printableData = {
      header: {
        title: test.title,
        board: test.board,
        grade: `Standard ${test.grade}`,
        subject: test.subject,
        duration: `${test.durationMins} Minutes`,
        totalMarks: test.totalMarks,
        institute: 'EdTech Institute of Excellence',
        examiner: test.createdBy.name || 'Admin',
      },
      questionsList: test.questions.map((tq) => ({
        questionNumber: tq.orderIndex,
        content: tq.question.content,
        type: tq.question.type,
        marks: tq.marks,
        options: tq.question.options,
      })),
      answerKey: test.questions.map((tq) => ({
        questionNumber: tq.orderIndex,
        correctAnswer: tq.question.correctAnswer || 'Subjective Evaluation Required',
      })),
    };

    return NextResponse.json({ printableExport: printableData });
  } catch (error: any) {
    console.error('Export test error:', error);
    return NextResponse.json({ error: 'Failed to generate test export' }, { status: 500 });
  }
}
