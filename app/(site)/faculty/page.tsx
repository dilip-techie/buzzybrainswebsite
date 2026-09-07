import Link from 'next/link';
import { FACULTY_PROFILES } from '@/lib/faculty/data';
import { testimonials } from '@/lib/olympiad/data';

const STATS = [
  { value: '25+', label: 'Years of Combined Teaching Excellence' },
  { value: '10', label: 'IIT / IIM / PhD-Caliber Mentors' },
  { value: '12', label: 'Max Students per Batch' },
  { value: '100%', label: 'Subject-Specialist Teaching' },
];

const SELECTION_CRITERIA = [
  {
    title: 'Cleared one of India\'s most competitive exams themselves',
    text: "Every mentor has either personally cleared JEE, CAT or GATE, or holds a PhD from a top research institute (IIT, IISER) — they've been through the exact filter their students are now trying to pass.",
  },
  {
    title: 'Teaches only what they hold real depth in',
    text: 'No generalist covering every subject — Agarwal Sir and Dr. Mrinmayee teach Chemistry because they researched it at PhD level, Dr. Todkar teaches Biology because he practices medicine, not because a timetable needed filling.',
  },
  {
    title: 'Evaluated on whether students actually understand, not just attend',
    text: 'Weekly assessments mean a mentor\'s teaching is judged on whether a concept genuinely landed — an underperforming approach gets caught and corrected in days, not discovered at a term-end exam.',
  },
];

const FAQS = [
  {
    question: 'Who teaches Mathematics at BuzzyBrains Academy?',
    answer: "Four mentors teach Mathematics across different tracks: Dilip Sir (Founder, B.Tech IIT Kanpur, JEE AIR 400) for Foundation and JEE, Dipak JK Sir (M.Tech IIT Bombay) for Olympiad tracks (IOQM, AMC), Pooja Madam (B.Tech IIT Delhi) for one-to-one online coaching, and Arun Sir (M.Sc. Mathematics) across Grade 6-12 and Engineering Mathematics.",
  },
  {
    question: 'Does BuzzyBrains Academy have PhD faculty?',
    answer: "Yes — Agarwal Sir (PhD, IIT Bombay) teaches Chemistry & Physics, Dr. Mrinmayee (PhD, IIT Kharagpur) teaches Chemistry, and Dr. Urmila (PhD, IISER Pune) teaches Chemistry & Science.",
  },
  {
    question: 'Who teaches NEET Biology, and what makes them qualified?',
    answer: "Dr. Todkar, a practicing General Physician with 25+ years of experience, and Priya Madam (B.E., Pune University) teach NEET Biology — Dr. Todkar's real clinical background brings applied medical context that a purely textbook-trained teacher can't.",
  },
  {
    question: 'Is there a dedicated Olympiad coach, or do JEE teachers cover it as an extra?',
    answer: "Dipak JK Sir has coached India's IOQM → RMO → INMO → IMO pipeline, plus AMC 8/10/12, AIME and USAMO, specifically since 2010 — it's his specialization, not an add-on to JEE teaching.",
  },
  {
    question: 'What is the student-to-faculty batch ratio at BuzzyBrains Academy?',
    answer: "Every batch across every program is capped at a maximum of 12 students — a fixed limit, not a marketing claim — so each mentor can give individual attention rather than teaching to a room's average.",
  },
  {
    question: 'Why does BuzzyBrains Academy call its faculty "Top 1%"?',
    answer: "Because it's a description of credentials, not a slogan: every mentor has either cleared one of India's most competitive entrance exams (JEE, CAT, GATE — each with an acceptance rate under 2%) or holds a PhD from a top research institute, and teaches only the specific subject they hold that depth in.",
  },
];

export default function FacultyPage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero">
        <div className="container article-shell center">
          <span className="eyebrow">🎓 Meet the Mentors</span>
          <h1 style={{ fontSize: 'clamp(30px,4.4vw,50px)' }}>
            Top 1% Faculty. <span className="grad">Carefully Selected.</span> Genuinely World-Class.
          </h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 720 }}>
            Every mentor at BuzzyBrains Academy has either personally cleared one of India's most competitive
            entrance exams or holds a PhD from a top research institute — and each teaches only the subject they
            hold that depth in. Not a marketing line. A hiring bar.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 20 }}>
            <Link prefetch={false} href="/#contact" className="btn btn-primary">Book a Free Demo Class</Link>
            <a href="tel:+919850570525" className="btn btn-ghost">Call +91 98505 70525</a>
          </div>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <article className="article-body">
            <h2 id="what-makes-our-faculty-top-1-percent">What Makes BuzzyBrains Academy's Faculty "Top 1%"?</h2>
            <div className="answer-block">
              BuzzyBrains Academy's faculty are described as Top 1% because that's literally true of their own
              academic record: every mentor has either cleared JEE, CAT or GATE — exams with acceptance rates
              under 2% — or holds a PhD from a top research institute like IIT, IIT Bombay, IIT Kharagpur or
              IISER Pune. Each mentor teaches only the specific subject they hold that depth in, taught to
              batches capped at 12 students.
            </div>
            <p>
              Most coaching institutes advertise "IIT faculty" as a headline and leave it there. The real
              question worth asking is narrower: does the person teaching your child's Chemistry actually have
              Chemistry-specific depth, or are they a Mathematics graduate covering three subjects because the
              timetable needed filling? At BuzzyBrains Academy, every subject is taught by someone whose own
              academic and professional background is specifically in that subject.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, margin: '32px 0' }}>
              {STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <b>{s.value}</b>
                  <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{s.label}</span>
                </div>
              ))}
            </div>

            <h2 id="meet-the-full-faculty">Meet the Full Faculty</h2>
            <p>
              Ten mentors, each specializing in the subject their own academic depth is actually in:
            </p>
            <div className="fac-grid">
              {FACULTY_PROFILES.map((f) => (
                <article className="fac-card" key={f.name}>
                  <div className="fac-photo" style={{ background: f.gradient }}>{f.initials}</div>
                  <h3>{f.name}</h3>
                  <div className="role">{f.subject}</div>
                  <p>{f.qualification}</p>
                  <p style={{ color: 'var(--text-3)', fontSize: 13 }}>{f.tagline}</p>
                </article>
              ))}
            </div>

            <h2 id="faculty-profiles">Faculty Profiles — Credentials and Teaching Approach</h2>
            {FACULTY_PROFILES.map((f) => (
              <div key={f.name} style={{ marginBottom: 28 }}>
                <h3>{f.name} — {f.subject}</h3>
                <p style={{ color: 'var(--blue)', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                  {f.qualification}
                </p>
                <p>{f.bio}</p>
                <ul>
                  {f.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 id="how-we-select-faculty">How BuzzyBrains Academy Selects Its Faculty</h2>
            <p>
              "Top 1%" isn't just a description of where a mentor studied — it's a standard applied to who gets
              to teach, and what they teach:
            </p>
            <div className="tip-grid">
              {SELECTION_CRITERIA.map((c) => (
                <div className="tip-card tip" key={c.title}>
                  <span className="tip-card-icon">✅</span>
                  <p><strong>{c.title}</strong> — {c.text}</p>
                </div>
              ))}
            </div>

            <h2 id="what-parents-say">What Parents Say</h2>
            <div className="tip-grid">
              {testimonials.map((t) => (
                <div className="tip-card tip" key={t.name}>
                  <span className="tip-card-icon">💬</span>
                  <p><strong>{t.name}</strong> — {t.text}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="article-cta">
            <p>Ready to meet the mentors yourself?</p>
            <Link prefetch={false} href="/#contact" className="btn btn-primary">Book a Free Demo Class</Link>
          </div>

          <div className="article-faq">
            <h2>Frequently Asked Questions</h2>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="blog-cluster-head">
              <h2>Explore More</h2>
              <Link prefetch={false} href="/blog">All guides →</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Link prefetch={false} href="/about" className="chip chip-link">About BuzzyBrains Academy</Link>
              <Link prefetch={false} href="/best-coaching-institute-pune" className="chip chip-link">Best Coaching Institute in Pune</Link>
              <Link prefetch={false} href="/best-jee-coaching-institute-in-pune" className="chip chip-link">Best JEE Coaching Institute in Pune</Link>
              <Link prefetch={false} href="/best-neet-coaching-institute-in-pune" className="chip chip-link">Best NEET Coaching Institute in Pune</Link>
              <Link prefetch={false} href="/best-maths-olympiad-institute-in-pune" className="chip chip-link">Best Maths Olympiad Institute in Pune</Link>
              <Link prefetch={false} href="/admissions" className="chip chip-link">Admissions & Scholarships</Link>
              <Link prefetch={false} href="/contact" className="chip chip-link">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
