'use client';

import { useEffect, useState } from 'react';
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

export default function OlympiadsPage() {
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
          <span className="eyebrow reveal">🏆 Olympiad Program · Grades 4–12</span>
          <h1 className="reveal" data-delay="1">Olympiad Excellence, <span className="grad">Every Subject.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            One structured program across <strong style={{ color: 'var(--blue)' }}>Mathematics, Physics, Chemistry, Biology, Science and Coding</strong> —
            mentored by IIT/IIM alumni faculty for India&apos;s and the world&apos;s most prominent olympiads.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            From IOQM and RMO to IMO, IPhO, IChO, IBO and IOI — we prepare students for the exams that matter.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            {SUBJECTS.map((s) => (
              <Link key={s.id} href={`/#${s.id}`} className="chip">
                <i className="dot" style={{ background: s.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] }} /> {s.subject}
              </Link>
            ))}
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
                <Link href={g.href} style={{ display: 'block', padding: '16px 18px', fontSize: 14.5, fontWeight: 600, color: 'var(--text-2)' }}>
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
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
              <h2 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Ready to Enroll? 🏆</h2>
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
