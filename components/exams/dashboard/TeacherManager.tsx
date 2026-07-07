'use client';

import React, { useState, useEffect } from 'react';
import { UserCircle, UserPlus, X, CheckCircle2, Layers } from 'lucide-react';
import { useDialog } from '@/components/exams/ui/DialogProvider';

export default function TeacherManager() {
  const { toast } = useDialog();
  const [teachers, setTeachers] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Add Teacher Modal States
  const [showModal, setShowModal] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [modalLoading, setModalLoading] = useState(false);
  const [modalErr, setModalErr] = useState('');
  const [modalSuccess, setModalSuccess] = useState('');

  // Assign Batch States
  const [assigningTeacherId, setAssigningTeacherId] = useState<string | null>(null);
  const [selectedBatchId, setSelectedBatchId] = useState<string>('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resTeachers, resBatches] = await Promise.all([
        fetch('/api/users/teachers'),
        fetch('/api/batches')
      ]);
      
      const dataTeachers = await resTeachers.json();
      if (dataTeachers.teachers) setTeachers(dataTeachers.teachers);

      const dataBatches = await resBatches.json();
      if (dataBatches.batches) setBatches(dataBatches.batches);

    } catch (err) {
      console.error('Failed to fetch teachers', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalErr('');
    setModalSuccess('');
    setModalLoading(true);

    if (!newTeacher.name || !newTeacher.email) {
      setModalErr('Name and Email are required.');
      setModalLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/users/teachers/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTeacher),
      });

      const data = await res.json();
      if (res.ok) {
        setModalSuccess(`Teacher added! Temp Password: ${data.generatedPassword}`);
        fetchData();
        setTimeout(() => {
          setNewTeacher({ name: '', email: '', phone: '' });
          setModalSuccess('');
          setShowModal(false);
        }, 3000);
      } else {
        setModalErr(data.error || 'Failed to register teacher.');
      }
    } catch (err) {
      console.error('Teacher registration error:', err);
      setModalErr('Connection error.');
    } finally {
      setModalLoading(false);
    }
  };

  const handleAssignBatch = async (teacherId: string) => {
    if (!selectedBatchId) {
      toast('Select a batch first', 'info');
      return;
    }

    try {
      const res = await fetch(`/api/batches/${selectedBatchId}/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: teacherId }), // Using studentId payload as the schema uses it generically for User
      });
      
      if (res.ok) {
        fetchData();
        setAssigningTeacherId(null);
      } else {
        toast('Failed to assign batch', 'error');
      }
    } catch (err) {
      console.error(err);
      toast('Error assigning batch', 'error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 animate-fadeIn font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <UserCircle className="w-5 h-5 text-indigo-600" />
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Teacher Management
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Register new teachers and assign them to specific batches.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
        >
          <UserPlus className="w-3.5 h-3.5" /> Register Teacher
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="h-48 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse"></div>
          ))
        ) : teachers.length === 0 ? (
          <div className="col-span-full p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            No teachers registered yet.
          </div>
        ) : (
          teachers.map(teacher => (
            <div key={teacher.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    {teacher.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">{teacher.name}</h3>
                    <p className="text-[10px] text-slate-500">{teacher.email}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Assigned Batches</h4>
                  {teacher.batchEnrollments.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.batchEnrollments.map((e: any, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md border border-emerald-200 dark:border-emerald-800/50">
                          {e.batch.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic">No batches assigned</span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                {assigningTeacherId === teacher.id ? (
                  <div className="flex gap-2">
                    <select
                      value={selectedBatchId}
                      onChange={(e) => setSelectedBatchId(e.target.value)}
                      className="flex-1 px-2 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    >
                      <option value="">Select Batch...</option>
                      {batches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                    </select>
                    <button onClick={() => handleAssignBatch(teacher.id)} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold">Add</button>
                    <button onClick={() => setAssigningTeacherId(null)} className="px-2 text-slate-400"><X className="w-4 h-4"/></button>
                  </div>
                ) : (
                  <button
                    onClick={() => setAssigningTeacherId(teacher.id)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" /> Assign Batch
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white">Register Teacher</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>
            </div>
            <form onSubmit={handleCreateTeacher} className="p-4 space-y-3">
              {modalErr && <div className="p-2 text-xs text-red-500 bg-red-50 dark:bg-red-950 rounded">{modalErr}</div>}
              {modalSuccess && <div className="p-2 text-xs text-emerald-500 bg-emerald-50 dark:bg-emerald-950 rounded font-bold">{modalSuccess}</div>}

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Full Name</label>
                <input required type="text" value={newTeacher.name} onChange={e => setNewTeacher({...newTeacher, name: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Email</label>
                <input required type="email" value={newTeacher.email} onChange={e => setNewTeacher({...newTeacher, email: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Phone (Optional)</label>
                <input type="tel" value={newTeacher.phone} onChange={e => setNewTeacher({...newTeacher, phone: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" />
              </div>

              <button type="submit" disabled={modalLoading} className="w-full py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold mt-2">
                {modalLoading ? 'Registering...' : 'Register Teacher'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
