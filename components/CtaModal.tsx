'use client';

import { useEffect, useRef } from 'react';
import { ChevronRight, FileText, MessageCircle, Phone } from 'lucide-react';

export default function CtaModal({
  open,
  onClose,
  onFormClick,
  onWhatsAppClick,
  title = 'Ready to Enroll?',
  subtitle = "Choose how you'd like to connect with us",
  phone = '+919850570525',
}: {
  open: boolean;
  onClose: () => void;
  onFormClick: () => void;
  onWhatsAppClick: () => void;
  title?: string;
  subtitle?: string;
  phone?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const displayPhone = phone.replace('+91', '').replace(/(\d{5})(\d{5})/, '$1 $2');

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/60 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cta-modal-title"
        className="w-full max-w-[420px] rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 text-center">
          <h2 id="cta-modal-title" className="mb-2 text-2xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid gap-3">
          <button
            onClick={onFormClick}
            className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white transition hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              <FileText size={18} /> Contact Form
            </span>
            <ChevronRight size={19} />
          </button>
          <button
            onClick={onWhatsAppClick}
            className="flex w-full items-center justify-between rounded-xl bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600 hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={18} /> WhatsApp Chat
            </span>
            <ChevronRight size={19} />
          </button>
          <a
            href={`tel:${phone}`}
            className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-6 py-4 font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              <Phone size={18} /> Call {displayPhone}
            </span>
            <ChevronRight size={19} />
          </a>
        </div>

        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="mt-5 w-full py-2 text-center font-medium text-gray-400 transition hover:text-gray-600"
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}
