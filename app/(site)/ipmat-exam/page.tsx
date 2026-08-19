'use client';

import { useState } from 'react';
import {
  Calculator,
  BookOpen,
  Target,
  TrendingUp,
  Award,
  Users,
  ChevronRight,
  Phone,
  Clock,
  BarChart3,
  Brain,
  Layers,
  Repeat,
  Building2,
  MessageSquare,
  FileEdit,
} from 'lucide-react';

const HIGHLIGHTS = [
  { value: '5-Yr', label: 'Integrated BBA + MBA', icon: Building2, gradient: 'linear-gradient(135deg,#9F1239,#E11D48)' },
  { value: '2', label: 'Written Test Sections', icon: Target, gradient: 'var(--grad-purple)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'var(--grad-blue)' },
  { value: '25+', label: 'Years Mentoring Experience', icon: Award, gradient: 'var(--grad-green)' },
];

const SECTIONS = [
  {
    title: 'Quantitative Ability',
    subtitle: 'MCQ & short-answer · Class 10–11 level',
    icon: Calculator,
    gradient: 'linear-gradient(90deg,#9F1239,#E11D48)',
    pcbg: 'rgba(225,29,72,.12)',
    topics: [
      'Arithmetic, algebra, geometry and number systems',
      'Short-answer (non-MCQ) questions — no elimination-based guessing',
      'Genuine calculation accuracy and speed under time pressure',
      'Exact pattern varies by IIM and year — always confirm from the official notification',
    ],
  },
  {
    title: 'Verbal Ability',
    subtitle: 'Reading comprehension & grammar',
    icon: BookOpen,
    gradient: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'var(--blue-050)',
    topics: [
      'Reading comprehension across varied subjects and styles',
      'Vocabulary and word usage in context',
      'Grammar and sentence-correction questions',
      'Built on consistent reading habits, not last-minute cramming',
    ],
  },
];

const SELECTION_STAGES = [
  { title: 'Written Test', subtitle: 'Quant + Verbal Ability', icon: FileEdit, gradient: 'linear-gradient(135deg,#9F1239,#E11D48)' },
  { title: 'Written Ability Test', subtitle: 'WAT on a given topic', icon: MessageSquare, gradient: 'var(--grad-purple)' },
  { title: 'Personal Interview', subtitle: 'Communication & awareness', icon: Users, gradient: 'var(--grad-blue)' },
];

const METHODOLOGY = [
  { icon: Target, title: 'Diagnostic', desc: 'A full-length diagnostic maps your current quantitative and verbal baseline against your target IIM.' },
  { icon: Layers, title: 'Foundation', desc: 'Build genuine quantitative fundamentals and a consistent reading habit — not just exam-format familiarity.' },
  { icon: Brain, title: 'Section Mastery', desc: 'Deep, timed practice by question type, matched to your specific target IIM\'s exact format.' },
  { icon: Repeat, title: 'Full-Length Mocks', desc: 'Realistic, timed mock tests every week, scored and analyzed section by section.' },
  { icon: TrendingUp, title: 'WAT-PI Preparation', desc: 'Dedicated communication and current-affairs practice for the stage that follows the written test.' },
];

const WHY_CHOOSE = [
  { title: 'IPMAT-Specific, Not Generic', desc: 'Every drill matches the exact IPMAT format — short-answer quant, reading-heavy verbal — not a repurposed CAT-style course.', gradient: 'linear-gradient(135deg,#9F1239,#E11D48)', icon: Clock },
  { title: 'IIT Kanpur & IIM Ahmedabad Mentorship', desc: 'Led by founder Dilip Sah, an IIT Kanpur and IIM Ahmedabad alumnus with 25+ years of mentoring experience.', gradient: 'var(--grad-purple)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every student gets individual, section-wise feedback — not generic advice.', gradient: 'var(--grad-amber)', icon: Users },
  { title: 'Target-IIM Focused', desc: 'Mocks are matched to your specific target IIM\'s actual pattern — IIM Indore and IIM Rohtak differ meaningfully.', gradient: 'var(--grad-green)', icon: BarChart3 },
  { title: 'WAT-PI Ready', desc: 'Preparation extends beyond the written test to the Written Ability Test and Personal Interview that follow it.', gradient: 'var(--grad-sky)', icon: MessageSquare },
  { title: 'Data-Driven Prep', desc: 'Every mock is broken down by section and question type so we always know exactly what to fix next.', gradient: 'var(--grad-red)', icon: Brain },
];

export default function IpmatExamPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

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
          <span className="eyebrow reveal">🏛️ IPMAT Coaching · 5-Year Integrated Programme in Management · Grade 12</span>
          <h1 className="reveal" data-delay="1">Crack <span className="grad">IPMAT.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 700 }}>
            Structured preparation for the <strong style={{ color: 'var(--blue)' }}>Integrated Program in Management Aptitude Test</strong> —
            the entrance to 5-year integrated BBA+MBA programmes at IIMs, right after Class 12.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            Quantitative Ability, Verbal Ability, and dedicated WAT-PI preparation — mentored by an IIT Kanpur and IIM Ahmedabad alumnus.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: '#E11D48' }} /> Quantitative Ability</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> Verbal Ability</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> WAT</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Personal Interview</span>
          </div>

          <div className="hero-ctas reveal" data-delay="4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
              Book Free Demo
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

      {/* ============ EXAM FORMAT ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Exam Format</span>
            <h2 className="section-title reveal">IPMAT, section by section</h2>
            <p className="section-sub reveal">Different IIMs run their own IPMAT with different formats — we prepare against your specific target IIM.</p>
          </div>
          <div className="prog-grid-2">
            {SECTIONS.map((s) => (
              <article className="prog-card reveal" style={{ ['--pc' as string]: s.gradient, ['--pcbg' as string]: s.pcbg }} key={s.title}>
                <div className="prog-icon"><s.icon size={27} color="#fff" /></div>
                <div className="grade">{s.subtitle}</div>
                <h3>{s.title}</h3>
                <ul>
                  {s.topics.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELECTION PROCESS ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Beyond the Written Test</span>
            <h2 className="section-title reveal">The full selection process</h2>
            <p className="section-sub reveal">A strong written score alone doesn&apos;t secure admission — WAT and PI carry real weight too.</p>
          </div>
          <div className="prog-grid-3" style={{ marginTop: 40 }}>
            {SELECTION_STAGES.map((s) => (
              <div className="stat-card reveal" key={s.title}>
                <div className="stat-card-icon" style={{ background: s.gradient }}>
                  <s.icon size={22} color="#fff" />
                </div>
                <div>
                  <b style={{ fontSize: 'clamp(16px,2vw,19px)' }}>{s.title}</b>
                  <span>{s.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="method bb-section" id="method">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Methodology</span>
            <h2 className="section-title reveal">Five steps to your target IIM</h2>
            <p className="section-sub reveal">A systematic, data-backed path from diagnostic to interview day.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.title}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#E11D48,#9F1239)' }}>
                  <step.icon size={30} color="#fff" />
                </div>
                <h3 style={{ fontSize: 17 }}>{step.title}</h3>
                <p style={{ fontSize: 13.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why BuzzyBrains Academy</span>
            <h2 className="section-title reveal">Built for the exam students actually take</h2>
          </div>
          <div className="trust-grid">
            {WHY_CHOOSE.map((w, i) => (
              <div className="trust-card reveal" data-delay={String((i % 3) + 1)} key={w.title}>
                <div className="trust-icon" style={{ background: w.gradient }}><w.icon size={24} color="#fff" /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 12 per Batch</span>
          <h2 style={{ marginBottom: 14 }}>Ready to target a top IIM&apos;s IPM?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free diagnostic session and get a personalized IPMAT preparation plan.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center' }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Book Your Free Demo <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              <Phone size={17} /> 98505 70525
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
              <h2 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Ready to Enroll? 🏛️</h2>
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
