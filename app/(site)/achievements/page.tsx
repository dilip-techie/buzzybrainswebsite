'use client';

import { useEffect, useState } from 'react';
import {
  Award,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Trophy,
  Sparkles,
  ChevronRight,
  Phone,
} from 'lucide-react';

const HIGHLIGHTS = [
  { value: '5★', label: 'Highest Rating by Parents', icon: Award, gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { value: '150-200', label: 'Active Students (2025)', icon: Users, gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { value: '35+', label: 'Olympiad Qualifiers', icon: Trophy, gradient: 'linear-gradient(135deg,#92400E,#F59E0B)' },
  { value: '95%+', label: 'Top Board Scorers', icon: TrendingUp, gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
];

const MILESTONES = [
  { badge: '2020', title: 'The Realization', desc: 'Dilip Sir saw the gap: large classrooms, anxious students, burnt-out teachers. Decided to leave his job and try something different.', icon: Sparkles },
  { badge: 'Mid-2021', title: 'The Leap', desc: 'Rented a small room with borrowed furniture. Started with 8 students and a promise: quality over numbers. No ads, just word of mouth.', icon: Rocket },
  { badge: '2022', title: 'First Victory', desc: 'First batch completed. 85-92% in boards. Not the highest numbers, but students were confident, curious, and happy to learn.', icon: Target },
  { badge: '2023', title: 'Expanding Quietly', desc: 'Grew to 50+ active students. Added a second teacher. Still refused to compromise on batch sizes.', icon: TrendingUp },
  { badge: '2024', title: 'Earning Trust', desc: 'First JEE Main qualifiers. More 95%+ board scorers. Students coming from 4-5 km away for classes.', icon: Award },
  { badge: '2025', title: 'Still Going Strong', desc: '150-200 active students, 8 dedicated mentors, same small batch size, same high standards.', icon: Trophy, success: true },
];

const REVIEWS = [
  { name: 'Kavita Khurana', text: 'My son is taking coaching for his 10th standard. Both the teachers of Maths & Science are amazing. They are very supportive & provide professional guidance. I highly recommend BuzzyBrains Academy.' },
  { name: 'Pinky Singhal', text: 'I highly recommend Dilip Sir for his clear and simple teaching methods. He explains complex topics in a way that is perfect for students, and my daughter is very happy with her progress. Thank you!' },
  { name: 'Rishi Raj', text: 'Dilip sir is extremely talented and efficient. We had very good experience with our kids. Will highly recommend him.' },
  { name: 'Manish Bajpai', text: 'Dilip Sir - Thank you for your dedication and clear explanation of concepts. My child has gained more confidence for her CBSE board preparation in Mathematics.' },
  { name: 'Krishnan Duraisamy', text: 'My son has been attending Further Mathematics (AS level) and has absolutely benefitted from the structured and in-depth learning experience.' },
  { name: 'Ekku Anish', text: 'We truly feel blessed to have you in Arohi’s learning journey, Dilip sir. The dedication, patience, and sincere support have made a lasting difference.' },
];

export default function AchievementsPage() {
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
          <span className="eyebrow reveal">🏆 Our Achievements</span>
          <h1 className="reveal" data-delay="1">Real Results. <span className="grad">Real Families.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            No inflated numbers, no stock testimonials — just our honest growth story and genuine reviews
            from the parents and students we&apos;ve worked with since 2020.
          </p>

          <div className="hero-ctas reveal" data-delay="3" style={{ justifyContent: 'center', marginTop: 20 }}>
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

      {/* ============ REVIEWS ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }} id="reviews" aria-labelledby="reviews-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Parents &amp; Student Reviews</span>
            <h2 className="section-title reveal" id="reviews-title">What families are actually saying</h2>
            <p className="section-sub reveal">Genuine reviews shared by BuzzyBrains Academy parents and students.</p>
          </div>
          <div className="review-grid">
            {REVIEWS.map((review, i) => (
              <article className="review-card reveal" data-delay={String((i % 3) + 1)} key={review.name}>
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>&quot;{review.text}&quot;</p>
                <strong>{review.name}</strong>
                <small>Parent Review</small>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: 24 }}>
            <a href="https://www.google.com/search?q=BuzzyBrains+Academy+Google+Reviews" target="_blank" rel="noopener noreferrer" className="review-link">
              Read more reviews on Google
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============ KEY HIGHLIGHTS ============ */}
      <section className="bb-section">
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

      {/* ============ GROWTH STORY ============ */}
      <section className="bb-section" id="journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Growth Story</span>
            <h2 className="section-title reveal" id="journey-title">From one room to a real institute</h2>
            <p className="section-sub reveal">Every milestone here is real — the slow, honest way we built BuzzyBrains Academy.</p>
          </div>
          <div className="journey-track">
            {MILESTONES.map((m) => (
              <div className="jstep reveal" data-delay="1" key={m.badge}>
                <div className="jstep-dot" style={m.success ? { borderColor: 'var(--green)' } : undefined}>
                  <m.icon size={22} style={{ color: m.success ? 'var(--green)' : 'var(--blue)' }} />
                </div>
                <div className="jstep-body">
                  <span className="badge" style={m.success ? { color: 'var(--green)' } : undefined}>{m.badge}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 12 per Batch</span>
          <h2 style={{ marginBottom: 14 }}>Want to be our next success story?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free demo and see the same honest, personal attention behind these results.
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
              <h2 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Ready to Enroll? 🎓</h2>
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
