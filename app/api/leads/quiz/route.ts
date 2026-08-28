import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const { name, email, grade, quizType, score, total } = await req.json();

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (typeof score !== 'number' || typeof total !== 'number' || score < 0 || score > total) {
    return NextResponse.json({ error: 'Invalid score.' }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanGrade = typeof grade === 'string' ? grade.trim().slice(0, 20) : null;
  const cleanQuizType = typeof quizType === 'string' ? quizType.trim().slice(0, 60) : 'quiz';

  try {
    await prisma.lead.create({
      data: {
        name: cleanName,
        email: cleanEmail,
        grade: cleanGrade,
        program: cleanQuizType,
        source: 'foundation-maths-quiz',
        quizScore: score,
        quizTotal: total,
      },
    });
  } catch (error) {
    console.error('Quiz lead save error:', error);
    // Don't block the student from seeing their own score on a DB hiccup --
    // the result is computed client-side regardless of whether this save
    // succeeds, same resilience pattern as the study-planner lead route.
    return NextResponse.json({ success: true, saved: false });
  }

  return NextResponse.json({ success: true, saved: true });
}
