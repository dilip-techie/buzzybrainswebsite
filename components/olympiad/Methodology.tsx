'use client';

import { motion } from 'framer-motion';
import { Sparkles, Clock, LineChart, Users2 } from 'lucide-react';

const points = [
  {
    icon: Clock,
    title: 'Train the clock, not just the topic',
    desc: 'AMC 8 gives 96 seconds a question, AMC 10 gives 180, IOQM gives 6 minutes. We drill speed strategy specific to each format, not generic problem-solving.',
  },
  {
    icon: Sparkles,
    title: 'Pattern recognition over memorization',
    desc: 'We tag past papers by technique — pigeonhole, invariants, casework — so students recognize the shape of a problem before they have finished reading it.',
  },
  {
    icon: LineChart,
    title: 'Every mock produces a rank sheet',
    desc: 'Score and topic-wise accuracy are shared after every timed mock, so progress is visible in numbers — not vague reassurance.',
  },
  {
    icon: Users2,
    title: 'Batches of 12, mentors who know the answer key',
    desc: 'Our mentors have set and evaluated olympiad-style papers, so review sessions go deeper than "this is the correct answer."',
  },
];

export default function Methodology() {
  return (
    <section className="oly-section">
      <div className="oly-container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="oly-eyebrow">Methodology</span>
            <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
              Why we teach to the bubble, not just the syllabus.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-oly-ink/60">
              Objective olympiads reward more than correct math — they reward speed,
              risk calculus on negative marking, and the instinct to recognize a
              problem type in seconds. That&apos;s what we train for, deliberately.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-3 rounded-2xl border border-oly-line bg-oly-paper p-5">
              {[
                ['96s', 'per AMC 8 question'],
                ['180s', 'per AMC 10 question'],
                ['6min', 'per IOQM question'],
              ].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="font-mono text-lg font-bold text-oly-brand-500">{v}</div>
                  <div className="mt-1 text-[11px] leading-snug text-oly-ink/50">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="oly-card p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-oly-brand-50 text-oly-brand-500">
                  <p.icon size={18} />
                </div>
                <h3 className="mt-4 text-[15.5px] font-bold leading-snug text-oly-ink">{p.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-oly-ink/60">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
