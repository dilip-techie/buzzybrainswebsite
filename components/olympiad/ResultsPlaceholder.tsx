import { Trophy, Sparkles } from 'lucide-react';

export default function ResultsPlaceholder() {
  return (
    <section className="oly-section bg-oly-paper">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow">Results</span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
            Our physics olympiad results.
          </h2>
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-oly-line bg-white p-8">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-oly-success/10 text-oly-success">
            <Sparkles size={22} />
          </span>
          <div>
            <h3 className="text-[16px] font-bold text-oly-ink">Level 1 selections, across cohorts</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-oly-ink/65">
              Many of our students have been selected in Level 1 of the SOF olympiads and NSEJS (National
              Standard Examination in Junior Science) — an early, encouraging signal for students now building
              toward NSEP, INPhO and the international tracks on this page.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-oly-line bg-white p-10 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-oly-brand-50 text-oly-brand-500">
            <Trophy size={26} />
          </span>
          <h3 className="text-[17px] font-bold text-oly-ink">Section reserved for detailed results</h3>
          <p className="max-w-md text-[14px] leading-relaxed text-oly-ink/60">
            This space is ready for specific NSEP/INPhO qualifiers, OCSC selections and international-track
            results once the current cycle&apos;s numbers are confirmed — no placeholder scores or names beyond
            the above until Dilip Sir approves real data to publish.
          </p>
        </div>
      </div>
    </section>
  );
}
