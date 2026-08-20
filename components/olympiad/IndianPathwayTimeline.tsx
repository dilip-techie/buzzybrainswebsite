import { Route } from 'lucide-react';
import { physicsIndianPathway } from '@/lib/olympiad/data';

export default function IndianPathwayTimeline() {
  return (
    <section id="oly-indian-pathway" className="oly-section bg-oly-ink">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow oly-eyebrow-inverse">
            <Route size={12} /> India&apos;s Official Pathway
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-white sm:text-[42px]">
            IOQP → OCSC → PDC → IPhO.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/55">
            The only route onto India&apos;s IPhO team, run jointly by IAPT and HBCSE-TIFR. Exact dates shift
            every year — always confirm the current cycle against the official HBCSE/IAPT bulletin.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-oly-brand-500/70 via-white/15 to-transparent sm:block" />
          <div className="flex flex-col gap-10">
            {physicsIndianPathway.map((step) => (
              <div key={step.step} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] font-mono text-[15px] font-bold text-oly-sky-light backdrop-blur">
                  {step.step}
                </div>
                <div className="max-w-2xl pt-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[19px] font-bold text-white">{step.stage}</h3>
                    <span className="text-[13px] font-semibold text-oly-sky-light">{step.title}</span>
                  </div>
                  <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-white/40">{step.window}</p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{step.format}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">{step.covers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
