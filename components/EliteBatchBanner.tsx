'use client';

import { ChevronRight, Crown, GraduationCap, Users, Hourglass, Award } from 'lucide-react';

/**
 * Premium "BuzzyBrains Elite" banner for Foundation and Olympiad programs:
 * black-and-gold design stating the minimum 80% marks requirement, the
 * 12-seat batch cap and limited seats, with an apply-early call to action.
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
  const gold = '#FBBF24';
  const btn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: '15px 24px',
    borderRadius: 12,
    background: 'linear-gradient(135deg,#FDE68A,#F59E0B)',
    color: '#1F2937',
    fontWeight: 800,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxShadow: '0 12px 30px rgba(245,158,11,.35)',
  };
  const pillars = [
    { icon: Award, value: '80%+', label: 'Marks required to apply' },
    { icon: Users, value: '12', label: 'Students per batch, max' },
    { icon: GraduationCap, value: 'IITian', label: 'Mentorship by IIT alumni' },
    { icon: Hourglass, value: 'Limited', label: 'Seats, first come first served' },
  ];
  const cta = (
    <>
      Apply for the Elite Batch <ChevronRight size={19} />
    </>
  );
  return (
    <section style={{ padding: '24px 16px' }} aria-label={`${program} Elite program admission`}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(26px,4vw,44px)',
          borderRadius: 24,
          background:
            'radial-gradient(600px 300px at 100% 0%,rgba(251,191,36,.20),transparent 60%),linear-gradient(150deg,#0B1028,#141C42 60%,#0B1028)',
          border: '1px solid rgba(251,191,36,.55)',
          boxShadow: '0 24px 60px rgba(11,16,40,.45), inset 0 1px 0 rgba(253,230,138,.25)',
          color: '#E5E7EB',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ flex: '1 1 420px', minWidth: 0 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px 6px 6px',
                borderRadius: 999,
                border: '1px solid rgba(251,191,36,.55)',
                background: 'rgba(251,191,36,.10)',
                color: '#FDE68A',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.14em',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(135deg,#FDE68A,#D97706)',
                }}
              >
                <Crown size={15} color="#1F2937" />
              </span>
              BUZZYBRAINS ELITE · {program.toUpperCase()}
            </span>
            <h2 style={{ margin: '14px 0 10px', color: '#fff', fontSize: 'clamp(26px,3.6vw,38px)', lineHeight: 1.15, fontWeight: 800 }}>
              Selective admission.{' '}
              <span
                style={{
                  background: 'linear-gradient(110deg,#FDE68A,#F59E0B 55%,#FFF7D6)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: gold,
                }}
              >
                Elite results.
              </span>
            </h2>
            <p style={{ margin: 0, color: '#CBD5E1', fontSize: 16, lineHeight: 1.6, maxWidth: 640 }}>
              The {program} program is a truly elite, merit-based program for high achievers. A minimum of{' '}
              <strong style={{ color: '#FDE68A', borderBottom: '2px solid #F59E0B' }}>80% marks is required to apply</strong>, and every
              batch is capped at 12 students. Seats are limited, so apply early to secure your place.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: '0 0 auto' }}>
            {href ? (
              <a href={href} style={btn}>{cta}</a>
            ) : (
              <button type="button" onClick={onClick} style={btn}>{cta}</button>
            )}
            <span style={{ color: '#FCD34D', fontSize: 13, fontWeight: 700 }}>Seats fill fast · Apply early</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
            gap: 12,
            marginTop: 26,
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.label}
              style={{
                padding: '14px 16px',
                borderRadius: 14,
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(251,191,36,.28)',
              }}
            >
              <p.icon size={20} color={gold} aria-hidden="true" />
              <div style={{ marginTop: 8, color: '#fff', fontSize: 22, fontWeight: 800 }}>{p.value}</div>
              <div style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.4 }}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
