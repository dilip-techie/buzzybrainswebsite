"use client";

import { useState } from "react";

const GRADES = {
  "Grade 10": {
    board: "CBSE",
    subjects: ["Mathematics (Standard/Basic)", "Science", "Social Science", "English (LL & LC)"],
  },
  "Grade 10 ": {
    board: "ICSE",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History & Civics"],
  },
  "Grade 12": {
    board: "CBSE",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Applied Mathematics"],
  },
  "Grade 12 ": {
    board: "ISC",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Economics"],
  },
} as const;

type Key = keyof typeof GRADES;
const ORDER: Key[] = ["Grade 10", "Grade 10 ", "Grade 12", "Grade 12 "];

export default function SubjectsSection() {
  const [active, setActive] = useState<Key>("Grade 10");
  const data = GRADES[active];

  return (
    <section id="ts-subjects" className="bg-[#0E2148] py-24 text-[#FAF7EF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="reveal font-ledger text-[11px] tracking-[0.25em] text-[#E4C158]">COVERAGE</p>
            <h2 className="reveal mt-4 font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
              Four boards. Two grades. One paper standard.
            </h2>
          </div>

          <div className="reveal flex flex-wrap gap-2" data-delay="2">
            {ORDER.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-full border px-5 py-2 font-ledger text-[11px] tracking-wide transition-colors ${
                  active === key
                    ? "border-[#C9A227] bg-[#C9A227] text-[#0E2148]"
                    : "border-[#FAF7EF]/25 text-[#FAF7EF]/70 hover:border-[#FAF7EF]/50"
                }`}
              >
                {key.trim()} &middot; {GRADES[key].board}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-delay="3">
          {data.subjects.map((s, i) => (
            <div
              key={s}
              className="flex items-center justify-between rounded-sm border border-[#FAF7EF]/12 bg-[#FAF7EF]/[0.04] px-6 py-5 transition-colors hover:border-[#C9A227]/50"
            >
              <span className="text-[15px] font-medium">{s}</span>
              <span className="font-ledger text-[11px] text-[#5E7FB5]">
                Paper {String(i + 1).padStart(2, "0")}&ndash;08
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-[#FAF7EF]/50">
          Stream-specific combinations (PCM/PCB/Commerce) and additional electives available on request &mdash;
          ask us on WhatsApp for your exact subject list.
        </p>
      </div>
    </section>
  );
}
