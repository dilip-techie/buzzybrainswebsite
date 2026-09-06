export interface TrustPoint {
  tag: string;
  title: string;
  body: string;
}

export interface TrustSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  points?: TrustPoint[];
}

const DEFAULT_POINTS: TrustPoint[] = [
  {
    tag: "Track record",
    title: "The same faculty already producing A*/A and Score 7 results",
    body: "BuzzyBrains students consistently achieve A*/A in IGCSE and A-Level, and a Score 7 in IB Diploma exams — the same mentors mark every mock paper in this series.",
  },
  {
    tag: "Credentials",
    title: "Led by faculty who actually teach these syllabi",
    body: "Designed and taught by Dilip Sir (B.Tech, IIT Kanpur, MBA, IIM Ahmedabad) with hands-on, year-round experience across Cambridge IGCSE, A-Level, IB HL/SL and AP.",
  },
  {
    tag: "Small batches",
    title: "12 students per batch, not a marking queue",
    body: "Every batch is capped at 12 students, so Internal Assessment drafts, Extended Essay outlines and mock scripts get real individual feedback, not a generic rubric tick.",
  },
];

export default function TrustSection({
  eyebrow = "WHY TRUST OUR EVALUATION",
  title = "A founding batch, backed by an existing track record — not a guess.",
  subtitle = (
    <>
      This is a new mock-exam series, so we won&rsquo;t invent test-series-specific results that don&rsquo;t exist
      yet. Here is exactly what does exist: the faculty, the syllabus depth, and the batch discipline behind it.
    </>
  ),
  points = DEFAULT_POINTS,
}: TrustSectionProps) {
  return (
    <section className="bg-[#FAF7EF] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="reveal font-ledger text-[12px] tracking-[0.25em] text-[#B23A2E]">{eyebrow}</p>
          <h2 className="reveal mt-4 font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
            {title}
          </h2>
          <p className="reveal mt-4 text-[16px] leading-relaxed text-[#0E2148]/70" data-delay="2">
            {subtitle}
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 md:grid-cols-3" data-delay="3">
          {points.map((p) => (
            <div key={p.title} className="rounded-sm border border-[#0E2148]/10 bg-white p-8">
              <span className="font-ledger text-[12px] tracking-[0.2em] text-[#5E7FB5]">
                {p.tag.toUpperCase()}
              </span>
              <h3 className="mt-3 font-display text-[18px] font-bold leading-snug text-[#0E2148]">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#0E2148]/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
