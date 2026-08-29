'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

type ExamKey = 'jee' | 'neet';

const EXAM_CONFIG: Record<ExamKey, { label: string; programHref: string; programLabel: string; color: string }> = {
  jee: { label: 'JEE', programHref: '/12th-board-pcm', programLabel: 'IIT-JEE Program', color: '#2563EB' },
  neet: { label: 'NEET', programHref: '/12th-board-pcb', programLabel: 'NEET Program', color: '#EF4444' },
};

interface Phase {
  name: string;
  weeks: number;
  frequency: string;
  purpose: string;
  mockCount: number;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

function addWeeks(d: Date, weeks: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + weeks * 7);
  return next;
}

/** Splits the runway into the four phases from "How Many Mock Tests Are
 * Enough Before NEET/JEE?" -- diagnostic, core, intensive, taper -- scaled
 * proportionally to however many weeks are actually available, rather than
 * assuming the blog post's 6-12 month reference window. */
function buildPhases(totalWeeks: number): Phase[] {
  const weights = { diagnostic: 0.15, core: 0.5, intensive: 0.25, taper: 0.1 };
  const raw = {
    diagnostic: Math.floor(totalWeeks * weights.diagnostic),
    core: Math.floor(totalWeeks * weights.core),
    intensive: Math.floor(totalWeeks * weights.intensive),
    taper: Math.floor(totalWeeks * weights.taper),
  };
  const assigned = raw.diagnostic + raw.core + raw.intensive + raw.taper;
  // Rounding down each phase always leaves a few weeks unassigned -- give
  // them to core, the most flexible phase, rather than losing them.
  raw.core += totalWeeks - assigned;

  // Ensure every phase has at least 1 week when there's enough runway to do so.
  const order: (keyof typeof raw)[] = ['taper', 'diagnostic', 'intensive', 'core'];
  for (const key of order) {
    if (raw[key] === 0 && raw.core > 1) {
      raw[key] = 1;
      raw.core -= 1;
    }
  }

  return [
    {
      name: 'Diagnostic',
      weeks: raw.diagnostic,
      frequency: '1 every 2 weeks',
      purpose: 'Establish an honest baseline; identify weak chapters, not yet full pressure-testing',
      mockCount: Math.max(1, Math.ceil(raw.diagnostic / 2)),
    },
    {
      name: 'Core Building',
      weeks: raw.core,
      frequency: 'Weekly',
      purpose: 'Full-syllabus, timed, exam-format mocks paired with a detailed error log',
      mockCount: raw.core,
    },
    {
      name: 'Intensive',
      weeks: raw.intensive,
      frequency: 'Weekly to twice-weekly',
      purpose: 'Alternate full mocks with targeted, error-log-driven practice sets',
      mockCount: Math.round(raw.intensive * 1.5),
    },
    {
      name: 'Taper',
      weeks: raw.taper,
      frequency: raw.taper >= 2 ? '1-2 total' : '1 total',
      purpose: 'Rhythm and confidence only — no new learning expected from these',
      mockCount: raw.taper >= 2 ? 2 : 1,
    },
  ].filter((p) => p.weeks > 0);
}

export default function MockTestPlannerPage() {
  const [exam, setExam] = useState<ExamKey>('neet');
  const [examDate, setExamDate] = useState('');

  const config = EXAM_CONFIG[exam];

  const { totalWeeks, phases, phaseDates } = useMemo(() => {
    if (!examDate) return { totalWeeks: 0, phases: [] as Phase[], phaseDates: [] as { start: Date; end: Date }[] };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(examDate);
    const days = Math.floor((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const built = weeks >= 4 ? buildPhases(weeks) : [];
    let cursor = today;
    const dates = built.map((p) => {
      const start = cursor;
      const end = addWeeks(start, p.weeks);
      cursor = end;
      return { start, end };
    });
    return { totalWeeks: weeks, phases: built, phaseDates: dates };
  }, [examDate]);

  const totalMocks = phases.reduce((sum, p) => sum + p.mockCount, 0);
  const waMessage = `Hi! I built a mock test schedule using your Mock Test Planner for ${config.label} (exam date: ${examDate || 'not set'}). Can I get a mentor's feedback on it?`;
  const waHref = `https://wa.me/919850570525?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Mock Test Planner</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Mock Test Schedule Planner</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            Enter your exam date, get a phased mock-test calendar — diagnostic, core, intensive, taper — instead of a vague "take lots of mocks" plan.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <div className="predictor-tabs" role="tablist" aria-label="Choose exam">
            {(Object.keys(EXAM_CONFIG) as ExamKey[]).map((key) => (
              <button
                type="button"
                key={key}
                role="tab"
                aria-selected={exam === key}
                className={`blog-filter-tab predictor-tab${exam === key ? ' active' : ''}`}
                onClick={() => setExam(key)}
              >
                {EXAM_CONFIG[key].label}
              </button>
            ))}
          </div>

          <div className="predictor-input-row">
            <label htmlFor="exam-date" className="predictor-label">Your {config.label} exam date</label>
            <input
              id="exam-date"
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="predictor-input"
              style={{ fontSize: 16, fontWeight: 600 }}
            />
          </div>

          {examDate && totalWeeks < 4 && (
            <div className="predictor-error" style={{ margin: '20px 0' }}>
              {totalWeeks < 0
                ? "That date's already passed — enter an upcoming exam date."
                : `Only ${totalWeeks} week${totalWeeks === 1 ? '' : 's'} left — too short for a phased plan. Skip straight to 1-2 lighter mocks for rhythm, and put the rest of your time into revision, not new testing.`}
            </div>
          )}

          {phases.length > 0 && (
            <>
              <div className="answer-block" style={{ borderLeftColor: config.color }}>
                <strong>{totalWeeks} weeks to go — roughly {totalMocks} full-length mocks across {phases.length} phases.</strong>
                <div style={{ fontWeight: 400, marginTop: 4, fontSize: 14 }}>
                  This is a starting structure, not a rigid rule — what matters most is reviewing each mock properly, not hitting an exact count.
                </div>
              </div>

              <div className="table-wrap" style={{ marginTop: 20 }}>
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Dates</th>
                      <th>Frequency</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phases.map((p, i) => (
                      <tr key={p.name}>
                        <td>{p.name} ({p.weeks}w)</td>
                        <td>{formatDate(phaseDates[i].start)} &ndash; {formatDate(phaseDates[i].end)}</td>
                        <td>{p.frequency}</td>
                        <td>{p.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <div className="mid-article-cta" style={{ margin: '32px 0 40px' }}>
            <span className="mid-article-cta-icon" style={{ background: config.color }}>
              <MessageCircle size={20} />
            </span>
            <div className="mid-article-cta-body">
              <p className="mid-article-cta-title">Want a mentor to review your mock results as you go?</p>
              <p className="mid-article-cta-text">Talk to a {config.programLabel} mentor directly — no form, just a quick WhatsApp chat.</p>
            </div>
            <div className="mid-article-cta-actions">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
              <Link prefetch={false} href={config.programHref} className="mid-article-cta-link">
                Explore {config.programLabel} &rarr;
              </Link>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <span className="article-toc-label" style={{ display: 'block', marginBottom: 12 }}>Recommended reading</span>
            <Link prefetch={false} href="/blog/how-many-mock-tests-before-neet-jee-realistic-testing-timeline" className="chip chip-link">
              How Many Mock Tests Are Enough Before NEET/JEE? A Realistic Testing Timeline
            </Link>
          </div>

          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
