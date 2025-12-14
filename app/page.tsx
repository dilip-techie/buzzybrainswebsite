import React from 'react';
import { GraduationCap, Award, Users, BookOpen, TrendingUp, Star, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CoachingHomepage() {
  const courses = [
    {
      title: "Foundation Course",
      description: "Building strong fundamentals for classes 8th-10th",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "IIT JEE Preparation",
      description: "Comprehensive training for JEE Main & Advanced",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "NEET Coaching",
      description: "Expert guidance for medical entrance success",
      icon: Award,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "500+", label: "IIT Selections" },
    { number: "800+", label: "NEET Qualifiers" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Faculty" }
  ];

  const testimonials = [
    {
      name: "Aryan Singh",
      course: "IIT JEE",
      text: "The faculty here transformed my approach to problem-solving. Secured AIR 400!",
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
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition">Courses</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition">Results</a>
              <a href="#faculty" className="text-gray-700 hover:text-blue-600 transition">Faculty</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Dreams Into
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premier coaching institute for IIT JEE, NEET, and Foundation courses. 
              Join thousands of successful students who achieved their goals with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold">
                <span>Start Your Journey</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold">
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
                  <div className={`bg-gradient-to-r ${course.gradient} p-8 text-white`}>
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Expert faculty with proven track record</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Comprehensive study material</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Regular tests and assessments</span>
                      </li>
                    </ul>
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
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
              { icon: Users, title: "Small Batch Size", desc: "Personalized attention to every student" },
              { icon: BookOpen, title: "Quality Material", desc: "Curated content by top educators" },
              { icon: Award, title: "Proven Results", desc: "Consistent top ranks every year" },
              { icon: TrendingUp, title: "Growth Tracking", desc: "Regular performance analysis" }
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

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our achievers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
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
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold">
            Book Free Counselling
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
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Courses</a></li>
              <li><a href="#" className="hover:text-white transition">Results</a></li>
              <li><a href="#" className="hover:text-white transition">Admissions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Foundation</a></li>
              <li><a href="#" className="hover:text-white transition">IIT JEE</a></li>
              <li><a href="#" className="hover:text-white transition">NEET</a></li>
              <li><a href="#" className="hover:text-white transition">Online Classes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@eliteacademy.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Amanora Park Town, Pune - 411028</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 BuzzyBrains Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}