import { ArrowRight, PlayCircle } from 'lucide-react';

const floaters = [
  { label: '∑', top: '12%', left: '6%', delay: '0s', size: 'text-3xl' },
  { label: 'π', top: '68%', left: '3%', delay: '1.2s', size: 'text-4xl' },
  { label: '√x', top: '22%', left: '88%', delay: '0.6s', size: 'text-2xl' },
  { label: '∞', top: '78%', left: '90%', delay: '1.8s', size: 'text-3xl' },
  { label: 'C(n,r)', top: '48%', left: '94%', delay: '0.3s', size: 'text-xl' },
];

const rows = [1, 2, 3, 4, 5];
const options = ['A', 'B', 'C', 'D', 'E'] as const;
const correctIdx = [2, 0, 3, 1, 4];
const delays = ['0s', '0.6s', '1.2s', '1.8s', '2.4s'];

export default function Hero() {
  return (
    <section id="oly-top" className="relative overflow-hidden pb-20 pt-[148px] sm:pb-28 sm:pt-[168px]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-oly-brand-50/60 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-oly-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      {floaters.map((f, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute hidden select-none font-display font-bold text-oly-brand-500/20 animate-oly-float-slow sm:block ${f.size}`}
          style={{ top: f.top, left: f.left, animationDelay: f.delay }}
          aria-hidden
        >
          {f.label}
        </span>
      ))}

      <div className="oly-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="reveal">
          <span className="oly-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-oly-amber" /> IOQM · AMC 8 · AMC 10
          </span>

          <h1 className="mt-6 text-balance font-display text-[36px] font-extrabold leading-[1.08] text-oly-ink sm:text-[48px] lg:text-[54px]">
            Every olympiad is won <span className="text-oly-brand-500">bubble by bubble.</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-balance text-[17px] leading-relaxed text-oly-ink/65">
            Premium coaching for IOQM, AMC 8 and AMC 10 — built around real timed
            mock papers, pattern-based problem drilling, and mentors who&apos;ve sat
            on the other side of the answer key.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <a href="#oly-lead-form" className="oly-btn-primary">
              Book Free Demo <ArrowRight size={17} />
            </a>
            <a href="#oly-tracks" className="oly-btn-secondary">
              <PlayCircle size={17} /> Explore Exam Tracks
            </a>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-oly-line pt-7">
            {[
              ['25+', 'Years teaching'],
              ['12', 'Max batch size'],
              ['3', 'Exam tracks covered'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-2xl font-bold text-oly-ink">{n}</div>
                <div className="text-[12.5px] font-medium text-oly-ink/55">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[420px]" data-delay="1">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-oly-brand-500/15 via-oly-amber/10 to-oly-sky-light/20 blur-2xl" />

          <div className="rounded-oly-4xl border border-oly-line bg-white p-6 shadow-oly-card-lg sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-oly-ink/40">
                  Answer Sheet · Live Mock
                </p>
                <p className="font-mono text-sm font-semibold text-oly-ink">AMC 10 · Set B</p>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-oly-success/10 text-oly-success">
                <span className="font-mono text-xs font-bold">92%</span>
              </div>
            </div>

            <svg viewBox="0 0 340 260" className="w-full" role="img" aria-label="Animated olympiad answer sheet">
              {rows.map((row, ri) => {
                const y = 18 + ri * 48;
                return (
                  <g key={row}>
                    <text x="0" y={y + 15} className="fill-oly-ink/35" fontSize="13" fontFamily="var(--font-mono)" fontWeight={600}>
                      Q{row}
                    </text>
                    {options.map((opt, oi) => {
                      const cx = 46 + oi * 56;
                      const isCorrect = oi === correctIdx[ri];
                      return (
                        <g key={opt}>
                          <circle cx={cx} cy={y} r="13" className="fill-transparent stroke-oly-line" strokeWidth="2" />
                          {isCorrect && (
                            <circle
                              cx={cx}
                              cy={y}
                              r="8"
                              className="fill-transparent animate-oly-fill-bubble"
                              style={{ animationDelay: delays[ri], animationFillMode: 'backwards' }}
                            />
                          )}
                          <text x={cx} y={y + 4} textAnchor="middle" fontSize="11" fontWeight={700} className="fill-oly-ink/50" fontFamily="var(--font-mono)">
                            {opt}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>

            <div className="mt-4 flex items-center justify-between border-t border-oly-line pt-4 text-[12.5px] font-medium text-oly-ink/50">
              <span>Auto-scored in real time</span>
              <span className="flex items-center gap-1.5 font-mono font-semibold text-oly-success">
                <span className="h-1.5 w-1.5 rounded-full bg-oly-success" /> Rank #4 / 38
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
