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

const colorMap: Record<Track['color'], { glow: string; accent: string; dot: string; tint: string }> = {
  brand: { glow: '37,71,204', accent: 'linear-gradient(135deg,#2547CC,#7C3AED)', dot: 'bg-oly-brand-500', tint: 'bg-oly-brand-50 text-oly-brand-700' },
  amber: { glow: '242,169,60', accent: 'linear-gradient(135deg,#F2A93C,#D98E1F)', dot: 'bg-oly-amber', tint: 'bg-oly-amber/12 text-oly-amber-dark' },
  sky: { glow: '90,163,222', accent: 'linear-gradient(135deg,#5AA3DE,#2547CC)', dot: 'bg-oly-sky', tint: 'bg-oly-sky-light/25 text-oly-brand-700' },
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => {
            const c = colorMap[t.color];
            const TrackIcon = TRACK_ICONS[t.id] ?? Sparkles;
            return (
              <motion.div
                key={t.id}
                id={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                style={{ '--glow': c.glow, '--oly-accent': c.accent } as React.CSSProperties}
                className="oly-glow-card group scroll-mt-[140px] flex h-full flex-col p-7"
              >
                {/* Faded watermark icon for depth */}
                <TrackIcon
                  size={128}
                  strokeWidth={1.1}
                  className="pointer-events-none absolute -right-6 -top-6 text-oly-ink/[0.05] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  aria-hidden
                />

                <div className="flex items-start justify-between">
                  <span className="oly-glow-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white">
                    <TrackIcon size={22} strokeWidth={2.2} />
                  </span>
                  <ArrowUpRight size={18} className="mt-1 text-oly-ink/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-oly-ink/40">{t.code}</span>
                <h3 className="mt-1 text-[18px] font-bold leading-snug text-oly-ink">{t.name}</h3>
                <p className="mt-1.5 text-[13.5px] font-semibold text-oly-ink/45">{t.grades}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-oly-ink/65">{t.blurb}</p>

                {t.meta.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.meta.map(([k, v]) => (
                      <div key={k} className={`rounded-xl px-3 py-2 ${c.tint}`}>
                        <div className="text-[9.5px] font-bold uppercase tracking-[0.1em] opacity-70">{k}</div>
                        <div className="mt-0.5 font-mono text-[12.5px] font-bold leading-snug">{v}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-oly-line pt-5">
                  {t.topics.map((top) => (
                    <span key={top} className="inline-flex items-center gap-1.5 rounded-full border border-oly-line bg-white px-2.5 py-1 text-[11px] font-semibold text-oly-ink/60">
                      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                      {top}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
