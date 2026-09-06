import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";

export const heroContent = {
  breadcrumbLabel: "IGCSE Cambridge Test Series",
  badge: "CAMBRIDGE IGCSE  |  GRADE 9 & 10  |  BOARDS 2027",
  description:
    "The BuzzyBrains IGCSE Test Series puts Cambridge (and Edexcel) students through full-length mock exams set to your exact component structure — Paper 1/2 and Paper 3/4/6 — then hands back a marked, examiner-annotated scorecard within 72 hours, so you know precisely what to fix before the real thing.",
  mockLabel: "BUZZYBRAINS ACADEMY — MOCK IGCSE PAPER",
  mockSubject: "Mathematics · Cambridge IGCSE",
};

export const whyFeatures = DEFAULT_FEATURES.map((f, i) =>
  i === 0
    ? {
        ...f,
        body: "Every paper mirrors Cambridge's own component structure — Paper 1/2 (Core/Extended) and Paper 3/4/6 — with mark schemes that reward levels of response, not a generic MCQ bank.",
      }
    : f
);

export const structureStages = DEFAULT_PAPERS.map((s, i) =>
  i === 1
    ? {
        ...s,
        detail: "Full-syllabus papers of rising difficulty, matched to Cambridge's own component weighting across Paper 1/2 and Paper 3/4/6, released fortnightly.",
      }
    : s
);

export const subjectGrades: SubjectGrade[] = [
  {
    label: "IGCSE",
    board: "Cambridge / Edexcel",
    subjects: [
      "Mathematics",
      "Additional Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Combined Science",
      "English (First Language)",
      "Economics",
      "Business Studies",
      "Computer Science",
    ],
  },
];

export const pricingGroups: PackGroup[] = [
  {
    label: "IGCSE SUBJECT BUNDLES",
    gridClass: "sm:grid-cols-2 xl:grid-cols-3",
    packs: [
      {
        board: "CAMBRIDGE IGCSE",
        name: "Maths + Combined Science",
        price: "₹22,999",
        subjectsNote: "2 subjects · Maths & Combined Science",
        tagline: "The two subjects most Cambridge schools require across every stream — bundled together.",
        features: [
          "8 mock sittings each in Maths & Combined Science",
          "Examiner-style, component-aware marking",
          "1:1 review call after each mock",
          "A*-G / 9-1 grade-boundary comparison",
        ],
        highlight: true,
      },
      {
        board: "CAMBRIDGE IGCSE",
        name: "Science Trio",
        price: "₹33,999",
        subjectsNote: "3 subjects · Physics, Chemistry & Biology",
        tagline: "Taking the sciences separately, not as Combined Science? We mock and mark all three individually.",
        features: [
          "8 mock sittings each in Physics, Chemistry & Biology",
          "Examiner-style, component-aware marking",
          "Topic-wise scorecard after every mock",
          "WhatsApp doubt support",
        ],
        highlight: false,
      },
      {
        board: "CAMBRIDGE IGCSE",
        name: "Maths + Science Trio",
        price: "₹42,999",
        subjectsNote: "4 subjects · Maths, Physics, Chemistry & Biology",
        tagline: "All four core Cambridge STEM subjects in one pack — complete IGCSE science coverage.",
        features: [
          "8 mock sittings across all 4 subjects",
          "Examiner-style, component-aware marking",
          "1:1 review call after each mock",
          "A*-G / 9-1 grade-boundary comparison",
        ],
        highlight: false,
      },
    ],
  },
];

export const addons: Addon[] = [
  { name: "Additional Mathematics", note: "IGCSE" },
  { name: "Economics", note: "IGCSE" },
  { name: "Business Studies", note: "IGCSE" },
  { name: "Computer Science", note: "IGCSE" },
];
