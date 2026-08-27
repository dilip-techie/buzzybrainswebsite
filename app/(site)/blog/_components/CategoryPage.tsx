import Link from 'next/link';
import Image from 'next/image';
import { CollectionPageJsonLd, FaqJsonLd } from '../../../components/JsonLd';
import { CATEGORY_LABELS, CATEGORY_PILLAR_HREF, CATEGORY_STYLE, type BlogCategory, type BlogPost } from '../_data/posts';
import { CATEGORY_CONTENT } from '../_data/categoryContent';
import { BlogCard } from './BlogCard';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function CategoryPage({ category, posts }: { category: BlogCategory; posts: BlogPost[] }) {
  const content = CATEGORY_CONTENT[category];
  const style = CATEGORY_STYLE[category];
  const pillarHref = CATEGORY_PILLAR_HREF[category];
  const sorted = [...posts].sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

  return (
    <main className="bb-landing bb-page-shell">
      <CollectionPageJsonLd
        name={content.h1}
        description={content.metaDescription}
        path={`/blog/${category}`}
        breadcrumbName={CATEGORY_LABELS[category]}
        items={sorted.map((p) => ({ title: p.title, path: `/blog/${p.slug}` }))}
      />
      <FaqJsonLd items={content.faqs} />

      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/blog">Blog</Link>
            <span>/</span>
            <span>{CATEGORY_LABELS[category]}</span>
          </nav>
          <span className="article-cat-badge" style={{ background: style.gradient }}>
            {CATEGORY_LABELS[category]}
          </span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>{content.h1}</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            {sorted.length > 0
              ? `${posts.length} ${posts.length === 1 ? 'guide' : 'guides'} · Updated ${formatDate(sorted[0].datePublished)}`
              : 'New content track · Guides coming soon'}
          </p>
          <Image
            className="article-hero-image"
            src={`/images/og/category-${category}.png`}
            alt={content.h1}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <div className="answer-block reveal">{content.quickAnswer}</div>

          {content.intro.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-2)', fontSize: 15.5, lineHeight: 1.75, marginBottom: 16 }}>
              {p}
            </p>
          ))}

          <div className="article-cta" style={{ marginTop: 8, marginBottom: 40 }}>
            <p>Want personalized guidance in {CATEGORY_LABELS[category]}? Talk to our mentors.</p>
            <Link prefetch={false} href={pillarHref} className="btn btn-primary">
              Explore {CATEGORY_LABELS[category]}
            </Link>
          </div>

          {sorted.length > 0 ? (
            <div className="blog-grid blog-grid-rich">
              {sorted.map((post, i) => (
                <BlogCard post={post} key={post.slug} reveal delay={(i % 3) + 1} />
              ))}
            </div>
          ) : (
            <div className="blog-cluster-empty">More {CATEGORY_LABELS[category]} guides are on the way.</div>
          )}

          <div className="article-faq" style={{ marginTop: 56 }}>
            <h2>Frequently asked questions</h2>
            {content.faqs.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          {content.relatedCategories && content.relatedCategories.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <span className="article-toc-label" style={{ display: 'block', marginBottom: 12 }}>Related tracks</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {content.relatedCategories.map((relCat) => {
                  const relStyle = CATEGORY_STYLE[relCat];
                  return (
                    <Link prefetch={false} key={relCat} href={`/blog/${relCat}`} className="chip chip-link">
                      <i className="dot" style={{ background: relStyle.solid }} /> {CATEGORY_LABELS[relCat]}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link prefetch={false} href="/blog" className="chip chip-link">← All guides</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
