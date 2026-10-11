export type BatchMode = 'Online' | 'Offline';
export type CategoryId = 'a-level' | 'olympiad' | 'sat' | 'foundation';

export interface Category {
  id: CategoryId;
  label: string;
  short: string;
  blurb: string;
  accent: string;
}

export const CATEGORIES: Category[] = [
  { id: 'a-level', label: 'A Level & Further Maths', short: 'A Level', blurb: 'AS, A Level and Further Maths options', accent: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { id: 'olympiad', label: 'Olympiads & Competitions', short: 'Olympiads', blurb: 'F=ma, IOQM 2027, AMC 8, AMC 10', accent: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { id: 'sat', label: 'SAT', short: 'SAT', blurb: 'Digital SAT, Reading & Writing and Math', accent: 'linear-gradient(135deg,#B45309,#F59E0B)' },
  { id: 'foundation', label: 'Foundation (Offline)', short: 'Foundation', blurb: 'In-person, Grades 7, 8 and 9', accent: 'linear-gradient(135deg,#065F46,#10B981)' },
];

export interface Batch {
  id: string;
  name: string;
  category: CategoryId;
  mode: BatchMode;
  /** Optional ribbon, e.g. the exam cycle */
  tag?: string;
  audience: string;
  /** Grades this batch suits, used by the "my grade" filter */
  grades: number[];
  summary: string;
  topics: string[];
  href: string;
  linkLabel: string;
}

export const INSTRUCTOR = {
  name: 'Dilip Sah',
  credentials: 'B.Tech, IIT Kanpur · JEE Rank 400',
  role: 'Founder & Lead Mentor, BuzzyBrains Academy',
  profileHref: '/faculty',
} as const;

export const QUICK_ANSWER =
  "BuzzyBrains Academy is currently enrolling online batches for AS Level Maths, A Level Maths, Further Maths, Further Mechanics, Further Probability & Statistics, SAT, Physics Olympiad (F=ma), IOQM 2027, AMC 8 and AMC 10, and offline (in-person) Foundation batches for Grades 7, 8 and 9 in Pune. All batches are led by Dilip Sah (B.Tech, IIT Kanpur, JEE Rank 400) and capped at 12 students. A free demo class is available for every batch.";

const A_LEVEL_HREF = '/international-boards#a-level';
const FOUNDATION_TOPICS = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];
const FOUNDATION_SUMMARY = 'Concept-first learning across Mathematics, Physics, Chemistry and Biology, in small in-person batches.';

export const BATCHES: Batch[] = [
  {
    id: 'as-level-maths', name: 'AS Level Maths', category: 'a-level', mode: 'Online',
    audience: 'Year 12 · Cambridge International & Edexcel', grades: [11],
    summary: 'The first year of A Level Mathematics, built concept-first so the foundations hold for Year 13.',
    topics: ['Pure Mathematics', 'Mechanics', 'Probability & Statistics'],
    href: A_LEVEL_HREF, linkLabel: 'About A Level coaching',
  },
  {
    id: 'a-level-maths', name: 'A Level Maths', category: 'a-level', mode: 'Online',
    audience: 'Year 13 · Cambridge International & Edexcel', grades: [12],
    summary: 'The full A Level course with exam-style practice and timed papers in the final stretch.',
    topics: ['Advanced Pure Mathematics', 'Mechanics', 'Probability & Statistics'],
    href: A_LEVEL_HREF, linkLabel: 'About A Level coaching',
  },
  {
    id: 'further-maths', name: 'Further Maths', category: 'a-level', mode: 'Online',
    audience: 'AS / A Level · for students taking Further Mathematics', grades: [11, 12],
    summary: 'Further Pure Mathematics beyond the core A Level, for students aiming at top universities.',
    topics: ['Further Pure Mathematics', 'Proof and problem solving', 'Exam technique'],
    href: A_LEVEL_HREF, linkLabel: 'About A Level coaching',
  },
  {
    id: 'further-mechanics', name: 'Further Mechanics', category: 'a-level', mode: 'Online',
    audience: 'Further Maths students', grades: [11, 12],
    summary: 'The Mechanics option of Further Maths, taught as a dedicated batch.',
    topics: ['Advanced Mechanics topics', 'Modelling', 'Exam-style problems'],
    href: A_LEVEL_HREF, linkLabel: 'About A Level coaching',
  },
  {
    id: 'further-prob-stats', name: 'Further Probability & Statistics', category: 'a-level', mode: 'Online',
    audience: 'Further Maths students', grades: [11, 12],
    summary: 'The Probability and Statistics option of Further Maths, taught as a dedicated batch.',
    topics: ['Advanced Probability', 'Distributions and hypothesis testing', 'Exam-style problems'],
    href: A_LEVEL_HREF, linkLabel: 'About A Level coaching',
  },
  {
    id: 'physics-olympiad-fma', name: 'Physics Olympiad: F=ma', category: 'olympiad', mode: 'Online',
    audience: 'High-school students · F=ma / USAPhO pathway', grades: [9, 10, 11, 12],
    summary: 'Mechanics-first problem solving for the F=ma contest, with past papers sorted by technique and timed MCQ mocks.',
    topics: ['Mechanics problem solving', 'Past F=ma papers', 'Timed MCQ mock tests'],
    href: '/physics-olympiad-coaching-pune', linkLabel: 'About Physics Olympiad coaching',
  },
  {
    id: 'ioqm-2027', name: 'IOQM 2027 Batch', category: 'olympiad', mode: 'Online', tag: '2027 batch',
    audience: 'Grades 8–12 · IOQM → RMO → INMO pathway', grades: [8, 9, 10, 11, 12],
    summary: "Preparation for India's maths olympiad pathway, from IOQM through RMO and INMO, in batches capped at 12.",
    topics: ['Number Theory and Algebra', 'Combinatorics and Geometry', 'Timed mock papers'],
    href: '/ioqm-coaching-pune', linkLabel: 'About IOQM coaching',
  },
  {
    id: 'amc-8', name: 'AMC 8 Batch', category: 'olympiad', mode: 'Online',
    audience: 'Grade 8 and below · AMC 8', grades: [6, 7, 8],
    summary: 'Multiple-choice competition maths for younger students: reasoning, pacing and problem-solving habits.',
    topics: ['Competition problem solving', 'Pacing and accuracy', 'Past AMC 8 papers'],
    href: '/amc-8-10-coaching-pune', linkLabel: 'About AMC 8 & 10 coaching',
  },
  {
    id: 'amc-10', name: 'AMC 10 Batch', category: 'olympiad', mode: 'Online',
    audience: 'Grade 10 and below · AMC 10', grades: [8, 9, 10],
    summary: 'AMC 10 preparation with scoring strategy for the 75-minute, 25-question paper and the road to AIME.',
    topics: ['Scoring strategy (6 / 1.5 / 0)', 'Timed full papers', 'Path to AIME'],
    href: '/amc-8-10-coaching-pune', linkLabel: 'About AMC 8 & 10 coaching',
  },
  {
    id: 'sat', name: 'SAT', category: 'sat', mode: 'Online',
    audience: 'Grades 10–12 · Digital SAT', grades: [10, 11, 12],
    summary: 'Structured Digital SAT preparation with section-wise mastery, adaptive-format strategy and timed full-length mocks.',
    topics: ['Reading & Writing', 'Math', 'Full-length mocks'],
    href: '/sat-exam', linkLabel: 'About SAT prep',
  },
  {
    id: 'foundation-7', name: 'Foundation · Grade 7', category: 'foundation', mode: 'Offline',
    audience: 'Grade 7 · in person at our Pune centers', grades: [7],
    summary: FOUNDATION_SUMMARY, topics: FOUNDATION_TOPICS,
    href: '/foundation', linkLabel: 'About the Foundation program',
  },
  {
    id: 'foundation-8', name: 'Foundation · Grade 8', category: 'foundation', mode: 'Offline',
    audience: 'Grade 8 · in person at our Pune centers', grades: [8],
    summary: FOUNDATION_SUMMARY, topics: FOUNDATION_TOPICS,
    href: '/foundation', linkLabel: 'About the Foundation program',
  },
  {
    id: 'foundation-9', name: 'Foundation · Grade 9', category: 'foundation', mode: 'Offline',
    audience: 'Grade 9 · in person at our Pune centers', grades: [9],
    summary: FOUNDATION_SUMMARY, topics: FOUNDATION_TOPICS,
    href: '/foundation', linkLabel: 'About the Foundation program',
  },
];

export const GRADE_OPTIONS = [6, 7, 8, 9, 10, 11, 12];

export const BATCH_FAQS = [
  {
    question: 'Which batches are open at BuzzyBrains Academy right now?',
    answer:
      'We are enrolling online batches for AS Level Maths, A Level Maths, Further Maths, Further Mechanics, Further Probability & Statistics, SAT, Physics Olympiad (F=ma), IOQM 2027, AMC 8 and AMC 10, and offline Foundation batches for Grades 7, 8 and 9 in Pune.',
  },
  {
    question: 'Who teaches these batches?',
    answer:
      'The batches are taught by Dilip Sah, who holds a B.Tech from IIT Kanpur and secured a JEE Rank of 400. He is the founder and lead mentor of BuzzyBrains Academy.',
  },
  {
    question: 'Which batches are online and which are offline?',
    answer:
      'The Foundation batches for Grades 7, 8 and 9 run offline, in person at our Pune centers. All other batches, including A Level, Further Maths, SAT and the olympiad batches, run online.',
  },
  {
    question: 'Do you offer online A Level and Further Maths classes for students outside Pune?',
    answer:
      'Yes. The A Level and Further Maths batches are online, so students can join from anywhere in India or abroad. They suit students following Cambridge International or Edexcel A Level.',
  },
  {
    question: 'What is the difference between AS Level, A Level and Further Maths?',
    answer:
      'AS Level Maths is the first year (Year 12) and A Level Maths is the full two-year course (Year 13 completes it). Further Maths is an additional qualification for strong students, with options such as Further Mechanics and Further Probability & Statistics.',
  },
  {
    question: 'Which batch is right for my child\'s grade?',
    answer:
      'Use the grade filter on this page. Grades 6–8 can look at AMC 8 and Foundation, Grades 8–10 at AMC 10 and IOQM, Grades 9–12 at the F=ma Physics Olympiad, Grades 10–12 at the SAT, and Grades 11–12 at A Level and Further Maths.',
  },
  {
    question: 'Is there an IOQM 2027 batch, and who is it for?',
    answer:
      'Yes. The IOQM 2027 batch is for students in Grades 8–12 preparing for the IOQM, RMO and INMO pathway, in a small batch capped at 12 students.',
  },
  {
    question: 'Do you coach for AMC 8 and AMC 10?',
    answer:
      'Yes. We run separate AMC 8 and AMC 10 batches with timed practice papers and scoring strategy. AMC 10 students also prepare for the road to AIME.',
  },
  {
    question: 'Do you coach for the F=ma Physics Olympiad?',
    answer:
      'Yes. The F=ma batch is mechanics-first, with past papers sorted by technique and timed MCQ mock tests in the exam format.',
  },
  {
    question: 'Which grades is the offline Foundation program for?',
    answer:
      'Offline Foundation batches are available for Grades 7, 8 and 9. They build concept-first understanding of Mathematics, Physics, Chemistry and Biology in small batches.',
  },
  {
    question: 'How do I get the start dates, timings and fees for a batch?',
    answer:
      'Message us on WhatsApp or call +91 98505 70525 and tell us which batch you are interested in. We will share the current schedule, timings and fees, and tell you whether seats are open.',
  },
  {
    question: 'How big are the batches?',
    answer:
      'We keep batches small, capped at 12 students, so every student gets individual attention from the mentor.',
  },
  {
    question: 'Can I try a class before joining?',
    answer:
      'Yes. Ask for a free demo class when you enquire, and our team will arrange a slot so you can meet the mentor and see the teaching style first.',
  },
];

export const FACTS_TABLE = {
  headers: ['Batch', 'Mode', 'Suits', 'Instructor'],
  get rows() {
    return BATCHES.map((b) => [b.name, b.mode === 'Offline' ? 'Offline (Pune)' : 'Online', b.audience, INSTRUCTOR.name]);
  },
};
