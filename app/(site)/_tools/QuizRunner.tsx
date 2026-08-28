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
}

export function QuizRunner({ examLabel, questions, accentColor, programHref, programLabel, blogHref, blogLabel }: QuizRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);

  const total = questions.length;
  const current = questions[currentIndex];
  const selected = answers[currentIndex];
  const isLast = currentIndex === total - 1;
  const allAnswered = answers.every((a) => a !== null);

  function selectOption(optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  function goNext() {
    if (isLast) {
      if (allAnswered) setSubmitted(true);
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
    setSubmitted(false);
  }

  if (submitted) {
    const score = answers.reduce((sum: number, a, i) => sum + (a === questions[i].correctIndex ? 1 : 0), 0);
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
