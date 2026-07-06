import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q')?.trim() || '';
    const grade = searchParams.get('grade')?.trim() || '';
    const unenrolled = searchParams.get('unenrolled') === 'true';

    const where: any = { role: Role.Student };

    if (q) {
      where.name = { contains: q, mode: 'insensitive' };
    }
    if (grade) {
      where.grade = grade;
    }
    if (unenrolled) {
      where.batchEnrollments = { none: {} };
    }

    const students = await prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        grade: true,
        board: true,
        createdAt: true,
        batchEnrollments: {
          select: {
            id: true,
            batch: { select: { id: true, name: true, grade: true } },
          },
        },
      },
      orderBy: { name: 'asc' },
      take: 100,
    });

    return NextResponse.json({ students });
  } catch (error: any) {
    console.error('Failed to fetch students list:', error);
    return NextResponse.json({ error: 'Failed to fetch registered students database' }, { status: 500 });
  }
}
