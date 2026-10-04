'use client';

import '@/app/tailwind.css';
import { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Microscope,
  Code2,
  ChevronRight,
  Phone,
  Trophy,
} from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import CtaModal from '@/components/CtaModal';

const SUBJECTS = [
  {
    id: 'mathematics',
    subject: 'Mathematics',
    icon: Calculator,
    gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)',
    description: 'From school-level reasoning to the world’s toughest proof-based problems.',
    competitions: ['IMO', 'AMC 8', 'AMC 10', 'AMC 12', 'AIME', 'IOQM', 'PRMO', 'RMO', 'INMO', 'SOF IMO', 'Kangaroo Math'],
  },
  {
    id: 'physics',
    subject: 'Physics',
    icon: Atom,
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    description: 'Deep conceptual physics for India’s toughest science olympiad ladder.',
    competitions: ['IPhO', 'APhO', 'NSEP', 'INPhO'],
  },
  {
    id: 'chemistry',
    subject: 'Chemistry',
    icon: FlaskConical,
    gradient: 'linear-gradient(135deg,#92400E,#F59E0B)',
    description: 'Organic, inorganic and physical chemistry mastery for national and global rounds.',
    competitions: ['IChO', 'NSEC', 'INChO'],
  },
  {
    id: 'biology',
    subject: 'Biology',
    icon: Dna,
    gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)',
    description: 'Cell biology to genetics — rigorous prep for India’s biology olympiad pipeline.',
    competitions: ['IBO', 'NSEB', 'INBO'],
  },
  {
    id: 'science',
    subject: 'General Science',
    icon: Microscope,
    gradient: 'linear-gradient(135deg,#0369A1,#0EA5E9)',
    description: 'A junior-level launchpad across all sciences, before students specialize.',
    competitions: ['NSO', 'IJSO', 'NTSE'],
  },
  {
    id: 'coding',
    subject: 'Coding & Informatics',
    icon: Code2,
    gradient: 'linear-gradient(135deg,#334155,#0F172A)',
    description: 'Algorithmic thinking and competitive programming from first principles.',
    competitions: ['IOI', 'ZIO', 'INOI', 'ICO', 'USACO'],
  },
];

const HIGHLIGHTS = [
  { value: '6', label: 'Subject Tracks', icon: Trophy, gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)' },
  { value: '20+', label: 'Named Competitions Covered', icon: Trophy, gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)' },
  { value: '25+', label: 'Years Faculty Experience', icon: Trophy, gradient: 'linear-gradient(135deg,#F59E0B,#D97706)' },
  { value: '12', label: 'Max Students / Batch', icon: Trophy, gradient: 'linear-gradient(135deg,#10B981,#059669)' },
];

const FAQS = [
  {
    question: 'Which olympiad should my child start with?',
    answer: 'For most students, IOQM (Maths) or NSO (general Science, junior level) are the natural entry points — both have a clear preparation path and feed into more advanced national and international olympiads.',
  },
  {
    question: 'Can one program really cover Maths, Physics, Chemistry, Biology and Coding?',
    answer: 'Yes — each subject runs as its own track with its own named-competition roadmap (e.g. IOQM→RMO→INMO for Maths, NSEP→INPhO→IPhO for Physics), taught by faculty specialized in that subject rather than one generalist covering everything.',
  },
  {
    question: 'Do olympiads help with JEE/NEET preparation too?',
    answer: 'Yes — olympiad-style problem-solving builds exactly the deep, flexible reasoning that JEE Advanced and NEET\'s harder questions reward, so olympiad prep and competitive-exam prep reinforce each other.',
  },
  {
    question: 'Is olympiad coaching only for exceptionally gifted students?',
    answer: 'No — it rewards trained, structured problem-solving more than raw natural talent. Students with a solid foundation who practice consistently regularly outperform naturally quick students who prepare only briefly before the exam.',
  },
  {
    question: 'What is the batch size?',
    answer: 'Every batch is capped at a maximum of 12 students, so every student gets individual feedback on mock papers.',
  },
];

export default function OlympiadsPage() {
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
          <span className="eyebrow">🏆 Olympiad Program · Grades 4–12</span>
          <h1>Olympiad Excellence, <span className="grad">Every Subject.</span></h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            One structured program across <strong style={{ color: 'var(--blue)' }}>Mathematics, Physics, Chemistry, Biology, Science and Coding</strong> —
            mentored by IIT/IIM alumni faculty for India&apos;s and the world&apos;s most prominent olympiads.
          </p>
          <p className="section-sub" style={{ margin: '0 auto 28px' }}>
            From IOQM and RMO to IMO, IPhO, IChO, IBO and IOI — we prepare students for the exams that matter.
          </p>

          <div className="hero-chips" style={{ justifyContent: 'center' }}>
            {SUBJECTS.map((s) => (
              <Link prefetch={false} key={s.id} href={`/#${s.id}`} className="chip">
                <i className="dot" style={{ background: s.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] }} /> {s.subject}
              </Link>
            ))}
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

      {/* ============ SUBJECT TRACKS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Subject Tracks</span>
            <h2 className="section-title reveal">A named competition for every strength</h2>
            <p className="section-sub reveal">Every track is built around the actual exams students sit for — no generic prep, just the real syllabus.</p>
          </div>
          <div className="trust-grid">
            {SUBJECTS.map((s, i) => (
              <div id={s.id} className="trust-card reveal" data-delay={String((i % 3) + 1)} key={s.id} style={{ scrollMarginTop: 122 }}>
                <div className="trust-icon" style={{ background: s.gradient }}>
                  <s.icon size={24} color="#fff" />
                </div>
                <h3>{s.subject}</h3>
                <p>{s.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
                  {s.competitions.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: 12.5,
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        padding: '5px 12px',
                        borderRadius: 999,
                        background: 'var(--bg-alt)',
                        border: '1px solid var(--line)',
                        color: 'var(--text-2)',
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

      {/* ============ GUIDES ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Free Guides</span>
            <h2 className="section-title reveal">Olympiad preparation guides</h2>
            <p className="section-sub reveal">In-depth, honest guides on preparing for IOQM, AMC 8, Science Olympiads and more.</p>
          </div>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, listStyle: 'none', margin: '32px 0 0', padding: 0 }}>
            {[
              { href: '/olympiad-coaching-pune', label: "Olympiad Coaching in Pune: A Parent's Guide" },
              { href: '/blog/complete-guide-maths-olympiad-preparation-class-6-10', label: 'Complete Guide to Maths Olympiad Preparation for Class 6–10' },
              { href: '/blog/how-to-prepare-for-ioqm-from-grade-8', label: 'How to Prepare for IOQM from Grade 8' },
              { href: '/blog/amc-8-preparation-guide-for-beginners', label: 'AMC 8 Preparation Guide for Beginners' },
              { href: '/blog/science-olympiad-preparation-strategy-middle-school', label: 'Science Olympiad Preparation Strategy for Middle School' },
              { href: '/blog/common-mistakes-students-make-in-olympiad-mathematics', label: 'Common Mistakes Students Make in Olympiad Mathematics' },
              { href: '/blog/why-olympiad-preparation-improves-jee-success', label: 'Why Olympiad Preparation Improves JEE Success' },
              { href: '/blog/best-books-for-maths-olympiad-preparation', label: 'Best Books for Maths Olympiad Preparation' },
              { href: '/blog/how-parents-can-support-olympiad-preparation', label: 'How Parents Can Support Olympiad Preparation' },
              { href: '/blog/olympiad-vs-school-mathematics-key-differences', label: 'Olympiad vs School Mathematics: Key Differences' },
              { href: '/blog/mental-maths-techniques-every-olympiad-student-should-know', label: 'Mental Maths Techniques Every Olympiad Student Should Know' },
            ].map((g) => (
              <li key={g.href} style={{ border: '1px solid var(--line)', borderRadius: 'var(--r-md)', background: 'var(--card)' }}>
                <Link prefetch={false} href={g.href} style={{ display: 'block', padding: '16px 18px', fontSize: 14.5, fontWeight: 600, color: 'var(--text-2)' }}>
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
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
          <h2 style={{ marginBottom: 14 }}>Ready to Start the Olympiad Journey?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free diagnostic session and we&apos;ll map the right competitions and timeline for your child.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center', marginBottom: 28 }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Book Your Free Consultation <ChevronRight size={19} />
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
        title="Ready to Enroll? 🏆"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
