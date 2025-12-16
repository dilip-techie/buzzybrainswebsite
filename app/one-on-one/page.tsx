'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, Mail, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy, Clock, Star, GraduationCap } from 'lucide-react';

export default function OneOnOneClassesPage() {
  const pathname = usePathname();
  const [showCtaModal, setShowCtaModal] = useState(false);
  
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
      title: "100% Personalized Learning",
      description: "Curriculum tailored to your child's pace, learning style, and specific needs. No cookie-cutter approach."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Classes at your convenience. Pick time slots that work best for your family's schedule."
    },
    {
      icon: Trophy,
      title: "IIT & IIM Mentors",
      description: "Learn directly from Dilip Sir (IIT Kanpur | IIM Ahmedabad) and expert educators with proven track records."
    },
    {
      icon: Zap,
      title: "Quick Doubt Resolution",
      description: "Immediate answers to every question. No waiting for group class discussion time."
    },
    {
      icon: BookOpen,
      title: "Board + Competitive Ready",
      description: "Perfect preparation for board exams, entrance exams, and international board systems."
    },
    {
      icon: Target,
      title: "Concept Mastery Focus",
      description: "Deep understanding over rote memorization. Build strong fundamentals that last."
    }
  ];

  const grades6to10 = [
    {
      subject: "Mathematics",
      topics: "Algebra, Geometry, Trigonometry, Statistics, Probability, Number Theory"
    },
    {
      subject: "Science",
      topics: "Physics (Motion, Forces, Energy), Chemistry (Atoms, Reactions), Biology (Life Sciences)"
    }
  ];

  const grades11to12 = [
    {
      subject: "Physics",
      topics: "Mechanics, Thermodynamics, Waves, Optics, Electromagnetism, Modern Physics"
    },
    {
      subject: "Chemistry",
      topics: "Organic, Inorganic, Physical Chemistry - Board & JEE/NEET focused"
    },
    {
      subject: "Biology",
      topics: "Cell Biology, Genetics, Ecology, Human Physiology, Botany, Zoology"
    },
    {
      subject: "Mathematics",
      topics: "Calculus, Algebra, Geometry, Trigonometry, Vector Analysis, Probability"
    }
  ];

  const boardOptions = [
    {
      category: "Indian Boards",
      boards: ["CBSE", "ICSE", "State Boards"],
      focus: "Board syllabus + JEE/NEET preparation"
    },
    {
      category: "International Boards",
      boards: ["IGCSE", "IB", "AP", "A-Levels"],
      focus: "International curriculum with advanced concepts"
    }
  ];

  const classFeatures = [
    "One-to-one attention and customized learning path",
    "Live interactive sessions (online or offline at Amanora)",
    "Flexible duration: 45 min, 60 min, or 90 min sessions",
    "Weekly progress reports and assessments",
    "Revision sessions before exams",
    "Doubt-clearing sessions anytime (WhatsApp support)",
    "Custom study materials and worksheets",
    "Regular performance tracking and feedback"
  ];

  const suitableFor = [
    "Students struggling with specific concepts and needing personalized help",
    "Brilliant students wanting to go deeper and faster than group classes",
    "Children with different learning paces or learning challenges",
    "Students preparing for board exams + competitive exams simultaneously",
    "International board students needing expert guidance",
    "Learners who benefit from one-on-one mentoring and accountability"
  ];

  const faqItems = [
    {
      question: "How flexible are the timings?",
      answer: "Very flexible! Pick any time slot that works for you. Morning, afternoon, evening, weekends - we adapt to your schedule."
    },
    {
      question: "Can I choose online or offline?",
      answer: "Yes! Classes can be conducted online (video call) or offline at our Amanora center. You decide what's best."
    },
    {
      question: "How often should my child attend?",
      answer: "Frequency depends on your child's needs. Some students prefer 2-3 sessions/week, others prefer 1 session/week. We'll recommend based on assessment."
    },
    {
      question: "What if my child doesn't like the mentor?",
      answer: "We'll match you with a different mentor. Your child's comfort and learning is our priority."
    },
    {
      question: "Can classes cover both board and competitive exams?",
      answer: "Absolutely! We design sessions to cover board syllabus while also preparing for JEE/NEET or international board exams."
    },
    {
      question: "How is progress tracked?",
      answer: "Weekly assessments, performance reports, monthly parent meetings, and continuous feedback to ensure measurable progress."
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BuzzyBrains Academy (Grades 6-12)</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/foundation" className={isActive('/foundation') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>Foundation Courses</a>
              <a href="/12th-board" className={isActive('/12th-board') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>Indian Boards</a>
              <a href="/international-boards" className={isActive('/international-boards') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>International Boards</a>
              <a href="/one-on-one" className={isActive('/one-on-one') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>1-1 Class</a>
              <a href="/admissions" className={isActive('/admissions') ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition"}>Admission Enquiry</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-500 transition" title="Chat on WhatsApp">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span className="hidden md:inline">9850570525</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-bold">🎯 One-on-One Classes</span>
              <span className="ml-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">💻 Online & Offline</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Personalized Learning</span> for Every Student
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Grades 6-12</h2>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Grades 6-12 • Indian & International Boards</h2>
            <p className="text-xl text-gray-600 mb-8">
              Custom-tailored education. Your pace. Your schedule. IIT & IIM Expert.
            </p>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Book Your Free Demo Class</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Board Options */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌍 Indian & International Boards</h2>
            <p className="text-xl text-gray-600">Expert guidance for all major board systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {boardOptions.map((option, index) => (
              <div key={index} className={`bg-gradient-to-br ${index === 0 ? 'from-green-50 to-emerald-50 border-l-4 border-green-600' : 'from-cyan-50 to-blue-50 border-l-4 border-cyan-600'} rounded-xl p-8 shadow-lg`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.category}</h3>
                <p className={`text-sm font-semibold ${index === 0 ? 'text-green-700' : 'text-cyan-700'} mb-4`}>{option.focus}</p>
                <div className="flex flex-wrap gap-2">
                  {option.boards.map((board, boardIndex) => (
                    <span
                      key={boardIndex}
                      className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
                        index === 0
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600'
                      }`}
                    >
                      {board}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-3">Grades 6-12</div>
              <p className="text-gray-600 text-lg">Complete Coverage</p>
              <p className="text-gray-500 mt-2">Maths, Science, Physics, Chemistry, Biology</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-indigo-600">
              <div className="text-4xl font-bold text-indigo-600 mb-3">100% Flexible</div>
              <p className="text-gray-600 text-lg">Your Schedule</p>
              <p className="text-gray-500 mt-2">Online or offline, anytime that works for you</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-pink-600 mb-3">Expert Mentors</div>
              <p className="text-gray-600 text-lg">IIT & IIM Graduates</p>
              <p className="text-gray-500 mt-2">Learn from the best educators in town</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">✨ Why Parents Choose Our 1-on-1 Classes</h2>
            <p className="text-xl text-gray-600">Because every child is unique. Your learning should be too.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-xl p-8 border-2 border-transparent hover:border-indigo-600 transition-all">
                  <div className="bg-gradient-to-r from-indigo-600 to-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
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

      {/* Curriculum Coverage */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 What We Cover</h2>
            <p className="text-xl text-gray-600">Comprehensive subjects for every grade level</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Grades 6-10 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>Grades 6-10</span>
              </h3>
              <div className="space-y-4">
                {grades6to10.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-lg font-bold text-gray-900 mb-2">{item.subject}</p>
                    <p className="text-gray-700 text-sm">{item.topics}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grades 11-12 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <span>Grades 11-12</span>
              </h3>
              <div className="space-y-4">
                {grades11to12.map((item, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-lg font-bold text-gray-900 mb-2">{item.subject}</p>
                    <p className="text-gray-700 text-sm">{item.topics}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Features */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">🌟 What's Included in Every Class</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {classFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <p className="text-white font-semibold">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">🎯 Who Is This Perfect For?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {suitableFor.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg p-6 border-l-4 border-indigo-600">
                <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900 font-semibold text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-indigo-50 transition"
                >
                  <h3 className="text-lg font-bold text-gray-900 text-left">{item.question}</h3>
                  <ChevronRight className={`w-5 h-5 text-indigo-600 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-50 to-pink-50 rounded-2xl p-12 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">✨ Ready to Start Your Personalized Learning Journey?</h2>
          <p className="text-xl text-gray-700 mb-8">
            First consultation is <span className="font-bold text-indigo-600">FREE</span>. We'll assess your child's needs and create a custom plan.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <Phone className="w-6 h-6 text-indigo-600" />
              <span className="font-bold">98505 70525</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <span className="font-bold">Amanora, Hadapsar, Pune</span>
            </div>
          </div>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition text-lg font-semibold"
          >
            Book Your Free Demo Class
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Child's Learning Today</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get expert, personalized guidance tailored to your child's unique learning needs
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Start Your Free Demo Class
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
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Book Your Free Demo? 📚</h2>
              <p className="text-gray-600">Get started with personalized 1-on-1 classes today</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleCtaModalForm}
                className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all font-semibold flex items-center justify-between group"
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
