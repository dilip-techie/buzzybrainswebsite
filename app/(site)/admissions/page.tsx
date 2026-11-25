'use client';

import '@/app/tailwind.css';
import React, { useState } from 'react';
import { Award, CheckCircle, GraduationCap, BookOpen, Zap, Trophy, ArrowRight, ChevronRight } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

const FAQS = [
  {
    question: 'How do the merit scholarships work?',
    answer: 'Scholarships of up to 90% on tuition fees are available for JEE, NEET and all group batches, including Foundation and Olympiad programs. They are based on your free scholarship test score, with no separate application. Your exact scholarship is confirmed in your offer letter.',
  },
  {
    question: 'Is there a fee to take the entrance test?',
    answer: 'No — the entrance test is free, with no hidden charges anywhere in the admissions process.',
  },
  {
    question: 'What does the admissions process look like?',
    answer: 'Four steps: take the entrance test, get your score evaluated against the scholarship criteria, receive a personalized offer letter with your scholarship, then complete enrollment.',
  },
  {
    question: 'What if my child isn\'t satisfied after enrolling?',
    answer: 'We offer a money-back guarantee if you\'re unsatisfied, along with flexible batch timings, payment options and the freedom to change batches — enrollment isn\'t a one-way commitment.',
  },
  {
    question: 'Are classes online or in person?',
    answer: 'Both formats are available for every program, so you can choose whichever fits your family\'s schedule.',
  },
];

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
    window.open('https://wa.me/918983604478', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    // Scroll to contact form on main page or open it
    window.location.href = '/#contact';
  };

  const scholarshipPrograms = [
    "IIT-JEE and NEET batches",
    "Top Rankers Program (JEE & NEET)",
    "Foundation batches (Grades 6-10)",
    "Olympiad programs (IOQM, AMC, NMTC, NSE, Kangaroo, SOF and more)",
    "All other group batches, including SAT, ACT, AP, IPMAT, CAT and CLAT",
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
              Get rewarded for your merit. BuzzyBrains Academy offers scholarships of up to <span className="font-bold text-blue-600">90%</span> for JEE, NEET and all group batches, based on a free scholarship test.
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

      {/* Scholarships */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarships of up to 90%</h2>
            <p className="text-xl text-gray-600">Take one free test. Your score decides your scholarship on tuition fees.</p>
          </div>
          <div className="rounded-2xl p-8 border-2 border-purple-200 bg-purple-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Up to 90%</div>
                <p className="text-gray-600">Available for these programs</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {scholarshipPrograms.map((program) => (
                <div key={program} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{program}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-6">Your exact scholarship depends on your test score and is confirmed in your offer letter.</p>
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
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-gray-700 flex items-center space-x-2"><Zap className="w-5 h-5 text-yellow-500" /><strong>Who can apply</strong></p>
                  <p className="text-gray-600 text-sm mt-1">Any student joining a JEE, NEET, Foundation, Olympiad or other group batch.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="text-gray-700 flex items-center space-x-2"><Award className="w-5 h-5 text-purple-500" /><strong>How it is decided</strong></p>
                  <p className="text-gray-600 text-sm mt-1">Your score on our free scholarship test. Higher scores earn bigger scholarships, up to 90% of tuition fees.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-gray-700 flex items-center space-x-2"><Trophy className="w-5 h-5 text-yellow-600" /><strong>Your offer</strong></p>
                  <p className="text-gray-600 text-sm mt-1">Your exact scholarship is confirmed in a personalized offer letter.</p>
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

      {/* FAQ */}
      <FaqJsonLd items={FAQS} />
      <MarketingFaq items={FAQS} />

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
          <p className="mt-6 text-blue-100">
            Prefer to talk first?{' '}
            <a href="tel:+919850570525" className="font-bold text-white underline underline-offset-2">
              Call 98505 70525
            </a>
          </p>
        </div>
      </section>

      {/* CTA Modal */}
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Ready to Apply? 👋"
        subtitle="Choose how you'd like to get started with BuzzyBrains Academy"
      />
    </div>
  );
}
