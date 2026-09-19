'use client';

import '@/app/tailwind.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Brain, Rocket, TrendingUp, Clock } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

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

export default function MhtCetCrashCoursePage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/918983604478', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    window.location.href = '/contact';
  };

  const whyChooseFeatures = [
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

  const curriculum = [
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

  const weeklyPlan = [
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

  const suitableFor = [
    'Class 12 PCM/PCB students who have covered most of their board syllabus already',
    'Students who want CET-specific pattern practice, not a general revision class',
    'Anyone recalibrating their prep now that Session 1 lands before boards, not after',
    'Students planning to use Session 1 as a genuine attempt, with Session 2 as backup',
    'Families who want small-batch, faculty-reviewed mocks instead of self-scored practice',
  ];

  const notFor = [
    "Students who haven't yet completed the bulk of their PCM/PCB syllabus in school",
    'Anyone looking for a first introduction to Physics, Chemistry, Maths or Biology concepts',
    'Students wanting a year-long, board-plus-JEE program (see our full 12th Board PCM program instead)',
  ];

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <span className="whitespace-nowrap bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">⏱ MHT CET Crash Course</span>
              <span className="whitespace-nowrap bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">💻 Online Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              A Focused Final Sprint Before <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">MHT CET Session 1</span>
            </h1>
            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Dec 15, 2026 – Jan 15, 2027 Window · Grade 12 PCM &amp; PCB</h2>
            <p className="text-xl text-gray-600 mb-4">
              Led personally by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> · Biology by <span className="font-bold text-blue-600">Dr. Todkar</span>
            </p>
            <p className="text-lg text-gray-700 mb-8">
              High-weightage chapter triage, weekly CET-pattern mocks and support through <span className="font-semibold text-gray-900">both attempts, all the way to results in May 2027</span> — built for the year MHT CET moved before boards.
            </p>
            <button
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Check Batch Dates &amp; Seats</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Not sure a crash course is right for you yet? Read{' '}
              <Link prefetch={false} href="/blog/who-should-and-shouldnt-join-a-cet-crash-course" className="text-blue-600! underline!">
                who this program is (and isn&apos;t) built for
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Till May</div>
              <p className="text-gray-600 text-lg">Both attempts covered</p>
              <p className="text-gray-500 mt-2">8-week sprint into Session 1, then support through Session 2 &amp; results</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Every mock reviewed with Dilip Sir personally</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3">PCM &amp; PCB</div>
              <p className="text-gray-600 text-lg">Both groups covered</p>
              <p className="text-gray-500 mt-2">Weekly full-length CET-pattern mocks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Crash Course, and Why Now</h2>
            <p className="text-xl text-gray-600">MHT CET 2027 Session 1 is the first attempt ever scheduled before boards. The prep calendar has to change with it.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Gets Covered</h2>
            <p className="text-xl text-gray-600">A weightage-first sprint, not a page-by-page reread</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculum.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>{item.subject}</span>
                </h3>
                <p className="text-gray-700 text-sm">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Plan */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Sprint, Then Support Through May</h2>
            <p className="text-xl text-gray-600">An 8-week sprint into Session 1, carried through to Session 2 and results — not a one-shot batch</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weeklyPlan.map((phase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                <p className="text-gray-700 text-center">{phase.focus}</p>
              </div>
            ))}
          </div>
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
                {suitableFor.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
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
                {notFor.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <Zap className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-1" />
                    <p className="text-white font-medium">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-blue-100 mt-6 text-sm">
                Looking for a full board-plus-JEE year, not just a sprint? See our{' '}
                <Link prefetch={false} href="/12th-board-pcm" className="underline! text-white! font-semibold">
                  12th Board PCM program
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqJsonLd items={FAQS} />
      <MarketingFaq items={FAQS} />

      {/* Limited Seats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats — One Enrollment, Both Attempts</h2>
          <p className="text-xl text-gray-700 mb-8">
            Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so every mock gets reviewed personally — enrollment closes once the batch is full or the sprint window starts, whichever comes first, and carries you through Session 2 and results in May without re-enrolling.
          </p>
          <div className="space-y-4 mb-8">
            <a href="tel:+918983604478" className="flex items-center justify-center space-x-3 text-lg text-gray-900 hover:text-blue-600 transition">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="font-bold">89836 04478</span>
            </a>
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="font-bold">Amanora, Hadapsar, Pune</span>
            </div>
          </div>
          <button
            onClick={() => setShowCtaModal(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Reserve Your Seat
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Session 1 Starts December 15. Weeks Matter Now.</h2>
          <p className="text-xl text-blue-100 mb-8">
            Talk to Dilip Sir directly about whether the crash course fits where your syllabus stands today.
          </p>
          <button
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Talk to Us Today
          </button>
        </div>
      </section>

      {/* CTA Modal */}
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Join the MHT CET Crash Course 🎯"
        subtitle="Check current batch dates and remaining seats"
      />
    </div>
  );
}
