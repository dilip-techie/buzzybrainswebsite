'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  TrendingUp,
  Briefcase,
  Sigma,
  BarChart3,
  Laptop,
  BookOpen,
  Lightbulb,
  ChevronRight,
  Phone,
  Users,
  Target,
  Award,
  Globe,
} from 'lucide-react';
import CtaModal from '@/components/CtaModal';

const SUBJECTS = [
  { name: 'Accountancy', icon: Calculator, desc: 'Financial & Cost Accounting for CBSE/ICSE, plus IGCSE and IB Accounting & Finance.', gradient: 'var(--grad-blue)' },
  { name: 'Economics', icon: TrendingUp, desc: 'Micro, Macro and Business Economics — board pattern plus IGCSE and IB Economics.', gradient: 'var(--grad-purple)' },
  { name: 'Business Studies', icon: Briefcase, desc: 'Principles of management — CBSE/ICSE Business Studies, IGCSE Business, and IB Business Management.', gradient: 'var(--grad-amber)' },
  { name: 'Applied & Core Maths', icon: Sigma, desc: 'Commercial Maths, Applied Maths for CBSE, and IB Maths Applications & Interpretation.', gradient: 'var(--grad-green)' },
  { name: 'Statistics', icon: BarChart3, desc: 'Data handling, probability and statistical methods for commerce.', gradient: 'linear-gradient(135deg,#0369A1,#0EA5E9)' },
  { name: 'Informatics Practices', icon: Laptop, desc: 'Data management and practical computing for Commerce students.', gradient: 'linear-gradient(135deg,#334155,#0F172A)' },
];

const BOARDS = [
  { name: 'CBSE, ICSE & State Boards', icon: BookOpen, desc: 'Full board-pattern coverage for Accountancy, Economics, Business Studies and Applied/Core Maths.', gradient: 'var(--grad-blue)' },
  { name: 'IGCSE (Cambridge)', icon: Globe, desc: 'IGCSE Business Studies, Economics and Accounting, taught to the Cambridge assessment pattern.', gradient: 'var(--grad-purple)' },
  { name: 'IB Diploma Programme', icon: Award, desc: 'IB Business Management, Economics and Accounting & Finance at HL/SL, including Internal Assessment support.', gradient: 'var(--grad-green)' },
];

const HIGHLIGHTS = [
  { value: '10', label: 'Max Students / Batch', icon: Users, gradient: 'var(--grad-blue)' },
  { value: '9+', label: 'Subjects Covered', icon: BookOpen, gradient: 'var(--grad-purple)' },
  { value: '5', label: 'Competitive Exams Supported', icon: Target, gradient: 'var(--grad-amber)' },
  { value: '25+', label: 'Years Faculty Leadership Experience', icon: Award, gradient: 'var(--grad-green)' },
];

const EXAMS = [
  { label: 'CUET', href: '/cuet-commerce-coaching-pune' },
  { label: 'CA Foundation', href: '/ca-foundation-coaching-pune' },
  { label: 'IPMAT', href: '/ipmat-exam' },
  { label: 'CAT', href: '/cat-exam' },
  { label: 'NPAT', href: null },
  { label: 'SET', href: null },
  { label: 'BBA Entrance', href: null },
];

const WHY_CHOOSE = [
  { title: 'Small Batches, Max 10', desc: 'Accounts and Applied Maths reward close doubt-resolution — a batch this size makes that possible every session.', gradient: 'var(--grad-blue)', icon: Users },
  { title: 'Concept-Based Teaching', desc: 'Real business case studies and practical examples, not rote memorization of formats and formulas.', gradient: 'var(--grad-purple)', icon: Lightbulb },
  { title: 'Career Guidance Built In', desc: 'From choosing CA vs CUET-based BCom vs BBA, students get real guidance, not just subject teaching.', gradient: 'var(--grad-amber)', icon: Target },
  { title: 'Weekly Tests & Chapter Assessments', desc: 'Regular, structured assessment that builds board-exam temperament from the first term.', gradient: 'var(--grad-green)', icon: Award },
  { title: 'AI-Powered, Technology-Enabled Learning', desc: 'Interactive digital classrooms and technology-driven tools, brought in from founder Dilip Sir’s 24+ years in technology leadership.', gradient: 'var(--grad-sky)', icon: Laptop },
  { title: 'Regular Parent Updates', desc: 'Transparent, regular feedback so parents always know exactly where their child stands.', gradient: 'var(--grad-red)', icon: Users },
];

export default function CommerceTuitionsPage() {
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
          <span className="eyebrow reveal">📊 BuzzyBrains Commerce Tuitions · Grades 11–12</span>
          <h1 className="reveal" data-delay="1">Commerce, Taught to Be <span className="grad">Understood.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            Accountancy, Economics, Business Studies and more for Class 11–12 CBSE, ICSE, State Board, <strong style={{ color: 'var(--blue)' }}>IGCSE and IB Diploma</strong> Commerce students —
            plus structured support for <strong style={{ color: 'var(--blue)' }}>CUET, CA Foundation, IPMAT, NPAT and SET</strong>.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            Small batches, real business case studies, and AI-powered digital classrooms — led by founder Dilip Sir (IIT Kanpur, IIM Ahmedabad).
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> Accountancy</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Economics</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> Business Studies</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Applied Maths</span>
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

      {/* ============ SUBJECTS ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Subjects Covered</span>
            <h2 className="section-title reveal">Every Commerce subject, taught by a specialist</h2>
            <p className="section-sub reveal">Not one generalist teaching every subject — each area is taught with real depth.</p>
          </div>
          <div className="trust-grid">
            {SUBJECTS.map((s, i) => (
              <div className="trust-card reveal" data-delay={String((i % 3) + 1)} key={s.name}>
                <div className="trust-icon" style={{ background: s.gradient }}><s.icon size={24} color="#fff" /></div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOARDS SUPPORTED ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">National & International</span>
            <h2 className="section-title reveal">Boards & curricula we support</h2>
            <p className="section-sub reveal">Whether your child is on a national board or an international curriculum, Commerce is taught to that exact syllabus and assessment style.</p>
          </div>
          <div className="trust-grid">
            {BOARDS.map((b, i) => (
              <div className="trust-card reveal" data-delay={String((i % 3) + 1)} key={b.name}>
                <div className="trust-icon" style={{ background: b.gradient }}><b.icon size={24} color="#fff" /></div>
                <h3>{b.name}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPETITIVE EXAMS ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container center">
          <span className="eyebrow reveal">Beyond Boards</span>
          <h2 className="section-title reveal">Preparation support for competitive commerce exams</h2>
          <p className="section-sub reveal" style={{ margin: '0 auto 28px' }}>Structured guidance for students aiming beyond board exams alone.</p>
          <div className="hero-chips reveal" style={{ justifyContent: 'center' }}>
            {EXAMS.map((exam) =>
              exam.href ? (
                <Link href={exam.href} className="chip chip-link" key={exam.label}>
                  <i className="dot" style={{ background: 'var(--blue)' }} /> {exam.label}
                </Link>
              ) : (
                <span className="chip" key={exam.label}><i className="dot" style={{ background: 'var(--blue)' }} /> {exam.label}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why Parents Choose Us</span>
            <h2 className="section-title reveal">Why BuzzyBrains Commerce Tuitions</h2>
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
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 10 per Batch</span>
          <h2 style={{ marginBottom: 14 }}>Ready to Strengthen Commerce?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free demo class and see how concept-based Commerce teaching actually works.
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
