'use client';

import '@/app/tailwind.css';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-[calc(108px+4rem)]">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Contact BuzzyBrains Academy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our expert mentors and admissions team
          </p>
          <Link prefetch={false}
            href="/#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Book a Free Demo Class →
          </Link>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp Card */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">WhatsApp</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Connect with us instantly on WhatsApp for quick responses and personalized guidance.
            </p>
            <a
              href="https://wa.me/919850570525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Contact Us
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
            <div className="flex items-center mb-4">
              <Phone className="w-8 h-8 text-blue-400 mr-4" />
              <h2 className="text-2xl font-bold">Phone</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Call us directly for immediate assistance with admissions and course inquiries.
            </p>
            <a
              href="tel:+919850570525"
              className="inline-block text-blue-400 font-bold py-3 px-6 rounded-lg border border-blue-400 hover:bg-blue-400/10 transition"
            >
              Call 98505 70525
            </a>
          </div>
        </div>

        {/* Branches Section */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/30 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-purple-400/30 bg-slate-950/40 p-6">
              <h3 className="text-xl font-semibold mb-2">Branch 1: Wisdom World Centre</h3>
              <p className="text-gray-300 mb-4">Visit our premium learning centre at Wisdom World Centre for admissions, demo classes, and campus guidance.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=BuzzyBrains+Academy+Wisdom+World+Centre+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-300 font-semibold hover:text-purple-200 transition"
              >
                View on Google
              </a>
            </div>
            <div className="rounded-lg border border-purple-400/30 bg-slate-950/40 p-6">
              <h3 className="text-xl font-semibold mb-2">Branch 2: Aspire Towers</h3>
              <p className="text-gray-300 mb-4">Meet our mentors and explore programs at Aspire Towers for focused coaching and personalized support.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=BuzzyBrains+Academy+Aspire+Towers+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-300 font-semibold hover:text-purple-200 transition"
              >
                View on Google
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/30 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">How can I enroll in a course?</h3>
              <p className="text-gray-300">
                Contact us via WhatsApp or phone to discuss your learning goals. Our admissions team will guide you through the enrollment process and help you choose the right program.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">What are the available scholarship options?</h3>
              <p className="text-gray-300">
                We offer merit-based scholarships up to 50% for high-performing students. Visit our <Link prefetch={false} href="/admissions" className="text-purple-400 hover:text-purple-300">Admissions page</Link> for detailed information about our scholarship tiers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Do you offer online classes?</h3>
              <p className="text-gray-300">
                Yes! We offer both online and offline coaching options. Our experienced mentors (<strong>IITian</strong> and IIM graduates) provide personalized guidance through multiple formats to suit your needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">What is your response time?</h3>
              <p className="text-gray-300">
                We typically respond to WhatsApp messages within a few minutes during business hours. For the fastest response, please contact us via WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Can I schedule a free consultation?</h3>
              <p className="text-gray-300">
                Absolutely! Contact us to schedule a free consultation with our mentors. They will assess your current level and discuss the best learning path for your goals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Connect with our expert mentors today and unlock your potential
          </p>
          <a
            href="https://wa.me/919850570525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
