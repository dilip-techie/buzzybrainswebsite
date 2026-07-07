'use client';
import React, { useState, useEffect } from 'react';
import { Loader2, TrendingUp, BookOpen, Target, Activity, Award } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell,
} from 'recharts';

interface StudentAnalyticsProps {
  userId: string;
}

export default function StudentAnalytics({ userId }: StudentAnalyticsProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/analytics/dashboard?userId=${userId}`);
        const d = await res.json();
        setData(d);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [userId]);

  if (loading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center gap-3 text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
        <p className="text-sm">Loading your analytics...</p>
      </div>
    );
  }

  if (!data || (data.totalTests === 0 && data.totalPracticeSessions === 0)) {
    return (
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
        <Activity className="w-10 h-10 text-slate-300 mx-auto" />
        <p className="font-bold text-slate-700 dark:text-slate-300">No activity yet</p>
        <p className="text-sm text-slate-400">Complete a test or practice session to see your analytics here.</p>
      </div>
    );
  }

  const subjectColors: Record<string, string> = {
    Maths: '#6366f1', Science: '#10b981', Physics: '#f59e0b', Chemistry: '#ef4444', Biology: '#8b5cf6',
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-fadeIn">
      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Tests Taken', value: data.totalTests, icon: BookOpen, color: 'indigo' },
          { label: 'Practice Sessions', value: data.totalPracticeSessions, icon: Target, color: 'violet' },
          { label: 'Peer Percentile', value: data.peerPercentile !== null ? `${data.peerPercentile}%` : 'N/A', icon: Award, color: 'amber' },
          { label: 'Subjects Studied', value: data.subjectBreakdown?.length || 0, icon: TrendingUp, color: 'emerald' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400">{label}</span>
              <Icon className={`w-4 h-4 text-${color}-500`} />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{value}</p>
          </div>
        ))}
      </div>

      {/* Score Trend */}
      {data.scoreTrend?.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-500" /> Score Trend Over Time
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data.scoreTrend} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} unit="%" />
              <Tooltip
                formatter={(val: any) => [`${val}%`, 'Score']}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }}
              />
              <Line type="monotone" dataKey="percentage" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 4, fill: '#6366f1' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Subject Breakdown */}
      {data.subjectBreakdown?.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-500" /> Subject-wise Accuracy
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.subjectBreakdown} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} unit="%" />
              <YAxis dataKey="subject" type="category" tick={{ fontSize: 11 }} width={70} />
              <Tooltip formatter={(v: any) => [`${v}%`, 'Accuracy']} contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }} />
              <Bar dataKey="accuracy" radius={[0, 6, 6, 0]}>
                {data.subjectBreakdown.map((entry: any) => (
                  <Cell key={entry.subject} fill={subjectColors[entry.subject] || '#6366f1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Chapter Heatmap */}
      {data.chapterHeatmap?.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-violet-500" /> Chapter Accuracy Heatmap
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {data.chapterHeatmap.map((item: any) => {
              const acc = item.accuracy;
              const bg = acc >= 75 ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : acc >= 40 ? 'bg-amber-100 border-amber-300 text-amber-800' : 'bg-red-100 border-red-300 text-red-800';
              return (
                <div key={`${item.subject}-${item.chapter}`} className={`p-3 rounded-xl border ${bg}`}>
                  <p className="text-[10px] font-bold uppercase tracking-wide opacity-70">{item.subject}</p>
                  <p className="text-xs font-semibold leading-tight mt-0.5 line-clamp-2">{item.chapter}</p>
                  <p className="text-sm font-extrabold mt-1">{acc}%</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-200 inline-block" />≥75% Strong</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-200 inline-block" />40-74% Moderate</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-200 inline-block" />&lt;40% Needs work</span>
          </div>
        </div>
      )}

      {/* Peer Percentile Banner */}
      {data.peerPercentile !== null && (
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white text-center shadow-lg">
          <Award className="w-8 h-8 mx-auto mb-2 opacity-90" />
          <p className="text-3xl font-extrabold">{data.peerPercentile}<span className="text-lg">%</span></p>
          <p className="text-indigo-100 text-sm mt-1">You scored better than {data.peerPercentile}% of your peers in the most recent test</p>
        </div>
      )}
    </div>
  );
}
