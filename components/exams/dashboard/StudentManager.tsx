'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Users, RefreshCw, Pencil, Trash2, Send, X, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';
import { useDialog } from '@/components/exams/ui/DialogProvider';

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  grade: string | null;
  board: string | null;
  batchEnrollments: { id: string; batch: { id: string; name: string; grade: string } }[];
}

const GRADES = ['7', '8', '9', '10', '11', '12'];

export default function StudentManager() {
  const { confirm } = useDialog();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterGrade, setFilterGrade] = useState('');

  // Edit modal
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState('');

  // Status messages per student
  const [statusMsg, setStatusMsg] = useState<Record<string, { text: string; type: 'success' | 'error' }>>({});
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchStudents = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterGrade) params.set('grade', filterGrade);
      const res = await fetch(`/api/users/students?${params.toString()}`);
      const data = await res.json();
      setStudents(data.students || []);
    } catch (err) {
      console.error('Failed to fetch students', err);
    } finally {
      setLoading(false);
    }
  }, [filterGrade]);

  useEffect(() => { fetchStudents(); }, [fetchStudents]);

  const showStatus = (studentId: string, text: string, type: 'success' | 'error') => {
    setStatusMsg(prev => ({ ...prev, [studentId]: { text, type } }));
    setTimeout(() => setStatusMsg(prev => { const n = { ...prev }; delete n[studentId]; return n; }), 5000);
  };

  // ── Delete Student ──
  const handleDelete = async (student: Student) => {
    const ok = await confirm({ title: 'Delete Student?', message: `Permanently delete ${student.name}? This removes all their data including test attempts and cannot be undone.`, confirmLabel: 'Delete Permanently', variant: 'danger' });
    if (!ok) return;
    setActionLoading(student.id);
    try {
      const res = await fetch(`/api/users/${student.id}`, { method: 'DELETE' });
      if (res.ok) {
        showStatus(student.id, 'Deleted', 'success');
        fetchStudents();
      } else {
        const d = await res.json();
        showStatus(student.id, d.error || 'Failed', 'error');
      }
    } catch { showStatus(student.id, 'Network error', 'error'); }
    finally { setActionLoading(null); }
  };

  // ── Resend Credentials ──
  const handleResend = async (student: Student) => {
    setActionLoading(student.id);
    try {
      const res = await fetch('/api/admin/resend-credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: student.email }),
      });
      const data = await res.json();
      if (res.ok) {
        showStatus(student.id, `Sent! Temp: ${data.tempPassword}`, 'success');
      } else {
        showStatus(student.id, data.error || 'Failed', 'error');
      }
    } catch { showStatus(student.id, 'Network error', 'error'); }
    finally { setActionLoading(null); }
  };

  // ── Edit Student ──
  const openEditModal = (student: Student) => {
    setEditStudent(student);
    setEditName(student.name);
    setEditEmail(student.email);
    setEditPhone(student.phone || '');
    setEditError('');
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editStudent) return;
    setEditLoading(true);
    setEditError('');
    try {
      const res = await fetch(`/api/users/${editStudent.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName, email: editEmail, phone: editPhone }),
      });
      const data = await res.json();
      if (res.ok) {
        setEditStudent(null);
        showStatus(editStudent.id, 'Updated', 'success');
        fetchStudents();
      } else {
        setEditError(data.error || 'Failed to update');
      }
    } catch { setEditError('Network error'); }
    finally { setEditLoading(false); }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-5 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" /> Student Directory
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">View, edit, and manage all registered students.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={filterGrade}
              onChange={e => setFilterGrade(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="">All Classes</option>
              {GRADES.map(g => <option key={g} value={g}>Class {g}</option>)}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <button
            onClick={fetchStudents}
            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold">
              <th className="p-3.5">Name</th>
              <th className="p-3.5">Email</th>
              <th className="p-3.5 hidden md:table-cell">Phone</th>
              <th className="p-3.5">Class</th>
              <th className="p-3.5">Batch</th>
              <th className="p-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {loading ? (
              [...Array(4)].map((_, i) => (
                <tr key={i}>
                  {[...Array(6)].map((_, j) => (
                    <td key={j} className="p-3.5"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse w-20" /></td>
                  ))}
                </tr>
              ))
            ) : students.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-400">
                  {filterGrade ? `No students found in Class ${filterGrade}.` : 'No students registered yet.'}
                </td>
              </tr>
            ) : (
              students.map(s => (
                <tr key={s.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">{s.name}</td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-400 font-mono text-[11px]">{s.email}</td>
                  <td className="p-3.5 text-slate-500 hidden md:table-cell">{s.phone || '—'}</td>
                  <td className="p-3.5 text-slate-500">{s.grade || '—'}</td>
                  <td className="p-3.5">
                    {s.batchEnrollments.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {s.batchEnrollments.map(be => (
                          <span key={be.id} className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                            {be.batch.name}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-amber-600 dark:text-amber-400 text-[10px] font-bold">
                        <AlertCircle className="w-3 h-3" /> Not Enrolled
                      </span>
                    )}
                  </td>
                  <td className="p-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => openEditModal(s)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
                        title="Edit Student"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleResend(s)}
                        disabled={actionLoading === s.id}
                        className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors disabled:opacity-40"
                        title="Resend Credentials"
                      >
                        {actionLoading === s.id ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => handleDelete(s)}
                        disabled={actionLoading === s.id}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors disabled:opacity-40"
                        title="Delete Student"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {statusMsg[s.id] && (
                      <span className={`block text-[10px] font-bold mt-1 ${statusMsg[s.id].type === 'success' ? 'text-emerald-500' : 'text-red-500'}`}>
                        {statusMsg[s.id].text}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Student Modal */}
      {editStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <form onSubmit={handleEditSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-md w-full overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Pencil className="w-4 h-4 text-indigo-500" /> Edit Student
              </h3>
              <button type="button" onClick={() => setEditStudent(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-3.5">
              {editError && (
                <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 text-[11px] font-medium text-center border border-red-200 dark:border-red-800">
                  {editError}
                </div>
              )}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500">Full Name</label>
                <input type="text" value={editName} onChange={e => setEditName(e.target.value)} required
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500">Email</label>
                <input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} required
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500">Phone</label>
                <input type="tel" value={editPhone} onChange={e => setEditPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="flex gap-2 pt-1">
                <button type="button" onClick={() => setEditStudent(null)}
                  className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={editLoading}
                  className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-md">
                  {editLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center italic">
                If email was changed, resend credentials so the student gets the new login details.
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
