'use client';
import React, { useState, useEffect } from 'react';
import { Check, X, ChevronRight, Bookmark, Loader2, Trophy, RotateCcw, Home } from 'lucide-react';

interface PracticeSessionProps {
  config: { grade: string; subject: string; chapter: string; difficulty: string };
  questions?: any[]; // Pre-loaded questions (for bookmarks / mistakes mode)
  userId: string;
  onExit: () => void;
}

export default function PracticeSession({ config, questions: preloaded, userId, onExit }: PracticeSessionProps) {
  const [questions, setQuestions] = useState<any[]>(preloaded || []);
  const [loading, setLoading] = useState(!preloaded);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bookmarking, setBookmarking] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [answers, setAnswers] = useState<{ qId: string; correct: boolean }[]>([]);

  useEffect(() => {
    if (preloaded) return;
    const fetch_ = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ grade: config.grade, subject: config.subject, chapter: config.chapter, limit: '15' });
        if (config.difficulty !== 'All') params.append('difficulty', config.difficulty);
        const res = await fetch(`/api/practice?${params}`);
        const data = await res.json();
        setQuestions(data.questions || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetch_();
  }, [config, preloaded]);

  const current = questions[currentIdx];
  const parsedOptions = (): string[] => {
    if (!current?.options) return [];
    try { return Array.isArray(current.options) ? current.options : JSON.parse(current.options); }
    catch { return []; }
  };

  const handleSelect = (opt: string) => {
    if (revealed) return;
    setSelected(opt);
    setRevealed(true);
    const correct = opt.trim() === current?.correctAnswer?.trim();
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { qId: current.id, correct }]);
  };

  const handleNext = async () => {
    if (currentIdx >= questions.length - 1) {
      // Save session
      try {
        await fetch('/api/practice/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId, grade: config.grade, subject: config.subject, chapter: config.chapter,
            questionsAttempted: answers.length + 1,
            correctCount: score,
            totalQuestions: questions.length,
          }),
        });
      } catch {}
      setFinished(true);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
      setBookmarked(false);
    }
  };

  const handleBookmark = async () => {
    if (bookmarked || !current) return;
    setBookmarking(true);
    try {
      await fetch('/api/bookmarks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, questionId: current.id }) });
      setBookmarked(true);
    } catch {}
    setBookmarking(false);
  };

  if (loading) {
    return (
      <div className="h-96 flex flex-col items-center justify-center gap-4 text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
        <p className="text-sm">Loading practice questions...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-lg mx-auto p-8 text-center space-y-4">
        <p className="text-slate-500">No questions found for this selection. Try a different chapter or difficulty.</p>
        <button onClick={onExit} className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-bold">Go Back</button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto p-8 space-y-6 animate-fadeIn">
        <div className={`rounded-2xl p-8 text-center text-white shadow-xl ${pct >= 75 ? 'bg-emerald-600' : pct >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}>
          <Trophy className="w-12 h-12 mx-auto mb-3 opacity-90" />
          <h2 className="text-3xl font-extrabold">{score} / {questions.length}</h2>
          <p className="text-lg font-bold mt-1">{pct}% Accuracy</p>
          <p className="mt-2 opacity-80 text-sm">{config.chapter} · {config.subject} · Class {config.grade}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          {[['✅ Correct', score, 'emerald'], ['❌ Wrong', questions.length - score, 'red'], ['📊 Accuracy', `${pct}%`, 'violet']].map(([label, val, color]) => (
            <div key={label as string} className={`p-4 rounded-xl bg-${color}-50 dark:bg-${color}-950/30 border border-${color}-200`}>
              <div className="text-lg font-extrabold text-slate-900 dark:text-slate-100">{val}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={() => { setCurrentIdx(0); setScore(0); setFinished(false); setAnswers([]); setSelected(null); setRevealed(false); }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 transition-colors">
            <RotateCcw className="w-4 h-4" /> Practice Again
          </button>
          <button onClick={onExit}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Home className="w-4 h-4" /> Back to Hub
          </button>
        </div>
      </div>
    );
  }

  const opts = parsedOptions();
  const isCorrect = selected?.trim() === current?.correctAnswer?.trim();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 animate-fadeIn">
      {/* Progress bar + meta */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{config.chapter} · Class {config.grade} {config.subject}</span>
          <span>{currentIdx + 1} / {questions.length}</span>
        </div>
        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentIdx) / questions.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${current?.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-600' : current?.difficulty === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'}`}>
            {current?.difficulty}
          </span>
          <span className="text-xs font-bold text-slate-400">Score: {score}</span>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm leading-relaxed">
          Q{currentIdx + 1}. {current?.content}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {opts.map((opt, i) => {
          const letter = String.fromCharCode(65 + i);
          const isThisSelected = selected === opt;
          const isThisCorrect = opt.trim() === current?.correctAnswer?.trim();
          let cls = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-violet-400';
          if (revealed) {
            if (isThisCorrect) cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold';
            else if (isThisSelected && !isThisCorrect) cls = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-bold';
          }
          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              disabled={revealed}
              className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all ${cls} disabled:cursor-default`}
            >
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${revealed && isThisCorrect ? 'bg-emerald-500 text-white' : revealed && isThisSelected ? 'bg-red-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                {revealed && isThisCorrect ? <Check className="w-3.5 h-3.5" /> : revealed && isThisSelected ? <X className="w-3.5 h-3.5" /> : letter}
              </span>
              <span className="text-xs leading-snug">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Feedback + actions */}
      {revealed && (
        <div className={`flex items-center justify-between p-4 rounded-xl border animate-fadeIn ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200' : 'bg-red-50 dark:bg-red-950/30 border-red-200'}`}>
          <div className="flex items-center gap-3">
            {isCorrect
              ? <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              : <X className="w-5 h-5 text-red-500 shrink-0" />}
            <div>
              <p className={`text-xs font-bold ${isCorrect ? 'text-emerald-700' : 'text-red-600'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </p>
              {!isCorrect && <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Correct: <span className="font-bold">{current?.correctAnswer}</span></p>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleBookmark} disabled={bookmarking || bookmarked}
              className={`p-2 rounded-lg transition-colors ${bookmarked ? 'bg-amber-100 text-amber-600' : 'bg-white dark:bg-slate-800 text-slate-400 hover:text-amber-500 border border-slate-200 dark:border-slate-700'}`}>
              <Bookmark className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
            </button>
            <button onClick={handleNext}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-white text-xs font-bold transition-colors ${isCorrect ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-600 hover:bg-slate-700'}`}>
              {currentIdx >= questions.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
