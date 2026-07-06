import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendTestMagicLink } from '@/lib/mailer';
import { generateStudentPassword } from '@/lib/studentCredentials';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { testId, studentId, studentIds } = body;

    // Build unique targets array supporting both single and bulk payload parameters
    const targets: string[] = [];
    if (studentId) targets.push(studentId);
    if (Array.isArray(studentIds)) {
      studentIds.forEach((id) => {
        if (!targets.includes(id)) targets.push(id);
      });
    }

    if (!testId || targets.length === 0) {
      return NextResponse.json(
        { error: 'Missing required parameters: testId and at least one target student record ID' },
        { status: 400 }
      );
    }

    // Verify test existence
    const test = await prisma.test.findUnique({
      where: { id: testId },
      select: { id: true, title: true, subject: true, grade: true, status: true, durationMins: true, totalMarks: true },
    });

    if (!test) {
      return NextResponse.json({ error: 'Target module test record not found' }, { status: 404 });
    }

    // Fetch targeted student entities
    const students = await prisma.user.findMany({
      where: {
        id: { in: targets },
        role: 'Student',
      },
      select: { id: true, name: true, email: true, phone: true },
    });

    if (students.length === 0) {
      return NextResponse.json(
        { error: 'No valid target student accounts matched the criteria' },
        { status: 404 }
      );
    }

    // Process dispatch pipeline
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    const dispatchResults = [];

    for (const student of students) {
      // Find or create assignment entity record
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

      // Construct magic URL link embedded with context query parameters
      const attemptTargetUrl = `/tests/${testId}/attempt`;
      const magicLink = `${baseUrl}/login?email=${encodeURIComponent(student.email)}&redirect=${encodeURIComponent(attemptTargetUrl)}`;

      // Dispatch mail notification pipeline
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

      // Update state tracking metadata
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
      message: `Test successfully dispatched to ${dispatchResults.length} student candidate(s).`,
      testTitle: test.title,
      dispatchedCount: dispatchResults.length,
      results: dispatchResults,
    });
  } catch (error: any) {
    console.error('Dispatch Engine Operational Error:', error);
    return NextResponse.json(
      { error: 'Internal failure processing test dispatch workflow queue' },
      { status: 500 }
    );
  }
}
