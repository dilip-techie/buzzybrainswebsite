import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import { DEFAULT_GROUPS } from "@/components/test-series/PricingSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";
import type { HeroMockRow } from "@/components/test-series/Hero";

export const heroContent = {
  breadcrumbLabel: "ICSE Board Test Series",
  badge: "ICSE · ISC  |  GRADE 10 & 12  |  BOARDS 2027",
  description:
    "The BuzzyBrains ICSE Test Series puts Grade 10 (ICSE) and Grade 12 (ISC) students through full-length papers set to the exact CISCE blueprint — including separate Physics, Chemistry and Biology papers — then hands back a marked, examiner-annotated scorecard within 72 hours.",
  mockSubject: "Mathematics · ICSE Class X",
  mockRows: [
    { q: "Q1(a) &ndash; Real Numbers", awarded: "4/4" },
    { q: "Q4(b) &ndash; Quadratic Equations", awarded: "4/5" },
    { q: "Q9 &ndash; Coordinate Geometry", awarded: "7/8" },
    { q: "Q13 &ndash; Trigonometry", awarded: "8/10" },
  ] as HeroMockRow[],
};

export const whyFeatures = DEFAULT_FEATURES.map((f, i) =>
  i === 0
    ? {
        ...f,
        body: "Every paper mirrors the current CISCE (ICSE/ISC) specimen paper weightage, including its 'attempt any 4 of 6' internal-choice structure — not a generic MCQ bank.",
      }
    : f
);

export const structureStages = DEFAULT_PAPERS.map((s, i) =>
  i === 1
    ? {
        ...s,
        detail: "Full-syllabus papers of rising difficulty, matched to CISCE's own specimen-paper question ratios, released fortnightly.",
      }
    : s
);

export const subjectGrades: SubjectGrade[] = [
  {
    label: "Grade 10",
    board: "ICSE",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History & Civics"],
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
];

const [scienceTrio, mathsScienceTrio] = DEFAULT_GROUPS[0].packs.slice(1, 3);

export const pricingGroups: PackGroup[] = [
  {
    label: "CLASS 10 (ICSE) PACKS",
    gridClass: "sm:grid-cols-2",
    packs: [scienceTrio, mathsScienceTrio],
  },
  {
    label: "CLASS 12 (ISC) STREAM PACKS",
    gridClass: "lg:grid-cols-3",
    packs: [
      {
        name: "PCM",
        price: "₹30,000",
        subjectsNote: "Physics, Chemistry, Mathematics",
        tagline: "The engineering-track trio, evaluated exactly like the real ISC board paper.",
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
        tagline: "The medical-track trio, evaluated exactly like the real ISC board paper.",
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
        tagline: "The complete ISC Commerce trio, board-pattern from paper one.",
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
  { name: "History & Civics", note: "ICSE Class 10" },
  { name: "English", note: "Class 10 & 12" },
  { name: "Computer Science", note: "Class 12" },
  { name: "Economics", note: "Class 12 · incl. PCM/PCB add-on" },
];
