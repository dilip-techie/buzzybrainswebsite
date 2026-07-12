import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleJsonLd, FaqJsonLd } from '../../../components/JsonLd';
import { BLOG_POSTS, CATEGORY_LABELS, getPostBySlug, type BlogPost } from '../_data/posts';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = relatedPosts(post);

  return (
    <main className="bb-landing bb-page-shell">
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
          <span className="eyebrow reveal">{CATEGORY_LABELS[post.category]}</span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>{post.title}</h1>
          <div className="article-meta">
            <span>{new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>&middot;</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <article className="article-body">
            {post.body.map((block, i) => {
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
                {related.map((r) => (
                  <Link href={`/blog/${r.slug}`} className="blog-card" key={r.slug}>
                    <span className="blog-card-cat">{CATEGORY_LABELS[r.category]}</span>
                    <h3>{r.title}</h3>
                    <p>{r.description}</p>
                    <span className="blog-card-meta">
                      <span>{r.readingMinutes} min read</span>
                    </span>
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
