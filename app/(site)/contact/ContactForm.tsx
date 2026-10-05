'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CONTACT } from './_data';

interface FormState {
  studentName: string;
  parentName: string;
  grade: string;
  phone: string;
  email: string;
  program: string;
}

const INITIAL: FormState = { studentName: '', parentName: '', grade: '', phone: '', email: '', program: '' };

const VALIDATORS: Record<keyof FormState, (v: string) => boolean> = {
  studentName: (v) => v.trim().length >= 2,
  parentName: (v) => v.trim().length >= 2,
  grade: (v) => v !== '',
  phone: (v) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, '').slice(-10)),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  program: (v) => v !== '',
};

const ERRORS: Record<keyof FormState, string> = {
  studentName: "Please enter the student's name",
  parentName: "Please enter the parent's name",
  grade: 'Please select a grade',
  phone: 'Enter a valid 10-digit mobile number',
  email: 'Enter a valid email address',
  program: 'Please choose what you need help with',
};

export default function ContactForm() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [invalid, setInvalid] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const check = (name: keyof FormState, value: string) => {
    const ok = VALIDATORS[name](value);
    setInvalid((p) => ({ ...p, [name]: !ok }));
    return ok;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof FormState;
    setData((p) => ({ ...p, [name]: e.target.value }));
    if (invalid[name]) check(name, e.target.value);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    check(e.target.name as keyof FormState, e.target.value);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fields = Object.keys(data) as (keyof FormState)[];
    let firstBad: keyof FormState | null = null;
    fields.forEach((f) => {
      if (!check(f, data[f]) && !firstBad) firstBad = f;
    });
    if (firstBad) {
      document.getElementById(`ct-${firstBad}`)?.focus();
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/leads/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, school: '', source: 'contact-page' }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error || 'Something went wrong. Please try again.');
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="ct-form ct-success" role="status">
        <div className="ct-success-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3>Thank you, we&apos;ve got your request.</h3>
        <p>Our admissions team will call you within 24 hours. Want a faster reply? Message us on WhatsApp.</p>
        <a className="btn btn-green" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  const field = (name: keyof FormState) => `f-field${invalid[name] ? ' invalid' : ''}`;

  return (
    <form className="ct-form" id="contact-form" noValidate onSubmit={onSubmit} aria-labelledby="ct-form-title">
      <h2 id="ct-form-title">Send us a message</h2>
      <p className="ct-form-sub">Tell us a little about your child and we&apos;ll call you back, usually within 24 hours.</p>

      <div className="f-row">
        <div className={field('studentName')}>
          <label htmlFor="ct-studentName">Student name *</label>
          <input id="ct-studentName" name="studentName" type="text" autoComplete="off" placeholder="Aarav Sharma" value={data.studentName} onChange={onChange} onBlur={onBlur} required />
          <span className="err">{ERRORS.studentName}</span>
        </div>
        <div className={field('parentName')}>
          <label htmlFor="ct-parentName">Parent name *</label>
          <input id="ct-parentName" name="parentName" type="text" autoComplete="name" placeholder="Rajesh Sharma" value={data.parentName} onChange={onChange} onBlur={onBlur} required />
          <span className="err">{ERRORS.parentName}</span>
        </div>
      </div>

      <div className="f-row">
        <div className={field('phone')}>
          <label htmlFor="ct-phone">Mobile number *</label>
          <input id="ct-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="98XXXXXXXX" value={data.phone} onChange={onChange} onBlur={onBlur} required />
          <span className="err">{ERRORS.phone}</span>
        </div>
        <div className={field('email')}>
          <label htmlFor="ct-email">Email *</label>
          <input id="ct-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={data.email} onChange={onChange} onBlur={onBlur} required />
          <span className="err">{ERRORS.email}</span>
        </div>
      </div>

      <div className="f-row">
        <div className={field('grade')}>
          <label htmlFor="ct-grade">Grade *</label>
          <select id="ct-grade" name="grade" value={data.grade} onChange={onChange} onBlur={onBlur} required>
            <option value="">Select grade</option>
            <option>Grade 6</option><option>Grade 7</option><option>Grade 8</option>
            <option>Grade 9</option><option>Grade 10</option><option>Grade 11</option>
            <option>Grade 12</option><option>Dropper / Repeater</option>
          </select>
          <span className="err">{ERRORS.grade}</span>
        </div>
        <div className={field('program')}>
          <label htmlFor="ct-program">I need help with *</label>
          <select id="ct-program" name="program" value={data.program} onChange={onChange} onBlur={onBlur} required>
            <option value="">Select a topic</option>
            <option>Foundation (Grades 6–10)</option>
            <option>IIT-JEE</option>
            <option>NEET</option>
            <option>Olympiads (IMO / NSO / IOQM / PRMO / NMTC)</option>
            <option>Board Exam Test Series</option>
            <option>Crash Course</option>
            <option>Not sure — help me choose</option>
          </select>
          <span className="err">{ERRORS.program}</span>
        </div>
      </div>

      {error && (
        <p role="alert" className="ct-error">
          {error} You can also{' '}
          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us</a> or call{' '}
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
        </p>
      )}

      <button type="submit" className="btn btn-primary ct-submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Request a call back'}
        {!submitting && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        )}
      </button>
      <p className="ct-fine">No spam, ever. We only use your details to respond to this enquiry.</p>
    </form>
  );
}
