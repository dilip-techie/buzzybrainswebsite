'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { faculty as defaultFaculty, type FacultyMember } from '@/lib/olympiad/data';

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).join('');
}

export default function Faculty({
  title = "Mentors who've sat where your child is sitting.",
  subtitle = 'Every lead mentor is an IIT alumnus who has personally coached students through IOQM, AMC and JEE Mathematics.',
  faculty = defaultFaculty,
}: {
  title?: string;
  subtitle?: string;
  faculty?: FacultyMember[];
}) {
  return (
    <section id="oly-faculty" className="oly-section bg-oly-paper">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow">
            <GraduationCap size={12} /> Mentors
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
            {title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-oly-ink/60">{subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="oly-card p-6 text-center"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-oly-brand-500 to-oly-brand-700 font-display text-lg font-bold text-white">
                {initials(f.name)}
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-oly-ink">{f.name}</h3>
              <p className="mt-1 text-[12.5px] font-semibold text-oly-brand-500">{f.role}</p>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-oly-ink/55">{f.creds}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-oly-brand-50 px-3 py-1 font-mono text-[11px] font-bold text-oly-brand-600">
                {f.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
