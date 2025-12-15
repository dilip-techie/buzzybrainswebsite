'use client';

import React, { useState } from 'react';
import { GraduationCap, Award, Users, BookOpen, TrendingUp, Star, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CoachingHomepage() {
  const courses = [
    {
      title: "Foundation Program",
      subtitle: "Classes 6-10",
      description: "Build a rock-solid foundation in Maths, Science, Chemistry & Biology with IITian mentors",
      icon: BookOpen,
      gradient: "from-blue-600 to-cyan-600",
      features: [
        "Max 12 students per batch",
        "Personal 1:1 attention",
        "Master every concept",
        "Comprehensive test series",
        "Advanced algebra module"
      ]
    },
    {
      title: "IIT-JEE Preparation",
      subtitle: "Engineering Entrance",
      description: "Comprehensive JEE Main & Advanced coaching with rigorous practice and expert mentorship.",
      icon: GraduationCap,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Guidance from AIR-400 mentor",
        "Topicwise test series",
        "Live doubt-solving",
        "Comprehensive test series",
        "Advanced algebra module"
      ]
    },
    {
      title: "NEET Preparation",
      subtitle: "Medical Entrance",
      description: "Intensive coaching for NEET with focus on Biology, Physics, Chemistry and quick calculations",
      icon: Award,
      gradient: "from-green-600 to-emerald-600",
      features: [
        "Vedic maths advantage",
        "Quick doubt resolution",
        "Year-round strategy guide",
        "Comprehensive test series",
        "Advanced algebra module"
      ]
    },
    {
      title: "10th Board Preparation",
      subtitle: "SSC/CBSE/ICSE",
      description: "Focused board exam preparation for Class 10 with concept clarity and exam strategies.",
      icon: BookOpen,
      gradient: "from-pink-500 to-red-500",
      features: [
        "Board-specific study material",
        "Regular assessments",
        "Revision bootcamps",
        "Comprehensive test series",
        "Advanced algebra module"
      ]
    },
    {
      title: "12th Board Preparation",
      subtitle: "HSC/CBSE/ISC",
      description: "Targeted coaching for Class 12 boards with expert faculty and personalized feedback.",
      icon: BookOpen,
      gradient: "from-green-500 to-lime-500",
      features: [
        "Personalized study plans",
        "Model paper practice",
        "Performance tracking",
        "Comprehensive test series",
        "Advanced algebra module"
      ]
    },
    {
      title: "Maths Excellence Prog.",
      subtitle: "Advanced Maths",
      description: "Specialized program for students aiming for advanced mathematics competitions.",
      icon: TrendingUp,
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Olympiad-level problem solving",
        "Advanced math concepts",
        "Mentorship by IITians",
        "Comprehensive test series",
        "Advanced algebra module"
      ]
    },
    {
      title: "IGCSE Preparation",
      subtitle: "Classes 6-12 (Cambridge/Edexcel)",
      description: "Expert coaching for IGCSE with focus on Maths, Science, Computers, Social Studies, Economics & Accounting.",
      icon: GraduationCap,
      gradient: "from-indigo-600 to-blue-600",
      features: [
        "Cambridge & Edexcel curriculum",
        "Maths, Science, Computers",
        "Economics & Accounting",
        "Grade A/A* focused coaching",
        "Past papers & mark schemes"
      ]
    },
    {
      title: "IB Diploma Programme",
      subtitle: "Classes 6-12 (MYP & DP)",
      description: "Comprehensive IB coaching for Maths, Science, Computers, Social Studies, Economics & Accounting.",
      icon: Award,
      gradient: "from-teal-600 to-cyan-600",
      features: [
        "MYP & DP curriculum",
        "Maths, Science, Computers",
        "Economics & Accounting",
        "IA & EE guidance included",
        "Score 7 strategies"
      ]
    },
    {
      title: "AP Exams Preparation",
      subtitle: "Advanced Placement",
      description: "Score 5 in AP exams with targeted coaching for AP Calculus, Physics, Chemistry, and Biology.",
      icon: TrendingUp,
      gradient: "from-rose-600 to-pink-600",
      features: [
        "AP Calculus AB/BC coverage",
        "AP Physics 1/2/C focused",
        "AP Chemistry & Biology",
        "Score 5 exam strategies",
        "College credit preparation"
      ]
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "AIR 400", label: "Founder's JEE Rank" },
    { number: "12", label: "Max Batch Size" },
    { number: "IIT", label: "Alumni Mentors" }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "IIT JEE",
      text: "I would like to thank Dilip Sir because of which i secured a very good rank in JEE Advanced (AIR 247) !",
      rating: 5
    },
    {
      name: "Priya Patel",
      course: "NEET",
      text: "Excellent study material and personalized attention helped me crack NEET with flying colors.",
      rating: 5
    },
    {
      name: "Arjun Singh",
      course: "Foundation",
      text: "Building my foundation here gave me the confidence to aim for top engineering colleges.",
      rating: 5
    }
  ];

  const results = {
    "10thBoard": {
      title: "10th Board Results",
      students: [
        { name: "Reyansh", score: "98%", board: "CBSE" },
        { name: "Neel", score: "96%", board: "CBSE" },
        { name: "Ram", score: "97%", board: "CBSE" }
      ]
    },
    "12thBoard": {
      title: "12th Board Results",
      students: [
        { name: "Pavan", score: "97%", board: "CBSE" },
        { name: "Akshita", score: "99%", board: "CBSE" },
        { name: "Kavya", score: "96%", board: "CBSE" }
      ]
    },
    "jee": {
      title: "JEE Main Results",
      students: [
        { name: "Vedant", score: "AIR 187", board: "JEE Main" },
        { name: "Isha", score: "AIR 542", board: "JEE Main" },
        { name: "Arjun", score: "AIR 1024", board: "JEE Main" }
      ]
    },
    "neet": {
      title: "NEET Results",
      students: [
        { name: "Sakshi", score: "AIR 312", board: "NEET" },
        { name: "Rohan", score: "AIR 2847", board: "NEET" },
        { name: "Divya", score: "AIR 1156", board: "NEET" }
      ]
    }
  };

  const faculty = [
    {
      name: "Dilip Sir",
      subject: "Mathematics",
      qualification: "IIT Kanpur | JEE AIR 400",
      expertise: "25+ Years, Expert Problem Solver",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      name: "Sourav Sir",
      subject: "Physics",
      qualification: "IIT Bombay",
      expertise: "Physics Wizard, Conceptual Clarity",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      name: "Deepti Madam",
      subject: "Chemistry",
      qualification: "IIT Delhi",
      expertise: "Organic & Inorganic Expert",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      name: "Dr. Aditi",
      subject: "Biology",
      qualification: "AIIMS | MD (Medicine)",
      expertise: "Medical Expert, NEET Specialist",
      color: "from-rose-600 to-red-600",
      bgColor: "from-rose-50 to-red-50"
    }
  ];

  // Scroll to top handler
  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // CTA Modal state
  const [showCtaModal, setShowCtaModal] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    class: '',
    query: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello, I have a query!\n\nName: ${formData.name}\nPhone: ${formData.number}\nClass: ${formData.class}\n\nQuery: ${formData.query}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919850570525?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      name: '',
      number: '',
      class: '',
      query: ''
    });
    setShowCtaModal(false);
  };

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/919850570525', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BuzzyBrains Academy
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/foundation" className="text-gray-700 hover:text-blue-600 transition">Foundation Courses</a>
              <a href="/12th-board" className="text-gray-700 hover:text-blue-600 transition">Indian Boards</a>
              <a href="/international-boards" className="text-gray-700 hover:text-blue-600 transition">International Boards</a>
              <a href="/one-on-one" className="text-gray-700 hover:text-blue-600 transition">1-1 Class</a>
              <a href="/admissions" className="text-gray-700 hover:text-blue-600 transition">Admission Enquiry</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-500 transition" title="Chat on WhatsApp">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span className="hidden md:inline">9850570525</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Coaching for</span> <br></br>IIT &
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Medical</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Founded by <span className="font-bold text-gray-900">Dilip Sir</span> (IIT Kanpur | JEE AIR 400 | 25 years exp.)
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Premium coaching for Foundation, JEE Main, MHT-CET & NEET. <br></br>
              Learn from IITians who mentor you personally in ultra-small batches!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowCtaModal(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Start Your Journey</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setShowCtaModal(true)}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Courses</h2>
            <p className="text-xl text-gray-600">Expertly designed programs for every aspiring student</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`bg-gradient-to-r ${course.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <Icon className="w-12 h-12 mb-4 relative z-10" />
                    <h3 className="text-2xl font-bold mb-1 relative z-10">{course.title}</h3>
                    <p className="text-white/90 text-sm relative z-10">{course.subtitle}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <ul className="space-y-3 mb-6">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group/bullet">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 group-hover/bullet:from-blue-200 group-hover/bullet:to-blue-400 shadow-sm mr-3">
                            <Star className="w-4 h-4 text-blue-600" />
                          </span>
                          <span className="text-gray-800 font-medium tracking-tight text-base whitespace-nowrap overflow-hidden text-ellipsis" style={{letterSpacing: '0.01em'}}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={index === 0 ? "/foundation" : index === 3 ? "/10th-board" : index === 4 ? "/12th-board" : "#"} className="block w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold shadow-lg hover:shadow-xl text-center">
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=700&fit=crop" 
                alt="Dilip Sir teaching" 
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Meet Our Founder
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Dilip Sir</h2>
              <p className="text-xl text-gray-700 mb-6">
                <span className="font-bold text-blue-600">IIT Kanpur</span> | JEE AIR 400 | 25 Years Experience
              </p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>An IIT/IIM Alumni Initiative - Excellence Redefined</span>
                </p>
                <p className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Former faculty at Career Point, bringing elite coaching experience</span>
                </p>
                <p className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Personal mentorship from champions including AIR-400 ranked experts</span>
                </p>
                <p className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Ultra-small batches ensuring every student gets individual attention</span>
                </p>
              </div>
              <div className="mt-8">
                <a href="tel:+919850570525" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition text-lg font-semibold">
                  <Phone className="w-5 h-5" />
                  <span>Call: 98505 70525</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BuzzyBrains Academy?</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Ultra-Small Batches", desc: "Maximum 12 students per batch for personalized attention" },
              { icon: BookOpen, title: "IITian Mentors", desc: "Learn from champions like AIR-400 Dilip Sir" },
              { icon: Award, title: "Concept Mastery", desc: "Strong foundation with doubt resolution sessions" },
              { icon: TrendingUp, title: "Vedic Maths", desc: "Lightning-fast calculation skills advantage" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Outstanding Results</h2>
            <p className="text-xl text-gray-600">Excellence in Every Board, Every Exam</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* 10th Board */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <h3 className="text-2xl font-bold">{results["10thBoard"].title}</h3>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {results["10thBoard"].students.map((student, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-600">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.board}</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-bold text-center">
                        {student.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 12th Board */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <h3 className="text-2xl font-bold">{results["12thBoard"].title}</h3>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {results["12thBoard"].students.map((student, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-600">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.board}</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-center">
                        {student.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* JEE Results */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-white">
                <h3 className="text-2xl font-bold">{results.jee.title}</h3>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {results.jee.students.map((student, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.board}</p>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg font-bold text-center">
                        {student.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NEET Results */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-pink-600 to-red-600 p-6 text-white">
                <h3 className="text-2xl font-bold">{results.neet.title}</h3>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {results.neet.students.map((student, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg border-l-4 border-pink-600">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.board}</p>
                      </div>
                      <div className="bg-gradient-to-br from-pink-600 to-red-600 text-white px-4 py-2 rounded-lg font-bold text-center">
                        {student.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Elite Faculty</h2>
            <p className="text-xl text-gray-600">IITians & Medical Experts Dedicated to Your Success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${member.color} p-8 text-white relative overflow-hidden h-40 flex flex-col justify-between`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg font-semibold text-white/90">{member.subject}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`p-6 bg-gradient-to-br ${member.bgColor}`}>
                  <div className="mb-4 pb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold text-gray-600">Qualifications</p>
                    <p className="text-gray-900 font-bold mt-1">{member.qualification}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Expertise</p>
                    <p className="text-gray-900 font-bold mt-1 text-sm leading-relaxed">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our achievers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
               
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Success Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join BuzzyBrains Academy today and transform your academic dreams into reality
          </p>
          <button 
            onClick={() => setShowCtaModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Book Free Counselling
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-lg text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+919850570525" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                      +91 98505 70525
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-lg text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                    <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold text-lg">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded-lg text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@buzzybrainsacademy.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                      info@buzzybrainsacademy.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-pink-600 to-red-600 p-4 rounded-lg text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700 font-semibold">
                      Amanora Park Town<br />
                      Hadapsar, Pune-411028<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="number" className="block text-gray-700 font-semibold mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Class */}
                <div>
                  <label htmlFor="class" className="block text-gray-700 font-semibold mb-2">
                    Class <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition bg-white"
                  >
                    <option value="">Select your class</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>

                {/* Query */}
                <div>
                  <label htmlFor="query" className="block text-gray-700 font-semibold mb-2">
                    Your Query <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                    placeholder="Tell us about your query or interest..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-xl transition font-bold text-lg flex items-center justify-center space-x-2"
                >
                  <span>Send via WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Connect With Us! 👋</h2>
              <p className="text-gray-600">Choose how you'd like to reach out to BuzzyBrains Academy</p>
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

    {/* Floating WhatsApp Chat Button */}
    <a
      href="https://wa.me/919850570525"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all group"
      title="Chat on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/>
      </svg>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  </div>
  );
}