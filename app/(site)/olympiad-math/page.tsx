'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Award, Users, BookOpen, Zap, Globe, Star } from 'lucide-react';

export default function OlympiadMathLanding() {
  const subjects = [
    {
      title: 'Advanced Algebra',
      subtitle: 'Deep concept mastery',
      topics: ['Functional equations', 'Polynomials', 'Inequalities'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '∑'
    },
    {
      title: 'Number Theory',
      subtitle: 'Structure & pattern recognition',
      topics: ['Divisibility', 'Modular arithmetic', 'Diophantine equations'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '#'
    },
    {
      title: 'Geometry',
      subtitle: 'Rigorous spatial reasoning',
      topics: ['Euclidean geometry', 'Angle chasing', 'Transformations'],
      gradient: 'from-orange-500 to-red-500',
      icon: '◆'
    },
    {
      title: 'Combinatorics',
      subtitle: 'Logical counting techniques',
      topics: ['Counting techniques', 'Pigeonhole principle', 'Graph thinking'],
      gradient: 'from-green-500 to-emerald-500',
      icon: '∏'
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
    <div className="min-h-screen bb-page-shell text-slate-900">
      {/* Hero Section */}
      <section className="pt-[calc(108px+6rem)] pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

    </div>
  );
}
