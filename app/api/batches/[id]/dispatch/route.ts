import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendTestMagicLink } from '@/lib/mailer';
import { generateStudentPassword } from '@/lib/studentCredentials';

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: batchId } = await params;
    const { testId } = await request.json();

    if (!testId) return NextResponse.json({ error: 'testId is required' }, { status: 400 });

    const batch = await prisma.batch.findUnique({
      where: { id: batchId },
      include: {
        enrollments: {
          include: { student: { select: { id: true, name: true, email: true, phone: true } } },
        },
      },
    });
    if (!batch) return NextResponse.json({ error: 'Batch not found' }, { status: 404 });

    const test = await prisma.test.findUnique({
      where: { id: testId },
      select: { id: true, title: true, durationMins: true, totalMarks: true },
    });
    if (!test) return NextResponse.json({ error: 'Test not found' }, { status: 404 });

    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    let sent = 0;
    let failed = 0;

    for (const enrollment of batch.enrollments) {
      const student = enrollment.student;
      try {
        // Create assignment
        let assignment = await prisma.testAssignment.findFirst({ where: { testId, studentId: student.id } });
        if (!assignment) {
          assignment = await prisma.testAssignment.create({ data: { testId, studentId: student.id } });
        }

        const magicLink = `${baseUrl}/login?email=${encodeURIComponent(student.email)}&redirect=${encodeURIComponent(`/tests/${testId}/attempt`)}`;

        await sendTestMagicLink({
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

        await prisma.testAssignment.update({
          where: { id: assignment.id },
          data: { emailSent: true, emailSentAt: new Date() },
        });

        sent++;
      } catch (err) {
        console.error(`Failed to dispatch to ${student.email}:`, err);
        failed++;
      }
    }

    // Record dispatch
    await prisma.batchTestDispatch.create({
      data: { batchId, testId, totalSent: sent, totalFailed: failed },
    });

    return NextResponse.json({
      message: `Test "${test.title}" dispatched to batch "${batch.name}": ${sent} sent, ${failed} failed.`,
      sent,
      failed,
    });
  } catch (error: any) {
    console.error('Batch dispatch error:', error);
    return NextResponse.json({ error: 'Failed to dispatch test to batch' }, { status: 500 });
  }
}
