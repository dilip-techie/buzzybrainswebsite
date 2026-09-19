'use client';

import '@/app/tailwind.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Brain, Clock, Rocket, Stethoscope } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

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

export default function TwelfthCbseCrashCoursePage() {
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

  const curriculum = [
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

  const weeklyPlan = [
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

  const suitableFor = [
    'CBSE Class 12 PCM or PCB students who have covered most of their syllabus already',
    'Students who want board-pattern practice and speed, not a first pass through the syllabus',
    'Families who want the founder leading Physics, Chemistry and Maths, with Biology taught by a practicing physician',
    'Students focused on the board exam itself, not combined JEE/NEET preparation',
  ];

  const notFor = [
    "Students who haven't yet completed the bulk of their syllabus in a given subject",
    'Students who want combined board-plus-JEE or board-plus-NEET preparation (see our full-year programs instead)',
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
              12th CBSE <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">PCMB</span> Crash Course
            </h1>
            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Physics · Chemistry · Maths · Biology — Class 12 CBSE</h2>
            <p className="text-xl text-gray-600 mb-4">
              Led by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> · Biology by <span className="font-bold text-blue-600">Dr. Todkar</span>
            </p>
            <p className="text-lg text-gray-700 mb-8">
              High-weightage chapter triage and weekly board-pattern mocks for both PCM and PCB, finishing well ahead of the Feb-March 2027 exam window.
            </p>
            <button
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Check Batch Dates &amp; Seats</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Want combined board-plus-entrance prep instead? See our{' '}
              <Link prefetch={false} href="/12th-board-pcm" className="text-blue-600 underline">
                12th Board PCM
              </Link>{' '}
              or{' '}
              <Link prefetch={false} href="/12th-board-pcb" className="text-blue-600 underline">
                12th Board PCB
              </Link>{' '}
              programs.
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
              <p className="text-gray-500 mt-2">Finishes well ahead of Feb-March board exams</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Every mock reviewed personally by Dilip Sir &amp; Dr. Todkar</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3">PCM &amp; PCB</div>
              <p className="text-gray-600 text-lg">Both streams covered</p>
              <p className="text-gray-500 mt-2">Weekly full-length CBSE-pattern mocks</p>
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

          <div className="grid md:grid-cols-3 gap-8">
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
                Want board results and a JEE/NEET score together? See our full{' '}
                <Link prefetch={false} href="/12th-board-pcm" className="underline text-white font-semibold">
                  12th Board PCM
                </Link>{' '}
                or{' '}
                <Link prefetch={false} href="/12th-board-pcb" className="underline text-white font-semibold">
                  PCB
                </Link>{' '}
                program instead.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats — PCM &amp; PCB Tracks</h2>
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
            Talk to Dilip Sir directly about whether the crash course fits where your child&apos;s syllabus stands today.
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
        title="Join the 12th CBSE PCMB Crash Course 🎯"
        subtitle="Check current batch dates and remaining seats"
      />
    </div>
  );
}
