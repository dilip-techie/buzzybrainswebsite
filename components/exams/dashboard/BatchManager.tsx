'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Layers, Plus, Users, Send, ChevronRight, Trash2, RefreshCw, CheckCircle2, X, UserPlus, MoreVertical, Pencil } from 'lucide-react';
import { useDialog } from '@/components/exams/ui/DialogProvider';

interface Batch { id: string; name: string; grade: string; board: string; isActive: boolean; createdBy: { name: string }; _count: { enrollments: number; dispatches: number }; }
interface Student { id: string; name: string; email: string; phone: string | null; grade?: string | null; }
interface BatchDetail { id: string; name: string; grade: string; board: string; description: string | null; inviteCode: string | null; enrollments: { id: string; student: Student }[]; dispatches: { id: string; dispatchedAt: string; totalSent: number; totalFailed: number; test: { title: string } }[]; }
interface TestOpt { id: string; title: string; subject: string; }

const GRADES = ['7','8','9','10','11','12'];

export default function BatchManager({ userId }: { userId: string }) {
  const { confirm, toast } = useDialog();
  const [batches, setBatches] = useState<Batch[]>([]);
  const [detail, setDetail] = useState<BatchDetail | null>(null);
  const [tests, setTests] = useState<TestOpt[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  // Create form — name + grade only
  const [newName, setNewName] = useState('');
  const [newGrade, setNewGrade] = useState('10');
  const [newDesc, setNewDesc] = useState('');

  // Dispatch
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [dispatchTestId, setDispatchTestId] = useState('');
  const [dispatching, setDispatching] = useState(false);
  const [dispatchMsg, setDispatchMsg] = useState('');

  // Unenrolled students for batch detail
  const [unenrolled, setUnenrolled] = useState<Student[]>([]);
  const [unenrolledLoading, setUnenrolledLoading] = useState(false);
  const [enrollingId, setEnrollingId] = useState<string | null>(null);
  const [enrollMsg, setEnrollMsg] = useState<Record<string, { text: string; ok: boolean }>>({});

  // 3-dot menu + edit modal
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editLoading, setEditLoading] = useState(false);
  const [actionMsg, setActionMsg] = useState<Record<string, string>>({});
  const unenrolledFetchedGrade = useRef('');

  // Batch-level edit/delete
  const [editBatch, setEditBatch] = useState<Batch | null>(null);
  const [editBatchName, setEditBatchName] = useState('');
  const [editBatchLoading, setEditBatchLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try { const r = await fetch('/api/batches'); const d = await r.json(); setBatches(d.batches || []); } catch {}
    setLoading(false);
  }, []);

  const loadTests = useCallback(async () => {
    try { const r = await fetch('/api/tests?status=Published'); const d = await r.json(); setTests((d.tests || []).map((t: any) => ({ id: t.id, title: t.title, subject: t.subject }))); } catch {}
  }, []);

  useEffect(() => { load(); loadTests(); }, [load, loadTests]);

  const openBatch = async (id: string) => {
    try {
      const r = await fetch(`/api/batches/${id}`);
      const d = await r.json();
      setDetail(d.batch);
      setSelectedStudents(d.batch.enrollments.map((e: any) => e.student.id));
      // Only fetch unenrolled once per grade
      if (unenrolledFetchedGrade.current !== d.batch.grade) {
        unenrolledFetchedGrade.current = d.batch.grade;
        fetchUnenrolled(d.batch.grade);
      }
    } catch {}
  };

  const fetchUnenrolled = async (grade: string) => {
    setUnenrolledLoading(true);
    try {
      const r = await fetch(`/api/users/students?grade=${grade}&unenrolled=true`);
      const d = await r.json();
      setUnenrolled(d.students || []);
    } catch {}
    setUnenrolledLoading(false);
  };

  const createBatch = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/batches', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: newName, grade: newGrade, board: 'CBSE', description: newDesc || null, createdById: userId }) });
    setShowCreate(false); setNewName(''); setNewDesc(''); load();
  };

  // ── Batch Rename ──
  const openBatchEditModal = (b: Batch) => {
    setOpenMenuId(null);
    setEditBatch(b);
    setEditBatchName(b.name);
  };

  const handleBatchRename = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editBatch) return;
    setEditBatchLoading(true);
    try {
      const res = await fetch(`/api/batches/${editBatch.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editBatchName }),
      });
      if (res.ok) {
        setEditBatch(null);
        // If we're inside the detail view, update it too
        if (detail && detail.id === editBatch.id) {
          setDetail(prev => prev ? { ...prev, name: editBatchName } : null);
        }
        load();
      }
    } catch {}
    setEditBatchLoading(false);
  };

  // ── Batch Delete ──
  const handleBatchDelete = async (b: Batch) => {
    setOpenMenuId(null);
    const ok = await confirm({ title: 'Delete Batch?', message: `Are you sure you want to delete "${b.name}"? All enrolled students will be unenrolled (not deleted). This cannot be undone.`, confirmLabel: 'Delete Batch', variant: 'danger' });
    if (!ok) return;
    try {
      const res = await fetch(`/api/batches/${b.id}`, { method: 'DELETE' });
      if (res.ok) {
        // If we're viewing this batch's detail, go back
        if (detail && detail.id === b.id) setDetail(null);
        load();
      }
    } catch {}
  };

  const unenrollStudent = async (sid: string) => {
    if (!detail) return;
    const ok = await confirm({ title: 'Unenroll Student?', message: 'This student will be removed from the batch but their account will remain active.', confirmLabel: 'Unenroll', variant: 'warning' });
    if (!ok) return;
    setOpenMenuId(null);
    await fetch(`/api/batches/${detail.id}/enroll`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ studentId: sid }) });
    // Move student from enrolled → unenrolled locally (no network re-fetch)
    const removed = detail.enrollments.find(e => e.student.id === sid);
    setDetail(prev => prev ? { ...prev, enrollments: prev.enrollments.filter(e => e.student.id !== sid) } : null);
    setSelectedStudents(prev => prev.filter(id => id !== sid));
    if (removed) setUnenrolled(prev => [...prev, removed.student]);
  };

  const enrollStudent = async (sid: string) => {
    if (!detail) return;
    setEnrollingId(sid);
    try {
      const res = await fetch(`/api/batches/${detail.id}/enroll`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ studentIds: [sid] }) });
      if (res.ok) {
        setEnrollMsg(prev => ({ ...prev, [sid]: { text: 'Enrolled!', ok: true } }));
        // Move student from unenrolled → enrolled locally (no network re-fetch)
        const student = unenrolled.find(s => s.id === sid);
        setUnenrolled(prev => prev.filter(s => s.id !== sid));
        if (student) {
          setDetail(prev => prev ? { ...prev, enrollments: [...prev.enrollments, { id: `temp-${sid}`, student }] } : null);
          setSelectedStudents(prev => [...prev, sid]);
        }
      } else {
        const d = await res.json();
        setEnrollMsg(prev => ({ ...prev, [sid]: { text: d.error || 'Failed', ok: false } }));
      }
    } catch {
      setEnrollMsg(prev => ({ ...prev, [sid]: { text: 'Network error', ok: false } }));
    } finally {
      setEnrollingId(null);
      setTimeout(() => setEnrollMsg(prev => { const n = { ...prev }; delete n[sid]; return n; }), 4000);
    }
  };

  const deleteStudent = async (s: Student) => {
    const ok = await confirm({ title: 'Delete Student?', message: `Permanently delete ${s.name}? This removes all their data including test attempts and cannot be undone.`, confirmLabel: 'Delete Permanently', variant: 'danger' });
    if (!ok) return;
    setOpenMenuId(null);
    await fetch(`/api/users/${s.id}`, { method: 'DELETE' });
    setUnenrolled(prev => prev.filter(u => u.id !== s.id));
    setActionMsg(prev => ({ ...prev, [s.id]: 'Deleted' }));
  };

  const resendCreds = async (s: Student) => {
    setOpenMenuId(null);
    const res = await fetch('/api/admin/resend-credentials', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: s.email }) });
    const d = await res.json();
    setActionMsg(prev => ({ ...prev, [s.id]: res.ok ? `Sent! Temp: ${d.tempPassword}` : (d.error || 'Failed') }));
    setTimeout(() => setActionMsg(prev => { const n = { ...prev }; delete n[s.id]; return n; }), 6000);
  };

  const openEditModal = (s: Student) => {
    setOpenMenuId(null); setEditStudent(s);
    setEditName(s.name); setEditEmail(s.email); setEditPhone(s.phone || '');
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!editStudent) return;
    setEditLoading(true);
    const res = await fetch(`/api/users/${editStudent.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: editName, email: editEmail, phone: editPhone }) });
    if (res.ok) {
      const updated = { ...editStudent, name: editName, email: editEmail, phone: editPhone };
      // Update locally in both lists
      setDetail(prev => prev ? { ...prev, enrollments: prev.enrollments.map(en => en.student.id === updated.id ? { ...en, student: updated } : en) } : null);
      setUnenrolled(prev => prev.map(s => s.id === updated.id ? updated : s));
      setEditStudent(null);
    }
    setEditLoading(false);
  };

  const toggleStudent = (sid: string) => setSelectedStudents(prev => prev.includes(sid) ? prev.filter(id => id !== sid) : [...prev, sid]);

  const dispatchTest = async () => {
    if (!detail || !dispatchTestId || selectedStudents.length === 0) return;
    setDispatching(true); setDispatchMsg('');
    try {
      const r = await fetch('/api/assignments/targeted', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ testId: dispatchTestId, studentIds: selectedStudents, batchId: detail.id }) });
      const d = await r.json();
      setDispatchMsg(d.message || 'Dispatched successfully');
      openBatch(detail.id);
    } catch { setDispatchMsg('Failed to dispatch'); }
    setDispatching(false);
  };

  // ─── Batch Detail View ───────────────────────────────────────────────
  if (detail) {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-6 animate-fadeIn">
        <button onClick={() => setDetail(null)} className="text-xs text-indigo-500 hover:text-indigo-400 font-bold">← Back to batches</button>
        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-xl flex items-center justify-between">
          <div><h2 className="text-xl font-bold">{detail.name}</h2><p className="text-indigo-200 text-xs mt-1">Class {detail.grade}</p>{detail.description && <p className="text-indigo-100 text-xs mt-2">{detail.description}</p>}</div>
          <div className="flex items-center gap-4">
            <div className="text-right"><p className="text-3xl font-bold">{detail.enrollments.length}</p><p className="text-indigo-200 text-xs">Students</p></div>
            <div className="relative">
              <button onClick={() => setOpenMenuId(openMenuId === `batch-detail` ? null : `batch-detail`)} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
              {openMenuId === `batch-detail` && (
                <div className="absolute right-0 top-10 z-20 w-44 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl py-1 text-[11px]">
                  <button onClick={() => { setOpenMenuId(null); setEditBatch({ id: detail.id, name: detail.name, grade: detail.grade, board: detail.board, isActive: true, createdBy: { name: '' }, _count: { enrollments: detail.enrollments.length, dispatches: detail.dispatches.length } }); setEditBatchName(detail.name); }} className="w-full px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Pencil className="w-3 h-3" /> Edit Name</button>
                  <button onClick={() => handleBatchDelete({ id: detail.id, name: detail.name, grade: detail.grade, board: detail.board, isActive: true, createdBy: { name: '' }, _count: { enrollments: detail.enrollments.length, dispatches: detail.dispatches.length } })} className="w-full px-3 py-2 text-left hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-2 text-red-500"><Trash2 className="w-3 h-3" /> Delete Batch</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Targeted Dispatch */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2"><Send className="w-4 h-4 text-indigo-500" /> Targeted Dispatch</span>
            <span className="text-xs font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{selectedStudents.length} selected</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <select value={dispatchTestId} onChange={e => setDispatchTestId(e.target.value)} className="flex-1 py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white">
              <option value="">Select test to dispatch...</option>
              {tests.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select>
            <button onClick={dispatchTest} disabled={dispatching || !dispatchTestId || selectedStudents.length === 0} className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold shadow-md">
              {dispatching ? <RefreshCw className="w-3.5 h-3.5 inline animate-spin" /> : 'Dispatch to Selected'}
            </button>
          </div>
          {dispatchMsg && <p className="mt-2 text-xs text-emerald-500 font-medium flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> {dispatchMsg}</p>}
        </div>

        {/* Enrolled Students */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"><Users className="w-4 h-4 text-emerald-500" /> Enrolled Students</h3>
            <button onClick={() => setSelectedStudents(detail.enrollments.map(e => e.student.id))} className="text-xs text-indigo-600 font-semibold bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">Select All</button>
          </div>
          {detail.enrollments.length === 0 ? <p className="text-xs text-slate-400 py-4 text-center">No students enrolled yet. Add students from the section below.</p> : (
            <table className="w-full text-xs">
              <thead><tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500">
                <th className="py-2 pr-2 w-8"></th><th className="text-left py-2 pr-4 font-medium">Name</th><th className="text-left py-2 pr-4 font-medium hidden sm:table-cell">Email</th><th className="text-left py-2 pr-4 font-medium hidden md:table-cell">Phone</th><th className="py-2 w-10"></th>
              </tr></thead>
              <tbody>
                {detail.enrollments.map(e => {
                  const isSelected = selectedStudents.includes(e.student.id);
                  const menuOpen = openMenuId === `enrolled-${e.student.id}`;
                  return (
                    <tr key={e.id} className={`border-b border-slate-100 dark:border-slate-800/50 transition-colors ${isSelected ? 'bg-indigo-50/50 dark:bg-indigo-950/20' : ''}`}>
                      <td className="py-2 pr-2"><input type="checkbox" checked={isSelected} onChange={() => toggleStudent(e.student.id)} className="w-3.5 h-3.5 text-indigo-600 rounded border-slate-300 cursor-pointer" /></td>
                      <td className="py-2 pr-4 text-slate-900 dark:text-slate-200 font-medium">{e.student.name}</td>
                      <td className="py-2 pr-4 text-slate-500 hidden sm:table-cell font-mono text-[11px]">{e.student.email}</td>
                      <td className="py-2 pr-4 text-slate-500 hidden md:table-cell">{e.student.phone || '—'}</td>
                      <td className="py-2 text-right relative">
                        <button onClick={() => setOpenMenuId(menuOpen ? null : `enrolled-${e.student.id}`)} className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                        {menuOpen && (
                          <div className="absolute right-0 top-8 z-20 w-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl py-1 text-[11px]">
                            <button onClick={() => openEditModal(e.student)} className="w-full px-3 py-1.5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Pencil className="w-3 h-3" /> Edit</button>
                            <button onClick={() => unenrollStudent(e.student.id)} className="w-full px-3 py-1.5 text-left hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-2 text-red-500"><Trash2 className="w-3 h-3" /> Unenroll</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Available (Unenrolled) Students */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-indigo-500" /> Available Students
              <span className="text-xs font-normal text-slate-400">(Class {detail.grade}, not enrolled in any batch)</span>
            </h3>
            <button onClick={() => fetchUnenrolled(detail.grade)} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
              <RefreshCw className="w-3 h-3" /> Refresh
            </button>
          </div>
          {unenrolledLoading ? (
            <p className="text-xs text-slate-400 flex items-center gap-2 py-4"><RefreshCw className="w-3 h-3 animate-spin" /> Loading...</p>
          ) : unenrolled.length === 0 ? (
            <p className="text-xs text-slate-400 italic py-4 text-center">All Class {detail.grade} students are already enrolled in a batch.</p>
          ) : (
            <table className="w-full text-xs">
              <thead><tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500">
                <th className="text-left py-2 pr-4 font-medium">Name</th>
                <th className="text-left py-2 pr-4 font-medium hidden sm:table-cell">Email</th>
                <th className="text-left py-2 pr-4 font-medium hidden md:table-cell">Phone</th>
                <th className="text-right py-2 font-medium">Action</th>
              </tr></thead>
              <tbody>
                {unenrolled.map(s => {
                  const menuOpen = openMenuId === `unenrolled-${s.id}`;
                  return (
                    <tr key={s.id} className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-colors">
                      <td className="py-2 pr-4 text-slate-900 dark:text-slate-200 font-medium">{s.name}</td>
                      <td className="py-2 pr-4 text-slate-500 hidden sm:table-cell font-mono text-[11px]">{s.email}</td>
                      <td className="py-2 pr-4 text-slate-500 hidden md:table-cell">{s.phone || '—'}</td>
                      <td className="py-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={() => enrollStudent(s.id)} disabled={enrollingId === s.id} className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-md text-[10px] font-bold transition-colors">
                            {enrollingId === s.id ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Plus className="w-3 h-3" />}
                            {enrollingId === s.id ? 'Adding...' : 'Enroll'}
                          </button>
                          <div className="relative">
                            <button onClick={() => setOpenMenuId(menuOpen ? null : `unenrolled-${s.id}`)} className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                              <MoreVertical className="w-3.5 h-3.5" />
                            </button>
                            {menuOpen && (
                              <div className="absolute right-0 top-8 z-20 w-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl py-1 text-[11px]">
                                <button onClick={() => openEditModal(s)} className="w-full px-3 py-1.5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Pencil className="w-3 h-3" /> Edit</button>
                                <button onClick={() => resendCreds(s)} className="w-full px-3 py-1.5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Send className="w-3 h-3" /> Resend Credentials</button>
                                <button onClick={() => deleteStudent(s)} className="w-full px-3 py-1.5 text-left hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-2 text-red-500"><Trash2 className="w-3 h-3" /> Delete</button>
                              </div>
                            )}
                          </div>
                        </div>
                        {enrollMsg[s.id] && <span className={`block text-[10px] font-bold mt-1 ${enrollMsg[s.id].ok ? 'text-emerald-500' : 'text-red-500'}`}>{enrollMsg[s.id].text}</span>}
                        {actionMsg[s.id] && <span className="block text-[10px] font-bold mt-1 text-indigo-500">{actionMsg[s.id]}</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Dispatch History */}
        {detail.dispatches.length > 0 && (
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">Dispatch History</h3>
            {detail.dispatches.map(d => (<div key={d.id} className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-950 text-xs mb-1"><span className="font-medium">{d.test.title}</span><span className="text-slate-500">{new Date(d.dispatchedAt).toLocaleString()} • {d.totalSent} sent</span></div>))}
          </div>
        )}
        {/* Close menus on outside click */}
        {openMenuId && <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />}

        {/* Edit Student Modal */}
        {editStudent && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <form onSubmit={handleEditSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-md w-full p-5 space-y-3">
              <div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2"><Pencil className="w-4 h-4 text-indigo-500" /> Edit Student</h3><button type="button" onClick={() => setEditStudent(null)}><X className="w-4 h-4 text-slate-400" /></button></div>
              <div><label className="block text-[11px] font-semibold text-slate-500 mb-1">Name</label><input type="text" value={editName} onChange={e => setEditName(e.target.value)} required className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" /></div>
              <div><label className="block text-[11px] font-semibold text-slate-500 mb-1">Email</label><input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} required className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" /></div>
              <div><label className="block text-[11px] font-semibold text-slate-500 mb-1">Phone</label><input type="tel" value={editPhone} onChange={e => setEditPhone(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" /></div>
              <div className="flex gap-2 pt-1">
                <button type="button" onClick={() => setEditStudent(null)} className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800">Cancel</button>
                <button type="submit" disabled={editLoading} className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold shadow-md">{editLoading ? 'Saving...' : 'Save'}</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }

  // ─── Main Batches List ────────────────────────────────────────────────
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div><h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Batch Management</h2><p className="text-xs text-slate-500 mt-1">Create batches, enroll students, and dispatch tests.</p></div>
        <button onClick={() => setShowCreate(true)} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" /> New Batch</button>
      </div>

      {/* Batch Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[1,2,3].map(i => <div key={i} className="h-36 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />)}</div>
      ) : batches.length === 0 ? (
        <div className="p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center"><Layers className="w-10 h-10 text-slate-300 mx-auto mb-3" /><p className="text-sm text-slate-500">No batches yet. Create one above.</p></div>
      ) : (
        <>
          {GRADES.filter(g => batches.some(b => b.grade === g)).map(g => (
            <div key={g}>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Class {g}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {batches.filter(b => b.grade === g).map(b => (
                  <div key={b.id} className="relative p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all text-left group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform"><Layers className="w-5 h-5" /></div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${b.isActive ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>{b.isActive ? 'Active' : 'Inactive'}</span>
                        <button onClick={(e) => { e.stopPropagation(); setOpenMenuId(openMenuId === `batch-${b.id}` ? null : `batch-${b.id}`); }} className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    {openMenuId === `batch-${b.id}` && (
                      <div className="absolute right-4 top-14 z-20 w-44 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl py-1 text-[11px]">
                        <button onClick={(e) => { e.stopPropagation(); openBatchEditModal(b); }} className="w-full px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"><Pencil className="w-3 h-3" /> Edit Name</button>
                        <button onClick={(e) => { e.stopPropagation(); handleBatchDelete(b); }} className="w-full px-3 py-2 text-left hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-2 text-red-500"><Trash2 className="w-3 h-3" /> Delete Batch</button>
                      </div>
                    )}
                    <button onClick={() => openBatch(b.id)} className="w-full text-left">
                      <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{b.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">Class {b.grade}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-xs text-slate-500 flex items-center gap-1"><Users className="w-3 h-3" /> {b._count.enrollments} students</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-all" />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      {/* Create Batch Modal — name + class only */}
      {showCreate && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={createBatch} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 w-full max-w-md space-y-4">
            <div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">Create New Batch</h3><button type="button" onClick={() => setShowCreate(false)}><X className="w-4 h-4 text-slate-400" /></button></div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Batch Name <span className="text-slate-400">(e.g. Aspire, Elite, Creative)</span></label>
              <input type="text" placeholder="e.g. Aspire" value={newName} onChange={e => setNewName(e.target.value)} required className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white" />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Class</label>
              <select value={newGrade} onChange={e => setNewGrade(e.target.value)} className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white">
                {GRADES.map(g => <option key={g} value={g}>Class {g}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Description <span className="text-slate-400">(optional)</span></label>
              <textarea placeholder="e.g. Morning batch for top performers" value={newDesc} onChange={e => setNewDesc(e.target.value)} rows={2} className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white resize-none" />
            </div>

            <button type="submit" className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-md">Create Batch</button>
          </form>
        </div>
      )}

      {/* Batch Edit/Rename Modal */}
      {editBatch && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleBatchRename} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 w-full max-w-md space-y-4">
            <div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"><Pencil className="w-4 h-4 text-indigo-500" /> Rename Batch</h3><button type="button" onClick={() => setEditBatch(null)}><X className="w-4 h-4 text-slate-400" /></button></div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Batch Name</label>
              <input type="text" placeholder="e.g. Aspire" value={editBatchName} onChange={e => setEditBatchName(e.target.value)} required className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white" />
            </div>
            <p className="text-[10px] text-slate-400">Batch: <strong>{editBatch.name}</strong> • Class {editBatch.grade}</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => setEditBatch(null)} className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800">Cancel</button>
              <button type="submit" disabled={editBatchLoading || !editBatchName.trim()} className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold shadow-md">{editBatchLoading ? 'Saving...' : 'Save'}</button>
            </div>
          </form>
        </div>
      )}

      {/* Close menus on outside click */}
      {openMenuId?.startsWith('batch-') && <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />}
    </div>
  );
}
