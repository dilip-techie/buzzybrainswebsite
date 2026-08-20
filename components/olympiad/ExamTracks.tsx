import { ArrowUpRight, Target } from 'lucide-react';
import { examTracks } from '@/lib/olympiad/data';

const colorMap: Record<string, { chip: string; ring: string; dot: string }> = {
  brand: { chip: 'bg-oly-brand-50 text-oly-brand-600', ring: 'group-hover:border-oly-brand-500', dot: 'bg-oly-brand-500' },
  amber: { chip: 'bg-oly-amber/15 text-oly-amber-dark', ring: 'group-hover:border-oly-amber', dot: 'bg-oly-amber' },
  sky: { chip: 'bg-oly-sky-light/20 text-oly-sky', ring: 'group-hover:border-oly-sky', dot: 'bg-oly-sky' },
};

export default function ExamTracks() {
  return (
    <section id="oly-tracks" className="oly-section">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow">
            <Target size={12} /> Exam Tracks
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
            Three exams. One rigorous method.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-oly-ink/60">
            Each track runs on its own syllabus, timing and scoring rules — so your
            child trains in the exact format they&apos;ll sit on exam day.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {examTracks.map((t, i) => {
            const c = colorMap[t.color];
            return (
              <div
                key={t.code}
                data-delay={String(i % 4)}
                className={`group reveal flex h-full flex-col rounded-3xl border-2 border-oly-line bg-white p-7 shadow-oly-card transition-colors duration-300 ${c.ring}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`inline-block rounded-lg px-3 py-1.5 font-mono text-[13px] font-bold ${c.chip}`}>{t.code}</span>
                  <ArrowUpRight size={18} className="text-oly-ink/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="mt-5 text-[18px] font-bold leading-snug text-oly-ink">{t.name}</h3>
                <p className="mt-1.5 text-[13.5px] font-semibold text-oly-ink/45">{t.grades}</p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-oly-ink/65">{t.blurb}</p>

                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-oly-line pt-5">
                  {[
                    ['Format', t.format],
                    ['Length', t.duration],
                    ['Questions', t.questions],
                    ['Scoring', t.scoring],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-oly-ink/35">{k}</dt>
                      <dd className="mt-0.5 font-mono text-[12.5px] font-semibold leading-snug text-oly-ink/75">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {t.topics.map((top) => (
                    <span key={top} className="rounded-full border border-oly-line px-2.5 py-1 text-[12px] font-medium text-oly-ink/55">
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
                    href="#oly-lead-form"
                    className="inline-flex w-full items-center justify-center rounded-xl border-2 border-oly-ink/10 py-3 text-[14px] font-bold text-oly-ink transition-colors hover:border-oly-brand-500 hover:text-oly-brand-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
