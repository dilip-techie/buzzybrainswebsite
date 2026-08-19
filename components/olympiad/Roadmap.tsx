import { Route } from 'lucide-react';
import { roadmap as defaultRoadmap } from '@/lib/olympiad/data';

interface RoadmapStep {
  step: string;
  title: string;
  desc: string;
}

export default function Roadmap({
  title = "A fixed sequence, because olympiad prep isn't random.",
  subtitle = 'Every student moves through the same five stages, in order — each one builds directly on the score data from the one before it.',
  steps = defaultRoadmap,
}: {
  title?: string;
  subtitle?: string;
  steps?: RoadmapStep[];
}) {
  return (
    <section id="oly-roadmap" className="oly-section bg-oly-ink">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow oly-eyebrow-inverse">
            <Route size={12} /> The Prep Roadmap
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-white sm:text-[42px]">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/55">{subtitle}</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-oly-brand-500/70 via-white/15 to-transparent sm:block" />
          <div className="flex flex-col gap-10">
            {steps.map((r, i) => (
              <div
                key={r.step}
                data-delay={String(i % 4)}
                className="reveal relative flex gap-6 sm:gap-8"
              >
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] font-mono text-[15px] font-bold text-oly-sky-light backdrop-blur">
                  {r.step}
                </div>
                <div className="max-w-2xl pt-2">
                  <h3 className="text-[19px] font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
