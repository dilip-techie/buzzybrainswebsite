'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Key, Mail, ArrowRight, CheckCircle2, BookOpen, Users, BarChart3, Shield } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('/exams');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const prefillEmail = params.get('email');
      const targetRedirect = params.get('redirect');
      if (prefillEmail) setEmail(prefillEmail);
      if (targetRedirect) setRedirectUrl(targetRedirect);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMsg('Invalid email or password. Please try again.');
      } else {
        setSuccessMsg('Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 600);
      }
    } catch (err) {
      console.error('Auth error:', err);
      setErrorMsg('A network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans overflow-hidden">
      {/* Left Panel — Hero / Brand Story */}
      <div className="hidden lg:flex lg:w-[55%] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative flex-col justify-between p-12 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-amber-500/8 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Brand Header */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-amber-400">Buzzy</span><span className="text-white">Brains</span>
          </h1>
          <p className="text-xs text-slate-500 mt-1 tracking-[3px] uppercase">Learn Smart. Grow Confident.</p>
        </div>

        {/* Center Content */}
        <div className="space-y-8 max-w-md">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
              Where learning<br />becomes an<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">adventure.</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering students in classes 7–12 with engaging, NCERT-aligned assessments, real-time analytics, and a structured learning journey.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: BookOpen, label: 'NCERT-Aligned Tests', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
              { icon: BarChart3, label: 'Live Analytics', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
              { icon: Users, label: 'Batch Management', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
              { icon: Shield, label: 'Proctored Exams', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
            ].map((f) => (
              <div key={f.label} className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border ${f.color} text-xs font-semibold`}>
                <f.icon className="w-4 h-4 shrink-0" />
                {f.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <p className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} BuzzyBrains Edtech. All rights reserved.
        </p>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center bg-slate-950 px-6 py-12 relative">
        {/* Mobile ambient */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none lg:hidden"></div>

        <div className="max-w-sm w-full space-y-8 relative z-10">
          {/* Mobile brand */}
          <div className="lg:hidden text-center space-y-1">
            <h1 className="text-2xl font-extrabold">
              <span className="text-amber-400">Buzzy</span><span className="text-white">Brains</span>
            </h1>
            <p className="text-[10px] text-slate-500 tracking-[2px] uppercase">Learn Smart. Grow Confident.</p>
          </div>

          {/* Form Header */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white tracking-tight">Welcome back</h2>
            <p className="text-xs text-slate-500">Sign in to your BuzzyBrains account to continue.</p>
          </div>

          {/* Error / Success */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/30 text-red-300 text-xs text-center animate-fadeIn">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs text-center flex items-center justify-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-400">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-600 absolute left-3.5 top-3" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-400">Password</label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-600 absolute left-3.5 top-3" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:scale-[0.98] disabled:opacity-50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Signing in...
                </span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Help Note */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
            <p className="text-xs text-slate-400 leading-relaxed">
              <span className="text-amber-400 font-semibold">Students:</span> Your login credentials are sent to your email by your institute admin. Check your inbox for the welcome email from BuzzyBrains.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Need help? Contact your institute administrator.
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-[11px] text-slate-700">
            Powered by <span className="text-slate-500">BuzzyBrains</span> Edtech Platform
          </p>
        </div>
      </div>
    </div>
  );
}
