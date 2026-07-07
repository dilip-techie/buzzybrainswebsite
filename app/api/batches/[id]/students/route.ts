import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { Role } from '@prisma/client';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    if (session.user.role !== Role.Admin && session.user.role !== Role.Teacher) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
    }

    const { id: batchId } = await params;

    const enrollments = await prisma.batchEnrollment.findMany({
      where: { batchId },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            grade: true,
            board: true,
          },
        },
      },
      orderBy: {
        student: { name: 'asc' },
      },
    });

    const students = enrollments.map(e => e.student);

    return NextResponse.json({ students }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch batch students error:', error);
    return NextResponse.json({ error: 'Failed to fetch batch students' }, { status: 500 });
  }
}
