import Link from 'next/link';
import {
  FAQS,
  PROGRAM_TABLE,
  BOARD_COMPARISON,
  COMMON_MISTAKES,
  PARENT_TIPS,
  STUDENT_TIPS,
  LOCALITIES,
} from './_data';

export default function BestCoachingInstitutePunePage() {
  return (
    <main className="bb-landing bb-page-shell">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container article-shell center">
          <span className="eyebrow reveal">📍 Hadapsar, Pune</span>
          <h1 className="reveal" data-delay="1" style={{ fontSize: 'clamp(30px,4.4vw,50px)' }}>
            The Best Coaching Institute in Hadapsar, Pune — <span className="grad">BuzzyBrains Academy</span>
          </h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            A premium coaching institute for Grades 4-12, led by an IIT Kanpur and IIM Ahmedabad alumnus, with every
            batch capped at 12 students. Foundation, Maths Excellence, Olympiads, IIT-JEE, NEET, Commerce, IGCSE, IB,
            AP, SAT and Code Ninja — all under one roof in Amanora, Hadapsar.
          </p>
          <div className="hero-ctas reveal" data-delay="3" style={{ justifyContent: 'center', marginTop: 20 }}>
            <Link href="/#contact" className="btn btn-primary">Book a Free Demo Class</Link>
            <a href="tel:+919850570525" className="btn btn-ghost">Call +91 98505 70525</a>
          </div>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <article className="article-body">
            {/* ============ AEO BLOCK: WHAT IS ============ */}
            <h2 id="what-is-buzzybrains-academy">What Is BuzzyBrains Academy?</h2>
            <div className="answer-block">
              BuzzyBrains Academy is a premium, small-batch coaching institute in Hadapsar, Pune, for students in
              Grades 4-12. It offers Foundation coaching, Maths Excellence, Olympiad training, IIT-JEE and NEET
              preparation, Commerce coaching, international curricula (IGCSE, IB, A Level, AP, SAT), and a coding
              &amp; AI program called Code Ninja — every batch capped at 12 students, led by founder Dilip Sah, an
              IIT Kanpur and IIM Ahmedabad alumnus.
            </div>
            <p>
              Most coaching institutes in Pune fall into one of two categories: large exam-factory chains that pack
              40-60 students into a batch, or small local tuition classes that cover only board syllabus without
              depth in competitive exams. BuzzyBrains Academy was built to sit between the two — the academic rigor
              of a serious JEE/NEET institute, delivered in a batch size small enough that a mentor actually knows
              each student's specific gaps.
            </p>
            <p>
              The academy opened in 2021 in a small rented space in Hadapsar with 8 students. By 2022, its first
              batch scored 85-92% in board exams; by 2023, its first student qualified JEE. Today it runs from two
              centers in Amanora, Hadapsar, and works with students from across Pune, both in person and online.
            </p>
            <h3>A Real Example</h3>
            <p>
              Consider a Grade 9 student who is comfortable with school Maths but freezes on multi-step Olympiad or
              JEE-style problems. In a 50-student batch, that student's specific confusion rarely gets addressed
              directly — the class simply moves on. In a 12-student batch, a mentor can pause on that exact gap,
              re-explain the underlying concept a different way, and confirm the student has actually understood it
              before moving forward. That difference compounds over years, not weeks.
            </p>
            <h3>Parent Advice</h3>
            <p>
              Before enrolling your child anywhere, ask two direct questions: what is the maximum batch size, and how
              will you know — specifically, not vaguely — how your child is progressing each week? An institute that
              cannot answer both clearly is not set up to give individual attention, no matter how impressive its
              results wall looks.
            </p>
            <h3>Student Benefit</h3>
            <p>
              A smaller batch means more time to ask "why," not just "how." Over a full academic year, that adds up
              to genuine conceptual confidence rather than a memorized set of problem patterns that fall apart the
              moment an exam asks something slightly unfamiliar.
            </p>
            <h3>Common Mistake to Avoid</h3>
            <p>
              Do not choose a coaching institute based on its biggest batch's toppers alone — a large batch can
              produce a handful of exceptional results while the average student gets lost in the crowd. Ask what
              happens for a student in the middle of the batch, not just the top.
            </p>
            <h3>Key Takeaways</h3>
            <ul>
              <li>BuzzyBrains Academy serves Grades 4-12 across Foundation, Olympiad, JEE/NEET, Commerce and international curricula.</li>
              <li>Every batch is capped at 12 students — a fixed limit, not a marketing claim.</li>
              <li>Founded in 2021 by Dilip Sah (IIT Kanpur, IIM Ahmedabad), based in Amanora, Hadapsar, Pune.</li>
              <li>Both offline (Hadapsar centers) and online classes are available.</li>
            </ul>

            {/* ============ WHY PARENTS CHOOSE ============ */}
            <h2 id="why-parents-choose-buzzybrains">Why Parents in Pune Choose BuzzyBrains Academy</h2>
            <p>
              Parents researching coaching institutes in Hadapsar, Amanora, Magarpatta and Kharadi are usually
              solving the same underlying problem: their child either needs stronger fundamentals before board or
              competitive exams, or is already stretched thin in a large batch where questions go unanswered.
              BuzzyBrains Academy addresses this directly, not through a bigger syllabus, but through a smaller
              room.
            </p>
            <ul>
              <li><strong>Small batches, real mentoring</strong> — a hard cap of 12 students per batch, across every program.</li>
              <li><strong>IITian and IIM-alumni-led faculty</strong> — starting with founder Dilip Sah, who personally teaches Mathematics.</li>
              <li><strong>Concept-first teaching</strong> — built around understanding, not memorized problem patterns.</li>
              <li><strong>Weekly assessments</strong> — continuous tracking instead of relying on term-end exams alone.</li>
              <li><strong>Transparent parent updates</strong> — regular, specific progress reports, not just a report card.</li>
              <li><strong>Technology-enabled learning</strong> — interactive digital classrooms and AI-assisted practice tools.</li>
            </ul>

            {/* ============ PROGRAMS TABLE ============ */}
            <h2 id="programs-offered">Programs Offered at BuzzyBrains Academy</h2>
            <p>
              BuzzyBrains Academy runs ten distinct programs across Grades 4-12, covering Indian boards (CBSE, ICSE,
              State Board), international curricula (IGCSE, IB, A Level, AP), competitive exams (JEE, NEET,
              Olympiads, SAT), Commerce, and a dedicated coding &amp; AI track. Every program shares the same
              12-student batch cap and concept-first teaching approach.
            </p>
            <div className="table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Grades</th>
                    <th>Boards / Curricula</th>
                    <th>Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {PROGRAM_TABLE.map((p) => (
                    <tr key={p.program}>
                      <td><Link href={p.href}>{p.program}</Link></td>
                      <td>{p.grades}</td>
                      <td>{p.boards}</td>
                      <td>{p.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ============ METHODOLOGY ============ */}
            <h2 id="teaching-methodology">Teaching Methodology: How BuzzyBrains Academy Actually Teaches</h2>
            <p>
              BuzzyBrains Academy's teaching method is built on concept building rather than rote memorization. Every
              topic is introduced through a real-world hook or puzzle, explained visually until the underlying idea
              is genuinely clear, practiced through progressively harder problems, and then tested through weekly
              assessments — a cycle closer to Bloom's Taxonomy's progression from understanding to application to
              analysis than to a typical "solve these 50 questions" tuition model.
            </p>
            <ul>
              <li><strong>Discover</strong> — every topic opens with a real-world hook, not a formula.</li>
              <li><strong>Understand</strong> — visual explanations and first-principles teaching build genuine intuition.</li>
              <li><strong>Practice</strong> — problem sets that scale from basic to Olympiad-level, with AI-assisted practice tools.</li>
              <li><strong>Excel</strong> — weekly tests and analytics translate mastery into board results, ranks and medals.</li>
            </ul>
            <p>
              This approach deliberately builds critical thinking, logical reasoning and analytical thinking as
              transferable skills — not just exam-specific tricks — because these are the same skills STEM education,
              competitive exams and future careers in engineering, medicine, technology and AI all actually reward.
            </p>

            {/* ============ FOUNDER ============ */}
            <h2 id="founder-dilip-sah">Meet the Founder: Dilip Sah</h2>
            <p>
              BuzzyBrains Academy was founded in 2021 by Dilip Sah, an alumnus of IIT Kanpur, where he cleared JEE
              with an All India Rank of 400, and IIM Ahmedabad. Before starting the academy, he spent 25+ years in
              technology leadership roles. He personally teaches Mathematics at the academy and shapes its
              concept-first teaching philosophy across every program.
            </p>
            <p>
              His background matters practically, not just as a credential: an engineering education combined with
              25+ years of building and leading technology teams means the academy's use of AI-assisted learning
              tools, digital classrooms and progress analytics is led by someone who has actually built technology
              products — not bolted on as a marketing feature.
            </p>
            <p>
              <Link href="/about" className="chip chip-link">Read the full BuzzyBrains Academy story →</Link>
            </p>

            {/* ============ FACULTY ============ */}
            <h2 id="faculty">Faculty at BuzzyBrains Academy</h2>
            <p>
              Beyond the founder, BuzzyBrains Academy's teaching team includes IIT and IISER alumni and subject
              specialists across Physics, Chemistry, Biology and Mathematics:
            </p>
            <ul>
              <li><strong>Dilip Sir</strong> — Mathematics; IIT Kanpur, IIM Ahmedabad, JEE AIR 400.</li>
              <li><strong>Sourav Sir</strong> — Physics; IIT Bombay.</li>
              <li><strong>Agarwal Sir</strong> — Chemistry; PhD in Education Psychology, IIT Bombay, B.Tech Chemical Engineering, ICT Mumbai.</li>
              <li><strong>Dr. Todkar</strong> — Biology; NEET Biology specialist.</li>
              <li><strong>Dr. Urmila</strong> — Chemistry; PhD, IISER Pune.</li>
              <li><strong>Dr. Mrinmayee</strong> — Chemistry; PhD, IISER Pune.</li>
              <li><strong>Shivangi Saxena</strong> — Chemistry; BE, MIT.</li>
              <li><strong>Dr. Aditi</strong> — Biology; AIIMS, medical specialist.</li>
            </ul>

            {/* ============ BOARD COMPARISON ============ */}
            <h2 id="cbse-vs-icse-vs-igcse-vs-ib">CBSE vs ICSE vs IGCSE vs IB: A Quick Comparison</h2>
            <p>
              Parents choosing between boards for a younger child, or evaluating whether an older child is on the
              right track, often ask how CBSE, ICSE, IGCSE and IB actually differ. Here is a direct comparison:
            </p>
            <div className="table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>CBSE</th>
                    <th>ICSE</th>
                    <th>IGCSE</th>
                    <th>IB</th>
                  </tr>
                </thead>
                <tbody>
                  {BOARD_COMPARISON.map((row) => (
                    <tr key={row.aspect}>
                      <td>{row.aspect}</td>
                      <td>{row.cbse}</td>
                      <td>{row.icse}</td>
                      <td>{row.igcse}</td>
                      <td>{row.ib}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              BuzzyBrains Academy teaches across all of these boards, so a family does not need to switch institutes
              if they change schools or move between curricula. <Link href="/international-boards" className="chip chip-link">Explore International Boards coaching →</Link>
            </p>

            {/* ============ STUDENT JOURNEY ============ */}
            <h2 id="student-journey">The Student Journey at BuzzyBrains Academy</h2>
            <ul>
              <li><strong>1. Admission</strong> — meet a counsellor, tour the center, and pick the right program.</li>
              <li><strong>2. Diagnostic assessment</strong> — a no-marks assessment maps current strengths and gaps.</li>
              <li><strong>3. Personal learning plan</strong> — mentors design a roadmap tailored to your child's pace and targets.</li>
              <li><strong>4. Weekly coaching</strong> — interactive classes, doubt sessions and adaptive practice.</li>
              <li><strong>5. Performance tracking</strong> — weekly tests plus transparent parent updates.</li>
              <li><strong>6. Results</strong> — board results, Olympiad medals, and JEE/NEET readiness built over time, not crammed at the end.</li>
            </ul>

            {/* ============ COMMON MISTAKES ============ */}
            <h2 id="common-mistakes-choosing-coaching">Common Mistakes Parents Make When Choosing a Coaching Institute</h2>
            <div className="tip-grid">
              {COMMON_MISTAKES.map((m) => (
                <div className="tip-card mistake" key={m.title}>
                  <span className="tip-card-icon">⚠️</span>
                  <p><strong>{m.title}</strong>{m.text}</p>
                </div>
              ))}
            </div>

            {/* ============ PARENT TIPS ============ */}
            <h2 id="parent-tips">Tips for Parents</h2>
            <div className="tip-grid">
              {PARENT_TIPS.map((t) => (
                <div className="tip-card tip" key={t.title}>
                  <span className="tip-card-icon">💡</span>
                  <p><strong>{t.title}</strong>{t.text}</p>
                </div>
              ))}
            </div>

            {/* ============ STUDENT TIPS ============ */}
            <h2 id="student-tips">Tips for Students</h2>
            <div className="tip-grid">
              {STUDENT_TIPS.map((t) => (
                <div className="tip-card tip" key={t.title}>
                  <span className="tip-card-icon">🎯</span>
                  <p><strong>{t.title}</strong>{t.text}</p>
                </div>
              ))}
            </div>

            {/* ============ LOCAL AREAS ============ */}
            <h2 id="areas-served">Areas We Serve in Pune</h2>
            <p>
              BuzzyBrains Academy's two centers are both in Amanora, Hadapsar. Students commute from across nearby
              localities, and many join online when a daily commute is not practical:
            </p>
            <div className="hero-chips" style={{ marginBottom: 8 }}>
              {LOCALITIES.map((loc) => (
                <span className="chip" key={loc}><i className="dot" style={{ background: 'var(--blue)' }} /> {loc}</span>
              ))}
            </div>
            <p>
              <Link href="/coaching-in-amanora" className="chip chip-link">Coaching in Amanora →</Link>{' '}
              <Link href="/coaching-in-kharadi" className="chip chip-link">Coaching in Kharadi →</Link>
            </p>
          </article>

          {/* ============ CTA ============ */}
          <div className="article-cta">
            <p>Ready to see the small-batch difference for yourself?</p>
            <Link href="/#contact" className="btn btn-primary">Book a Free Demo Class</Link>
          </div>

          {/* ============ FAQ ============ */}
          <div className="article-faq">
            <h2>Frequently Asked Questions</h2>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          {/* ============ INTERNAL LINKS ============ */}
          <div style={{ marginTop: 56 }}>
            <div className="blog-cluster-head">
              <h2>Explore More</h2>
              <Link href="/blog">All guides →</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Link href="/about" className="chip chip-link">About BuzzyBrains Academy</Link>
              <Link href="/foundation" className="chip chip-link">Foundation Programme</Link>
              <Link href="/olympiads" className="chip chip-link">Olympiad Coaching</Link>
              <Link href="/olympiad-math" className="chip chip-link">Maths Excellence</Link>
              <Link href="/12th-board-pcm" className="chip chip-link">IIT-JEE Coaching</Link>
              <Link href="/12th-board-pcb" className="chip chip-link">NEET Coaching</Link>
              <Link href="/commerce-tuitions" className="chip chip-link">Commerce Coaching</Link>
              <Link href="/coding-lab" className="chip chip-link">Code Ninja (Coding & AI)</Link>
              <Link href="/international-boards" className="chip chip-link">IGCSE / IB / AP / SAT</Link>
              <Link href="/admissions" className="chip chip-link">Admissions & Scholarships</Link>
              <Link href="/blog" className="chip chip-link">Blog</Link>
              <Link href="/contact" className="chip chip-link">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
