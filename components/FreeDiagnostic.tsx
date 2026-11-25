'use client';

import { CheckCircle2, ChevronRight, Gift } from 'lucide-react';

/** Small "FREE … Diagnostic Test" pill shown above a hero eyebrow. */
export function FreeDiagnosticBadge({ exam }: { exam: string }) {
  return (
    <>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 14,
          padding: '8px 16px',
          borderRadius: 999,
          background: 'linear-gradient(135deg,#F59E0B,#EA580C)',
          color: '#fff',
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: '.02em',
          boxShadow: '0 6px 18px rgba(234,88,12,.35)',
        }}
      >
        <Gift size={16} aria-hidden="true" /> FREE {exam} Diagnostic Test
      </span>
      <br />
    </>
  );
}

/** Full-width banner section promoting the free diagnostic test. */
export function FreeDiagnosticBanner({
  exam,
  points,
  onBook,
}: {
  exam: string;
  points: string[];
  onBook: () => void;
}) {
  return (
    <section className="bb-section" style={{ paddingTop: 0 }} aria-labelledby="free-diagnostic-title">
      <div className="container">
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            padding: 'clamp(24px,4vw,40px)',
            borderRadius: 24,
            background: 'linear-gradient(135deg,#1E3A8A,#2563EB 55%,#7C3AED)',
            color: '#fff',
            boxShadow: '0 18px 48px rgba(37,99,235,.28)',
          }}
        >
          <div style={{ flex: '1 1 340px', minWidth: 0 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '5px 12px',
                borderRadius: 999,
                background: '#FBBF24',
                color: '#1F2937',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.08em',
              }}
            >
              100% FREE
            </span>
            <h2 id="free-diagnostic-title" style={{ margin: '12px 0 10px', color: '#fff', fontSize: 'clamp(24px,3.4vw,34px)', lineHeight: 1.2 }}>
              Take our free {exam} diagnostic test
            </h2>
            <p style={{ margin: '0 0 16px', color: 'rgba(255,255,255,.9)', fontSize: 16, lineHeight: 1.55 }}>
              Find out exactly where you stand before you commit to anything.
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
              {points.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#fff' }}>
                  <CheckCircle2 size={18} color="#FBBF24" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-amber" onClick={onBook} style={{ flex: '0 0 auto' }}>
            Book Your Free Diagnostic <ChevronRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}
