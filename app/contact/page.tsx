'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919850570525"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Navigation */}
      <nav className="bg-slate-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-40 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              BuzzyBrains
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-purple-400 transition">Home</Link>
              <Link href="/foundation" className="hover:text-purple-400 transition">Foundation</Link>
              <Link href="/10th-board" className="hover:text-purple-400 transition">10th Board</Link>
              <Link href="/12th-board" className="hover:text-purple-400 transition">12th Board</Link>
              <Link href="/international-boards" className="hover:text-purple-400 transition">International</Link>
              <Link href="/one-on-one" className="hover:text-purple-400 transition">1:1 Coaching</Link>
              <Link href="/admissions" className="hover:text-purple-400 transition">Admissions</Link>
              <Link href="/contact" className="text-purple-400 border-b-2 border-purple-400">Contact</Link>
            </div>

            {/* WhatsApp Button (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">WhatsApp</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="/" className="block hover:text-purple-400 transition py-2">Home</Link>
              <Link href="/foundation" className="block hover:text-purple-400 transition py-2">Foundation</Link>
              <Link href="/10th-board" className="block hover:text-purple-400 transition py-2">10th Board</Link>
              <Link href="/12th-board" className="block hover:text-purple-400 transition py-2">12th Board</Link>
              <Link href="/international-boards" className="block hover:text-purple-400 transition py-2">International</Link>
              <Link href="/one-on-one" className="block hover:text-purple-400 transition py-2">1:1 Coaching</Link>
              <Link href="/admissions" className="block hover:text-purple-400 transition py-2">Admissions</Link>
              <Link href="/contact" className="block text-purple-400 py-2">Contact</Link>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="block hover:text-purple-400 transition py-2">WhatsApp</a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our expert mentors and admissions team
          </p>
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
              href="https://wa.me/919850570525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 font-bold py-3 px-6 rounded-lg border border-blue-400 hover:bg-blue-400/10 transition"
            >
              Contact Us
            </a>
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
                We offer merit-based scholarships up to 50% for high-performing students. Visit our <Link href="/admissions" className="text-purple-400 hover:text-purple-300">Admissions page</Link> for detailed information about our scholarship tiers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Do you offer online classes?</h3>
              <p className="text-gray-300">
                Yes! We offer both online and offline coaching options. Our experienced mentors (IITian and IIM graduates) provide personalized guidance through multiple formats to suit your needs.
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

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">BuzzyBrains</h3>
              <p className="text-gray-400 text-sm">Expert coaching by IITian and IIM mentors</p>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold mb-4 text-purple-400">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/foundation" className="hover:text-white transition">Foundation (6-10)</Link></li>
                <li><Link href="/12th-board" className="hover:text-white transition">Board Exams</Link></li>
                <li><Link href="/international-boards" className="hover:text-white transition">International</Link></li>
                <li><Link href="/one-on-one" className="hover:text-white transition">1:1 Coaching</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-purple-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/admissions" className="hover:text-white transition">Admissions</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-purple-400">Get in Touch</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 BuzzyBrains. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
