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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 hover:opacity-80 transition">
              <GraduationCap className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BuzzyBrains</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="/foundation" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-sm">Foundation</a>
              <a href="/olympiad-math" className="text-blue-600 font-bold text-sm">Maths Excellence</a>
              <a href="/12th-board" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-sm">Boards</a>
              <a href="/international-boards" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-sm">International</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-slate-700 hover:text-green-600 transition-colors font-medium text-sm">
                <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
              </a>
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 text-sm">
                Book Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur border-t border-slate-100 py-4 space-y-3">
              <a href="/foundation" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-slate-700 hover:bg-blue-50 transition">Foundation</a>
              <a href="/olympiad-math" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-blue-600 font-bold bg-blue-50">Maths Excellence</a>
              <a href="/12th-board" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-slate-700 hover:bg-blue-50 transition">Boards</a>
              <a href="/international-boards" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded text-slate-700 hover:bg-blue-50 transition">International</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded text-green-600 hover:bg-green-50 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Premium animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Subtle gradient lines */}
        <div className="absolute top-10 left-10 opacity-5 text-6xl font-light">∫</div>
        <div className="absolute top-32 right-20 opacity-5 text-7xl font-light">∑</div>
        <div className="absolute bottom-20 left-1/3 opacity-5 text-5xl font-light">π</div>
        <div className="absolute bottom-40 right-1/4 opacity-5 text-6xl font-light">√</div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200/50">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-blue-800 font-semibold text-sm">Classes conducted by Top <span className="font-bold">IITian</span> Faculty</span>
          </div>

          {/* Main headline - ultra premium */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[1.1]">
            Build Mathematical<br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-xl">
              Excellence.
            </span>
          </h1>

          {/* Grade badge */}
          <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full font-bold text-lg shadow-lg">
            For Grades 4-12
          </div>

          {/* Founder info - premium styling */}
          <div className="mb-10 max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 mb-3">
              Founded by <span className="font-bold text-slate-900">Dilip Sah</span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">IIT Kanpur</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold text-sm">IIM Ahmedabad</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full font-semibold text-sm">JEE AIR 400</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-semibold text-sm">25+ Years</span>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Elite mathematics program for students who think differently. Master deep reasoning, problem-solving, and competition mathematics.
          </p>

          {/* CTA Buttons - premium design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-300/50 transition-all transform hover:scale-105 active:scale-95">
              Schedule a Demo <ArrowRight className="inline-block ml-2" size={20} />
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-900 font-bold text-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
              View Curriculum
            </button>
          </div>

          {/* Premium stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[{ num: '150+', label: 'Students Mentored' }, { num: '35+', label: 'Olympiad Qualifiers' }, { num: '25+', label: 'Years Experience' }, { num: '100%', label: 'Success Rate' }].map((stat, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-slate-200/50 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.num}</div>
                <p className="text-xs md:text-sm text-slate-600 mt-2 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="program" className="py-32 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Our Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Mathematics isn't a collection of formulas. It's a way of thinking, reasoning, and solving problems with elegance and precision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🧠',
                title: 'Thinking Over Memorization',
                description: 'Deep conceptual understanding and mathematical reasoning are prioritized over rote learning.'
              },
              {
                icon: '∎',
                title: 'Proof & Reasoning',
                description: 'Students construct rigorous proofs and develop logical reasoning skills required for advanced mathematics.'
              },
              {
                icon: '📈',
                title: 'Gradual Progression',
                description: 'Carefully structured curriculum that builds from fundamental concepts to Olympiad-level problem solving.'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section id="subjects" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Four Pillars of Excellence</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Master the mathematical disciplines that define Olympiad success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subjects.map((subject, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition-all duration-500`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300">
                  <div className={`text-6xl mb-4 opacity-60 group-hover:scale-110 transition-transform duration-300`}>{subject.icon}</div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${subject.gradient} bg-clip-text text-transparent mb-2`}>{subject.title}</h3>
                  <p className="text-slate-600 font-medium mb-6">{subject.subtitle}</p>
                  <div className="space-y-3">
                    {subject.topics.map((topic, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${subject.gradient}`}></div>
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

      {/* Competitions Section */}
      <section id="olympiads" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Prepare for the Biggest Competitions</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive training for national and international mathematics competitions</p>
          </div>

          {[
            { 
              title: 'India', 
              color: 'from-blue-600 to-cyan-600',
              competitions: ['IOQM', 'RMO', 'INMO']
            },
            { 
              title: 'International', 
              color: 'from-purple-600 to-pink-600',
              competitions: ['AMC 8', 'AMC 10', 'AMC 12', 'AIME', 'USAJMO', 'IMO']
            },
            { 
              title: 'UK', 
              color: 'from-orange-500 to-red-500',
              competitions: ['JMC', 'IMC', 'SMC', 'BMO']
            },
            { 
              title: 'Global', 
              color: 'from-green-500 to-emerald-500',
              competitions: ['IMO', 'Kangaroo Math', 'Math League', 'Purple Comet']
            }
          ].map((region, idx) => (
            <div key={idx} className="mb-20">
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${region.color} bg-clip-text text-transparent mb-10`}>{region.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {region.competitions.map((comp, i) => (
                  <div key={i} className={`group bg-gradient-to-br ${region.color} p-0.5 rounded-lg`}>
                    <div className="bg-white rounded-lg py-4 px-6 text-center group-hover:bg-gradient-to-br group-hover:from-slate-50 group-hover:to-slate-100 transition-all duration-300">
                      <p className="font-bold text-slate-900 text-sm md:text-base">{comp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor Profile */}
      <section id="mentor" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8">
                Learn From an <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"><strong>IITian</strong> Expert</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="text-blue-600 flex-shrink-0" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Dilip Sah</h3>
                    <p className="text-slate-600 font-semibold">IIT Kanpur | IIM Ahmedabad</p>
                  </div>
                </div>

                {[
                  { icon: '👥', text: 'Mentored 150+ students across India and globally' },
                  { icon: '🏆', text: '35+ students qualified for national and international olympiads' },
                  { icon: '📈', text: '25+ years of dedicated teaching and mentoring experience' },
                  { icon: '🎯', text: 'Deep expertise in competition mathematics and problem-solving' }
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{point.icon}</span>
                    <p className="text-slate-700 font-medium leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-slate-200 text-center">
                <div className="w-40 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-6xl font-black">
                  DS
                </div>
                <h3 className="text-4xl font-bold text-slate-900">Dilip Sah</h3>
                <p className="text-slate-700 mt-2 font-semibold">IIT Kanpur | IIM Ahmedabad | JEE AIR 400</p>
                <p className="text-sm text-slate-600 mt-6 max-w-xs mx-auto leading-relaxed">Mathematics Educator | Olympiad Coach | 25+ Years of Excellence</p>
                <div className="mt-10 pt-10 border-t border-slate-200 flex justify-around">
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">150+</div>
                    <p className="text-xs text-slate-600 mt-2 font-semibold">Students Mentored</p>
                  </div>
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">35+</div>
                    <p className="text-xs text-slate-600 mt-2 font-semibold">Olympiad Qualifiers</p>
                  </div>
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">25+</div>
                    <p className="text-xs text-slate-600 mt-2 font-semibold">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Our 5-Step Mastery Path</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">A systematic approach to mathematical excellence</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Connector line */}
                {idx < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-3 w-6 h-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
                )}
                
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur rounded-2xl p-6 border border-slate-600/30 transition-all group-hover:bg-blue-500/10 group-hover:border-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Students */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Who Should Join?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Perfect for students grades 4-12 interested in:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                emoji: '🎖️',
                title: 'Olympiad Mathematics',
                description: 'Comprehensive preparation for national and international olympiad competitions'
              },
              {
                emoji: '⚡',
                title: 'Competition Excellence',
                description: 'Advanced skills for entrance exams and academic achievement'
              },
              {
                emoji: '🧮',
                title: 'Mathematical Thinking',
                description: 'Strong foundation in logical reasoning and problem-solving mindset'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 text-white">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">What Our Students & Parents Say</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Real success stories from those who've transformed their relationship with mathematics</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur border border-slate-700/50 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-blue-300 text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed italic text-lg">"{testimonial.content}"</p>
                  <div className="flex mt-6 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-7xl font-light text-white/30">∫</div>
          <div className="absolute top-40 right-20 text-7xl font-light text-white/30">∑</div>
          <div className="absolute bottom-32 left-1/3 text-6xl font-light text-white/30">π</div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">Your Olympiad Journey Starts Here</h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">Join elite students mastering advanced mathematics with India's top <span className="font-bold">IITian</span> mentor</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 active:scale-95">
              Schedule a Demo Class →
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all backdrop-blur">
              Talk to a Mentor
            </button>
          </div>

          <p className="text-white/80 mt-12 text-sm font-medium">Limited seats available • Next batch starts in 2 weeks</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                BuzzyBrains
              </h3>
              <p className="text-sm mb-3">Elite mathematics education rooted in <strong>IITian</strong> excellence</p>
              <p className="text-xs text-slate-500">Building the next generation of mathematical thinkers since day one.</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Programs</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/olympiad-math" className="hover:text-white transition-colors">Maths Excellence</a></li>
                <li><a href="/foundation" className="hover:text-white transition-colors">Foundation Courses</a></li>
                <li><a href="/12th-board" className="hover:text-white transition-colors">Board Preparation</a></li>
                <li><a href="/international-boards" className="hover:text-white transition-colors">International</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:info@buzzybrains.com" className="hover:text-white transition-colors">info@buzzybrains.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-400" />
                  <a href="tel:+919850570525" className="hover:text-white transition-colors">+91 9850 570 525</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                  <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2024 BuzzyBrains Academy. All rights reserved.</p>
            <p>Excellence in Mathematics Education</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
