import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendTestMagicLink } from '@/lib/mailer';
import { generateStudentPassword } from '@/lib/studentCredentials';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { testId, grade, board } = body;

    if (!testId || !grade) {
      return NextResponse.json(
        { error: 'Missing required parameters: testId and grade mapping' },
        { status: 400 }
      );
    }

    // Verify test record exists
    const test = await prisma.test.findUnique({
      where: { id: testId },
      select: { id: true, title: true, subject: true, grade: true, status: true, durationMins: true, totalMarks: true },
    });

    if (!test) {
      return NextResponse.json({ error: 'Target module test record not found' }, { status: 404 });
    }

    // Prepare match query filter
    const whereClause: any = {
      role: 'Student',
      grade,
    };
    if (board) {
      whereClause.board = board;
    }

    // Retrieve target matching student pool
    const students = await prisma.user.findMany({
      where: whereClause,
      select: { id: true, name: true, email: true, phone: true },
    });

    if (students.length === 0) {
      return NextResponse.json(
        { error: `No registered student accounts found matching Grade ${grade} ${board ? `(${board})` : ''}` },
        { status: 404 }
      );
    }

    // Determine absolute dynamic origin hostname
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    const dispatchResults = [];

    for (const student of students) {
      // Find or create assignment tracker node
      let assignment = await prisma.testAssignment.findFirst({
        where: { testId, studentId: student.id },
      });

      if (!assignment) {
        assignment = await prisma.testAssignment.create({
          data: {
            testId,
            studentId: student.id,
          },
        });
      }

      // Compile magic token redirect URI chain
      const attemptTargetUrl = `/tests/${testId}/attempt`;
      const magicLink = `${baseUrl}/login?email=${encodeURIComponent(student.email)}&redirect=${encodeURIComponent(attemptTargetUrl)}`;

      // Execute transport mail layer
      const mailRes = await sendTestMagicLink({
        to: student.email,
        studentName: student.name,
        studentEmail: student.email,
        testTitle: test.title,
        testAssignmentId: assignment.id,
        magicLink,
        generatedPassword: generateStudentPassword(student.name, student.phone),
        durationMins: test.durationMins,
        totalMarks: test.totalMarks,
      });

      // Commit live status audit timestamps
      const updatedAssignment = await prisma.testAssignment.update({
        where: { id: assignment.id },
        data: {
          emailSent: true,
          emailSentAt: new Date(),
        },
      });

      dispatchResults.push({
        studentId: student.id,
        studentName: student.name,
        email: student.email,
        assignmentId: updatedAssignment.id,
        status: 'Dispatched successfully',
        messageId: mailRes.messageId,
      });
    }

    return NextResponse.json({
      message: `Bulk cohort dispatch successfully delivered to ${dispatchResults.length} student(s) in Grade ${grade}.`,
      testTitle: test.title,
      dispatchedCount: dispatchResults.length,
      results: dispatchResults,
    });
  } catch (error: any) {
    console.error('Grade Dispatch Layer Internal Breakdown:', error);
    return NextResponse.json(
      { error: 'System failure processing bulk grade dispatch allocation pipeline' },
      { status: 500 }
    );
  }
}
