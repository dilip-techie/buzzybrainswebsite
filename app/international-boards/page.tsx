'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, Mail, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy, Globe, Calculator, Microscope, Code, DollarSign, BookOpenCheck, GraduationCap, Menu, X } from 'lucide-react';

export default function InternationalBoardsPage() {
  const pathname = usePathname();
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'IGCSE' | 'IB' | 'AP'>('IGCSE');
  
  const isActive = (href: string) => {
    if (href === '#contact') return false;
    return pathname === href;
  };

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
      description: "Designed and taught by Dilip Sir (IIT Kanpur | IIM Ahmedabad) with deep understanding of Cambridge, IB, and AP syllabi."
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
      description: "Our students consistently achieve A*/A in IGCSE, Score 7 in IB, and Score 5 in AP exams."
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
    "Students preparing for AP exams for college credit",
    "Those aiming for top universities (Ivy League, Oxbridge, etc.)",
    "Learners who need personalized attention in international curriculum",
    "Students wanting A*/A, Score 7, or Score 5 in their subjects"
  ];

  const gradientColors = activeTab === 'IGCSE' ? 'from-blue-600 to-cyan-600' : activeTab === 'IB' ? 'from-emerald-600 to-green-600' : 'from-purple-600 to-violet-600';
  const badgeColor = activeTab === 'IGCSE' ? 'bg-indigo-100 text-indigo-800' : activeTab === 'IB' ? 'bg-teal-100 text-teal-800' : 'bg-rose-100 text-rose-800';
  const highlightColor = activeTab === 'IGCSE' ? 'text-blue-600' : activeTab === 'IB' ? 'text-emerald-600' : 'text-purple-600';
  const borderColor = activeTab === 'IGCSE' ? 'border-blue-600' : activeTab === 'IB' ? 'border-emerald-600' : 'border-purple-600';

  const currentFeatures = activeTab === 'IGCSE' ? igcseFeatures : activeTab === 'IB' ? ibFeatures : apFeatures;
  const currentTitle = activeTab === 'IGCSE' ? 'Cambridge IGCSE' : activeTab === 'IB' ? 'IB Diploma Programme' : 'AP Exams';
  const currentEmoji = activeTab === 'IGCSE' ? '🌍' : activeTab === 'IB' ? '🎓' : '🏆';
  const currentSubtitle = activeTab === 'IGCSE' ? 'Grades 6-10 (Cambridge/Edexcel)' : activeTab === 'IB' ? 'MYP (6-10) & DP (11-12)' : 'Advanced Placement Exams';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BuzzyBrains Academy (Grades 6-12)</span>
              </div>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="/foundation" className={isActive('/foundation') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>Foundation Courses</a>
              <a href="/12th-board" className={isActive('/12th-board') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>Indian Boards</a>
              <a href="/international-boards" className={isActive('/international-boards') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>International Boards</a>
              <a href="/one-on-one" className={isActive('/one-on-one') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>1-1 Class</a>
              <a href="/admissions" className={isActive('/admissions') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>Admission Enquiry</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-500 transition" title="Chat on WhatsApp">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span className="hidden md:inline">WhatsApp</span>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-3">
              <a href="/foundation" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-2 rounded ${isActive('/foundation') ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>Foundation Courses</a>
              <a href="/12th-board" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-2 rounded ${isActive('/12th-board') ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>Indian Boards</a>
              <a href="/international-boards" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-2 rounded ${isActive('/international-boards') ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>International Boards</a>
              <a href="/one-on-one" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-2 rounded ${isActive('/one-on-one') ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>1-1 Class</a>
              <a href="/admissions" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-2 rounded ${isActive('/admissions') ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>Admission Enquiry</a>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-gray-700 hover:bg-gray-50">Contact Us</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded text-green-600 hover:bg-green-50 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span>WhatsApp: 9850570525</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Tab Switcher - Top Navigation */}
      <section className="bg-white border-b-2 border-gray-200 sticky top-16 z-40 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 relative">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('IGCSE')}
                className={`w-56 px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'IGCSE'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
                }`}
              >
                🌍 IGCSE
              </button>
              <button
                onClick={() => setActiveTab('IB')}
                className={`w-56 px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'IB'
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-600'
                }`}
              >
                🎓 IB Diploma
              </button>
              <button
                onClick={() => setActiveTab('AP')}
                className={`w-56 px-6 py-3 rounded-xl font-bold text-lg transition-all ${
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
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-2">Grades 6-12 • IGCSE | IB | AP Exams <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold align-middle inline-block"><span className="blink-icon inline-block">•</span> Online Available</span></h2>
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
              <span>Enroll in IGCSE/IB/AP Coaching</span>
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
              <div className={`text-4xl font-bold ${highlightColor} mb-3`}>{currentSubtitle}</div>
              <p className="text-gray-600 text-lg">All subjects covered</p>
              <p className="text-gray-500 mt-2">Maths, Sciences, CS, Economics, Accounting</p>
            </div>
            <div className={`bg-white rounded-xl p-8 shadow-lg text-center border-2 ${borderColor}`}>
              <div className="text-4xl font-bold text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-3">A*/7/5</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Why Parents Choose BuzzyBrains for International Boards</h2>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8" />
              <span className="text-xl font-bold">BuzzyBrains Academy</span>
            </div>
            <p className="text-gray-400">Transforming students into achievers since 2010</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="#results" className="hover:text-white transition">Results</a></li>
              <li><a href="/admissions" className="hover:text-white transition">Admission Enquiry</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#foundation" className="hover:text-white transition">Foundation (6-10)</a></li>
              <li><a href="#courses" className="hover:text-white transition">Excellence Track (11-12)</a></li>
              <li><a href="#courses" className="hover:text-white transition">JEE Main & MHT-CET</a></li>
              <li><a href="#courses" className="hover:text-white transition">NEET Coaching</a></li>
              <li><a href="#courses" className="hover:text-white transition">10th Board Programs</a></li>
              <li><a href="#courses" className="hover:text-white transition">12th Board Programs</a></li>
              <li><a href="#courses" className="hover:text-white transition">Board Crash Courses</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919850570525" className="hover:text-white transition">+91 9850570525</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@buzzybrainsacademy.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">WhatsApp</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Amanora Park Town, Hadapsar, PUne-411028, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 BuzzyBrains Academy. All rights reserved.</p>
        </div>
      </footer>

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

      {/* Floating WhatsApp Chat Button */}
      <a
        href="https://wa.me/919850570525"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all group"
        title="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/>
        </svg>
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
