'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Sidebar from '@/components/exams/layout/Sidebar';
import TeacherDashboard from '@/components/exams/dashboard/TeacherDashboard';
import TestWizard from '@/components/exams/tests/TestWizard';
import QuestionBank from '@/components/exams/questions/QuestionBank';
import AISeeder from '@/components/exams/admin/AISeeder';
import StudentDashboard from '@/components/exams/dashboard/StudentDashboard';
import TestInterface from '@/components/exams/tests/TestInterface';
import StudentManager from '@/components/exams/dashboard/StudentManager';
import LoginPage from '@/app/exams/login/page';
import PracticeHub from '@/components/exams/practice/PracticeHub';
import PracticeSession from '@/components/exams/practice/PracticeSession';
import StudentAnalytics from '@/components/exams/analytics/StudentAnalytics';
import ProfileEditor from '@/components/exams/profile/ProfileEditor';
import ForcePasswordChange from '@/components/exams/auth/ForcePasswordChange';
import StudentProvisioning from '@/components/exams/dashboard/StudentProvisioning';
import BatchManager from '@/components/exams/dashboard/BatchManager';
import BatchPerformance from '@/components/exams/analytics/BatchPerformance';
import TeacherManager from '@/components/exams/dashboard/TeacherManager';
import QuickTestWizard from '@/components/exams/tests/QuickTestWizard';
import BatchResults from '@/components/exams/dashboard/BatchResults';
import { Role } from '@prisma/client';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { useDialog } from '@/components/exams/ui/DialogProvider';

export default function Home() {
  const { data: session, status, update } = useSession();
  const { toast } = useDialog();

  // Navigation states
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  // Active test evaluation delivery layout states
  const [activeAttemptId, setActiveAttemptId] = useState<string | null>(null);
  const [activeTestDetails, setActiveTestDetails] = useState<any>(null);
  const [activeDuration, setActiveDuration] = useState<number>(60);
  const [autoReviewAttemptId, setAutoReviewAttemptId] = useState<string | null>(null);

  // Practice mode state
  const [practiceConfig, setPracticeConfig] = useState<any | null>(null);
  const [practiceMode, setPracticeMode] = useState<'hub' | 'session' | 'bookmarks' | 'mistakes'>('hub');
  const [mistakeQuestions, setMistakeQuestions] = useState<any[]>([]);
  const [bookmarkQuestions, setBookmarkQuestions] = useState<any[]>([]);

  // Batch list for performance page
  const [batchList, setBatchList] = useState<{ id: string; name: string }[]>([]);

  const fetchBatchList = useCallback(async () => {
    try {
      const r = await fetch('/api/batches');
      const d = await r.json();
      setBatchList((d.batches || []).map((b: any) => ({ id: b.id, name: b.name })));
    } catch {}
  }, []);

  useEffect(() => { if (session?.user && ((session.user as any).role === Role.Admin || (session.user as any).role === Role.Teacher)) fetchBatchList(); }, [session, fetchBatchList]);

  // Loading splash state
  if (status === 'loading') {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-950 text-white space-y-3">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <p className="text-xs font-semibold text-slate-400 animate-pulse">
          Verifying active workspace authentication session...
        </p>
      </div>
    );
  }

  // Enforce mandatory upfront login barrier per instructions
  if (!session?.user) {
    return <LoginPage />;
  }

  // Strictly enforce user's native assigned role without simulator options
  const effectiveRole = (session.user as any).role as Role;
  const resolvedUserName = session.user.name || 'Authenticated User';
  const resolvedUserId = (session.user as any).id || 'user-demo-123';
  const mustChangePassword = (session.user as any).mustChangePassword === true;

  // Force password change for admin-provisioned accounts
  if (mustChangePassword) {
    return (
      <ForcePasswordChange
        userId={resolvedUserId}
        onComplete={() => {
          // Re-trigger session update then reload
          update().then(() => window.location.reload());
        }}
      />
    );
  }

  // Switch tabs handler
  const handleNavigate = (tab: string) => {
    if (tab === 'create-test') {
      setActiveTab('create-test');
    } else {
      setActiveTab(tab);
    }
  };

  const handleStartAttempt = async (testId: string) => {
    try {
      const res = await fetch('/api/attempts/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testId, studentId: resolvedUserId }),
      });

      const data = await res.json();
      if (res.ok) {
        setActiveAttemptId(data.attemptId);
        setActiveTestDetails(data.testDetails);
        setActiveDuration(data.durationMins);
      } else {
        toast(data.error || 'Failed to start test', 'error');
      }
    } catch (err) {
      console.error('Launch failure', err);
    }
  };

  const handleFinishSubmit = (summary: any) => {
    setActiveAttemptId(null);
    setActiveTestDetails(null);
    setAutoReviewAttemptId(summary.attemptId);
    setActiveTab('dashboard');
  };

  // If inside an active secure test session, render distraction-free test interface full screen
  if (activeAttemptId && activeTestDetails) {
    return (
      <TestInterface
        attemptId={activeAttemptId}
        testDetails={activeTestDetails}
        durationMins={activeDuration}
        onFinishSubmit={handleFinishSubmit}
        onCancel={() => {
          setActiveAttemptId(null);
          setActiveTestDetails(null);
        }}
      />
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden font-sans animate-fadeIn">
      {/* Global Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userRole={effectiveRole}
        userName={resolvedUserName}
        onLogout={() => signOut({ callbackUrl: '/exams' })}
      />

      {/* Main Split Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Sleek Minimalist Profile Ident bar */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Authenticated Interface Context: <span className="text-indigo-500 font-mono">{session.user.email}</span> ({effectiveRole} Role Access)
            </span>
          </div>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">
            Secure Mode Active
          </span>
        </header>

        {/* Dynamic View rendering workspace blocks */}
        <main className="flex-1 py-6">
          {activeTab === 'dashboard' && (
            effectiveRole === Role.Admin || effectiveRole === Role.Teacher ? (
              <TeacherDashboard 
                onNavigate={handleNavigate} 
                userId={resolvedUserId}
                userName={resolvedUserName}
              />
            ) : (
              <StudentDashboard 
                onStartAttempt={handleStartAttempt} 
                userId={resolvedUserId}
                userName={resolvedUserName}
                autoReviewAttemptId={autoReviewAttemptId}
                onReviewClosed={() => setAutoReviewAttemptId(null)}
              />
            )
          )}

          {activeTab === 'students' && (
            <StudentManager />
          )}

          {activeTab === 'teachers' && effectiveRole === Role.Admin && (
            <TeacherManager />
          )}

          {activeTab === 'provision' && (effectiveRole === Role.Admin || effectiveRole === Role.Teacher) && (
            <StudentProvisioning userId={resolvedUserId} />
          )}

          {activeTab === 'batches' && (effectiveRole === Role.Admin || effectiveRole === Role.Teacher) && (
            <BatchManager userId={resolvedUserId} />
          )}

          {activeTab === 'batch-performance' && (effectiveRole === Role.Admin || effectiveRole === Role.Teacher) && (
            <BatchPerformance batches={batchList} />
          )}

          {activeTab === 'create-test' && (effectiveRole === Role.Admin || effectiveRole === Role.Teacher) && (
            <QuickTestWizard userId={resolvedUserId} onComplete={() => setActiveTab('tests')} />
          )}

          {activeTab === 'results' && (effectiveRole === Role.Admin || effectiveRole === Role.Teacher) && (
            <BatchResults />
          )}



          {activeTab === 'questions' && (
            <QuestionBank />
          )}

          {activeTab === 'ai-seeder' && (effectiveRole === Role.Admin || effectiveRole === Role.Teacher) && (
            <AISeeder />
          )}

          {activeTab === 'tests' && (
            <div className="max-w-6xl mx-auto p-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Assessment Headers Database</h2>
                  <p className="text-xs text-slate-500">Manage, export or publish custom templates</p>
                </div>
                {(effectiveRole === Role.Admin || effectiveRole === Role.Teacher) && (
                  <button
                    onClick={() => setActiveTab('create-test')}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-xs shadow-sm"
                  >
                    Launch Generation Wizard
                  </button>
                )}
              </div>

              {/* Render Available Tests via Student Dashboard module view for unified consistency */}
              <StudentDashboard 
                onStartAttempt={handleStartAttempt} 
                userId={resolvedUserId} 
                autoReviewAttemptId={autoReviewAttemptId}
                onReviewClosed={() => setAutoReviewAttemptId(null)}
              />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="max-w-5xl mx-auto p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">Performance Analytics</h2>
              <p className="text-xs text-slate-500 mb-6">Score trends, subject breakdown, chapter heatmap, and peer percentile</p>
              {effectiveRole === Role.Student ? (
                <StudentAnalytics userId={resolvedUserId} />
              ) : (
                <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-sm text-slate-400">
                  Student analytics available per-student in the student list.
                </div>
              )}
            </div>
          )}

          {activeTab === 'practice' && effectiveRole === Role.Student && (
            <div className="py-4">
              {practiceMode === 'hub' && (
                <PracticeHub
                  userId={resolvedUserId}
                  onStartPractice={(config) => { setPracticeConfig(config); setPracticeMode('session'); }}
                  onStartBookmarks={async () => {
                    const res = await fetch(`/api/bookmarks?userId=${resolvedUserId}`);
                    const d = await res.json();
                    setBookmarkQuestions((d.bookmarks || []).map((b: any) => b.question));
                    setPracticeMode('bookmarks');
                  }}
                  onStartMistakes={async () => {
                    const res = await fetch(`/api/mistakes?userId=${resolvedUserId}`);
                    const d = await res.json();
                    setMistakeQuestions((d.mistakes || []).map((m: any) => m.question));
                    setPracticeMode('mistakes');
                  }}
                />
              )}
              {practiceMode === 'session' && practiceConfig && (
                <PracticeSession
                  config={practiceConfig}
                  userId={resolvedUserId}
                  onExit={() => { setPracticeMode('hub'); setPracticeConfig(null); }}
                />
              )}
              {practiceMode === 'bookmarks' && (
                <PracticeSession
                  config={{ grade: 'all', subject: 'Bookmarks', chapter: 'Saved Questions', difficulty: 'All' }}
                  questions={bookmarkQuestions}
                  userId={resolvedUserId}
                  onExit={() => setPracticeMode('hub')}
                />
              )}
              {practiceMode === 'mistakes' && (
                <PracticeSession
                  config={{ grade: 'all', subject: 'Mistakes', chapter: 'Wrong Answers Revision', difficulty: 'All' }}
                  questions={mistakeQuestions}
                  userId={resolvedUserId}
                  onExit={() => setPracticeMode('hub')}
                />
              )}
            </div>
          )}

          {activeTab === 'profile' && effectiveRole === Role.Student && (
            <div className="max-w-xl mx-auto p-6 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">My Profile</h2>
              <ProfileEditor userId={resolvedUserId} />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-4xl mx-auto p-6 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Platform Settings</h2>
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 space-y-3">
                <p>Platform settings and configuration are managed by the system administrator.</p>
                <p className="text-xs text-slate-400">For account-related queries, please contact your institute admin.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
