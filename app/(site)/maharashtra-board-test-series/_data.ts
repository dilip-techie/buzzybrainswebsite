import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import { DEFAULT_GROUPS } from "@/components/test-series/PricingSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";

export const heroContent = {
  breadcrumbLabel: "Maharashtra Board Test Series",
  badge: "MAHARASHTRA STATE BOARD  |  SSC & HSC  |  BOARDS 2027",
  description:
    "The BuzzyBrains Maharashtra Board Test Series puts SSC (Class 10) and HSC (Class 12) students through full-length papers set to the exact MSBSHSE blueprint — including separate Algebra, Geometry and Science papers — then hands back a marked, examiner-annotated scorecard within 72 hours.",
  mockSubject: "Algebra · SSC Class X",
};

export const whyFeatures = DEFAULT_FEATURES.map((f, i) =>
  i === 0
    ? {
        ...f,
        body: "Every paper mirrors the current Maharashtra State Board (MSBSHSE) blueprint — including its split Algebra/Geometry and Science-I/Science-II paper structure — not a generic MCQ bank.",
      }
    : f
);

export const structureStages = DEFAULT_PAPERS.map((s, i) =>
  i === 1
    ? {
        ...s,
        detail: "Full-syllabus papers of rising difficulty, matched to MSBSHSE's own question-type distribution (MCQ, short answer, long answer), released fortnightly.",
      }
    : s
);

export const subjectGrades: SubjectGrade[] = [
  {
    label: "SSC (Class 10)",
    board: "Maharashtra",
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
    label: "HSC (Class 12)",
    board: "Maharashtra",
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

const sscPack = DEFAULT_GROUPS[0].packs[3]; // Maharashtra (SSC) Maths + Science

export const pricingGroups: PackGroup[] = [
  {
    label: "SSC (CLASS 10) PACK",
    gridClass: "max-w-md",
    packs: [sscPack],
  },
  {
    label: "HSC (CLASS 12) STREAM PACKS",
    gridClass: "lg:grid-cols-3",
    packs: [
      {
        name: "PCM",
        price: "₹30,000",
        subjectsNote: "Physics, Chemistry, Mathematics",
        tagline: "The engineering-track trio, evaluated exactly like the real HSC board paper.",
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
        tagline: "The medical-track trio, evaluated exactly like the real HSC board paper.",
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
        subjectsNote: "Accountancy, Organisation of Commerce, Economics",
        tagline: "The complete HSC Commerce trio, board-pattern from paper one.",
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
  { name: "History & Political Science", note: "Maharashtra SSC" },
  { name: "Geography", note: "Maharashtra SSC" },
  { name: "English", note: "Class 10 & 12" },
];
