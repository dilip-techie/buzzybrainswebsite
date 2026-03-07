'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, Award, Users, BookOpen, Zap, Globe, Star, Phone, Mail, GraduationCap } from 'lucide-react';

export default function OlympiadMathLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const subjects = [
    {
      title: 'Advanced Algebra',
      subtitle: 'Deep concept mastery',
      topics: ['Functional equations', 'Polynomials', 'Inequalities'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Number Theory',
      subtitle: 'Structure & pattern recognition',
      topics: ['Divisibility', 'Modular arithmetic', 'Diophantine equations'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Geometry',
      subtitle: 'Rigorous spatial reasoning',
      topics: ['Euclidean geometry', 'Angle chasing', 'Transformations'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Combinatorics',
      subtitle: 'Logical counting techniques',
      topics: ['Counting techniques', 'Pigeonhole principle', 'Graph thinking'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const indianOlympiads = [
    { name: 'IOQM', full: 'Indian Olympiad Qualifier in Mathematics' },
    { name: 'RMO', full: 'Regional Mathematics Olympiad' },
    { name: 'INMO', full: 'Indian National Mathematical Olympiad' }
  ];

  const internationalOlympiads = [
    { name: 'AMC 8' },
    { name: 'AMC 10' },
    { name: 'AMC 12' },
    { name: 'AIME' },
    { name: 'USAJMO' },
    { name: 'IMO', full: 'International Mathematical Olympiad' }
  ];

  const britishOlympiads = [
    { name: 'JMC', full: 'Junior Mathematical Challenge' },
    { name: 'IMC', full: 'Intermediate Mathematical Challenge' },
    { name: 'SMC', full: 'Senior Mathematical Challenge' },
    { name: 'BMO', full: 'British Mathematical Olympiad' }
  ];

  const globalCompetitions = [
    { name: 'International Mathematical Olympiad' },
    { name: 'Kangaroo Math' },
    { name: 'Math League' },
    { name: 'Purple Comet' }
  ];

  const methodology = [
    { step: '01', title: 'Concept Foundations', description: 'Build crystal-clear understanding of fundamental principles and theorems' },
    { step: '02', title: 'Structured Problem Solving', description: 'Master diverse problem types with systematic approaches' },
    { step: '03', title: 'Olympiad Techniques', description: 'Learn advanced strategies for competition-level challenges' },
    { step: '04', title: 'Mock Tests & Analysis', description: 'Regular assessments with detailed error analysis and feedback' },
    { step: '05', title: 'Competition Readiness', description: 'Final preparation and confidence building for actual contests' }
  ];

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'Student, INMO Qualifier',
      content: 'The program transformed my understanding of mathematics. It\'s not about memorizing formulas; it\'s about thinking mathematically.',
      initials: 'AS'
    },
    {
      name: 'Priya Verma',
      role: 'Parent',
      content: 'Within 6 months, my daughter\'s confidence and problem-solving ability improved dramatically. Highly recommend!',
      initials: 'PV'
    },
    {
      name: 'Vikram Patel',
      role: 'Student, AMC 12 Qualifier',
      content: 'The mentorship from an <strong>IITian</strong> and the structured curriculum make all the difference in my learning journey.',
      initials: 'VP'
    },
    {
      name: 'Deepa Kumar',
      role: 'Parent',
      content: 'Finally found a program that focuses on logical thinking rather than rote learning. Worth every moment!',
      initials: 'DK'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 hover:opacity-80 transition">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BuzzyBrains Academy (Grades 6-12)</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="/foundation" className="text-gray-700 hover:text-blue-600 transition">Foundation Courses</a>
              <a href="/olympiad-math" className="text-gray-700 hover:text-blue-600 transition">Maths Excellence Program</a>
              <a href="/12th-board" className="text-gray-700 hover:text-blue-600 transition">Indian Boards</a>
              <a href="/international-boards" className="text-gray-700 hover:text-blue-600 transition">International Boards</a>
              <a href="/one-on-one" className="text-gray-700 hover:text-blue-600 transition">1-1 Class</a>
              <a href="/admissions" className="text-gray-700 hover:text-blue-600 transition">Admission Enquiry</a>
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
              <a href="/foundation" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-gray-700 hover:bg-gray-50">Foundation Courses</a>
              <a href="/olympiad-math" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-gray-700 hover:bg-gray-50">Maths Excellence Program</a>
              <a href="/12th-board" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-gray-700 hover:bg-gray-50">Indian Boards</a>
              <a href="/international-boards" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-gray-700 hover:bg-gray-50">International Boards</a>
              <a href="/one-on-one" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-gray-700 hover:bg-gray-50">1-1 Class</a>
              <a href="/admissions" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-gray-700 hover:bg-gray-50">Admission Enquiry</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded text-green-600 hover:bg-green-50 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span>WhatsApp: 9850570525</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Geometric patterns */}
        <div className="absolute top-40 left-10 opacity-10 text-blue-600 font-light text-6xl">∫</div>
        <div className="absolute top-20 right-20 opacity-10 text-purple-600 font-light text-6xl">∑</div>
        <div className="absolute bottom-32 left-1/3 opacity-10 text-pink-600 font-light text-5xl">π</div>
        <div className="absolute bottom-40 right-1/4 opacity-10 text-blue-600 font-light text-7xl">√</div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
            ✨ Classes conducted by Top <span className="font-bold">IITian</span> Faculty
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build Mathematical <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Thinking Early
            </span>
            <br />
            <span className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Grades 4-12</span> 
          </h1>
          
          <p className="text-lg text-slate-700 mb-6 max-w-3xl mx-auto">
            Founded by <span className="font-bold text-slate-900">Dilip Sir</span> (<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">IIT Kanpur</span> | <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-semibold">IIM Ahmedabad</span> | JEE AIR 400 | 25 years exp.)
          </p>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Advanced mathematics program focused on strong foundations, logical reasoning, and Olympiad problem solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-300 transition-all transform hover:scale-105">
              Book a Demo
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-900 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
              View Curriculum
            </button>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold text-lg mb-1">Small Batches</h3>
              <p className="text-slate-600 text-sm">Personalized attention for every student</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-lg mb-1"><strong>IITian</strong> Mentorship</h3>
              <p className="text-slate-600 text-sm">Learn from industry experts</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-semibold text-lg mb-1">Structured Path</h3>
              <p className="text-slate-600 text-sm">Fundamentals to Olympiad level</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About the Program</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mathematics is taught as a way of thinking, not memorization. Our program emphasizes proof, reasoning, and problem-solving with a structured progression from school mathematics to Olympiad-level challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Thinking Over Memorization</h3>
              <p className="text-slate-600">Deep conceptual understanding and mathematical reasoning are prioritized over rote learning.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Proof & Reasoning</h3>
              <p className="text-slate-600">Students learn to construct rigorous proofs and develop logical reasoning skills required for advanced mathematics.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-pink-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Gradual Progression</h3>
              <p className="text-slate-600">Carefully structured curriculum that builds from fundamental concepts to Olympiad-level problem solving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Core Subjects Covered</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Master the four pillars of Olympiad mathematics</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subjects.map((subject, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${subject.gradient} p-0.5 rounded-2xl`}>
                <div className="bg-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-2">{subject.title}</h3>
                  <p className="text-slate-600 mb-6 font-medium">{subject.subtitle}</p>
                  <div className="space-y-3">
                    {subject.topics.map((topic, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className={`text-${subject.gradient.split('-')[1]}-500`} size={20} />
                        <span className="text-slate-700 font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olympiad Preparation */}
      <section id="olympiads" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Preparation for Major Competitions</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive training for national and international mathematics olympiads</p>
          </div>

          {/* Indian Olympiads */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              <Globe className="mr-3" size={28} />
              India
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {indianOlympiads.map((olympiad, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <p className="text-lg font-bold text-blue-600 mb-1">{olympiad.name}</p>
                  <p className="text-slate-600 text-sm">{olympiad.full}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International Style Contests */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
              <Globe className="mr-3" size={28} />
              International Style Contests
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {internationalOlympiads.map((contest, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all">
                  <p className="text-lg font-bold text-purple-600">{contest.name}</p>
                  {contest.full && <p className="text-slate-600 text-sm mt-1">{contest.full}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* UK Contests */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
              <Globe className="mr-3" size={28} />
              UK Mathematical Competitions
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {britishOlympiads.map((contest, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-pink-400 hover:shadow-lg transition-all">
                  <p className="text-lg font-bold text-pink-600">{contest.name}</p>
                  {contest.full && <p className="text-slate-600 text-sm mt-1">{contest.full}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Global Competitions */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
              <Globe className="mr-3" size={28} />
              Global Competitions
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {globalCompetitions.map((comp, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                  <p className="text-lg font-bold text-emerald-600">{comp.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IITian Mentor Section */}
      <section id="mentor" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Why Learn From an <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IITian</span></h2>
              
              <div className="space-y-6">
                <div className="font-bold text-2xl text-blue-600 mb-8">Dilip Sah</div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="text-blue-600 mt-1" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">IIT Kanpur Alumnus</h3>
                    <p className="text-slate-600">Graduated with honors from one of India's premier engineering institutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="text-purple-600 mt-1" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">10+ Years of Mentoring</h3>
                    <p className="text-slate-600">Dedicated experience in mathematics education and Olympiad coaching</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="text-pink-600 mt-1" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Deep Olympiad Expertise</h3>
                    <p className="text-slate-600">Advanced knowledge of competition mathematics and problem-solving techniques</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="text-emerald-600 mt-1" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Mathematical Thinking Culture</h3>
                    <p className="text-slate-600">Focuses on building a strong problem-solving mindset and mathematical intuition</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  DS
                </div>
                <h3 className="text-2xl font-bold">Dilip Sah</h3>
                <p className="text-slate-600 mt-2">IIT Kanpur</p>
                <p className="text-sm text-slate-500 mt-4 max-w-xs mx-auto">Mathematics Educator | Olympiad Coach | Problem-Solving Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Teaching Methodology</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">A systematic 5-step approach to mathematical mastery</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {methodology.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 transform translate-x-1/2 w-full h-1 bg-gradient-to-r from-blue-200 to-transparent -z-10"></div>
                )}
                
                <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Students */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Who Should Join?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">Ideal for grades 6-12 students interested in:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
              <Award className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Olympiad Mathematics</h3>
              <p className="text-slate-600">Comprehensive preparation for national and international olympiad competitions</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <Zap className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Competitive Mathematics</h3>
              <p className="text-slate-600">Advanced skills for entrance exams and academic excellence</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200">
              <BookOpen className="text-emerald-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Mathematical Thinking</h3>
              <p className="text-slate-600">Strong foundation in logical reasoning and problem-solving culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Our Students & Parents Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Start Your Olympiad Journey</h2>
          <p className="text-xl mb-12 text-blue-100">Join elite students learning advanced mathematics with India's top <span className="font-bold">IITian</span> mentor</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
              Schedule a Demo Class
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Talk to a Mentor <ArrowRight size={20} />
            </button>
          </div>

          <p className="text-blue-100 mt-8 text-sm">Limited seats available • Next batch starts in 2 weeks</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">BuzzyBrains Academy</h3>
              <p className="text-sm mb-2">IIT Kanpur Mentored Mathematics Programs</p>
              <p className="text-xs text-slate-500">Unlocking mathematical thinking</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Olympiad Math</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Foundation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Competition Prep</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91 XXXXXXXXXX</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:info@buzzybrains.com" className="hover:text-white transition-colors">info@buzzybrains.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 BuzzyBrains Academy. All rights reserved. | Built for mathematical excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
