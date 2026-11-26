import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import { DEFAULT_GROUPS } from "@/components/test-series/PricingSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";
import type { HeroMockRow } from "@/components/test-series/Hero";
import type { TopScorer, ScorerGroup } from "@/components/test-series/ResultsShowcase";

export const heroContent = {
  breadcrumbLabel: "ICSE Board Test Series",
  badge: "ICSE · ISC  |  GRADE 10 & 12 RESULTS  |  BOARDS 2027",
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

export const class10Scorers: TopScorer[] = [
  { initials: "RM", name: "Riya Malhotra", score: 98.4, year: "2026", stream: "Class 10", quote: "ICSE papers can be quite lengthy, so I wanted to improve my writing speed. The full-length mock tests helped me manage time better and get used to writing answers within the exam duration." },
  { initials: "AM", name: "Arjun Mehta", score: 96.8, year: "2026", stream: "Class 10", quote: "I found the chapter-wise tests very useful, especially for Physics and Chemistry. The questions helped me check whether I actually understood the concepts instead of just memorising them." },
  { initials: "AK", name: "Aanya Kapoor", score: 99.0, year: "2026", stream: "Class 10", quote: "The best part was getting enough practice with different question formats. I especially liked the detailed solutions because they helped me understand how to frame answers properly." },
  { initials: "VS", name: "Vivaan Shah", score: 95.6, year: "2026", stream: "Class 10", quote: "I used to struggle with Mathematics, particularly application-based questions. Practising regularly through the test series helped me improve my problem-solving speed and accuracy." },
  { initials: "DA", name: "Diya Agarwal", score: 97.2, year: "2026", stream: "Class 10", quote: "History and Geography have a lot to remember, and I sometimes got confused while preparing. The regular tests helped me revise important topics and remember concepts better." },
  { initials: "RG", name: "Reyansh Gupta", score: 93.8, year: "2026", stream: "Class 10", quote: "I joined mainly for extra practice before boards. The English language and literature tests were particularly helpful. I became more comfortable with writing answers and managing my time." },
];

export const class12Scorers: TopScorer[] = [
  { initials: "AM", name: "Aarushi Mehta", score: 98.6, year: "2026", stream: "Science", quote: "The mock tests helped me get comfortable with the ISC paper pattern. I especially liked practising full-length papers because ISC answers can be quite detailed. It really helped with my time management." },
  { initials: "AK", name: "Aditya Khanna", score: 96.2, year: "2026", stream: "Science", quote: "Physics numericals were something I struggled with initially. The chapter-wise tests gave me enough practice and helped me understand where I was going wrong. The solutions were quite helpful." },
  { initials: "IA", name: "Ishita Agarwal", score: 99.0, year: "2026", stream: "Commerce", quote: "I joined mainly for additional practice before boards. The quality of questions was good, and attempting tests regularly helped me stay disciplined. It was also useful for identifying small mistakes before the final exams." },
  { initials: "RM", name: "Rohan Malhotra", score: 95.8, year: "2026", stream: "Commerce", quote: "Accounts and Economics needed a lot of practice for me. The tests helped me improve my presentation and accuracy. I also got better at completing lengthy papers within the given time." },
  { initials: "SK", name: "Sanya Kapoor", score: 97.4, year: "2026", stream: "Humanities", quote: "What I liked most was the detailed practice for different subjects. English Literature especially requires proper understanding and answer writing. Regular tests helped me structure my answers better." },
  { initials: "KS", name: "Karan Shah", score: 93.6, year: "2026", stream: "Science", quote: "I wasn't very confident about Chemistry initially. Solving chapter-wise questions and attempting mock papers helped me revise important concepts. The test series gave me a proper routine for board preparation." },
];

export const scorerGroups: ScorerGroup[] = [
  { label: "Class 10", board: "ICSE", scorers: class10Scorers },
  { label: "Class 12", board: "ISC", scorers: class12Scorers },
];

const allScorers = [...class10Scorers, ...class12Scorers];
const avgAll = allScorers.reduce((t, x) => t + x.score, 0) / allScorers.length;

export const heroStats = [
  { value: `${Math.max(...allScorers.map((x) => x.score)).toFixed(1)}%`, label: "Top score, Boards 2026" },
  { value: `${avgAll.toFixed(1)}%`, label: `Average of ${allScorers.length} featured students` },
  { value: "8", label: "Full-length papers per subject" },
];

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
