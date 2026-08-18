'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs as defaultFaqs } from '@/lib/olympiad/data';

export default function FAQ({ faqs = defaultFaqs }: { faqs?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="oly-faq" className="oly-section bg-oly-paper">
      <div className="oly-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="oly-eyebrow">
              <HelpCircle size={12} /> FAQ
            </span>
            <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
              Questions parents ask before enrolling.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-oly-ink/60">
              Can&apos;t find what you&apos;re looking for? Message us on WhatsApp and
              we&apos;ll answer within the day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="divide-y divide-oly-line rounded-2xl border border-oly-line bg-white">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="px-6">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-bold text-oly-ink">{f.q}</span>
                    <ChevronDown size={18} className={`shrink-0 text-oly-ink/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="pb-5 text-[14.5px] leading-relaxed text-oly-ink/60">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
