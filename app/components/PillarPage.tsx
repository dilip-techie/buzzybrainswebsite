import Link from 'next/link';

export type ContentBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; text: string }
  | { kind: 'ul'; items: string[] };

export interface PillarLink {
  href: string;
  label: string;
}

export function PillarPage({
  eyebrow,
  h1,
  lede,
  body,
  faq,
  primaryProgram,
  secondaryPrograms = [],
  relatedPosts = [],
}: {
  eyebrow: string;
  h1: React.ReactNode;
  lede: string;
  body: ContentBlock[];
  faq: { question: string; answer: string }[];
  primaryProgram: PillarLink;
  secondaryPrograms?: PillarLink[];
  relatedPosts?: PillarLink[];
}) {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container article-shell center">
          <nav className="blog-breadcrumb reveal" aria-label="Breadcrumb" style={{ justifyContent: 'center' }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>{eyebrow}</span>
          </nav>
          <span className="eyebrow reveal">{eyebrow}</span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>{h1}</h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 640 }}>{lede}</p>
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

          <div className="article-cta">
            <p>Ready to talk to a mentor about this?</p>
            <Link href={primaryProgram.href} className="btn btn-primary">
              Explore {primaryProgram.label}
            </Link>
          </div>

          {secondaryPrograms.length > 0 && (
            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {secondaryPrograms.map((p) => (
                <Link key={p.href} href={p.href} className="chip chip-link">
                  {p.label}
                </Link>
              ))}
            </div>
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

          {relatedPosts.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <div className="blog-cluster-head">
                <h2>Related reading</h2>
                <Link href="/blog">All guides →</Link>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {relatedPosts.map((p) => (
                  <Link key={p.href} href={p.href} className="chip chip-link">
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
