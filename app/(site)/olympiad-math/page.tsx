'use client';

import { useEffect, useState } from 'react';
import {
  Sigma,
  Hash,
  Shapes,
  Network,
  ChevronRight,
  Phone,
  Award,
  Users,
  TrendingUp,
  Target,
} from 'lucide-react';

const SUBJECTS = [
  { title: 'Advanced Algebra', subtitle: 'Deep concept mastery', topics: ['Functional equations', 'Polynomials', 'Inequalities'], gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', icon: Sigma },
  { title: 'Number Theory', subtitle: 'Structure & pattern recognition', topics: ['Divisibility', 'Modular arithmetic', 'Diophantine equations'], gradient: 'linear-gradient(135deg,#065F46,#10B981)', icon: Hash },
  { title: 'Geometry', subtitle: 'Rigorous spatial reasoning', topics: ['Euclidean geometry', 'Angle chasing', 'Transformations'], gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', icon: Shapes },
  { title: 'Combinatorics', subtitle: 'Logical counting techniques', topics: ['Counting techniques', 'Pigeonhole principle', 'Graph thinking'], gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', icon: Network },
];

const COMPETITION_REGIONS = [
  { title: 'India', gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', competitions: ['IOQM', 'PRMO', 'RMO', 'INMO', 'SOF IMO'] },
  { title: 'International', gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', competitions: ['AMC 8', 'AMC 10', 'AMC 12', 'AIME', 'USAJMO', 'IMO'] },
  { title: 'UK', gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', competitions: ['JMC', 'IMC', 'SMC', 'BMO'] },
  { title: 'Global', gradient: 'linear-gradient(135deg,#065F46,#10B981)', competitions: ['IMO', 'Kangaroo Math', 'Math League', 'Purple Comet'] },
];

const HIGHLIGHTS = [
  { value: '150+', label: 'Students Mentored', icon: Users, gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { value: '35+', label: 'Olympiad Qualifiers', icon: Award, gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { value: '25+', label: 'Years Experience', icon: TrendingUp, gradient: 'linear-gradient(135deg,#92400E,#F59E0B)' },
  { value: '100%', label: 'Concept-First Teaching', icon: Target, gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
];

const METHODOLOGY = [
  { step: '01', title: 'Concept Foundations', description: 'Build crystal-clear understanding of fundamental principles and theorems.' },
  { step: '02', title: 'Structured Problem Solving', description: 'Master diverse problem types with systematic approaches.' },
  { step: '03', title: 'Olympiad Techniques', description: 'Learn advanced strategies for competition-level challenges.' },
  { step: '04', title: 'Mock Tests & Analysis', description: 'Regular assessments with detailed error analysis and feedback.' },
  { step: '05', title: 'Competition Readiness', description: 'Final preparation and confidence building for actual contests.' },
];

const TESTIMONIALS = [
  { name: 'Arjun Sharma', course: 'INMO Qualifier', text: 'The program transformed my understanding of mathematics. It’s not about memorizing formulas; it’s about thinking mathematically.', avatar: 'AS', gradient: 'linear-gradient(135deg,#2563EB,#7C3AED)' },
  { name: 'Vikram Patel', course: 'AMC 12 Qualifier', text: 'The mentorship from an IITian and the structured curriculum make all the difference in my learning journey.', avatar: 'VP', gradient: 'linear-gradient(135deg,#10B981,#0D9488)' },
  { name: 'Priya Verma', course: 'Parent', text: 'Within 6 months, my daughter’s confidence and problem-solving ability improved dramatically. Highly recommend!', avatar: 'PV', gradient: 'linear-gradient(135deg,#F59E0B,#EA580C)' },
];

export default function OlympiadMathPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/919850570525', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    window.location.href = '/#contact';
  };

  return (
    <main className="bb-landing bb-page-shell">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container center">
          <span className="eyebrow reveal">∑ Maths Excellence Program · Grades 4–12</span>
          <h1 className="reveal" data-delay="1">Build Mathematical <span className="grad">Excellence.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            Elite mathematics program for students who think differently. Founded by{' '}
            <strong style={{ color: 'var(--blue)' }}>Dilip Sah (IIT Kanpur, IIM Ahmedabad, JEE AIR 400)</strong>.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            Master deep reasoning, problem-solving and competition mathematics — from IOQM to IMO.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> IOQM · PRMO · RMO · INMO</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> AMC 8/10/12 · AIME · IMO</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> SOF IMO · Kangaroo Math</span>
          </div>

          <div className="hero-ctas reveal" data-delay="4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
              Schedule a Demo
              <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost">
              <Phone size={17} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ============ KEY HIGHLIGHTS ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stat-cards">
            {HIGHLIGHTS.map((h, i) => (
              <div className="stat-card reveal" data-delay={String(i % 2)} key={h.label}>
                <div className="stat-card-icon" style={{ background: h.gradient }}>
                  <h.icon size={22} color="#fff" />
                </div>
                <div>
                  <b>{h.value}</b>
                  <span>{h.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Philosophy</span>
            <h2 className="section-title reveal">Thinking over memorizing</h2>
            <p className="section-sub reveal">Mathematics isn&apos;t a collection of formulas. It&apos;s a way of thinking, reasoning, and solving problems with elegance and precision.</p>
          </div>
          <div className="trust-grid">
            {[
              { title: 'Thinking Over Memorization', desc: 'Deep conceptual understanding and mathematical reasoning are prioritized over rote learning.', gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', icon: Target },
              { title: 'Proof & Reasoning', desc: 'Students construct rigorous proofs and develop the logical reasoning skills required for advanced mathematics.', gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', icon: Award },
              { title: 'Gradual Progression', desc: 'A carefully structured curriculum that builds from fundamental concepts to olympiad-level problem solving.', gradient: 'linear-gradient(135deg,#065F46,#10B981)', icon: TrendingUp },
            ].map((item) => (
              <div className="trust-card reveal" key={item.title}>
                <div className="trust-icon" style={{ background: item.gradient }}><item.icon size={24} color="#fff" /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CORE SUBJECTS ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Curriculum</span>
            <h2 className="section-title reveal">Four Pillars of Excellence</h2>
            <p className="section-sub reveal">Master the mathematical disciplines that define olympiad success.</p>
          </div>
          <div className="prog-grid-2">
            {SUBJECTS.map((s, i) => (
              <article className="prog-card reveal" data-delay={String(i)} style={{ ['--pc' as string]: s.gradient, ['--pcbg' as string]: 'var(--blue-050)', ['--pc-glow' as string]: '37,99,235' }} key={s.title}>
                <div className="prog-icon"><s.icon size={27} color="#fff" /></div>
                <h3>{s.title}</h3>
                <p>{s.subtitle}</p>
                <ul>
                  {s.topics.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPETITIONS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Competitions</span>
            <h2 className="section-title reveal">Prepare for the biggest competitions</h2>
            <p className="section-sub reveal">Comprehensive training for national and international mathematics competitions.</p>
          </div>
          <div style={{ display: 'grid', gap: 32, marginTop: 48 }}>
            {COMPETITION_REGIONS.map((region) => (
              <div className="reveal" key={region.title}>
                <h3 style={{ fontSize: 20, marginBottom: 16, background: region.gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{region.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {region.competitions.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: 13.5, fontWeight: 700, fontFamily: 'var(--font-display)',
                        padding: '9px 16px', borderRadius: 12, background: 'var(--card)',
                        border: '1px solid var(--line)', color: 'var(--text)', boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MENTOR PROFILE ============ */}
      <section className="testis bb-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="center">
            <span className="eyebrow reveal">Meet the Mentor</span>
            <h2 className="section-title reveal" style={{ color: '#fff' }}>Learn From an IITian Expert</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }} className="reveal">
            <div className="tcard" style={{ maxWidth: 420, textAlign: 'center', gap: 14 }}>
              <div className="tavatar" style={{ margin: '0 auto', width: 84, height: 84, fontSize: 30, background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>DS</div>
              <b style={{ color: '#fff', fontSize: 22, fontFamily: 'var(--font-display)' }}>Dilip Sah</b>
              <p className="quote" style={{ flex: 'none' }}>IIT Kanpur &middot; IIM Ahmedabad &middot; JEE AIR 400</p>
              <p className="quote" style={{ flex: 'none', fontSize: 14 }}>Mathematics Educator &middot; Olympiad Coach &middot; 25+ Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="method bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Methodology</span>
            <h2 className="section-title reveal">Our 5-Step Mastery Path</h2>
            <p className="section-sub reveal">A systematic approach to mathematical excellence.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((item) => (
              <div className="step reveal" key={item.step}>
                <span className="num">{item.step}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}>{item.step}</span>
                </div>
                <h3 style={{ fontSize: 17 }}>{item.title}</h3>
                <p style={{ fontSize: 13.5 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Success Stories</span>
            <h2 className="section-title reveal">What Students &amp; Parents Say</h2>
          </div>
          <div className="trust-grid">
            {TESTIMONIALS.map((t) => (
              <article className="trust-card reveal" key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="tavatar" style={{ background: t.gradient }}>{t.avatar}</span>
                  <div>
                    <b style={{ display: 'block', fontFamily: 'var(--font-display)' }}>{t.name}</b>
                    <small style={{ color: 'var(--text-3)' }}>{t.course}</small>
                  </div>
                </div>
                <p style={{ fontSize: 14.5, color: 'var(--text-2)' }}>&quot;{t.text}&quot;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Next Batch in 2 Weeks</span>
          <h2 style={{ marginBottom: 14 }}>Your Olympiad Journey Starts Here</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Join elite students mastering advanced mathematics with an IITian mentor.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center' }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Schedule a Demo Class <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              <Phone size={17} /> Talk to a Mentor
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA MODAL ============ */}
      {showCtaModal && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(15,23,42,.6)', zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
          }}
          onClick={() => setShowCtaModal(false)}
        >
          <div
            style={{
              background: 'var(--card)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)',
              maxWidth: 420, width: '100%', padding: 32,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="center" style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Ready to Enroll? ∑</h2>
              <p style={{ color: 'var(--text-2)' }}>Choose how you&apos;d like to connect with us</p>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              <button onClick={handleCtaModalForm} className="btn btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>📝 Contact Form</span>
                <ChevronRight size={19} />
              </button>
              <button onClick={handleCtaModalWhatsApp} className="btn btn-green" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>💬 WhatsApp Chat</span>
                <ChevronRight size={19} />
              </button>
            </div>

            <button
              onClick={() => setShowCtaModal(false)}
              style={{ width: '100%', marginTop: 20, color: 'var(--text-3)', fontWeight: 600, padding: '8px 0', background: 'none', border: 'none' }}
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
