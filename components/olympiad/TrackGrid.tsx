'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight, CheckCircle2, type LucideIcon,
  Hash, Calculator, Compass, Grid3x3, Medal, ListChecks, Rabbit,
  FlaskConical, Leaf, BookOpen, Globe, Briefcase, PiggyBank, TrendingUp,
  Atom, Award, Star, Microscope, Sparkles,
} from 'lucide-react';
import type { Track } from '@/lib/olympiad/data';

export type { Track };

const colorMap: Record<Track['color'], { glow: string; accent: string; solid: string }> = {
  brand: { glow: '37,71,204', accent: 'linear-gradient(135deg,#3B5FE0,#7C3AED)', solid: '#2547CC' },
  amber: { glow: '217,142,31', accent: 'linear-gradient(135deg,#F2A93C,#C2790F)', solid: '#B8720E' },
  sky: { glow: '37,110,199', accent: 'linear-gradient(135deg,#5AA3DE,#2547CC)', solid: '#2576C7' },
};

const TRACK_ICONS: Record<string, LucideIcon> = {
  'sof-imo': Medal,
  ioqm: Hash,
  nmtc: Award,
  amc: ListChecks,
  kangaroo: Rabbit,
  maths: Calculator,
  science: Microscope,
  biology: Leaf,
  english: BookOpen,
  knowledge: Globe,
  commerce: Briefcase,
  'financial-literacy': PiggyBank,
  economics: TrendingUp,
  physics: Atom,
  chemistry: FlaskConical,
  nsejs: Award,
  'homi-bhabha': Star,
  'number-theory': Hash,
  algebra: Calculator,
  geometry: Compass,
  combinatorics: Grid3x3,
  'sof-nso': FlaskConical,
  'sof-ieo': BookOpen,
  'sof-igko': Globe,
};

export default function TrackGrid({
  id,
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  tracks,
  ctaHref = '#oly-lead-form',
}: {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
  tracks: Track[];
  ctaHref?: string;
}) {
  return (
    <section id={id} className="oly-section">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow">
            <Icon size={12} /> {eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-oly-ink/60">{subtitle}</p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => {
            const c = colorMap[t.color];
            const TrackIcon = TRACK_ICONS[t.id] ?? Sparkles;
            return (
              <motion.div
                key={t.id}
                id={t.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 6) * 0.08 }}
                style={{ '--glow': c.glow, '--oly-accent': c.accent, '--oly-solid': c.solid } as React.CSSProperties}
                className="oly-track-card group scroll-mt-[140px] flex h-full flex-col"
              >
                <div className="oly-track-shine" />

                <div className="oly-track-banner">
                  <span className="oly-track-numeral">{String(i + 1).padStart(2, '0')}</span>
                  <div className="oly-track-top-row">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/90">{t.code}</span>
                    <ArrowUpRight size={18} className="oly-track-arrow transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="oly-track-badge">
                  <TrackIcon size={26} strokeWidth={2.2} color={c.solid} />
                </div>

                <div className="oly-track-body flex flex-1 flex-col">
                  <h3 className="mt-1 text-[19px] font-bold leading-snug text-oly-ink">{t.name}</h3>
                  <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-oly-ink/40">{t.grades}</p>
                  <p className="mt-4 text-[14px] leading-relaxed text-oly-ink/65">{t.blurb}</p>

                  {t.meta.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
                      {t.meta.map(([k, v]) => (
                        <div key={k} className="oly-track-stat">
                          <div className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-oly-ink/40">{k}</div>
                          <div className="mt-0.5 font-mono text-[12.5px] font-bold leading-snug text-oly-ink/85">{v}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {t.topics.map((top) => (
                      <span key={top} className="oly-track-tag">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.solid }} />
                        {top}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-oly-line/70 pt-5">
                    <div className="mb-4 flex items-start gap-2 text-[12.5px] font-semibold text-oly-ink/70">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-oly-success" />
                      {t.outcome}
                    </div>
                    <a
                      href={t.href ?? ctaHref}
                      className="oly-glow-btn inline-flex w-full items-center justify-center gap-1.5 rounded-xl py-3 text-[14px] font-bold"
                    >
                      {t.href ? 'View Full Guide' : 'Learn More'}
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
