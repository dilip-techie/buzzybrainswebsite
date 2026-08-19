'use client';

import '@/app/tailwind.css';
import React, { useState } from 'react';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

const FAQS = [
  {
    question: 'What makes this different from generic JEE coaching?',
    answer: 'It\'s built as one curriculum for board and JEE together, not two separate tracks. Concept-first teaching means the same Physics/Chemistry/Maths depth that scores well in boards also builds the multi-concept problem-solving JEE Advanced rewards.',
  },
  {
    question: 'What batch size should I look for in JEE coaching?',
    answer: 'Below 15 students per batch is where individual doubt-resolution actually becomes possible. Every batch here is capped at 12.',
  },
  {
    question: 'Is this for JEE Main only, or JEE Advanced too?',
    answer: 'Both. The curriculum is sequenced so JEE Main-level mastery is built first, then extended into JEE Advanced-style multi-concept problems as students progress through Grade 11-12.',
  },
  {
    question: 'Is a dropper year (repeating Grade 12 for JEE) supported?',
    answer: 'Yes — droppers follow an accelerated version of the same curriculum, spending less time on material already covered and more on mock-test volume and rank-improvement strategy.',
  },
  {
    question: 'Are classes online or in person?',
    answer: 'Classes run from our Amanora, Pune centre, with an online option for students who prefer not to commute.',
  },
];

export default function Class12BoardPCMPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/919850570525', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    window.location.href = '/#contact';
  };

  const whyChooseFeatures = [
    {
      icon: Brain,
      title: "IITian-Led Curriculum",
      description: "Designed by Dilip Sir (IIT Kanpur) with dual focus: Board excellence AND JEE/BITSAT prep."
    },
    {
      icon: Users,
      title: "Ultra-Small Batches",
      description: "Just 12 students per class — ensuring individual attention, personalized doubt-solving, and true mentoring."
    },
    {
      icon: Trophy,
      title: "97%+ Consistency",
      description: "Our 12th board students consistently score 95%+ in boards while preparing for engineering entrances."
    },
    {
      icon: Zap,
      title: "Smart Problem-Solving",
      description: "Advanced techniques, time management strategies, and logical shortcuts for quick calculations."
    },
    {
      icon: BookOpen,
      title: "Board + Competitive Ready",
      description: "Curriculum covers board patterns AND competitive exam questions for seamless transition."
    },
    {
      icon: Target,
      title: "Premium Offline Learning",
      description: "Focused, distraction-free classes at Amanora designed for maximum learning effectiveness."
    }
  ];

  const subjects = [
    {
      subject: "Physics",
      chapters: "Mechanics, Thermodynamics, Optics, Electromagnetism, Modern Physics, Waves",
      boardFocus: "Board exam pattern + conceptual depth for JEE Main",
      highlight: "Problem-solving with real-world applications"
    },
    {
      subject: "Chemistry",
      chapters: "Organic, Inorganic, Physical Chemistry, Periodicity, Bonding, Equilibrium",
      boardFocus: "Strategic approach to lengthy organic reactions, quick qualitative analysis",
      highlight: "Time-saving techniques for board exams"
    },
    {
      subject: "Mathematics",
      chapters: "Calculus, Algebra, Geometry, Trigonometry, Vector & 3D, Probability",
      boardFocus: "Vedic maths shortcuts + JEE-level problem solving",
      highlight: "Speed and accuracy through logical shortcuts"
    }
  ];

  const studyPhases = [
    {
      phase: "Phase 1: Conceptual Mastery",
      duration: "First 4-5 months",
      focus: "Complete board syllabus with deep understanding. Build strong fundamentals for competitive exams."
    },
    {
      phase: "Phase 2: Advanced Problem Solving",
      duration: "Months 6-9",
      focus: "Complex numerical, competitive-level questions, multiple problem-solving approaches."
    },
    {
      phase: "Phase 3: Board Exam Mastery + Competitive Prep",
      duration: "Months 10-12",
      focus: "Sample papers, previous years, mock tests, JEE Main pattern practice, final revision."
    }
  ];

  const boardExamTips = [
    "Understand concepts deeply, not just memorize",
    "Time management: practice numericals under exam conditions",
    "Balancing act: board prep + competitive exam readiness",
    "Regular mock tests: board patterns + JEE patterns",
    "Clear doubts immediately, don't let them accumulate",
    "Focus on high-weightage chapters given by board",
    "Revision strategy: short notes + mind maps",
    "Mental health matters: regular breaks, exercise, sleep"
  ];

  const suitableFor = [
    "Students aiming for 95%+ in boards + engineering entrance exams",
    "Those planning JEE Main, BITSAT, VITEEE after boards",
    "PCM students who want strong fundamentals with speed",
    "Learners who struggle to balance board + competitive prep",
    "Bright students aiming for top engineering colleges",
    "Students who need personalized attention and guidance"
  ];

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">🎓 12th Board PCM</span>
              <span className="ml-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">💻 Online Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Score <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">95%+</span> in Boards & Crack Engineering Exams
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Grade 12 PCM • Ages 17-18</h2>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">12th Board PCM Mastery Program</h2>
            <p className="text-xl text-gray-600 mb-4">
              Built by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> with dual expertise
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Board excellence + JEE Main/BITSAT preparation. All in one program.
            </p>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Start Your 12th Board Journey</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Grade 12</div>
              <p className="text-gray-600 text-lg">Age 17-18 years</p>
              <p className="text-gray-500 mt-2">Board exam + Engineering entrance prep</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3">3 Subjects</div>
              <p className="text-gray-600 text-lg">Physics, Chemistry, Mathematics</p>
              <p className="text-gray-500 mt-2">Board focused + Engineering ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎓 Why Parents Choose BuzzyBrains Academy for 12th Board PCM</h2>
            <p className="text-xl text-gray-600">Proven approach. Real results. Personalized mentorship.</p>
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

      {/* Subjects Covered */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📖 What We Cover</h2>
            <p className="text-xl text-gray-600">Comprehensive PCM curriculum for boards & competitive exams</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>{subject.subject}</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-2">Key Chapters:</p>
                    <p className="text-gray-700 text-sm">{subject.chapters}</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-1">📌 Board Focus:</p>
                    <p className="text-gray-700 text-sm">{subject.boardFocus}</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-1">💡 Special Highlight:</p>
                    <p className="text-gray-700 text-sm">{subject.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Phases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Our 3-Phase Study Plan</h2>
            <p className="text-xl text-gray-600">Strategic approach for board exam success + engineering entrance readiness</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studyPhases.map((phase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                <p className="text-blue-600 font-semibold text-center mb-4">{phase.duration}</p>
                <p className="text-gray-700 text-center">{phase.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Exam Tips */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">💡 Board Exam Success Tips</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {boardExamTips.map((tip, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <p className="text-white font-semibold">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">🎯 Who Is This Program For?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {suitableFor.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-600">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-semibold text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqJsonLd items={FAQS} />
      <MarketingFaq items={FAQS} />

      {/* Limited Seats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats Available</h2>
          <p className="text-xl text-gray-700 mb-8">
            Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so mentoring stays personal — once a batch fills, the next one starts the following month.
          </p>
          <div className="space-y-4 mb-8">
            <a href="tel:+919850570525" className="flex items-center justify-center space-x-3 text-lg text-gray-900 hover:text-blue-600 transition">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="font-bold">98505 70525</span>
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
            Book Your Seat Today
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Board Excellence?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our proven 12th board program and transform your exam results
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Start Your 12th PCM Prep Journey
          </button>
        </div>
      </section>

      {/* CTA Modal */}
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Ready to Enroll? 📚"
        subtitle="Get started with your 12th board preparation today"
      />
    </div>
  );
}
