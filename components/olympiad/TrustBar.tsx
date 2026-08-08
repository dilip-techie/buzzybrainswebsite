'use client';

import { motion } from 'framer-motion';
import { Users, Target, Timer, GraduationCap, BrainCircuit, ClipboardCheck, type LucideIcon } from 'lucide-react';

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

const defaultStats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Target, value: '3', label: 'Exam tracks: IOQM, AMC 8, AMC 10' },
  { icon: Timer, value: 'Weekly', label: 'Timed mock papers, real exam conditions' },
  { icon: BrainCircuit, value: '100%', label: 'IIT-alumni-led Mathematics faculty' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Scored with a percentile rank sheet' },
];

export default function TrustBar({ stats = defaultStats }: { stats?: StatItem[] }) {
  return (
    <section className="border-y border-oly-line bg-white py-14">
      <div className="oly-container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col items-start gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-oly-brand-50 text-oly-brand-500">
                <s.icon size={18} strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-mono text-[22px] font-bold leading-none text-oly-ink">{s.value}</div>
                <div className="mt-1.5 text-[13px] leading-snug text-oly-ink/55">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
