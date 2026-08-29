'use client';

import { useState } from 'react';
import Link from 'next/link';

type ExamKey = 'neet' | 'jee';

const FAQS = [
  {
    question: 'What is the NEET marking scheme?',
    answer: '+4 for each correct answer, -1 for each incorrect answer, and 0 for unattempted questions, out of a maximum of 720.',
  },
  {
    question: 'What is the JEE Main marking scheme?',
    answer: "MCQs score +4 for a correct answer and -1 for an incorrect one. Numerical-value questions score +4 for a correct answer but typically have no negative marking for an incorrect one — always confirm the current year's exact rules on the official NTA information bulletin.",
  },
  {
    question: 'Does this calculator predict my rank or percentile?',
    answer: 'No — it only computes your raw score from the marking scheme. For a banded read on what that score typically converts to, use our NEET & JEE Main Rank Predictor.',
  },
];

function clampCount(value: string): number {
  const n = Number(value);
  if (Number.isNaN(n) || n < 0) return 0;
  return Math.floor(n);
}

export default function ScoreCalculatorPage() {
  const [exam, setExam] = useState<ExamKey>('neet');

  // NEET: single MCQ pool, 180 of 200 attempted, +4/-1.
  const [neetCorrect, setNeetCorrect] = useState('');
  const [neetIncorrect, setNeetIncorrect] = useState('');

  // JEE Main: MCQs (+4/-1) and numerical-value questions (+4/0) scored separately.
  const [mcqCorrect, setMcqCorrect] = useState('');
  const [mcqIncorrect, setMcqIncorrect] = useState('');
  const [numCorrect, setNumCorrect] = useState('');
  const [numIncorrect, setNumIncorrect] = useState('');

  const neetC = clampCount(neetCorrect);
  const neetI = clampCount(neetIncorrect);
  const neetAttempted = neetC + neetI;
  const neetOverAttempted = neetAttempted > 180;
  const neetScore = neetC * 4 - neetI * 1;

  const mcqC = clampCount(mcqCorrect);
  const mcqI = clampCount(mcqIncorrect);
  const numC = clampCount(numCorrect);
  const numI = clampCount(numIncorrect);
  const mcqOverAttempted = mcqC + mcqI > 60;
  const numOverAttempted = numC + numI > 15;
  const jeeScore = (mcqC * 4 - mcqI * 1) + numC * 4;

  function switchExam(next: ExamKey) {
    setExam(next);
  }

  const neetHasInput = neetCorrect.trim() !== '' || neetIncorrect.trim() !== '';
  const jeeHasInput = [mcqCorrect, mcqIncorrect, numCorrect, numIncorrect].some((v) => v.trim() !== '');

  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Score Calculator</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>NEET & JEE Main Score Calculator</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            Enter your correct and incorrect counts, get your exact score from the real official marking scheme — instantly, no signup.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <div className="predictor-tabs" role="tablist" aria-label="Choose exam">
            <button
              type="button"
              role="tab"
              aria-selected={exam === 'neet'}
              className={`blog-filter-tab predictor-tab${exam === 'neet' ? ' active' : ''}`}
              onClick={() => switchExam('neet')}
            >
              NEET
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={exam === 'jee'}
              className={`blog-filter-tab predictor-tab${exam === 'jee' ? ' active' : ''}`}
              onClick={() => switchExam('jee')}
            >
              JEE Main
            </button>
          </div>

          {exam === 'neet' ? (
            <>
              <p style={{ color: 'var(--text-2)', fontSize: 14, marginBottom: 20 }}>
                200 questions, 180 attempted (45 of 50 per section) &middot; +4 correct, -1 incorrect
              </p>
              <div className="calc-input-grid">
                <div className="predictor-input-row">
                  <label htmlFor="neet-correct" className="predictor-label">Correct answers</label>
                  <input
                    id="neet-correct"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={180}
                    value={neetCorrect}
                    onChange={(e) => setNeetCorrect(e.target.value)}
                    placeholder="e.g. 165"
                    className="predictor-input"
                  />
                </div>
                <div className="predictor-input-row">
                  <label htmlFor="neet-incorrect" className="predictor-label">Incorrect answers</label>
                  <input
                    id="neet-incorrect"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={180}
                    value={neetIncorrect}
                    onChange={(e) => setNeetIncorrect(e.target.value)}
                    placeholder="e.g. 8"
                    className="predictor-input"
                  />
                </div>
              </div>
              {neetOverAttempted && (
                <p className="predictor-error">Correct + incorrect can&apos;t exceed 180 attempted questions.</p>
              )}
              {neetHasInput && !neetOverAttempted && (
                <div className="answer-block" style={{ borderLeftColor: '#EF4444' }}>
                  <strong>Your NEET score: {neetScore} / 720</strong>
                  <div style={{ fontWeight: 400, marginTop: 4, fontSize: 14 }}>
                    {neetC} correct (+{neetC * 4}), {neetI} incorrect (&minus;{neetI}), {180 - neetAttempted} unattempted
                  </div>
                </div>
              )}
              {neetHasInput && !neetOverAttempted && (
                <p style={{ marginBottom: 32 }}>
                  <Link prefetch={false} href={`/neet-jee-rank-predictor?exam=neet&score=${neetScore}`} className="chip chip-link">
                    See what this typically means for admissions &rarr;
                  </Link>
                </p>
              )}
            </>
          ) : (
            <>
              <p style={{ color: 'var(--text-2)', fontSize: 14, marginBottom: 20 }}>
                MCQs (+4 correct, -1 incorrect) and numerical-value questions (+4 correct, no negative) are scored separately, then summed.
              </p>
              <h3 style={{ fontSize: 15, marginBottom: 12 }}>MCQs (out of 60)</h3>
              <div className="calc-input-grid">
                <div className="predictor-input-row">
                  <label htmlFor="mcq-correct" className="predictor-label">Correct</label>
                  <input
                    id="mcq-correct"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={60}
                    value={mcqCorrect}
                    onChange={(e) => setMcqCorrect(e.target.value)}
                    placeholder="e.g. 50"
                    className="predictor-input"
                  />
                </div>
                <div className="predictor-input-row">
                  <label htmlFor="mcq-incorrect" className="predictor-label">Incorrect</label>
                  <input
                    id="mcq-incorrect"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={60}
                    value={mcqIncorrect}
                    onChange={(e) => setMcqIncorrect(e.target.value)}
                    placeholder="e.g. 5"
                    className="predictor-input"
                  />
                </div>
              </div>
              {mcqOverAttempted && <p className="predictor-error">MCQ correct + incorrect can&apos;t exceed 60.</p>}

              <h3 style={{ fontSize: 15, margin: '20px 0 12px' }}>Numerical-value questions (out of 15)</h3>
              <div className="calc-input-grid">
                <div className="predictor-input-row">
                  <label htmlFor="num-correct" className="predictor-label">Correct</label>
                  <input
                    id="num-correct"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={15}
                    value={numCorrect}
                    onChange={(e) => setNumCorrect(e.target.value)}
                    placeholder="e.g. 11"
                    className="predictor-input"
                  />
                </div>
                <div className="predictor-input-row">
                  <label htmlFor="num-incorrect" className="predictor-label">Incorrect</label>
                  <input
                    id="num-incorrect"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={15}
                    value={numIncorrect}
                    onChange={(e) => setNumIncorrect(e.target.value)}
                    placeholder="e.g. 2"
                    className="predictor-input"
                  />
                </div>
              </div>
              {numOverAttempted && <p className="predictor-error">Numerical correct + incorrect can&apos;t exceed 15.</p>}

              {jeeHasInput && !mcqOverAttempted && !numOverAttempted && (
                <div className="answer-block" style={{ borderLeftColor: '#2563EB', marginTop: 20 }}>
                  <strong>Your JEE Main score: {jeeScore} / 300</strong>
                  <div style={{ fontWeight: 400, marginTop: 4, fontSize: 14 }}>
                    MCQs: {mcqC * 4 - mcqI} &middot; Numerical: {numC * 4}
                  </div>
                </div>
              )}
              {jeeHasInput && !mcqOverAttempted && !numOverAttempted && (
                <p style={{ marginBottom: 32 }}>
                  <Link prefetch={false} href="/neet-jee-rank-predictor?exam=jee" className="chip chip-link">
                    See what a percentile typically means for admissions &rarr;
                  </Link>
                </p>
              )}
              <p style={{ color: 'var(--text-3)', fontSize: 13 }}>
                Raw JEE Main marks don&apos;t convert directly to a percentile — NTA normalizes scores across exam shifts, so the same raw score can produce a different percentile depending on that shift&apos;s difficulty.
              </p>
            </>
          )}

          <div className="article-faq" style={{ marginTop: 40 }}>
            <h2>Frequently asked questions</h2>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
