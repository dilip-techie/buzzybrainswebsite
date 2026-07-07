import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');

    if (!testId) {
      return NextResponse.json(
        { error: 'Missing target testId query parameter' },
        { status: 400 }
      );
    }

    const [attempts, assignments, test] = await Promise.all([
      prisma.attempt.findMany({
        where: { testId },
        include: {
          student: { select: { id: true, name: true, email: true, phone: true, grade: true } },
          test: { select: { title: true, subject: true, totalMarks: true } },
          answers: {
            include: {
              question: {
                select: { id: true, content: true, correctAnswer: true, options: true },
              },
            },
          },
        },
        orderBy: { startTime: 'desc' },
      }),
      prisma.testAssignment.findMany({
        where: { testId },
        include: {
          student: { select: { id: true, name: true, email: true, phone: true, grade: true } },
          test: { select: { title: true, subject: true, totalMarks: true } },
        },
        orderBy: { assignedAt: 'desc' },
      }),
      prisma.test.findUnique({
        where: { id: testId },
        select: { title: true, subject: true, totalMarks: true },
      }),
    ]);

    if (!test) {
      return NextResponse.json({ error: 'Target test not found' }, { status: 404 });
    }

    const attemptsByStudentId = new Map(attempts.map((attempt) => [attempt.studentId, attempt]));
    const assignmentRows = assignments.map((assignment) => {
      const attempt = attemptsByStudentId.get(assignment.studentId);

      return {
        id: attempt?.id || `assignment-${assignment.id}`,
        attemptId: attempt?.id || null,
        assignmentId: assignment.id,
        student: assignment.student,
        test: assignment.test,
        status: attempt?.status || 'Not_Started',
        startTime: attempt?.startTime || null,
        endTime: attempt?.endTime || null,
        totalScore: attempt?.totalScore || 0,
        answers: attempt?.answers || [],
        assignedAt: assignment.assignedAt,
        emailSent: assignment.emailSent,
        emailSentAt: assignment.emailSentAt,
      };
    });

    const unassignedAttemptRows = attempts
      .filter((attempt) => !assignments.some((assignment) => assignment.studentId === attempt.studentId))
      .map((attempt) => ({
        ...attempt,
        attemptId: attempt.id,
        assignmentId: null,
        emailSent: false,
        emailSentAt: null,
      }));

    const rows = [...assignmentRows, ...unassignedAttemptRows];
    const completedRows = rows.filter((row) => row.status === 'Submitted' || row.status === 'Evaluated');
    const averageScore =
      completedRows.length > 0
        ? completedRows.reduce((sum, row) => sum + row.totalScore, 0) / completedRows.length
        : 0;

    return NextResponse.json({
      attempts: rows,
      stats: {
        assigned: assignments.length,
        started: attempts.length,
        submitted: completedRows.length,
        averageScore,
        passRate:
          completedRows.length > 0
            ? Math.round(
                (completedRows.filter((row) => row.totalScore >= test.totalMarks * 0.4).length /
                  completedRows.length) *
                  100
              )
            : 0,
      },
    });
  } catch (error) {
    console.error('Failed to fetch test attempts evaluation array:', error);
    return NextResponse.json(
      { error: 'Internal failure processing test attempts retrieval' },
      { status: 500 }
    );
  }
}
