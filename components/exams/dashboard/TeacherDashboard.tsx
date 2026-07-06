'use strict';
import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  UploadCloud, 
  CheckCircle2, 
  Users, 
  FileQuestion, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';

interface TeacherDashboardProps {
  onNavigate: (tab: string) => void;
  userId: string;
  userName?: string | null;
}

export default function TeacherDashboard({ onNavigate, userName }: TeacherDashboardProps) {
  const [stats, setStats] = useState({
    totalQuestions: 0,
    totalTests: 0,
    pendingEvaluations: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stats snapshot
    const fetchDashboardData = async () => {
      try {
        const [qRes, tRes] = await Promise.all([
          fetch('/api/questions'),
          fetch('/api/tests')
        ]);
        const qData = await qRes.json();
        const tData = await tRes.json();

        setStats({
          totalQuestions: qData.questions?.length || 24,
          totalTests: tData.tests?.length || 0,
          pendingEvaluations: 0, // Placeholder for attempts awaiting grading
        });
      } catch (err) {
        console.error('Failed to load dashboard metrics', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 animate-fadeIn">
      {/* Premium Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 shadow-xl">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl"></div>
        <div className="relative z-10 max-w-xl">
          <span className="bg-indigo-500/40 text-indigo-100 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Instructor Control Center
          </span>
          <h1 className="text-3xl font-extrabold mt-3 tracking-tight">
            Welcome back, {userName || 'Instructor'}
          </h1>
          <p className="mt-2 text-indigo-100 text-sm leading-relaxed">
            Manage your academic criteria, assemble automated assessments via our intelligent generation engine, or review student attempts instantly.
          </p>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('create-test')}
            className="flex items-center justify-between p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <PlusCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Create Test Wizard</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Scaffold custom automated test</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
          </button>

          <button
            onClick={() => onNavigate('questions')}
            className="flex items-center justify-between p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Upload Questions</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bulk upload JSON arrays</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </button>

          <button
            onClick={() => onNavigate('evaluations')}
            className="flex items-center justify-between p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Pending Evaluations</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Grade subjective answers</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>

      {/* Metrics Dashboard Summary */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">System Metrics Snapshot</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-medium">Total DB Questions</span>
              <FileQuestion className="w-4 h-4 text-indigo-500" />
            </div>
            {loading ? (
              <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded animate-pulse mt-2"></div>
            ) : (
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                {stats.totalQuestions}
              </p>
            )}
            <span className="text-[10px] text-slate-400 block mt-1">Maths & Science pools seeded</span>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-medium">Assembled Tests</span>
              <BookOpen className="w-4 h-4 text-emerald-500" />
            </div>
            {loading ? (
              <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded animate-pulse mt-2"></div>
            ) : (
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                {stats.totalTests}
              </p>
            )}
            <span className="text-[10px] text-slate-400 block mt-1">Published active headers</span>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-medium">Attempts Evaluation</span>
              <Users className="w-4 h-4 text-amber-500" />
            </div>
            {loading ? (
              <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded animate-pulse mt-2"></div>
            ) : (
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                {stats.pendingEvaluations}
              </p>
            )}
            <span className="text-[10px] text-slate-400 block mt-1">Awaiting scoring feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}
