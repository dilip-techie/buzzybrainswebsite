export interface WhyFeature {
  tag: string;
  title: string;
  body: string;
}

export interface WhySectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  features?: WhyFeature[];
}

export const DEFAULT_FEATURES: WhyFeature[] = [
  {
    tag: "Paper setting",
    title: "Set to the actual board blueprint",
    body: "Every paper mirrors the current CBSE/CISCE weightage, competency-based question ratio and internal choice pattern — not a generic MCQ bank.",
  },
  {
    tag: "Evaluation",
    title: "Marked by hand, examiner-style",
    body: "Step-marking, presentation marks and common errors are annotated on your script in red pen, exactly how board evaluators grade it.",
  },
  {
    tag: "Diagnostics",
    title: "Topic-wise strength map",
    body: "Each scorecard breaks your result down to chapter and sub-topic level, so revision time goes where marks are actually being lost.",
  },
  {
    tag: "Review",
    title: "1:1 doubt-clearing after every paper",
    body: "A short review call with Dilip Sah or the subject faculty walks through your specific mistakes before the next paper in the series.",
  },
  {
    tag: "Pacing",
    title: "Timed like the real exam hall",
    body: "Fixed windows, no pausing, printable OMR/answer sheets — the series trains exam-day stamina, not just content recall.",
  },
  {
    tag: "Benchmarking",
    title: "Percentile against the batch",
    body: "See where you stand against every other BuzzyBrains student attempting the same paper that week, updated after each test.",
  },
];

export default function WhySection({
  eyebrow = "WHY A TEST SERIES, NOT MORE NOTES",
  title = "Board exams are won on exam-hall discipline, not just syllabus knowledge.",
  subtitle = (
    <>
      Students who&rsquo;ve covered the syllabus still lose 15&ndash;20 marks to pacing,
      presentation and unfamiliar question framing. The series is built to close that gap.
    </>
  ),
  features = DEFAULT_FEATURES,
}: WhySectionProps) {
  return (
    <section className="border-y border-[#0E2148]/10 bg-[#FAF7EF] py-24">
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

        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-sm border border-[#0E2148]/10 bg-[#0E2148]/10 sm:grid-cols-2 lg:grid-cols-3" data-delay="3">
          {features.map((f) => (
            <div key={f.title} className="group bg-[#FAF7EF] p-8 transition-colors hover:bg-white">
              <span className="font-ledger text-[12px] tracking-[0.2em] text-[#5E7FB5]">
                {f.tag.toUpperCase()}
              </span>
              <h3 className="mt-3 font-display text-[19px] font-bold leading-snug text-[#0E2148]">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#0E2148]/65">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
