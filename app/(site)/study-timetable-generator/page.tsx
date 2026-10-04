'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

type ExamKey = 'jee' | 'neet';

const EXAM_SUBJECTS: Record<ExamKey, string[]> = {
  jee: ['Physics', 'Chemistry', 'Maths'],
  neet: ['Physics', 'Chemistry', 'Biology'],
};

const EXAM_CONFIG: Record<ExamKey, { label: string; programHref: string; programLabel: string; color: string }> = {
  jee: { label: 'JEE', programHref: '/12th-board-pcm', programLabel: 'IIT-JEE Program', color: '#2563EB' },
  neet: { label: 'NEET', programHref: '/12th-board-pcb', programLabel: 'NEET Program', color: '#EF4444' },
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

interface DayPlan {
  day: string;
  isCoachingDay: boolean;
  focus: string;
}

/** Builds the weekly plan client-side, live, from the exam + coaching-day
 * inputs -- mirrors the structure in "Building a NEET/JEE Study Timetable
 * That Survives School, Coaching, and Real Life": non-coaching days rotate
 * through the exam's subjects for deep-focus blocks, the second-to-last
 * free day becomes a weekly mock/review day, and the last free day is kept
 * as a genuine buffer + rest day rather than more content. */
function buildPlan(exam: ExamKey, coachingDays: boolean[]): DayPlan[] {
  const subjects = EXAM_SUBJECTS[exam];
  const freeDayIndices = DAYS.map((_, i) => i).filter((i) => !coachingDays[i]);

  const mockDayIndex = freeDayIndices.length >= 2 ? freeDayIndices[freeDayIndices.length - 2] : null;
  const restDayIndex = freeDayIndices.length >= 1 ? freeDayIndices[freeDayIndices.length - 1] : null;

  let subjectCursor = 0;
  return DAYS.map((day, i) => {
    if (coachingDays[i]) {
      return { day, isCoachingDay: true, focus: "Light revision only — today's class topics" };
    }
    if (i === restDayIndex && restDayIndex !== mockDayIndex) {
      return { day, isCoachingDay: false, focus: 'Buffer + genuine rest — catch up on whatever slipped, then switch off' };
    }
    if (i === mockDayIndex) {
      return { day, isCoachingDay: false, focus: 'Weekly mock test or full-syllabus revision + error log review' };
    }
    const subject = subjects[subjectCursor % subjects.length];
    subjectCursor++;
    return { day, isCoachingDay: false, focus: `${subject} — deep-focus block` };
  });
}

export default function StudyTimetableGeneratorPage() {
  const [exam, setExam] = useState<ExamKey>('neet');
  const [coachingDays, setCoachingDays] = useState<boolean[]>([true, true, true, true, true, false, false]);

  const config = EXAM_CONFIG[exam];
  const freeDayCount = coachingDays.filter((c) => !c).length;
  const plan = useMemo(() => buildPlan(exam, coachingDays), [exam, coachingDays]);

  function toggleDay(i: number) {
    setCoachingDays((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  const waMessage = `Hi! I built a weekly study timetable using your Study Timetable Generator for ${config.label}. Can I get a mentor's feedback on it?`;
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
            <span>Study Timetable Generator</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Study Timetable Generator</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            Mark your coaching/heavy school days, and get a realistic weekly plan built around subject rotation, a weekly mock day, and real rest — not just more hours crammed in.
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

          <p className="predictor-label" style={{ marginBottom: 10 }}>Which days do you have coaching or a heavy school day?</p>
          <div className="timetable-day-toggles">
            {DAYS.map((day, i) => (
              <button
                type="button"
                key={day}
                className={`blog-filter-tab${coachingDays[i] ? ' active' : ''}`}
                onClick={() => toggleDay(i)}
                aria-pressed={coachingDays[i]}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>

          {freeDayCount === 0 ? (
            <div className="predictor-error" style={{ margin: '20px 0' }}>
              You've marked every day as a coaching/heavy day — even one genuinely free day matters. Try unmarking at least one.
            </div>
          ) : (
            <>
              {freeDayCount === 1 && (
                <p style={{ color: 'var(--text-3)', fontSize: 13, margin: '16px 0' }}>
                  With only one free day, this week is rest-only — no mock day or deep-focus block fits without cutting into that rest. Free up a second day when you can.
                </p>
              )}
              <div className="table-wrap" style={{ marginTop: 20 }}>
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.map((p) => (
                      <tr key={p.day} className={p.isCoachingDay ? undefined : 'predictor-row-active'}>
                        <td>{p.day}</td>
                        <td>{p.focus}</td>
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
              <p className="mid-article-cta-title">Want a mentor to sanity-check this plan?</p>
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
            <Link prefetch={false} href="/blog/building-a-neet-jee-study-timetable-that-survives-school-and-coaching" className="chip chip-link">
              Building a NEET/JEE Study Timetable That Survives School, Coaching, and Real Life
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
