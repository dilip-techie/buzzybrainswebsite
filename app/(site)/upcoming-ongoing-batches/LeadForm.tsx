'use client';

import { useState, type FormEvent } from 'react';
import { BATCHES, GRADE_OPTIONS } from './_data';

interface Props {
  defaultBatchId?: string;
  source: string;
  submitLabel?: string;
  onDone?: () => void;
}

const WHATSAPP = 'https://wa.me/918983604478';

export default function LeadForm({ defaultBatchId = '', source, submitLabel = 'Reserve my free demo seat', onDone }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('');
  const [batchId, setBatchId] = useState(defaultBatchId);
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const phoneOk = /^[6-9]\d{9}$/.test(phone.replace(/\D/g, '').slice(-10));
  const valid = name.trim().length >= 2 && phoneOk && grade !== '' && batchId !== '';
  const batch = BATCHES.find((b) => b.id === batchId);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/leads/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, grade: `Grade ${grade}`, batch: batch?.name, email, source }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error || 'Something went wrong. Please try again.');
      setDone(true);
      onDone?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    const msg = `Hi, I just requested a free demo for the ${batch?.name} batch at BuzzyBrains Academy.`;
    return (
      <div className="bt-done" role="status">
        <div className="bt-done-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3>You&apos;re on the list!</h3>
        <p>
          We&apos;ve noted your interest in <b>{batch?.name}</b>. Our team will call you within 24 hours to confirm your free demo slot.
        </p>
        <a className="btn btn-green" href={`${WHATSAPP}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer">
          Get a faster reply on WhatsApp
        </a>
      </div>
    );
  }

  const bad = (cond: boolean) => (touched && cond ? ' invalid' : '');

  return (
    <form className="bt-form" noValidate onSubmit={submit}>
      <div className={`f-field${bad(batchId === '')}`}>
        <label htmlFor={`bt-batch-${source}`}>Batch you&apos;re interested in *</label>
        <select id={`bt-batch-${source}`} value={batchId} onChange={(e) => setBatchId(e.target.value)} required>
          <option value="">Select a batch</option>
          {BATCHES.map((b) => (
            <option key={b.id} value={b.id}>{b.name} ({b.mode})</option>
          ))}
        </select>
        <span className="err">Please choose a batch</span>
      </div>
      <div className="f-row">
        <div className={`f-field${bad(name.trim().length < 2)}`}>
          <label htmlFor={`bt-name-${source}`}>Your name *</label>
          <input id={`bt-name-${source}`} type="text" autoComplete="name" placeholder="Student or parent name" value={name} onChange={(e) => setName(e.target.value)} required />
          <span className="err">Please enter your name</span>
        </div>
        <div className={`f-field${bad(grade === '')}`}>
          <label htmlFor={`bt-grade-${source}`}>Student&apos;s grade *</label>
          <select id={`bt-grade-${source}`} value={grade} onChange={(e) => setGrade(e.target.value)} required>
            <option value="">Select grade</option>
            {GRADE_OPTIONS.map((g) => (
              <option key={g} value={g}>Grade {g}</option>
            ))}
          </select>
          <span className="err">Please select a grade</span>
        </div>
      </div>
      <div className="f-row">
        <div className={`f-field${bad(!phoneOk)}`}>
          <label htmlFor={`bt-phone-${source}`}>Mobile number *</label>
          <input id={`bt-phone-${source}`} type="tel" inputMode="tel" autoComplete="tel" placeholder="98XXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <span className="err">Enter a valid 10-digit mobile number</span>
        </div>
        <div className="f-field">
          <label htmlFor={`bt-email-${source}`}>Email (optional)</label>
          <input id={`bt-email-${source}`} type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span className="err" />
        </div>
      </div>
      {error && (
        <p role="alert" className="bt-error">
          {error} You can also <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp us</a> or call <a href="tel:+919850570525">98505 70525</a>.
        </p>
      )}
      <button type="submit" className="btn btn-primary bt-submit" disabled={submitting}>
        {submitting ? 'Reserving…' : submitLabel}
      </button>
      <p className="bt-fine">Free demo class. No spam, no obligation. Batches are capped at 12 students.</p>
    </form>
  );
}
