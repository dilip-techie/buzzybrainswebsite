import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroGeneric({
  eyebrow,
  title,
  highlight,
  description,
  stats,
  exploreHref,
  exploreLabel,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  stats: [string, string][];
  exploreHref: string;
  exploreLabel: string;
}) {
  return (
    <section className="oly-elite-hero relative overflow-hidden pb-16 pt-[148px] sm:pb-20 sm:pt-[168px]">
      <div className="absolute inset-0 -z-10 bg-oly-dot-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="oly-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="elite-crest"><span className="elite-crest-mark" aria-hidden="true">♛</span> BuzzyBrains Elite</span>
          <br />
          <span className="oly-eyebrow !border-amber-400/50 !bg-amber-400/10 !text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-oly-amber" /> {eyebrow}
          </span>

          <h1 className="mx-auto mt-6 text-balance font-display text-[34px] font-extrabold leading-[1.12] text-white sm:text-[46px] lg:text-[52px]">
            {title} <span className="elite-gold">{highlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[600px] text-balance text-[17px] leading-relaxed text-slate-300">
            {description}
          </p>
          <div className="mx-auto mt-6 max-w-[600px] text-left">
          <p className="elite-merit">
            <strong>Selective admission by merit.</strong> A minimum of{' '}
            <span className="elite-merit-req">80% marks is required to apply</span>. Only 12 seats per batch, so apply early to secure your place.
          </p>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a href="#oly-lead-form" className="oly-btn-primary !bg-amber-400 !text-gray-900 hover:!bg-amber-300">
              Apply Now: Limited Seats <ArrowRight size={17} />
            </a>
            <a href={exploreHref} className="oly-btn-secondary !border-white/30 !bg-transparent !text-white hover:!border-amber-400">
              <PlayCircle size={17} /> {exploreLabel}
            </a>
          </div>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/15 pt-7">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-2xl font-bold text-amber-300">{n}</div>
                <div className="text-[12.5px] font-medium text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
