'use client';
import React, { useState, useEffect } from 'react';
import { Loader2, Save, UserCircle2 } from 'lucide-react';

const GRADES = ['7', '8', '9', '10', '11', '12'];
const BOARDS = ['CBSE', 'ICSE', 'State Board'];

interface Props { userId: string; }

export default function ProfileEditor({ userId }: Props) {
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [grade, setGrade] = useState('');
  const [board, setBoard] = useState('CBSE');
  const [targetExam, setTargetExam] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`/api/users/profile?userId=${userId}`)
      .then(r => r.json())
      .then(d => {
        setProfile(d.user);
        setStats(d.stats);
        setGrade(d.user?.grade || '');
        setBoard(d.user?.board || 'CBSE');
        setTargetExam(d.user?.targetExam || '');
      })
      .finally(() => setLoading(false));
  }, [userId]);

  const handleSave = async () => {
    setSaving(true);
    await fetch('/api/users/profile', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, grade, board, targetExam }) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <div className="flex items-center gap-2 text-slate-400 py-8"><Loader2 className="w-5 h-5 animate-spin" /> Loading profile...</div>;

  return (
    <div className="space-y-6">
      {/* Avatar + name banner */}
      <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 border border-indigo-100 dark:border-indigo-900">
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-extrabold shadow-md shadow-indigo-600/20">
          {profile?.name?.[0]?.toUpperCase() || '?'}
        </div>
        <div>
          <h3 className="font-extrabold text-slate-900 dark:text-slate-100">{profile?.name}</h3>
          <p className="text-xs text-slate-500">{profile?.email}</p>
          <span className="text-[10px] bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold px-2 py-0.5 rounded-full mt-1 inline-block">{profile?.role}</span>
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Tests Done', value: stats.attemptCount },
            { label: 'Practice Sessions', value: stats.practiceCount },
            { label: 'Bookmarks', value: stats.bookmarkCount },
          ].map(({ label, value }) => (
            <div key={label} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{value}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Preferences form */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
          <UserCircle2 className="w-4 h-4 text-indigo-500" /> Study Preferences
        </h3>

        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Your Class</label>
          <div className="flex flex-wrap gap-2">
            {GRADES.map(g => (
              <button key={g} onClick={() => setGrade(g)}
                className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${grade === g ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-400'}`}>
                Class {g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Board</label>
          <div className="flex flex-wrap gap-2">
            {BOARDS.map(b => (
              <button key={b} onClick={() => setBoard(b)}
                className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${board === b ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-400'}`}>
                {b}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Target Exam (Optional)</label>
          <input value={targetExam} onChange={e => setTargetExam(e.target.value)}
            placeholder="e.g. JEE Mains, NEET, Board Exams"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors" />
        </div>

        <button onClick={handleSave} disabled={saving}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold text-sm transition-colors shadow-sm shadow-indigo-600/20">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saved ? 'Saved!' : saving ? 'Saving...' : 'Save Preferences'}
        </button>
      </div>
    </div>
  );
}
