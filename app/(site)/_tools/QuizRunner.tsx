'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Check, X as XIcon } from 'lucide-react';

export interface QuizQuestion {
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizRunnerProps {
  examLabel: string;
  questions: QuizQuestion[];
  accentColor: string;
  programHref: string;
  programLabel: string;
  blogHref: string;
  blogLabel: string;
  /** When true, gates the results behind a name+email form (submitted to
   * /api/leads/quiz) instead of revealing the score immediately. Off by
   * default so the existing JEE/NEET quizzes keep their current behavior. */
  requireLead?: boolean;
  /** Stored alongside the lead as `program` — e.g. "Foundation Maths". */
  quizType?: string;
  /** Stored alongside the lead as `grade` — e.g. "6". */
  gradeLabel?: string;
}

type Phase = 'quiz' | 'leadGate' | 'results';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuizRunner({
  examLabel,
  questions,
  accentColor,
  programHref,
  programLabel,
  blogHref,
  blogLabel,
  requireLead,
  quizType,
  gradeLabel,
}: QuizRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [phase, setPhase] = useState<Phase>('quiz');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadError, setLeadError] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  const total = questions.length;
  const current = questions[currentIndex];
  const selected = answers[currentIndex];
  const isLast = currentIndex === total - 1;
  const allAnswered = answers.every((a) => a !== null);
  const score = answers.reduce((sum: number, a, i) => sum + (a === questions[i].correctIndex ? 1 : 0), 0);

  function selectOption(optionIndex: number) {
    if (phase !== 'quiz') return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  function goNext() {
    if (isLast) {
      if (!allAnswered) return;
      setPhase(requireLead ? 'leadGate' : 'results');
      return;
    }
    setCurrentIndex((i) => Math.min(i + 1, total - 1));
  }

  function goPrev() {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }

  function retake() {
    setAnswers(questions.map(() => null));
    setCurrentIndex(0);
    setPhase('quiz');
    setLeadName('');
    setLeadEmail('');
    setLeadError('');
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (leadName.trim().length < 2) {
      setLeadError('Please enter your full name.');
      return;
    }
    if (!EMAIL_RE.test(leadEmail.trim())) {
      setLeadError('Please enter a valid email address.');
      return;
    }
    setLeadError('');
    setLeadSubmitting(true);
    try {
      await fetch('/api/leads/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          email: leadEmail.trim(),
          grade: gradeLabel,
          quizType: quizType ?? examLabel,
          score,
          total,
        }),
      });
    } catch (err) {
      console.error('Quiz lead submit error:', err);
      // Fall through regardless -- the student still sees their score below.
    } finally {
      setLeadSubmitting(false);
      setPhase('results');
    }
  }

  if (phase === 'leadGate') {
    return (
      <div className="quiz-question-card" style={{ maxWidth: 440 }}>
        <span className="quiz-question-subject" style={{ color: accentColor }}>Almost there</span>
        <h2 className="quiz-question-text" style={{ fontSize: 20 }}>Enter your details to see your score</h2>
        <p style={{ color: 'var(--text-2)', fontSize: 13.5, marginBottom: 20 }}>
          We&apos;ll only use this to show you your result and, if relevant, follow up about {programLabel}.
        </p>
        <form onSubmit={submitLead} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="predictor-input-row">
            <label htmlFor="lead-name" className="predictor-label">Full name</label>
            <input
              id="lead-name"
              type="text"
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
              placeholder="e.g. Aarav Sharma"
              className="predictor-input"
              style={{ fontSize: 16, fontWeight: 600 }}
              autoComplete="name"
            />
          </div>
          <div className="predictor-input-row">
            <label htmlFor="lead-email" className="predictor-label">Email</label>
            <input
              id="lead-email"
              type="email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              placeholder="e.g. aarav@example.com"
              className="predictor-input"
              style={{ fontSize: 16, fontWeight: 600 }}
              autoComplete="email"
            />
          </div>
          {leadError && <p className="predictor-error" style={{ margin: 0 }}>{leadError}</p>}
          <button type="submit" className="btn btn-primary" disabled={leadSubmitting} style={{ marginTop: 6 }}>
            {leadSubmitting ? 'Submitting…' : 'See My Score'}
          </button>
        </form>
      </div>
    );
  }

  if (phase === 'results') {
    const percent = Math.round((score / total) * 100);
    const waMessage = `Hi! I scored ${score}/${total} on the ${examLabel} quiz on your site. Can I get personalized guidance on my ${examLabel} prep?`;
    const waHref = `https://wa.me/919850570525?text=${encodeURIComponent(waMessage)}`;

    return (
      <div>
        <div className="answer-block" style={{ borderLeftColor: accentColor }}>
          <strong>Your score: {score} / {total} ({percent}%)</strong>
          <div style={{ fontWeight: 400, marginTop: 4, fontSize: 14 }}>
            A 10-question quiz is a quick pulse check, not a diagnostic — a low score on any one attempt doesn&apos;t mean much on its own, and a high score doesn&apos;t replace real mock-test practice.
          </div>
        </div>

        <div className="quiz-review">
          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.correctIndex;
            return (
              <div className="quiz-review-item" key={i}>
                <div className="quiz-review-head">
                  {isCorrect ? <Check size={16} color="#10B981" /> : <XIcon size={16} color="#DC2626" />}
                  <span className="quiz-review-subject">{q.subject}</span>
                  <span className="quiz-review-q">{q.question}</span>
                </div>
                <p className="quiz-review-answer">
                  Correct answer: <strong>{q.options[q.correctIndex]}</strong>
                  {!isCorrect && answers[i] !== null && <> &middot; Your answer: {q.options[answers[i] as number]}</>}
                </p>
                <p className="quiz-review-explanation">{q.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="mid-article-cta" style={{ margin: '32px 0 40px' }}>
          <span className="mid-article-cta-icon" style={{ background: accentColor }}>
            <MessageCircle size={20} />
          </span>
          <div className="mid-article-cta-body">
            <p className="mid-article-cta-title">Want a real diagnostic, not just a 10-question quiz?</p>
            <p className="mid-article-cta-text">Talk to a {programLabel} mentor directly — no form, just a quick WhatsApp chat.</p>
          </div>
          <div className="mid-article-cta-actions">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-green">
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
            <Link prefetch={false} href={programHref} className="mid-article-cta-link">
              Explore {programLabel} &rarr;
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
          <button type="button" className="btn btn-ghost" onClick={retake}>Retake Quiz</button>
          <Link prefetch={false} href={blogHref} className="chip chip-link">{blogLabel}</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="quiz-progress">
        <div className="quiz-progress-track">
          <div className="quiz-progress-fill" style={{ width: `${((currentIndex + 1) / total) * 100}%`, background: accentColor }} />
        </div>
        <span className="quiz-progress-label">Question {currentIndex + 1} of {total}</span>
      </div>

      <div className="quiz-question-card">
        <span className="quiz-question-subject" style={{ color: accentColor }}>{current.subject}</span>
        <h2 className="quiz-question-text">{current.question}</h2>
        <div className="quiz-options">
          {current.options.map((option, i) => (
            <button
              type="button"
              key={i}
              className={`quiz-option${selected === i ? ' selected' : ''}`}
              onClick={() => selectOption(i)}
              aria-pressed={selected === i}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-nav">
        <button type="button" className="btn btn-ghost" onClick={goPrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button type="button" className="btn btn-primary" onClick={goNext} disabled={selected === null}>
          {isLast ? 'See My Score' : 'Next'}
        </button>
      </div>
    </div>
  );
}
