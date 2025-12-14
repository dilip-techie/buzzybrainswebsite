import React from 'react';
import { GraduationCap, Award, Users, BookOpen, TrendingUp, Star, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CoachingHomepage() {
  const courses = [
    {
      title: "Foundation Program",
      subtitle: "Classes 6-10",
      description: "Build a rock-solid foundation in Maths, Science, Chemistry & Biology with IITian mentors",
      icon: BookOpen,
      gradient: "from-blue-600 to-cyan-600",
      features: ["Ultra-small batches (max 10)", "Personal attention guaranteed", "Concept mastery focus"]
    },
    {
      title: "Excellence Track",
      subtitle: "Classes 11-12",
      description: "Advanced preparation for JEE Main, MHT-CET with strategic problem-solving techniques",
      icon: TrendingUp,
      gradient: "from-purple-600 to-pink-600",
      features: ["IITian mentorship", "Concept clarity sessions", "Regular mock tests"]
    },
    {
      title: "NEET Preparation",
      subtitle: "Medical Entrance",
      description: "Intensive coaching for NEET with focus on Biology, Physics, Chemistry and quick calculations",
      icon: Award,
      gradient: "from-green-600 to-emerald-600",
      features: ["Vedic maths advantage", "Doubt resolution sessions", "Year-round strategy guidance"]
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "AIR 400", label: "Founder's JEE Rank" },
    { number: "10", label: "Max Batch Size" },
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
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-500 transition" title="Chat on WhatsApp">
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-4.985-1.357l-.361-.214-3.708.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.876 11.876 0 005.735 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.82 11.82 0 00-3.484-8.463z"/></svg>
                <span className="hidden md:inline">9850570525</span>
              </a>
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
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
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
              { icon: Users, title: "Ultra-Small Batches", desc: "Maximum 10 students per batch for personalized attention" },
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
              <li><a href="#" className="hover:text-white transition">Foundation (6-10)</a></li>
              <li><a href="#" className="hover:text-white transition">Excellence Track (11-12)</a></li>
              <li><a href="#" className="hover:text-white transition">JEE Main & MHT-CET</a></li>
              <li><a href="#" className="hover:text-white transition">NEET Coaching</a></li>
              <li><a href="#" className="hover:text-white transition">Board Crash Courses</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9850570525</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@buzzybrainsacademy.com</span>
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