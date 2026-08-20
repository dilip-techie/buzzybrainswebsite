import { Trophy } from 'lucide-react';

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

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-oly-line bg-white p-10 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-oly-brand-50 text-oly-brand-500">
            <Trophy size={26} />
          </span>
          <h3 className="text-[17px] font-bold text-oly-ink">Section reserved for real student results</h3>
          <p className="max-w-md text-[14px] leading-relaxed text-oly-ink/60">
            This space is ready for actual NSEP/INPhO qualifiers, OCSC selections and international-track results
            once the current cycle&apos;s numbers are confirmed — no placeholder scores or names are shown here
            until Dilip Sir approves real data to publish.
          </p>
        </div>
      </div>
    </section>
  );
}
