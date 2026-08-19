'use client';

import '@/app/tailwind.css';
import React, { useState } from 'react';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, MapPin, ChevronRight, Lightbulb, Brain, Rocket, TrendingUp, Trophy, Clock, Star } from 'lucide-react';
import CtaModal from '@/components/CtaModal';

export default function OneOnOneClassesPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [isPricePopupExpanded, setIsPricePopupExpanded] = useState(false);

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
    "Plans starting at just ₹800 per hour",
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
    <div className="min-h-screen bb-page-shell">
      <div className={`price-popup ${isPricePopupExpanded ? 'expanded' : 'collapsed'}`} role="status" aria-live="polite">
        <button
          type="button"
          className="price-popup__toggle"
          onClick={() => setIsPricePopupExpanded((value) => !value)}
          aria-label={isPricePopupExpanded ? 'Minimize pricing notice' : 'Expand pricing notice'}
        >
          <span className="price-popup__icon">💰</span>
          <span className="price-popup__label">₹800/hr plans</span>
          <span className="price-popup__chevron">{isPricePopupExpanded ? '−' : '+'}</span>
        </button>
        {isPricePopupExpanded && (
          <div className="price-popup__content">
            <p className="price-popup__title">Plans starting at just ₹800/hour</p>
            <p className="price-popup__text">Personalized 1-on-1 mentoring with flexible scheduling.</p>
          </div>
        )}
      </div>
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-bold">🎯 One-on-One Classes</span>
              <span className="ml-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">💻 Online & Offline</span>
              <span className="ml-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold inline-block mt-2 md:mt-0">🏆 Top 1% Faculty led by Dilip Sir</span>
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
            <a href="tel:+919850570525" className="flex items-center justify-center space-x-3 text-lg text-gray-900 hover:text-indigo-600 transition">
              <Phone className="w-6 h-6 text-indigo-600" />
              <span className="font-bold">98505 70525</span>
            </a>
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

      {/* CTA Modal */}
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Book Your Free Demo? 📚"
        subtitle="Get started with personalized 1-on-1 classes today"
      />
    </div>
  );
}
