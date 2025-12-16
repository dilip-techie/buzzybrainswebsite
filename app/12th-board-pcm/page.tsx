'use client';

import React, { useState } from 'react';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, Mail, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition"
              >
                BuzzyBrains Academy
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="/#courses" className="text-gray-700 hover:text-blue-600 transition">Courses</a>
              <a href="/#results" className="text-gray-700 hover:text-blue-600 transition">Results</a>
              <a href="/admissions" className="text-gray-700 hover:text-blue-600 transition">Admission Enquiry</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-500 transition">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span className="hidden md:inline">Whatsapp</span>
              </a>
            </div>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
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
              <div className="text-4xl font-bold text-blue-600 mb-3">Grade 12</div>
              <p className="text-gray-600 text-lg">Age 17-18 years</p>
              <p className="text-gray-500 mt-2">Board exam + Engineering entrance prep</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-3">3 Subjects</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎓 Why Parents Choose BuzzyBrains for 12th Board PCM</h2>
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

      {/* Limited Seats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats Available</h2>
          <p className="text-xl text-gray-700 mb-8">
            Small batches mean <span className="font-bold text-blue-600">maximum attention</span> for each student. Enrollment fills fast!
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="font-bold">98505 70525</span>
            </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">BuzzyBrains Academy</h3>
              <p className="text-sm">12th board preparation with 95%+ results. Expert mentors. Small batches. Real success.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/foundation" className="hover:text-white transition">Foundation (6-10)</a></li>
                <li><a href="/10th-board" className="hover:text-white transition">10th Board</a></li>
                <li><a href="/12th-board-pcm" className="hover:text-white transition">12th Board PCM</a></li>
                <li><a href="/12th-board-pcb" className="hover:text-white transition">12th Board PCB</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/#results" className="hover:text-white transition">Results</a></li>
                <li><a href="/#contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919850570525" className="hover:text-white transition">+91 9850570525</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@buzzybrains.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Amanora, Pune</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm">&copy; 2025 BuzzyBrains Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CTA Modal */}
      {showCtaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Enroll? 📚</h2>
              <p className="text-gray-600">Get started with your 12th board preparation today</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleCtaModalForm}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all font-semibold flex items-center justify-between group"
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
