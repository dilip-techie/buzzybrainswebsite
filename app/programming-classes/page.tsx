'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle, ChevronDown, Code, Users, Trophy, BookOpen, Zap, Target } from 'lucide-react';
import Link from 'next/link';

export default function ProgrammingClassesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'Which programming language will my child learn?',
      answer: 'We teach based on your child\'s board: Python for CBSE/IGCSE/IB, Java for ICSE/ISC, and C++ for advanced students. The curriculum is tailored to match board requirements while adding industry-relevant skills.'
    },
    {
      question: 'Is prior programming experience required?',
      answer: 'No! We start from absolute basics for all beginners. Whether your child has never coded before or has some experience, our curriculum accommodates different learning levels.'
    },
    {
      question: 'How are classes conducted?',
      answer: 'We offer both online live interactive sessions and offline classes. Each format includes real-time coding demonstrations, hands-on practice, and personalized feedback from our IIT Kanpur mentor.'
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of maximum 8-10 students to ensure personalized attention, individual code reviews, and adequate doubt-clearing time for each student.'
    },
    {
      question: 'Do you provide study materials?',
      answer: 'Yes! We provide comprehensive study materials including detailed notes, code examples, practice problems, previous year board questions, and curated resources for each topic.'
    },
    {
      question: 'How do you ensure board exam preparation?',
      answer: 'Our curriculum is specifically aligned with board syllabus. We include board-specific topics, solve previous year questions, conduct mock tests, and provide exam-focused revision sessions in the final months.'
    },
    {
      question: 'Can students from international boards join?',
      answer: 'Absolutely! We have dedicated tracks for IGCSE, IB, Cambridge, and AP curricula. Our IIT mentor has experience teaching all major international boards.'
    },
    {
      question: 'How often will my child have classes?',
      answer: 'Frequency varies by grade and batch type: Foundation (Grades 6-8): 2 classes/week, Intermediate (9-10): 2-3 classes/week, Advanced (11-12): 3 classes/week. Flexible scheduling is available for 1-on-1 classes.'
    }
  ];

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
              <Link href="/programming-classes" className="text-purple-400 border-b-2 border-purple-400">Programming</Link>
              <Link href="/foundation" className="hover:text-purple-400 transition">Foundation</Link>
              <Link href="/12th-board" className="hover:text-purple-400 transition">12th Board</Link>
              <Link href="/international-boards" className="hover:text-purple-400 transition">International</Link>
              <Link href="/admissions" className="hover:text-purple-400 transition">Admissions</Link>
              <Link href="/contact" className="hover:text-purple-400 transition">Contact</Link>
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
              <Link href="/programming-classes" className="block text-purple-400 py-2">Programming</Link>
              <Link href="/foundation" className="block hover:text-purple-400 transition py-2">Foundation</Link>
              <Link href="/12th-board" className="block hover:text-purple-400 transition py-2">12th Board</Link>
              <Link href="/international-boards" className="block hover:text-purple-400 transition py-2">International</Link>
              <Link href="/admissions" className="block hover:text-purple-400 transition py-2">Admissions</Link>
              <Link href="/contact" className="block hover:text-purple-400 transition py-2">Contact</Link>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="block hover:text-purple-400 transition py-2">WhatsApp</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                Master Coding with an IIT Kanpur Expert
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Programming Classes for Grades 6-12 | Python, Java, Web Development & More | Aligned with CBSE, ICSE, IGCSE, IB & All International Boards
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3">
                  <div className="text-sm font-bold text-purple-300">IIT Kanpur Alumni</div>
                  <div className="text-xs text-gray-400">Expert Mentor</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3">
                  <div className="text-sm font-bold text-purple-300">500+ Students</div>
                  <div className="text-xs text-gray-400">Trained & Successful</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3">
                  <div className="text-sm font-bold text-purple-300">All Boards</div>
                  <div className="text-xs text-gray-400">Covered Completely</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3">
                  <div className="text-sm font-bold text-purple-300">Industry Aligned</div>
                  <div className="text-xs text-gray-400">Real-World Skills</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919850570525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
                >
                  Book FREE Demo Class
                </a>
                <a
                  href="https://wa.me/919850570525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 font-bold py-4 px-8 rounded-lg transition"
                >
                  Talk to Our Expert
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden md:block relative">
              <div className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-md">
                <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm">
                  <div className="text-purple-400">{'// Master Coding Today'}</div>
                  <div className="text-green-400 mt-4">{'function learnProgramming() {'}</div>
                  <div className="text-gray-300 ml-4">{'skills = [Python, Java, WebDev]'}</div>
                  <div className="text-gray-300 ml-4">{'mentor = IITKanpurExpert()'}</div>
                  <div className="text-gray-300 ml-4">{'result = master(skills, mentor)'}</div>
                  <div className="text-gray-300 ml-4">{'return result'}</div>
                  <div className="text-green-400">{'}  // Success!'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Trainer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Learn from an IIT Kanpur Graduate with Real-World Industry Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-500/30">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-12 text-center">
                <div className="text-6xl font-bold text-white">🎓</div>
                <h3 className="text-2xl font-bold mt-4 text-white">IIT Kanpur Expert</h3>
                <p className="text-purple-200 mt-2">B.Tech in Computer Science</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Why Learn from an IIT Kanpur Expert?</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-bold">Deep Technical Expertise</div>
                    <div className="text-gray-300 text-sm">Comprehensive understanding of programming concepts from basics to advanced algorithms</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-bold">Industry Best Practices</div>
                    <div className="text-gray-300 text-sm">Teaching methodology integrates real-world coding standards and industry applications</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-bold">Proven Track Record</div>
                    <div className="text-gray-300 text-sm">Successfully mentored 500+ students to excel in board exams and competitions</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-bold">Personalized Attention</div>
                    <div className="text-gray-300 text-sm">Small batch sizes ensure individual code reviews and customized learning paths</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-bold">Beyond Textbooks</div>
                    <div className="text-gray-300 text-sm">Real-world project experience that prepares students for coding competitions and careers</div>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 rounded-lg p-6 italic">
                <p className="text-gray-200">
                  "I bridge the gap between academic learning and industry requirements, ensuring students not only score well on board exams but also develop practical coding skills for their future careers."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Coverage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Comprehensive Programming Education for All Boards
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Our curriculum is meticulously designed to align with and exceed requirements of every educational board
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CBSE */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg border border-blue-500/30 p-8 hover:border-blue-400/60 transition">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">CBSE (Central Board)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> <span><strong>Classes 6-8:</strong> Introduction to Coding (Scratch, Python basics)</span></li>
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> <span><strong>Classes 9-10:</strong> Python & Problem Solving</span></li>
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> <span><strong>Classes 11-12:</strong> Python, Data Structures, SQL, Networking</span></li>
              </ul>
              <span className="inline-block bg-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">Aligned with CBSE Syllabus</span>
            </div>

            {/* ICSE/ISC */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg border border-green-500/30 p-8 hover:border-green-400/60 transition">
              <h3 className="text-2xl font-bold text-green-400 mb-4">ICSE/ISC (Indian Certificate)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> <span><strong>Classes 6-8:</strong> Fundamentals of Computing</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> <span><strong>Classes 9-10:</strong> Java & OOP Basics</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> <span><strong>Classes 11-12:</strong> Advanced Java, Data Structures, Swing/AWT</span></li>
              </ul>
              <span className="inline-block bg-green-500/30 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">Java-Focused Track</span>
            </div>

            {/* IGCSE */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">IGCSE (Cambridge)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> <span><strong>Classes 6-10:</strong> Cambridge ICT & Computer Science Syllabus</span></li>
                <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> <span><strong>Focus:</strong> Python, Algorithms, Computational Thinking</span></li>
                <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> <span><strong>Exams:</strong> Theory & Practical Component Preparation</span></li>
              </ul>
              <span className="inline-block bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">International Standard</span>
            </div>

            {/* IB */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-lg border border-orange-500/30 p-8 hover:border-orange-400/60 transition">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">IB (International Baccalaureate)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start"><span className="text-orange-400 mr-2">•</span> <span><strong>MYP (6-10):</strong> Design & Technology Curriculum</span></li>
                <li className="flex items-start"><span className="text-orange-400 mr-2">•</span> <span><strong>DP (11-12):</strong> Computer Science SL/HL</span></li>
                <li className="flex items-start"><span className="text-orange-400 mr-2">•</span> <span><strong>Languages:</strong> Java & Python for IB Requirements</span></li>
              </ul>
              <span className="inline-block bg-orange-500/30 text-orange-300 px-3 py-1 rounded-full text-sm font-semibold">Premium Curriculum</span>
            </div>

            {/* AP */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-lg border border-red-500/30 p-8 hover:border-red-400/60 transition">
              <h3 className="text-2xl font-bold text-red-400 mb-4">AP Computer Science</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span> <span><strong>AP CSA:</strong> Java Programming & Advanced Data Structures</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span> <span><strong>AP CSP:</strong> Computational Thinking & Design</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span> <span><strong>Exam Prep:</strong> Full practice tests & time management</span></li>
              </ul>
              <span className="inline-block bg-red-500/30 text-red-300 px-3 py-1 rounded-full text-sm font-semibold">US Curriculum</span>
            </div>

            {/* State & Custom */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-lg border border-indigo-500/30 p-8 hover:border-indigo-400/60 transition">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">State Boards & Custom</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span> <span><strong>All State Boards:</strong> Tailored curriculum alignment</span></li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span> <span><strong>Olympiad Prep:</strong> Competitive programming training</span></li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span> <span><strong>Custom Paths:</strong> Personalized learning tracks</span></li>
              </ul>
              <span className="inline-block bg-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold">Flexible Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            From Basics to Advanced: A Complete Programming Journey
          </h2>

          <div className="space-y-8">
            {/* Grades 6-8 */}
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/10 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/60 transition">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-blue-400">Grades 6-8: Foundation Level</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Build strong programming fundamentals with interactive, game-based learning:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Introduction to Programming Concepts</li>
                    <li>• Visual Programming (Scratch/Blockly)</li>
                    <li>• Python Basics: Variables, Loops, Conditionals</li>
                    <li>• Simple Game Development</li>
                    <li>• Basic HTML/CSS</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs text-green-400">
                  <div>{'# Example: First Python Program'}</div>
                  <div className="text-blue-400">{'name = input("Enter your name: ")'}</div>
                  <div className="text-blue-400">{'print(f"Hello, {name}!")'}</div>
                </div>
              </div>
            </div>

            {/* Grades 9-10 */}
            <div className="bg-gradient-to-r from-green-600/20 to-green-600/10 border border-green-500/30 rounded-lg p-8 hover:border-green-400/60 transition">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-green-400">Grades 9-10: Intermediate Level</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Master core programming concepts with board exam focus:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Python/Java (board-specific)</li>
                    <li>• Object-Oriented Programming Basics</li>
                    <li>• Data Structures Fundamentals</li>
                    <li>• Web Development: HTML, CSS, JavaScript</li>
                    <li>• Database Basics (SQL)</li>
                    <li>• Board Exam Preparation</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs text-green-400">
                  <div>{'# OOP Example'}</div>
                  <div className="text-blue-400">{'class Student:'}</div>
                  <div className="text-blue-400">{' def __init__(self, name):'}</div>
                  <div className="text-blue-400">{'  self.name = name'}</div>
                  <div className="text-blue-400">{'s = Student("Alice")'}</div>
                </div>
              </div>
            </div>

            {/* Grades 11-12 */}
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-600/10 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/60 transition">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-purple-400">Grades 11-12: Advanced Level</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Advanced programming with competitive & career focus:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Advanced Python/Java Programming</li>
                    <li>• Data Structures & Algorithms</li>
                    <li>• Object-Oriented Design Patterns</li>
                    <li>• Database Management (SQL, MySQL)</li>
                    <li>• Networking & System Design</li>
                    <li>• Web Frameworks Introduction</li>
                    <li>• Project-Based Learning</li>
                    <li>• Board Exam + Competitive Preparation</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs text-green-400">
                  <div>{'# Advanced: DSA'}</div>
                  <div className="text-blue-400">{'def binary_search(arr, x):'}</div>
                  <div className="text-blue-400">{'  left, right = 0, len(arr)-1'}</div>
                  <div className="text-blue-400">{'  while left <= right:'}</div>
                  <div className="text-blue-400">{'    mid = (left+right)//2'}</div>
                  <div className="text-blue-400">{'    if arr[mid]==x: return mid'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Industry Experience Meets Academic Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-400">IIT Kanpur Expertise</h3>
              <p className="text-gray-300">Learn from an IIT graduate who combines academic rigor with practical industry insights and proven mentoring experience</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <Zap className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-pink-400">Real Industry Experience</h3>
              <p className="text-gray-300">Curriculum designed with hands-on software development experience, bringing real-world best practices into the classroom</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-blue-400">All Boards Covered</h3>
              <p className="text-gray-300">Complete alignment with CBSE, ICSE, IGCSE, IB, and international board requirements with board-specific teaching</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-green-400">Small Batch Sizes</h3>
              <p className="text-gray-300">Maximum 8-10 students per batch ensuring personalized attention, individual code reviews, and adequate doubt-clearing</p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Hands-On Learning</h3>
              <p className="text-gray-300">Every concept reinforced with coding exercises, real projects, and practical applications that go beyond textbooks</p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <Target className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-red-400">Beyond Board Exams</h3>
              <p className="text-gray-300">Preparation for coding olympiads, hackathons, and competitive programming to build portfolio and career prospects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills That Matter: From Classroom to Career
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-purple-500/30 p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Programming Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <span>Python</span>
                  <span className="text-xs bg-purple-500/30 px-3 py-1 rounded-full">CBSE/IGCSE/IB</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <span>Java</span>
                  <span className="text-xs bg-green-500/30 px-3 py-1 rounded-full">ICSE/ISC/AP</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <span>C++</span>
                  <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full">Advanced</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <span>JavaScript</span>
                  <span className="text-xs bg-yellow-500/30 px-3 py-1 rounded-full">Web Dev</span>
                </div>
              </div>
            </div>

            {/* Core Concepts */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-purple-500/30 p-8">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Core Concepts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">▪</span>
                  <span>Problem Solving & Computational Thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">▪</span>
                  <span>Data Structures (Arrays, Lists, Stacks, Trees)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">▪</span>
                  <span>Algorithms & Sorting/Searching Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">▪</span>
                  <span>Object-Oriented Programming Principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">▪</span>
                  <span>Database Management & SQL</span>
                </li>
              </ul>
            </div>

            {/* Practical Skills */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-purple-500/30 p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Practical Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▪</span>
                  <span>Web Development (HTML, CSS, JavaScript)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▪</span>
                  <span>Version Control (Git/GitHub)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▪</span>
                  <span>Debugging & Code Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▪</span>
                  <span>Code Optimization & Best Practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▪</span>
                  <span>Project Documentation & Presentation</span>
                </li>
              </ul>
            </div>

            {/* Board-Specific Topics */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-purple-500/30 p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Board-Specific Topics</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>CBSE:</strong> NumPy, Pandas, Data Visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>ICSE:</strong> Swing/AWT, Applets, Database connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>IB:</strong> Computational thinking, System design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>IGCSE:</strong> Pseudocode, Flowcharts, Algorithm design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hear from Our Students
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center font-bold text-lg">R</div>
                <div className="ml-4">
                  <h4 className="font-bold">Rahul Sharma</h4>
                  <p className="text-sm text-gray-400">Class 12 CBSE</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "The programming classes helped me score 98/100 in CBSE Class 12 Computer Science. The industry perspective from an IIT mentor made concepts crystal clear!"
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center font-bold text-lg">P</div>
                <div className="ml-4">
                  <h4 className="font-bold">Priya Patel</h4>
                  <p className="text-sm text-gray-400">Class 10 ICSE</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "I was struggling with Java for ICSE, but the personalized attention and practical projects helped me build confidence. Highly recommend!"
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center font-bold text-lg">A</div>
                <div className="ml-4">
                  <h4 className="font-bold">Arjun Singh</h4>
                  <p className="text-sm text-gray-400">Class 11 IGCSE</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Learning from an IIT Kanpur graduate gave me exposure to real coding practices. I even won a school hackathon!"
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Options & Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Flexible Learning Options
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">Choose the learning format that fits your schedule</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Foundation Batch */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-purple-500/30 p-8 hover:border-purple-400/60 transition">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Foundation Batch</h3>
              <p className="text-gray-400 mb-6">Grades 6-8</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start"><span className="text-purple-400 mr-3">•</span> 3 or 6 months duration</li>
                <li className="flex items-start"><span className="text-purple-400 mr-3">•</span> 2 classes per week</li>
                <li className="flex items-start"><span className="text-purple-400 mr-3">•</span> Maximum 10 students</li>
                <li className="flex items-start"><span className="text-purple-400 mr-3">•</span> Foundation building focus</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 font-bold py-3 rounded-lg transition">Enquire Now</button>
            </div>

            {/* Intermediate Batch */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-pink-500/30 p-8 hover:border-pink-400/60 transition ring-2 ring-pink-500/20">
              <div className="bg-pink-500/20 text-pink-300 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Intermediate Batch</h3>
              <p className="text-gray-400 mb-6">Grades 9-10</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start"><span className="text-pink-400 mr-3">•</span> 6 months or 1 year</li>
                <li className="flex items-start"><span className="text-pink-400 mr-3">•</span> 2-3 classes per week</li>
                <li className="flex items-start"><span className="text-pink-400 mr-3">•</span> Maximum 8 students</li>
                <li className="flex items-start"><span className="text-pink-400 mr-3">•</span> Board exam preparation</li>
              </ul>
              <button className="w-full bg-pink-600 hover:bg-pink-700 font-bold py-3 rounded-lg transition">Enquire Now</button>
            </div>

            {/* Advanced Batch */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-green-500/30 p-8 hover:border-green-400/60 transition">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Advanced Batch</h3>
              <p className="text-gray-400 mb-6">Grades 11-12</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start"><span className="text-green-400 mr-3">•</span> 1 or 2 year programs</li>
                <li className="flex items-start"><span className="text-green-400 mr-3">•</span> 3 classes per week</li>
                <li className="flex items-start"><span className="text-green-400 mr-3">•</span> Maximum 8 students</li>
                <li className="flex items-start"><span className="text-green-400 mr-3">•</span> Exam + competitive prep</li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 font-bold py-3 rounded-lg transition">Enquire Now</button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-12 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">1-on-1 Personalized Classes</h3>
            <p className="text-lg mb-6 opacity-90">Customized curriculum, flexible scheduling, and intensive doubt clearing</p>
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">Book Demo Class</button>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Special Offer!</h3>
            <p className="text-lg text-gray-300">
              Enroll now and get your <strong>first class FREE</strong> + <strong>Bonus coding resources worth ₹2,000</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-500/20 transition"
                >
                  <h3 className="text-lg font-bold text-left text-purple-300">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-400 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-purple-500/20">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Your Coding Journey Today!
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Learn from an IIT Kanpur Expert | Limited Seats Available
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/919850570525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
            >
              Book FREE Demo Class
            </a>
            <a
              href="https://wa.me/919850570525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition"
            >
              Download Curriculum PDF
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <p className="text-gray-400 mb-6">Get in touch with us for quick assistance</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-300">
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-purple-400 transition">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contact@buzzybrains.com" className="flex items-center hover:text-purple-400 transition">
                <Mail className="w-5 h-5 mr-2" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">BuzzyBrains</h3>
              <p className="text-gray-400 text-sm">Expert programming classes by IIT Kanpur mentors</p>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold mb-4 text-purple-400">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/programming-classes" className="hover:text-white transition">Programming Classes</Link></li>
                <li><Link href="/foundation" className="hover:text-white transition">Foundation</Link></li>
                <li><Link href="/12th-board" className="hover:text-white transition">Board Exams</Link></li>
                <li><Link href="/international-boards" className="hover:text-white transition">International</Link></li>
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
