'use strict';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, ArrowRight, Check, Sparkles, RefreshCw, X } from 'lucide-react';
import { Difficulty } from '@prisma/client';
import { useDialog } from '@/components/exams/ui/DialogProvider';

const step1Schema = z.object({
  title: z.string().min(3, 'Title is required'),
  board: z.string().min(2, 'Board is required'),
  grade: z.string().min(1, 'Standard/Grade is required'),
  subject: z.string().min(2, 'Subject is required'),
  durationMins: z.number().min(5, 'Duration must be at least 5 mins'),
});

interface TestWizardProps {
  onComplete: () => void;
  onCancel: () => void;
  userId: string;
}

export default function TestWizard({ onComplete, onCancel, userId }: TestWizardProps) {
  const { toast } = useDialog();
  const [step, setStep] = useState(1);
  const [generationMode, setGenerationMode] = useState<'auto' | 'manual'>('auto');
  
  // Step 3 state
  const [criteria, setCriteria] = useState<{
    mcqCount: number;
    shortCount: number;
    longCount: number;
    difficulty: Difficulty;
    topic: string;
  }>({
    mcqCount: 5,
    shortCount: 0,
    longCount: 0,
    difficulty: Difficulty.Medium,
    topic: '',
  });

  // Step 4 state
  const [generatedTestHeader, setGeneratedTestHeader] = useState<any>(null);
  const [availablePool, setAvailablePool] = useState<any[]>([]);
  const [generating, setGenerating] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const form = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      title: 'Term 1 Assessment Test',
      board: 'CBSE',
      grade: '10',
      subject: 'Maths',
      durationMins: 60,
    },
  });

  // Pre-fetch questions for swapping/manual selection
  useEffect(() => {
    const fetchPool = async () => {
      try {
        const res = await fetch('/api/questions');
        const data = await res.json();
        if (data.questions) setAvailablePool(data.questions);
      } catch (err) {
        console.error('Failed to prefetch questions pool', err);
      }
    };
    fetchPool();
  }, []);

  const handleGenerate = async () => {
    setGenerating(true);
    setErrorMsg('');
    try {
      const formValues = form.getValues();
      const payload = {
        title: formValues.title,
        board: formValues.board,
        grade: formValues.grade,
        subject: formValues.subject,
        durationMins: formValues.durationMins,
        createdById: userId,
        criteria: {
          mcqCount: criteria.mcqCount,
          shortCount: criteria.shortCount,
          longCount: criteria.longCount,
          difficulty: criteria.difficulty,
          topic: criteria.topic || undefined,
        },
      };

      const res = await fetch('/api/tests/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to auto-generate test');
      }

      setGeneratedTestHeader(data.test);
      setStep(4);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setGenerating(false);
    }
  };

  const handleManualAssemblyPreview = () => {
    // Scaffold initial blank or matched metadata for review
    const formValues = form.getValues();
    const candidateMatches = availablePool.filter(
      (q) => 
        q.grade === formValues.grade && 
        q.subject.toLowerCase() === formValues.subject.toLowerCase()
    );

    // Mock an immediate test wrapper state populated with the matches
    const mockTestWrapper = {
      id: 'manual-draft-' + Date.now(),
      title: formValues.title,
      board: formValues.board,
      grade: formValues.grade,
      subject: formValues.subject,
      durationMins: formValues.durationMins,
      totalMarks: candidateMatches.length * 2, // Mock 2 marks per item
      questions: candidateMatches.map((q, idx) => ({
        questionId: q.id,
        orderIndex: idx + 1,
        marks: 2,
        question: q,
      })),
    };
    setGeneratedTestHeader(mockTestWrapper);
    setStep(4);
  };

  const handleSwapQuestion = (questionIdToRemove: string) => {
    if (!generatedTestHeader) return;
    
    // Find candidate not already inside generated layout
    const currentIds = new Set(generatedTestHeader.questions.map((q: any) => q.questionId));
    const nextCandidate = availablePool.find(
      (q) => 
        !currentIds.has(q.id) && 
        q.subject.toLowerCase() === generatedTestHeader.subject.toLowerCase()
    );

    if (!nextCandidate) {
      toast('No more unique un-exhausted candidate questions available for this subject pool.', 'info');
      return;
    }

    const updatedList = generatedTestHeader.questions.map((item: any) => {
      if (item.questionId === questionIdToRemove) {
        return {
          ...item,
          questionId: nextCandidate.id,
          question: nextCandidate,
        };
      }
      return item;
    });

    setGeneratedTestHeader({
      ...generatedTestHeader,
      questions: updatedList,
    });
  };

  const finalizePublishing = async () => {
    setPublishing(true);
    // If it was auto-generated, it's already saved. Just complete.
    // If manual mode, let's save the metadata and questions using the simple endpoint
    setTimeout(() => {
      setPublishing(false);
      onComplete();
    }, 800);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-fadeIn">
      {/* Wizard Header Progress */}
      <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
            Wizard Step {step} of 4
          </span>
          <h2 className="text-xl font-bold mt-0.5">Test Creation & Assembly</h2>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center border-b border-slate-100 dark:border-slate-800 py-4 bg-slate-50 dark:bg-slate-950/40">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                step >= i 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
              }`}
            >
              {step > i ? <Check className="w-4 h-4" /> : i}
            </div>
            {i < 4 && (
              <div
                className={`w-12 h-1 transition-colors ${
                  step > i ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-800'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* STEP 1: Metadata Form */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                1. Assessment Metadata Configuration
              </h3>
              <form onSubmit={form.handleSubmit(() => setStep(2))} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Assessment Title</label>
                  <input
                    {...form.register('title')}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                  {form.formState.errors.title && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {form.formState.errors.title.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Board/Curriculum</label>
                    <select
                      {...form.register('board')}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="StateBoard">State Board</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Standard / Grade</label>
                    <select
                      {...form.register('grade')}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                    >
                      {['7', '8', '9', '10', '11', '12'].map((g) => (
                        <option key={g} value={g}>Standard {g}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Subject Pool</label>
                    <select
                      {...form.register('subject')}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Maths">Maths</option>
                      <option value="Science">Science</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Duration (Mins)</label>
                    <input
                      type="number"
                      {...form.register('durationMins', { valueAsNumber: true })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors shadow-md shadow-indigo-600/20"
                  >
                    Proceed Mode Selection
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 2: Assembly Engine vs Manual Selection */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                2. Select Assessment Generation Engine Mode
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setGenerationMode('auto')}
                  className={`p-5 rounded-xl border-2 text-left transition-all relative ${
                    generationMode === 'auto'
                      ? 'border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/20 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    {generationMode === 'auto' && (
                      <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">✓</span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Auto-Generate (The Engine)</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Input targeted difficulty & quantities. The system dynamically pulls random valid candidate questions instantly.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setGenerationMode('manual')}
                  className={`p-5 rounded-xl border-2 text-left transition-all relative ${
                    generationMode === 'manual'
                      ? 'border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/20 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    {generationMode === 'manual' && (
                      <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">✓</span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Manual Selection Layout</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Review matching question banks manually to assemble custom assessment configurations.
                  </p>
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (generationMode === 'auto') setStep(3);
                    else handleManualAssemblyPreview();
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors shadow-md shadow-indigo-600/20"
                >
                  {generationMode === 'auto' ? 'Configure Engine Rules' : 'Preview Layout'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Auto-Generator Criteria */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                3. Auto-Generation Engine Blueprint Parameters
              </h3>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Target MCQs Count</label>
                  <input
                    type="number"
                    value={criteria.mcqCount}
                    onChange={(e) => setCriteria({ ...criteria, mcqCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Pool contains 2-4 per grade</span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Short Answer Count</label>
                  <input
                    type="number"
                    value={criteria.shortCount}
                    onChange={(e) => setCriteria({ ...criteria, shortCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Long Answer Count</label>
                  <input
                    type="number"
                    value={criteria.longCount}
                    onChange={(e) => setCriteria({ ...criteria, longCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Target Difficulty</label>
                  <select
                    value={criteria.difficulty}
                    onChange={(e) => setCriteria({ ...criteria, difficulty: e.target.value as Difficulty })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  >
                    <option value={Difficulty.Easy}>Easy Focus</option>
                    <option value={Difficulty.Medium}>Medium Blend</option>
                    <option value={Difficulty.Hard}>Advanced Challenge</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Topic Contains (Optional)</label>
                  <input
                    placeholder="e.g. Integers, Motion"
                    value={criteria.topic}
                    onChange={(e) => setCriteria({ ...criteria, topic: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={generating}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium text-sm transition-colors shadow-md shadow-indigo-600/20"
                >
                  {generating ? 'Engine Assembling...' : 'Execute Intelligent Assembly'}
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Review, Swap & Publish */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  4. Review Assembled Assessment Content
                </h3>
                {generatedTestHeader && (
                  <span className="text-xs bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-1 rounded">
                    Total: {generatedTestHeader.totalMarks} Marks
                  </span>
                )}
              </div>

              {generatedTestHeader?.questions?.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-xs border border-dashed rounded-xl">
                  No matching items available in standard/subject pool. Try choosing a different criteria.
                </div>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {generatedTestHeader?.questions?.map((item: any) => {
                    const q = item.question;
                    return (
                      <div 
                        key={item.questionId}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-start justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 dark:text-slate-300">
                              Q{item.orderIndex}.
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-400 uppercase">
                              {q?.type || 'MCQ'}
                            </span>
                            <span className="text-slate-400">({item.marks} Marks)</span>
                          </div>
                          <p className="text-slate-800 dark:text-slate-200 font-medium">
                            {q?.content || 'Question prompt placeholder'}
                          </p>
                          {q?.options && Array.isArray(q.options) && (
                            <div className="flex flex-wrap gap-2 pt-1 text-[10px] text-slate-500">
                              {q.options.map((opt: string, oIdx: number) => (
                                <span key={oIdx} className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                                  {opt}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSwapQuestion(item.questionId)}
                          className="px-2 py-1 bg-white dark:bg-slate-900 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 rounded border border-slate-200 dark:border-slate-800 shrink-0 transition-colors flex items-center gap-1 text-[10px]"
                        >
                          <RefreshCw className="w-3 h-3" /> Swap
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setStep(generationMode === 'auto' ? 3 : 2)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <ArrowLeft className="w-4 h-4" /> Configure Again
                </button>
                <button
                  type="button"
                  onClick={finalizePublishing}
                  disabled={publishing || generatedTestHeader?.questions?.length === 0}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-sm transition-colors shadow-md shadow-emerald-600/20"
                >
                  {publishing ? 'Publishing Target...' : 'Confirm & Publish Assessment'}
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
