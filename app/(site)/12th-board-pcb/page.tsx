'use client';

import React, { useState } from 'react';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy, Heart } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';

const FAQS = [
  {
    question: 'How is NCERT used in this NEET + board program?',
    answer: 'NCERT is the core text, taught line-by-line rather than skimmed — NEET Biology in particular draws heavily and directly from NCERT phrasing, so students who master it consistently outperform those relying only on reference books.',
  },
  {
    question: 'Can board preparation and NEET preparation really happen together?',
    answer: 'Yes, and it should — a well-structured program builds board-exam clarity and NEET-level depth from the same NCERT foundation, instead of treating boards and NEET as two separate syllabi competing for time.',
  },
  {
    question: 'What is the batch size?',
    answer: 'Every batch is capped at a maximum of 12 students, so every student gets individual attention on Biology diagrams, Organic Chemistry mechanisms and Physics numericals.',
  },
  {
    question: 'Is a dropper year supported for NEET?',
    answer: 'Yes — for students who fell short by a correctable margin, a focused dropper year with small-batch mentoring often closes the gap. It\'s a bigger commitment and should be a considered decision, not a default.',
  },
  {
    question: 'Are classes online or in person?',
    answer: 'Classes run from our Amanora, Pune centre, with an online option for students who prefer not to commute.',
  },
];

export default function Class12BoardPCBPage() {
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
      description: "Designed by Dilip Sir (IIT Kanpur) with deep understanding of Biology, Chemistry & Physics for NEET + Boards."
    },
    {
      icon: Users,
      title: "Ultra-Small Batches",
      description: "Just 12 students per class — ensuring individual attention, personalized doubt-solving, and true mentoring."
    },
    {
      icon: Heart,
      title: "NEET + Board Focused",
      description: "Dual preparation strategy. Score 90%+ in boards while building strong foundation for NEET."
    },
    {
      icon: Zap,
      title: "Quick Problem-Solving",
      description: "Vedic maths for calculations, memory techniques for Biology, and logical shortcuts for speed."
    },
    {
      icon: BookOpen,
      title: "Board Pattern Mastery",
      description: "Targeted curriculum aligned with exact board patterns. Previous years, sample papers, and NEET-level questions."
    },
    {
      icon: Target,
      title: "Premium Offline Learning",
      description: "Focused, distraction-free classes at Amanora designed for maximum learning effectiveness."
    }
  ];

  const subjects = [
    {
      name: "Biology",
      chapters: "Human Physiology, Genetics, Evolution, Biotechnology, Ecology",
      highlight: "NEET-focused depth with board exam clarity",
      tips: "Understand diagrams, practice labeling, and memorize through visual associations."
    },
    {
      name: "Chemistry",
      chapters: "Organic Chemistry, Coordination Compounds, Biomolecules, Polymers, Electrochemistry",
      highlight: "Organic mechanisms made simple",
      tips: "Practice reaction mechanisms daily. Chemistry is the scoring subject in NEET."
    },
    {
      name: "Physics",
      chapters: "Electromagnetism, Modern Physics, Optics, Thermodynamics, Current Electricity",
      highlight: "Conceptual clarity with numerical practice",
      tips: "Solve numericals daily. Physics can be your differentiator in NEET."
    }
  ];

  const studyPlan = [
    {
      phase: "Phase 1: Foundation Building",
      duration: "Class 11 Completion + Early Class 12",
      focus: "Complete Class 11 revision. Build strong fundamentals in all three subjects."
    },
    {
      phase: "Phase 2: Advanced Concepts",
      duration: "Class 12 Mid-Year",
      focus: "Deep dive into Class 12 topics. NEET-level problem solving. Board pattern practice."
    },
    {
      phase: "Phase 3: Board + NEET Mastery",
      duration: "Final Months",
      focus: "Board sample papers, NEET mock tests, final revision, doubt-solving, exam strategy."
    }
  ];

  const boardExamTips = [
    "Understand concepts, don't just memorize facts",
    "Practice previous 10 years board + NEET papers",
    "Master diagram drawing and labeling",
    "Focus on high-weightage chapters (NCERT is key)",
    "Organic Chemistry reactions: practice daily",
    "Biology: create visual mind maps",
    "Physics numericals: solve under timed conditions",
    "Revise regularly: spaced repetition works best"
  ];

  const suitableFor = [
    "Students aiming for MBBS/BDS and medical careers",
    "Those targeting 90%+ in 12th boards (PCB stream)",
    "NEET aspirants who want dual preparation (Board + NEET)",
    "Learners who need personalized attention in Biology",
    "Students who feel anxious about organic chemistry",
    "Bright students wanting top percentile scores in both exams"
  ];

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-bold">🩺 12th Board PCB Excellence</span>              <span className="ml-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">💻 Online Available</span>            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Score <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">90%+</span> + Crack NEET
            </h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Physics, Chemistry & Biology Mastery</h2>
            <p className="text-xl text-gray-600 mb-4">
              Built by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur)</span> for medical aspirants
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Dual preparation: Excel in boards + Build strong NEET foundation
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <a href="/12th-board-pcm" className="text-blue-600 hover:underline font-semibold">
                Looking for PCM? Click here →
              </a>
            </div>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Start Your Medical Journey</span>
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
              <div className="text-5xl md:text-6xl font-black text-pink-600 mb-3">Grade 12 PCB</div>
              <p className="text-gray-600 text-lg">Age 16-18 years</p>
              <p className="text-gray-500 mt-2">Board exam + NEET preparation</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3">3 Subjects</div>
              <p className="text-gray-600 text-lg">Physics, Chemistry & Biology</p>
              <p className="text-gray-500 mt-2">Board + NEET focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎓 Why Parents Choose BuzzyBrains Academy for 12th PCB</h2>
            <p className="text-xl text-gray-600">Proven approach. Real results. Personalized mentorship.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all">
                  <div className="bg-gradient-to-r from-pink-600 to-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
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
            <p className="text-xl text-gray-600">Comprehensive PCB curriculum for boards + NEET</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-pink-600" />
                  <span>{subject.name}</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-pink-600 mb-2">Key Chapters:</p>
                    <p className="text-gray-700">{subject.chapters}</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-1">💡 Special Focus:</p>
                    <p className="text-gray-700">{subject.highlight}</p>
                  </div>
                  <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-1">📌 Board Tips:</p>
                    <p className="text-gray-700">{subject.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Plan */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Our 3-Phase Study Plan</h2>
            <p className="text-xl text-gray-600">Strategic approach for board + NEET success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studyPlan.map((phase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-pink-600">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-full text-white font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                <p className="text-pink-600 font-semibold text-center mb-4">{phase.duration}</p>
                <p className="text-gray-700 text-center">{phase.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Exam Tips */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-red-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">💡 Board + NEET Success Tips</h2>
          
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
              <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-pink-600">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
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
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-12 border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats Available</h2>
          <p className="text-xl text-gray-700 mb-8">
            Small batches mean <span className="font-bold text-blue-600">maximum attention</span> for each student. Enrollment fills fast!
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <Phone className="w-6 h-6 text-pink-600" />
              <span className="font-bold">98505 70525</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <MapPin className="w-6 h-6 text-pink-600" />
              <span className="font-bold">Amanora, Hadapsar, Pune</span>
            </div>
          </div>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition text-lg font-semibold"
          >
            Book Your Seat Today
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Medical Excellence?</h2>
          <p className="text-xl text-pink-100 mb-8">
            Join our proven 12th PCB program and excel in both boards and NEET
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Start Your Medical Journey Today
          </button>
        </div>
      </section>

      {/* CTA Modal */}
      {showCtaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Enroll? 🩺</h2>
              <p className="text-gray-600">Get started with your 12th PCB preparation today</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleCtaModalForm}
                className="w-full bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all font-semibold flex items-center justify-between group"
              >
                <span>📝 Contact Form</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              
              <button
                onClick={handleCtaModalWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all font-semibold flex items-center justify-between group"
              >
                <span>💬 WhatsApp Chat</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
            
            <button
              onClick={() => setShowCtaModal(false)}
              className="w-full mt-6 text-gray-600 hover:text-gray-900 font-medium py-2 transition"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
