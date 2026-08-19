'use client';

import '@/app/tailwind.css';
import { useState } from 'react';
import {
  Code2,
  BrainCircuit,
  Puzzle,
  ChevronRight,
  Phone,
  Blocks,
  Cpu,
  Trophy,
  Users,
} from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import CtaModal from '@/components/CtaModal';

const FAQS = [
  {
    question: 'Does my child need any coding experience to start?',
    answer: 'No — Grades 6-7 start with block-based coding and an intro to Python, building the coding mindset from scratch. Older students with no prior experience join the same track and catch up quickly since it\'s logic-first, not syntax-first.',
  },
  {
    question: 'What will my child actually build?',
    answer: 'Every module ends in a shipped project — an app, a game, a bot or a model — rather than isolated exercises. By Grades 11-12, projects are portfolio and college-application ready.',
  },
  {
    question: 'Does this track lead into coding olympiads?',
    answer: 'Yes — Grades 11-12 includes a dedicated Advanced + AI track covering DSA and competitive programming, with a clear path into ZIO, INOI and IOI for students who want to compete.',
  },
  {
    question: 'What is the batch size?',
    answer: 'Every batch is capped at a maximum of 12 students, so every student gets hands-on, one-on-one code review instead of generic instruction.',
  },
  {
    question: 'Who teaches Code Ninja?',
    answer: 'The program is led by an IIT Kanpur graduate who has built and taught real-world software and AI systems, not just academic coding exercises.',
  },
];

const PILLARS = [
  {
    title: 'Coding',
    icon: Code2,
    gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)',
    desc: 'Python, Java and Web Development — from first program to full projects, built the IIT way.',
  },
  {
    title: 'AI Foundations',
    icon: BrainCircuit,
    gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)',
    desc: 'How AI and machine learning actually work — hands-on with beginner-friendly AI tools and real projects.',
  },
  {
    title: 'Logic & Algorithms',
    icon: Puzzle,
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    desc: 'Computational thinking, data structures and algorithmic problem-solving for competitive programming.',
  },
];

const TRACKS = [
  {
    grade: 'Grades 6–7',
    title: 'Logic Foundations',
    focus: ['Block-based coding', 'Intro to Python', 'Computational thinking', 'Puzzle-based logic building'],
    highlight: 'Build the coding mindset early',
    pc: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'rgba(37,99,235,.12)',
  },
  {
    grade: 'Grades 8–10',
    title: 'Core Programming',
    focus: ['Python & Java mastery', 'Web development basics', 'Data structures', 'Real mini-projects'],
    highlight: 'Ship real, working projects',
    pc: 'linear-gradient(90deg,#6D28D9,#A855F7)',
    pcbg: 'rgba(124,58,237,.12)',
  },
  {
    grade: 'Grades 11–12',
    title: 'Advanced + AI',
    focus: ['Advanced algorithms & DSA', 'AI/ML foundations', 'Competitive programming (IOI/ZIO)', 'Portfolio & college-ready projects'],
    highlight: 'Get competition and college ready',
    pc: 'linear-gradient(90deg,#065F46,#10B981)',
    pcbg: 'rgba(16,185,129,.12)',
  },
];

const WHY_CODEHIVE = [
  { title: 'IIT Kanpur Mentorship', desc: 'Learn from a mentor who has built and taught real-world software and AI systems.', gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every student gets hands-on, one-on-one code review.', gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)', icon: Users },
  { title: 'Build Real Things', desc: 'Every module ends in a shipped project — an app, a game, a bot, a model.', gradient: 'linear-gradient(135deg,#F59E0B,#D97706)', icon: Blocks },
  { title: 'Competition Ready', desc: 'A clear path into ZIO, INOI, IOI and other coding olympiads for serious competitors.', gradient: 'linear-gradient(135deg,#10B981,#059669)', icon: Trophy },
  { title: 'AI-Native Curriculum', desc: 'AI and machine learning aren’t an afterthought — they’re built into the track from day one.', gradient: 'linear-gradient(135deg,#0EA5E9,#0284C7)', icon: Cpu },
  { title: 'Logic-First Teaching', desc: 'We teach how to think like a programmer, not just how to copy syntax.', gradient: 'linear-gradient(135deg,#EF4444,#DC2626)', icon: Puzzle },
];

const HIGHLIGHTS = [
  { value: '5–12', label: 'Grades Covered', icon: Users },
  { value: '3', label: 'Learning Tracks', icon: Blocks },
  { value: '12', label: 'Max Students / Batch', icon: Users },
  { value: '100%', label: 'Project-Based Learning', icon: Trophy },
];

export default function CodingLabPage() {
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
          <span className="eyebrow reveal">💻 Code Ninja · Coding, AI &amp; Logic Labs · Grades 6–12</span>
          <h1 className="reveal" data-delay="1">Code. Create. <span className="grad">Compute.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            A dedicated coding track from <strong style={{ color: 'var(--blue)' }}>Grade 6 to Grade 12</strong> — programming,
            AI foundations and computational logic, mentored by an <strong style={{ color: 'var(--blue)' }}>IIT Kanpur graduate</strong>.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            Not just syntax — real projects, real logic, and a real path into AI and competitive programming.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> Python · Java · Web Dev</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> AI &amp; Machine Learning</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Logic &amp; Algorithms</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> Competitive Programming</span>
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
                <div className="stat-card-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
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

      {/* ============ THREE PILLARS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">The Code Ninja Method</span>
            <h2 className="section-title reveal">Three pillars, one connected skillset</h2>
            <p className="section-sub reveal">Coding, AI and logic aren&apos;t taught in isolation — every track weaves all three together.</p>
          </div>
          <div className="prog-grid-3">
            {PILLARS.map((p) => (
              <div className="trust-card reveal" key={p.title}>
                <div className="trust-icon" style={{ background: p.gradient }}><p.icon size={24} color="#fff" /></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEARNING TRACKS ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Learning Tracks</span>
            <h2 className="section-title reveal">A track for every grade</h2>
            <p className="section-sub reveal">Progressive learning from block-based logic to AI and competitive programming.</p>
          </div>
          <div className="prog-grid-3">
            {TRACKS.map((t, i) => (
              <article className="prog-card reveal" data-delay={String(i)} style={{ ['--pc' as string]: t.pc, ['--pcbg' as string]: t.pcbg }} key={t.grade}>
                <div className="grade">{t.grade}</div>
                <h3>{t.title}</h3>
                <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>Focus Areas</p>
                <ul>
                  {t.focus.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <p style={{ background: 'rgba(245,158,11,.12)', borderLeft: '3px solid var(--amber)', padding: '10px 14px', borderRadius: 10, fontWeight: 600, fontSize: 14 }}>
                  ✨ {t.highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CODEHIVE ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why Code Ninja</span>
            <h2 className="section-title reveal">Built for makers, not memorizers</h2>
          </div>
          <div className="trust-grid">
            {WHY_CODEHIVE.map((w, i) => (
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
          <h2 style={{ marginBottom: 14 }}>Ready to Join Code Ninja?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free demo and see how your child learns to code, think and build with AI.
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
        title="Ready to Enroll? 💻"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
