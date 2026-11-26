import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";
import type { TopScorer, ScorerGroup } from "@/components/test-series/ResultsShowcase";

export const heroContent = {
  breadcrumbLabel: "IB Test Series",
  badge: "IB DIPLOMA PROGRAMME  |  RESULTS 2026  |  BOARDS 2027",
  description:
    "The BuzzyBrains IB Test Series puts DP1 & DP2 students through full-length Paper 1/2/3 mock exams, marked against IB's own criterion-based grade descriptors (1-7 scale) — plus dedicated Internal Assessment, Extended Essay and TOK review, so you know precisely where your predicted grade actually stands.",
  mockLabel: "BUZZYBRAINS ACADEMY — MOCK IB PAPER",
  mockSubject: "Mathematics AA HL · IB DP2",
};

/** `score` is points as a share of 45 (used only for ranking and the bar);
 * the card itself shows the student's actual points. */
export const ibScorers: TopScorer[] = [
  { initials: "AM", photo: "/images/students/aanya-mehta-ib.webp", name: "Aanya Mehta", score: 97.8, headline: "44/45 Points", caption: "IB Diploma", year: "2026", stream: "IB DP", quote: "The practice tests helped me manage my preparation across different subjects. I particularly liked the structured questions and detailed feedback. It helped me understand where I was losing marks and how to improve my answers." },
  { initials: "RK", photo: "/images/students/rohan-kapoor.webp", name: "Rohan Kapoor", score: 93.3, headline: "42/45 Points", caption: "IB Diploma", year: "2026", stream: "IB DP", quote: "IB exams require more than just memorising concepts. I found the application-based questions particularly useful. The regular practice helped me develop better analytical and problem-solving skills." },
  { initials: "ST", photo: "/images/students/sarah-thomas-ib.webp", name: "Sarah Thomas", score: 100.0, headline: "45/45 Points", caption: "IB Diploma", year: "2026", stream: "IB DP", quote: "I liked how the tests helped me understand the expectations of IB-style assessments. The detailed solutions and feedback made revision more focused, especially for subjects where answer structure matters." },
  { initials: "AS", photo: "/images/students/arjun-shah-ib.webp", name: "Arjun Shah", score: 91.1, headline: "41/45 Points", caption: "IB Diploma", year: "2026", stream: "IB DP", quote: "I initially struggled with some of the longer application-based questions. Practising regularly helped me understand how to approach them and explain my reasoning more clearly." },
  { initials: "DM", photo: "/images/students/diya-malhotra-ib.webp", name: "Diya Malhotra", score: 95.6, headline: "43/45 Points", caption: "IB Diploma", year: "2026", stream: "IB DP", quote: "The subject-wise practice was really helpful. I could focus on weaker topics instead of spending the same amount of time on everything. It made my final revision much more organised." },
  { initials: "ZA", photo: "/images/students/zara-ali-ib.webp", name: "Zara Ali", score: 97.8, headline: "44/45 Points", caption: "IB Diploma", year: "2026", stream: "IB DP", quote: "IB is unique. The platform adapted perfectly to the IB learner profile, offering exceptional resources for Theory of Knowledge and Extended Essay, beyond just subject content." },
  { initials: "KV", photo: "/images/students/kabir-verma-ib.webp", name: "Kabir Verma", score: 88.9, headline: "40/45 Points", caption: "IB Diploma", year: "2026", stream: "IB DP", quote: "What I found most useful was the practice with IB-style questions. It helped me get better at analysing information, applying concepts and writing answers with more clarity." },
];

export const scorerGroups: ScorerGroup[] = [
  {
    label: "IB Diploma",
    board: "Programme",
    topLabel: "TOP SCORE",
    scorers: ibScorers,
    stats: [
      { value: `${Math.max(...ibScorers.map((x) => Math.round((x.score / 100) * 45)))}/45`, label: "Top score · Sarah Thomas" },
      { value: `${(ibScorers.reduce((t, x) => t + Math.round((x.score / 100) * 45), 0) / ibScorers.length).toFixed(1)}`, label: `Average points of the ${ibScorers.length} featured students` },
      { value: `${ibScorers.filter((x) => Math.round((x.score / 100) * 45) >= 40).length} of ${ibScorers.length}`, label: "Scored 40 points or above" },
      { value: `${ibScorers.filter((x) => Math.round((x.score / 100) * 45) >= 43).length} of ${ibScorers.length}`, label: "Scored 43 points or above" },
    ],
  },
];

const ibPoints = ibScorers.map((x) => Math.round((x.score / 100) * 45));
export const heroStats = [
  { value: `${Math.max(...ibPoints)}/45`, label: "Top IB Diploma score, 2026" },
  { value: `${(ibPoints.reduce((t, x) => t + x, 0) / ibPoints.length).toFixed(1)}`, label: `Average points of ${ibScorers.length} featured students` },
  { value: "8", label: "Full-length papers per subject" },
];

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
