import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import { DEFAULT_GROUPS } from "@/components/test-series/PricingSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";
import type { TopScorer, ScorerGroup } from "@/components/test-series/ResultsShowcase";

export const heroContent = {
  breadcrumbLabel: "Maharashtra Board Test Series",
  badge: "MAHARASHTRA STATE BOARD  |  SSC & HSC  |  HSC RESULTS 2026  |  BOARDS 2027",
  description:
    "The BuzzyBrains Maharashtra Board Test Series puts SSC (Class 10) and HSC (Class 12) students through full-length papers set to the exact MSBSHSE blueprint — including separate Algebra, Geometry and Science papers — then hands back a marked, examiner-annotated scorecard within 72 hours.",
  mockSubject: "Algebra · SSC Class X",
};

export const hscScorers: TopScorer[] = [
  { initials: "SP", name: "Sakshi Patil", score: 98.2, year: "2026", stream: "Science", quote: "I was looking for more practice before my HSC exams, especially in Physics and Chemistry. The chapter-wise tests helped me revise regularly, and the full-length papers gave me a better idea of the actual exam pattern." },
  { initials: "OD", name: "Om Deshmukh", score: 95.6, year: "2026", stream: "Science", quote: "Maths needed a lot of practice for me. I liked the variety of questions in the test series. Going through the solutions after every test helped me understand my mistakes and improve my accuracy." },
  { initials: "RK", name: "Rutuja Kulkarni", score: 99.0, year: "2026", stream: "Commerce", quote: "The regular tests helped me stay consistent with my preparation. I especially found the subject-wise practice useful because I could focus on chapters where I wasn't fully confident." },
  { initials: "AJ", name: "Atharva Joshi", score: 94.8, year: "2026", stream: "Science", quote: "I used to struggle with completing lengthy papers on time. Attempting timed mock tests helped me improve my writing speed and manage the paper better. The practice was really useful before boards." },
  { initials: "NS", name: "Neha Shah", score: 97.4, year: "2026", stream: "Commerce", quote: "I found the Accountancy and Economics tests very helpful. Regular practice made me more comfortable with solving questions independently. It also helped me identify small mistakes before the final exams." },
  { initials: "PM", name: "Pranav More", score: 93.6, year: "2026", stream: "Science", quote: "I joined mainly because I needed a proper study routine. Having regular tests gave me a reason to revise every week. The detailed solutions were also helpful whenever I got stuck on a question." },
];

export const scorerGroups: ScorerGroup[] = [{ label: "Class 12", board: "Maharashtra HSC", scorers: hscScorers }];

const avgAll = hscScorers.reduce((t, x) => t + x.score, 0) / hscScorers.length;

export const heroStats = [
  { value: `${Math.max(...hscScorers.map((x) => x.score)).toFixed(1)}%`, label: "Top HSC score, Boards 2026" },
  { value: `${avgAll.toFixed(1)}%`, label: `Average of ${hscScorers.length} featured students` },
  { value: "8", label: "Full-length papers per subject" },
];

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
