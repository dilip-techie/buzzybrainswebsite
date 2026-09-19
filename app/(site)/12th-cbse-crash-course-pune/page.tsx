'use client';

import Link from 'next/link';
import { Brain, Clock, Rocket, Stethoscope, Target, Users } from 'lucide-react';
import CrashCourseTemplate, { type CrashCourseConfig } from '@/components/crash-course/CrashCourseTemplate';

const FAQS = [
  {
    question: 'Who is this crash course actually for?',
    answer:
      "CBSE Class 12 PCM or PCB students who have covered most of their syllabus in school and need focused, board-pattern practice before the Feb-March 2027 exams — not a first introduction to the subjects. If entire chapters are still untaught, we'll say so upfront rather than rushing through them.",
  },
  {
    question: 'Does this cover PCM, PCB, or both?',
    answer: "Both — Physics and Chemistry are shared across streams, Mathematics runs as the PCM track and Biology as the PCB track, so a student joins the shared subjects plus whichever of Maths or Biology applies to them.",
  },
  {
    question: 'Who teaches each subject?',
    answer: "Physics, Chemistry and Mathematics are led by founder Dilip Sir (IIT Kanpur, JEE AIR 400, 25+ years of mentoring), and Biology is led by Dr. Todkar, a practicing General Physician.",
  },
  {
    question: 'Does this also help with JEE Main or NEET preparation?',
    answer: "This particular batch is built specifically as a CBSE board-exam sprint, not a JEE/NEET prep track. If you also want competitive-exam preparation, see our full-year 12th Board PCM or PCB programs, which combine board and entrance-exam prep from earlier in the year.",
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
    description: 'Physics, Chemistry and Maths led personally by Dilip Sir (B.Tech, IIT Kanpur, JEE AIR 400, 25+ years mentoring), with Biology led by Dr. Todkar, a practicing General Physician.',
  },
  {
    icon: Clock,
    title: 'Built for the Feb-March 2027 Window',
    description: 'CBSE Class 12 board exams are expected in February-March 2027, as a single annual exam. This sprint is sequenced to finish well before that window.',
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
    icon: Stethoscope,
    title: 'PCM and PCB, Properly Separated',
    description: "Mathematics is taught for PCM, Biology for PCB — each stream gets its own track alongside the shared Physics and Chemistry sessions.",
  },
  {
    icon: Rocket,
    title: 'Board-Pattern Mocks Every Week',
    description: 'Full-length CBSE-pattern papers under real time pressure from week one, with step-marking review built into every session.',
  },
];

const CURRICULUM_ITEMS = [
  {
    subject: 'Physics & Maths — Dilip Sir',
    focus: 'High-weightage numericals and derivations, with the step-marking discipline CBSE evaluation specifically rewards.',
  },
  {
    subject: 'Chemistry — Dilip Sir',
    focus: 'Organic mechanisms and inorganic exceptions broken into clear, exam-ready concepts that hold up under exam pressure.',
  },
  {
    subject: 'Biology — Dr. Todkar',
    focus: 'Applied, clinically-grounded Biology for the PCB stream, taught by a practicing General Physician — real context, not just diagrams.',
  },
];

const PLAN_PHASES = [
  {
    phase: 'Weeks 1-2: Diagnostic & Triage',
    focus: "A full-syllabus diagnostic paper in each enrolled subject identifies exactly which chapters are weak, then the schedule is built around CBSE's actual weightage.",
  },
  {
    phase: 'Weeks 3-5: High-Weightage Drilling',
    focus: 'Daily/alternate-day sessions target the chapters carrying the most marks, with step-marking practice for numericals and structured recall for theory.',
  },
  {
    phase: 'Weeks 6-8: Full Mocks & Exam Strategy',
    focus: 'Weekly full-length board-pattern papers under real time limits, plus a session on time allocation and presentation for the actual exam.',
  },
];

const SUITABLE = [
  'CBSE Class 12 PCM or PCB students who have covered most of their syllabus already',
  'Students who want board-pattern practice and speed, not a first pass through the syllabus',
  'Families who want the founder leading Physics, Chemistry and Maths, with Biology taught by a practicing physician',
  'Students focused on the board exam itself, not combined JEE/NEET preparation',
];

const NOT_SUITABLE = [
  "Students who haven't yet completed the bulk of their syllabus in a given subject",
  'Students who want combined board-plus-JEE or board-plus-NEET preparation (see our full-year programs instead)',
  'Families wanting year-round tuition rather than a focused pre-board sprint',
];

const CONFIG: CrashCourseConfig = {
  chips: [
    { label: '⏱ 2026-27 Crash Course', tone: 'blue' },
    { label: '💻 Online Available', tone: 'green' },
  ],
  h1: <>12th CBSE <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">PCMB</span> Crash Course</>,
  subtitle: 'Physics · Chemistry · Maths · Biology — Class 12 CBSE',
  ledBy: <>Led by <span className="whitespace-nowrap font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> · Biology by <span className="whitespace-nowrap font-bold text-blue-600">Dr. Todkar</span></>,
  intro: 'High-weightage chapter triage and weekly board-pattern mocks for both PCM and PCB, finishing well ahead of the Feb-March 2027 exam window.',
  ctaLabel: 'Check Batch Dates & Seats',
  heroNote: <>Want combined board-plus-entrance prep instead? See our{' '}<Link prefetch={false} href="/12th-board-pcm" className="text-blue-600! underline!">12th Board PCM</Link>{' '}or{' '}<Link prefetch={false} href="/12th-board-pcb" className="text-blue-600! underline!">12th Board PCB</Link>{' '}programs.</>,
  stats: [
    { value: '8 Weeks', label: 'Sprint batch', sub: 'Finishes well ahead of Feb-March board exams' },
    { value: 'Max 12 Students', label: 'Per Batch', sub: 'Every mock reviewed personally by Dilip Sir & Dr. Todkar', featured: true },
    { value: 'PCM & PCB', label: 'Both streams covered', sub: 'Weekly full-length CBSE-pattern mocks', tone: 'purple' },
  ],
  shortStats: [
    { value: '8 weeks', label: 'sprint batch' },
    { value: '12 max', label: 'students per batch' },
    { value: 'PCM + PCB', label: 'both streams' },
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
  notSuitableFooter: <>Want board results and a JEE/NEET score together? See our full{' '}<Link prefetch={false} href="/12th-board-pcm" className="underline! text-white! font-semibold">12th Board PCM</Link>{' '}or{' '}<Link prefetch={false} href="/12th-board-pcb" className="underline! text-white! font-semibold">PCB</Link>{' '}program instead.</>,
  faqs: FAQS,
  seats: {
    heading: '⏳ Limited Seats — PCM & PCB Tracks',
    body: <>Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so every mock gets reviewed personally — enrollment closes once a subject&apos;s batch is full or the sprint window starts, whichever comes first.</>,
    button: 'Reserve Your Seat',
  },
  finalCta: {
    heading: 'Boards Start February. Weeks Matter Now.',
    body: 'Talk to Dilip Sir directly about whether the crash course fits where your child\'s syllabus stands today.',
    button: 'Talk to Us Today',
  },
  modal: { title: 'Join the 12th CBSE PCMB Crash Course 🎯', subtitle: 'Check current batch dates and remaining seats' },
};

export default function TwelfthCbseCrashCoursePage() {
  return <CrashCourseTemplate config={CONFIG} />;
}
