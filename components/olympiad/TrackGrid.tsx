'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import type { Track } from '@/lib/olympiad/data';

export type { Track };

const colorMap: Record<Track['color'], { glow: string; accent: string; dot: string }> = {
  brand: { glow: '37,71,204', accent: 'linear-gradient(135deg,#2547CC,#7C3AED)', dot: 'bg-oly-brand-500' },
  amber: { glow: '242,169,60', accent: 'linear-gradient(135deg,#F2A93C,#D98E1F)', dot: 'bg-oly-amber' },
  sky: { glow: '90,163,222', accent: 'linear-gradient(135deg,#5AA3DE,#2547CC)', dot: 'bg-oly-sky' },
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
                <div className="flex items-start justify-between">
                  <span className="oly-glow-chip rounded-lg px-3 py-1.5 font-mono text-[13px] font-bold">{t.code}</span>
                  <ArrowUpRight size={18} className="text-oly-ink/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="mt-5 text-[17px] font-bold leading-snug text-oly-ink">{t.name}</h3>
                <p className="mt-1.5 text-[13.5px] font-semibold text-oly-ink/45">{t.grades}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-oly-ink/65">{t.blurb}</p>

                {t.meta.length > 0 && (
                  <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-oly-line pt-5">
                    {t.meta.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-oly-ink/35">{k}</dt>
                        <dd className="mt-0.5 font-mono text-[12px] font-semibold leading-snug text-oly-ink/75">{v}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {t.topics.map((top) => (
                    <span key={top} className="rounded-full border border-oly-line bg-white/70 px-2.5 py-1 text-[11px] font-medium text-oly-ink/55">
                      {top}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="mb-4 flex items-center gap-2 text-[12.5px] font-semibold text-oly-ink/55">
                    <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
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
