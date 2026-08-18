const RESULTS = [
  { initials: "AS", name: "Ananya S.", grade: "Class X • CBSE", note: "Moved from 78% to 94% in Maths across the series, mainly by fixing step-marking losses flagged in the scorecards." },
  { initials: "RK", name: "Rohan K.", grade: "Class XII • ICSE (PCM)", note: "The timed pre-board simulation was the first time Physics numericals felt fast instead of frantic." },
  { initials: "MP", name: "Myra P.", grade: "Class X • ICSE", note: "Weekly topic breakdowns made revision targeted instead of re-reading the whole textbook every time." },
];

export default function ResultsSection() {
  return (
    <section className="bg-[#FAF7EF] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="reveal font-ledger text-[11px] tracking-[0.25em] text-[#B23A2E]">FROM THE LAST BATCH</p>
        <h2 className="reveal mt-4 max-w-2xl font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
          What changes after twelve weeks of graded papers.
        </h2>

        <div className="reveal mt-14 grid gap-6 md:grid-cols-3" data-delay="2">
          {RESULTS.map((r) => (
            <figure key={r.name} className="rounded-sm border border-[#0E2148]/10 bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0E2148] font-ledger text-[13px] font-bold text-[#E4C158]">
                  {r.initials}
                </span>
                <div>
                  <figcaption className="font-display text-[15px] font-bold">{r.name}</figcaption>
                  <p className="font-ledger text-[10.5px] text-[#5E7FB5]">{r.grade}</p>
                </div>
              </div>
              <blockquote className="mt-5 text-[14px] leading-relaxed text-[#0E2148]/75">
                &ldquo;{r.note}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
