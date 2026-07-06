'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Zap, ChevronRight, ChevronLeft, AlertCircle, CheckCircle2, RefreshCw, Layers, BookOpen, Clock, Target, Timer, Send, Shuffle, ChevronDown, X } from 'lucide-react';

interface BatchOpt { id: string; name: string; grade: string; _count: { enrollments: number }; }
interface SubjectInfo { name: string; total: number; counts: Record<string, number>; }
interface ChapterInfo { name: string; total: number; counts: Record<string, number>; }
interface QuestionItem { id: string; content: string; topic: string; chapter: string | null; difficulty: string; options: string[] | null; correctAnswer: string | null; }

const GRADES = ['7','8','9','10','11','12'];
const DIFF_KEYS = ['Easy','Medium','Hard','Olympiad'] as const;
const BUFFER_OPTIONS = [
  { label: '5 minutes', value: 5 },
  { label: '30 minutes', value: 30 },
  { label: '1 hour', value: 60 },
  { label: '2 hours', value: 120 },
  { label: '3 hours', value: 180 },
];

export default function QuickTestWizard({ userId, onComplete }: { userId: string; onComplete: () => void }) {
  // Fixed steps: 1-Class, 2-Batch, 3-Subject, 4-Chapter, 5-Duration, 6-Counts
  // Dynamic: one picker step per non-zero difficulty
  // Then: Expiration, Review
  const [step, setStep] = useState(1);

  const [grade, setGrade] = useState('');
  const [batches, setBatches] = useState<BatchOpt[]>([]);
  const [batchId, setBatchId] = useState('');
  const [subjects, setSubjects] = useState<SubjectInfo[]>([]);
  const [subject, setSubject] = useState('');
  const [subjectsLoading, setSubjectsLoading] = useState(false);
  const [chapters, setChapters] = useState<ChapterInfo[]>([]);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [chaptersLoading, setChaptersLoading] = useState(false);
  const [isMixPractice, setIsMixPractice] = useState(false);
  const [durationMins, setDurationMins] = useState(30);
  const [diffCounts, setDiffCounts] = useState({ Easy: 0, Medium: 0, Hard: 0, Olympiad: 0 });
  const [customCountMode, setCustomCountMode] = useState<Record<string, boolean>>({});
  const [bufferMins, setBufferMins] = useState(60);
  const [title, setTitle] = useState('');

  // Question picker state
  const [pickerQuestions, setPickerQuestions] = useState<QuestionItem[]>([]);
  const [pickerLoading, setPickerLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Record<string, string[]>>({ Easy: [], Medium: [], Hard: [], Olympiad: [] });

  const [creating, setCreating] = useState(false);
  const [result, setResult] = useState<{ message: string; ok: boolean } | null>(null);

  // Compute which difficulties have questions to pick
  const activeDiffs = DIFF_KEYS.filter(k => diffCounts[k] > 0);
  // Total steps: 6 fixed + activeDiffs.length pickers + 2 (expiration + review)
  const totalSteps = 6 + activeDiffs.length + 2;

  // Compute chapter-scoped availability for the counts step
  const chapterScopedCounts: Record<string, number> = { Easy: 0, Medium: 0, Hard: 0, Olympiad: 0 };
  if (selectedChapters.length > 0) {
    for (const ch of chapters.filter(c => selectedChapters.includes(c.name))) {
      for (const k of DIFF_KEYS) chapterScopedCounts[k] += (ch.counts[k] || 0);
    }
  }

  // Map step number to what it shows
  const getStepType = (s: number): { type: string; diff?: string } => {
    if (s <= 6) return { type: ['class','batch','subject','chapter','duration','counts'][s-1] };
    const pickerIdx = s - 7;
    if (pickerIdx < activeDiffs.length) return { type: 'picker', diff: activeDiffs[pickerIdx] };
    const afterPickers = s - 7 - activeDiffs.length;
    return { type: afterPickers === 0 ? 'expiration' : 'review' };
  };

  const currentStep = getStepType(step);

  // Fetch batches
  useEffect(() => {
    if (!grade) { setBatches([]); setBatchId(''); return; }
    (async () => {
      const r = await fetch('/api/batches'); const d = await r.json();
      setBatches((d.batches || []).filter((b: any) => b.grade === grade && b.isActive));
      setBatchId('');
    })();
  }, [grade]);

  // Fetch subjects
  useEffect(() => {
    if (!grade) { setSubjects([]); setSubject(''); return; }
    setSubjectsLoading(true);
    (async () => {
      const r = await fetch(`/api/questions/subjects?grade=${grade}`); const d = await r.json();
      setSubjects(d.subjects || []); setSubject('');
      setSubjectsLoading(false);
    })();
  }, [grade]);

  // Fetch chapters when grade+subject are set
  useEffect(() => {
    if (!grade || !subject) { setChapters([]); setSelectedChapters([]); return; }
    setChaptersLoading(true);
    (async () => {
      const r = await fetch(`/api/questions/chapters?grade=${grade}&subject=${subject}`); const d = await r.json();
      setChapters(d.chapters || []); setSelectedChapters([]); setIsMixPractice(false);
      setChaptersLoading(false);
    })();
  }, [grade, subject]);

  // Auto title
  useEffect(() => { if (grade && subject) setTitle(`Class ${grade} ${subject} Test`); }, [grade, subject]);

  // Fetch questions when entering a picker step (scoped by selected chapters)
  useEffect(() => {
    if (currentStep.type !== 'picker' || !currentStep.diff) return;
    setPickerLoading(true);
    (async () => {
      let url = `/api/questions?grade=${grade}&subject=${subject}&difficulty=${currentStep.diff}`;
      if (selectedChapters.length > 0) url += `&chapter=${encodeURIComponent(selectedChapters.join(','))}`;
      const r = await fetch(url);
      const d = await r.json();
      setPickerQuestions(d.questions || []);
      setPickerLoading(false);
    })();
  }, [step, currentStep.type, currentStep.diff, grade, subject, selectedChapters]);

  const toggleQuestion = (qId: string, diff: string) => {
    setSelectedIds(prev => {
      const arr = prev[diff] || [];
      return { ...prev, [diff]: arr.includes(qId) ? arr.filter(id => id !== qId) : [...arr, qId] };
    });
  };

  // Validation
  const countErrors: Record<string, string> = {};
  if (selectedChapters.length > 0) {
    for (const k of DIFF_KEYS) {
      const avail = chapterScopedCounts[k] || 0;
      if (diffCounts[k] > avail) countErrors[k] = `Only ${avail} available`;
    }
  }
  const totalQ = DIFF_KEYS.reduce((s, k) => s + diffCounts[k], 0);

  const canProceed = () => {
    switch (currentStep.type) {
      case 'class': return !!grade;
      case 'batch': return !!batchId;
      case 'subject': return !!subject;
      case 'chapter': return selectedChapters.length > 0;
      case 'duration': return durationMins > 0;
      case 'counts': return totalQ > 0 && Object.keys(countErrors).length === 0;
      case 'picker': return currentStep.diff ? (selectedIds[currentStep.diff]?.length || 0) === diffCounts[currentStep.diff as keyof typeof diffCounts] : false;
      case 'expiration': return true;
      case 'review': return !!title;
      default: return false;
    }
  };

  const handleCreate = async () => {
    setCreating(true); setResult(null);
    const allIds = DIFF_KEYS.flatMap(k => selectedIds[k] || []);
    try {
      const res = await fetch('/api/tests/quick-create', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade, subject, batchId, questionIds: allIds, durationMins, expirationBufferMins: bufferMins, title }),
      });
      const data = await res.json();
      setResult({ message: data.message || data.error, ok: res.ok });
      if (res.ok) setTimeout(() => onComplete(), 2000);
    } catch { setResult({ message: 'Network error', ok: false }); }
    finally { setCreating(false); }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"><Zap className="w-5 h-5 text-indigo-600" /> Create Test</h2>
        <p className="text-xs text-slate-500 mt-0.5">Pick questions manually, set duration, and dispatch to a batch.</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-1">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${i < step ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-800'}`} />
        ))}
        <span className="ml-2 text-[10px] font-bold text-slate-400">{step}/{totalSteps}</span>
      </div>

      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 min-h-[220px]">

        {/* Step: Class */}
        {currentStep.type === 'class' && (
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-500" /> Select Class</label>
            <div className="grid grid-cols-3 gap-2">
              {GRADES.map(g => (
                <button key={g} onClick={() => setGrade(g)} className={`p-3 rounded-lg text-sm font-bold border-2 transition-all ${grade === g ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 shadow-md' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-300'}`}>Class {g}</button>
              ))}
            </div>
          </div>
        )}

        {/* Step: Batch */}
        {currentStep.type === 'batch' && (
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-500" /> Select Batch (Class {grade})</label>
            {batches.length === 0 ? <p className="text-xs text-amber-500 py-4 text-center">No active batches for Class {grade}.</p> : (
              <div className="space-y-2">{batches.map(b => (
                <button key={b.id} onClick={() => setBatchId(b.id)} className={`w-full p-4 rounded-lg text-left border-2 transition-all flex items-center justify-between ${batchId === b.id ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'}`}>
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{b.name}</span>
                  <span className="text-xs text-slate-500">{b._count.enrollments} students</span>
                </button>
              ))}</div>
            )}
          </div>
        )}

        {/* Step: Subject */}
        {currentStep.type === 'subject' && (
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><BookOpen className="w-4 h-4 text-indigo-500" /> Select Subject</label>
            {subjectsLoading ? <p className="text-xs text-slate-400 flex items-center gap-2"><RefreshCw className="w-3 h-3 animate-spin" /> Loading...</p> : subjects.length === 0 ? <p className="text-xs text-amber-500 py-4 text-center">No MCQ questions for Class {grade}.</p> : (
              <div className="space-y-2">{subjects.map(s => (
                <button key={s.name} onClick={() => setSubject(s.name)} className={`w-full p-4 rounded-lg text-left border-2 transition-all flex items-center justify-between ${subject === s.name ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'}`}>
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{s.name}</span>
                  <span className="text-xs text-slate-500">{s.total} questions</span>
                </button>
              ))}</div>
            )}
          </div>
        )}

        {/* Step: Chapter */}
        {currentStep.type === 'chapter' && (
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><BookOpen className="w-4 h-4 text-indigo-500" /> Select Chapter(s)</label>
            <p className="text-[11px] text-slate-400">Pick specific chapters or enable Mix Practice to include all chapters.</p>
            {/* Mix Practice toggle */}
            <button onClick={() => { const next = !isMixPractice; setIsMixPractice(next); setSelectedChapters(next ? chapters.map(c => c.name) : []); }}
              className={`w-full p-3 rounded-lg text-left border-2 transition-all flex items-center gap-3 ${isMixPractice ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'}`}>
              <Shuffle className={`w-4 h-4 ${isMixPractice ? 'text-indigo-600' : 'text-slate-400'}`} />
              <div><span className="font-bold text-sm text-slate-900 dark:text-slate-100">Mix Practice (All Chapters)</span>
              <p className="text-[10px] text-slate-400 mt-0.5">Questions from every chapter combined</p></div>
              {isMixPractice && <CheckCircle2 className="w-4 h-4 text-indigo-600 ml-auto" />}
            </button>
            {!isMixPractice && (
              chaptersLoading ? <p className="text-xs text-slate-400 flex items-center gap-2 py-2"><RefreshCw className="w-3 h-3 animate-spin" /> Loading chapters...</p>
              : chapters.length === 0 ? <p className="text-xs text-amber-500 py-4 text-center">No chapters found for {subject} Class {grade}.</p>
              : <div className="max-h-[320px] overflow-y-auto space-y-1.5 pr-1">{chapters.map(ch => {
                  const isSel = selectedChapters.includes(ch.name);
                  return (
                    <button key={ch.name} onClick={() => setSelectedChapters(prev => isSel ? prev.filter(c => c !== ch.name) : [...prev, ch.name])}
                      className={`w-full p-3 rounded-lg text-left border-2 transition-all flex items-center gap-3 ${isSel ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'}`}>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${isSel ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 dark:border-slate-600'}`}>
                        {isSel && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{ch.name}</span>
                        <p className="text-[10px] text-slate-400 mt-0.5">E:{ch.counts.Easy || 0} M:{ch.counts.Medium || 0} H:{ch.counts.Hard || 0} O:{ch.counts.Olympiad || 0} — {ch.total} total</p>
                      </div>
                    </button>
                  );
                })}</div>
            )}
            {selectedChapters.length > 0 && (
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-center text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                {selectedChapters.length} chapter{selectedChapters.length > 1 ? 's' : ''} selected
              </div>
            )}
          </div>
        )}

        {/* Step: Duration */}
        {currentStep.type === 'duration' && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-500" /> Test Duration</label>
            <div className="relative">
              <select value={durationMins} onChange={e => setDurationMins(Number(e.target.value))}
                className="w-full p-3 pr-10 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm font-bold focus:outline-none focus:border-indigo-500 cursor-pointer appearance-none">
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>1 hour</option>
                <option value={75}>1 hour 15 minutes</option>
                <option value={90}>1 hour 30 minutes</option>
                <option value={105}>1 hour 45 minutes</option>
                <option value={120}>2 hours</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        )}

        {/* Step: Counts */}
        {currentStep.type === 'counts' && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Target className="w-4 h-4 text-indigo-500" /> Number of Questions per Difficulty</label>
            <p className="text-[11px] text-slate-400">Enter how many questions you want from each difficulty level.</p>
            <div className="space-y-3">
              {DIFF_KEYS.map(key => {
                const avail = chapterScopedCounts[key] || 0;
                const hasErr = !!countErrors[key];
                return (
                  <div key={key} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-400">{key}</label>
                      <span className="text-[10px] text-slate-400">{avail} available</span>
                    </div>
                    {customCountMode[key] ? (
                      <div className="flex items-center gap-2">
                        <input type="number" min={0} max={avail} value={diffCounts[key]} onChange={e => setDiffCounts(prev => ({ ...prev, [key]: Math.max(0, Number(e.target.value)) }))}
                          className={`flex-1 p-2.5 rounded-lg border-2 text-sm font-bold focus:outline-none ${hasErr ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-600 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-indigo-500'}`} />
                        <button type="button" onClick={() => {
                          setCustomCountMode(prev => ({ ...prev, [key]: false }));
                          setDiffCounts(prev => ({ ...prev, [key]: 0 }));
                        }} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (() => {
                      const stepSize = avail >= 10 ? 5 : 2;
                      const opts = [0];
                      if (avail > 0) {
                        for (let i = stepSize; i <= avail; i += stepSize) {
                          opts.push(i);
                        }
                        // If the exact max isn't already there and user might want it
                        if (opts[opts.length - 1] !== avail && avail < 10) opts.push(avail);
                      }
                      const currentValue = opts.includes(diffCounts[key]) ? diffCounts[key].toString() : 'custom';
                      
                      return (
                        <div className="relative">
                          <select value={currentValue} 
                            onChange={e => {
                              if (e.target.value === 'custom') {
                                setCustomCountMode(prev => ({ ...prev, [key]: true }));
                              } else {
                                setDiffCounts(prev => ({ ...prev, [key]: Number(e.target.value) }));
                              }
                            }}
                            className={`w-full p-2.5 pr-10 rounded-lg border-2 text-sm font-bold focus:outline-none appearance-none cursor-pointer ${hasErr ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-600 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-indigo-500'}`}>
                            {opts.map(opt => <option key={opt} value={opt}>{opt === 0 ? '0 (None)' : opt}</option>)}
                            <option value="custom">Custom...</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      );
                    })()}
                    {hasErr && <p className="text-[10px] text-red-500 font-bold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {countErrors[key]}</p>}
                  </div>
                );
              })}
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
              Total: {totalQ} questions • {totalQ * 5} marks
            </div>
          </div>
        )}

        {/* Step: Question Picker */}
        {currentStep.type === 'picker' && currentStep.diff && (() => {
          const diff = currentStep.diff;
          const needed = diffCounts[diff as keyof typeof diffCounts];
          const picked = selectedIds[diff]?.length || 0;
          const done = picked === needed;
          return (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Select {diff} Questions</label>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${done ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600' : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600'}`}>
                  {picked} of {needed} selected {done ? '✓' : ''}
                </span>
              </div>
              <p className="text-[10px] text-slate-400">Class {grade} • {subject} • {diff}</p>
              {pickerLoading ? <p className="text-xs text-slate-400 flex items-center gap-2 py-4"><RefreshCw className="w-3 h-3 animate-spin" /> Loading questions...</p> : pickerQuestions.length === 0 ? <p className="text-xs text-slate-400 italic py-4 text-center">No questions found.</p> : (
                <div className="max-h-[400px] overflow-y-auto space-y-1.5 pr-1">
                  {pickerQuestions.map(q => {
                    const isSelected = selectedIds[diff]?.includes(q.id);
                    const atLimit = picked >= needed && !isSelected;
                    return (
                      <button key={q.id} onClick={() => !atLimit && toggleQuestion(q.id, diff)} disabled={atLimit}
                        className={`w-full p-3 rounded-lg text-left border-2 transition-all flex items-start gap-3 ${isSelected ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : atLimit ? 'border-slate-100 dark:border-slate-800 opacity-40 cursor-not-allowed' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'}`}>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 dark:border-slate-600'}`}>
                          {isSelected && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-900 dark:text-slate-100">{q.content}</p>
                          <p className="text-[10px] text-slate-400 mt-1">{q.topic}{q.chapter ? ` • ${q.chapter}` : ''}</p>
                          {q.options && Array.isArray(q.options) && (
                            <div className="mt-2 space-y-1">
                              {(q.options as string[]).map((opt, i) => {
                                const isCorrect = opt === q.correctAnswer;
                                return (
                                  <div key={i} className={`text-[10px] px-2 py-1 rounded flex items-start gap-1.5 ${
                                    isCorrect
                                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold'
                                      : 'text-slate-500 dark:text-slate-400'
                                  }`}>
                                    <span className="shrink-0 font-bold">{String.fromCharCode(65 + i)}.</span>
                                    <span>{opt}</span>
                                    {isCorrect && <span className="ml-auto shrink-0">✓</span>}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })()}

        {/* Step: Expiration */}
        {currentStep.type === 'expiration' && (
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Timer className="w-4 h-4 text-indigo-500" /> Expiration Buffer</label>
            <p className="text-[11px] text-slate-400">Additional time after test duration before it expires. Test of {durationMins} min + buffer.</p>
            <div className="space-y-2">{BUFFER_OPTIONS.map(opt => (
              <button key={opt.value} onClick={() => setBufferMins(opt.value)} className={`w-full p-3 rounded-lg text-left border-2 transition-all flex items-center justify-between ${bufferMins === opt.value ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'}`}>
                <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{opt.label}</span>
                <span className="text-xs text-slate-500">Total: {durationMins + opt.value} min window</span>
              </button>
            ))}</div>
          </div>
        )}

        {/* Step: Review */}
        {currentStep.type === 'review' && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Send className="w-4 h-4 text-indigo-500" /> Review & Create</label>
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-500">Test Title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm font-bold focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Class</span><span className="font-bold text-slate-900 dark:text-white">{grade}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Batch</span><span className="font-bold text-slate-900 dark:text-white">{batches.find(b => b.id === batchId)?.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Subject</span><span className="font-bold text-slate-900 dark:text-white">{subject}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Chapters</span><span className="font-bold text-slate-900 dark:text-white text-right max-w-[200px] truncate">{isMixPractice ? 'Mix Practice (All)' : selectedChapters.join(', ')}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Questions</span><span className="font-bold text-slate-900 dark:text-white">{totalQ} ({totalQ * 5} marks)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Breakdown</span><span className="font-bold text-slate-900 dark:text-white">E:{diffCounts.Easy} M:{diffCounts.Medium} H:{diffCounts.Hard} O:{diffCounts.Olympiad}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Duration</span><span className="font-bold text-slate-900 dark:text-white">{durationMins} min</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Expires</span><span className="font-bold text-slate-900 dark:text-white">{durationMins + bufferMins} min from now</span></div>
            </div>
            {result && (
              <div className={`p-3 rounded-lg text-xs font-bold text-center ${result.ok ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600' : 'bg-red-50 dark:bg-red-950/30 text-red-600'}`}>
                {result.ok ? <CheckCircle2 className="w-4 h-4 inline mr-1" /> : <AlertCircle className="w-4 h-4 inline mr-1" />}
                {result.message}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button onClick={() => setStep(p => p - 1)} disabled={step === 1} className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 text-xs font-bold disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <ChevronLeft className="w-3.5 h-3.5" /> Back
        </button>
        {step < totalSteps ? (
          <button onClick={() => setStep(p => p + 1)} disabled={!canProceed()} className="flex items-center gap-1 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-md">
            Next <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button onClick={handleCreate} disabled={creating || !title} className="flex items-center gap-1 px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-500/20">
            {creating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5" />}
            {creating ? 'Creating...' : 'Create & Dispatch'}
          </button>
        )}
      </div>
    </div>
  );
}
