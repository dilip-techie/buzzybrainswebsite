'use client';

import React, { useState } from 'react';
import { BookOpen, Heart, Lightbulb, Target, Users, Award, ChevronRight, Zap } from 'lucide-react';

export default function AboutPage() {
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

  const values = [
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Every decision we make is centered around what's best for our students' growth and success."
    },
    {
      icon: Lightbulb,
      title: "Quality Over Quantity",
      description: "Small batches with exceptional teachers ensure personalized attention for every student."
    },
    {
      icon: Target,
      title: "Result-Driven Teaching",
      description: "We focus on outcomes. Our curriculum is designed to maximize performance in exams."
    },
    {
      icon: Award,
      title: "Excellence Culture",
      description: "We cultivate an environment where excellence isn't just a goal—it's a way of learning."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Realization",
      description: "Dilip Sir saw the gap: large classrooms, anxious students, burnt-out teachers. Decided to leave his job and try something different."
    },
    {
      year: "Mid-2021",
      title: "The Leap",
      description: "Rented a small room with borrowed furniture. Started with 8 students and a promise: quality over numbers. No ads, just word of mouth."
    },
    {
      year: "2022",
      title: "First Victory",
      description: "First batch completed. 85-92% in boards. Not the highest numbers, but students were confident, curious, and happy to learn."
    },
    {
      year: "2023",
      title: "Expanding Quietly",
      description: "Grew to 50+ active students. Added second teacher. Still refused to compromise on batch sizes. More requests than we could handle."
    },
    {
      year: "2024",
      title: "Earning Trust",
      description: "First JEE Main qualifiers. More 95%+ board scorers. Students coming from 4-5 km away for classes. Recognition grew silently."
    },
    {
      year: "2025",
      title: "Still Going Strong",
      description: "150-200 active students, 5 passionate teachers, same small batch size, same high standards. Proof that the slow way works."
    }
  ];

  const whyChooseUs = [
    "Teachers who actually know your child (max 12 per batch)",
    "Founded by someone who left comfort for purpose",
    "No spam ads, just students telling their friends",
    "<strong>IITians</strong> who teach because they want to, not just for paycheck",
    "Honest results: we don't exaggerate, we show real scores",
    "Custom approach for each student, not one-size-fits-all",
    "Scholarships for merit, not just marketing",
    "Still bootstrapped, growing slowly but steadily"
  ];

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              How a simple realization changed everything
            </p>
            <p className="text-lg text-gray-700">
              From identifying a broken education system to creating a beacon of quality learning
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="founder-story" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Reality Dilip Sir Witnessed</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  In 2019-2020, while tutoring students alongside his job, Dilip Sir saw a heartbreaking pattern. Bright kids, genuinely interested in learning, were failing because their teachers were too busy managing 60-80 students in a classroom. How could any teacher help when they had 60 different learning needs to manage?
                </p>
                <p>
                  He watched parents shell out lakhs of rupees in coaching centers, only to see their kids grow more anxious about Math and Science. The large batches meant that a struggling student got lost in the crowd. Teachers moved on with the syllabus, leaving confused students behind.
                </p>
                <p>
                  The few good teachers he knew? They were exhausted, underpaid, and frustrated by the system that forced them to choose between their principles and their paychecks.
                </p>
                <p className="text-blue-600 font-bold text-lg">
                  "I couldn't sleep at night watching this. I had to try something different."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              <div className="mb-8">
                <BookOpen className="w-16 h-16 mb-4 opacity-80" />
              </div>
              <h3 className="text-3xl font-bold mb-6">What Had to Change</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Stop prioritizing numbers, start measuring impact</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Get serious teachers into classrooms, not just experienced ones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Make space for real conversations, doubts, and questions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Prove that smaller is actually better</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div id="mission" className="scroll-mt-28 bg-white rounded-2xl p-8 shadow-lg">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To give every student the individual attention a 60-student classroom can never offer —
                replacing rote memorization with genuine understanding, one small batch at a time.
              </p>
            </div>
            <div id="vision" className="scroll-mt-28 bg-white rounded-2xl p-8 shadow-lg">
              <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700">
                A future where every student builds strong foundations for life — not just exam scores —
                guided by mentors who know them by name, in classrooms small enough for that to be possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">So, We Started Small. Really Small.</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  In mid-2021, Dilip Sir left his stable job and started BuzzyBrains Academy from a 200-sq-ft rented room with an old whiteboard and borrowed chairs. The first batch? Just 8 students from his neighborhood who trusted him enough to take the risk.
                </p>
                <p>
                  It was terrifying. No fancy infrastructure. No fancy ads. Just him, a pen, and a promise: "I will know each of you personally. I will help you understand, not just complete the syllabus."
                </p>
                <p className="font-semibold text-blue-600 mb-4">The first year was hard:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Struggled to balance costs with staying true to small batches</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Finding trustworthy teachers who would work with small batches</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building a reputation with zero marketing budget</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Working 12-hour days, teaching and managing everything</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">5 Years, But Worth Every Moment</h3>
              <div className="space-y-6">
                {[
                  "Started with 8, now 150-200 active students",
                  "First batch scored 85-92% in boards (2022)",
                  "First JEE qualifier in 2023 (huge celebration!)",
                  "Built a team of 5 passionate IITian teachers",
                  "Still maintain max 12 per batch (no compromise)",
                  "Grew through referrals, not advertisements",
                  "Still making financial sacrifices for quality"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700 font-semibold pt-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From a dream in 2020 to transforming 500+ lives in just 5 years</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}>
                  <div className="w-full md:w-5/12">
                    <div className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${index % 2 === 0 ? 'border-blue-600' : 'border-purple-600'}`}>
                      <div className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? 'text-blue-600' : 'text-purple-600'}`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full"></div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Principles that guide every decision we make</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BuzzyBrains Academy?</h2>
            <p className="text-xl text-gray-600">Because we're different. And in just 5 years, we've already proved it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-900 font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Be Part of Our Story</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who transformed their lives with BuzzyBrains Academy. Your success story starts here.
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* CTA Modal */}
      {showCtaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Start? 👋</h2>
              <p className="text-gray-600">Choose how you'd like to connect with us</p>
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
