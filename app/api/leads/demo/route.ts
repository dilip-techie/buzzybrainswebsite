import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendDemoLeadNotification } from '@/lib/mailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/; // 10-digit Indian mobile number

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { studentName, parentName, grade, school, phone, email, program, source } = body ?? {};

  if (!studentName || typeof studentName !== 'string' || studentName.trim().length < 2) {
    return NextResponse.json({ error: "Please enter the student's name." }, { status: 400 });
  }
  if (!parentName || typeof parentName !== 'string' || parentName.trim().length < 2) {
    return NextResponse.json({ error: "Please enter the parent's name." }, { status: 400 });
  }
  if (!grade || typeof grade !== 'string') {
    return NextResponse.json({ error: 'Please select a grade.' }, { status: 400 });
  }
  if (!program || typeof program !== 'string') {
    return NextResponse.json({ error: 'Please select a program.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  const cleanPhone = typeof phone === 'string' ? phone.replace(/[^0-9]/g, '').slice(-10) : '';
  if (!PHONE_RE.test(cleanPhone)) {
    return NextResponse.json({ error: 'Please enter a valid 10-digit mobile number.' }, { status: 400 });
  }

  const cleanStudentName = studentName.trim();
  const cleanParentName = parentName.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanSchool = typeof school === 'string' ? school.trim() : undefined;
  const cleanSource = typeof source === 'string' && source.trim() ? source.trim() : 'homepage';

  let dbSaved = false;
  try {
    await prisma.lead.create({
      data: {
        name: cleanParentName,
        studentName: cleanStudentName,
        email: cleanEmail,
        phone: cleanPhone,
        grade,
        school: cleanSchool,
        program,
        source: cleanSource,
      },
    });
    dbSaved = true;
  } catch (error) {
    console.error('Lead save error:', error);
  }

  const emailResult = await sendDemoLeadNotification({
    studentName: cleanStudentName,
    parentName: cleanParentName,
    grade,
    school: cleanSchool,
    phone: cleanPhone,
    email: cleanEmail,
    program,
    source: cleanSource,
  });

  if (!dbSaved && !emailResult.success) {
    return NextResponse.json(
      { error: "We couldn't save your request right now. Please try WhatsApp or call us instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, dbSaved, emailSent: emailResult.success });
}
