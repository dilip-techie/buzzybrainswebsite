'use client';

import React from 'react';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-12 font-sans">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-2xl relative z-10 space-y-6 text-center">
        <div className="inline-flex p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 mb-1">
          <ShieldCheck className="w-7 h-7" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white">
          <span className="text-amber-400">Buzzy</span>Brains Student Portal
        </h1>

        <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
          <p>
            Student accounts are created by your <span className="text-indigo-400 font-semibold">institute administrator</span>.
          </p>
          <p>
            If you&apos;ve been enrolled, check your email for login credentials. You&apos;ll be prompted to set a new password on your first login.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-indigo-400">
            <Mail className="w-4 h-4" />
            <span className="text-xs font-bold">Haven&apos;t received credentials?</span>
          </div>
          <p className="text-xs text-slate-500">
            Contact your institute admin or teacher to have your account provisioned. They will send you an email with your login details.
          </p>
        </div>

        <a
          href="/login"
          className="w-full mt-2 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
        >
          Go to Login Portal
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <p className="text-[10px] text-slate-600 pt-2">
          For admin access, contact the platform owner.
        </p>
      </div>
    </div>
  );
}
