'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, FlaskConical, Dumbbell, ChevronRight, Loader2, BarChart2, Bookmark, RotateCcw } from 'lucide-react';

interface PracticeHubProps {
  userId: string;
  grade?: string | null;
  onStartPractice: (config: { grade: string; subject: string; chapter: string; difficulty: string }) => void;
  onStartBookmarks: () => void;
  onStartMistakes: () => void;
}

const GRADES = ['7', '8', '9', '10', '11', '12'];
const SUBJECTS = ['Maths', 'Science'];

export default function PracticeHub({ grade: userGrade, onStartPractice, onStartBookmarks, onStartMistakes }: PracticeHubProps) {
  const [selectedGrade, setSelectedGrade] = useState(userGrade || '10');
  const [selectedSubject, setSelectedSubject] = useState('Maths');
  const [chapters, setChapters] = useState<string[]>([]);
  const [loadingChapters, setLoadingChapters] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  useEffect(() => {
    const fetchChapters = async () => {
      setLoadingChapters(true);
      setChapters([]);
      try {
        const res = await fetch(`/api/practice?grade=${selectedGrade}&subject=${selectedSubject}&listChapters=1`);
        const data = await res.json();
        setChapters(data.chapters || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingChapters(false);
      }
    };
    fetchChapters();
  }, [selectedGrade, selectedSubject]);

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white p-8 shadow-xl">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
        <div className="relative z-10">
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Self-Study Engine
          </span>
          <h1 className="text-3xl font-extrabold mt-3 tracking-tight">Practice Mode</h1>
          <p className="mt-2 text-violet-100 text-sm max-w-md">
            Pick any chapter from the NCERT syllabus and drill through questions at your own pace. Instant feedback after every answer.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={onStartBookmarks}
          className="flex items-center gap-4 p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 hover:border-amber-500 transition-all group text-left"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Bookmarked Questions</h3>
            <p className="text-xs text-slate-500 mt-0.5">Review questions you saved</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 ml-auto group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onStartMistakes}
          className="flex items-center gap-4 p-5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 hover:border-red-500 transition-all group text-left"
        >
          <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Revise Mistakes</h3>
            <p className="text-xs text-slate-500 mt-0.5">Retry all wrong answers from tests</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 ml-auto group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Chapter Practice Selector */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-sm">
        <h2 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-violet-600" /> Chapter Practice
        </h2>

        {/* Grade Selector */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Select Class</label>
          <div className="flex flex-wrap gap-2">
            {GRADES.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                  selectedGrade === g
                    ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/20'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-violet-400'
                }`}
              >
                Class {g}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Selector */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Select Subject</label>
          <div className="flex gap-3">
            {SUBJECTS.map((s) => {
              const Icon = s === 'Maths' ? BarChart2 : FlaskConical;
              return (
                <button
                  key={s}
                  onClick={() => setSelectedSubject(s)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                    selectedSubject === s
                      ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/20'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-violet-400'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {s}
                </button>
              );
            })}
          </div>
        </div>

        {/* Difficulty Selector */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Difficulty Filter</label>
          <div className="flex gap-2">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  selectedDifficulty === d
                    ? d === 'Easy' ? 'bg-emerald-500 text-white border-emerald-500'
                    : d === 'Medium' ? 'bg-amber-500 text-white border-amber-500'
                    : d === 'Hard' ? 'bg-red-500 text-white border-red-500'
                    : 'bg-violet-600 text-white border-violet-600'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Grid */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            {loadingChapters ? 'Loading chapters...' : `Select Chapter — Class ${selectedGrade} ${selectedSubject}`}
          </label>
          {loadingChapters ? (
            <div className="flex items-center gap-3 text-slate-400 py-6">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm">Fetching chapter list...</span>
            </div>
          ) : chapters.length === 0 ? (
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 text-center text-sm text-slate-400">
              No chapters found for this selection. Try a different grade or subject.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {chapters.map((ch) => (
                <button
                  key={ch}
                  onClick={() => onStartPractice({ grade: selectedGrade, subject: selectedSubject, chapter: ch, difficulty: selectedDifficulty })}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/30 text-left group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-violet-700 dark:group-hover:text-violet-400 leading-tight line-clamp-2">{ch}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-violet-500 shrink-0 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
