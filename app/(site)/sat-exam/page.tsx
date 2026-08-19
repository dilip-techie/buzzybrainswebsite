'use client';

import { useEffect, useState } from 'react';
import {
  BookOpen,
  Calculator,
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
  Trophy,
} from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import CtaModal from '@/components/CtaModal';

const FAQS = [
  {
    question: 'What score should my child target on the Digital SAT?',
    answer: '1450+ is a strong, competitive score for most selective US universities; 1550+ moves into elite/Ivy-ready territory. We set the specific target based on a full-length diagnostic and each student\'s target college list.',
  },
  {
    question: 'How is the Digital SAT different from the old paper SAT?',
    answer: 'The Digital SAT is shorter, adaptive (module 2 difficulty depends on module 1 performance), and computer-based via the Bluebook app. Pacing and strategy are genuinely different from paper-SAT material, which is why every mock and drill here mirrors the real adaptive format.',
  },
  {
    question: 'When should SAT preparation start?',
    answer: 'Most students get the best results starting focused prep about 6-9 months before their target test date, once core Grade 10-11 English and Maths fundamentals are solid.',
  },
  {
    question: 'How many mock tests are included?',
    answer: '10+ full-length, Bluebook-style adaptive mock tests under true timed conditions, each followed by section-wise error analysis so prep stays targeted rather than generic.',
  },
  {
    question: 'What is the batch size?',
    answer: 'Every batch is capped at a maximum of 12 students, so every student gets individual score analysis rather than generic advice.',
  },
];

const HIGHLIGHTS = [
  { value: '1600', label: 'Max SAT Score', icon: Trophy, gradient: 'var(--grad-blue)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'var(--grad-purple)' },
  { value: '10+', label: 'Full-Length Mock Tests', icon: BarChart3, gradient: 'var(--grad-amber)' },
  { value: '25+', label: 'Years Faculty Experience', icon: Award, gradient: 'var(--grad-green)' },
];

const SECTIONS = [
  {
    title: 'Reading & Writing',
    subtitle: '54 questions · 64 minutes · 2 adaptive modules',
    icon: BookOpen,
    gradient: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'var(--blue-050)',
    topics: ['Information & ideas (main idea, inference, evidence)', 'Craft & structure (vocabulary in context, purpose)', 'Expression of ideas (rhetorical synthesis)', 'Standard English conventions (grammar, punctuation)'],
  },
  {
    title: 'Math',
    subtitle: '44 questions · 70 minutes · 2 adaptive modules',
    icon: Calculator,
    gradient: 'linear-gradient(90deg,#6D28D9,#A855F7)',
    pcbg: 'rgba(124,58,237,.12)',
    topics: ['Algebra (linear equations, systems, inequalities)', 'Advanced Math (quadratics, functions, polynomials)', 'Problem-Solving & Data Analysis (ratios, statistics)', 'Geometry & Trigonometry (area, volume, right triangles)'],
  },
];

const SCORE_BANDS = [
  { band: '1200+', label: 'Competitive', gradient: 'var(--grad-blue)' },
  { band: '1350+', label: 'Strong', gradient: 'var(--grad-purple)' },
  { band: '1450+', label: 'Excellent', gradient: 'var(--grad-amber)' },
  { band: '1550+', label: 'Elite / Ivy-Ready', gradient: 'var(--grad-green)' },
];

const METHODOLOGY = [
  { icon: Target, title: 'Diagnostic', desc: 'A full-length adaptive diagnostic maps your real starting score and section-wise gaps.' },
  { icon: Layers, title: 'Foundation', desc: 'Rebuild the grammar, algebra and reading fundamentals the Digital SAT actually tests.' },
  { icon: Brain, title: 'Section Mastery', desc: 'Deep, timed practice by question type — from easy module-1 pacing to hard module-2 precision.' },
  { icon: Repeat, title: 'Full-Length Mocks', desc: 'Realistic Bluebook-style adaptive mock tests under true timed conditions, every week.' },
  { icon: TrendingUp, title: 'Score Optimization', desc: 'Detailed error analysis and final sprint strategy to convert practice into your target score.' },
];

const WHY_CHOOSE = [
  { title: 'Digital-Format Native', desc: 'Every mock and drill mirrors the real adaptive, module-based Bluebook format — no outdated paper-SAT material.', gradient: 'var(--grad-blue)', icon: Clock },
  { title: 'IIT/IIM Alumni Mentors', desc: 'Learn from mentors who have themselves cracked elite, high-stakes standardized tests.', gradient: 'var(--grad-purple)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every student gets individual score analysis, not generic advice.', gradient: 'var(--grad-amber)', icon: Users },
  { title: 'Data-Driven Prep', desc: 'Every mock is broken down by question type so we always know exactly what to fix next.', gradient: 'var(--grad-green)', icon: BarChart3 },
  { title: 'Adaptive Strategy Coaching', desc: 'We teach the pacing and accuracy thresholds that decide which module 2 you unlock.', gradient: 'var(--grad-sky)', icon: Brain },
  { title: 'College-Ready Timeline', desc: 'A prep calendar built backward from your target test date and application deadlines.', gradient: 'var(--grad-red)', icon: Target },
];

export default function SatExamPage() {
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
          <span className="eyebrow reveal">🎯 SAT Exam Prep · Digital SAT · Grades 10–12</span>
          <h1 className="reveal" data-delay="1">Master the <span className="grad">Digital SAT.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            Structured, data-driven preparation for the <strong style={{ color: 'var(--blue)' }}>adaptive Digital SAT</strong> —
            built around the real Bluebook format, not outdated paper tests.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            Reading &amp; Writing, Math, full-length adaptive mocks and score tracking — mentored by IIT/IIM alumni faculty.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> Reading &amp; Writing</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Math</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> Adaptive Digital Format</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Score 1400+</span>
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
            <h2 className="section-title reveal">The Digital SAT, section by section</h2>
            <p className="section-sub reveal">Two sections, each split into two adaptive modules — module 2&apos;s difficulty depends on your module 1 performance.</p>
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

      {/* ============ SCORE BANDS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Score Goals</span>
            <h2 className="section-title reveal">Know exactly what you&apos;re aiming for</h2>
            <p className="section-sub reveal">We set a target score band from day one and build the prep plan backward from it.</p>
          </div>
          <div className="prog-grid" style={{ marginTop: 40 }}>
            {SCORE_BANDS.map((b) => (
              <div className="stat-card reveal" key={b.band}>
                <div className="stat-card-icon" style={{ background: b.gradient }}>
                  <Trophy size={22} color="#fff" />
                </div>
                <div>
                  <b style={{ fontSize: 'clamp(28px,3vw,34px)' }}>{b.band}</b>
                  <span>{b.label}</span>
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
            <h2 className="section-title reveal">Five steps to your target score</h2>
            <p className="section-sub reveal">A systematic, data-backed path from diagnostic to test day.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.title}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>
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

      {/* ============ FAQ ============ */}
      <section className="bb-section" id="faq" aria-labelledby="faq-title">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="section-title reveal" id="faq-title">Frequently asked questions</h2>
          </div>
          <FaqJsonLd items={FAQS} />
          <div className="article-faq reveal" style={{ marginTop: 32 }}>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 12 per Batch</span>
          <h2 style={{ marginBottom: 14 }}>Ready to target 1400+?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free diagnostic session and get a personalized score-improvement plan.
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
        title="Ready to Enroll? 🎯"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
