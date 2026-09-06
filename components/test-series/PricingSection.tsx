import DiscountBadge from "./DiscountBadge";

export type Pack = {
  board?: string;
  name: string;
  price: string;
  subjectsNote: string;
  tagline: string;
  features: string[];
  highlight: boolean;
};

export type PackGroup = {
  label: string;
  packs: Pack[];
  gridClass?: string;
};

export type Addon = {
  name: string;
  note: string;
  price?: string;
};

export type CustomTier = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
};

export const DEFAULT_GROUPS: PackGroup[] = [
  {
    label: "CLASS 10 PACKS",
    gridClass: "sm:grid-cols-2 xl:grid-cols-4",
    packs: [
      {
        board: "CBSE",
        name: "Maths + Science",
        price: "₹19,999",
        subjectsNote: "2 papers · Maths & Science",
        tagline: "The two papers that decide your CBSE Class 10 percentage — bundled together.",
        features: [
          "8 papers each in Maths & Science",
          "Examiner-style manual evaluation",
          "1:1 review call after each paper",
          "Percentile ranking against the batch",
        ],
        highlight: true,
      },
      {
        board: "ICSE",
        name: "Science Trio",
        price: "₹21,999",
        subjectsNote: "3 papers · Physics, Chemistry & Biology",
        tagline: "ICSE grades Physics, Chemistry & Biology as three separate papers — so we prepare them as three.",
        features: [
          "8 papers each in Physics, Chemistry & Biology",
          "Examiner-style manual evaluation",
          "Topic-wise scorecard after every paper",
          "WhatsApp doubt support",
        ],
        highlight: false,
      },
      {
        board: "ICSE",
        name: "Maths + Science Trio",
        price: "₹27,999",
        subjectsNote: "4 papers · Maths, Physics, Chemistry & Biology",
        tagline: "All four core ICSE papers in one pack — complete Class 10 STEM coverage.",
        features: [
          "8 papers each across all 4 subjects",
          "Examiner-style manual evaluation",
          "1:1 review call after each paper",
          "Percentile ranking against the batch",
        ],
        highlight: false,
      },
      {
        board: "MAHARASHTRA (SSC)",
        name: "Maths + Science",
        price: "₹27,999",
        subjectsNote: "4 papers · Algebra, Geometry, Science I & Science II",
        tagline: "SSC splits Maths into Algebra & Geometry and Science into two papers — so we prepare all four.",
        features: [
          "8 papers each across all 4 subjects",
          "Examiner-style manual evaluation",
          "1:1 review call after each paper",
          "Percentile ranking against the batch",
        ],
        highlight: false,
      },
    ],
  },
  {
    label: "CLASS 12 STREAM PACKS · CBSE, ISC & MAHARASHTRA BOARD (HSC)",
    gridClass: "lg:grid-cols-3",
    packs: [
      {
        name: "PCM",
        price: "₹30,000",
        subjectsNote: "Physics, Chemistry, Mathematics",
        tagline: "The engineering-track trio — CBSE, ISC or Maharashtra Board, evaluated like the real board paper.",
        features: [
          "8 papers each across all 3 subjects",
          "Examiner-style manual evaluation",
          "1:1 review call after each paper",
          "Final pre-board simulation + strategy call",
        ],
        highlight: true,
      },
      {
        name: "PCB",
        price: "₹30,000",
        subjectsNote: "Physics, Chemistry, Biology",
        tagline: "The medical-track trio — CBSE, ISC or Maharashtra Board, evaluated like the real board paper.",
        features: [
          "8 papers each across all 3 subjects",
          "Examiner-style manual evaluation",
          "1:1 review call after each paper",
          "Final pre-board simulation + strategy call",
        ],
        highlight: false,
      },
      {
        name: "Commerce",
        price: "₹30,000",
        subjectsNote: "Accountancy, Business Studies, Economics",
        tagline: "The complete Commerce trio, board-pattern from paper one.",
        features: [
          "8 papers each across all 3 subjects",
          "Examiner-style manual evaluation",
          "1:1 review call after each paper",
          "Final pre-board simulation + strategy call",
        ],
        highlight: false,
      },
    ],
  },
];

export const DEFAULT_ADDONS: Addon[] = [
  { name: "Applied Mathematics", note: "CBSE Class 12" },
  { name: "English", note: "Class 10 & 12" },
  { name: "Computer Science", note: "Class 12" },
  { name: "History & Civics", note: "ICSE Class 10" },
  { name: "History & Political Science", note: "Maharashtra SSC" },
  { name: "Geography", note: "Maharashtra SSC" },
  { name: "Economics", note: "Class 12 · incl. PCM/PCB add-on" },
];

export const DEFAULT_CUSTOM_TIER: CustomTier = {
  name: "Test Series + Coaching",
  price: "Custom",
  period: "bundled with regular classes",
  tagline: "For enrolled BuzzyBrains students — the series folded into your existing batch.",
  features: [
    "Everything in the packs above",
    "Papers timed with your syllabus pace",
    "Reviewed directly by Dilip Sir for Maths/Physics",
    "Priority slot for pre-board simulation",
  ],
};

function defaultGridClass(count: number): string {
  if (count >= 4) return "sm:grid-cols-2 xl:grid-cols-4";
  if (count === 3) return "lg:grid-cols-3";
  if (count === 2) return "sm:grid-cols-2";
  return "";
}

export function PackCard({ pack }: { pack: Pack }) {
  return (
    <div
      className={`flex flex-col rounded-sm border p-7 ${
        pack.highlight
          ? "border-[#C9A227] bg-[#FAF7EF] text-[#0E2148]"
          : "border-[#FAF7EF]/15 bg-[#FAF7EF]/[0.03]"
      }`}
    >
      {pack.highlight && (
        <span className="mb-4 inline-block w-fit rounded-full bg-[#0E2148] px-3 py-1 font-ledger text-[11px] tracking-wide text-[#E4C158]">
          MOST ENROLLED
        </span>
      )}
      {pack.board && (
        <span
          className={`mb-2 inline-block w-fit font-ledger text-[11px] tracking-[0.15em] ${
            pack.highlight ? "text-[#B23A2E]" : "text-[#E4C158]"
          }`}
        >
          {pack.board}
        </span>
      )}
      <h4 className="font-display text-[19px] font-bold">{pack.name}</h4>
      <p className={`mt-1 font-ledger text-[11.5px] ${pack.highlight ? "text-[#5E7FB5]" : "text-[#FAF7EF]/50"}`}>
        {pack.subjectsNote}
      </p>
      <p className={`mt-3 text-[13px] leading-relaxed ${pack.highlight ? "text-[#0E2148]/65" : "text-[#FAF7EF]/60"}`}>
        {pack.tagline}
      </p>

      <div className="mt-5">
        <span className="font-display text-[28px] font-bold">{pack.price}</span>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {pack.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-[13px]">
            <span className={pack.highlight ? "text-[#B23A2E]" : "text-[#E4C158]"}>&#10003;</span>
            <span className={pack.highlight ? "text-[#0E2148]/80" : "text-[#FAF7EF]/75"}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/919850570525"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 rounded-sm px-5 py-3 text-center text-[13px] font-bold tracking-wide transition-transform hover:-translate-y-0.5 ${
          pack.highlight ? "bg-[#0E2148] text-[#FAF7EF]" : "bg-[#C9A227] text-[#0E2148]"
        }`}
      >
        Talk to us on WhatsApp
      </a>
    </div>
  );
}

export interface PricingSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  basePrice?: string;
  basePeriod?: string;
  baseTagline?: string;
  baseName?: string;
  groups?: PackGroup[];
  addonsLabel?: string;
  addons?: Addon[];
  addonPrice?: string;
  customTier?: CustomTier;
}

export default function PricingSection({
  eyebrow = "ENROLLMENT",
  title = "Pick the coverage you need.",
  subtitle = "Every pack follows the same 12-week, 8-paper cycle. Seats for the Jan–Mar 2027 batch are limited to keep evaluation turnaround at 72 hours.",
  baseName = "Single Subject",
  basePrice = "₹7,999",
  basePeriod = "per subject · full 8-paper series",
  baseTagline = "Confident everywhere except one paper? Cover just that subject — any board, any grade.",
  groups = DEFAULT_GROUPS,
  addonsLabel = "ADD-ON SUBJECTS · STACK ONTO ANY PACK ABOVE",
  addons = DEFAULT_ADDONS,
  addonPrice = "₹7,999",
  customTier = DEFAULT_CUSTOM_TIER,
}: PricingSectionProps) {
  return (
    <section id="ts-pricing" className="bg-[#0E2148] py-24 text-[#FAF7EF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="reveal font-ledger text-[12px] tracking-[0.25em] text-[#E4C158]">{eyebrow}</p>
          <h2 className="reveal mt-4 font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
            {title}
          </h2>
          <p className="reveal mt-4 text-[15px] text-[#FAF7EF]/65" data-delay="2">
            {subtitle}
          </p>
          <DiscountBadge />
        </div>

        {/* Base tier */}
        <div className="reveal mt-12 flex flex-col items-start justify-between gap-5 rounded-sm border border-[#FAF7EF]/15 bg-[#FAF7EF]/[0.03] p-7 sm:flex-row sm:items-center" data-delay="4">
          <div>
            <h3 className="font-display text-[19px] font-bold">{baseName}</h3>
            <p className="mt-1 text-[13.5px] text-[#FAF7EF]/60">{baseTagline}</p>
          </div>
          <div className="flex shrink-0 items-center gap-6">
            <div className="text-right">
              <span className="font-display text-[26px] font-bold">{basePrice}</span>
              <p className="font-ledger text-[11px] text-[#FAF7EF]/50">{basePeriod}</p>
            </div>
            <a
              href="https://wa.me/919850570525"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-[#C9A227] px-5 py-3 text-[13px] font-bold tracking-wide text-[#0E2148] transition-transform hover:-translate-y-0.5"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* Pack groups */}
        {groups.map((group) => (
          <div key={group.label}>
            <p className="reveal mt-16 font-ledger text-[12px] tracking-[0.2em] text-[#E4C158]" data-delay="1">
              {group.label}
            </p>
            <div
              className={`reveal mt-6 grid gap-6 ${group.gridClass ?? defaultGridClass(group.packs.length)}`}
              data-delay="2"
            >
              {group.packs.map((pack) => (
                <PackCard key={`${pack.board ?? ""}-${pack.name}`} pack={pack} />
              ))}
            </div>
          </div>
        ))}

        {/* Add-ons */}
        {addons.length > 0 && (
          <>
            <p className="reveal mt-16 font-ledger text-[12px] tracking-[0.2em] text-[#E4C158]" data-delay="1">
              {addonsLabel}
            </p>
            <div className="reveal mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-delay="2">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="rounded-sm border border-[#FAF7EF]/15 bg-[#FAF7EF]/[0.03] px-5 py-4"
                >
                  <p className="font-display text-[14.5px] font-bold">{addon.name}</p>
                  <p className="mt-1 font-ledger text-[11px] text-[#FAF7EF]/50">{addon.note}</p>
                  <p className="mt-2.5 font-display text-[17px] font-bold text-[#E4C158]">
                    + {addon.price ?? addonPrice}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Custom / coaching bundle */}
        <div className="reveal mt-16 flex flex-col items-start justify-between gap-6 rounded-sm border border-[#FAF7EF]/15 bg-[#FAF7EF]/[0.03] p-8 lg:flex-row lg:items-center" data-delay="1">
          <div className="max-w-xl">
            <h3 className="font-display text-[21px] font-bold">{customTier.name}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#FAF7EF]/60">{customTier.tagline}</p>
            <ul className="mt-5 space-y-2.5">
              {customTier.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[13.5px]">
                  <span className="text-[#E4C158]">&#10003;</span>
                  <span className="text-[#FAF7EF]/75">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
            <div className="lg:text-right">
              <span className="font-display text-[28px] font-bold">{customTier.price}</span>
              <p className="font-ledger text-[11px] text-[#FAF7EF]/50">{customTier.period}</p>
            </div>
            <a
              href="https://wa.me/919850570525"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-[#C9A227] px-6 py-3 text-[13.5px] font-bold tracking-wide text-[#0E2148] transition-transform hover:-translate-y-0.5"
            >
              Talk to us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
