'use client';

import React, { useState, useEffect } from 'react';
import { Send, Layers, GraduationCap, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function TestDispatchPanel() {
  const [tests, setTests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Selection states
  const [selectedTestId, setSelectedTestId] = useState('');
  const [targetGrade, setTargetGrade] = useState('10');
  const [targetBoard, setTargetBoard] = useState('CBSE');
  
  // Dispatch UX states
  const [dispatching, setDispatching] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<{ type: 'success' | 'error'; message: string; details?: any } | null>(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await fetch('/api/tests');
        const data = await res.json();
        if (data.tests) {
          setTests(data.tests);
          if (data.tests.length > 0) setSelectedTestId(data.tests[0].id);
        }
      } catch (err) {
        console.error('Failed to load assessments:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  const handleBulkDispatch = async () => {
    if (!selectedTestId) {
      setDispatchResult({ type: 'error', message: 'Please select an assessment to dispatch.' });
      return;
    }
    
    setDispatching(true);
    setDispatchResult(null);

    try {
      const res = await fetch('/api/dispatch/by-grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testId: selectedTestId,
          grade: targetGrade,
          board: targetBoard,
        }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setDispatchResult({
          type: 'success',
          message: data.message || `Successfully dispatched to ${data.dispatchedCount} students.`,
          details: data.results,
        });
      } else {
        setDispatchResult({
          type: 'error',
          message: data.error || 'Failed to dispatch to the selected cohort.',
        });
      }
    } catch (err) {
      console.error('Bulk dispatch exception:', err);
      setDispatchResult({
        type: 'error',
        message: 'A network communication error occurred during bulk dispatch execution.',
      });
    } finally {
      setDispatching(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 animate-pulse">
        <div className="w-8 h-8 mx-auto mb-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
        <p className="text-slate-500 text-sm font-medium">Initializing Dispatch Engine Workspace...</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden font-sans">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Send className="w-5 h-5 text-indigo-500" />
            Bulk Cohort Dispatch Engine
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Rapidly deploy authenticated test assessment magic links across entire targeted grades and boards.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Core Dispatch Configuration Context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="space-y-2 md:col-span-3 lg:col-span-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Source Module Assessment
            </label>
            <select
              value={selectedTestId}
              onChange={(e) => setSelectedTestId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
            >
              {tests.length === 0 && <option value="">No published assessments available</option>}
              {tests.map(t => (
                <option key={t.id} value={t.id}>
                  {t.title} ({t.durationMins}m • {t.totalMarks} Marks)
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Target Cohort Grade
            </label>
            <select
              value={targetGrade}
              onChange={(e) => setTargetGrade(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
            >
              <option value="12">Class 12</option>
              <option value="11">Class 11</option>
              <option value="10">Class 10</option>
              <option value="9">Class 9</option>
              <option value="8">Class 8</option>
              <option value="7">Class 7</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              Curriculum Board
            </label>
            <select
              value={targetBoard}
              onChange={(e) => setTargetBoard(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
            >
              <option value="CBSE">CBSE (Central Board)</option>
              <option value="ICSE">ICSE (Indian Certificate)</option>
              <option value="Foundation">Foundation Track</option>
            </select>
          </div>
        </div>

        {/* Dynamic Status Reporting Block */}
        {dispatchResult && (
          <div className={`p-4 rounded-xl border flex items-start gap-3 animate-fadeIn ${
            dispatchResult.type === 'success' 
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
              : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
          }`}>
            {dispatchResult.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <div>
              <h4 className="font-bold text-sm">{dispatchResult.type === 'success' ? 'Dispatch Successful' : 'Dispatch Aborted'}</h4>
              <p className="text-xs mt-1 opacity-90">{dispatchResult.message}</p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={handleBulkDispatch}
            disabled={dispatching || tests.length === 0}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            {dispatching ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Executing Bulk Delivery...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Execute Cohort Magic Dispatch</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
