export type BatchMode = 'Online' | 'Offline';
export type BatchGroup = 'A Level & Further Maths' | 'SAT' | 'Foundation';

export interface Batch {
  id: string;
  name: string;
  group: BatchGroup;
  mode: BatchMode;
  audience: string;
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
  "BuzzyBrains Academy is currently enrolling online batches for AS Level Maths, A Level Maths, Further Maths, Further Mechanics, Further Probability & Statistics and SAT, and offline (in-person) Foundation batches for Grades 7, 8 and 9 in Pune. All batches are taught by Dilip Sah (B.Tech, IIT Kanpur, JEE Rank 400) and capped at 12 students.";

export const FACTS_TABLE = {
  headers: ['Batch', 'Mode', 'Level', 'Instructor'],
  rows: [
    ['AS Level Maths', 'Online', 'Year 12', 'Dilip Sah'],
    ['A Level Maths', 'Online', 'Year 13', 'Dilip Sah'],
    ['Further Maths', 'Online', 'AS / A Level', 'Dilip Sah'],
    ['Further Mechanics', 'Online', 'Further Maths option', 'Dilip Sah'],
    ['Further Probability & Statistics', 'Online', 'Further Maths option', 'Dilip Sah'],
    ['SAT', 'Online', 'Grades 10–12', 'Dilip Sah'],
    ['Foundation Grade 7', 'Offline (Pune)', 'Grade 7', 'Dilip Sah'],
    ['Foundation Grade 8', 'Offline (Pune)', 'Grade 8', 'Dilip Sah'],
    ['Foundation Grade 9', 'Offline (Pune)', 'Grade 9', 'Dilip Sah'],
  ],
};

const A_LEVEL_HREF = '/international-boards#a-level';

export const BATCHES: Batch[] = [
  {
    id: 'as-level-maths',
    name: 'AS Level Maths',
    group: 'A Level & Further Maths',
    mode: 'Online',
    audience: 'Year 12 · Cambridge International & Edexcel',
    summary: 'The first year of A Level Mathematics, built concept-first so the foundations hold for Year 13.',
    topics: ['Pure Mathematics', 'Mechanics', 'Probability & Statistics'],
    href: A_LEVEL_HREF,
    linkLabel: 'About A Level coaching',
  },
  {
    id: 'a-level-maths',
    name: 'A Level Maths',
    group: 'A Level & Further Maths',
    mode: 'Online',
    audience: 'Year 13 · Cambridge International & Edexcel',
    summary: 'The full A Level course with exam-style practice and timed papers in the final stretch.',
    topics: ['Advanced Pure Mathematics', 'Mechanics', 'Probability & Statistics'],
    href: A_LEVEL_HREF,
    linkLabel: 'About A Level coaching',
  },
  {
    id: 'further-maths',
    name: 'Further Maths',
    group: 'A Level & Further Maths',
    mode: 'Online',
    audience: 'AS / A Level · for students taking Further Mathematics',
    summary: 'Further Pure Mathematics beyond the core A Level, for students aiming at top universities.',
    topics: ['Further Pure Mathematics', 'Proof and problem solving', 'Exam technique'],
    href: A_LEVEL_HREF,
    linkLabel: 'About A Level coaching',
  },
  {
    id: 'further-mechanics',
    name: 'Further Mechanics',
    group: 'A Level & Further Maths',
    mode: 'Online',
    audience: 'Further Maths students',
    summary: 'The Mechanics option of Further Maths, taught as a dedicated batch.',
    topics: ['Advanced Mechanics topics', 'Modelling', 'Exam-style problems'],
    href: A_LEVEL_HREF,
    linkLabel: 'About A Level coaching',
  },
  {
    id: 'further-prob-stats',
    name: 'Further Probability & Statistics',
    group: 'A Level & Further Maths',
    mode: 'Online',
    audience: 'Further Maths students',
    summary: 'The Probability and Statistics option of Further Maths, taught as a dedicated batch.',
    topics: ['Advanced Probability', 'Distributions and hypothesis testing', 'Exam-style problems'],
    href: A_LEVEL_HREF,
    linkLabel: 'About A Level coaching',
  },
  {
    id: 'sat',
    name: 'SAT',
    group: 'SAT',
    mode: 'Online',
    audience: 'Grades 10–12 · Digital SAT',
    summary: 'Structured Digital SAT preparation with section-wise mastery, adaptive-format strategy and timed full-length mocks.',
    topics: ['Reading & Writing', 'Math', 'Full-length mocks'],
    href: '/sat-exam',
    linkLabel: 'About SAT prep',
  },
  {
    id: 'foundation-7',
    name: 'Foundation · Grade 7',
    group: 'Foundation',
    mode: 'Offline',
    audience: 'Grade 7 · in-person at our Pune centers',
    summary: 'Concept-first learning across Mathematics, Physics, Chemistry and Biology in small batches.',
    topics: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    href: '/foundation',
    linkLabel: 'About the Foundation program',
  },
  {
    id: 'foundation-8',
    name: 'Foundation · Grade 8',
    group: 'Foundation',
    mode: 'Offline',
    audience: 'Grade 8 · in-person at our Pune centers',
    summary: 'Concept-first learning across Mathematics, Physics, Chemistry and Biology in small batches.',
    topics: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    href: '/foundation',
    linkLabel: 'About the Foundation program',
  },
  {
    id: 'foundation-9',
    name: 'Foundation · Grade 9',
    group: 'Foundation',
    mode: 'Offline',
    audience: 'Grade 9 · in-person at our Pune centers',
    summary: 'Concept-first learning across Mathematics, Physics, Chemistry and Biology in small batches.',
    topics: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    href: '/foundation',
    linkLabel: 'About the Foundation program',
  },
];

export const BATCH_FAQS = [
  {
    question: 'Which batches are open at BuzzyBrains Academy right now?',
    answer:
      'We are enrolling online batches for AS Level Maths, A Level Maths, Further Maths, Further Mechanics, Further Probability & Statistics and SAT, and offline Foundation batches for Grades 7, 8 and 9 in Pune.',
  },
  {
    question: 'Who teaches these batches?',
    answer:
      'The batches are taught by Dilip Sah, who holds a B.Tech from IIT Kanpur and secured a JEE Rank of 400. He is the founder and lead mentor of BuzzyBrains Academy.',
  },
  {
    question: 'Which batches are online and which are offline?',
    answer:
      'The Foundation batches for Grades 7, 8 and 9 run offline, in person at our Pune centers. AS Level Maths, A Level Maths, Further Maths, Further Mechanics, Further Probability & Statistics and SAT run online.',
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
