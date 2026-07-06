'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Search, RefreshCw, BarChart2, CheckCircle2, XCircle, Clock, X, Check } from 'lucide-react';

export default function EvaluationDashboard() {
  const [tests, setTests] = useState<any[]>([]);
  const [selectedTestId, setSelectedTestId] = useState('');
  
  const [attempts, setAttempts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchingAttempts, setFetchingAttempts] = useState(false);
  const [selectedAttempt, setSelectedAttempt] = useState<any | null>(null);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const res = await fetch('/api/tests');
        const data = await res.json();
        if (data.tests) {
          setTests(data.tests);
          if (data.tests.length > 0) setSelectedTestId(data.tests[0].id);
        }
      } catch (err) {
        console.error('Failed to load assessments for evaluation:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAssessments();
  }, []);

  const fetchAttempts = async (testId: string) => {
    setFetchingAttempts(true);
    try {
      const res = await fetch(`/api/attempts/by-test?testId=${testId}`);
      const data = await res.json();
      if (data.attempts) {
        setAttempts(data.attempts);
      }
    } catch (err) {
      console.error('Failed to fetch evaluation metrics:', err);
    } finally {
      setFetchingAttempts(false);
    }
  };

  useEffect(() => {
    if (selectedTestId) {
      fetchAttempts(selectedTestId);
    }
  }, [selectedTestId]);

  if (loading) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 animate-pulse">
        <div className="w-8 h-8 mx-auto mb-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
        <p className="text-slate-500 text-sm font-medium">Initializing Evaluation Engine Workspace...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 animate-fadeIn font-sans">
      {/* Module Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-600" />
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Evaluation & Monitoring Dashboard
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Monitor live active candidates, track final scores, and evaluate overall assessment performance metrics.
          </p>
        </div>

        <button
          onClick={() => selectedTestId && fetchAttempts(selectedTestId)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold transition-all border border-slate-200 dark:border-slate-800 shadow-xs"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Refresh Analytics
        </button>
      </div>

      {/* Target Action Assessment Selection Toolbar */}
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-indigo-500 shrink-0" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Select Live Evaluation Module:
          </span>
        </div>

        <div className="w-full sm:w-auto flex-1 max-w-md relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2" />
          {tests.length === 0 ? (
            <span className="text-xs italic text-slate-400 block py-1 pl-9">
              No target assessments available.
            </span>
          ) : (
            <select
              value={selectedTestId}
              onChange={(e) => setSelectedTestId(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              {tests.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title} — {t.totalMarks} Marks
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Evaluation Results Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold">
              <th className="p-4">Candidate Target</th>
              <th className="p-4">Execution Timestamp</th>
              <th className="p-4">Completion State</th>
              <th className="p-4 text-right">Evaluated Metric</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {fetchingAttempts ? (
              [...Array(3)].map((_, idx) => (
                <tr key={idx}>
                  <td className="p-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-32"></div></td>
                  <td className="p-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-40"></div></td>
                  <td className="p-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-20"></div></td>
                  <td className="p-4 text-right"><div className="h-6 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-16 ml-auto"></div></td>
                </tr>
              ))
            ) : attempts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">
                  No active assessment attempts found for this specific module context.
                </td>
              </tr>
            ) : (
              attempts.map((attempt) => (
                <tr
                  key={attempt.id}
                  onClick={() => attempt.attemptId && setSelectedAttempt(attempt)}
                  className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors ${
                    attempt.attemptId ? 'cursor-pointer' : ''
                  }`}
                >
                  <td className="p-4 whitespace-nowrap">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block">
                      {attempt.student?.name || 'Unknown Candidate'}
                    </span>
                    <span className="text-[10px] text-indigo-500 font-mono block">
                      {attempt.student?.email}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Class {attempt.student?.grade || '10'} • {attempt.student?.phone || 'No Phone'}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap font-mono text-slate-600 dark:text-slate-300">
                    {attempt.startTime ? (
                      <>
                        <span className="block">{new Date(attempt.startTime).toLocaleDateString()}</span>
                        <span className="text-[10px] text-slate-400">{new Date(attempt.startTime).toLocaleTimeString()}</span>
                      </>
                    ) : (
                      <span className="text-slate-400">Not started</span>
                    )}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {attempt.status === 'Evaluated' ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-100 dark:border-emerald-800/50">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Finalized
                      </span>
                    ) : attempt.status === 'Submitted' ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 font-semibold border border-sky-100 dark:border-sky-800/50">
                        <XCircle className="w-3.5 h-3.5" /> Awaiting Review
                      </span>
                    ) : attempt.status === 'Not_Started' ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                        <XCircle className="w-3.5 h-3.5" /> Not Started
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 font-semibold border border-amber-100 dark:border-amber-800/50">
                        <Clock className="w-3.5 h-3.5 animate-spin" /> In Progress
                      </span>
                    )}
                  </td>
                  <td className="p-4 whitespace-nowrap text-right">
                    {attempt.status === 'Submitted' || attempt.status === 'Evaluated' ? (
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                          {attempt.totalScore} <span className="text-xs font-medium text-slate-400">/ {attempt.test?.totalMarks || 0}</span>
                        </span>
                        <span className="text-[10px] font-bold text-emerald-500">
                          {Math.round(((attempt.totalScore || 0) / (attempt.test?.totalMarks || 1)) * 100)}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-slate-400 font-mono">-- / {attempt.test?.totalMarks || 0}</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedAttempt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs animate-fadeIn">
          <div className="flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/40">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                  Candidate Evaluation Review
                </span>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                  {selectedAttempt.student?.name || 'Unknown Candidate'}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {selectedAttempt.student?.email} - {selectedAttempt.test?.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAttempt(null)}
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {selectedAttempt.answers?.length > 0 ? (
                selectedAttempt.answers.map((answer: any, idx: number) => {
                  const q = answer.question;
                  const options = Array.isArray(q?.options) ? q.options : [];

                  return (
                    <div
                      key={answer.id}
                      className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-xs font-bold leading-relaxed text-slate-900 dark:text-slate-100">
                          Q{idx + 1}. {q?.content || 'Question text unavailable'}
                        </p>
                        <span
                          className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-extrabold ${
                            answer.isCorrect
                              ? 'bg-emerald-50 text-emerald-600'
                              : 'bg-red-50 text-red-600'
                          }`}
                        >
                          {answer.marksAwarded} marks
                        </span>
                      </div>

                      {options.length > 0 && (
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {options.map((option: string) => {
                            const isStudentAnswer =
                              answer.studentAnswer?.trim().toLowerCase() === option.trim().toLowerCase();
                            const isCorrectAnswer =
                              q?.correctAnswer?.trim().toLowerCase() === option.trim().toLowerCase();

                            return (
                              <div
                                key={option}
                                className={`flex items-center justify-between gap-2 rounded-lg border p-2.5 text-xs ${
                                  isCorrectAnswer
                                    ? 'border-emerald-500 bg-emerald-500/10 font-bold text-emerald-700 dark:text-emerald-300'
                                    : isStudentAnswer
                                      ? 'border-red-500 bg-red-500/10 font-bold text-red-700 dark:text-red-300'
                                      : 'border-slate-200 text-slate-500 dark:border-slate-800'
                                }`}
                              >
                                <span>{option}</span>
                                <span className="flex items-center gap-1 text-[9px] font-bold uppercase">
                                  {isStudentAnswer && 'Student'}
                                  {isCorrectAnswer && <Check className="h-3.5 w-3.5" />}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {!options.length && (
                        <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                          <span className="font-bold">Student answer:</span> {answer.studentAnswer || 'No answer submitted'}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="rounded-xl border border-slate-200 p-8 text-center text-xs text-slate-400 dark:border-slate-800">
                  No submitted answer records are available for this attempt yet.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
