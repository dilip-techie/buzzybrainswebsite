import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock } from 'lucide-react';
import { ArticleJsonLd, FaqJsonLd } from '../../../components/JsonLd';
import { BLOG_POSTS, CATEGORY_LABELS, CATEGORY_STYLE, getPostBySlug, type BlogPost } from '../_data/posts';
import { ReadingProgress } from '../_components/ReadingProgress';
import { ShareBar } from '../_components/ShareBar';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | BuzzyBrains Academy`,
    description: post.description,
    alternates: { canonical: `https://buzzybrainsacademy.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://buzzybrainsacademy.com/blog/${post.slug}`,
      siteName: 'BuzzyBrains Academy',
      type: 'article',
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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

          <ShareBar title={post.title} />

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
