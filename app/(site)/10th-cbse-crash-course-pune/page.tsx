'use client';

import Link from 'next/link';
import { Brain, Clock, FlaskConical, Rocket, Target, Users } from 'lucide-react';
import CrashCourseTemplate, { type CrashCourseConfig } from '@/components/crash-course/CrashCourseTemplate';

const FAQS = [
  {
    question: 'Who is this crash course actually for?',
    answer:
      "CBSE Class 10 students who have covered most of their Maths and Science syllabus in school and need focused, board-pattern practice before the Feb-March 2027 exams — not a first introduction to the topics. If entire chapters are still untaught, we'll say so upfront and suggest starting with regular classes first.",
  },
  {
    question: 'Does this cover both Maths and Science, or do I pick one?',
    answer: "Both — Maths and Science run as parallel tracks within the same batch structure. Dilip Sir leads Maths and the Physics and Chemistry sections of Science, and Dr. Todkar leads the Biology section, so a student can join for one subject or both depending on where the gaps actually are.",
  },
  {
    question: "What does CBSE's new two-exam system for Class 10 mean for this course?",
    answer: "CBSE has indicated a two-exam structure for Class 10 in 2026-27 — the main exams in February-March, with an optional second exam in May for students who want to improve a score. This crash course is built around the main February-March exams first, and we stay with students through the May re-exam if they choose to sit it — the exact CBSE policy should still be confirmed on the official notification once released.",
  },
  {
    question: 'Is this online, offline, or both?',
    answer: 'Sessions run from our Amanora, Pune centre, with a live online option for students who prefer not to commute — both formats get the same content, faculty and test schedule.',
  },
  {
    question: 'How is this different from regular school tuition?',
    answer: "Regular tuition paces through the syllabus; this is a compressed, weightage-first sprint that assumes the syllabus is mostly done and focuses purely on the chapters CBSE actually weights heavily, under real exam-paper time pressure, with every mock reviewed personally.",
  },
  {
    question: "What if my child hasn't finished the syllabus yet?",
    answer: "Tell us during the enrollment call — we'll either recommend a later batch or pair the crash course with a few one-on-one sessions on specific weak chapters first, so the group sessions aren't spent on material that hasn't been taught yet.",
  },
];

const WHY_ITEMS = [
  {
    icon: Brain,
    title: 'Led by Dilip Sir, Biology by Dr. Todkar',
    description: 'Maths, Physics and Chemistry led personally by Dilip Sir (B.Tech, IIT Kanpur, JEE AIR 400, 25+ years mentoring), with the Biology section led by Dr. Todkar, a practicing General Physician.',
  },
  {
    icon: Clock,
    title: 'Built for the Feb-March 2027 Window',
    description: 'CBSE Class 10 board exams are expected in February-March 2027. This sprint is sequenced to finish well before that window opens.',
  },
  {
    icon: Users,
    title: 'Capped at 12 Students',
    description: 'Every mock is reviewed chapter-by-chapter with the whole batch, so weak areas get named and fixed, not just scored.',
  },
  {
    icon: Target,
    title: 'Weightage-First Triage',
    description: "Limited weeks mean we start from CBSE's actual high-weightage chapters, not a page-by-page reread of the NCERT textbook.",
  },
  {
    icon: FlaskConical,
    title: 'Carried Through the May Re-Exam',
    description: "If CBSE's optional Class 10 second exam in May applies to your child, this batch stays with them for a focused refresher before that attempt too.",
  },
  {
    icon: Rocket,
    title: 'Board-Pattern Mocks Every Week',
    description: 'Full-length CBSE-pattern papers under real time pressure from week one, not just chapter-end tests.',
  },
];

const CURRICULUM_ITEMS = [
  {
    subject: 'Mathematics — Dilip Sir',
    focus: 'High-weightage chapters (Algebra, Geometry, Trigonometry, Mensuration, Statistics) drilled for speed and the specific step-marking patterns CBSE rewards.',
  },
  {
    subject: 'Science — Dilip Sir · Biology: Dr. Todkar',
    focus: "Physics, Chemistry and Biology sections of the combined CBSE Science paper, with NCERT-line accuracy and diagram-labeling practice that CBSE's evaluation specifically rewards.",
  },
  {
    subject: 'Every Week',
    focus: 'One full board-pattern mock per subject, a detailed error-pattern review session, and a short list of exactly what to fix before the next mock.',
  },
];

const PLAN_PHASES = [
  {
    phase: 'Weeks 1-2: Diagnostic & Triage',
    focus: "A full-syllabus diagnostic paper in both subjects identifies exactly which chapters are weak, then the schedule is built around CBSE's actual weightage.",
  },
  {
    phase: 'Weeks 3-5: High-Weightage Drilling',
    focus: 'Daily/alternate-day sessions target the chapters carrying the most marks, with step-marking practice for Maths and NCERT-line accuracy drills for Science.',
  },
  {
    phase: 'Weeks 6-8: Full Mocks & Exam Strategy',
    focus: 'Weekly full-length board-pattern papers under real time limits, plus a session on time allocation and presentation for the actual exam.',
  },
  {
    phase: 'Feb – May 2027: Through Boards, and the Re-Exam If Needed',
    focus: 'Final revision support runs into the exam window itself, and the batch regroups for a focused refresher if a student sits the optional May second exam.',
  },
];

const SUITABLE = [
  'CBSE Class 10 students who have covered most of their Maths and/or Science syllabus already',
  'Students who want board-pattern practice and speed, not a first pass through the syllabus',
  'Families who want small-batch, faculty-reviewed mocks instead of self-scored practice',
  'Students planning to use the February-March exam as their main attempt, with May as backup if needed',
];

const NOT_SUITABLE = [
  "Students who haven't yet completed the bulk of their Maths or Science syllabus in school",
  'Anyone looking for a first introduction to core Maths or Science concepts',
  'Families wanting year-round tuition rather than a focused pre-board sprint',
];

const CONFIG: CrashCourseConfig = {
  chips: [
    { label: '⏱ 2026-27 Crash Course', tone: 'blue' },
    { label: '💻 Online Available', tone: 'green' },
  ],
  h1: <>10th CBSE <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Maths &amp; Science</span> Crash Course</>,
  subtitle: 'Feb-March 2027 Board Exams · Class 10 CBSE',
  ledBy: <>Led by <span className="whitespace-nowrap font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> · Biology by <span className="whitespace-nowrap font-bold text-blue-600">Dr. Todkar</span></>,
  intro: 'High-weightage chapter triage, weekly board-pattern mocks, and support carried through to the optional May re-exam if you need it.',
  ctaLabel: 'Check Batch Dates & Seats',
  heroNote: <>Looking for MHT CET or ICSE instead? See our{' '}<Link prefetch={false} href="/mht-cet-crash-course-pune" className="text-blue-600! underline!">MHT CET Crash Course</Link>{' '}or{' '}<Link prefetch={false} href="/10th-icse-crash-course-pune" className="text-blue-600! underline!">10th ICSE Crash Course</Link>.</>,
  stats: [
    { value: '8 Weeks', label: 'Sprint batch', sub: 'Finishes well ahead of Feb-March board exams' },
    { value: 'Max 12 Students', label: 'Per Batch', sub: 'Every mock reviewed personally by Dilip Sir & Dr. Todkar', featured: true },
    { value: 'Maths & Science', label: 'Both covered', sub: 'Weekly full-length CBSE-pattern mocks', tone: 'purple' },
  ],
  shortStats: [
    { value: '8 weeks', label: 'sprint batch' },
    { value: '12 max', label: 'students per batch' },
    { value: 'Maths + Sci', label: 'both covered' },
  ],
  why: {
    heading: 'Why This Crash Course, and Why Now',
    subheading: 'A focused pre-board sprint, not a generic revision class squeezed into whatever time is left.',
    items: WHY_ITEMS,
  },
  curriculum: {
    heading: 'What Gets Covered',
    subheading: 'A weightage-first sprint, not a page-by-page reread',
    items: CURRICULUM_ITEMS,
  },
  plan: {
    heading: 'The Sprint, Then Support Through the Exams',
    subheading: 'An 8-week sprint into the February-March window, carried through to the optional May re-exam if needed',
    phases: PLAN_PHASES,
  },
  suitable: SUITABLE,
  notSuitable: NOT_SUITABLE,
  notSuitableFooter: <>Looking for a full year-round Foundation program instead? See our{' '}<Link prefetch={false} href="/foundation" className="underline! text-white! font-semibold">Foundation program</Link>.</>,
  faqs: FAQS,
  seats: {
    heading: '⏳ Limited Seats — One Enrollment, Both Exam Windows',
    body: <>Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so every mock gets reviewed personally — enrollment closes once the batch is full or the sprint window starts, whichever comes first.</>,
    button: 'Reserve Your Seat',
  },
  finalCta: {
    heading: 'Boards Start February. Weeks Matter Now.',
    body: 'Talk to us directly about whether the crash course fits where your child\'s syllabus stands today.',
    button: 'Talk to Us Today',
  },
  modal: { title: 'Join the 10th CBSE Crash Course 🎯', subtitle: 'Check current batch dates and remaining seats' },
};

export default function TenthCbseCrashCoursePage() {
  return <CrashCourseTemplate config={CONFIG} />;
}
