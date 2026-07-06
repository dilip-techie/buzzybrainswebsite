'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Loader2, ShieldAlert } from 'lucide-react';
import TestInterface from '@/components/exams/tests/TestInterface';

export default function AttemptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: testId } = use(params);
  const router = useRouter();
  const { status } = useSession();
  const hasStarted = useRef(false);

  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [testDetails, setTestDetails] = useState<any>(null);
  const [durationMins, setDurationMins] = useState(60);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'loading' || hasStarted.current) return;

    if (status === 'unauthenticated') {
      router.replace(`/login?redirect=${encodeURIComponent(`/tests/${testId}/attempt`)}`);
      return;
    }

    const startAttempt = async () => {
      hasStarted.current = true;
      try {
        const res = await fetch('/api/attempts/start', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ testId }),
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || 'Unable to start this assessment.');
          return;
        }

        setAttemptId(data.attemptId);
        setTestDetails(data.testDetails);
        setDurationMins(data.durationMins);
      } catch (err) {
        console.error('Attempt launch failed:', err);
        setError('Network issue while starting the assessment.');
      }
    };

    startAttempt();
  }, [router, status, testId]);

  if (attemptId && testDetails) {
    return (
      <TestInterface
        attemptId={attemptId}
        testDetails={testDetails}
        durationMins={durationMins}
        onFinishSubmit={() => router.replace('/')}
        onCancel={() => router.replace('/')}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="max-w-md w-full rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl">
        {error ? (
          <>
            <ShieldAlert className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h1 className="text-lg font-bold">Assessment unavailable</h1>
            <p className="mt-2 text-sm text-slate-400">{error}</p>
            <button
              type="button"
              onClick={() => router.replace('/')}
              className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700"
            >
              Return to dashboard
            </button>
          </>
        ) : (
          <>
            <Loader2 className="w-9 h-9 text-indigo-400 mx-auto mb-4 animate-spin" />
            <h1 className="text-lg font-bold">Preparing secure assessment</h1>
            <p className="mt-2 text-sm text-slate-400">
              Verifying your session and loading the assigned test.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
