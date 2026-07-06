'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { UserPlus, Upload, CheckCircle2, AlertCircle, Users, Copy, RefreshCw, Send } from 'lucide-react';

interface ProvisionResult {
  name: string;
  email: string;
  tempPassword: string;
  status: string;
  userId?: string;
}

interface BatchOption {
  id: string;
  name: string;
  grade: string;
  board: string;
}

export default function StudentProvisioning({ userId }: { userId: string }) {
  const [tab, setTab] = useState<'single' | 'csv'>('single');
  const [batches, setBatches] = useState<BatchOption[]>([]);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [results, setResults] = useState<ProvisionResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [resendingEmail, setResendingEmail] = useState<string | null>(null);
  const [resendStatus, setResendStatus] = useState<Record<string, { text: string; type: 'success' | 'error' }>>({});

  // Single student form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('10');
  const [board, setBoard] = useState('CBSE');

  // CSV
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const fetchBatches = useCallback(async () => {
    try {
      const res = await fetch('/api/batches');
      const data = await res.json();
      setBatches((data.batches || []).filter((b: any) => b.isActive).map((b: any) => ({ id: b.id, name: b.name, grade: b.grade, board: b.board })));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => { fetchBatches(); }, [fetchBatches]);

  const handleSingleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    setMessage('');
    setResults([]);

    try {
      const res = await fetch('/api/admin/provision-students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          students: [{ name, email, phone, grade, board }],
          batchId: selectedBatch || undefined,
        }),
      });
      const data = await res.json();
      setResults(data.results || []);
      setMessage(data.message || '');
      if (res.ok) { setName(''); setEmail(''); setPhone(''); }
    } catch { setMessage('Network error'); }
    finally { setLoading(false); }
  };

  const handleCsvUpload = async () => {
    if (!csvFile) return;
    setLoading(true);
    setMessage('');
    setResults([]);

    try {
      const formData = new FormData();
      formData.append('file', csvFile);
      if (selectedBatch) formData.append('batchId', selectedBatch);

      const res = await fetch('/api/admin/provision-csv', { method: 'POST', body: formData });
      const data = await res.json();
      setResults(data.results || []);
      setMessage(data.message || '');
      if (res.ok) setCsvFile(null);
    } catch { setMessage('Upload failed'); }
    finally { setLoading(false); }
  };

  const copyCredentials = () => {
    const created = results.filter(r => r.status === 'Created');
    const text = created.map(r => `${r.name} | ${r.email} | ${r.tempPassword}`).join('\n');
    navigator.clipboard.writeText(text);
  };

  const handleResendCredentials = async (email: string) => {
    setResendingEmail(email);
    try {
      const res = await fetch('/api/admin/resend-credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        // Update the result row to show the new temp password
        setResults(prev => prev.map(r =>
          r.email === email
            ? { ...r, tempPassword: data.tempPassword, status: 'Resent' }
            : r
        ));
        setResendStatus(prev => ({ ...prev, [email]: { text: 'Sent!', type: 'success' } }));
      } else {
        setResendStatus(prev => ({ ...prev, [email]: { text: data.error || 'Failed', type: 'error' } }));
      }
    } catch {
      setResendStatus(prev => ({ ...prev, [email]: { text: 'Network error', type: 'error' } }));
    } finally {
      setResendingEmail(null);
      setTimeout(() => setResendStatus(prev => { const n = { ...prev }; delete n[email]; return n; }), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Provision Students</h2>
        <p className="text-xs text-slate-500 mt-1">Create student accounts with auto-generated credentials. Students will be emailed their login details.</p>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2">
        <button onClick={() => setTab('single')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${tab === 'single' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
          <UserPlus className="w-3.5 h-3.5 inline mr-1.5" /> Single Student
        </button>
        <button onClick={() => setTab('csv')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${tab === 'csv' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
          <Upload className="w-3.5 h-3.5 inline mr-1.5" /> CSV Bulk Upload
        </button>
      </div>

      {/* Batch selector */}
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <label className="block text-xs font-medium text-slate-500 mb-1.5">Assign to Batch (optional)</label>
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
          className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="">Auto-assign by grade + board</option>
          {batches.map(b => (
            <option key={b.id} value={b.id}>{b.name} (Grade {b.grade} — {b.board})</option>
          ))}
        </select>
      </div>

      {/* Single Student Form */}
      {tab === 'single' && (
        <form onSubmit={handleSingleSubmit} className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Full Name *</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Amit Patel" required className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Email *</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="amit@gmail.com" required className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="9876543210" className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Grade</label>
                <select value={grade} onChange={e => setGrade(e.target.value)} className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500">
                  {['12','11','10','9','8','7'].map(g => <option key={g} value={g}>Grade {g}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Board</label>
                <select value={board} onChange={e => setBoard(e.target.value)} className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500">
                  {['CBSE','ICSE','Foundation'].map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
          </div>
          <button type="submit" disabled={loading} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold shadow-md transition-all">
            {loading ? <RefreshCw className="w-3.5 h-3.5 inline animate-spin mr-1" /> : <UserPlus className="w-3.5 h-3.5 inline mr-1" />}
            {loading ? 'Provisioning...' : 'Create Account & Send Email'}
          </button>
        </form>
      )}

      {/* CSV Upload */}
      {tab === 'csv' && (
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-dashed border-slate-300 dark:border-slate-700 text-center">
            <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <p className="text-xs text-slate-500 mb-2">Upload a CSV file with columns: <span className="font-mono text-indigo-500">name, email, phone, grade, board</span></p>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
              className="text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white file:text-xs file:font-bold file:cursor-pointer hover:file:bg-indigo-700"
            />
            {csvFile && <p className="mt-2 text-xs text-emerald-500 font-medium">Selected: {csvFile.name}</p>}
          </div>
          <button onClick={handleCsvUpload} disabled={loading || !csvFile} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold shadow-md transition-all">
            {loading ? 'Processing...' : 'Upload & Provision All'}
          </button>
        </div>
      )}

      {/* Status message */}
      {message && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" /> {message}
        </div>
      )}

      {/* Results table */}
      {results.length > 0 && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-500" /> Provisioning Results
            </h3>
            <button onClick={copyCredentials} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium flex items-center gap-1 transition-colors">
              <Copy className="w-3 h-3" /> Copy Credentials
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500">
                  <th className="text-left py-2 pr-4 font-medium">Name</th>
                  <th className="text-left py-2 pr-4 font-medium">Email</th>
                  <th className="text-left py-2 pr-4 font-medium">Temp Password</th>
                  <th className="text-left py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} className="border-b border-slate-100 dark:border-slate-800/50">
                    <td className="py-2 pr-4 text-slate-900 dark:text-slate-200 font-medium">{r.name}</td>
                    <td className="py-2 pr-4 text-slate-600 dark:text-slate-400">{r.email}</td>
                    <td className="py-2 pr-4 font-mono text-indigo-600 dark:text-indigo-400 font-bold">{r.tempPassword || '—'}</td>
                    <td className="py-2">
                      <div className="flex flex-col gap-1">
                        {r.status === 'Created' || r.status === 'Resent' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                            <CheckCircle2 className="w-3 h-3" /> {r.status}
                          </span>
                        ) : (
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold">
                              <AlertCircle className="w-3 h-3" /> {r.status}
                            </span>
                            {r.status === 'Skipped — email already exists' && (
                              <button
                                onClick={() => handleResendCredentials(r.email)}
                                disabled={resendingEmail === r.email}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-[10px] font-bold transition-colors"
                              >
                                {resendingEmail === r.email ? (
                                  <RefreshCw className="w-3 h-3 animate-spin" />
                                ) : (
                                  <Send className="w-3 h-3" />
                                )}
                                {resendingEmail === r.email ? 'Sending...' : 'Resend Credentials'}
                              </button>
                            )}
                          </div>
                        )}
                        {resendStatus[r.email] && (
                          <span className={`text-[10px] font-bold ${
                            resendStatus[r.email].type === 'success' ? 'text-emerald-500' : 'text-red-500'
                          }`}>
                            {resendStatus[r.email].text}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
