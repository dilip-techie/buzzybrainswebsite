'use strict';
import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, X, Check } from 'lucide-react';
import { Difficulty, QuestionType } from '@prisma/client';

export default function QuestionBank() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [gradeFilter, setGradeFilter] = useState('');

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newQuestion, setNewQuestion] = useState<{
    board: string;
    grade: string;
    subject: string;
    topic: string;
    difficulty: Difficulty;
    type: QuestionType;
    content: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
  }>({
    board: 'CBSE',
    grade: '10',
    subject: 'Maths',
    topic: 'Algebra',
    difficulty: Difficulty.Medium,
    type: QuestionType.MCQ,
    content: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: '',
  });

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/questions');
      const data = await res.json();
      if (data.questions) setQuestions(data.questions);
    } catch (err) {
      console.error('Failed to fetch questions bank', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.content) return;

    setCreating(true);
    try {
      const optionsArray = [
        newQuestion.optionA,
        newQuestion.optionB,
        newQuestion.optionC,
        newQuestion.optionD,
      ].filter(Boolean);

      const payload = {
        board: newQuestion.board,
        grade: newQuestion.grade,
        subject: newQuestion.subject,
        topic: newQuestion.topic,
        difficulty: newQuestion.difficulty,
        type: newQuestion.type,
        content: newQuestion.content,
        options: optionsArray.length > 0 ? optionsArray : null,
        correctAnswer: newQuestion.correctAnswer || null,
        tags: [newQuestion.topic, newQuestion.subject],
      };

      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setShowModal(false);
        // Reset
        setNewQuestion({
          board: 'CBSE',
          grade: '10',
          subject: 'Maths',
          topic: 'Algebra',
          difficulty: Difficulty.Medium,
          type: QuestionType.MCQ,
          content: '',
          optionA: '',
          optionB: '',
          optionC: '',
          optionD: '',
          correctAnswer: '',
        });
        fetchQuestions();
      }
    } catch (err) {
      console.error('Failed to create item', err);
    } finally {
      setCreating(false);
    }
  };

  // Filtered dataset
  const filteredQuestions = questions.filter((q) => {
    const matchesSearch = q.content.toLowerCase().includes(search.toLowerCase()) || 
                          q.topic.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = subjectFilter ? q.subject.toLowerCase() === subjectFilter.toLowerCase() : true;
    const matchesGrade = gradeFilter ? q.grade === gradeFilter : true;
    return matchesSearch && matchesSubject && matchesGrade;
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 animate-fadeIn">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Central Question Bank</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Manage granular objective and subjective curriculum pools
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add Question Modal
        </button>
      </div>

      {/* Advanced Filters Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search questions or topic keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none"
          >
            <option value="">All Subjects</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
          </select>

          <select
            value={gradeFilter}
            onChange={(e) => setGradeFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none"
          >
            <option value="">All Standards</option>
            {['7', '8', '9', '10', '11', '12'].map((g) => (
              <option key={g} value={g}>Std {g}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Modern Data Table Representation */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold">
                <th className="p-3.5">Standard / Curriculum</th>
                <th className="p-3.5">Question Content</th>
                <th className="p-3.5">Topic & Type</th>
                <th className="p-3.5">Difficulty</th>
                <th className="p-3.5">Answer Metadata</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {loading ? (
                // Skeleton rows
                [...Array(4)].map((_, idx) => (
                  <tr key={idx}>
                    <td className="p-3.5"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-16"></div></td>
                    <td className="p-3.5"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-48"></div></td>
                    <td className="p-3.5"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-20"></div></td>
                    <td className="p-3.5"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-12"></div></td>
                    <td className="p-3.5"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-16"></div></td>
                  </tr>
                ))
              ) : filteredQuestions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    No matching questions found in the selected category.
                  </td>
                </tr>
              ) : (
                filteredQuestions.map((q) => (
                  <tr key={q.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 whitespace-nowrap">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">Std {q.grade}</span>
                      <span className="text-slate-400 block text-[10px]">{q.board} • {q.subject}</span>
                    </td>
                    <td className="p-3.5 max-w-md">
                      <p className="text-slate-900 dark:text-slate-100 font-medium line-clamp-2">{q.content}</p>
                      {q.options && Array.isArray(q.options) && (
                        <div className="flex flex-wrap gap-1.5 mt-1 text-[10px] text-slate-500">
                          {q.options.map((o: string, oI: number) => (
                            <span key={oI} className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">
                              {o}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{q.topic}</span>
                      <span className="block text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-1 py-0.2 w-max rounded mt-0.5 uppercase">
                        {q.type}
                      </span>
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        q.difficulty === Difficulty.Easy ? 'bg-emerald-50 text-emerald-600' :
                        q.difficulty === Difficulty.Medium ? 'bg-amber-50 text-amber-600' :
                        'bg-red-50 text-red-600'
                      }`}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600 dark:text-slate-400 text-[11px]">
                      {q.correctAnswer ? (
                        <span className="flex items-center gap-1 font-semibold text-emerald-600">
                          <Check className="w-3 h-3" /> {q.correctAnswer}
                        </span>
                      ) : (
                        <span className="italic text-slate-400">Subjective</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Question Inline Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Add New Question Record</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateQuestion} className="space-y-3 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-slate-500 mb-0.5">Board</label>
                  <input
                    value={newQuestion.board}
                    onChange={(e) => setNewQuestion({ ...newQuestion, board: e.target.value })}
                    className="w-full p-2 border rounded dark:bg-slate-950 dark:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-0.5">Standard</label>
                  <select
                    value={newQuestion.grade}
                    onChange={(e) => setNewQuestion({ ...newQuestion, grade: e.target.value })}
                    className="w-full p-2 border rounded dark:bg-slate-950 dark:border-slate-800"
                  >
                    {['7', '8', '9', '10', '11', '12'].map((g) => (
                      <option key={g} value={g}>Std {g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 mb-0.5">Subject</label>
                  <select
                    value={newQuestion.subject}
                    onChange={(e) => setNewQuestion({ ...newQuestion, subject: e.target.value })}
                    className="w-full p-2 border rounded dark:bg-slate-950 dark:border-slate-800"
                  >
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <label className="block text-slate-500 mb-0.5">Topic</label>
                  <input
                    value={newQuestion.topic}
                    onChange={(e) => setNewQuestion({ ...newQuestion, topic: e.target.value })}
                    placeholder="e.g. Algebra"
                    className="w-full p-2 border rounded dark:bg-slate-950 dark:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-0.5">Difficulty</label>
                  <select
                    value={newQuestion.difficulty}
                    onChange={(e) => setNewQuestion({ ...newQuestion, difficulty: e.target.value as Difficulty })}
                    className="w-full p-2 border rounded dark:bg-slate-950 dark:border-slate-800"
                  >
                    <option value={Difficulty.Easy}>Easy</option>
                    <option value={Difficulty.Medium}>Medium</option>
                    <option value={Difficulty.Hard}>Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 mb-0.5">Question Type</label>
                  <select
                    value={newQuestion.type}
                    onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value as QuestionType })}
                    className="w-full p-2 border rounded dark:bg-slate-950 dark:border-slate-800"
                  >
                    <option value={QuestionType.MCQ}>MCQ</option>
                    <option value={QuestionType.Short}>Short Answer</option>
                    <option value={QuestionType.Long}>Long Answer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-0.5 font-semibold">Question Content Prompt</label>
                <textarea
                  rows={3}
                  placeholder="Enter full structured text or expressions..."
                  value={newQuestion.content}
                  onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                  className="w-full p-2 border rounded dark:bg-slate-950 dark:border-slate-800 font-medium"
                  required
                />
              </div>

              {newQuestion.type === QuestionType.MCQ && (
                <div className="space-y-1.5 p-3 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60">
                  <span className="font-semibold text-[10px] text-indigo-500 block">MCQ Choices Mapping</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      placeholder="Option A"
                      value={newQuestion.optionA}
                      onChange={(e) => setNewQuestion({ ...newQuestion, optionA: e.target.value })}
                      className="p-1.5 border rounded bg-white dark:bg-slate-900"
                    />
                    <input
                      placeholder="Option B"
                      value={newQuestion.optionB}
                      onChange={(e) => setNewQuestion({ ...newQuestion, optionB: e.target.value })}
                      className="p-1.5 border rounded bg-white dark:bg-slate-900"
                    />
                    <input
                      placeholder="Option C"
                      value={newQuestion.optionC}
                      onChange={(e) => setNewQuestion({ ...newQuestion, optionC: e.target.value })}
                      className="p-1.5 border rounded bg-white dark:bg-slate-900"
                    />
                    <input
                      placeholder="Option D"
                      value={newQuestion.optionD}
                      onChange={(e) => setNewQuestion({ ...newQuestion, optionD: e.target.value })}
                      className="p-1.5 border rounded bg-white dark:bg-slate-900"
                    />
                  </div>

                  <div className="pt-1">
                    <label className="block text-slate-500 mb-0.5">Exact Correct Answer String</label>
                    <input
                      placeholder="e.g. 40 or Option content exactly"
                      value={newQuestion.correctAnswer}
                      onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                      className="w-full p-1.5 border rounded bg-white dark:bg-slate-900 font-bold text-emerald-600"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1.5 rounded border hover:bg-slate-50 text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-4 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow"
                >
                  {creating ? 'Saving...' : 'Save Question Entry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
