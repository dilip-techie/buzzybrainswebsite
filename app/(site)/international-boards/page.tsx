'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy, Globe, Calculator, Microscope, Code, DollarSign, BookOpenCheck } from 'lucide-react';

type BoardTab = 'IGCSE' | 'IB' | 'A-Level' | 'AP';

const HASH_TO_TAB: Record<string, BoardTab> = {
  igcse: 'IGCSE',
  ib: 'IB',
  'a-level': 'A-Level',
  ap: 'AP',
};

export default function InternationalBoardsPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [activeTab, setActiveTab] = useState<BoardTab>('IGCSE');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const matchedTab = HASH_TO_TAB[hash];
    if (matchedTab) setActiveTab(matchedTab);
  }, []);

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
      title: "IITian-Led International Curriculum",
      description: "Designed and taught by Dilip Sir (IIT Kanpur | IIM Ahmedabad) with deep understanding of Cambridge IGCSE/A Level, IB, and AP syllabi."
    },
    {
      icon: Users,
      title: "Ultra-Small Batches",
      description: "Just 12 students per class — ensuring individual attention, personalized doubt-solving, and true mentoring."
    },
    {
      icon: Globe,
      title: "International Standards",
      description: "Teaching methodology aligned with international education standards. Focus on critical thinking and application."
    },
    {
      icon: Trophy,
      title: "Top Grades Track Record",
      description: "Our students consistently achieve A*/A in IGCSE and A Level, Score 7 in IB, and Score 5 in AP exams."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Subject Coverage",
      description: "Maths, Sciences, Computer Science, Economics, Accounting, and Social Studies — all subjects covered."
    },
    {
      icon: Target,
      title: "Premium Offline Learning",
      description: "Focused, distraction-free classes at Amanora designed for maximum learning effectiveness."
    }
  ];

  const subjects = [
    {
      name: "Mathematics",
      icon: Calculator,
      topics: "Pure Maths, Statistics, Mechanics, Calculus (AP), HL & SL (IB)",
      description: "From IGCSE Extended to IB HL and AP Calculus BC"
    },
    {
      name: "Sciences",
      icon: Microscope,
      topics: "Physics, Chemistry, Biology — all three sciences covered",
      description: "Cambridge, IB HL/SL, and AP Physics C, Chemistry, Biology"
    },
    {
      name: "Computer Science",
      icon: Code,
      topics: "Programming, Algorithms, Data Structures, Computational Thinking",
      description: "IGCSE CS, IB Computer Science HL/SL, AP Computer Science A"
    },
    {
      name: "Economics & Accounting",
      icon: DollarSign,
      topics: "Micro/Macro Economics, Financial Accounting, Business Studies",
      description: "IGCSE, IB HL/SL Economics, AP Microeconomics & Macroeconomics"
    },
    {
      name: "Social Studies",
      icon: BookOpenCheck,
      topics: "History, Geography, Business Studies, Global Perspectives",
      description: "Cambridge curriculum aligned with international standards"
    }
  ];

  const igcseFeatures = [
    "Cambridge & Edexcel curriculum expertise",
    "Extended & Core tier preparation",
    "Grade 9/A/A* focused strategies",
    "Past papers from last 10 years",
    "Mark scheme analysis & exam techniques",
    "Subject-specific study material"
  ];

  const ibFeatures = [
    "MYP (Grades 6-10) & DP (Grades 11-12)",
    "HL & SL subject coverage",
    "Internal Assessment (IA) guidance",
    "Extended Essay (EE) mentorship",
    "TOK (Theory of Knowledge) support",
    "CAS (Creativity, Activity, Service) planning"
  ];

  const apFeatures = [
    "AP Calculus AB & BC",
    "AP Physics 1, 2, C (Mechanics & E&M)",
    "AP Chemistry & Biology",
    "AP Computer Science A",
    "AP Microeconomics & Macroeconomics",
    "Score 5 strategies & college credit prep"
  ];

  const alFeatures = [
    "AS Level (Year 12) & A Level (Year 13) coverage",
    "Cambridge International & Edexcel A Level boards",
    "Maths, Further Maths, Physics, Chemistry, Biology, Economics",
    "Grade A*/A focused exam strategy",
    "Past papers & mark scheme mastery",
    "UCAS-ready subject combinations for UK university applications"
  ];

  const studyApproach = [
    {
      phase: "Phase 1: Foundation Building",
      duration: "Grades 6-8 (MYP Years 1-3)",
      focus: "Build strong conceptual foundation. Introduce international curriculum thinking patterns early."
    },
    {
      phase: "Phase 2: Advanced Concepts",
      duration: "Grades 9-10 (IGCSE/MYP Checkpoint)",
      focus: "IGCSE Extended preparation. MYP criterion-based assessment. Deep subject mastery."
    },
    {
      phase: "Phase 3: Diploma & AP Excellence",
      duration: "Grades 11-12 (IB DP/AP Exams)",
      focus: "IB DP HL/SL subjects. AP exam preparation. IA, EE, TOK guidance. Score 7 & Score 5 strategies."
    }
  ];

  const successTips = [
    "Understand concepts deeply, not just memorize",
    "Practice past papers under timed conditions",
    "Master the mark scheme and examiner expectations",
    "Focus on critical thinking and application",
    "IB students: Start IA and EE early",
    "AP students: Focus on FRQ (Free Response Questions)",
    "Use international resources and study guides",
    "Regular revision with spaced repetition"
  ];

  const suitableFor = [
    "Students enrolled in Cambridge IGCSE schools",
    "IB MYP and IB Diploma Programme students",
    "A Level and AS Level students (Cambridge International & Edexcel)",
    "Students preparing for AP exams for college credit",
    "Those aiming for top universities (Ivy League, Oxbridge, etc.)",
    "Learners who need personalized attention in international curriculum",
    "Students wanting A*/A, Score 7, or Score 5 in their subjects"
  ];

  const TAB_STYLE: Record<BoardTab, { gradient: string; badge: string; highlight: string; border: string }> = {
    IGCSE: { gradient: 'from-blue-600 to-cyan-600', badge: 'bg-indigo-100 text-indigo-800', highlight: 'text-blue-600', border: 'border-blue-600' },
    IB: { gradient: 'from-emerald-600 to-green-600', badge: 'bg-teal-100 text-teal-800', highlight: 'text-emerald-600', border: 'border-emerald-600' },
    'A-Level': { gradient: 'from-amber-600 to-orange-600', badge: 'bg-amber-100 text-amber-800', highlight: 'text-amber-600', border: 'border-amber-600' },
    AP: { gradient: 'from-purple-600 to-violet-600', badge: 'bg-rose-100 text-rose-800', highlight: 'text-purple-600', border: 'border-purple-600' },
  };
  const gradientColors = TAB_STYLE[activeTab].gradient;
  const badgeColor = TAB_STYLE[activeTab].badge;
  const highlightColor = TAB_STYLE[activeTab].highlight;
  const borderColor = TAB_STYLE[activeTab].border;

  const TAB_CONTENT: Record<BoardTab, { features: string[]; title: string; emoji: string; subtitle: string }> = {
    IGCSE: { features: igcseFeatures, title: 'Cambridge IGCSE', emoji: '🌍', subtitle: 'Grades 4-12 (Cambridge/Edexcel)' },
    IB: { features: ibFeatures, title: 'IB Diploma Programme', emoji: '🎓', subtitle: 'Grades 4-12 (MYP & DP)' },
    'A-Level': { features: alFeatures, title: 'A Level / AS Level', emoji: '📐', subtitle: 'AS (Year 12) & A Level (Year 13)' },
    AP: { features: apFeatures, title: 'AP Exams', emoji: '🏆', subtitle: 'Advanced Placement Exams' },
  };
  const currentFeatures = TAB_CONTENT[activeTab].features;
  const currentTitle = TAB_CONTENT[activeTab].title;
  const currentEmoji = TAB_CONTENT[activeTab].emoji;
  const currentSubtitle = TAB_CONTENT[activeTab].subtitle;

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Tab Switcher - Top Navigation */}
      <section className="bg-white border-b-2 border-gray-200 sticky top-[108px] z-40 pb-4 px-4 pt-4 mt-[108px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 relative">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                id="igcse"
                onClick={() => setActiveTab('IGCSE')}
                className={`w-48 px-6 py-3 rounded-xl font-bold text-lg transition-all scroll-mt-[220px] ${
                  activeTab === 'IGCSE'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
                }`}
              >
                🌍 IGCSE
              </button>
              <button
                id="ib"
                onClick={() => setActiveTab('IB')}
                className={`w-48 px-6 py-3 rounded-xl font-bold text-lg transition-all scroll-mt-[220px] ${
                  activeTab === 'IB'
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-600'
                }`}
              >
                🎓 IB Diploma
              </button>
              <button
                id="a-level"
                onClick={() => setActiveTab('A-Level')}
                className={`w-48 px-6 py-3 rounded-xl font-bold text-lg transition-all scroll-mt-[220px] ${
                  activeTab === 'A-Level'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-600'
                }`}
              >
                📐 A Level
              </button>
              <button
                id="ap"
                onClick={() => setActiveTab('AP')}
                className={`w-48 px-6 py-3 rounded-xl font-bold text-lg transition-all scroll-mt-[220px] ${
                  activeTab === 'AP'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-600'
                }`}
              >
                🏆 AP Exams
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-6 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
              Excel in <span className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>International Boards</span>
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-2">Grades 4-12 • IGCSE | IB | A Level | AP <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold align-middle inline-block"><span className="blink-icon inline-block">•</span> Online Available</span></h2>
            <p className="text-xl text-gray-600 mb-2">
              Expert coaching by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur | IIM Ahmedabad)</span> for international curriculum
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Small batches. World-class mentorship. A*/Score 7/Score 5 results.
            </p>

            <button 
              onClick={() => setShowCtaModal(true)}
              className={`bg-gradient-to-r ${gradientColors} text-white px-8 py-4 rounded-lg hover:shadow-xl transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto`}
            >
              <span>Enroll in IGCSE/IB/A Level/AP Coaching</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center min-w-0">
              <div className={`text-3xl md:text-4xl font-bold ${highlightColor} mb-3 break-words`}>{currentSubtitle}</div>
              <p className="text-gray-600 text-lg">All subjects covered</p>
              <p className="text-gray-500 mt-2">Maths, Sciences, CS, Economics, Accounting</p>
            </div>
            <div className={`bg-white rounded-xl p-8 shadow-lg text-center border-2 ${borderColor} min-w-0`}>
              <div className="text-4xl md:text-6xl font-black text-blue-600 mb-3 break-words">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center min-w-0">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-3 break-words">A*/7/5</div>
              <p className="text-gray-600 text-lg">Top Grades Focused</p>
              <p className="text-gray-500 mt-2">International standards excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Why Parents Choose BuzzyBrains Academy for International Boards</h2>
            <p className="text-xl text-gray-600">World-class teaching. Proven results. Personalized mentorship.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all">
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

      {/* Program Features */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 {currentTitle} Program Features</h2>
            <p className="text-xl text-gray-600">Everything you need to excel in {activeTab} curriculum</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start space-x-3">
                <CheckCircle className={`w-6 h-6 ${highlightColor} flex-shrink-0 mt-1`} />
                <p className="text-gray-900 font-semibold">{feature}</p>
              </div>
            ))}
          </div>

          {activeTab === 'AP' && (
            <div className="text-center mt-10">
              <Link
                href="/ap-exam"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradientColors} text-white px-8 py-4 rounded-lg hover:shadow-xl transition text-lg font-semibold`}
              >
                See the full AP Exams page — subjects, FRQ prep &amp; score-5 method
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📖 Subjects We Cover</h2>
            <p className="text-xl text-gray-600">Comprehensive subject coverage for all international boards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all">
                  <div className={`bg-gradient-to-r ${gradientColors} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{subject.name}</h3>
                  <p className={`text-sm font-semibold ${highlightColor} mb-2`}>Topics:</p>
                  <p className="text-gray-700 mb-4">{subject.topics}</p>
                  <p className="text-gray-600 text-sm italic">{subject.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Approach */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Our 3-Phase Study Approach</h2>
            <p className="text-xl text-gray-600">Strategic progression from foundation to excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studyApproach.map((phase, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 border-2 ${borderColor}`}>
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${gradientColors} rounded-full text-white font-bold mb-4 mx-auto`}>
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                <p className={`${highlightColor} font-semibold text-center mb-4`}>{phase.duration}</p>
                <p className="text-gray-700 text-center">{phase.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className={`py-20 px-4 bg-gradient-to-r ${gradientColors}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">💡 International Board Success Tips</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {successTips.map((tip, index) => (
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
              <div key={index} className={`flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 ${borderColor}`}>
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-semibold text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Seats */}
      <section className="py-20 px-4 bg-white">
        <div className={`max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border-2 ${borderColor}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats Available</h2>
          <p className="text-xl text-gray-700 mb-8">
            Small batches mean <span className="font-bold text-blue-600">maximum attention</span> for each student. Enrollment fills fast!
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <Phone className={`w-6 h-6 ${highlightColor}`} />
              <span className="font-bold">98505 70525</span>
            </div>
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

      {/* Guides */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Free IGCSE &amp; IB Guides</h2>
          <p className="text-gray-600 text-center mb-10">In-depth, honest guides on Cambridge IGCSE and IB Diploma preparation.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 id="igcse-guides" className="text-lg font-bold text-gray-900 mb-3 scroll-mt-[220px]">🌍 Cambridge IGCSE</h3>
              <ul className="space-y-2">
                {[
                  { href: '/blog/complete-guide-cambridge-igcse-mathematics-0580', label: 'Complete Guide to Cambridge IGCSE Mathematics (0580)' },
                  { href: '/blog/how-to-score-a-star-igcse-additional-mathematics-0606', label: 'How to Score A* in IGCSE Additional Mathematics (0606)' },
                  { href: '/blog/how-personalized-tutoring-improves-igcse-ib-results', label: 'How Personalized Tutoring Improves IGCSE and IB Results' },
                ].map((g) => (
                  <li key={g.href} className="border border-gray-200 rounded-lg bg-white">
                    <Link href={g.href} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600">
                      {g.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 id="ib-guides" className="text-lg font-bold text-gray-900 mb-3 scroll-mt-[220px]">🎓 IB Diploma</h3>
              <ul className="space-y-2">
                {[
                  { href: '/blog/ib-mathematics-aa-vs-ai-which-should-you-choose', label: 'IB Mathematics AA vs AI: Which Should You Choose?' },
                  { href: '/blog/top-strategies-score-7-ib-physics', label: 'Top Strategies to Score a 7 in IB Physics' },
                ].map((g) => (
                  <li key={g.href} className="border border-gray-200 rounded-lg bg-white">
                    <Link href={g.href} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600">
                      {g.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 bg-gradient-to-r ${gradientColors}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for International Excellence?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our proven international boards program and achieve A*/Score 7/Score 5
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Start Your Global Journey Today
          </button>
        </div>
      </section>

      {/* CTA Modal */}
      {showCtaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Enroll? {currentEmoji}</h2>
              <p className="text-gray-600">Get started with your {currentTitle} preparation today</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleCtaModalForm}
                className={`w-full bg-gradient-to-r ${gradientColors} text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all font-semibold flex items-center justify-between group`}
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
