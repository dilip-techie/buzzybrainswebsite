import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendDemoLeadNotification } from '@/lib/mailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/; // 10-digit Indian mobile number

// Short lead form for the batches page: name, mobile, grade and the batch the
// visitor wants. Email is optional here (a lighter form converts better), but
// the leads table requires one, so a clearly-marked placeholder is stored.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const { name, phone, grade, batch, email, source } = body ?? {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }
  const cleanPhone = typeof phone === 'string' ? phone.replace(/[^0-9]/g, '').slice(-10) : '';
  if (!PHONE_RE.test(cleanPhone)) {
    return NextResponse.json({ error: 'Please enter a valid 10-digit mobile number.' }, { status: 400 });
  }
  if (!grade || typeof grade !== 'string') {
    return NextResponse.json({ error: 'Please select a grade.' }, { status: 400 });
  }
  if (!batch || typeof batch !== 'string') {
    return NextResponse.json({ error: 'Please choose a batch.' }, { status: 400 });
  }
  const hasEmail = typeof email === 'string' && email.trim() !== '';
  if (hasEmail && !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Please enter a valid email address, or leave it blank.' }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = hasEmail ? email.trim().toLowerCase() : `${cleanPhone}@no-email.buzzybrainsacademy.com`;
  const cleanSource = typeof source === 'string' && source.trim() ? source.trim() : 'batches-page';

  let dbSaved = false;
  try {
    await prisma.lead.create({
      data: { name: cleanName, email: cleanEmail, phone: cleanPhone, grade, program: batch, source: cleanSource },
    });
    dbSaved = true;
  } catch (error) {
    console.error('Batch lead save error:', error);
  }

  const emailResult = await sendDemoLeadNotification({
    studentName: cleanName,
    parentName: cleanName,
    grade,
    phone: cleanPhone,
    email: hasEmail ? cleanEmail : 'Not provided',
    program: batch,
    source: cleanSource,
  });

  if (!dbSaved && !emailResult.success) {
    return NextResponse.json(
      { error: "We couldn't save your request right now. Please try WhatsApp or call us instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
