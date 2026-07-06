'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, Layers, ChevronRight, AlertTriangle, CheckCircle2, Clock, RefreshCw, ArrowLeft, Users } from 'lucide-react';

interface Batch { id: string; name: string; grade: string; _count: { enrollments: number; dispatches: number }; }
interface DispatchItem { id: string; dispatchedAt: string; test: { id: string; title: string; subject: string; durationMins: number; totalMarks: number }; }

interface AttemptResult {
  studentId: string;
  studentName: string;
  studentEmail: string;
  totalScore: number;
  status: string;
  tabSwitchCount: number;
  startTime: string;
  endTime: string | null;
}

export default function BatchResults() {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [selectedBatchId, setSelectedBatchId] = useState('');
  const [dispatches, setDispatches] = useState<DispatchItem[]>([]);
  const [selectedTestId, setSelectedTestId] = useState('');
  const [results, setResults] = useState<AttemptResult[]>([]);
  const [enrolledStudents, setEnrolledStudents] = useState<{ id: string; name: string; email: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const r = await fetch('/api/batches');
      const d = await r.json();
      setBatches((d.batches || []).filter((b: any) => b.isActive));
    })();
  }, []);

  // When batch is selected, load dispatches
  const loadBatchDetail = useCallback(async (batchId: string) => {
    setSelectedBatchId(batchId);
    setSelectedTestId('');
    setResults([]);
    try {
      const r = await fetch(`/api/batches/${batchId}`);
      const d = await r.json();
      setDispatches(d.batch?.dispatches || []);
      setEnrolledStudents((d.batch?.enrollments || []).map((e: any) => e.student));
    } catch {}
  }, []);

  // When test is selected, load attempts
  const loadResults = useCallback(async (testId: string) => {
    setSelectedTestId(testId);
    setLoading(true);
    try {
      const r = await fetch(`/api/attempts/results?testId=${testId}`);
      const d = await r.json();
      setResults(d.results || []);
    } catch {}
    setLoading(false);
  }, []);

  const selectedBatch = batches.find(b => b.id === selectedBatchId);
  const selectedDispatch = dispatches.find(d => d.test.id === selectedTestId);

  // Merge enrolled students with attempts to show who hasn't started
  const mergedResults = enrolledStudents.map(student => {
    const attempt = results.find(r => r.studentId === student.id);
    return {
      id: student.id,
      name: student.name,
      email: student.email,
      score: attempt ? attempt.totalScore : null,
      totalMarks: selectedDispatch?.test.totalMarks || 0,
      status: attempt ? attempt.status : 'Not Started',
      tabSwitchCount: attempt ? attempt.tabSwitchCount : 0,
      timeTaken: attempt?.startTime && attempt?.endTime
        ? Math.round((new Date(attempt.endTime).getTime() - new Date(attempt.startTime).getTime()) / 60000)
        : null,
    };
  });

  // Results view
  if (selectedTestId && selectedDispatch) {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-5 animate-fadeIn">
        <button onClick={() => setSelectedTestId('')} className="text-xs text-indigo-500 hover:text-indigo-400 font-bold flex items-center gap-1">
          <ArrowLeft className="w-3 h-3" /> Back to tests
        </button>

        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xl">
          <h2 className="text-lg font-bold">{selectedDispatch.test.title}</h2>
          <p className="text-indigo-200 text-xs mt-1">{selectedBatch?.name} — Class {selectedBatch?.grade} • {selectedDispatch.test.subject}</p>
          <p className="text-indigo-100 text-xs mt-1">{selectedDispatch.test.durationMins} min • {selectedDispatch.test.totalMarks} marks</p>
        </div>

        {loading ? (
          <p className="text-xs text-slate-400 flex items-center gap-2"><RefreshCw className="w-3 h-3 animate-spin" /> Loading results...</p>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold">
                  <th className="p-3.5">Student</th>
                  <th className="p-3.5">Score</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5">Tab Switches</th>
                  <th className="p-3.5">Time Taken</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {mergedResults.map(r => (
                  <tr key={r.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900 dark:text-slate-100">{r.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{r.email}</div>
                    </td>
                    <td className="p-3.5">
                      {r.score !== null ? (
                        <span className="font-bold text-slate-900 dark:text-white">{r.score}/{r.totalMarks}</span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="p-3.5">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        r.status === 'Evaluated' ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' :
                        r.status === 'Submitted' ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400' :
                        r.status === 'In_Progress' ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' :
                        'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}>
                        {r.status === 'Evaluated' && <CheckCircle2 className="w-3 h-3" />}
                        {r.status === 'In_Progress' && <Clock className="w-3 h-3" />}
                        {r.status === 'Not Started' && '—'}
                        {r.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-3.5">
                      {r.status === 'Not Started' ? (
                        <span className="text-slate-400">—</span>
                      ) : r.tabSwitchCount > 0 ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-[10px] font-bold">
                          <AlertTriangle className="w-3 h-3" /> {r.tabSwitchCount}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3" /> 0
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-slate-500">
                      {r.timeTaken !== null ? `${r.timeTaken} min` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  // Dispatches view (when batch is selected)
  if (selectedBatchId && selectedBatch) {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-5 animate-fadeIn">
        <button onClick={() => { setSelectedBatchId(''); setDispatches([]); }} className="text-xs text-indigo-500 hover:text-indigo-400 font-bold flex items-center gap-1">
          <ArrowLeft className="w-3 h-3" /> Back to batches
        </button>

        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-xl flex items-center justify-between">
          <div><h2 className="text-lg font-bold">{selectedBatch.name}</h2><p className="text-indigo-200 text-xs mt-1">Class {selectedBatch.grade}</p></div>
          <div className="text-right"><p className="text-2xl font-bold">{dispatches.length}</p><p className="text-indigo-200 text-xs">Tests Dispatched</p></div>
        </div>

        {dispatches.length === 0 ? (
          <p className="text-xs text-slate-400 py-8 text-center italic">No tests have been dispatched to this batch yet.</p>
        ) : (
          <div className="space-y-2">
            {dispatches.map(d => (
              <button key={d.id} onClick={() => loadResults(d.test.id)}
                className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-md transition-all text-left flex items-center justify-between group">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{d.test.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{d.test.subject} • {d.test.durationMins} min • {d.test.totalMarks} marks</p>
                  <p className="text-[10px] text-slate-400 mt-1">{new Date(d.dispatchedAt).toLocaleString()}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Batch selection view
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-5 animate-fadeIn">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-indigo-600" /> Test Results
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">View test results by batch. Select a batch to see dispatched tests.</p>
      </div>

      {batches.length === 0 ? (
        <p className="text-xs text-slate-400 py-8 text-center">No active batches found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {batches.map(b => (
            <button key={b.id} onClick={() => loadBatchDetail(b.id)}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all text-left group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{b.name}</h3>
              <p className="text-xs text-slate-500 mt-1">Class {b.grade}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-500 flex items-center gap-1"><Users className="w-3 h-3" /> {b._count.enrollments} students</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
