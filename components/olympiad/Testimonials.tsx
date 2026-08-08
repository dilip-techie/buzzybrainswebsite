'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/olympiad/data';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const go = (dir: number) => setI((p) => (p + dir + testimonials.length) % testimonials.length);

  return (
    <section className="oly-section bg-oly-ink">
      <div className="oly-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="oly-eyebrow oly-eyebrow-inverse">Parent Voices</span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-white sm:text-[42px]">
            What BuzzyBrains parents say.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-10"
            >
              <Quote className="text-oly-brand-300" size={28} />
              <p className="mt-5 text-balance text-[18px] font-medium leading-relaxed text-white/90 sm:text-[20px]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <p className="text-[14.5px] font-bold text-white">{t.name}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-oly-sky-light hover:text-oly-sky-light"
            >
              <ChevronLeft size={17} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-6 bg-oly-amber' : 'w-1.5 bg-white/20'}`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-oly-sky-light hover:text-oly-sky-light"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
