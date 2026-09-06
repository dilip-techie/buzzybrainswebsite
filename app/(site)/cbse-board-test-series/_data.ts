import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import { DEFAULT_GROUPS } from "@/components/test-series/PricingSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";

export const heroContent = {
  breadcrumbLabel: "CBSE Board Test Series",
  badge: "CBSE  |  GRADE 10 & 12  |  BOARDS 2027",
  description:
    "The BuzzyBrains CBSE Test Series puts Grade 10 & 12 students through full-length papers set to the exact CBSE Sample Question Paper (SQP) blueprint — then hands back a marked, examiner-annotated scorecard within 72 hours, so you know precisely what to fix before the real thing.",
};

export const whyFeatures = DEFAULT_FEATURES.map((f, i) =>
  i === 0
    ? {
        ...f,
        body: "Every paper mirrors the current CBSE Sample Question Paper (SQP) weightage, competency-based question ratio and internal choice pattern — not a generic MCQ bank.",
      }
    : f
);

export const structureStages = DEFAULT_PAPERS.map((s, i) =>
  i === 1
    ? {
        ...s,
        detail: "Full-syllabus papers of rising difficulty, matched to CBSE's own competency-based question ratios, released fortnightly.",
      }
    : s
);

export const subjectGrades: SubjectGrade[] = [
  {
    label: "Grade 10",
    board: "CBSE",
    subjects: ["Mathematics (Standard/Basic)", "Science", "Social Science", "English (LL & LC)"],
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
];

const class10Pack = DEFAULT_GROUPS[0].packs[0]; // CBSE Maths + Science

export const pricingGroups: PackGroup[] = [
  {
    label: "CLASS 10 PACK",
    gridClass: "max-w-md",
    packs: [class10Pack],
  },
  {
    label: "CLASS 12 STREAM PACKS",
    gridClass: "lg:grid-cols-3",
    packs: [
      {
        name: "PCM",
        price: "₹30,000",
        subjectsNote: "Physics, Chemistry, Mathematics",
        tagline: "The engineering-track trio, evaluated exactly like the real CBSE board paper.",
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
        tagline: "The medical-track trio, evaluated exactly like the real CBSE board paper.",
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
        tagline: "The complete CBSE Commerce trio, board-pattern from paper one.",
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

export const addons: Addon[] = [
  { name: "Applied Mathematics", note: "CBSE Class 12" },
  { name: "English", note: "Class 10 & 12" },
  { name: "Computer Science", note: "Class 12" },
  { name: "Economics", note: "Class 12 · incl. PCM/PCB add-on" },
];
