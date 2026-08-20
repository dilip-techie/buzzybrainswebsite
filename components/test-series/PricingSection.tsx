const PLANS = [
  {
    name: "Single Subject",
    price: "₹4,999",
    period: "per subject / full series",
    tagline: "For students confident everywhere except one paper.",
    features: [
      "8 full-length papers, one subject",
      "Examiner-style manual evaluation",
      "Topic-wise scorecard after every paper",
      "WhatsApp doubt support",
    ],
    highlight: false,
  },
  {
    name: "Full Board Pack",
    price: "₹19,999",
    period: "per grade / all subjects",
    tagline: "The complete 12-week cycle across every subject you're appearing for.",
    features: [
      "8 papers × every subject in your grade",
      "Examiner-style manual evaluation",
      "1:1 review call after each paper",
      "Percentile ranking against the batch",
      "Final pre-board simulation + strategy call",
    ],
    highlight: true,
  },
  {
    name: "Test Series + Coaching",
    price: "Custom",
    period: "bundled with regular classes",
    tagline: "For enrolled BuzzyBrains students — the series folded into your existing batch.",
    features: [
      "Everything in Full Board Pack",
      "Papers timed with your syllabus pace",
      "Reviewed directly by Dilip Sah for Maths/Physics",
      "Priority slot for pre-board simulation",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="ts-pricing" className="bg-[#0E2148] py-24 text-[#FAF7EF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="reveal font-ledger text-[12px] tracking-[0.25em] text-[#E4C158]">ENROLLMENT</p>
          <h2 className="reveal mt-4 font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
            Pick the coverage you need.
          </h2>
          <p className="reveal mt-4 text-[15px] text-[#FAF7EF]/65" data-delay="2">
            All plans follow the same 12-week, 8-paper cycle. Seats for the Jan&ndash;Mar 2027 batch are limited to keep evaluation turnaround at 72 hours.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-3" data-delay="3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-sm border p-8 ${
                plan.highlight
                  ? "border-[#C9A227] bg-[#FAF7EF] text-[#0E2148]"
                  : "border-[#FAF7EF]/15 bg-[#FAF7EF]/[0.03]"
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-[#0E2148] px-3 py-1 font-ledger text-[12px] tracking-wide text-[#E4C158]">
                  MOST ENROLLED
                </span>
              )}
              <h3 className="font-display text-[21px] font-bold">{plan.name}</h3>
              <p className={`mt-2 text-[13.5px] leading-relaxed ${plan.highlight ? "text-[#0E2148]/65" : "text-[#FAF7EF]/60"}`}>
                {plan.tagline}
              </p>

              <div className="mt-6">
                <span className="font-display text-[32px] font-bold">{plan.price}</span>
                <p className={`mt-1 font-ledger text-[12px] ${plan.highlight ? "text-[#5E7FB5]" : "text-[#FAF7EF]/50"}`}>
                  {plan.period}
                </p>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[13.5px]">
                    <span className={plan.highlight ? "text-[#B23A2E]" : "text-[#E4C158]"}>&#10003;</span>
                    <span className={plan.highlight ? "text-[#0E2148]/80" : "text-[#FAF7EF]/75"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919850570525"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 rounded-sm px-5 py-3 text-center text-[13.5px] font-bold tracking-wide transition-transform hover:-translate-y-0.5 ${
                  plan.highlight
                    ? "bg-[#0E2148] text-[#FAF7EF]"
                    : "bg-[#C9A227] text-[#0E2148]"
                }`}
              >
                Talk to us on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
