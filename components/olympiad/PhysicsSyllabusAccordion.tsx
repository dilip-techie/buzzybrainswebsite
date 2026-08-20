'use client';

import { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { physicsSyllabusTopics } from '@/lib/olympiad/data';

export default function PhysicsSyllabusAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="oly-syllabus" className="oly-section">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow">
            <BookOpen size={12} /> Full Syllabus Breakdown
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
            Every topic, cross-referenced to the stage that tests it.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-oly-ink/60">
            Mechanics dominates every one of these five tracks — that&apos;s exactly why our prep is mechanics-first.
          </p>
        </div>

        <div className="mt-10 divide-y divide-oly-line rounded-2xl border border-oly-line bg-white">
          {physicsSyllabusTopics.map((t, i) => {
            const isOpen = open === i;
            const panelId = `syllabus-panel-${i}`;
            const buttonId = `syllabus-trigger-${i}`;
            return (
              <div key={t.topic} className="px-6">
                <button
                  id={buttonId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] font-bold text-oly-ink">{t.topic}</span>
                  <ChevronDown size={18} className={`shrink-0 text-oly-ink/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-2 text-[14.5px] leading-relaxed text-oly-ink/65">{t.detail}</p>
                    <p className="pb-5 text-[13px] font-semibold text-oly-brand-500">Tested by: {t.testedBy}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
