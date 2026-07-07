import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: batchId } = await params;
    const { studentIds } = await request.json() as { studentIds: string[] };

    if (!studentIds || studentIds.length === 0) {
      return NextResponse.json({ error: 'Provide studentIds array' }, { status: 400 });
    }

    const batch = await prisma.batch.findUnique({ where: { id: batchId } });
    if (!batch) return NextResponse.json({ error: 'Batch not found' }, { status: 404 });

    let enrolled = 0;
    for (const sid of studentIds) {
      try {
        await prisma.batchEnrollment.create({ data: { batchId, studentId: sid } });
        enrolled++;
      } catch {
        // Duplicate or invalid — skip
      }
    }

    return NextResponse.json({ message: `Enrolled ${enrolled} of ${studentIds.length} students`, enrolled });
  } catch (error: any) {
    console.error('Enroll error:', error);
    return NextResponse.json({ error: 'Failed to enroll students' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: batchId } = await params;
    const { studentId } = await request.json();

    if (!studentId) return NextResponse.json({ error: 'studentId required' }, { status: 400 });

    await prisma.batchEnrollment.deleteMany({ where: { batchId, studentId } });
    return NextResponse.json({ message: 'Student removed from batch' });
  } catch (error: any) {
    console.error('Remove enrollment error:', error);
    return NextResponse.json({ error: 'Failed to remove student' }, { status: 500 });
  }
}
