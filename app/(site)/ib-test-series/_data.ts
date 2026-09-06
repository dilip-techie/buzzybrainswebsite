import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";

export const heroContent = {
  breadcrumbLabel: "IB Test Series",
  badge: "IB DIPLOMA PROGRAMME  |  DP1 & DP2  |  BOARDS 2027",
  description:
    "The BuzzyBrains IB Test Series puts DP1 & DP2 students through full-length Paper 1/2/3 mock exams, marked against IB's own criterion-based grade descriptors (1-7 scale) — plus dedicated Internal Assessment, Extended Essay and TOK review, so you know precisely where your predicted grade actually stands.",
  mockLabel: "BUZZYBRAINS ACADEMY — MOCK IB PAPER",
  mockSubject: "Mathematics AA HL · IB DP2",
};

export const whyFeatures = DEFAULT_FEATURES.map((f, i) =>
  i === 0
    ? {
        ...f,
        body: "Every paper is marked against the same command terms and criterion-based grade descriptors (1-7 scale) IB examiners use — not step-marking or a generic MCQ bank.",
      }
    : f
);

export const structureStages = DEFAULT_PAPERS.map((s, i) =>
  i === 1
    ? {
        ...s,
        detail: "Full-syllabus papers of rising difficulty, matched to IB's own command-term progression across Paper 1, 2 and 3, released fortnightly.",
      }
    : s
);

export const subjectGrades: SubjectGrade[] = [
  {
    label: "DP Subjects",
    board: "IB (HL / SL)",
    subjects: [
      "Mathematics AA",
      "Mathematics AI",
      "Physics",
      "Chemistry",
      "Biology",
      "Economics",
      "English A: Literature",
      "Business Management",
    ],
  },
];

export const pricingGroups: PackGroup[] = [
  {
    label: "IB DIPLOMA PACKS",
    gridClass: "sm:grid-cols-2",
    packs: [
      {
        board: "IB DP",
        name: "Core 3-Subject Pack",
        price: "₹38,999",
        subjectsNote: "3 subjects · any HL/SL combination",
        tagline: "Bundle any three of your six DP subjects — the most common combination students prepare together.",
        features: [
          "8 mock sittings each across 3 subjects",
          "Criterion-based marking (1-7 scale)",
          "1:1 review call after each mock",
          "Grade-boundary comparison per paper",
        ],
        highlight: true,
      },
      {
        board: "IB DP",
        name: "Full Diploma (6 Subjects)",
        price: "₹74,999",
        subjectsNote: "6 subjects · your complete DP combination",
        tagline: "All six Diploma Programme subjects across Groups 1-6, mocked and marked as one coordinated series.",
        features: [
          "8 mock sittings each across all 6 subjects",
          "Criterion-based marking (1-7 scale)",
          "1:1 review call after each mock",
          "Final pre-exam simulation + strategy call",
        ],
        highlight: false,
      },
    ],
  },
];

export const addons: Addon[] = [
  { name: "Internal Assessment (IA) Draft Review", note: "Per subject", price: "₹4,999" },
  { name: "Extended Essay (EE) Review", note: "One submission", price: "₹5,999" },
  { name: "TOK Essay Review", note: "One submission", price: "₹3,999" },
];
