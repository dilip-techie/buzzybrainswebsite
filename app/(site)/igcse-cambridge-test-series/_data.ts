import { DEFAULT_FEATURES } from "@/components/test-series/WhySection";
import { DEFAULT_PAPERS } from "@/components/test-series/StructureSection";
import type { PackGroup, Addon } from "@/components/test-series/PricingSection";
import type { SubjectGrade } from "@/components/test-series/SubjectsSection";
import type { TopScorer, ScorerGroup } from "@/components/test-series/ResultsShowcase";

export const heroContent = {
  breadcrumbLabel: "IGCSE Cambridge Test Series",
  badge: "CAMBRIDGE IGCSE  |  RESULTS 2026  |  BOARDS 2027",
  description:
    "The BuzzyBrains IGCSE Test Series puts Cambridge (and Edexcel) students through full-length mock exams set to your exact component structure — Paper 1/2 and Paper 3/4/6 — then hands back a marked, examiner-annotated scorecard within 72 hours, so you know precisely what to fix before the real thing.",
  mockLabel: "BUZZYBRAINS ACADEMY — MOCK IGCSE PAPER",
  mockSubject: "Mathematics · Cambridge IGCSE",
};

/** `score` is the share of A* grades (used only for ranking and the bar);
 * the card itself shows the student's actual grade count. */
export const igcseScorers: TopScorer[] = [
  { initials: "EW", photo: "/images/students/emma-wilson.webp", name: "Emma Wilson", score: 100.0, headline: "9 A* Grades", caption: "Cambridge IGCSE", year: "2026", stream: "IGCSE", quote: "The practice tests helped me understand how Cambridge questions are structured. I used to lose marks even when I knew the topic, mainly because my answers weren't detailed enough. The solutions and mark schemes helped me improve that." },
  { initials: "AM", name: "Aarav Mehta", score: 77.8, headline: "7 A* Grades, 2 A Grades", caption: "Cambridge IGCSE", year: "2026", stream: "IGCSE", quote: "Maths was one subject where I needed extra practice. The questions were a good mix of straightforward and challenging ones. Attempting timed papers also helped me become faster and more confident." },
  { initials: "SK", name: "Sophia Kapoor", score: 88.9, headline: "8 A* Grades, 1 A Grade", caption: "Cambridge IGCSE", year: "2026", stream: "IGCSE", quote: "I really liked the topic-wise tests. They helped me identify exactly which chapters needed more attention. The detailed explanations were useful, especially when revising difficult concepts." },
  { initials: "RS", name: "Ryan Sharma", score: 66.7, headline: "6 A* Grades, 3 A Grades", caption: "Cambridge IGCSE", year: "2026", stream: "IGCSE", quote: "The best part was the practice with past-paper-style questions. I got better at understanding what the question was actually asking and how to structure my answers according to the mark scheme." },
  { initials: "IT", name: "Isabella Thomas", score: 100.0, headline: "9 A* Grades", caption: "Cambridge IGCSE", year: "2026", stream: "IGCSE", quote: "I used to feel a little stressed about the final exams, but regular mock tests made a difference. I became more comfortable with the exam format and learned to manage my time better." },
  { initials: "KM", name: "Kabir Malhotra", score: 62.5, headline: "5 A* Grades, 3 A Grades", caption: "Cambridge IGCSE", year: "2026", stream: "IGCSE", quote: "I joined mainly to get more exam practice. The questions helped me apply concepts rather than just memorise them. Going through my mistakes after each test was probably the most useful part." },
];

export const scorerGroups: ScorerGroup[] = [
  {
    label: "Cambridge",
    board: "IGCSE",
    topLabel: "TOP RESULT",
    scorers: igcseScorers,
    stats: [
      { value: "9 A*", label: "Best result · 9 A* grades in 2026" },
      { value: "44", label: "A* grades across the 6 featured students" },
      { value: "53 of 53", label: "Grades at A* or A" },
      { value: "3 of 6", label: "Students with 8 or more A*" },
    ],
  },
];

export const heroStats = [
  { value: "9 A*", label: "Best IGCSE result, 2026" },
  { value: "44", label: "A* grades across 6 featured students" },
  { value: "8", label: "Full-length papers per subject" },
];

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
        price: "₹26,999",
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
        price: "₹39,999",
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
        price: "₹50,999",
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
