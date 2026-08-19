'use client';

import React, { useState } from 'react';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy, Heart } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

const FAQS = [
  {
    question: 'Can this program prepare my child for boards and JEE/NEET at the same time?',
    answer: 'Yes — that\'s the core design. PCM students get dual board + JEE Main preparation, and PCB students get dual board + NEET preparation, built as one coherent curriculum rather than two separate tracks competing for study time.',
  },
  {
    question: 'How do I choose between the PCM and PCB track?',
    answer: 'PCM (Physics, Chemistry, Maths) leads to engineering and JEE; PCB (Physics, Chemistry, Biology) leads to medical and NEET. Most students already know their direction by Grade 11 — if not, we help assess fit during the initial consultation.',
  },
  {
    question: 'What is the batch size?',
    answer: 'Every batch is capped at a maximum of 12 students, so doubt-resolution stays individual even with the dual board + competitive-exam workload.',
  },
  {
    question: 'Is a dropper year (repeating Grade 12 for JEE/NEET) supported?',
    answer: 'Yes — droppers follow an accelerated version of the same curriculum, with more mock-test volume and less time spent on material they\'ve already covered once.',
  },
  {
    question: 'Are classes online or in person?',
    answer: 'Classes run from our Amanora, Pune centre, with an online option for students who prefer not to commute.',
  },
];

export default function Class12BoardPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'PCM' | 'PCB'>('PCM');

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

  const pcmFeatures = [
    {
      icon: Brain,
      title: "IITian-Led Curriculum",
      description: "Designed by Dilip Sir (IIT Kanpur | IIM Ahmedabad) with proven JEE + Board exam success record and deep subject expertise."
    },
    {
      icon: Users,
      title: "Ultra-Small Batches",
      description: "Just 12 students per class — ensuring individual attention, personalized doubt-solving, and true mentoring."
    },
    {
      icon: Trophy,
      title: "90%+ + JEE Qualifier",
      description: "Our students consistently score 90%+ in boards while qualifying for JEE Main with strong percentiles."
    },
    {
      icon: Zap,
      title: "Smart Learning Techniques",
      description: "Vedic maths shortcuts, problem-solving patterns, and logical thinking for speed and accuracy."
    },
    {
      icon: BookOpen,
      title: "Board + JEE Dual Focus",
      description: "Curriculum designed for both board excellence and JEE preparation. No compromise on either."
    },
    {
      icon: Target,
      title: "Premium Offline Learning",
      description: "Focused, distraction-free classes at Amanora designed for maximum learning effectiveness."
    }
  ];

  const pcbFeatures = [
    {
      icon: Brain,
      title: "IITian-Led Curriculum",
      description: "Designed by Dilip Sir (IIT Kanpur | IIM Ahmedabad) with deep understanding of Biology, Chemistry & Physics for NEET + Boards."
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

  const pcmSubjects = [
    {
      name: "Mathematics",
      chapters: "Calculus, Algebra, Vectors, 3D Geometry, Probability",
      highlight: "JEE-level problem solving with board exam clarity",
      tips: "Master calculus first. It's the foundation for Physics and higher math."
    },
    {
      name: "Physics",
      chapters: "Electromagnetism, Modern Physics, Optics, Thermodynamics, Mechanics",
      highlight: "Conceptual clarity with numerical practice",
      tips: "Solve numericals daily. Physics numericals are scoring in both boards and JEE."
    },
    {
      name: "Chemistry",
      chapters: "Organic Chemistry, Physical Chemistry, Inorganic Chemistry, Coordination Compounds",
      highlight: "Organic mechanisms + Inorganic memory techniques",
      tips: "Organic Chemistry is scoring. Master reaction mechanisms and name reactions."
    }
  ];

  const pcbSubjects = [
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

  const pcmTips = [
    "Understand concepts, don't memorize formulas",
    "Practice previous 10 years board + JEE papers",
    "Master calculus - it's 40% of JEE Maths",
    "Focus on high-weightage chapters in Physics",
    "Organic Chemistry: practice mechanisms daily",
    "Solve mock tests under timed conditions",
    "Physics numericals: build speed and accuracy",
    "Revise regularly: spaced repetition works best"
  ];

  const pcbTips = [
    "Understand concepts, don't just memorize facts",
    "Practice previous 10 years board + NEET papers",
    "Master diagram drawing and labeling",
    "Focus on high-weightage chapters (NCERT is key)",
    "Organic Chemistry reactions: practice daily",
    "Biology: create visual mind maps",
    "Physics numericals: solve under timed conditions",
    "Revise regularly: spaced repetition works best"
  ];

  const pcmSuitableFor = [
    "Students aiming for IIT-JEE, BITSAT, and engineering entrance exams",
    "Those targeting 90%+ in 12th boards (PCM stream)",
    "JEE aspirants who want dual preparation (Board + JEE)",
    "Learners who need personalized attention in Maths and Physics",
    "Students who want to master calculus and problem-solving",
    "Bright students wanting top percentile scores in both exams"
  ];

  const pcbSuitableFor = [
    "Students aiming for MBBS/BDS and medical careers",
    "Those targeting 90%+ in 12th boards (PCB stream)",
    "NEET aspirants who want dual preparation (Board + NEET)",
    "Learners who need personalized attention in Biology",
    "Students who feel anxious about organic chemistry",
    "Bright students wanting top percentile scores in both exams"
  ];

  const currentFeatures = activeTab === 'PCM' ? pcmFeatures : pcbFeatures;
  const currentSubjects = activeTab === 'PCM' ? pcmSubjects : pcbSubjects;
  const currentTips = activeTab === 'PCM' ? pcmTips : pcbTips;
  const currentSuitableFor = activeTab === 'PCM' ? pcmSuitableFor : pcbSuitableFor;
  const gradientColors = activeTab === 'PCM' ? 'from-blue-600 to-purple-600' : 'from-cyan-600 to-teal-600';
  const badgeColor = activeTab === 'PCM' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800';
  const highlightColor = activeTab === 'PCM' ? 'text-blue-600' : 'text-cyan-600';
  const borderColor = activeTab === 'PCM' ? 'border-blue-600' : 'border-cyan-600';

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Tab Switcher - Top Navigation */}
      <section className="bg-white border-b-2 border-gray-200 sticky top-[108px] z-40 pb-4 px-4 pt-[90px]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-semibold text-gray-500 mb-3">
            Not sure whether to choose PCM or PCB? Toggle below to compare both streams.
          </p>
          <div className="flex justify-center items-center gap-4 relative">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('PCM')}
                className={`w-72 px-8 py-3 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'PCM'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
                }`}
              >
                🔬 PCM (Engineering)
              </button>
              <button
                onClick={() => setActiveTab('PCB')}
                className={`w-72 px-8 py-3 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'PCB'
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-cyan-600'
                }`}
              >
                🧬 PCB (Medical)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-6 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mx-auto w-full max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 min-h-20">
              Score <span className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>90%+</span> {activeTab === 'PCM' ? '+ Crack JEE' : '+ Crack NEET'}
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-2 min-h-12">Grade 12 • {activeTab === 'PCM' ? 'PCM' : 'PCB'} <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold align-middle inline-block"><span className="blink-icon inline-block">•</span> Online Available</span></h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-2 min-h-12">
              {activeTab === 'PCM' ? 'Physics, Chemistry & Maths Mastery' : 'Physics, Chemistry & Biology Mastery'}
            </h3>
            <p className="text-xl text-gray-600 mb-2 min-h-8">
              Built by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur | IIM Ahmedabad)</span> for {activeTab === 'PCM' ? 'engineering' : 'medical'} aspirants
            </p>
            <p className="text-lg text-gray-700 mb-4 min-h-8">
              Dual preparation: Excel in boards + Build strong {activeTab === 'PCM' ? 'JEE' : 'NEET'} foundation
            </p>

            <button 
              onClick={() => setShowCtaModal(true)}
              className={`bg-gradient-to-r ${gradientColors} text-white px-8 py-4 rounded-lg hover:shadow-xl transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto w-full max-w-sm`}
            >
              <span>Start Your {activeTab === 'PCM' ? 'Engineering' : 'Medical'} Journey</span>
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
              <div className={`text-4xl font-bold ${highlightColor} mb-3`}>Grade 12 {activeTab}</div>
              <p className="text-gray-600 text-lg">Age 16-18 years</p>
              <p className="text-gray-500 mt-2">Board exam + {activeTab === 'PCM' ? 'JEE' : 'NEET'} preparation</p>
            </div>
            <div className={`bg-white rounded-xl p-8 shadow-lg text-center border-2 ${borderColor}`}>
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3">3 Subjects</div>
              <p className="text-gray-600 text-lg">
                {activeTab === 'PCM' ? 'Physics, Chemistry & Maths' : 'Physics, Chemistry & Biology'}
              </p>
              <p className="text-gray-500 mt-2">Board + {activeTab === 'PCM' ? 'JEE' : 'NEET'} focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎓 Why Parents Choose BuzzyBrains Academy for 12th {activeTab}</h2>
            <p className="text-xl text-gray-600">Proven approach. Real results. Personalized mentorship.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-96">
            {currentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all h-full">
                  <div className={`bg-gradient-to-r ${gradientColors} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
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
            <p className="text-xl text-gray-600">Comprehensive {activeTab} curriculum for boards + {activeTab === 'PCM' ? 'JEE' : 'NEET'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 min-h-96">
            {currentSubjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <BookOpen className={`w-6 h-6 ${highlightColor}`} />
                  <span>{subject.name}</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className={`text-sm font-semibold ${highlightColor} mb-2`}>Key Chapters:</p>
                    <p className="text-gray-700">{subject.chapters}</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-1">💡 Special Focus:</p>
                    <p className="text-gray-700">{subject.highlight}</p>
                  </div>
                  <div className={`${activeTab === 'PCM' ? 'bg-blue-50 border-blue-500' : 'bg-pink-50 border-pink-500'} border-l-4 p-4 rounded`}>
                    <p className="text-sm font-semibold text-gray-900 mb-1">📌 Board Tips:</p>
                    <p className="text-gray-700">{subject.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Exam Tips */}
      <section className={`py-20 px-4 bg-gradient-to-r ${gradientColors}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">💡 Board + {activeTab === 'PCM' ? 'JEE' : 'NEET'} Success Tips</h2>
          
          <div className="grid md:grid-cols-4 gap-6 min-h-64">
            {currentTips.map((tip, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 h-full">
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
            {currentSuitableFor.map((point, index) => (
              <div key={index} className={`flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 ${borderColor}`}>
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
        <div className={`max-w-4xl mx-auto text-center bg-gradient-to-r ${activeTab === 'PCM' ? 'from-blue-50 to-purple-50 border-blue-200' : 'from-pink-50 to-red-50 border-pink-200'} rounded-2xl p-12 border-2`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats Available</h2>
          <p className="text-xl text-gray-700 mb-8">
            Every batch is capped at <span className="font-bold text-blue-600">12 students</span> so mentoring stays personal — once a batch fills, the next one starts the following month.
          </p>
          <div className="space-y-4 mb-8">
            <a href="tel:+919850570525" className="flex items-center justify-center space-x-3 text-lg text-gray-900 hover:opacity-80 transition">
              <Phone className={`w-6 h-6 ${highlightColor}`} />
              <span className="font-bold">98505 70525</span>
            </a>
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <MapPin className={`w-6 h-6 ${highlightColor}`} />
              <span className="font-bold">Amanora, Hadapsar, Pune</span>
            </div>
          </div>
          <button 
            onClick={() => setShowCtaModal(true)}
            className={`bg-gradient-to-r ${gradientColors} text-white px-8 py-4 rounded-lg hover:shadow-xl transition text-lg font-semibold`}
          >
            Book Your Seat Today
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 bg-gradient-to-r ${gradientColors}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for {activeTab === 'PCM' ? 'Engineering' : 'Medical'} Excellence?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our proven 12th {activeTab} program and excel in both boards and {activeTab === 'PCM' ? 'JEE' : 'NEET'}
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* CTA Modal */}
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title={`Ready to Enroll? ${activeTab === 'PCM' ? '🎓' : '🩺'}`}
        subtitle={`Get started with your 12th ${activeTab} preparation today`}
      />
    </div>
  );
}
