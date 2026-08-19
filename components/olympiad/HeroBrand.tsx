'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Link from 'next/link';

export interface HeroChip {
  label: string;
  color: string;
}

export default function HeroBrand({
  badges,
  titleLines,
  highlight,
  taglineSub,
  lede,
  chips,
  ctaHref = '#oly-lead-form',
  ctaLabel = 'Book Free Demo',
  secondaryHref,
  secondaryLabel,
  proofText,
  visual,
}: {
  badges: string[];
  titleLines: string[];
  highlight: string;
  taglineSub?: string;
  lede: string;
  chips: HeroChip[];
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref: string;
  secondaryLabel: string;
  proofText: ReactNode;
  visual: ReactNode;
}) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mx', `${x}%`);
      hero.style.setProperty('--my', `${y}%`);
    };
    const handleEnter = () => hero.classList.add('spotlight-on');
    const handleLeave = () => hero.classList.remove('spotlight-on');

    hero.addEventListener('mousemove', handleMove);
    hero.addEventListener('mouseenter', handleEnter);
    hero.addEventListener('mouseleave', handleLeave);
    return () => {
      hero.removeEventListener('mousemove', handleMove);
      hero.removeEventListener('mouseenter', handleEnter);
      hero.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="eq-field" aria-hidden="true">
        <span className="eq" style={{ top: '14%', left: '5%', fontSize: 26, ['--rot' as string]: '-8deg' }}>∑</span>
        <span className="eq amber" style={{ top: '26%', left: '46%', fontSize: 20, ['--rot' as string]: '6deg', animationDelay: '2s' }}>π</span>
        <span className="eq" style={{ top: '66%', left: '4%', fontSize: 22, ['--rot' as string]: '4deg', animationDelay: '4s' }}>√x</span>
        <span className="eq green" style={{ top: '8%', left: '70%', fontSize: 24, ['--rot' as string]: '-5deg', animationDelay: '1s' }}>∞</span>
        <span className="eq" style={{ top: '82%', left: '58%', fontSize: 20, ['--rot' as string]: '7deg', animationDelay: '3s' }}>C(n,r)</span>
        <span className="eq amber" style={{ top: '48%', left: '90%', fontSize: 22, ['--rot' as string]: '-6deg', animationDelay: '5s' }}>Δ</span>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badges">
            {badges.map((b) => (
              <span key={b} className={`eyebrow ${badges.indexOf(b) === 0 ? 'eyebrow-highlight' : 'eyebrow-location'}`}>{b}</span>
            ))}
          </div>
          <h1>
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
            <span className="grad">{highlight}</span>
            {taglineSub && (
              <span className="hero-tagline-sub">
                <span className="hero-tagline-sub-text">{taglineSub}</span>
              </span>
            )}
          </h1>
          <p className="lede">{lede}</p>
          <div className="hero-chips">
            {chips.map((c) => (
              <span key={c.label} className="chip">
                <i className="dot" style={{ background: c.color }} /> {c.label}
              </span>
            ))}
          </div>
          <div className="hero-ctas">
            <a href={ctaHref} className="btn btn-primary">
              {ctaLabel}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <Link href={secondaryHref} className="btn btn-ghost">{secondaryLabel}</Link>
          </div>
          <div className="hero-proof">
            <div className="avatars" aria-hidden="true">
              <span style={{ background: '#2563EB' }}>A</span><span style={{ background: '#7C3AED' }}>S</span><span style={{ background: '#F59E0B' }}>R</span><span style={{ background: '#10B981' }}>K</span>
            </div>
            <div>
              <span className="stars" aria-label="Rated highly by parents">★★★★★</span><br />
              {proofText}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {visual}
        </div>
      </div>
    </section>
  );
}
