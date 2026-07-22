import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock } from 'lucide-react';
import { ArticleJsonLd, FaqJsonLd } from '../../../components/JsonLd';
import {
  BLOG_POSTS,
  CATEGORY_LABELS,
  CATEGORY_STYLE,
  getPostBySlug,
  getPostsByCategory,
  type BlogPost,
  type BlogCategory,
} from '../_data/posts';
import { ReadingProgress } from '../_components/ReadingProgress';
import { ShareBar } from '../_components/ShareBar';
import { CategoryPage } from '../_components/CategoryPage';

const CATEGORY_KEYS = Object.keys(CATEGORY_LABELS) as BlogCategory[];

function isBlogCategory(slug: string): slug is BlogCategory {
  return (CATEGORY_KEYS as string[]).includes(slug);
}

export function generateStaticParams() {
  const postParams = BLOG_POSTS.map((post) => ({ slug: post.slug }));
  const categoryParams = CATEGORY_KEYS.map((category) => ({ slug: category }));
  return [...postParams, ...categoryParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (isBlogCategory(slug)) {
    const { CATEGORY_CONTENT } = await import('../_data/categoryContent');
    const content = CATEGORY_CONTENT[slug];
    const url = `https://buzzybrainsacademy.com/blog/${slug}`;
    const ogImage = `https://buzzybrainsacademy.com/images/og/category-${slug}.png`;
    return {
      title: `${content.metaTitle} | BuzzyBrains Academy`,
      description: content.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        title: content.h1,
        description: content.metaDescription,
        url,
        siteName: 'BuzzyBrains Academy',
        type: 'website',
        images: [{ url: ogImage, width: 1200, height: 630, alt: content.h1 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: content.h1,
        description: content.metaDescription,
        images: [ogImage],
      },
    };
  }

  const post = getPostBySlug(slug);
  if (!post) return {};
  const ogImage = `https://buzzybrainsacademy.com/images/og/${post.slug}.png`;
  return {
    title: `${post.title} | BuzzyBrains Academy`,
    description: `IITian Mentorship. Gateway to Top IITs and AIIMS. ${post.description}`,
    alternates: { canonical: `https://buzzybrainsacademy.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://buzzybrainsacademy.com/blog/${post.slug}`,
      siteName: 'BuzzyBrains Academy',
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

function relatedPosts(current: BlogPost): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === current.category && post.slug !== current.slug).slice(0, 3);
}

function headingSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Parses **bold**, [text](url) and *italic* markdown syntax within a plain
 * text string into React nodes. Text with no markdown syntax passes through
 * unchanged. */
function renderInline(text: string): ReactNode[] {
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)|\*(.+?)\*/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      const href = match[3];
      const isInternal = href.startsWith('/');
      nodes.push(
        isInternal ? (
          <Link key={key++} href={href}>
            {match[2]}
          </Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
            {match[2]}
          </a>
        )
      );
    } else if (match[4] !== undefined) {
      nodes.push(<em key={key++}>{match[4]}</em>);
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (isBlogCategory(slug)) {
    return <CategoryPage category={slug} posts={getPostsByCategory(slug)} />;
  }

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = relatedPosts(post);
  const style = CATEGORY_STYLE[post.category];
  const headings = post.body.filter((block): block is { kind: 'h2'; text: string } => block.kind === 'h2');

  return (
    <main className="bb-landing bb-page-shell">
      <ReadingProgress />
      <ArticleJsonLd
        type="BlogPosting"
        headline={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        breadcrumbName={post.title}
      />
      {post.faq && <FaqJsonLd items={post.faq} />}

      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb reveal" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{CATEGORY_LABELS[post.category]}</span>
          </nav>
          <span className="article-cat-badge reveal" style={{ background: style.gradient }}>
            {CATEGORY_LABELS[post.category]}
          </span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>{post.title}</h1>
          <div className="article-meta">
            <span className="article-byline">
              <span className="article-byline-avatar" style={{ background: style.gradient }}>BB</span>
              BuzzyBrains Academy Faculty
            </span>
            <span>{new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span><Clock size={13} style={{ verticalAlign: -2, marginRight: 3 }} />{post.readingMinutes} min read</span>
          </div>
          <img
            className="article-hero-image reveal"
            src={`/images/og/${post.slug}.png`}
            alt={post.title}
            width={1200}
            height={630}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          {headings.length >= 3 && (
            <div className="article-toc">
              <span className="article-toc-label">In this guide</span>
              <ol>
                {headings.map((h) => (
                  <li key={h.text}>
                    <a href={`#${headingSlug(h.text)}`}>{h.text}</a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <article className="article-body">
            {post.body.map((block, i) => {
              if (block.kind === 'h2') return <h2 key={i} id={headingSlug(block.text)}>{block.text}</h2>;
              if (block.kind === 'h3') return <h3 key={i}>{renderInline(block.text)}</h3>;
              if (block.kind === 'answer') return <div key={i} className="answer-block">{renderInline(block.text)}</div>;
              if (block.kind === 'ul')
                return (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item}>{renderInline(item)}</li>
                    ))}
                  </ul>
                );
              if (block.kind === 'table')
                return (
                  <div key={i} className="table-wrap">
                    <table className="compare-table">
                      <thead>
                        <tr>
                          {block.headers.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci}>{renderInline(cell)}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              return <p key={i}>{renderInline(block.text)}</p>;
            })}
          </article>

          <ShareBar title={post.title} />

          {post.relatedGuides && post.relatedGuides.length > 0 && (
            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {post.relatedGuides.map((g) => (
                <Link key={g.href} href={g.href} className="chip chip-link">
                  {g.label}
                </Link>
              ))}
            </div>
          )}

          <div className="article-cta">
            <p>Want personalized guidance on this? Talk to our {post.relatedProgramLabel} mentors.</p>
            <Link href={post.relatedProgramHref} className="btn btn-primary">
              Explore {post.relatedProgramLabel}
            </Link>
          </div>

          {post.faq && (
            <div className="article-faq">
              <h2>Frequently asked questions</h2>
              {post.faq.map((item) => (
                <div className="article-faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          )}

          {related.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <div className="blog-cluster-head">
                <h2>More in {CATEGORY_LABELS[post.category]}</h2>
                <Link href="/blog">All guides →</Link>
              </div>
              <div className="blog-grid">
                {related.map((r) => {
                  const rStyle = CATEGORY_STYLE[r.category];
                  return (
                    <Link href={`/blog/${r.slug}`} className="blog-card blog-card-rich" key={r.slug}>
                      <div className="blog-card-accent" style={{ background: rStyle.gradient }} />
                      <span className="blog-card-cat" style={{ color: rStyle.solid }}>{CATEGORY_LABELS[r.category]}</span>
                      <h3>{r.title}</h3>
                      <p>{r.description}</p>
                      <span className="blog-card-meta">
                        <span><Clock size={12} /> {r.readingMinutes} min read</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
