import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const { id } = await params;
    const requesterRole = (session.user as any).role;
    const targetUserId = id;

    const user = await prisma.user.findUnique({
      where: { id: targetUserId },
      select: {
        id: true,
        name: true,
        grade: true,
        board: true,
        role: true,
        // Only fetch sensitive fields if admin/teacher or the user themselves
        email: requesterRole === Role.Admin || requesterRole === Role.Teacher || session.user.id === targetUserId,
        phone: requesterRole === Role.Admin || requesterRole === Role.Teacher || session.user.id === targetUserId,
        createdAt: true,
        attempts: {
          where: { status: 'Evaluated' },
          select: {
            id: true,
            totalScore: true,
            endTime: true,
            test: {
              select: { title: true, subject: true, totalMarks: true }
            }
          },
          orderBy: { endTime: 'desc' },
          take: 5
        },
        batchEnrollments: {
          select: {
            batch: { select: { name: true } }
          }
        }
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Calculate basic stats for profile
    const totalAttempts = user.attempts.length;
    let avgScorePercent = 0;
    if (totalAttempts > 0) {
      const totalEarned = user.attempts.reduce((sum, a) => sum + (a.totalScore || 0), 0);
      const totalMax = user.attempts.reduce((sum, a) => sum + (a.test.totalMarks || 1), 0);
      avgScorePercent = Math.round((totalEarned / totalMax) * 100);
    }

    return NextResponse.json({
      profile: {
        id: user.id,
        name: user.name,
        role: user.role,
        grade: user.grade,
        board: user.board,
        email: user.email ? user.email : undefined,
        phone: user.phone ? user.phone : undefined,
        joinedAt: user.createdAt,
        stats: {
          totalEvaluatedTests: totalAttempts,
          averageScorePercent: avgScorePercent,
        },
        recentActivity: user.attempts.map(a => ({
          ...a,
          maxScore: a.test.totalMarks,
          submittedAt: a.endTime,
        })),
        batches: user.batchEnrollments.map(e => e.batch.name)
      }
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
