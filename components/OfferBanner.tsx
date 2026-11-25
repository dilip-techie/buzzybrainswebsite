'use client';

import { CheckCircle2, ChevronRight } from 'lucide-react';

/**
 * Self-contained promotional banner (free diagnostic, scholarship test).
 * Uses inline styles only, so it renders the same on the bb-landing pages,
 * the Tailwind program pages and the olympiad component pages.
 */
export default function OfferBanner({
  tag,
  title,
  lede,
  points,
  ctaLabel,
  href,
  onClick,
  secondary,
  footnote,
}: {
  tag: string;
  title: string;
  lede: string;
  points: string[];
  ctaLabel: string;
  href?: string;
  onClick?: () => void;
  secondary?: { href: string; label: string };
  footnote?: string;
}) {
  const btn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: '14px 22px',
    borderRadius: 12,
    background: '#FBBF24',
    color: '#1F2937',
    fontWeight: 800,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };
  return (
    <section style={{ padding: '24px 16px' }} aria-label={title}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
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
            {tag}
          </span>
          <h2 style={{ margin: '12px 0 10px', color: '#fff', fontSize: 'clamp(24px,3.4vw,34px)', lineHeight: 1.2, fontWeight: 800 }}>
            {title}
          </h2>
          <p style={{ margin: '0 0 16px', color: 'rgba(255,255,255,.9)', fontSize: 16, lineHeight: 1.55 }}>{lede}</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
            {points.map((p) => (
              <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#fff' }}>
                <CheckCircle2 size={18} color="#FBBF24" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {footnote && (
            <p style={{ margin: '14px 0 0', color: 'rgba(255,255,255,.75)', fontSize: 13 }}>{footnote}</p>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: '0 0 auto' }}>
          {href ? (
            <a href={href} style={btn}>
              {ctaLabel} <ChevronRight size={19} />
            </a>
          ) : (
            <button type="button" onClick={onClick} style={btn}>
              {ctaLabel} <ChevronRight size={19} />
            </button>
          )}
          {secondary && (
            <a href={secondary.href} style={{ color: '#fff', textAlign: 'center', fontSize: 14, textDecoration: 'underline' }}>
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
