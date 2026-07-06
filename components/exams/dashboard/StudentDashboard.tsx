'use strict';
import React, { useState, useEffect } from 'react';
import { Play, Award, Clock, CheckCircle2, BellRing, X, Check, ListOrdered, Trophy, Loader2 } from 'lucide-react';
import { useDialog } from '@/components/exams/ui/DialogProvider';

interface StudentDashboardProps {
  onStartAttempt: (testId: string) => void;
  userId: string;
  userName?: string | null;
  autoReviewAttemptId?: string | null;
  onReviewClosed?: () => void;
}

export default function StudentDashboard({ onStartAttempt, userId, userName, autoReviewAttemptId, onReviewClosed }: StudentDashboardProps) {
  const { toast } = useDialog();
  const [assignedTests, setAssignedTests] = useState<any[]>([]);
  const [pastResults, setPastResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Scorecard modal state handlers
  const [reviewAttemptId, setReviewAttemptId] = useState<string | null>(null);
  const [reviewData, setReviewData] = useState<any>(null);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewTab, setReviewTab] = useState<'answers' | 'leaderboard'>('answers');

  const handleOpenReview = async (attemptId: string) => {
    setReviewAttemptId(attemptId);
    setReviewLoading(true);
    setReviewData(null);
    setReviewTab('answers');
    try {
      const res = await fetch(`/api/attempts/${attemptId}/evaluate`);
      const data = await res.json();
      if (res.ok && data.attempt) {
        setReviewData(data);
      } else {
        toast(data.error || 'Failed to load scorecard', 'error');
        setReviewAttemptId(null);
      }
    } catch (err) {
      console.error(err);
      toast('Network error loading scorecard', 'error');
      setReviewAttemptId(null);
    } finally {
      setReviewLoading(false);
    }
  };

  useEffect(() => {
    if (autoReviewAttemptId) {
      handleOpenReview(autoReviewAttemptId);
    }
  }, [autoReviewAttemptId]);

  const closeReview = () => {
    setReviewAttemptId(null);
    if (onReviewClosed) onReviewClosed();
  };

  useEffect(() => {
    const fetchStudentWorkspace = async () => {
      try {
        // Fetch explicit dispatched test assignments assigned directly to this candidate ID
        const asRes = await fetch(`/api/assignments?studentId=${userId}`);
        const asData = await asRes.json();
        if (asData.assignments) {
          setAssignedTests(asData.assignments);
        }

        // Fetch user analytics performance trends
        const aRes = await fetch(`/api/analytics/student/${userId}`);
        const aData = await aRes.json();
        if (aData.metrics?.performanceTrends) {
          setPastResults(aData.metrics.performanceTrends);
        }
      } catch (err) {
        console.error('Failed to load student workspace metadata', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentWorkspace();
  }, [userId]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 animate-fadeIn">
      {/* Student Welcome Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/40">
            Student Assessment Center
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Hello, {userName || 'Student Aspirant'}
          </h1>
          <p className="text-xs text-slate-400 max-w-lg">
            Track upcoming assignment deadlines, monitor your cumulative aggregate score rankings, or initialize timed live attempts below.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 shrink-0">
          <div className="p-3 rounded-lg bg-indigo-600/20 text-indigo-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Total Completed</span>
            <span className="text-xl font-bold text-white">{pastResults.length} Tests</span>
          </div>
        </div>
      </div>

      {/* Explicitly Assigned / Dispatched High-Priority Queue */}
      <div className="space-y-4 bg-indigo-50/50 dark:bg-indigo-950/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/40">
        <div className="flex items-center gap-2">
          <BellRing className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-bounce" />
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
              Dispatched Assessments Assigned to You
            </h2>
            <p className="text-[11px] text-indigo-600 dark:text-indigo-400">
              Instructors have explicitly dispatched these modules to your profile queue
            </p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-32 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse"></div>
            ))}
          </div>
        ) : assignedTests.length === 0 ? (
          <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/50 text-center text-xs text-slate-400">
            No active test assignments pending for you. Relax and check back later!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {assignedTests.map((a) => {
              const t = a.test;
              if (!t) return null;
              return (
                <div 
                  key={a.id}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 shadow-md flex flex-col justify-between gap-4 hover:border-indigo-500 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-bl">
                    ASSIGNED
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                        Std {t.grade} • {t.subject}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {t.durationMins || 45}m
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm line-clamp-1">
                      {t.title}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Assigned: <span className="font-semibold text-slate-700 dark:text-slate-300">{new Date(a.assignedAt).toLocaleDateString()}</span> | 
                      Marks: <span className="font-semibold text-slate-700 dark:text-slate-300">{t.totalMarks}</span>
                    </p>
                  </div>

                  {(() => {
                    const isExpired = t.expiresAt && new Date(t.expiresAt).getTime() < Date.now();
                    
                    if (isExpired) {
                      return (
                        <button
                          disabled
                          className="w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm border border-slate-200 dark:border-slate-700 cursor-not-allowed"
                        >
                          Expired on {new Date(t.expiresAt).toLocaleDateString()}
                        </button>
                      );
                    }
                    
                    return (
                      <button
                        onClick={() => onStartAttempt(t.id)}
                        className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-indigo-600/20 transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current" /> Launch Assigned Test
                      </button>
                    );
                  })()}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Past Results & Analytics Scorecards */}
      <div className="space-y-4 pt-4">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Past Performance Scorecards</h2>
          <p className="text-[11px] text-slate-500">Review evaluated results and percentage accuracy trends</p>
        </div>

        {loading ? (
          <div className="h-24 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse"></div>
        ) : pastResults.length === 0 ? (
          <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
            No evaluated test attempts saved yet. Complete an active test above to view scorecards.
          </div>
        ) : (
          <div className="space-y-3">
            {pastResults.map((res: any) => (
              <div 
                key={res.attemptId}
                onClick={() => handleOpenReview(res.attemptId)}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shadow-sm hover:border-indigo-500 cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {res.testTitle}
                    </h4>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Subject: {res.subject} • Completed on {new Date(res.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
                    {res.score} / {res.totalMarks}
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    res.percentage >= 75 ? 'bg-emerald-50 text-emerald-600' :
                    res.percentage >= 40 ? 'bg-amber-50 text-amber-600' :
                    'bg-red-50 text-red-600'
                  }`}>
                    {res.percentage}% Score
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Premium Detailed Scorecard Review Modal */}
      {reviewAttemptId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 block">
                  Post-Attempt Diagnostic Scorecard
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                    {reviewData?.attempt?.test?.title || 'Loading Test Metadata...'}
                  </h3>
                  {reviewData?.attempt && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-extrabold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      Score: {reviewData.attempt.totalScore} / {reviewData.attempt.test?.totalMarks}
                    </span>
                  )}
                </div>
              </div>
              <button 
                onClick={closeReview}
                className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* View Mode Pill Switcher */}
            <div className="px-5 pt-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 shrink-0">
              <button
                onClick={() => setReviewTab('answers')}
                className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  reviewTab === 'answers'
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                <ListOrdered className="w-3.5 h-3.5" /> Answers Comparison Key
              </button>
              <button
                onClick={() => setReviewTab('leaderboard')}
                className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  reviewTab === 'leaderboard'
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" /> Peer Rankings Comparison
              </button>
            </div>

            {/* Modal Body Contents */}
            <div className="flex-1 overflow-y-auto p-6">
              {reviewLoading ? (
                <div className="h-48 flex flex-col items-center justify-center space-y-3">
                  <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                  <p className="text-xs text-slate-400">Compiling individual question statistics and peer ranks...</p>
                </div>
              ) : reviewTab === 'answers' ? (
                <div className="space-y-6">
                  {reviewData?.attempt?.answers?.map((ans: any, idx: number) => {
                    const q = ans.question;
                    if (!q) return null;
                    let parsedOptions: string[] = [];
                    try {
                      parsedOptions = Array.isArray(q.options) ? q.options : JSON.parse(q.options || '[]');
                    } catch {
                      parsedOptions = [];
                    }

                    return (
                      <div key={ans.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex-1">
                            Q{idx + 1}. {q.content}
                          </span>
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded shrink-0 ${
                            ans.isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {ans.isCorrect ? 'Correct Answer' : 'Incorrect'}
                          </span>
                        </div>

                        {/* Render options grids to visually compare choice */}
                        {parsedOptions.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                            {parsedOptions.map((opt) => {
                              const isChecked = ans.studentAnswer?.trim().toLowerCase() === opt.trim().toLowerCase();
                              const isCorrectTarget = q.correctAnswer?.trim().toLowerCase() === opt.trim().toLowerCase();
                              
                              let styleClass = 'border-slate-200 dark:border-slate-800 text-slate-500';
                              if (isCorrectTarget) {
                                styleClass = 'bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold';
                              } else if (isChecked && !isCorrectTarget) {
                                styleClass = 'bg-red-500/10 border-red-500 text-red-600 dark:text-red-400 font-bold';
                              }

                              return (
                                <div key={opt} className={`p-2.5 rounded-lg border text-xs flex items-center justify-between gap-2 ${styleClass}`}>
                                  <span className="truncate">{opt}</span>
                                  <div className="flex items-center gap-1 shrink-0">
                                    {isChecked && <span className="text-[9px] uppercase font-bold tracking-wider opacity-80">(Your Answer)</span>}
                                    {isCorrectTarget && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 text-xs text-indigo-900 dark:text-indigo-300">
                    Showing relative aggregate performance metrics across peer candidates evaluated under this template.
                  </div>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold">
                          <th className="p-3 w-16 text-center">Rank</th>
                          <th className="p-3">Candidate Aspirant</th>
                          <th className="p-3 text-right">Cumulative Marks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {reviewData?.rankings?.map((r: any) => (
                          <tr key={r.rank} className={r.isCurrentStudent ? 'bg-indigo-50/80 dark:bg-indigo-950/80 font-bold text-indigo-600 dark:text-indigo-400' : ''}>
                            <td className="p-3 text-center font-mono">#{r.rank}</td>
                            <td className="p-3 flex items-center gap-2">
                              {r.studentName || 'Anonymous Candidate'}
                              {r.isCurrentStudent && <span className="text-[9px] bg-indigo-600 text-white px-1.5 py-0.5 rounded font-extrabold uppercase tracking-wide">YOU</span>}
                            </td>
                            <td className="p-3 text-right font-mono">{r.score} Marks</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
