'use client';

import React, { useState, useEffect } from 'react';
import { BarChart3, Trophy, TrendingUp, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface LeaderEntry { rank: number; studentId: string; name: string; email: string; tests: number; avgPercent: number; }
interface TestStat { testId: string; title: string; subject: string; attempted: number; totalStudents: number; completionRate: number; avgScore: number; highest: number; lowest: number; totalMarks: number; }

export default function BatchPerformance({ batches }: { batches: { id: string; name: string }[] }) {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [leaderboard, setLeaderboard] = useState<LeaderEntry[]>([]);
  const [testStats, setTestStats] = useState<TestStat[]>([]);
  const [batchName, setBatchName] = useState('');
  const [totalStudents, setTotalStudents] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedBatch) return;
    setLoading(true);
    fetch(`/api/analytics/batch?batchId=${selectedBatch}`)
      .then(r => r.json())
      .then(d => { setLeaderboard(d.leaderboard || []); setTestStats(d.testStats || []); setBatchName(d.batchName || ''); setTotalStudents(d.totalStudents || 0); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [selectedBatch]);

  const chartData = leaderboard.slice(0, 15).map(s => ({ name: s.name.split(' ')[0], score: s.avgPercent }));

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 animate-fadeIn">
      <div><h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Batch Performance</h2><p className="text-xs text-slate-500 mt-1">Leaderboards, score distribution, and completion rates per batch.</p></div>

      <select value={selectedBatch} onChange={e => setSelectedBatch(e.target.value)} className="w-full max-w-md py-2 px-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white">
        <option value="">Select a batch...</option>
        {batches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
      </select>

      {loading && <div className="h-40 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />}

      {!loading && selectedBatch && (
        <>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><div className="flex items-center justify-between text-slate-400"><span className="text-xs font-medium">Students</span><Users className="w-4 h-4 text-indigo-500" /></div><p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{totalStudents}</p></div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><div className="flex items-center justify-between text-slate-400"><span className="text-xs font-medium">Tests Dispatched</span><BarChart3 className="w-4 h-4 text-emerald-500" /></div><p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{testStats.length}</p></div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><div className="flex items-center justify-between text-slate-400"><span className="text-xs font-medium">Avg Score</span><TrendingUp className="w-4 h-4 text-amber-500" /></div><p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{leaderboard.length > 0 ? Math.round(leaderboard.reduce((s, l) => s + l.avgPercent, 0) / leaderboard.length) : 0}%</p></div>
          </div>

          {chartData.length > 0 && (
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4">Score Distribution</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={chartData}><CartesianGrid strokeDasharray="3 3" stroke="#334155" /><XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} /><YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[0, 100]} /><Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', fontSize: '11px' }} /><Bar dataKey="score" fill="#6366f1" radius={[4, 4, 0, 0]} /></BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {leaderboard.length > 0 && (
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2"><Trophy className="w-4 h-4 text-amber-500" /> Leaderboard</h3>
              <table className="w-full text-xs"><thead><tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500"><th className="text-left py-2 pr-4 font-medium w-12">#</th><th className="text-left py-2 pr-4 font-medium">Student</th><th className="text-left py-2 pr-4 font-medium">Tests</th><th className="text-left py-2 font-medium">Avg Score</th></tr></thead>
              <tbody>{leaderboard.map(s => (<tr key={s.studentId} className="border-b border-slate-100 dark:border-slate-800/50"><td className="py-2 pr-4 font-bold text-slate-900 dark:text-slate-200">{s.rank <= 3 ? ['🥇','🥈','🥉'][s.rank-1] : s.rank}</td><td className="py-2 pr-4"><span className="text-slate-900 dark:text-slate-200 font-medium">{s.name}</span><br/><span className="text-slate-400">{s.email}</span></td><td className="py-2 pr-4 text-slate-600 dark:text-slate-400">{s.tests}</td><td className="py-2"><span className={`font-bold ${s.avgPercent >= 70 ? 'text-emerald-500' : s.avgPercent >= 40 ? 'text-amber-500' : 'text-red-500'}`}>{s.avgPercent}%</span></td></tr>))}</tbody></table>
            </div>
          )}

          {testStats.length > 0 && (
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">Test-wise Breakdown</h3>
              <div className="space-y-2">{testStats.map(t => (
                <div key={t.testId} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
                  <div><p className="text-xs font-medium text-slate-900 dark:text-slate-200">{t.title}</p><p className="text-[10px] text-slate-500">{t.subject} • {t.attempted}/{t.totalStudents} attempted ({t.completionRate}%)</p></div>
                  <div className="text-right text-xs"><p className="text-slate-900 dark:text-slate-200 font-bold">Avg: {t.avgScore}/{t.totalMarks}</p><p className="text-[10px] text-slate-500">H: {t.highest} L: {t.lowest}</p></div>
                </div>
              ))}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
