'use client';

import Link from 'next/link';
import { Brain, Clock, Microscope, Rocket, Target, Users } from 'lucide-react';
import CrashCourseTemplate, { type CrashCourseConfig } from '@/components/crash-course/CrashCourseTemplate';

const FAQS = [
  {
    question: 'Who is this crash course actually for?',
    answer:
      "ICSE Class 10 students who have covered most of their Maths, Physics, Chemistry and Biology syllabus in school and need focused, board-pattern practice before the exams — not a first introduction to the topics. If entire chapters are still untaught in a subject, we'll say so upfront rather than rushing through them.",
  },
  {
    question: 'Do I need to enroll for all four subjects?',
    answer: "No — each subject runs as its own track with its own faculty, so a student can join for just the one or two subjects where they need the most help, or all four if that's what's genuinely needed.",
  },
  {
    question: 'Who teaches each subject?',
    answer: "Mathematics, Physics and Chemistry are led by founder Dilip Sir (B.Tech, IIT Kanpur, JEE AIR 400, 25+ years of mentoring), and Biology is led by Dr. Todkar, a practicing General Physician.",
  },
  {
    question: 'When does the batch run, given ICSE exam timing?',
    answer: "ICSE Class 10 board exams typically run from mid-February through March. This 8-week sprint is timed to finish well before that window, so the final weeks before the exam itself are free for board-specific revision rather than still working through new content.",
  },
  {
    question: 'Is this online, offline, or both?',
    answer: 'Sessions run from our Amanora, Pune centre, with a live online option for students who prefer not to commute — both formats get the same content, faculty and test schedule.',
  },
  {
    question: "What if my child hasn't finished the syllabus yet in one subject?",
    answer: "Tell us during the enrollment call — we'll either recommend a later batch for that subject or pair the crash course with a few one-on-one sessions on the specific weak chapters first, so group sessions aren't spent on material that hasn't been taught yet.",
  },
];

const WHY_ITEMS = [
  {
    icon: Brain,
    title: 'Led by Dilip Sir, Biology by Dr. Todkar',
    description: 'Maths, Physics and Chemistry led personally by Dilip Sir (B.Tech, IIT Kanpur, JEE AIR 400), with Biology led by Dr. Todkar, a practicing General Physician.',
  },
  {
    icon: Clock,
    title: 'Built for the Feb-March Window',
    description: 'ICSE Class 10 exams typically run mid-February through March. This sprint is sequenced to finish well before that window opens.',
  },
  {
    icon: Users,
    title: 'Capped at 12 Students',
    description: 'Every mock is reviewed chapter-by-chapter with the whole batch, so weak areas get named and fixed, not just scored.',
  },
  {
    icon: Target,
    title: 'Weightage-First Triage',
    description: "Limited weeks mean we start from ICSE's actual high-weightage chapters in each subject, not a page-by-page reread of the textbook.",
  },
  {
    icon: Microscope,
    title: 'Four Separate Papers, Four Separate Tracks',
    description: "ICSE splits Physics, Chemistry and Biology into three distinct papers — this course treats them that way too, not as one blended 'Science.'",
  },
  {
    icon: Rocket,
    title: 'Board-Pattern Mocks Every Week',
    description: 'Full-length ICSE-pattern papers under real time pressure from week one, in each subject a student is enrolled for.',
  },
];

const CURRICULUM_ITEMS = [
  {
    subject: 'Mathematics — Dilip Sir',
    focus: 'High-weightage chapters (Algebra, Geometry, Mensuration, Trigonometry, Statistics) drilled for speed and ICSE-specific step-marking.',
  },
  {
    subject: 'Physics — Dilip Sir',
    focus: 'Numerical-heavy chapters and the specific diagram-and-derivation style ICSE Physics papers reward, taught by an IIT Kanpur alumnus with a focus on exam technique.',
  },
  {
    subject: 'Chemistry — Dilip Sir',
    focus: 'Equations, reactions and the precise, structured recall ICSE Chemistry evaluation specifically looks for.',
  },
  {
    subject: 'Biology — Dr. Todkar',
    focus: 'High-yield diagrams, labeling and the detailed, application-style questions ICSE Biology papers are known for.',
  },
];

const PLAN_PHASES = [
  {
    phase: 'Weeks 1-2: Diagnostic & Triage',
    focus: "A full-syllabus diagnostic paper in each enrolled subject identifies exactly which chapters are weak, then the schedule is built around ICSE's actual weightage.",
  },
  {
    phase: 'Weeks 3-5: High-Weightage Drilling',
    focus: 'Daily/alternate-day sessions target the chapters carrying the most marks in each subject, with paper-specific technique practice.',
  },
  {
    phase: 'Weeks 6-8: Full Mocks & Exam Strategy',
    focus: 'Weekly full-length board-pattern papers under real time limits, plus a session on time allocation and presentation for the actual exam.',
  },
];

const SUITABLE = [
  'ICSE Class 10 students who have covered most of their syllabus in one or more of Maths, Physics, Chemistry or Biology',
  'Students who want board-pattern practice and speed, not a first pass through the syllabus',
  'Families who want the founder leading Maths, Physics and Chemistry, with Biology taught by a practicing physician',
  'Students who want each subject drilled separately, matching how ICSE actually papers them',
];

const NOT_SUITABLE = [
  "Students who haven't yet completed the bulk of their syllabus in a given subject",
  'Anyone looking for a first introduction to core concepts in Maths, Physics, Chemistry or Biology',
  'Families wanting year-round tuition rather than a focused pre-board sprint',
];

const CONFIG: CrashCourseConfig = {
  chips: [
    { label: '⏱ 2026-27 Crash Course', tone: 'blue' },
    { label: '💻 Online Available', tone: 'green' },
  ],
  h1: <>10th ICSE <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Crash Course</span></>,
  subtitle: 'Maths · Physics · Chemistry · Biology — Class 10 ICSE',
  ledBy: <>Led by <span className="whitespace-nowrap font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> · Biology by <span className="whitespace-nowrap font-bold text-blue-600">Dr. Todkar</span></>,
  intro: 'High-weightage chapter triage and weekly board-pattern mocks, finishing well ahead of the Feb-March 2027 exam window.',
  ctaLabel: 'Check Batch Dates & Seats',
  heroNote: <>On CBSE or preparing for MHT CET instead? See our{' '}<Link prefetch={false} href="/10th-cbse-crash-course-pune" className="text-blue-600! underline!">10th CBSE Crash Course</Link>{' '}or{' '}<Link prefetch={false} href="/mht-cet-crash-course-pune" className="text-blue-600! underline!">MHT CET Crash Course</Link>.</>,
  stats: [
    { value: '8 Weeks', label: 'Sprint batch', sub: 'Finishes well ahead of the Feb-March exam window' },
    { value: 'Max 12 Students', label: 'Per Batch, Per Subject', sub: 'Every mock reviewed personally by Dilip Sir & Dr. Todkar', featured: true },
    { value: '4 Subjects', label: 'Maths, Physics, Chemistry, Biology', sub: 'Each papered and taught separately', tone: 'purple' },
  ],
  shortStats: [
    { value: '8 weeks', label: 'sprint batch' },
    { value: '12 max', label: 'per batch, per subject' },
    { value: '4 subjects', label: 'papered separately' },
  ],
  why: {
    heading: 'Why This Crash Course, and Why Now',
    subheading: 'A focused pre-board sprint, not a generic revision class squeezed into whatever time is left.',
    items: WHY_ITEMS,
  },
  curriculum: {
    heading: 'What Gets Covered',
    subheading: 'A weightage-first sprint per subject, not a page-by-page reread',
    items: CURRICULUM_ITEMS,
  },
  plan: {
    heading: 'The 8-Week Sprint Plan',
    subheading: 'Sequenced to finish well before the Feb-March 2027 exam window',
    phases: PLAN_PHASES,
  },
  suitable: SUITABLE,
  notSuitable: NOT_SUITABLE,
  notSuitableFooter: <>Looking for a full year-round Foundation program instead? See our{' '}<Link prefetch={false} href="/foundation" className="underline! text-white! font-semibold">Foundation program</Link>.</>,
  faqs: FAQS,
  seats: {
    heading: '⏳ Limited Seats — Per Subject, Per Batch',
    body: <>Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so every mock gets reviewed personally — enrollment closes once a subject&apos;s batch is full or the sprint window starts, whichever comes first.</>,
    button: 'Reserve Your Seat',
  },
  finalCta: {
    heading: 'Boards Start February. Weeks Matter Now.',
    body: 'Talk to us directly about which subjects need the sprint most for your child.',
    button: 'Talk to Us Today',
  },
  modal: { title: 'Join the 10th ICSE Crash Course 🎯', subtitle: 'Check current batch dates and remaining seats' },
};

export default function TenthIcseCrashCoursePage() {
  return <CrashCourseTemplate config={CONFIG} />;
}
