'use client';

import '@/app/tailwind.css';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  MapPin,
  Monitor,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

const FAQS = [
  {
    question: 'What is the BuzzyBrains Top Rankers Program?',
    answer:
      "It is a premium, small-cohort program for students aiming for top ranks in JEE (Main + Advanced) or NEET UG. Every cohort is capped at 12 students, taught by subject specialists, and personally mentored by Dilip Sah — an IIT Kanpur alumnus with a JEE All India Rank of 400 and 25+ years of mentoring experience. It is offered offline at our Amanora, Pune centre and as live online classes.",
  },
  {
    question: 'Who mentors students in the Top Rankers Program?',
    answer:
      "Dilip Sah (Dilip Sir) — B.Tech, IIT Kanpur, MBA IIM Ahmedabad, JEE AIR 400 — is every student's personal mentor: he owns the rank plan, runs the one-on-one mentor sessions and reviews progress with parents. Classes are taught by named subject specialists: Agarwal Sir (PhD, IIT Bombay) and Dr. Mrinmayee (PhD, IIT Kharagpur) for Physics and Chemistry, Dilip Sir for Mathematics and Physics, and Dr. Todkar and Priya Madam for NEET Biology.",
  },
  {
    question: 'What is the difference between the offline and online versions?',
    answer:
      "The standard is the same: same faculty, same 12-student cap, same weekly test schedule and the same personal mentorship from Dilip Sah. Offline students attend at the Amanora, Pune centre and sit tests in exam-hall conditions with in-person doubt clinics. Online students attend live, interactive classes and have their mentor sessions over video, so they get the same programme without relocating.",
  },
  {
    question: 'Does the program guarantee a top rank?',
    answer:
      "No, and no honest program can. Rank depends on the student's effort, starting level and exam-day performance. What the program guarantees is the process: a diagnostic and rank plan, personal mentorship, weekly tests with error analysis, small cohorts and specialist teaching. You can see real outcomes on our Achievements page.",
  },
  {
    question: 'Which classes and entry points does it cover?',
    answer:
      "Class 11 students (a two-year track towards the 2028 exams), Class 12 students (a one-year track towards the 2027 exams) and droppers repeating for 2027 (an accelerated version that spends less time on covered material and more on test volume and rank strategy). Tell us the student's class and current level during the enrollment call and we will place them in the right track.",
  },
  {
    question: 'What are the JEE and NEET exam dates for 2027?',
    answer:
      "JEE Main 2027 Session 1 is confirmed by NTA for January 22–24 and 28–30, 2027 (buffer January 31); Session 2 is expected in April 2027 but is not yet announced. JEE Advanced 2027 is expected in May and NEET UG 2027 in early May, but neither date has been officially announced yet, and NEET UG is reported to be moving to a computer-based test from 2027. Always confirm on nta.ac.in and the official JEE Advanced site.",
  },
  {
    question: 'Can a student do JEE and NEET preparation together?',
    answer:
      "Physics and Chemistry overlap heavily, so students who are undecided between the two can start in the shared Physics and Chemistry sessions. Mathematics (JEE) and Biology (NEET) are separate tracks, and we recommend choosing one main target by the end of the first diagnostic phase rather than splitting effort across both.",
  },
  {
    question: 'How do I apply and what does it cost?',
    answer:
      "Seats are limited because each cohort is capped at 12. Start with an enrollment call with our team: we review the student's class, current level and target, confirm offline or online, and share the current cohort dates and fees. Use the Apply button on this page, call 89836 04478, or use the contact page.",
  },
];

const PILLARS = [
  {
    icon: GraduationCap,
    title: 'Personal Mentorship by Dilip Sah',
    text: "A named mentor who owns your rank plan. Dilip Sir (B.Tech IIT Kanpur, JEE AIR 400) runs the one-on-one mentor sessions, resets the plan after every test cycle and briefs parents — this is mentorship, not a batch announcement.",
  },
  {
    icon: Users,
    title: 'Cohorts Capped at 12',
    text: 'Small enough that every student\'s errors are seen and named. No back-benches, no anonymity, no teaching to the room\'s average.',
  },
  {
    icon: Target,
    title: 'Rank Blueprint from Day One',
    text: "A diagnostic maps strengths, gaps and a realistic target-college / target-rank plan, broken into monthly milestones you can actually track.",
  },
  {
    icon: ClipboardCheck,
    title: 'Weekly Tests + Error Analysis',
    text: "Regular tests in the real exam format, each followed by a structured error log: concept gap, silly mistake or time management — with a specific fix for each.",
  },
  {
    icon: BookOpen,
    title: 'Subject Specialists, Not Generalists',
    text: 'PhD-level and IIT-alumni faculty who teach only the subject they hold real depth in, so a doubt is answered by someone who actually researched it.',
  },
  {
    icon: HeartPulse,
    title: 'Parent Reviews & Wellbeing',
    text: 'Scheduled progress conversations with parents and attention to load, sleep and stress — top ranks are built over months, and burnout is the biggest silent risk.',
  },
];

const TRACKS = [
  {
    id: 'jee',
    badge: 'JEE Main + Advanced',
    title: 'JEE Top Rankers Track',
    lead: 'For students targeting a top JEE Main percentile and a strong JEE Advanced rank for the IITs.',
    faculty: [
      'Mathematics & Physics — Dilip Sir (B.Tech IIT Kanpur, JEE AIR 400)',
      'Physics & Chemistry — Agarwal Sir (PhD, IIT Bombay)',
      'Chemistry — Dr. Mrinmayee (PhD, IIT Kharagpur)',
    ],
    includes: [
      'Concept-first depth, then JEE Main-level volume, then JEE Advanced multi-concept problem solving',
      'JEE Main and JEE Advanced pattern tests, including the computer-based format JEE Main uses',
      'Chapter-wise error log and a rank-improvement plan after every test cycle',
      'A planned bridge from JEE Main to JEE Advanced, with attempt strategy for both JEE Main sessions',
    ],
    dates: [
      'JEE Main 2027 Session 1: January 22–24 & 28–30, 2027 (confirmed by NTA)',
      'JEE Main Session 2: expected April 2027 — not yet announced',
      'JEE Advanced 2027: expected May 2027 — date not yet announced',
    ],
    link: { href: '/12th-board-pcm', label: 'See our full-year IIT-JEE program' },
  },
  {
    id: 'neet',
    badge: 'NEET UG',
    title: 'NEET Top Rankers Track',
    lead: 'For students targeting a top NEET score for government medical seats, where Biology accuracy and Physics speed decide the rank.',
    faculty: [
      'Biology — Dr. Todkar (practicing General Physician) and Priya Madam (B.E., Pune University)',
      'Chemistry — Dr. Mrinmayee (PhD, IIT Kharagpur)',
      'Physics — Dilip Sir and Agarwal Sir (PhD, IIT Bombay)',
    ],
    includes: [
      'NCERT-line accuracy in Biology plus the clinical, application-style questions NEET increasingly asks',
      'Speed and accuracy training in Physics and Chemistry numericals under real time pressure',
      'Full-length NEET-pattern tests with negative-marking strategy, in the computer-based format as it applies',
      'Personal mentorship from Dilip Sir on planning, consistency and exam-day temperament',
    ],
    dates: [
      'NEET UG 2027: expected early May 2027 — date not yet announced by NTA',
      'NEET UG is reported to be moving to a computer-based test from 2027 — confirm on nta.ac.in',
    ],
    link: { href: '/12th-board-pcb', label: 'See our full-year NEET program' },
  },
];

const MODES = [
  {
    icon: Building2,
    title: 'Offline — Amanora, Pune',
    text: 'For students who want the full in-person experience.',
    points: [
      'Classes at our Amanora, Hadapsar centre',
      'Weekly tests in exam-hall conditions',
      'In-person doubt clinics with the faculty',
      'Face-to-face mentor sessions with Dilip Sir',
    ],
  },
  {
    icon: Monitor,
    title: 'Online — Live, From Anywhere',
    text: 'For students outside Pune, or who prefer not to commute.',
    points: [
      'Live, interactive classes — not a passive video library',
      'Weekly online tests in a computer-based format',
      'Doubt support with the same subject specialists',
      'Video mentor sessions with Dilip Sir',
    ],
  },
];

const SAME_IN_BOTH = [
  'The same faculty and the same syllabus pace',
  'The same 12-student cohort cap',
  'The same weekly test schedule and error analysis',
  'The same personal mentor and rank blueprint',
  'The same parent progress reviews',
];

const ROADMAP = [
  {
    phase: 'Phase 1 — Diagnose & Blueprint',
    focus: "Diagnostic tests, a personal rank blueprint and a monthly milestone plan agreed with the student and parents.",
  },
  {
    phase: 'Phase 2 — Build Depth',
    focus: 'Concept-first teaching by subject specialists, with chapter tests and an error log driving what gets revisited.',
  },
  {
    phase: 'Phase 3 — Test-Intensive',
    focus: 'Full-length tests in the real pattern, time-management drills and mentor-led plan resets after every cycle.',
  },
  {
    phase: 'Phase 4 — Final Sprint',
    focus: 'Revision, targeted weak-area repair, attempt strategy and exam-day readiness for the 2027 exam windows.',
  },
];

const SUITABLE = [
  'Students aiming for top ranks, not just a pass, in JEE Main + Advanced or NEET UG',
  'Class 11, Class 12 and dropper students who are ready to work consistently for months',
  'Families who want a named senior mentor accountable for progress, not just classroom teaching',
  'Students who do best in small cohorts with fast, specific feedback',
];

const NOT_SUITABLE = [
  'Anyone looking for a guaranteed rank or a shortcut — we don\'t promise either',
  'Students who want a large-batch, low-touch programme',
  'Students who haven\'t yet built basic Class 9–10 Maths and Science foundations (see our Foundation program first)',
];

export default function TopRankersProgramPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/918983604478', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <span className="whitespace-nowrap bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">🏆 Premium Mentorship</span>
              <span className="whitespace-nowrap bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">🏫 Offline · Pune</span>
              <span className="whitespace-nowrap bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">💻 Live Online</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Top Rankers</span> Program
            </h1>
            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">For JEE &amp; NEET Aspirants Aiming at the Top</h2>
            <p className="text-xl text-gray-600 mb-4">
              Personally mentored by <span className="font-bold text-blue-600">Dilip Sah (B.Tech, IIT Kanpur · JEE AIR 400)</span>
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Cohorts capped at 12, subject-specialist faculty, weekly tests with error analysis — delivered the same way offline in Pune and live online.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setShowCtaModal(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Apply for the Next Cohort</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <a href="#jee" className="bg-white text-blue-700! border border-blue-200 px-6 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold">JEE Track</a>
              <a href="#neet" className="bg-white text-blue-700! border border-blue-200 px-6 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold">NEET Track</a>
            </div>
            <p className="text-sm text-gray-500 mt-5">
              We mentor for rank — we don&apos;t guarantee one. See real outcomes on our{' '}
              <Link prefetch={false} href="/achievements" className="text-blue-600! underline!">Achievements page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Max 12</div>
              <p className="text-gray-600 text-lg">Students per cohort</p>
              <p className="text-gray-500 mt-2">Every student&apos;s errors are seen and named</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">1 : 1</div>
              <p className="text-gray-600 text-lg">Mentorship with Dilip Sah</p>
              <p className="text-gray-500 mt-2">IIT Kanpur · JEE AIR 400 · 25+ years mentoring</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3">2 Modes</div>
              <p className="text-gray-600 text-lg">Offline &amp; live online</p>
              <p className="text-gray-500 mt-2">Same faculty, tests and mentor in both</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Mentor: Dilip Sah</h2>
            <p className="text-xl text-gray-600">The person accountable for your rank plan</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-blue-100">
            <p className="text-gray-800 text-lg mb-6">
              Dilip Sir cleared JEE with an <span className="font-bold">All India Rank of 400</span> and holds a B.Tech from <span className="font-bold">IIT Kanpur</span> and an MBA from <span className="font-bold">IIM Ahmedabad</span>. After 25+ years across technology leadership and teaching, he founded BuzzyBrains Academy to give bright students what a 60-student classroom can&apos;t: someone who notices their specific gap.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Builds and resets your personal rank blueprint',
                'Runs the one-on-one mentor sessions, in person or on video',
                'Reviews progress with parents and adjusts the plan after each test cycle',
              ].map((t) => (
                <div key={t} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium">{t}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              Meet the full faculty on our{' '}
              <Link prefetch={false} href="/faculty" className="text-blue-600! underline!">Faculty page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How the Program Builds Ranks</h2>
            <p className="text-xl text-gray-600">Six things that separate a rank program from a big-batch class</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all shadow-md">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-700">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Track</h2>
            <p className="text-xl text-gray-600">One program, two tracks — JEE and NEET</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {TRACKS.map((t) => (
              <div key={t.id} id={t.id} className="scroll-mt-28 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-600">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">{t.badge}</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-gray-700 mb-6">{t.lead}</p>

                <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wide mb-2">Faculty</h4>
                <ul className="space-y-2 mb-6">
                  {t.faculty.map((f) => (
                    <li key={f} className="flex items-start space-x-2 text-gray-800">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wide mb-2">What&apos;s Included</h4>
                <ul className="space-y-2 mb-6">
                  {t.includes.map((f) => (
                    <li key={f} className="flex items-start space-x-2 text-gray-800">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wide mb-2">2027 Exam Timeline</h4>
                <ul className="space-y-2 mb-6">
                  {t.dates.map((f) => (
                    <li key={f} className="flex items-start space-x-2 text-gray-800">
                      <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link prefetch={false} href={t.link.href} className="text-blue-700! font-semibold underline!">
                  {t.link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline vs Online */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Offline or Online — Same Standard</h2>
            <p className="text-xl text-gray-600">Pick the format that fits your life. The mentorship doesn&apos;t change.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {MODES.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{m.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{m.text}</p>
                  <ul className="space-y-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start space-x-2 text-gray-800">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-7 h-7 text-yellow-300" /> Identical in both formats
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {SAME_IN_BOTH.map((s) => (
                <div key={s} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <p className="font-medium">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Four-Phase Rank Roadmap</h2>
            <p className="text-xl text-gray-600">Paced to your entry point: Class 11, Class 12 or dropper</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROADMAP.map((r, i) => (
              <div key={r.phase} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-bold mb-4 mx-auto">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{r.phase}</h3>
                <p className="text-gray-700 text-center">{r.focus}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Plan your own schedule with our free{' '}
            <Link prefetch={false} href="/mock-test-planner" className="text-blue-600! underline!">Mock Test Planner</Link>,{' '}
            <Link prefetch={false} href="/study-timetable-generator" className="text-blue-600! underline!">Study Timetable Generator</Link> and{' '}
            <Link prefetch={false} href="/neet-jee-rank-predictor" className="text-blue-600! underline!">Rank Predictor</Link>.
          </p>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-yellow-300" /> This Is For You If
              </h2>
              <div className="space-y-4">
                {SUITABLE.map((point) => (
                  <div key={point} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-1" />
                    <p className="text-white font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-300" /> This Isn&apos;t For You If
              </h2>
              <div className="space-y-4">
                {NOT_SUITABLE.map((point) => (
                  <div key={point} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <Zap className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-1" />
                    <p className="text-white font-medium">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-blue-100 mt-6 text-sm">
                Need a Foundation first? See our{' '}
                <Link prefetch={false} href="/foundation" className="underline! text-white! font-semibold">Foundation program</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqJsonLd items={FAQS} />
      <MarketingFaq items={FAQS} />

      {/* Limited seats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats — Capped at 12 per Cohort</h2>
          <p className="text-xl text-gray-700 mb-8">
            Because every student gets a personal mentor, each cohort is limited to <span className="font-bold text-blue-600">12 students</span>. Start with an enrollment call to confirm the track, the format and the current cohort dates.
          </p>
          <div className="space-y-4 mb-8">
            <a href="tel:+918983604478" className="flex items-center justify-center space-x-3 text-lg text-gray-900 hover:text-blue-600 transition">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="font-bold">89836 04478</span>
            </a>
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="font-bold">Amanora, Hadapsar, Pune · or live online</span>
            </div>
          </div>
          <button
            onClick={() => setShowCtaModal(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Apply for the Next Cohort
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Top Ranks Are Built Months Ahead.</h2>
          <p className="text-xl text-blue-100 mb-8">
            Talk to us about the right track and format for your child.
          </p>
          <button
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Talk to Us Today
          </button>
        </div>
      </section>

      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Apply to the Top Rankers Program 🏆"
        subtitle="Tell us the class, target exam and preferred format"
      />
    </div>
  );
}
