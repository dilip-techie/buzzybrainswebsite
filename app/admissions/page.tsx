'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Award, CheckCircle, GraduationCap, BookOpen, Zap, Trophy, ArrowRight, ChevronRight, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

export default function AdmissionsPage() {
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
    // Scroll to contact form on main page or open it
    window.location.href = '/#contact';
  };

  const scholarshipTiers = [
    {
      name: "Merit Scholarship",
      percentage: "Up to 50%",
      description: "For students scoring 85%+ in entrance test",
      color: "from-yellow-600 to-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      perks: [
        "50% tuition fee waiver",
        "Premium study material",
        "Doubt solving priority",
        "Monthly performance review"
      ]
    },
    {
      name: "Excellence Scholarship",
      percentage: "Up to 75%",
      description: "For students scoring 90%+ in entrance test",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      perks: [
        "75% tuition fee waiver",
        "1:1 mentoring sessions",
        "Advanced modules access",
        "Free study material"
      ]
    },
    {
      name: "Premier Scholarship",
      percentage: "100%",
      description: "For students scoring 95%+ in entrance test",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      perks: [
        "Full tuition fee waiver",
        "Personal IITian mentor",
        "Exclusive masterclasses",
        "Career guidance program"
      ]
    }
  ];

  const eligibilitySteps = [
    {
      step: 1,
      title: "Take Our Entrance Test",
      description: "Appear for BuzzyBrains Academy's comprehensive entrance test",
      icon: BookOpen
    },
    {
      step: 2,
      title: "Score Assessment",
      description: "Get your score evaluated against our scholarship criteria",
      icon: Award
    },
    {
      step: 3,
      title: "Offer Letter",
      description: "Receive personalized offer with scholarship details",
      icon: Trophy
    },
    {
      step: 4,
      title: "Enrollment",
      description: "Complete enrollment and start your success journey",
      icon: GraduationCap
    }
  ];

  const adissionFeatures = [
    "No entrance fees required",
    "Flexible batch timings",
    "Online & offline modes",
    "Money-back guarantee if unsatisfied",
    "Flexible payment options",
    "Batch change freedom"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-m sticky top-0 z-50">
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
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">🎓 Scholarships Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Study with <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Scholarships!</span>
              <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold align-middle inline-block"><span className="blink-icon inline-block">●</span> Online</span>
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4\">Grades 6-12</h2>
            <p className="text-xl text-gray-600 mb-4">
              Get rewarded for your merit. BuzzyBrains Academy offers up to <span className="font-bold text-blue-600">100% scholarships</span> based on entrance test scores.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              No hidden charges. Transparent evaluation. Direct admissions.
            </p>
            <button 
              onClick={() => setShowCtaModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold mx-auto"
            >
              <span>Start Application</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Scholarship Tiers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarship Tiers</h2>
            <p className="text-xl text-gray-600">Reward based on merit. Choose your path.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarshipTiers.map((tier, index) => (
              <div key={index} className={`rounded-2xl p-8 border-2 ${tier.borderColor} ${tier.bgColor} transform hover:scale-105 transition-all duration-300`}>
                <div className={`bg-gradient-to-r ${tier.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {tier.percentage}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <div className="space-y-3">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to secure your scholarship</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {eligibilitySteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  {index < eligibilitySteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  )}
                  <div className="bg-white rounded-xl p-6 text-center relative z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-blue-600 mb-2">Step {item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Eligibility Criteria</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <span>Merit Scholarship</span>
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-700"><strong>Score: 85%+</strong> in entrance test</p>
                    <p className="text-gray-600 text-sm mt-1">Get up to 50% fee waiver</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                    <Award className="w-6 h-6 text-purple-500" />
                    <span>Excellence Scholarship</span>
                  </h3>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="text-gray-700"><strong>Score: 90%+</strong> in entrance test</p>
                    <p className="text-gray-600 text-sm mt-1">Get up to 75% fee waiver + perks</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                    <span>Premier Scholarship</span>
                  </h3>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-gray-700"><strong>Score: 95%+</strong> in entrance test</p>
                    <p className="text-gray-600 text-sm mt-1">Get 100% fee waiver + premium benefits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8">Admission Features</h3>
              <ul className="space-y-4">
                {adissionFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the entrance test today and unlock your scholarship. Limited seats available!
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Apply for Scholarship
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">BuzzyBrains Academy</h3>
              <p className="text-sm">Premium coaching for IIT, NEET & Board exams with scholarship opportunities.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/#courses" className="hover:text-white transition">Courses</a></li>
                <li><a href="/#results" className="hover:text-white transition">Results</a></li>
                <li><a href="/admissions" className="hover:text-white transition">Admissions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
                <li><a href="#results" className="hover:text-white transition">Results</a></li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Apply? 👋</h2>
              <p className="text-gray-600">Choose how you'd like to get started with BuzzyBrains Academy</p>
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
