"use client";

import { useState } from "react";

export interface SubjectGrade {
  label: string;
  board: string;
  subjects: string[];
}

export interface SubjectsSectionProps {
  eyebrow?: string;
  title?: string;
  grades?: SubjectGrade[];
  footerNote?: string;
}

const DEFAULT_GRADES: SubjectGrade[] = [
  {
    label: "Grade 10",
    board: "CBSE",
    subjects: ["Mathematics (Standard/Basic)", "Science", "Social Science", "English (LL & LC)"],
  },
  {
    label: "Grade 10",
    board: "ICSE",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History & Civics"],
  },
  {
    label: "Grade 10",
    board: "Maharashtra (SSC)",
    subjects: [
      "Algebra",
      "Geometry",
      "Science I (Physics & Chemistry)",
      "Science II (Biology)",
      "History & Political Science",
      "Geography",
      "English",
    ],
  },
  {
    label: "Grade 12",
    board: "CBSE",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Applied Mathematics",
      "Accountancy",
      "Business Studies",
      "Economics",
      "English",
      "Computer Science",
    ],
  },
  {
    label: "Grade 12",
    board: "ISC",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Accountancy",
      "Business Studies",
      "Economics",
      "English",
      "Computer Science",
    ],
  },
  {
    label: "Grade 12",
    board: "Maharashtra (HSC)",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Accountancy",
      "Organisation of Commerce",
      "Economics",
      "English",
    ],
  },
];

const DEFAULT_FOOTER_NOTE =
  "Class 12 subjects above cover the PCM, PCB and Commerce stream packs, with English and Computer Science available as add-ons — see pricing below, or ask us on WhatsApp for your exact subject list.";

export default function SubjectsSection({
  eyebrow = "COVERAGE",
  title = "CBSE, ICSE, ISC & Maharashtra Board. One paper standard.",
  grades = DEFAULT_GRADES,
  footerNote = DEFAULT_FOOTER_NOTE,
}: SubjectsSectionProps) {
  const [active, setActive] = useState(0);
  const data = grades[active] ?? grades[0];

  return (
    <section id="ts-subjects" className="bg-[#0E2148] py-24 text-[#FAF7EF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="reveal font-ledger text-[12px] tracking-[0.25em] text-[#E4C158]">{eyebrow}</p>
            <h2 className="reveal mt-4 font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
              {title}
            </h2>
          </div>

          {grades.length > 1 && (
            <div className="reveal flex flex-wrap gap-2" data-delay="2">
              {grades.map((g, i) => (
                <button
                  key={`${g.label}-${g.board}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-5 py-2 font-ledger text-[12px] tracking-wide transition-colors ${
                    active === i
                      ? "border-[#C9A227] bg-[#C9A227] text-[#0E2148]"
                      : "border-[#FAF7EF]/25 text-[#FAF7EF]/70 hover:border-[#FAF7EF]/50"
                  }`}
                >
                  {g.label} &middot; {g.board}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-delay="3">
          {data.subjects.map((s, i) => (
            <div
              key={s}
              className="flex items-center justify-between rounded-sm border border-[#FAF7EF]/12 bg-[#FAF7EF]/[0.04] px-6 py-5 transition-colors hover:border-[#C9A227]/50"
            >
              <span className="text-[15px] font-medium">{s}</span>
              <span className="font-ledger text-[12px] text-[#5E7FB5]">
                Paper {String(i + 1).padStart(2, "0")}&ndash;08
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-[#FAF7EF]/50">{footerNote}</p>
      </div>
    </section>
  );
}
