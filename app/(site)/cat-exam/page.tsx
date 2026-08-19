'use client';

import { useEffect, useState } from 'react';
import {
  BookOpen,
  BarChart3,
  Calculator,
  Target,
  TrendingUp,
  Award,
  Users,
  ChevronRight,
  Phone,
  Clock,
  Brain,
  Layers,
  Repeat,
  MessageSquare,
  FileEdit,
  Users2,
} from 'lucide-react';
import CtaModal from '@/components/CtaModal';

const HIGHLIGHTS = [
  { value: '3', label: 'Exam Sections', icon: Target, gradient: 'linear-gradient(135deg,#86198F,#C026D3)' },
  { value: '20+', label: 'IIMs Accept CAT Scores', icon: Award, gradient: 'var(--grad-purple)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'var(--grad-blue)' },
  { value: '25+', label: 'Years Mentoring Experience', icon: Award, gradient: 'var(--grad-green)' },
];

const SECTIONS = [
  {
    title: 'VARC',
    subtitle: 'Verbal Ability & Reading Comprehension',
    icon: BookOpen,
    gradient: 'linear-gradient(90deg,#86198F,#C026D3)',
    pcbg: 'rgba(192,38,211,.12)',
    topics: [
      'Reading comprehension passages across varied subjects',
      'Para-jumbles, para-summary and odd-sentence-out',
      'Reading speed and inference under sectional time pressure',
      'Mix of MCQ and Type-In-The-Answer (TITA) questions',
    ],
  },
  {
    title: 'DILR',
    subtitle: 'Data Interpretation & Logical Reasoning',
    icon: BarChart3,
    gradient: 'linear-gradient(90deg,#9A3412,#EA580C)',
    pcbg: 'rgba(234,88,12,.12)',
    topics: [
      'Tables, graphs and chart-based data sets',
      'Arrangement, sequencing and conditional-logic puzzles',
      'Set-selection judgment — deciding what to attempt first',
      'Multiple linked questions per shared data set',
    ],
  },
  {
    title: 'Quantitative Ability',
    subtitle: 'Arithmetic to modern math, no calculator',
    icon: Calculator,
    gradient: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'var(--blue-050)',
    topics: [
      'Arithmetic, algebra, geometry and number systems',
      'Permutations, combinations and probability',
      'No calculator allowed — genuine calculation speed matters',
      'Mix of MCQ and Type-In-The-Answer (TITA) questions',
    ],
  },
];

const SELECTION_STAGES = [
  { title: 'CAT Percentile', subtitle: 'VARC + DILR + QA', icon: FileEdit, gradient: 'linear-gradient(135deg,#86198F,#C026D3)' },
  { title: 'WAT / Group Discussion', subtitle: 'Written or group round', icon: Users2, gradient: 'var(--grad-purple)' },
  { title: 'Personal Interview', subtitle: 'Final selection stage', icon: MessageSquare, gradient: 'var(--grad-blue)' },
];

const METHODOLOGY = [
  { icon: Target, title: 'Diagnostic', desc: 'A full-length, sectional-timed diagnostic maps your current VARC, DILR and QA baseline.' },
  { icon: Layers, title: 'Foundation', desc: 'Rebuild core quant fundamentals and reading stamina without calculator dependence.' },
  { icon: Brain, title: 'Section Mastery', desc: 'Deep, timed practice by section — including explicit DILR set-selection training.' },
  { icon: Repeat, title: 'Full-Length Mocks', desc: 'Realistic mocks under true sectional time limits every week, scored and analyzed.' },
  { icon: TrendingUp, title: 'Percentile Optimization', desc: 'Detailed error analysis and final sprint strategy to convert practice into your target percentile.' },
];

const WHY_CHOOSE = [
  { title: 'Sectional-Time Native', desc: 'Every mock enforces authentic per-section time limits, not just one overall timer, matching the real exam.', gradient: 'linear-gradient(135deg,#86198F,#C026D3)', icon: Clock },
  { title: 'IIT Kanpur & IIM Ahmedabad Mentorship', desc: 'Led by founder Dilip Sah, an IIT Kanpur and IIM Ahmedabad alumnus with 25+ years of mentoring experience.', gradient: 'var(--grad-purple)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every student gets individual, section-wise feedback — not generic advice.', gradient: 'var(--grad-amber)', icon: Users },
  { title: 'DILR Set-Selection Coaching', desc: 'Set-selection judgment is trained as its own distinct skill, not left to develop by accident.', gradient: 'var(--grad-green)', icon: BarChart3 },
  { title: 'WAT-GD-PI Ready', desc: 'Preparation extends beyond the written percentile to the WAT/GD and Personal Interview rounds that follow it.', gradient: 'var(--grad-sky)', icon: MessageSquare },
  { title: 'Data-Driven Prep', desc: 'Every mock is broken down by section and question type so we always know exactly what to fix next.', gradient: 'var(--grad-red)', icon: Brain },
];

export default function CatExamPage() {
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
          <span className="eyebrow reveal">📊 CAT Coaching · India&apos;s Top MBA Entrance Exam</span>
          <h1 className="reveal" data-delay="1">Crack the <span className="grad">CAT.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 700 }}>
            Structured, sectional-time-native preparation for the <strong style={{ color: 'var(--blue)' }}>Common Admission Test</strong> —
            the entrance to 2-year MBA/PGP programmes at the IIMs and other top B-schools.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            VARC, DILR and Quantitative Ability — mentored by an IIT Kanpur and IIM Ahmedabad alumnus.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: '#C026D3' }} /> VARC</span>
            <span className="chip"><i className="dot" style={{ background: '#EA580C' }} /> DILR</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> Quant</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> TITA Strategy</span>
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
            <h2 className="section-title reveal">CAT, section by section</h2>
            <p className="section-sub reveal">Three sections, each under its own sectional time limit — pacing is managed independently, section by section.</p>
          </div>
          <div className="prog-grid-3">
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
            <span className="eyebrow reveal">Beyond the Percentile</span>
            <h2 className="section-title reveal">The full selection process</h2>
            <p className="section-sub reveal">A strong percentile alone doesn&apos;t secure admission — WAT/GD and PI carry real weight too.</p>
          </div>
          <div className="prog-grid-3" style={{ marginTop: 40 }}>
            {SELECTION_STAGES.map((s) => (
              <div className="stat-card reveal" key={s.title}>
                <div className="stat-card-icon" style={{ background: s.gradient }}>
                  <s.icon size={22} color="#fff" />
                </div>
                <div>
                  <b style={{ fontSize: 'clamp(15px,2vw,18px)' }}>{s.title}</b>
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
            <h2 className="section-title reveal">Five steps to your target percentile</h2>
            <p className="section-sub reveal">A systematic, data-backed path from diagnostic to interview day.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.title}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#C026D3,#86198F)' }}>
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
          <h2 style={{ marginBottom: 14 }}>Ready to target a top percentile?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free diagnostic session and get a personalized CAT preparation plan.
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
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Ready to Enroll? 📊"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
