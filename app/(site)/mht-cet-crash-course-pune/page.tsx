'use client';

import Link from 'next/link';
import { Brain, Clock, Rocket, Target, TrendingUp, Users } from 'lucide-react';
import CrashCourseTemplate, { type CrashCourseConfig } from '@/components/crash-course/CrashCourseTemplate';

const FAQS = [
  {
    question: 'Who is this crash course actually for?',
    answer:
      "Class 12 PCM/PCB students who have covered most of their syllabus and need concentrated, CET-pattern practice before Session 1 — not students with major foundational gaps. If a topic hasn't been taught in school yet, we'll say so upfront and suggest our full-year 12th Board program instead. A crash course tops up a mostly-complete foundation; it doesn't build one from scratch.",
  },
  {
    question: 'When does the batch run, and why does the timing matter this year?',
    answer:
      "MHT CET 2027 Session 1 is set for December 15, 2026 - January 15, 2027 — the first time CET has ever landed before boards instead of after. This batch is timed to finish before that window opens, so the sprint itself doesn't eat into board-exam study time later.",
  },
  {
    question: 'Is this online, offline, or both?',
    answer: 'Sessions run from our Amanora, Pune centre, with a live online option for students who prefer not to commute — both formats get the same content, faculty and test schedule.',
  },
  {
    question: 'How is this different from just doing mock tests on my own?',
    answer:
      "Self-run mocks tell you a score; they don't tell you which of the 20% of chapters is costing you 80% of your lost marks, or how to actually use a second CET attempt if you get one. Dilip Sir reviews every mock with the batch, chapter by chapter, and adjusts the next week's focus accordingly.",
  },
  {
    question: 'What if my syllabus isn\'t fully finished by the batch start date?',
    answer:
      "Tell us during the enrollment call — we'll either recommend waiting for the next batch or pair the crash course with a few extra one-on-one sessions on the specific chapters you're behind on, so the group sessions aren't wasted on material you're not ready for yet.",
  },
  {
    question: 'Does this cover the MHT CET Session 2 attempt in April as well?',
    answer:
      "Yes — enrollment isn't limited to the Session 1 sprint alone. Dilip Sir and the batch stay with you through the Session 2 attempt in April 2027 and through results in May, with refresher sessions and updated mocks ahead of the second attempt, so you don't need to sign up for a separate program to be supported on both attempts.",
  },
];

const WHY_ITEMS = [
  {
    icon: Brain,
    title: 'Led by Dilip Sir, Biology by Dr. Todkar',
    description: 'Designed and personally taught by Dilip Sir (B.Tech, IIT Kanpur, JEE AIR 400, 25+ years mentoring Pune students) across Physics, Chemistry and Maths. Biology is led by Dr. Todkar, a practicing General Physician.',
  },
  {
    icon: Clock,
    title: 'Built for the New Dec 15 Window',
    description: "MHT CET 2027 Session 1 runs Dec 15, 2026 - Jan 15, 2027, before boards for the first time. This batch is sequenced to finish before that window opens.",
  },
  {
    icon: Users,
    title: 'Capped at 12 Students',
    description: 'Every mock is reviewed chapter-by-chapter with the whole batch, so weak areas get named and fixed, not just scored.',
  },
  {
    icon: Target,
    title: 'Weightage-First Triage',
    description: "Limited weeks mean we start from CET's actual high-weightage chapters, not a page-by-page reread of the textbook.",
  },
  {
    icon: TrendingUp,
    title: 'Support Through Both Attempts, Till May',
    description: "Enrollment doesn't end when Session 1 does — you stay with Dilip Sir through the April 2027 Session 2 attempt and through results in May, with best-of-two attempt strategy built in throughout.",
  },
  {
    icon: Rocket,
    title: 'CET-Pattern Mocks Every Week',
    description: 'Full-length, negative-marking-free MCQ mocks in the actual MHT CET pattern, under real time pressure, from week one.',
  },
];

const CURRICULUM_ITEMS = [
  {
    subject: 'Physics & Chemistry',
    focus: 'High-weightage numericals, quick qualitative recall, and the CET-specific MCQ traps that cost marks under time pressure.',
  },
  {
    subject: 'Mathematics / Biology',
    focus: 'PCM batches drill calculus, algebra and coordinate geometry speed; PCB batches drill high-yield Botany/Zoology recall and NCERT-line accuracy, with Biology led by Dr. Todkar.',
  },
  {
    subject: 'Every Week',
    focus: 'One full CET-pattern mock, one detailed error-pattern review session with Dilip Sir, and a short list of exactly what to fix before the next mock.',
  },
];

const PLAN_PHASES = [
  {
    phase: 'Weeks 1-2: Diagnostic & Triage',
    focus: 'A full-syllabus diagnostic mock identifies exactly which chapters are weak, then the schedule is built around CET\'s actual weightage — not an even split across every topic.',
  },
  {
    phase: 'Weeks 3-5: High-Weightage Drilling',
    focus: 'Daily/alternate-day sessions target the chapters carrying the most marks, with speed-focused problem sets and quickfire revision for high-recall topics.',
  },
  {
    phase: 'Weeks 6-8: Full Mocks & Attempt Strategy',
    focus: 'Weekly full-length CET-pattern mocks under real time limits, plus a session on how to use a Session 1 score to decide what changes before Session 2.',
  },
  {
    phase: 'Jan – May 2027: Carried Through to Session 2',
    focus: "After Session 1 results, the batch regroups for a shorter refresher cycle ahead of the April attempt — revisiting exactly what Session 1 exposed — and stays available through results in May.",
  },
];

const SUITABLE = [
  'Class 12 PCM/PCB students who have covered most of their board syllabus already',
  'Students who want CET-specific pattern practice, not a general revision class',
  'Anyone recalibrating their prep now that Session 1 lands before boards, not after',
  'Students planning to use Session 1 as a genuine attempt, with Session 2 as backup',
  'Families who want small-batch, faculty-reviewed mocks instead of self-scored practice',
];

const NOT_SUITABLE = [
  "Students who haven't yet completed the bulk of their PCM/PCB syllabus in school",
  'Anyone looking for a first introduction to Physics, Chemistry, Maths or Biology concepts',
  'Students wanting a year-long, board-plus-JEE program (see our full 12th Board PCM program instead)',
];

const CONFIG: CrashCourseConfig = {
  chips: [
    { label: '⏱ MHT CET Crash Course', tone: 'blue' },
    { label: '💻 Online Available', tone: 'green' },
  ],
  h1: <>A Focused Final Sprint Before <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">MHT CET Session 1</span></>,
  subtitle: 'Dec 15, 2026 – Jan 15, 2027 Window · Grade 12 PCM & PCB',
  ledBy: <>Led personally by <span className="whitespace-nowrap font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> · Biology by <span className="whitespace-nowrap font-bold text-blue-600">Dr. Todkar</span></>,
  intro: <>High-weightage chapter triage, weekly CET-pattern mocks and support through <span className="font-semibold text-gray-900">both attempts, all the way to results in May 2027</span> — built for the year MHT CET moved before boards.</>,
  ctaLabel: 'Check Batch Dates & Seats',
  heroNote: <>Not sure a crash course is right for you yet? Read{' '}<Link prefetch={false} href="/blog/who-should-and-shouldnt-join-a-cet-crash-course" className="text-blue-600! underline!">who this program is (and isn&apos;t) built for</Link>.</>,
  stats: [
    { value: 'Till May', label: 'Both attempts covered', sub: '8-week sprint into Session 1, then support through Session 2 & results' },
    { value: 'Max 12 Students', label: 'Per Batch', sub: 'Every mock reviewed with Dilip Sir personally', featured: true },
    { value: 'PCM & PCB', label: 'Both groups covered', sub: 'Weekly full-length CET-pattern mocks', tone: 'purple' },
  ],
  shortStats: [
    { value: 'Till May', label: 'both attempts' },
    { value: '12 max', label: 'students per batch' },
    { value: 'PCM + PCB', label: 'both groups' },
  ],
  why: {
    heading: 'Why This Crash Course, and Why Now',
    subheading: 'MHT CET 2027 Session 1 is the first attempt ever scheduled before boards. The prep calendar has to change with it.',
    items: WHY_ITEMS,
  },
  curriculum: {
    heading: 'What Gets Covered',
    subheading: 'A weightage-first sprint, not a page-by-page reread',
    items: CURRICULUM_ITEMS,
  },
  plan: {
    heading: 'The Sprint, Then Support Through May',
    subheading: 'An 8-week sprint into Session 1, carried through to Session 2 and results — not a one-shot batch',
    phases: PLAN_PHASES,
  },
  suitable: SUITABLE,
  notSuitable: NOT_SUITABLE,
  notSuitableFooter: <>Looking for a full board-plus-JEE year, not just a sprint? See our{' '}<Link prefetch={false} href="/12th-board-pcm" className="underline! text-white! font-semibold">12th Board PCM program</Link>.</>,
  faqs: FAQS,
  seats: {
    heading: '⏳ Limited Seats — One Enrollment, Both Attempts',
    body: <>Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so every mock gets reviewed personally — enrollment closes once the batch is full or the sprint window starts, whichever comes first, and carries you through Session 2 and results in May without re-enrolling.</>,
    button: 'Reserve Your Seat',
  },
  finalCta: {
    heading: 'Session 1 Starts December 15. Weeks Matter Now.',
    body: 'Talk to Dilip Sir directly about whether the crash course fits where your syllabus stands today.',
    button: 'Talk to Us Today',
  },
  modal: { title: 'Join the MHT CET Crash Course 🎯', subtitle: 'Check current batch dates and remaining seats' },
};

export default function MhtCetCrashCoursePage() {
  return <CrashCourseTemplate config={CONFIG} />;
}
