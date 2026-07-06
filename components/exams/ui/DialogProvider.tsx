'use client';

import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { AlertTriangle, Trash2, Info, CheckCircle2, XCircle, X } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────

type DialogVariant = 'danger' | 'warning' | 'info';

interface ConfirmOptions {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: DialogVariant;
}

interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface DialogContextType {
  confirm: (options: ConfirmOptions) => Promise<boolean>;
  toast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const DialogContext = createContext<DialogContextType | null>(null);

export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error('useDialog must be used within DialogProvider');
  return ctx;
}

// ── Provider ──────────────────────────────────────────────────────────

export function DialogProvider({ children }: { children: React.ReactNode }) {
  // Confirm dialog state
  const [dialog, setDialog] = useState<(ConfirmOptions & { resolve: (v: boolean) => void }) | null>(null);
  const [closing, setClosing] = useState(false);

  // Toast state
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const toastId = useRef(0);

  const confirm = useCallback((options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      setClosing(false);
      setDialog({ ...options, resolve });
    });
  }, []);

  const closeDialog = useCallback((result: boolean) => {
    setClosing(true);
    setTimeout(() => {
      dialog?.resolve(result);
      setDialog(null);
      setClosing(false);
    }, 150);
  }, [dialog]);

  const toast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = `toast-${++toastId.current}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!dialog) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDialog(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [dialog, closeDialog]);

  const variantConfig = {
    danger: {
      icon: <Trash2 className="w-6 h-6" />,
      iconBg: 'bg-red-500/10 border-red-500/20 text-red-500',
      confirmBtn: 'bg-red-600 hover:bg-red-700 shadow-red-600/20',
    },
    warning: {
      icon: <AlertTriangle className="w-6 h-6" />,
      iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-500',
      confirmBtn: 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20',
    },
    info: {
      icon: <Info className="w-6 h-6" />,
      iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-500',
      confirmBtn: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20',
    },
  };

  const toastIconMap = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    error: <XCircle className="w-4 h-4 text-red-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-indigo-400 shrink-0" />,
  };

  const toastBorderMap = {
    success: 'border-emerald-500/30',
    error: 'border-red-500/30',
    info: 'border-indigo-500/30',
  };

  return (
    <DialogContext.Provider value={{ confirm, toast }}>
      {children}

      {/* ── Confirm Modal ────────────────────────────────────────────── */}
      {dialog && (() => {
        const v = variantConfig[dialog.variant || 'danger'];
        return (
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-150 ${closing ? 'opacity-0' : 'opacity-100'}`}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => closeDialog(false)}
            />

            {/* Dialog */}
            <div
              className={`relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-sm w-full overflow-hidden transition-all duration-150 ${
                closing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              {/* Close X */}
              <button
                onClick={() => closeDialog(false)}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Body */}
              <div className="p-6 text-center space-y-4">
                <div className={`inline-flex p-3 rounded-2xl border ${v.iconBg}`}>
                  {v.icon}
                </div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {dialog.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                  {dialog.message}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 px-6 pb-6">
                <button
                  onClick={() => closeDialog(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {dialog.cancelLabel || 'Cancel'}
                </button>
                <button
                  onClick={() => closeDialog(true)}
                  className={`flex-1 py-2.5 rounded-xl text-white text-xs font-bold transition-all shadow-lg ${v.confirmBtn}`}
                >
                  {dialog.confirmLabel || 'Confirm'}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── Toast Stack ──────────────────────────────────────────────── */}
      <div className="fixed top-4 right-4 z-[9998] flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/95 backdrop-blur-md border ${toastBorderMap[t.type]} shadow-2xl text-xs text-slate-200 font-medium animate-slideInRight max-w-xs`}
          >
            {toastIconMap[t.type]}
            <span className="leading-snug">{t.message}</span>
            <button
              onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}
              className="ml-auto p-0.5 text-slate-500 hover:text-slate-300 transition-colors shrink-0"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </DialogContext.Provider>
  );
}
