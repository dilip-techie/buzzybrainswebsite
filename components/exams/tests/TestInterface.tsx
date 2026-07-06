'use strict';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Clock, Send, ChevronLeft, ChevronRight, AlertTriangle, X, ShieldCheck, Eye } from 'lucide-react';
import { QuestionType } from '@prisma/client';
import LatexContent from '@/components/exams/ui/LatexContent';
import { useDialog } from '@/components/exams/ui/DialogProvider';

// Simple hash to generate a seed from a string (attemptId)
function cyrb128(str: string) {
  let h1 = 1779033703, h2 = 3144134277,
      h3 = 1013904242, h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
      k = str.charCodeAt(i);
      h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}

// Seeded pseudo-random number generator
function mulberry32(a: number) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

interface TestInterfaceProps {
  attemptId: string;
  testDetails: {
    title: string;
    totalMarks: number;
    questionsList: any[];
  };
  durationMins: number;
  onFinishSubmit: (summary: any) => void;
  onCancel: () => void;
}

export default function TestInterface({
  attemptId,
  testDetails,
  durationMins,
  onFinishSubmit,
  onCancel,
}: TestInterfaceProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(durationMins * 60);
  const [submitting, setSubmitting] = useState(false);
  const [tabWarnings, setTabWarnings] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [showTabWarning, setShowTabWarning] = useState(false);
  const { toast } = useDialog();

  // Deterministically shuffle questions and options based on the attemptId
  const questionsList = useMemo(() => {
    if (!testDetails?.questionsList || testDetails.questionsList.length === 0) return [];

    // Initialize seeded PRNG
    const seed = cyrb128(attemptId);
    const rand = mulberry32(seed[0]);

    // 1. Map and shuffle options within MCQs
    const processedList = testDetails.questionsList.map((item) => {
      const q = item.question;
      if (q && q.type === QuestionType.MCQ && Array.isArray(q.options)) {
        const shuffledOptions = [...q.options];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
          const j = Math.floor(rand() * (i + 1));
          [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        return {
          ...item,
          question: {
            ...q,
            options: shuffledOptions,
          },
        };
      }
      return item;
    });

    // 2. Shuffle the overall order of the questions
    for (let i = processedList.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [processedList[i], processedList[j]] = [processedList[j], processedList[i]];
    }

    return processedList;
  }, [testDetails?.questionsList, attemptId]);

  const currentItem = questionsList[currentIdx];
  const q = currentItem?.question;

  useEffect(() => {
    if (!agreed) return;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabWarnings((count) => count + 1);
        setShowTabWarning(true);
        setTimeout(() => setShowTabWarning(false), 4000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [agreed]);

  const handleFinalSubmit = useCallback(async () => {
    if (submitting) return;
    setSubmitting(true);

    try {
      // Format payload
      const payloadAnswers = Object.entries(answers).map(([questionId, studentAnswer]) => ({
        questionId,
        studentAnswer,
      }));

      const res = await fetch('/api/attempts/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attemptId,
          answers: payloadAnswers,
          tabSwitchCount: tabWarnings,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        onFinishSubmit(data.attemptSummary);
      } else {
        toast(data.error || 'Submission processing issue occurred.', 'error');
        onCancel();
      }
    } catch (err) {
      console.error('Submission failure', err);
      onCancel();
    } finally {
      setSubmitting(false);
    }
  }, [answers, attemptId, onCancel, onFinishSubmit, submitting, tabWarnings]);

  // Countdown timer logic (only when agreed)
  useEffect(() => {
    if (timeLeft <= 0) {
      // Auto-submit instantly when countdown hits zero
      handleFinalSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [handleFinalSubmit, timeLeft]);

  const handleOptionChange = (value: string) => {
    if (!q?.id) return;
    setAnswers((prev) => ({
      ...prev,
      [q.id]: value,
    }));
  };

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeLeft < 300; // < 5 mins turns warning red

  // Calculate unattempted
  const totalQuestions = questionsList.length;
  const attemptedCount = Object.keys(answers).length;
  const unattemptedCount = totalQuestions - attemptedCount;

  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // ─── Pre-test agreement gate ────────────────────────────────────────
  if (!agreed) {
    return (
      <div className="fixed inset-0 z-[999] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-bold text-white">Test Integrity Agreement</h1>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Before starting this test, please read and agree to the following rules.
            </p>
          </div>

          <div className="space-y-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <Eye className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p><strong className="text-white">Tab switching is monitored.</strong> Every time you switch tabs or minimize the browser, it will be recorded and visible to your teacher.</p>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <p><strong className="text-white">Do not use external resources.</strong> This is a closed-book assessment. Using another tab will be flagged as a violation.</p>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <p><strong className="text-white">Timer starts immediately.</strong> You have {durationMins} minutes to complete {questionsList.length} questions.</p>
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" checked={agreeChecked} onChange={e => setAgreeChecked(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded border-slate-600" />
            <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
              I agree to follow the test integrity rules. I understand that tab switching will be tracked.
            </span>
          </label>

          <button
            onClick={() => setAgreed(true)}
            disabled={!agreeChecked}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/20"
          >
            I Agree — Start Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 flex flex-col z-50 animate-fadeIn">
      {/* Tab Switch Warning Overlay */}
      {showTabWarning && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none animate-fadeIn">
          <div className="bg-red-600 text-white rounded-2xl px-8 py-5 shadow-2xl shadow-red-600/40 text-center space-y-2 pointer-events-auto border-2 border-red-400">
            <AlertTriangle className="w-8 h-8 mx-auto" />
            <p className="text-lg font-black">Tab Switching Detected!</p>
            <p className="text-xs font-medium opacity-80">Your teacher will see this. Total switches: {tabWarnings}</p>
          </div>
        </div>
      )}
      {/* Sticky Premium Topbar */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
          <div>
            <h1 className="font-bold text-slate-900 dark:text-slate-100 text-sm line-clamp-1">
              {testDetails?.title || 'Live Assessment Session'}
            </h1>
            <span className="text-[10px] text-slate-400 block tracking-wide">Secure Distraction-Free Environment</span>
          </div>
        </div>

        {/* Persistent sticky countdown timer */}
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 text-xs font-mono font-extrabold transition-all ${
            isLowTime 
              ? 'bg-red-50 dark:bg-red-950/50 border-red-500 text-red-600 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]' 
              : 'bg-white dark:bg-slate-800 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
          }`}>
            <Clock className="w-4 h-4" />
            <span className="text-sm tracking-wider">{formatTime(timeLeft)}</span>
            {isLowTime && <span className="text-[9px] uppercase font-sans ml-1 text-red-500">Warning</span>}
          </div>

          {tabWarnings > 0 && (
            <div className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-[10px] font-extrabold uppercase text-amber-700 shadow-sm shadow-amber-200/50">
              Focus warnings: {tabWarnings}
            </div>
          )}

          <button
            onClick={() => setShowSubmitModal(true)}
            disabled={submitting}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 active:scale-95 disabled:opacity-50 text-white font-extrabold text-xs transition-all shadow-lg shadow-emerald-500/30 border border-emerald-400"
          >
            <Send className="w-4 h-4" />
            {submitting ? 'Submitting...' : 'Final Submit'}
          </button>
        </div>
      </header>

      {/* Split-screen layout main block */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left pane: Question navigation grid */}
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-indigo-400 uppercase tracking-widest">
                Question Grid
              </span>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                {attemptedCount}/{totalQuestions} Done
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2.5">
              {questionsList.map((item, idx) => {
                const qId = item.question?.id;
                const isAnswered = qId ? !!answers[qId] : false;
                const isActive = idx === currentIdx;

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-full aspect-square rounded-xl font-extrabold text-sm flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? 'ring-[3px] ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 bg-indigo-600 text-white shadow-lg scale-110 z-10'
                        : isAnswered
                        ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700/50 hover:bg-emerald-200'
                        : 'bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick status map layout hints */}
          <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs font-semibold">
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-400"></span>
                <span>Attempted</span>
              </div>
              <span>{attemptedCount}</span>
            </div>
            <div className="flex items-center justify-between text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-300 dark:bg-slate-600"></span>
                <span>Pending</span>
              </div>
              <span>{unattemptedCount}</span>
            </div>
          </div>
        </aside>

        {/* Right pane: Current active candidate question text and option forms */}
        <main className="flex-1 bg-slate-50/50 dark:bg-slate-950 flex flex-col overflow-hidden relative">
          <div className="flex-1 overflow-y-auto p-8 lg:p-12">
            {currentItem ? (
              <div className="max-w-4xl mx-auto w-full space-y-8 pb-24">
                {/* Prompt meta */}
                <div className="flex items-center justify-between border-b-2 border-indigo-100 dark:border-indigo-900/30 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      Q{currentIdx + 1}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                        Grade {currentItem.question?.grade || '10'} • {currentItem.question?.subject || 'Assessment'}
                      </span>
                      <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200 bg-slate-200/50 dark:bg-slate-800 px-2 py-1 rounded-md">
                        {currentItem.marks} Marks
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest shadow-sm">
                    {q?.type === 'MCQ' ? 'Multiple Choice' : 'Subjective'}
                  </span>
                </div>

                {/* Main Prompt Statement */}
                <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-slate-900 dark:text-slate-100 font-semibold text-base sm:text-lg leading-relaxed whitespace-pre-line">
                      <LatexContent content={q?.content || 'Question Prompt Missing'} />
                  </p>
                </div>

                {/* Responsive Options Layout Mapping */}
                {q?.type === QuestionType.MCQ ? (
                  <div className="space-y-4">
                    <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest block pl-2">
                      Select your answer
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {q?.options && Array.isArray(q.options) && q.options.map((optionText: string, oIdx: number) => {
                        const isSelected = q.id ? answers[q.id] === optionText : false;
                        const choiceLetter = String.fromCharCode(65 + oIdx);

                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleOptionChange(optionText)}
                            className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 flex items-center gap-4 group ${
                              isSelected
                                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 shadow-md shadow-indigo-500/10 scale-[1.02]'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-300 hover:bg-slate-50 hover:shadow-sm'
                            }`}
                          >
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 transition-colors ${
                              isSelected 
                                ? 'bg-indigo-600 text-white shadow-md' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                            }`}>
                              {choiceLetter}
                            </span>
                            <div className="flex-1 text-sm"><LatexContent content={optionText} /></div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest block pl-2">
                      Subjective Input Response
                    </span>
                    <textarea
                      rows={8}
                      placeholder="Type your detailed answer here..."
                      value={q?.id ? answers[q.id] || '' : ''}
                      onChange={(e) => handleOptionChange(e.target.value)}
                      className="w-full p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium resize-none shadow-sm"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                </div>
                <p className="font-medium text-sm tracking-wide">Loading secure interface...</p>
              </div>
            )}
          </div>

          {/* Prominent Footer Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 px-8 flex items-center justify-between">
            <button
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 disabled:opacity-40 text-slate-600 dark:text-slate-400 text-xs hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Item
            </button>

            <span className="text-[11px] font-semibold text-slate-400">
              Question {currentIdx + 1} of {questionsList.length}
            </span>

            <button
              type="button"
              onClick={() => setCurrentIdx((prev) => Math.min(questionsList.length - 1, prev + 1))}
              disabled={currentIdx === questionsList.length - 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 disabled:opacity-40 text-slate-600 dark:text-slate-400 text-xs hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              Next Item <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-md w-full p-6 space-y-5">
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Confirm Submission</h2>
              <p className="text-xs text-slate-500">Once submitted, you cannot modify your answers.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center">
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block">{attemptedCount}</span>
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Attempted</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span className="text-2xl font-black text-slate-500 block">{unattemptedCount}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Unattempted</span>
              </div>
            </div>

            {unattemptedCount > 0 && (
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-medium text-center">
                ⚠ You have {unattemptedCount} unanswered question{unattemptedCount > 1 ? 's' : ''}. Are you sure?
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Go Back
              </button>
              <button
                onClick={() => { setShowSubmitModal(false); handleFinalSubmit(); }}
                disabled={submitting}
                className="flex-1 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                {submitting ? 'Submitting...' : 'Confirm Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
