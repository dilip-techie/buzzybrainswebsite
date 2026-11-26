import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import { DEFAULT_GROUPS } from "@/components/test-series/PricingSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { TopScorer } from "@/components/test-series/ResultsShowcase";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";

export const heroContent = {
  breadcrumbLabel: "CBSE Board Test Series",
  badge: "CBSE  |  GRADE 12 RESULTS  |  BOARDS 2027",
  description:
    "The BuzzyBrains CBSE Test Series puts Grade 10 & 12 students through full-length papers set to the exact CBSE Sample Question Paper (SQP) blueprint — then hands back a marked, examiner-annotated scorecard within 72 hours, so you know precisely what to fix before the real thing.",
};

export const heroStats = [
  { value: "99.0%", label: "Top Class 12 score, Boards 2026" },
  { value: "96.8%", label: "Average of featured students" },
  { value: "8", label: "Full-length papers per subject" },
];

export const heroMock = {
  mockSubject: "Physics · CBSE Class XII",
  mockRollNo: "BB‑XII‑0236",
  mockDuration: "Time: 3 hrs",
  mockMaxMarks: "M.M. 70",
  mockRows: [
    { q: "Q3 &ndash; Electrostatics (MCQ)", awarded: "1/1" },
    { q: "Q16 &ndash; Ray Optics (Numerical)", awarded: "3/3" },
    { q: "Q25 &ndash; Current Electricity", awarded: "4/5" },
    { q: "Q34 &ndash; Case Study (Semiconductors)", awarded: "4/4" },
  ],
  mockTotal: "66 / 70",
  mockPercentile: "94th percentile",
};

export const topScorers: TopScorer[] = [
  { initials: "AS", name: "Aditi Sharma", score: 98.6, year: "2026", stream: "Science", quote: "The regular mock tests helped me a lot with time management. I used to leave a few questions incomplete earlier, but after practising full papers, that problem was mostly solved. The solutions were also really helpful." },
  { initials: "RV", name: "Rahul Verma", score: 95.4, year: "2026", stream: "Science", quote: "I joined mainly because I needed more paper practice. The questions covered different types of concepts, especially competency-based questions. It helped me understand where I was making mistakes." },
  { initials: "IG", name: "Ishita Gupta", score: 99.0, year: "2026", stream: "Commerce", quote: "I found the test series very useful during my final revision. Attempting papers regularly helped me stay consistent and gave me a better idea of the actual board exam pattern." },
  { initials: "AP", name: "Aditya Patel", score: 96.2, year: "2026", stream: "Science", quote: "What I liked most was the detailed solutions. Whenever I got an answer wrong, I could understand the correct approach. It saved me time during revision." },
  { initials: "SM", name: "Sneha Mehta", score: 97.8, year: "2026", stream: "Humanities", quote: "I was initially quite nervous about the board exams. Giving timed mock tests regularly made me more comfortable with the paper format. It was a good way to check my preparation." },
  { initials: "YA", name: "Yash Agarwal", score: 93.8, year: "2026", stream: "Science", quote: "I wasn't very confident in Maths initially. Solving chapter-wise tests and then full-length papers helped me practise regularly. I also got better at identifying the topics I needed to revise." },
];

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
