'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Link from 'next/link';
import { CheckCircle2, Download, FileText, Lock, Mail, Sparkles } from 'lucide-react';
import { FaqJsonLd } from '../../components/JsonLd';

interface FormState {
  name: string;
  email: string;
  phone: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', phone: '' };

const VALIDATORS: Record<keyof FormState, (v: string) => boolean> = {
  name: (v) => v.trim().length >= 2,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  phone: (v) => /^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')),
};

const FIELD_ERRORS: Record<keyof FormState, string> = {
  name: 'Please enter your full name',
  email: 'Enter a valid email address',
  phone: 'Enter a valid 10-digit mobile number',
};

const BOARDS_COVERED = [
  { grade: 'Class 10', board: 'CBSE' },
  { grade: 'Class 10', board: 'ICSE' },
  { grade: 'Class 10 (SSC)', board: 'Maharashtra State Board' },
  { grade: 'Class 12', board: 'CBSE' },
  { grade: 'Class 12 (HSC)', board: 'Maharashtra State Board' },
];

const FAQS = [
  {
    question: 'Is this Study Planner actually free?',
    answer: 'Yes — it\'s completely free. We ask for your name, email and mobile number so we can send you the PDF and, if you\'d like, follow up about a free demo class. There\'s no payment or commitment required.',
  },
  {
    question: 'Which boards and grades does the planner cover?',
    answer: 'Class 10 for CBSE, ICSE and Maharashtra State Board (SSC), and Class 12 for CBSE and Maharashtra State Board (HSC) — each with its own month-by-month roadmap and board-specific tips.',
  },
  {
    question: 'Will you share my number with anyone else?',
    answer: 'No. Your details are used only by BuzzyBrains Academy to send you the planner and, if relevant, to follow up about our programs. We don\'t sell or share your information with third parties.',
  },
  {
    question: 'Can I print the planner?',
    answer: 'Yes — it\'s designed to be printer-friendly. The weekly planning grid and the final-week checklist are built specifically to be printed and filled in by hand.',
  },
  {
    question: 'I\'m preparing for JEE or NEET too — is this planner still useful?',
    answer: 'Yes, especially for Class 12 CBSE and HSC students — the planner specifically addresses how to align your board revision calendar with JEE/NEET preparation instead of running them as two disconnected plans.',
  },
];

export default function BoardExamStudyPlannerPage() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [invalidFields, setInvalidFields] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = (name: keyof FormState, value: string) => {
    const ok = VALIDATORS[name](value);
    setInvalidFields((prev) => ({ ...prev, [name]: !ok }));
    return ok;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (invalidFields[name as keyof FormState]) validateField(name as keyof FormState, value);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    validateField(e.target.name as keyof FormState, e.target.value);
  };

  const triggerDownload = (base64: string) => {
    const byteChars = atob(base64);
    const byteNumbers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) byteNumbers[i] = byteChars.charCodeAt(i);
    const blob = new Blob([new Uint8Array(byteNumbers)], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'BuzzyBrains-Board-Exam-Study-Planner.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.keys(formData) as (keyof FormState)[];
    let allValid = true;
    fields.forEach((f) => {
      const ok = validateField(f, formData[f]);
      if (!ok) allValid = false;
    });
    if (!allValid) return;

    setStatus('submitting');
    setErrorMessage('');
    try {
      const res = await fetch('/api/leads/study-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }
      if (data.pdfBase64) triggerDownload(data.pdfBase64);
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Could not reach the server. Please check your connection and try again.');
    }
  };

  return (
    <main className="bb-landing bb-page-shell">
      <FaqJsonLd items={FAQS} />

      {/* ---------- Hero ---------- */}
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <span className="eyebrow">Free Printable Download</span>
          <h1 style={{ fontSize: 'clamp(30px,4.2vw,46px)', maxWidth: 780 }}>
            The Board Exam Study Planner — Class 10 &amp; 12, Every Major Board
          </h1>
          <p className="lede" style={{ maxWidth: 640 }}>
            A printable, month-by-month planning framework built by IIT Kanpur-mentored faculty — covering CBSE, ICSE
            and Maharashtra State Board. Enter your details below and we&apos;ll email it to you as a PDF instantly.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
            {BOARDS_COVERED.map((b) => (
              <span key={`${b.board}-${b.grade}`} className="chip chip-link" style={{ pointerEvents: 'none' }}>
                {b.grade} · {b.board}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a href="#planner-form" className="btn btn-amber">
              Get My Free Planner
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Preview: genuine partial content ---------- */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="answer-block reveal" style={{ marginBottom: 32 }}>
            📄 8 pages · Weekly planning grid · Spaced-revision framework · 5 board-specific roadmaps · Printable exam-readiness checklist
          </div>

          <h2 className="reveal" style={{ marginBottom: 20 }}>What&apos;s Actually Inside</h2>
          <p className="lede reveal" style={{ maxWidth: 680, marginBottom: 32 }}>
            No vague previews — here&apos;s a genuine look at two of the nine pages. The rest (including your board-specific,
            month-by-month roadmap) unlocks once you grab the full PDF below.
          </p>

          <div className="tip-grid reveal" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: 8 }}>
            <div className="planner-preview-card">
              <h3 style={{ fontSize: 15, marginBottom: 12 }}>Your Weekly Study Grid</h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="compare-table" style={{ minWidth: 320 }}>
                  <thead>
                    <tr><th>Day</th><th>Morning</th><th>Evening</th></tr>
                  </thead>
                  <tbody>
                    {['Mon', 'Tue', 'Wed'].map((d) => (
                      <tr key={d}><td>{d}</td><td>—</td><td>—</td></tr>
                    ))}
                    <tr><td colSpan={3} style={{ textAlign: 'center', color: 'var(--text-3)', fontStyle: 'italic' }}>+ Thu–Sun in your PDF</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="planner-preview-card">
              <h3 style={{ fontSize: 15, marginBottom: 12 }}>The Spaced-Revision Cycle We Teach</h3>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'var(--text-2)' }}>
                <li>First pass: learn the chapter properly.</li>
                <li>Revisit 1 (~1 week later): self-test from memory.</li>
                <li>Revisit 2 (a few weeks later): redo the hardest problems.</li>
                <li>Revisit 3 (before the exam): fast, high-yield pass.</li>
              </ul>
            </div>
          </div>

          {/* Locked teaser */}
          <div className="reveal" style={{ position: 'relative', marginTop: 16 }}>
            <div
              aria-hidden
              style={{
                filter: 'blur(5px)', opacity: 0.55, pointerEvents: 'none', userSelect: 'none',
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16,
              }}
            >
              {BOARDS_COVERED.slice(0, 3).map((b) => (
                <div key={`${b.board}-${b.grade}-locked`} className="planner-locked-card">
                  <p style={{ fontWeight: 700, marginBottom: 8 }}>{b.grade} · {b.board}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Apr–Jun: Build genuine chapter-by-chapter understanding...</p>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 6 }}>Jul–Sep: Complete full syllabus coverage...</p>
                </div>
              ))}
            </div>
            <div
              style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center', padding: 16,
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', boxShadow: 'var(--shadow-lg)' }}>
                <Lock size={20} color="var(--blue)" />
              </div>
              <p style={{ fontWeight: 700, fontSize: 15 }}>5 board-specific roadmaps are inside the full PDF</p>
              <a href="#planner-form" className="btn btn-primary" style={{ marginTop: 4 }}>Unlock the Full Planner</a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Credibility ---------- */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="tip-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="tip-card tip">
              <div className="tip-card-icon"><Sparkles size={18} /></div>
              <p><strong>Built by IIT Kanpur faculty</strong>Founder Dilip Sah — IIT Kanpur alumnus, JEE AIR 400, 25+ years mentoring students across boards.</p>
            </div>
            <div className="tip-card tip">
              <div className="tip-card-icon"><FileText size={18} /></div>
              <p><strong>Multi-board, not generic</strong>Written specifically for CBSE, ICSE and Maharashtra Board — not a one-size-fits-all template.</p>
            </div>
            <div className="tip-card tip">
              <div className="tip-card-icon"><Mail size={18} /></div>
              <p><strong>Delivered instantly</strong>Download starts right away, and a copy lands in your inbox as a PDF for safekeeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Lead form ---------- */}
      <section className="cta bb-section" id="planner-form" aria-labelledby="planner-form-title">
        <div className="container cta-grid">
          <div className="reveal">
            <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>100% Free · No Spam</span>
            <h2 id="planner-form-title">Get your free Board Exam Study Planner</h2>
            <p className="lede">Enter your details and we&apos;ll send the full PDF to your email — the download also starts immediately.</p>
            <ul className="cta-points">
              <li><CheckCircle2 size={19} color="var(--green)" /> All 5 board/grade roadmaps included</li>
              <li><CheckCircle2 size={19} color="var(--green)" /> Printable weekly planner + revision framework</li>
              <li><CheckCircle2 size={19} color="var(--green)" /> No payment, no catch</li>
            </ul>
          </div>

          <form className="lead-form reveal" data-delay="1" noValidate onSubmit={handleSubmit}>
            {status !== 'success' ? (
              <div>
                <h3>Send Me the Planner</h3>
                <p className="fsub">We&apos;ll email your PDF within seconds — and the download will start automatically too.</p>

                <div className="f-row">
                  <div className={`f-field full${invalidFields.name ? ' invalid' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" placeholder="Aarav Sharma" autoComplete="name" required value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                    <span className="err">{FIELD_ERRORS.name}</span>
                  </div>
                </div>
                <div className="f-row">
                  <div className={`f-field full${invalidFields.email ? ' invalid' : ''}`}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" required value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                    <span className="err">{FIELD_ERRORS.email}</span>
                  </div>
                </div>
                <div className="f-row">
                  <div className={`f-field full${invalidFields.phone ? ' invalid' : ''}`}>
                    <label htmlFor="phone">Mobile Number *</label>
                    <input type="tel" id="phone" name="phone" placeholder="98XXXXXXXX" autoComplete="tel" required value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
                    <span className="err">{FIELD_ERRORS.phone}</span>
                  </div>
                </div>

                {status === 'error' && (
                  <p style={{ color: '#EF4444', fontSize: 13, marginBottom: 12 }}>{errorMessage}</p>
                )}

                <button type="submit" className="btn btn-amber" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Download My Free Planner'}
                  {status !== 'submitting' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  )}
                </button>
                <p style={{ fontSize: 11.5, color: 'var(--text-3)', marginTop: 12, textAlign: 'center' }}>
                  By submitting, you agree to receive your planner by email and an occasional follow-up from BuzzyBrains Academy. No spam, ever.
                </p>
              </div>
            ) : (
              <div className="form-success show">
                <div className="ok">
                  <Download size={30} color="var(--green)" />
                </div>
                <h3 style={{ marginBottom: 8 }}>Your planner is downloading!</h3>
                <p style={{ color: 'var(--text-3)', fontSize: 14.5, marginBottom: 4 }}>
                  We&apos;ve also emailed a copy to <strong>{formData.email}</strong> — check your inbox (and spam folder, just in case).
                </p>
                <p style={{ color: 'var(--text-3)', fontSize: 13.5, marginTop: 16 }}>
                  Want a plan built around your child&apos;s specific board and subjects?{' '}
                  <Link prefetch={false} href="/#contact" style={{ color: 'var(--blue)', fontWeight: 600 }}>Book a free demo class</Link>.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bb-section">
        <div className="container article-shell">
          <div className="article-faq" style={{ marginTop: 0 }}>
            <h2>Frequently asked questions</h2>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
