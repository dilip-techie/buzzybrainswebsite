'use client';

import { useEffect, useState } from 'react';
import { Crown, X, ChevronRight } from 'lucide-react';

/**
 * Home-page announcement for the Elite Foundation Program. Slides in on load,
 * stays for `durationMs` (4 seconds by default) and then fades away. Visitors
 * can also close it early.
 */
export default function ElitePromoBanner({ durationMs = 4000 }: { durationMs?: number }) {
  const [phase, setPhase] = useState<'hidden' | 'shown' | 'leaving' | 'gone'>('hidden');

  useEffect(() => {
    const show = window.setTimeout(() => setPhase('shown'), 300);
    const leave = window.setTimeout(() => setPhase('leaving'), 300 + durationMs);
    const gone = window.setTimeout(() => setPhase('gone'), 300 + durationMs + 450);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(leave);
      window.clearTimeout(gone);
    };
  }, [durationMs]);

  if (phase === 'gone') return null;
  const visible = phase === 'shown';

  const close = () => {
    setPhase('leaving');
    window.setTimeout(() => setPhase('gone'), 450);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        top: 112,
        left: '50%',
        zIndex: 60,
        width: 'min(620px, calc(100vw - 32px))',
        transform: `translate(-50%, ${visible ? '0' : '-16px'})`,
        opacity: visible ? 1 : 0,
        transition: 'opacity .45s ease, transform .45s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          flexWrap: 'wrap',
          padding: '14px 44px 14px 14px',
          borderRadius: 18,
          background: 'radial-gradient(400px 160px at 100% 0%,rgba(251,191,36,.22),transparent 60%),linear-gradient(150deg,#0B1028,#141C42)',
          border: '1px solid rgba(251,191,36,.6)',
          boxShadow: '0 20px 50px rgba(11,16,40,.45)',
          color: '#E5E7EB',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 42,
            height: 42,
            flexShrink: 0,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            background: 'linear-gradient(135deg,#FDE68A,#D97706)',
          }}
        >
          <Crown size={22} color="#1F2937" />
        </span>
        <div style={{ flex: '1 1 260px', minWidth: 0 }}>
          <div style={{ color: '#FDE68A', fontSize: 11.5, fontWeight: 800, letterSpacing: '.14em' }}>NOW ADMITTING · BUZZYBRAINS ELITE</div>
          <div style={{ color: '#fff', fontSize: 17, fontWeight: 800, lineHeight: 1.3, marginTop: 2 }}>
            Elite Foundation Program, Grades 6–10
          </div>
          <div style={{ color: '#CBD5E1', fontSize: 13.5, marginTop: 2 }}>
            Min. <strong style={{ color: '#FDE68A' }}>80% marks</strong> to apply · Only 12 seats per batch
          </div>
        </div>
        <a
          href="/foundation"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '10px 16px',
            borderRadius: 10,
            background: 'linear-gradient(135deg,#FDE68A,#F59E0B)',
            color: '#1F2937',
            fontWeight: 800,
            fontSize: 14,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Apply Now <ChevronRight size={16} />
        </a>
        <button
          type="button"
          onClick={close}
          aria-label="Close announcement"
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,.08)',
            color: '#E5E7EB',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
