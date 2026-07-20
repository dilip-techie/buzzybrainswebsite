import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { sendStudyPlannerPdf } from '../../../../lib/mailer';
import { renderStudyPlannerPdf } from '../../../../lib/pdf/renderStudyPlanner';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/; // 10-digit Indian mobile number

export async function POST(req: NextRequest) {
  const { name, email, phone } = await req.json();

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  const cleanPhone = typeof phone === 'string' ? phone.replace(/[^0-9]/g, '').slice(-10) : '';
  if (!PHONE_RE.test(cleanPhone)) {
    return NextResponse.json({ error: 'Please enter a valid 10-digit mobile number.' }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await renderStudyPlannerPdf();
  } catch (error) {
    console.error('Study planner PDF generation error:', error);
    return NextResponse.json({ error: 'Could not generate the planner right now. Please try again shortly.' }, { status: 500 });
  }

  try {
    await prisma.lead.create({
      data: { name: cleanName, email: cleanEmail, phone: cleanPhone, source: 'board-exam-study-planner' },
    });
  } catch (error) {
    console.error('Lead save error:', error);
    // Don't block PDF delivery on a DB hiccup — the visitor's request is still honored below.
  }

  const emailResult = await sendStudyPlannerPdf({ to: cleanEmail, name: cleanName, pdfBuffer });
  if (emailResult.success) {
    try {
      await prisma.lead.updateMany({ where: { email: cleanEmail, source: 'board-exam-study-planner' }, data: { pdfSentAt: new Date() } });
    } catch (error) {
      console.error('Lead pdfSentAt update error:', error);
    }
  }

  return NextResponse.json({
    success: true,
    emailSent: emailResult.success,
    pdfBase64: pdfBuffer.toString('base64'),
  });
}
