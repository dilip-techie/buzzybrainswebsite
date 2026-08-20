import Link from 'next/link';
import type { ContentBlock, PillarLink } from './PillarPage';

export function LocationPage({
  locality,
  h1,
  lede,
  body,
  faq,
  programLinks,
  pillarLinks,
  nearbyLocalities = [],
}: {
  locality: string;
  h1: React.ReactNode;
  lede: string;
  body: ContentBlock[];
  faq: { question: string; answer: string }[];
  programLinks: PillarLink[];
  pillarLinks: PillarLink[];
  nearbyLocalities?: PillarLink[];
}) {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container article-shell center">
          <span className="eyebrow reveal">Coaching in {locality}, Pune</span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>{h1}</h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 640 }}>{lede}</p>
          <div className="hero-ctas reveal" style={{ justifyContent: 'center', marginTop: 20 }}>
            <Link prefetch={false} href="/admissions" className="btn btn-primary">Book Free Demo</Link>
            <a href="tel:+919850570525" className="btn btn-ghost">Call Us</a>
          </div>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <article className="article-body">
            {body.map((block, i) => {
              if (block.kind === 'h2') return <h2 key={i}>{block.text}</h2>;
              if (block.kind === 'ul')
                return (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </article>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginTop: 40, marginBottom: 14 }}>
            Programs available for {locality} students
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
            {programLinks.map((p) => (
              <Link prefetch={false} key={p.href} href={p.href} className="chip chip-link">
                {p.label}
              </Link>
            ))}
          </div>

          {pillarLinks.length > 0 && (
            <>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginTop: 32, marginBottom: 14 }}>
                Guides that may help
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {pillarLinks.map((p) => (
                  <Link prefetch={false} key={p.href} href={p.href} className="chip chip-link">
                    {p.label}
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="article-faq">
            <h2>Frequently asked questions</h2>
            {faq.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          {nearbyLocalities.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, marginBottom: 12 }}>
                We also serve nearby areas
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {nearbyLocalities.map((p) => (
                  <Link prefetch={false} key={p.href} href={p.href} className="chip chip-link">
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
