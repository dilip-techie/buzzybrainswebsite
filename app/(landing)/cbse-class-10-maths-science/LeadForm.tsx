'use client';

import { useState, type FormEvent } from 'react';
import { PROGRAM_NAME, WHATSAPP_NUMBER } from './constants';

const SLOTS = ['Weekday evening', 'Weekend morning', 'Weekend evening'];

type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

export default function LeadForm() {
  const [student, setStudent] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [slot, setSlot] = useState(SLOTS[0]);
  const [touched, setTouched] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const studentBad = student.trim().length < 2;
  const phoneBad = !/^[6-9]\d{9}$/.test(phone);
  const schoolBad = school.trim().length < 2;
  const bad = (cond: boolean) => (touched && cond ? ' l-err' : '');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (studentBad || phoneBad || schoolBad) return;

    const text = `Hi BuzzyBrains, I'd like to book a free demo class for ${PROGRAM_NAME}.

Student: ${student.trim()}
Parent mobile: ${phone}
School/Area: ${school.trim()}
Preferred slot: ${slot}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp first and synchronously: popup blockers only allow it inside the click handler.
    if (!window.open(url, '_blank', 'noopener,noreferrer')) window.location.href = url;
    setWaUrl(url);

    // Save the lead in the background so it is captured even if the parent never presses Send.
    fetch('/api/leads/batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: student.trim(),
        phone,
        grade: 'Grade 10',
        batch: PROGRAM_NAME,
        source: 'cbse-class-10-landing',
      }),
      keepalive: true,
    }).catch(() => {});

    (window as unknown as { gtag?: Gtag }).gtag?.('event', 'generate_lead', { event_category: 'cbse_class_10_landing' });
  };

  return (
    <div className={`l-form-card${waUrl ? ' l-done' : ''}`} id="book">
      <span className="l-tag">FREE DEMO</span>
      <div className="l-head">
        <h3>Reserve your seat</h3>
        <p className="l-sub">Takes 20 seconds. Our counsellor will call you to confirm a demo slot.</p>
      </div>

      <form noValidate onSubmit={submit}>
        <div className={`l-field${bad(studentBad)}`}>
          <label htmlFor="cbl-student">Student&apos;s name</label>
          <input id="cbl-student" name="student" autoComplete="name" placeholder="e.g. Aarav Sharma" value={student} onChange={(e) => setStudent(e.target.value)} required />
          <div className="l-msg">Please enter the student&apos;s name.</div>
        </div>
        <div className={`l-field${bad(phoneBad)}`}>
          <label htmlFor="cbl-phone">Parent&apos;s mobile number</label>
          <input id="cbl-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="10-digit mobile number" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} required />
          <div className="l-msg">Enter a valid 10-digit mobile number.</div>
        </div>
        <div className={`l-field${bad(schoolBad)}`}>
          <label htmlFor="cbl-school">Current school / area</label>
          <input id="cbl-school" name="school" placeholder="School name or locality" value={school} onChange={(e) => setSchool(e.target.value)} required />
          <div className="l-msg">Please tell us the school or area.</div>
        </div>
        <div className="l-field">
          <label htmlFor="cbl-slot">Preferred demo slot</label>
          <select id="cbl-slot" name="slot" value={slot} onChange={(e) => setSlot(e.target.value)}>
            {SLOTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <button className="l-btn l-btn-wa" type="submit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.3-.5.1-1.2.1-3.7-.9-3.1-1.3-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.2c.1.2.1.3 0 .5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4z" />
          </svg>
          Book Free Demo on WhatsApp
        </button>
        <p className="l-fine">You&apos;ll be taken to WhatsApp to send your details to our counsellor.</p>
      </form>

      <div className="l-success" role="status" aria-live="polite">
        <div className="l-ok">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h3>Almost done! 🎉</h3>
        <p className="l-sub" style={{ marginTop: '8px' }}>
          WhatsApp should open with your details filled in. Just press <b>Send</b> and our counsellor will confirm your free demo class.
        </p>
        <p style={{ marginTop: '14px' }}>
          <a className="l-btn l-btn-wa" href={waUrl ?? '#'} target="_blank" rel="noopener noreferrer">
            Open WhatsApp again
          </a>
        </p>
      </div>
    </div>
  );
}
