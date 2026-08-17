const PAPERS = [
  {
    code: "P01–P02",
    name: "Diagnostic Papers",
    window: "Weeks 1–2",
    detail: "Chapter-wise, half-syllabus papers that establish your starting baseline per subject and flag foundational gaps early.",
  },
  {
    code: "P03–P05",
    name: "Progressive Full Papers",
    window: "Weeks 3–8",
    detail: "Full-syllabus papers of rising difficulty, matched to CBSE/CISCE competency-based question ratios, released fortnightly.",
  },
  {
    code: "P06–P07",
    name: "Board-Pattern Mocks",
    window: "Weeks 9–11",
    detail: "Timed exactly like the board exam — same duration, same OMR/answer-sheet format, invigilated in silence.",
  },
  {
    code: "P08",
    name: "Final Pre-Board Simulation",
    window: "Week 12",
    detail: "The full paper, cold, three weeks before boards — followed by a detailed strategy call before the real exam.",
  },
];

export default function StructureSection() {
  return (
    <section id="ts-structure" className="bg-[#FAF7EF] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-ledger text-[11px] tracking-[0.25em] text-[#B23A2E]">THE SCHEDULE</p>
        <h2 className="mt-4 max-w-2xl font-display text-[34px] font-bold leading-tight sm:text-[40px]">
          A 12-week paper cycle, timed to peak right before boards.
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-[#0E2148]/15 sm:block" />
          <ol className="space-y-10">
            {PAPERS.map((p) => (
              <li key={p.code} className="relative grid gap-4 sm:grid-cols-[56px_1fr] sm:gap-8">
                <div className="hidden sm:flex sm:h-14 sm:w-14 sm:items-center sm:justify-center sm:rounded-full sm:border-2 sm:border-[#0E2148] sm:bg-[#FAF7EF] sm:font-ledger sm:text-[10px] sm:font-bold sm:text-[#0E2148]">
                  {p.code.split("–")[0]}
                </div>
                <div className="rounded-sm border border-[#0E2148]/10 bg-white px-7 py-6 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-[20px] font-bold">{p.name}</h3>
                    <span className="font-ledger text-[11px] tracking-wide text-[#5E7FB5]">
                      {p.code} &middot; {p.window}
                    </span>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#0E2148]/70">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
