'use client';

import { ChevronRight, Star, Users, Award } from 'lucide-react';

/**
 * "Elite Batch" eligibility banner for Foundation and Olympiad programs:
 * highlights the minimum 80% marks requirement and limited seats.
 * Inline styles only, so it renders the same on every page style.
 */
export default function EliteBatchBanner({
  program,
  href,
  onClick,
}: {
  program: string;
  href?: string;
  onClick?: () => void;
}) {
  const btn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: '14px 22px',
    borderRadius: 12,
    background: 'linear-gradient(135deg,#DC2626,#EA580C)',
    color: '#fff',
    fontWeight: 800,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxShadow: '0 8px 22px rgba(220,38,38,.35)',
  };
  const pill: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 14px',
    borderRadius: 12,
    background: '#fff',
    color: '#1F2937',
    fontWeight: 700,
    fontSize: 15,
    border: '1px solid rgba(146,64,14,.2)',
  };
  return (
    <section style={{ padding: '24px 16px' }} aria-label={`${program} Elite Batch eligibility`}>
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
          background: 'linear-gradient(135deg,#FEF3C7,#FDE68A 60%,#FCD34D)',
          border: '2px solid #F59E0B',
          boxShadow: '0 18px 48px rgba(245,158,11,.25)',
        }}
      >
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 999,
              background: '#1F2937',
              color: '#FBBF24',
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '.08em',
            }}
          >
            <Star size={14} fill="#FBBF24" aria-hidden="true" /> ELITE BATCH
          </span>
          <h2 style={{ margin: '12px 0 10px', color: '#1F2937', fontSize: 'clamp(24px,3.4vw,34px)', lineHeight: 1.2, fontWeight: 800 }}>
            Elite {program} Program: <span style={{ color: '#B91C1C' }}>minimum 80% marks required to apply</span>
          </h2>
          <p style={{ margin: '0 0 16px', color: '#374151', fontSize: 16, lineHeight: 1.55 }}>
            Our {program} program is a truly elite, merit-based program for high-achieving students. A minimum of 80% marks
            is required to apply, and seats are limited, so apply early to secure your place.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <span style={pill}><Award size={18} color="#B91C1C" aria-hidden="true" /> Min. 80% marks to apply</span>
            <span style={pill}><Users size={18} color="#B91C1C" aria-hidden="true" /> Max 12 students per batch</span>
            <span style={pill}><Star size={18} color="#B91C1C" aria-hidden="true" /> Limited seats</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: '0 0 auto' }}>
          {href ? (
            <a href={href} style={btn}>Apply Now: Limited Seats <ChevronRight size={19} /></a>
          ) : (
            <button type="button" onClick={onClick} style={btn}>Apply Now: Limited Seats <ChevronRight size={19} /></button>
          )}
          <span style={{ color: '#92400E', fontSize: 13, fontWeight: 700 }}>Seats fill on a first-come basis</span>
        </div>
      </div>
    </section>
  );
}
