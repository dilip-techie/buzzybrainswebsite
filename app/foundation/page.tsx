'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BookOpen, Target, Users, Zap, CheckCircle, Award, Phone, Mail, MapPin, ChevronRight, Lightbulb, Brain, Rocket, GraduationCap, Menu, X } from 'lucide-react';

export default function FoundationPage() {
  const pathname = usePathname();
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      title: "Top IITian Mentorship",
      description: "Personal guidance by IITian faculty, including Dilip Sir (IIT Kanpur), with a proven concept-first approach."
    },
    {
      icon: Users,
      title: "Ultra-Small Batches",
      description: "Just 12 students per class — ensuring individual attention, doubt-solving, and true mentoring (not crowd teaching)."
    },
    {
      icon: Lightbulb,
      title: "Strong Conceptual Foundation",
      description: "Perfect preparation for IIT-JEE, NEET, Olympiads, and Boards — no rote learning, only deep understanding."
    },
    {
      icon: Zap,
      title: "Maths the IIT Way",
      description: "Vedic maths techniques and logical shortcuts to build speed, accuracy, and confidence."
    },
    {
      icon: BookOpen,
      title: "Physics Made Simple",
      description: "Complex ideas broken down into clear, intuitive concepts — fundamentals built early, stress reduced later."
    },
    {
      icon: Target,
      title: "Premium Offline Learning",
      description: "Focused, distraction-free offline classes at Amanora, designed for maximum learning effectiveness."
    }
  ];

  const gradeDetails = [
    {
      grade: "Grade 6-7",
      title: "Foundation Building Starts",
      focus: ["Number Systems", "Basic Algebra", "Geometry Fundamentals", "Scientific Method"],
      highlight: "Build confidence and curiosity"
    },
    {
      grade: "Grade 8-9",
      title: "Conceptual Deepening",
      focus: ["Advanced Algebra", "Trigonometry Introduction", "Physics Laws", "Chemistry Basics"],
      highlight: "Start thinking like IITians"
    },
    {
      grade: "10",
      title: "Board Mastery + JEE Prep",
      focus: ["Board Exam Excellence", "JEE Main Foundation", "NEET Basics", "Problem-Solving"],
      highlight: "Score high in boards + prepare for competitive exams"
    }
  ];

  const curriculum = [
    {
      subject: "Mathematics",
      topics: "Algebra, Geometry, Trigonometry, Number Theory, Vedic Maths shortcuts"
    },
    {
      subject: "Physics",
      topics: "Mechanics, Heat, Light, Electricity, Modern Physics concepts"
    },
    {
      subject: "Chemistry",
      topics: "Atomic Structure, Bonding, Reactions, Periodic Table mastery"
    },
    {
      subject: "Biology",
      topics: "Cell Biology, Genetics, Human Body Systems, Ecology"
    }
  ];

  const suitableFor = [
    "Parents who want a strong academic base, not last-minute exam panic",
    "Students aiming for IIT-JEE / NEET / Olympiads",
    "Bright students who want to learn ahead of school level",
    "Learners who enjoy understanding why, not just what",
    "Children who are anxious about Maths and Science",
    "Students who want personalized attention and guidance"
  ];

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
                <span className="hidden md:inline">9850570525</span>
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

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">🌟 Foundation Programs</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build the <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Right Foundation</span>
              <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold align-middle inline-block"><span className="blink-icon inline-block">●</span> Online</span>
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Grades 6-10</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Create Future IITians & Doctors</h3>
            <p className="text-xl text-gray-600 mb-4">
              Start Early. Start Right. With <span className="font-bold text-blue-600">Mentorship by Dilip Sir (B.Tech, IIT Kanpur)</span>
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Because strong fundamentals today decide tomorrow's success.
            </p>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Unlock Your Child's Potential</span>
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
              <div className="text-4xl font-bold text-blue-600 mb-3">Grades 6-10</div>
              <p className="text-gray-600 text-lg">Ages 11-16 years</p>
              <p className="text-gray-500 mt-2">Build concepts that last a lifetime</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-3">Max 12 Students</div>
              <p className="text-gray-600 text-lg">Per Batch</p>
              <p className="text-gray-500 mt-2">Personalized attention guaranteed</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">4 Subjects</div>
              <p className="text-gray-600 text-lg">Math, Physics, Chemistry, Biology</p>
              <p className="text-gray-500 mt-2">Complete holistic development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎓 Why Parents Choose BuzzyBrains</h2>
            <p className="text-xl text-gray-600">Proven approach. Real results. Personalized mentorship.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-blue-600 transition-all">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
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

      {/* Grade-wise Breakdown */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Grade-wise Program Overview</h2>
            <p className="text-xl text-gray-600">Progressive learning from Grade 6 to Grade 10</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gradeDetails.map((grade, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 inline-block px-4 py-2 rounded-lg text-white font-bold mb-4">
                  {grade.grade}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{grade.title}</h3>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-blue-600 mb-3">Focus Areas:</p>
                  <ul className="space-y-2">
                    {grade.focus.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-gray-900 font-semibold">✨ {grade.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📖 What Your Child Will Learn</h2>
            <p className="text-xl text-gray-600">Comprehensive curriculum designed for deep understanding</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>{course.subject}</span>
                </h3>
                <p className="text-gray-700">{course.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">🚀 Who Is This Program For?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {suitableFor.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <p className="text-white text-lg">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center border-2 border-white/30">
            <Rocket className="w-12 h-12 text-white mx-auto mb-4" />
            <p className="text-white text-xl font-semibold">
              If your answer is YES to any of the above, BuzzyBrains Foundation Program is perfect for your child!
            </p>
          </div>
        </div>
      </section>

      {/* Limited Seats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-12 border-2 border-yellow-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏳ Limited Seats Available</h2>
          <p className="text-xl text-gray-700 mb-8">
            Seats fill fast due to small batch sizes. <span className="font-bold text-blue-600">Don't miss out on your child's transformation.</span>
          </p>
          <div className="space-y-4">
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
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Book Your Free Consultation Today
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of students who have transformed their learning with BuzzyBrains Foundation Program
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Enroll? 🎓</h2>
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
