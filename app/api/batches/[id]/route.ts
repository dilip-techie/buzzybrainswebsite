import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const batch = await prisma.batch.findUnique({
      where: { id },
      include: {
        createdBy: { select: { name: true, email: true } },
        enrollments: {
          include: {
            student: { select: { id: true, name: true, email: true, phone: true, grade: true, board: true } },
          },
          orderBy: { enrolledAt: 'desc' },
        },
        dispatches: {
          include: { test: { select: { id: true, title: true, subject: true } } },
          orderBy: { dispatchedAt: 'desc' },
        },
        _count: { select: { enrollments: true } },
      },
    });

    if (!batch) return NextResponse.json({ error: 'Batch not found' }, { status: 404 });
    return NextResponse.json({ batch });
  } catch (error: any) {
    console.error('Get batch error:', error);
    return NextResponse.json({ error: 'Failed to get batch' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, description, isActive } = body;

    const batch = await prisma.batch.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    return NextResponse.json({ batch });
  } catch (error: any) {
    console.error('Update batch error:', error);
    return NextResponse.json({ error: 'Failed to update batch' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    // Cascade deletes enrollments + dispatches (students are NOT deleted, just unenrolled)
    await prisma.batch.delete({ where: { id } });
    return NextResponse.json({ message: 'Batch deleted successfully' });
  } catch (error: any) {
    console.error('Delete batch error:', error);
    return NextResponse.json({ error: 'Failed to delete batch' }, { status: 500 });
  }
}
