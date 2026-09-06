export interface ScorecardTopic {
  name: string;
  pct: number;
}

export interface ScorecardSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  bullets?: string[];
  paperLabel?: string;
  score?: string;
  topics?: ScorecardTopic[];
  priorityNote?: string;
}

export const DEFAULT_TOPICS: ScorecardTopic[] = [
  { name: "Real Numbers & Polynomials", pct: 92 },
  { name: "Quadratic Equations", pct: 68 },
  { name: "Coordinate Geometry", pct: 88 },
  { name: "Trigonometry & Heights", pct: 74 },
  { name: "Statistics & Probability", pct: 55 },
];

function barColor(pct: number) {
  if (pct >= 80) return "#5E7FB5";
  if (pct >= 65) return "#C9A227";
  return "#B23A2E";
}

export default function ScorecardSection({
  eyebrow = "AFTER EVERY PAPER",
  title = "A scorecard that tells you exactly what to revise next.",
  description = "Not just a total out of 80. Every paper is broken down to sub-topic level so you can see, in one glance, which chapters are exam-ready and which need another pass before the next paper lands.",
  bullets = [
    "Chapter-wise accuracy against the batch average",
    "Marks lost to method vs. calculation vs. presentation",
    "A ranked revision list before the next paper opens",
  ],
  paperLabel = "Paper 05 · Mathematics · CBSE X",
  score = "71/80",
  topics = DEFAULT_TOPICS,
  priorityNote = "Statistics & Probability — revisit mean/median grouped-data method before Paper 06.",
}: ScorecardSectionProps) {
  return (
    <section id="ts-scorecard" className="border-y border-[#0E2148]/10 bg-[#FAF7EF] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
        <div>
          <p className="reveal font-ledger text-[12px] tracking-[0.25em] text-[#B23A2E]">{eyebrow}</p>
          <h2 className="reveal mt-4 font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
            {title}
          </h2>
          <p className="reveal mt-5 text-[16px] leading-relaxed text-[#0E2148]/70" data-delay="2">
            {description}
          </p>
          <ul className="reveal mt-8 space-y-3 text-[14.5px] text-[#0E2148]/75" data-delay="3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5E7FB5]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-sm border border-[#0E2148]/10 bg-white p-8 shadow-lg" data-delay="4">
          <div className="flex items-center justify-between border-b border-[#0E2148]/10 pb-4">
            <div>
              <p className="font-display text-[17px] font-bold">Topic-wise Performance</p>
              <p className="font-ledger text-[12px] text-[#5E7FB5]">{paperLabel}</p>
            </div>
            <span className="rounded-full bg-[#0E2148] px-3 py-1 font-ledger text-[12px] text-[#E4C158]">
              {score}
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {topics.map((t) => (
              <div key={t.name}>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="font-medium text-[#0E2148]/85">{t.name}</span>
                  <span className="font-ledger text-[12px] text-[#0E2148]/60">{t.pct}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#0E2148]/8">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${t.pct}%`, background: barColor(t.pct) }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-sm bg-[#FAF7EF] px-5 py-4">
            <p className="font-ledger text-[12px] tracking-widest text-[#B23A2E]">
              PRIORITY FOR NEXT REVIEW
            </p>
            <p className="mt-1 text-[13.5px] text-[#0E2148]/80">{priorityNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
