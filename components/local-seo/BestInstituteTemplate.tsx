import Link from 'next/link';

export interface FacultyEntry {
  name: string;
  role: string;
  creds: string;
  note: string;
}

export interface BulletEntry {
  title: string;
  text: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface InternalLink {
  href: string;
  label: string;
}

export interface BestInstituteData {
  h1: string;
  heroEyebrow?: string;
  heroLede: string;
  whatIsHeading: string;
  whatIsAnswer: string;
  contextParagraphs: string[];
  whyUsHeading: string;
  whyUsIntro: string;
  whyUsBullets: BulletEntry[];
  infoTableHeading: string;
  infoTableIntro: string;
  infoTableHeaders: string[];
  infoTableRows: string[][];
  facultyHeading: string;
  facultyIntro: string;
  faculty: FacultyEntry[];
  commonMistakesHeading: string;
  commonMistakes: BulletEntry[];
  faqs: FaqEntry[];
  ctaText: string;
  internalLinks: InternalLink[];
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function BestInstituteTemplate({ data }: { data: BestInstituteData }) {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero">
        <div className="container article-shell center">
          <span className="eyebrow">{data.heroEyebrow ?? '📍 Amanora, Hadapsar, Pune'}</span>
          <h1 style={{ fontSize: 'clamp(30px,4.4vw,50px)' }}>{data.h1}</h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            {data.heroLede}
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
            <h2 id={slugifyHeading(data.whatIsHeading)}>{data.whatIsHeading}</h2>
            <div className="answer-block">{data.whatIsAnswer}</div>
            {data.contextParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 id={slugifyHeading(data.whyUsHeading)}>{data.whyUsHeading}</h2>
            <p>{data.whyUsIntro}</p>
            <ul>
              {data.whyUsBullets.map((b) => (
                <li key={b.title}>
                  <strong>{b.title}</strong> — {b.text}
                </li>
              ))}
            </ul>

            <h2 id={slugifyHeading(data.infoTableHeading)}>{data.infoTableHeading}</h2>
            <p>{data.infoTableIntro}</p>
            <div className="table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    {data.infoTableHeaders.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.infoTableRows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id={slugifyHeading(data.facultyHeading)}>{data.facultyHeading}</h2>
            <p>{data.facultyIntro}</p>
            <ul>
              {data.faculty.map((f) => (
                <li key={f.name}>
                  <strong>{f.name}</strong> — {f.role}; {f.creds}. {f.note}
                </li>
              ))}
            </ul>

            <h2 id={slugifyHeading(data.commonMistakesHeading)}>{data.commonMistakesHeading}</h2>
            <div className="tip-grid">
              {data.commonMistakes.map((m) => (
                <div className="tip-card mistake" key={m.title}>
                  <span className="tip-card-icon">⚠️</span>
                  <p><strong>{m.title}</strong> {m.text}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="article-cta">
            <p>{data.ctaText}</p>
            <Link prefetch={false} href="/#contact" className="btn btn-primary">Book a Free Demo Class</Link>
          </div>

          <div className="article-faq">
            <h2>Frequently Asked Questions</h2>
            {data.faqs.map((item) => (
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
              {data.internalLinks.map((l) => (
                <Link prefetch={false} key={l.href} href={l.href} className="chip chip-link">
                  {l.label}
                </Link>
              ))}
              <Link prefetch={false} href="/best-coaching-institute-pune" className="chip chip-link">
                Best Coaching Institute in Pune — Full Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
