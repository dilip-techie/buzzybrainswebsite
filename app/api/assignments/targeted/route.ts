import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { Role } from '@prisma/client';
import { sendTestMagicLink } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    if (session.user.role !== Role.Admin && session.user.role !== Role.Teacher) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
    }

    const body = await request.json();
    const { testId, studentIds, batchId } = body;

    if (!testId || !studentIds || !Array.isArray(studentIds) || studentIds.length === 0) {
      return NextResponse.json({ error: 'Missing required fields or empty student list' }, { status: 400 });
    }

    // Verify test exists
    const test = await prisma.test.findUnique({
      where: { id: testId },
    });

    if (!test) {
      return NextResponse.json({ error: 'Test not found' }, { status: 404 });
    }

    let successCount = 0;
    let failCount = 0;

    for (const studentId of studentIds) {
      try {
        // Upsert assignment to ensure they can take the test
        const assignment = await prisma.testAssignment.upsert({
          where: {
            testId_studentId: { testId, studentId },
          },
          update: { assignedAt: new Date(), emailSent: false },
          create: { testId, studentId },
        });

        const student = await prisma.user.findUnique({ where: { id: studentId } });
        if (student && student.email) {
          await sendTestMagicLink({
            to: student.email,
            studentName: student.name,
            studentEmail: student.email,
            testTitle: test.title,
            testAssignmentId: assignment.id,
            magicLink: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/login`,
            durationMins: test.durationMins,
            totalMarks: test.totalMarks,
          });

          await prisma.testAssignment.update({
            where: { testId_studentId: { testId, studentId } },
            data: { emailSent: true, emailSentAt: new Date() },
          });
        }
        successCount++;
      } catch (err) {
        console.error(`Failed to assign test to student ${studentId}:`, err);
        failCount++;
      }
    }

    // Log the targeted dispatch if it came from a batch selection context
    if (batchId) {
      await prisma.batchTestDispatch.create({
        data: {
          batchId,
          testId,
          totalSent: successCount,
          totalFailed: failCount,
        },
      });
    }

    return NextResponse.json({
      message: 'Targeted dispatch completed',
      successCount,
      failCount,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Targeted dispatch error:', error);
    return NextResponse.json({ error: 'Internal server error during targeted dispatch' }, { status: 500 });
  }
}
