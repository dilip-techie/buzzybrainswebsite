'use client';

import '@/app/tailwind.css';
import { useState } from 'react';
import {
  BookOpen,
  Scale,
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
  ClipboardList,
  Newspaper,
  Calculator,
} from 'lucide-react';
import CtaModal from '@/components/CtaModal';

const HIGHLIGHTS = [
  { value: '5', label: 'Exam Sections', icon: Scale, gradient: 'linear-gradient(135deg,#9A3412,#EA580C)' },
  { value: '120', label: 'Total Questions', icon: ClipboardList, gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { value: '25+', label: 'Years Mentoring Experience', icon: Award, gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
];

const SECTIONS = [
  {
    title: 'English Language',
    subtitle: 'Passage-based · reading comprehension',
    icon: BookOpen,
    gradient: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'var(--blue-050)',
    topics: ['Comprehension of 450-word passages', 'Meaning, inference & tone in context', 'Summary and main-idea identification', 'Grammar and vocabulary in context'],
  },
  {
    title: 'Current Affairs incl. GK',
    subtitle: 'Passage-based · news & static GK',
    icon: Newspaper,
    gradient: 'linear-gradient(90deg,#0369A1,#0EA5E9)',
    pcbg: 'rgba(14,165,233,.12)',
    topics: ['Contemporary events (last 12 months)', 'Legal and constitutional developments', 'Arts, culture, international affairs', 'Static GK woven into passage context'],
  },
  {
    title: 'Legal Reasoning',
    subtitle: 'Passage-based · principle & fact application',
    icon: Scale,
    gradient: 'linear-gradient(90deg,#9A3412,#EA580C)',
    pcbg: 'rgba(234,88,12,.12)',
    topics: ['Legal principles applied to fact situations', 'Contracts, torts, criminal & constitutional law basics', 'Public policy and current legal developments', 'No prior legal knowledge assumed'],
  },
  {
    title: 'Logical Reasoning',
    subtitle: 'Passage-based · argument analysis',
    icon: Brain,
    gradient: 'linear-gradient(90deg,#6D28D9,#A855F7)',
    pcbg: 'rgba(124,58,237,.12)',
    topics: ['Argument structure, premise & conclusion', 'Critical reasoning & assumption analysis', 'Logical sequencing and inference', 'Strengthen / weaken style questions'],
  },
  {
    title: 'Quantitative Techniques',
    subtitle: 'Passage-based · data interpretation',
    icon: Calculator,
    gradient: 'linear-gradient(90deg,#065F46,#10B981)',
    pcbg: 'rgba(16,185,129,.12)',
    topics: ['Data sets, graphs & short passages with numbers', 'Ratios, percentages, averages, basic algebra', 'Class 10-level quantitative ability', 'Speed and accuracy under time pressure'],
  },
];

const RANK_BANDS = [
  { band: 'Top 100', label: 'Elite NLU Range', gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { band: 'Top 500', label: 'Strong NLU Range', gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { band: 'Top 2500', label: 'Good NLU Range', gradient: 'linear-gradient(135deg,#92400E,#F59E0B)' },
  { band: 'Top 5000', label: 'Competitive Range', gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
];

const METHODOLOGY = [
  { icon: Target, title: 'Diagnostic', desc: 'A full-length diagnostic maps your reading speed, reasoning accuracy and current-affairs baseline.' },
  { icon: Layers, title: 'Foundation', desc: 'Build core reading comprehension, logical/legal reasoning fundamentals and a structured current-affairs habit.' },
  { icon: Brain, title: 'Passage-First Practice', desc: 'Timed, passage-based drills across all five sections, matching the exact current CLAT format.' },
  { icon: Repeat, title: 'Full-Length Mocks', desc: 'Realistic, timed 2-hour mock CLATs every week, scored and analyzed section by section.' },
  { icon: TrendingUp, title: 'Rank Optimization', desc: 'Detailed error analysis and section-wise pacing strategy to convert practice into your target rank.' },
];

const WHY_CHOOSE = [
  { title: 'Passage-Format Native', desc: 'Every drill mirrors the current, fully passage-based CLAT format — no outdated question-bank material.', gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', icon: Clock },
  { title: 'Reasoning-First Mentors', desc: 'Mentors from IIT/IIM backgrounds bring the structured logical and analytical thinking CLAT rewards.', gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every student gets individual, section-wise feedback — not generic advice.', gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', icon: Users },
  { title: 'Data-Driven Prep', desc: 'Every mock is broken down by section and question type so we always know exactly what to fix next.', gradient: 'linear-gradient(135deg,#065F46,#10B981)', icon: BarChart3 },
  { title: 'Current Affairs System', desc: 'A structured, weekly current-affairs routine instead of last-minute cramming before test day.', gradient: 'linear-gradient(135deg,#0EA5E9,#0284C7)', icon: Newspaper },
  { title: 'Application-Ready Timeline', desc: 'A prep calendar built backward from CLAT exam day and NLU counselling deadlines.', gradient: 'linear-gradient(135deg,#EF4444,#DC2626)', icon: Target },
];

export default function ClatExamPage() {
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
          <span className="eyebrow">⚖️ CLAT Coaching · National Law Entrance Exam · Grades 11–12</span>
          <h1>Crack the <span className="grad">CLAT.</span></h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 700 }}>
            Structured, passage-first preparation for the <strong style={{ color: 'var(--blue)' }}>Common Law Admission Test</strong> —
            built around the exact current CLAT format, for admission to India&apos;s National Law Universities.
          </p>
          <p className="section-sub" style={{ margin: '0 auto 28px' }}>
            English, Current Affairs, Legal Reasoning, Logical Reasoning and Quantitative Techniques — mentored in small, focused batches.
          </p>

          <div className="hero-chips" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> English Language</span>
            <span className="chip"><i className="dot" style={{ background: '#EA580C' }} /> Legal Reasoning</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Logical Reasoning</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Quant Techniques</span>
          </div>

          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
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
            <h2 className="section-title reveal">CLAT, section by section</h2>
            <p className="section-sub reveal">Five sections, 120 questions, 2 hours — every question is passage-based under the current CLAT pattern.</p>
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

      {/* ============ RANK BANDS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Rank Goals</span>
            <h2 className="section-title reveal">Know exactly what you&apos;re aiming for</h2>
            <p className="section-sub reveal">Broad, commonly referenced All-India Rank (AIR) bands and the NLU tier they typically open up — we set a target range from day one.</p>
          </div>
          <div className="prog-grid" style={{ marginTop: 40 }}>
            {RANK_BANDS.map((b) => (
              <div className="stat-card reveal" key={b.band}>
                <div className="stat-card-icon" style={{ background: b.gradient }}>
                  <Scale size={22} color="#fff" />
                </div>
                <div>
                  <b style={{ fontSize: 'clamp(22px,3vw,28px)' }}>{b.band}</b>
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
            <h2 className="section-title reveal">Five steps to your target rank</h2>
            <p className="section-sub reveal">A systematic, data-backed path from diagnostic to test day.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.title}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#EA580C,#9A3412)' }}>
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
          <h2 style={{ marginBottom: 14 }}>Ready to target a top NLU rank?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free diagnostic session and get a personalized rank-improvement plan.
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
        title="Ready to Enroll? ⚖️"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
