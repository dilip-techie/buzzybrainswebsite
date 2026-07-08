'use client';

import React, { useState } from 'react';
import { Award, CheckCircle, GraduationCap, BookOpen, Zap, Trophy, ArrowRight, ChevronRight } from 'lucide-react';

export default function AdmissionsPage() {
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
    // Scroll to contact form on main page or open it
    window.location.href = '/#contact';
  };

  const scholarshipTiers = [
    {
      name: "Merit Scholarship",
      percentage: "20%",
      description: "For students scoring 80%+ in entrance test",
      color: "from-yellow-600 to-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      perks: [
        "20% tuition fee waiver",
        "Premium study material",
        "Doubt solving priority",
        "Monthly performance review"
      ]
    },
    {
      name: "Excellence Scholarship",
      percentage: "40%",
      description: "For students scoring 90%+ in entrance test",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      perks: [
        "40% tuition fee waiver",
        "1:1 mentoring sessions",
        "Advanced modules access",
        "Free study material"
      ]
    },
    {
      name: "Premium Scholarship",
      percentage: "50%",
      description: "For students scoring 95%+ in entrance test",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      perks: [
        "50% tuition fee waiver",
        "Personal <strong>IITian</strong> mentor",
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
    <div className="min-h-screen bb-page-shell">
      {/* Hero Section */}
      <section className="relative pt-[108px] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">🎓 Scholarships Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Study with <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Scholarships!</span>
            </h1>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">Grades 6-12 <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold align-middle inline-block"><span className="blink-icon inline-block">●</span> Online Available</span></h2>
            <p className="text-xl text-gray-600 mb-4">
              Get rewarded for your merit. BuzzyBrains Academy offers scholarships up to <span className="font-bold text-blue-600">50%</span> based on entrance test scores.
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
                    <p className="text-gray-700"><strong>Score: 80%+</strong> in entrance test</p>
                    <p className="text-gray-600 text-sm mt-1">Get 20% fee waiver</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                    <Award className="w-6 h-6 text-purple-500" />
                    <span>Excellence Scholarship</span>
                  </h3>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="text-gray-700"><strong>Score: 90%+</strong> in entrance test</p>
                    <p className="text-gray-600 text-sm mt-1">Get 40% fee waiver + perks</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                    <span>Premium Scholarship</span>
                  </h3>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-gray-700"><strong>Score: 95%+</strong> in entrance test</p>
                    <p className="text-gray-600 text-sm mt-1">Get 50% fee waiver + premium benefits</p>
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
