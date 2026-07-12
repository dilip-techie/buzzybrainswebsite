'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { BLOG_POSTS, CATEGORY_LABELS, CATEGORY_PILLAR_HREF, CATEGORY_STYLE, type BlogCategory } from './_data/posts';

const CATEGORY_ORDER: BlogCategory[] = [
  'iit-jee',
  'neet',
  'commerce',
  'foundation',
  'olympiad',
  'maths-tuition',
  'international-sat',
  'coding',
];

const POSTS_BY_DATE = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | BlogCategory>('all');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeCategory]);

  const featured = POSTS_BY_DATE[0];
  const rest = POSTS_BY_DATE.slice(1);

  const categoriesWithPosts = useMemo(
    () => CATEGORY_ORDER.filter((category) => BLOG_POSTS.some((post) => post.category === category)),
    []
  );
  const categoriesWithoutPosts = useMemo(
    () => CATEGORY_ORDER.filter((category) => !BLOG_POSTS.some((post) => post.category === category)),
    []
  );

  const visiblePosts = activeCategory === 'all' ? rest : rest.filter((post) => post.category === activeCategory);
  const featuredVisible = activeCategory === 'all' || featured.category === activeCategory;

  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 24 }}>
        <div className="container center">
          <span className="eyebrow reveal">The BuzzyBrains Academy Blog</span>
          <h1 className="reveal" data-delay="1">Guides that go deeper than a syllabus PDF.</h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 640 }}>
            Written by our IIT/IIM alumni faculty for students and parents preparing for IIT-JEE, NEET, Commerce, Olympiads, Foundation years and more.
          </p>
          <div className="blog-stat-row reveal" data-delay="3">
            <span><b>{BLOG_POSTS.length}</b> guides published</span>
            <span className="blog-stat-dot" aria-hidden="true" />
            <span><b>{categoriesWithPosts.length}</b> subject tracks</span>
            <span className="blog-stat-dot" aria-hidden="true" />
            <span>Updated {formatDate(POSTS_BY_DATE[0].datePublished)}</span>
          </div>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-filter-tabs reveal" data-delay="4" role="tablist" aria-label="Filter guides by subject">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`blog-filter-tab${activeCategory === 'all' ? ' active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Guides
            </button>
            {categoriesWithPosts.map((category) => {
              const style = CATEGORY_STYLE[category];
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`blog-filter-tab${active ? ' active' : ''}`}
                  style={active ? { background: style.gradient, borderColor: 'transparent', color: '#fff' } : undefined}
                  onClick={() => setActiveCategory(category)}
                >
                  {CATEGORY_LABELS[category]}
                </button>
              );
            })}
          </div>

          {featuredVisible && (
            <Link href={`/blog/${featured.slug}`} className="blog-featured reveal">
              <div className="blog-featured-accent" style={{ background: CATEGORY_STYLE[featured.category].gradient }} />
              <div className="blog-featured-body">
                <span className="blog-featured-tag" style={{ background: CATEGORY_STYLE[featured.category].gradient }}>
                  Latest &middot; {CATEGORY_LABELS[featured.category]}
                </span>
                <h2>{featured.title}</h2>
                <p>{featured.description}</p>
                <div className="blog-card-meta">
                  <span>{formatDate(featured.datePublished)}</span>
                  <span className="blog-stat-dot" aria-hidden="true" />
                  <span><Clock size={13} /> {featured.readingMinutes} min read</span>
                </div>
              </div>
              <span className="blog-featured-arrow" aria-hidden="true">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          )}

          {visiblePosts.length > 0 && (
            <div className="blog-grid blog-grid-rich">
              {visiblePosts.map((post, i) => {
                const style = CATEGORY_STYLE[post.category];
                return (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-card blog-card-rich reveal"
                    data-delay={String((i % 3) + 1)}
                    key={post.slug}
                  >
                    <div className="blog-card-accent" style={{ background: style.gradient }} />
                    <span className="blog-card-cat" style={{ color: style.solid }}>{CATEGORY_LABELS[post.category]}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="blog-card-meta">
                      <span>{formatDate(post.datePublished)}</span>
                      <span className="blog-stat-dot" aria-hidden="true" />
                      <span><Clock size={12} /> {post.readingMinutes} min</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {visiblePosts.length === 0 && !featuredVisible && (
            <div className="blog-cluster-empty">More {CATEGORY_LABELS[activeCategory as BlogCategory]} guides are on the way.</div>
          )}

          {activeCategory === 'all' && categoriesWithoutPosts.length > 0 && (
            <div className="blog-coming-soon reveal">
              <span>More guides coming soon:</span>
              <div className="blog-coming-soon-links">
                {categoriesWithoutPosts.map((category) => (
                  <Link key={category} href={CATEGORY_PILLAR_HREF[category]} className="chip chip-link">
                    {CATEGORY_LABELS[category]}
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
