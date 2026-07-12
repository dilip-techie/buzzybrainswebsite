import Link from 'next/link';
import { BLOG_POSTS, CATEGORY_LABELS, CATEGORY_PILLAR_HREF, type BlogCategory } from './_data/posts';

const CATEGORY_ORDER: BlogCategory[] = [
  'iit-jee',
  'neet',
  'foundation',
  'olympiad',
  'maths-tuition',
  'international-sat',
  'coding',
];

export default function BlogIndexPage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero">
        <div className="container center">
          <span className="eyebrow">The BuzzyBrains Academy Blog</span>
          <h1>Guides that go deeper than a syllabus PDF.</h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 640 }}>
            Written by our IIT/IIM alumni faculty for students and parents preparing for IIT-JEE, NEET, Olympiads, Foundation years and more.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-cluster">
            {CATEGORY_ORDER.map((category) => {
              const posts = BLOG_POSTS.filter((post) => post.category === category);
              return (
                <div key={category}>
                  <div className="blog-cluster-head">
                    <h2>{CATEGORY_LABELS[category]}</h2>
                    <Link href={CATEGORY_PILLAR_HREF[category]}>View program →</Link>
                  </div>
                  {posts.length === 0 ? (
                    <div className="blog-cluster-empty">More {CATEGORY_LABELS[category]} guides are on the way.</div>
                  ) : (
                    <div className="blog-grid">
                      {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                          <span className="blog-card-cat">{CATEGORY_LABELS[post.category]}</span>
                          <h3>{post.title}</h3>
                          <p>{post.description}</p>
                          <span className="blog-card-meta">
                            <span>{post.readingMinutes} min read</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
