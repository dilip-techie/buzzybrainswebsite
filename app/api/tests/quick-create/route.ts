import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';
import { sendTestNotification } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || (session.user.role !== Role.Admin && session.user.role !== Role.Teacher)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await request.json();
    const { grade, subject, batchId, questionIds, durationMins, expirationBufferMins, title } = body;

    if (!grade || !subject || !batchId || !Array.isArray(questionIds) || questionIds.length === 0 || !durationMins) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify all question IDs exist
    const existing = await prisma.question.findMany({
      where: { id: { in: questionIds } },
      select: { id: true },
    });
    if (existing.length !== questionIds.length) {
      return NextResponse.json({ error: `Some question IDs are invalid. Found ${existing.length} of ${questionIds.length}` }, { status: 400 });
    }

    const bufferMins = expirationBufferMins || 60;
    const expiresAt = new Date(Date.now() + (durationMins + bufferMins) * 60 * 1000);
    const marksPerQ = 5;
    const testTitle = title || `Class ${grade} ${subject} Test`;

    const test = await prisma.test.create({
      data: {
        title: testTitle,
        board: 'CBSE',
        grade,
        subject,
        durationMins,
        totalMarks: questionIds.length * marksPerQ,
        createdById: session.user.id,
        status: 'Published',
        expiresAt,
        questions: {
          create: questionIds.map((qId: string, i: number) => ({
            questionId: qId,
            orderIndex: i,
            marks: marksPerQ,
          })),
        },
      },
    });

    // Fetch batch students and dispatch
    const batch = await prisma.batch.findUnique({
      where: { id: batchId },
      include: { enrollments: { include: { student: { select: { id: true, name: true, email: true } } } } },
    });

    if (!batch || batch.enrollments.length === 0) {
      return NextResponse.json({ message: 'Test created but no students to dispatch to', test, dispatched: 0 });
    }

    let emailsSent = 0;
    let emailsFailed = 0;
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const loginUrl = `${protocol}://${host}/login`;

    for (const enrollment of batch.enrollments) {
      const student = enrollment.student;
      try {
        await prisma.testAssignment.create({ data: { testId: test.id, studentId: student.id } });
        await sendTestNotification({ to: student.email, studentName: student.name, testTitle, subject, durationMins, expiresAt, loginUrl });
        emailsSent++;
      } catch (err) {
        console.error(`Failed to dispatch to ${student.email}:`, err);
        emailsFailed++;
      }
    }

    await prisma.batchTestDispatch.create({
      data: { batchId, testId: test.id, totalSent: emailsSent, totalFailed: emailsFailed },
    });

    return NextResponse.json({ message: `Test created and dispatched to ${emailsSent} students`, test, dispatched: emailsSent, failed: emailsFailed });
  } catch (error: any) {
    console.error('Quick create error:', error);
    return NextResponse.json({ error: 'Failed to create test' }, { status: 500 });
  }
}
