'use client';

import '@/app/tailwind.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Brain, Clock, Rocket, Microscope } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

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

export default function TenthIcseCrashCoursePage() {
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

  const curriculum = [
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

  const weeklyPlan = [
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

  const suitableFor = [
    'ICSE Class 10 students who have covered most of their syllabus in one or more of Maths, Physics, Chemistry or Biology',
    'Students who want board-pattern practice and speed, not a first pass through the syllabus',
    'Families who want the founder leading Maths, Physics and Chemistry, with Biology taught by a practicing physician',
    'Students who want each subject drilled separately, matching how ICSE actually papers them',
  ];

  const notFor = [
    "Students who haven't yet completed the bulk of their syllabus in a given subject",
    'Anyone looking for a first introduction to core concepts in Maths, Physics, Chemistry or Biology',
    'Families wanting year-round tuition rather than a focused pre-board sprint',
  ];

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <span className="whitespace-nowrap bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">⏱ 2026-27 Crash Course</span>
              <span className="whitespace-nowrap bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">💻 Online Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              10th ICSE <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Crash Course</span>
            </h1>
            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Maths · Physics · Chemistry · Biology — Class 10 ICSE</h2>
            <p className="text-xl text-gray-600 mb-4">
              Led by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> · Biology by <span className="font-bold text-blue-600">Dr. Todkar</span>
            </p>
            <p className="text-lg text-gray-700 mb-8">
              High-weightage chapter triage and weekly board-pattern mocks, finishing well ahead of the Feb-March 2027 exam window.
            </p>
            <button
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Check Batch Dates &amp; Seats</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              On CBSE or preparing for MHT CET instead? See our{' '}
              <Link prefetch={false} href="/10th-cbse-crash-course-pune" className="text-blue-600! underline!">
                10th CBSE Crash Course
              </Link>{' '}
              or{' '}
              <Link prefetch={false} href="/mht-cet-crash-course-pune" className="text-blue-600! underline!">
                MHT CET Crash Course
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
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">8 Weeks</div>
              <p className="text-gray-600 text-lg">Sprint batch</p>
              <p className="text-gray-500 mt-2">Finishes well ahead of the Feb-March exam window</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch, Per Subject</p>
              <p className="text-gray-500 mt-2">Every mock reviewed personally by Dilip Sir &amp; Dr. Todkar</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3">4 Subjects</div>
              <p className="text-gray-600 text-lg">Maths, Physics, Chemistry, Biology</p>
              <p className="text-gray-500 mt-2">Each papered and taught separately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Crash Course, and Why Now</h2>
            <p className="text-xl text-gray-600">A focused pre-board sprint, not a generic revision class squeezed into whatever time is left.</p>
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
            <p className="text-xl text-gray-600">A weightage-first sprint per subject, not a page-by-page reread</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The 8-Week Sprint Plan</h2>
            <p className="text-xl text-gray-600">Sequenced to finish well before the Feb-March 2027 exam window</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                Looking for a full year-round Foundation program instead? See our{' '}
                <Link prefetch={false} href="/foundation" className="underline! text-white! font-semibold">
                  Foundation program
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats — Per Subject, Per Batch</h2>
          <p className="text-xl text-gray-700 mb-8">
            Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so every mock gets reviewed personally — enrollment closes once a subject&apos;s batch is full or the sprint window starts, whichever comes first.
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
          <h2 className="text-4xl font-bold text-white mb-6">Boards Start February. Weeks Matter Now.</h2>
          <p className="text-xl text-blue-100 mb-8">
            Talk to us directly about which subjects need the sprint most for your child.
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
        title="Join the 10th ICSE Crash Course 🎯"
        subtitle="Check current batch dates and remaining seats"
      />
    </div>
  );
}
