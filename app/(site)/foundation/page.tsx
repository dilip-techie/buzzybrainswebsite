'use client';

import '@/app/tailwind.css';
import { useState } from 'react';
import {
  BookOpen,
  Target,
  Users,
  Zap,
  CheckCircle,
  Phone,
  MapPin,
  ChevronRight,
  Lightbulb,
  Brain,
  Rocket,
  Play,
  Layers,
} from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import CtaModal from '@/components/CtaModal';
import OfferBanner from '@/components/OfferBanner';
import EliteBatchBanner from '@/components/EliteBatchBanner';

const HIGHLIGHTS = [
  { value: '6–10', label: 'Grades Covered', icon: BookOpen, gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)' },
  { value: '4', label: 'Core Subjects', icon: Layers, gradient: 'linear-gradient(135deg,#F59E0B,#D97706)' },
  { value: '100%', label: 'Concept-First Teaching', icon: Lightbulb, gradient: 'linear-gradient(135deg,#10B981,#059669)' },
];

const WHY_CHOOSE = [
  {
    icon: Brain,
    title: 'Top IITian Mentorship',
    description: 'Personal guidance by IITian faculty, including Dilip Sir (IIT Kanpur), with a proven concept-first approach.',
    gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
  },
  {
    icon: Users,
    title: 'Ultra-Small Batches',
    description: 'Just 12 students per class — ensuring individual attention, doubt-solving, and true mentoring (not crowd teaching).',
    gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)',
  },
  {
    icon: Lightbulb,
    title: 'Strong Conceptual Foundation',
    description: 'Perfect preparation for IIT-JEE, NEET, Olympiads, and Boards — no rote learning, only deep understanding.',
    gradient: 'linear-gradient(135deg,#F59E0B,#D97706)',
  },
  {
    icon: Zap,
    title: 'Maths the IIT Way',
    description: 'Vedic maths techniques and logical shortcuts to build speed, accuracy, and confidence.',
    gradient: 'linear-gradient(135deg,#10B981,#059669)',
  },
  {
    icon: BookOpen,
    title: 'Physics Made Simple',
    description: 'Complex ideas broken down into clear, intuitive concepts — fundamentals built early, stress reduced later.',
    gradient: 'var(--grad-sky)',
  },
  {
    icon: Target,
    title: 'Premium Offline Learning',
    description: 'Focused, distraction-free offline classes at Amanora, designed for maximum learning effectiveness.',
    gradient: 'var(--grad-red)',
  },
];

const GRADE_DETAILS = [
  {
    grade: 'Grade 6–7',
    title: 'Foundation Building Starts',
    focus: ['Number Systems', 'Basic Algebra', 'Geometry Fundamentals', 'Scientific Method'],
    highlight: 'Build confidence and curiosity',
    pc: 'linear-gradient(90deg,#2563EB,#0EA5E9)',
    pcbg: 'var(--blue-050)',
  },
  {
    grade: 'Grade 8–9',
    title: 'Conceptual Deepening',
    focus: ['Advanced Algebra', 'Trigonometry Introduction', 'Physics Laws', 'Chemistry Basics'],
    highlight: 'Start thinking like IITians',
    pc: 'linear-gradient(90deg,#7C3AED,#2563EB)',
    pcbg: 'rgba(124,58,237,.1)',
  },
  {
    grade: 'Grade 10',
    title: 'Board Mastery + JEE Prep',
    focus: ['Board Exam Excellence', 'JEE Main Foundation', 'NEET Basics', 'Problem-Solving'],
    highlight: 'Score high in boards + prepare for competitive exams',
    pc: 'linear-gradient(90deg,#F59E0B,#EA580C)',
    pcbg: 'rgba(245,158,11,.12)',
  },
];

const CURRICULUM = [
  { subject: 'Mathematics', topics: 'Algebra, Geometry, Trigonometry, Number Theory, Vedic Maths shortcuts', gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)' },
  { subject: 'Physics', topics: 'Mechanics, Heat, Light, Electricity, Modern Physics concepts', gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)' },
  { subject: 'Chemistry', topics: 'Atomic Structure, Bonding, Reactions, Periodic Table mastery', gradient: 'linear-gradient(135deg,#F59E0B,#D97706)' },
  { subject: 'Biology', topics: 'Cell Biology, Genetics, Human Body Systems, Ecology', gradient: 'linear-gradient(135deg,#10B981,#059669)' },
];

const SUITABLE_FOR = [
  'Parents who want a strong academic base, not last-minute exam panic',
  'Students aiming for IIT-JEE / NEET / Olympiads',
  'Bright students who want to learn ahead of school level',
  'Learners who enjoy understanding why, not just what',
  'Children who are anxious about Maths and Science',
  'Students who want personalized attention and guidance',
];

const FAQS = [
  {
    question: 'Who can apply for the Elite Foundation Program?',
    answer: 'The Foundation Program is an elite, merit-based program. A minimum of 80% marks is required to apply. Each batch is capped at 12 students and seats are limited, so we recommend applying early to secure a place.',
  },
  {
    question: 'What grades and subjects does the Foundation Program cover?',
    answer: 'Grades 6–10, across Mathematics, Physics, Chemistry and Biology — taught concept-first rather than as rote memorization, so the fundamentals hold up under JEE, NEET, Olympiad or board-exam pressure later.',
  },
  {
    question: 'My child is doing fine in school — is Foundation coaching still worth it?',
    answer: "Yes — school tuition typically reinforces what was taught in class. Foundation coaching goes further, building problem-solving ability and exposing students to competitive-exam-style thinking years before they'll need it.",
  },
  {
    question: 'What is the batch size?',
    answer: 'Every batch is capped at a maximum of 12 students, so doubt-resolution stays individual instead of getting lost in a large classroom.',
  },
  {
    question: 'When should a child start the Foundation Program?',
    answer: 'Grade 6 is a common and effective starting point — early enough to build genuine conceptual habits before board-exam pressure begins in Grade 9-10, without rushing a younger child into exam-style coaching too early.',
  },
  {
    question: 'Are classes online or in person?',
    answer: 'Classes run from our Amanora, Pune centre, with an online option for students who prefer not to commute.',
  },
];

export default function FoundationPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/918983604478', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    window.location.href = '/#contact';
  };

  return (
    <main className="bb-landing bb-page-shell">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow" style={{ background: 'linear-gradient(135deg,#F59E0B,#EA580C)', color: '#fff', marginRight: 8 }}>🎁 Free Scholarship Test · Up to 90% Off</span>
          <span className="eyebrow" style={{ background: '#1F2937', color: '#FBBF24', marginRight: 8 }}>⭐ Elite Batch · Min. 80% Marks</span>
          <span className="eyebrow">🌟 Elite Foundation Program · Grades 6–10</span>
            <h1>The Elite <span className="grad">Foundation Program</span></h1>
            <p className="lede">
              Creating future <strong style={{ color: 'var(--blue)' }}>IITians &amp; doctors</strong> — start early, start right, with mentorship by{' '}
              <strong style={{ color: 'var(--blue)' }}>Dilip Sir (B.Tech, IIT Kanpur)</strong>. Because strong fundamentals today decide tomorrow&apos;s success.
            </p>
            <p style={{ margin: '0 0 22px', padding: '12px 16px', borderRadius: 12, background: '#FEF3C7', border: '1px solid #F59E0B', color: '#78350F', fontSize: 15.5, fontWeight: 600 }}>
              ⭐ <strong>Admission by merit:</strong> a minimum of <strong style={{ color: '#B91C1C' }}>80% marks is required to apply</strong>. Seats are limited, so apply early to secure your place.
            </p>

            <div className="hero-chips">
              <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> Grades 6–10</span>
              <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> Max 12 / Batch</span>
              <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> 4 Subjects</span>
              <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Online Available</span>
            </div>

            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
                Apply Now: Limited Seats
                <ChevronRight size={19} />
              </button>
              <a href="tel:+919850570525" className="btn btn-ghost">
                <Phone size={17} /> Call Us
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="short-embed-wrap" style={{ margin: '0 auto' }}>
              <span className="short-embed-badge">
                <Play size={15} fill="currentColor" /> Watch: Which Olympiad Is Right for Your Child?
              </span>
              <div className="short-embed">
                <iframe
                  src="https://www.youtube.com/embed/4pr80wzXN0Q"
                  title="IMO? NSO? IOQM? AMC? Confused about which Olympiad is right for your child? — BuzzyBrains Academy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ELITE BATCH ============ */}
      <EliteBatchBanner program="Foundation" onClick={() => setShowCtaModal(true)} />

      <OfferBanner
        tag="FREE SCHOLARSHIP TEST"
        title="Take the free Foundation scholarship test and win up to 90% off"
        lede="Sit our free entrance test. Your score sets your scholarship automatically, with no separate application."
        points={['Free test, with no separate scholarship application', 'Your test score decides your scholarship', 'Scholarships of up to 90% on tuition fees for group batches']}
        ctaLabel="Book Your Free Scholarship Test"
        onClick={() => setShowCtaModal(true)}
        secondary={{ href: '/admissions', label: 'See scholarship details' }}
        footnote="Your exact scholarship depends on your test score and is confirmed in your offer letter."
      />

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

      {/* ============ WHY CHOOSE ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why Parents Choose Us</span>
            <h2 className="section-title reveal">Why Parents Choose BuzzyBrains Academy</h2>
            <p className="section-sub reveal">Proven approach. Real results. Personalized mentorship.</p>
          </div>
          <div className="trust-grid">
            {WHY_CHOOSE.map((feature, i) => (
              <div className="trust-card reveal" data-delay={String((i % 3) + 1)} key={feature.title}>
                <div className="trust-icon" style={{ background: feature.gradient }}>
                  <feature.icon size={24} color="#fff" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GRADE-WISE BREAKDOWN ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Program Structure</span>
            <h2 className="section-title reveal">Grade-wise Program Overview</h2>
            <p className="section-sub reveal">Progressive learning from Grade 6 to Grade 10.</p>
          </div>
          <div className="prog-grid-3">
            {GRADE_DETAILS.map((g, i) => (
              <article className="prog-card reveal" data-delay={String(i)} style={{ ['--pc' as string]: g.pc, ['--pcbg' as string]: g.pcbg }} key={g.grade}>
                <div className="grade">{g.grade}</div>
                <h3>{g.title}</h3>
                <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>Focus Areas</p>
                <ul>
                  {g.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p style={{ background: 'rgba(245,158,11,.12)', borderLeft: '3px solid var(--amber)', padding: '10px 14px', borderRadius: 10, fontWeight: 600, fontSize: 14 }}>
                  ✨ {g.highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CURRICULUM ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Curriculum</span>
            <h2 className="section-title reveal">What Your Child Will Learn</h2>
            <p className="section-sub reveal">Comprehensive curriculum designed for deep understanding.</p>
          </div>
          <div className="trust-grid-2">
            {CURRICULUM.map((c, i) => (
              <div className="trust-card reveal" data-delay={String((i % 2) + 1)} key={c.subject}>
                <div className="trust-icon" style={{ background: c.gradient }}>
                  <BookOpen size={24} color="#fff" />
                </div>
                <h3>{c.subject}</h3>
                <p>{c.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO IS THIS FOR ============ */}
      <section className="testis bb-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="center">
            <span className="eyebrow reveal">Is This For You?</span>
            <h2 className="section-title reveal" style={{ color: '#fff' }}>Who Is This Program For?</h2>
          </div>
          <ul className="cta-points cta-points-2col reveal" style={{ maxWidth: 880, margin: '40px auto 0', gap: '16px 32px' }}>
            {SUITABLE_FOR.map((point) => (
              <li key={point}><CheckCircle size={19} style={{ color: 'var(--amber-soft)' }} /> {point}</li>
            ))}
          </ul>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '36px auto 0', fontSize: 17, fontWeight: 600, color: '#fff' }}>
            <Rocket size={20} style={{ verticalAlign: '-4px', marginRight: 8, color: 'var(--amber-soft)' }} />
            If your answer is YES to any of the above, BuzzyBrains Academy&apos;s Foundation Program is perfect for your child!
          </p>
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
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Elite Program · Min. 80% to Apply · Limited Seats</span>
          <h2 style={{ marginBottom: 14 }}>Apply Early to Secure Your Child&apos;s Seat</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            The Elite Foundation Program admits students with a minimum of 80% marks, and each batch takes only 12 students. Seats fill fast, so apply early.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center', marginBottom: 28 }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Apply Now <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              <Phone size={17} /> 98505 70525
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, alignItems: 'center', color: '#C9D5EF', fontSize: 14.5 }}>
            <MapPin size={17} style={{ color: 'var(--blue-soft)' }} /> Amanora, Hadapsar, Pune
          </div>
        </div>
      </section>

      {/* ============ CTA MODAL ============ */}
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Apply for the Elite Foundation Program 🎓"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
