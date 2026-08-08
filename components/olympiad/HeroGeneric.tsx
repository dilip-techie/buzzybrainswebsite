'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroGeneric({
  eyebrow,
  title,
  highlight,
  description,
  stats,
  exploreHref,
  exploreLabel,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  stats: [string, string][];
  exploreHref: string;
  exploreLabel: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-[148px] sm:pb-20 sm:pt-[168px]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-oly-brand-50/60 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-oly-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="oly-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="oly-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-oly-amber" /> {eyebrow}
          </span>

          <h1 className="mx-auto mt-6 text-balance font-display text-[34px] font-extrabold leading-[1.12] text-oly-ink sm:text-[46px] lg:text-[52px]">
            {title} <span className="text-oly-brand-500">{highlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[600px] text-balance text-[17px] leading-relaxed text-oly-ink/65">
            {description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a href="#oly-lead-form" className="oly-btn-primary">
              Book Free Demo <ArrowRight size={17} />
            </a>
            <a href={exploreHref} className="oly-btn-secondary">
              <PlayCircle size={17} /> {exploreLabel}
            </a>
          </div>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-oly-line pt-7">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-2xl font-bold text-oly-ink">{n}</div>
                <div className="text-[12.5px] font-medium text-oly-ink/55">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
