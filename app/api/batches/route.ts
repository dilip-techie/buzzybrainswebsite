import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const batches = await prisma.batch.findMany({
      include: {
        createdBy: { select: { name: true } },
        _count: { select: { enrollments: true, dispatches: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ batches });
  } catch (error: any) {
    console.error('Fetch batches error:', error);
    return NextResponse.json({ error: 'Failed to fetch batches' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, grade, board, description, inviteCode, createdById } = await request.json();

    if (!name || !grade || !createdById) {
      return NextResponse.json({ error: 'name, grade, and createdById are required' }, { status: 400 });
    }

    const batch = await prisma.batch.create({
      data: {
        name,
        grade,
        board: board || 'CBSE',
        description: description || null,
        inviteCode: inviteCode || null,
        createdById,
      },
    });

    return NextResponse.json({ message: 'Batch created', batch }, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Invite code already in use' }, { status: 409 });
    }
    console.error('Create batch error:', error);
    return NextResponse.json({ error: 'Failed to create batch' }, { status: 500 });
  }
}
