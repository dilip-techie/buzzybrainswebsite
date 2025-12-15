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
    "Teachers who actually know your child (max 10 per batch)",
    "Founded by someone who left comfort for purpose",
    "No spam ads, just students telling their friends",
    "IITians who teach because they want to, not just for paycheck",
    "Honest results: we don't exaggerate, we show real scores",
    "Custom approach for each student, not one-size-fits-all",
    "Scholarships for merit, not just marketing",
    "Still bootstrapped, growing slowly but steadily"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition cursor-pointer border-none bg-transparent outline-none p-0 m-0"
              >
                BuzzyBrains Academy
              </button>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="/about" className="text-blue-600 font-semibold">About</a>
              <a href="/#courses" className="text-gray-700 hover:text-blue-600 transition">Courses</a>
              <a href="/#results" className="text-gray-700 hover:text-blue-600 transition">Results</a>
              <a href="/admissions" className="text-gray-700 hover:text-blue-600 transition">Admission Enquiry</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-500 transition">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span className="hidden md:inline">Chat</span>
              </a>
            </div>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
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
      <section className="py-20 px-4 bg-white">
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
                  "Still maintain max 10 per batch (no compromise)",
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BuzzyBrains?</h2>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">BuzzyBrains Academy</h3>
              <p className="text-sm">Transforming lives through quality education since 2021. In just 5 years, we've become a beacon of excellence.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/#courses" className="hover:text-white transition">Courses</a></li>
                <li><a href="/admissions" className="hover:text-white transition">Admission Enquiry</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a></li>
                <li>Phone: +91 9850570525</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>📧 info@buzzybrains.com</li>
                <li>📞 +91 9850570525</li>
                <li>💬 Chat on WhatsApp</li>
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
