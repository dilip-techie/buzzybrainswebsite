'use client';

import React, { useState } from 'react';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy } from 'lucide-react';

export default function Class10BoardPage() {
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
      description: "Designed by Dilip Sir (IIT Kanpur | IIM Ahmedabad) with proven board exam success record and deep subject expertise."
    },
    {
      icon: Users,
      title: "Ultra-Small Batches",
      description: "Just 12 students per class — ensuring individual attention, personalized doubt-solving, and true mentoring."
    },
    {
      icon: Trophy,
      title: "90%+ Consistency",
      description: "Our students consistently score above 90% in board exams. Proven track record over multiple years."
    },
    {
      icon: Zap,
      title: "Smart Learning Techniques",
      description: "Vedic maths shortcuts, memory techniques, and logical problem-solving for speed and accuracy."
    },
    {
      icon: BookOpen,
      title: "Board Pattern Mastery",
      description: "Targeted curriculum aligned with exact board patterns. Previous years, sample papers, and mock tests included."
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
      chapters: "Algebra, Geometry, Trigonometry, Statistics, Probability",
      highlight: "Vedic maths shortcuts for quick calculations",
      tips: "Focus on fundamentals. Board emphasizes concept clarity over rote learning."
    },
    {
      name: "Science (Physics & Chemistry)",
      chapters: "Mechanics, Heat, Light, Chemical Reactions, Acids & Bases, Metals & Non-metals",
      highlight: "Practical approach with lab demonstrations",
      tips: "Understand the 'why' behind every concept. Board questions test deep understanding."
    }
  ];

  const studyPlan = [
    {
      phase: "Phase 1: Conceptual Foundation",
      duration: "Grades 6-9",
      focus: "Build strong fundamentals in both subjects. Ensure no gaps from earlier classes."
    },
    {
      phase: "Phase 2: Advanced Problem Solving",
      duration: "Grade 9 (Later half)",
      focus: "Complex problems, multiple approaches, time management strategies."
    },
    {
      phase: "Phase 3: Board Exam Mastery",
      duration: "Grade 10",
      focus: "Sample papers, board patterns, mock exams, final revision, doubt-solving."
    }
  ];

  const successMetrics = [
    { metric: "90%+", description: "Average Score in Maths & Science" },
    { metric: "100%", description: "Student Satisfaction Rate" },
    { metric: "Consistent", description: "Year on Year Excellence" },
    { metric: "Small", description: "Batches (Max 12 students)" }
  ];

  const boardExamTips = [
    "Understand concepts, don't memorize formulas",
    "Practice previous 10 years board papers",
    "Time management: solve mock tests under exam conditions",
    "Focus on high-weightage chapters (given by board)",
    "Lab skills matter: understand experiments practically",
    "Revise regularly: no cramming at the end",
    "Clear doubts immediately, don't let them pile up",
    "Take care of mental health: regular breaks, exercise, sleep"
  ];

  const suitableFor = [
    "Students who want 90%+ scores in board exams",
    "Those planning to take JEE/NEET after boards",
    "Learners who need personalized attention and guidance",
    "Students who feel anxious about Maths and Science",
    "Those who want to build strong fundamentals early",
    "Bright students aiming for top percentile scores"
  ];

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">📚 10th Board Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Score <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">90%+</span> in Board Exams
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Grade 10 • Maths & Science <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold align-middle inline-block"><span className="blink-icon inline-block">●</span> Online Available</span></h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Mastery Program</h3>
            <p className="text-xl text-gray-600 mb-4">
              Built by <span className="font-bold text-blue-600">Dilip Sir (B.Tech, IIT Kanpur | IIM Ahmedabad)</span> with proven board exam expertise
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Small batches. Expert mentorship. Structured approach. Real results.
            </p>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Start Your Board Prep Today</span>
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
              <div className="text-4xl font-bold text-green-600 mb-3">Grade 10</div>
              <p className="text-gray-600 text-lg">Age 15-16 years</p>
              <p className="text-gray-500 mt-2">Board exam + Competitive exam prep</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-3">2 Subjects</div>
              <p className="text-gray-600 text-lg">Maths & Science (Physics, Chemistry)</p>
              <p className="text-gray-500 mt-2">Board focused + Competitive ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎓 Why Parents Choose BuzzyBrains for 10th Board</h2>
            <p className="text-xl text-gray-600">Proven approach. Real results. Personalized mentorship.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
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
            <p className="text-xl text-gray-600">Comprehensive Maths & Science curriculum</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>{subject.name}</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-2">Key Chapters:</p>
                    <p className="text-gray-700">{subject.chapters}</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-1">💡 Special Focus:</p>
                    <p className="text-gray-700">{subject.highlight}</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
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
            <p className="text-xl text-gray-600">Strategic approach for board exam success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studyPlan.map((phase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full text-white font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                <p className="text-green-600 font-semibold text-center mb-4">{phase.duration}</p>
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
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-semibold text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Seats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border-2 border-green-200">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready for 90%+ Scores?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our proven 10th board program and transform your exam results
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Start Your Board Prep Journey
          </button>
        </div>
      </section>

      {/* CTA Modal */}
      {showCtaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Enroll? 📚</h2>
              <p className="text-gray-600">Get started with your 10th board preparation today</p>
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
