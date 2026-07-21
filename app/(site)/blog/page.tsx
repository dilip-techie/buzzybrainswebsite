'use client';

import Link from 'next/link';
import { useEffect, useMemo } from 'react';
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
  }, []);

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

  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 24 }}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal">The BuzzyBrains Academy Blog</span>
            <h1 className="reveal" data-delay="1">Guides that go deeper than a syllabus PDF.</h1>
            <p className="lede reveal" data-delay="2">
              Written by our IIT/IIM alumni faculty for students and parents preparing for IIT-JEE, NEET, Commerce, Olympiads, Foundation years and more.
            </p>
            <div className="hero-ctas reveal" data-delay="3">
              <Link href="/#contact" className="btn btn-primary">
                Book Free Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a href="#guides" className="btn btn-ghost">Browse Guides</a>
            </div>
            <div className="blog-stat-row reveal" data-delay="4">
              <span><b>{BLOG_POSTS.length}</b> guides published</span>
              <span className="blog-stat-dot" aria-hidden="true" />
              <span><b>{categoriesWithPosts.length}</b> subject tracks</span>
              <span className="blog-stat-dot" aria-hidden="true" />
              <span>Updated {formatDate(POSTS_BY_DATE[0].datePublished)}</span>
            </div>
          </div>

          <div className="hero-visual reveal" data-delay="2">
            <div className="hero-visual-flex">
              <div className="board" role="img" aria-label="Illustration of a BuzzyBrains Academy blog guide open in a browser, with subject tags for Foundation and IIT-JEE floating around it">
                <div className="board-top">
                  <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
                  <span className="board-tag">Guide · 12 min read</span>
                </div>
                <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="blogBgGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
                    </linearGradient>
                    <linearGradient id="blogCardGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#1E293B" /><stop offset="1" stopColor="#0F172A" />
                    </linearGradient>
                  </defs>
                  <rect width="520" height="340" rx="16" fill="url(#blogBgGrad)" />

                  {/* Article card mockup */}
                  <rect x="36" y="30" width="308" height="280" rx="14" fill="url(#blogCardGrad)" stroke="#334155" strokeWidth="1.5" />
                  <rect x="56" y="54" width="86" height="20" rx="10" fill="#F59E0B" opacity="0.9" />
                  <text x="70" y="68" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="10.5" fill="#0F172A">FOUNDATION</text>
                  <rect x="56" y="90" width="248" height="14" rx="4" fill="#E2E8F0" opacity="0.92" />
                  <rect x="56" y="110" width="180" height="14" rx="4" fill="#E2E8F0" opacity="0.7" />
                  <rect x="56" y="140" width="248" height="7" rx="3.5" fill="#94A3B8" opacity="0.55" />
                  <rect x="56" y="156" width="248" height="7" rx="3.5" fill="#94A3B8" opacity="0.55" />
                  <rect x="56" y="172" width="164" height="7" rx="3.5" fill="#94A3B8" opacity="0.55" />
                  {/* answer-block style callout */}
                  <rect x="56" y="196" width="248" height="52" rx="6" fill="#1D2B48" />
                  <rect x="56" y="196" width="4" height="52" rx="2" fill="#3B82F6" />
                  <rect x="70" y="208" width="216" height="7" rx="3.5" fill="#BFDBFE" opacity="0.8" />
                  <rect x="70" y="222" width="180" height="7" rx="3.5" fill="#BFDBFE" opacity="0.6" />
                  <rect x="70" y="236" width="140" height="7" rx="3.5" fill="#BFDBFE" opacity="0.4" />
                  <rect x="56" y="266" width="122" height="26" rx="13" fill="#F59E0B" />
                  <text x="76" y="283" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="11" fill="#0F172A">Read guide →</text>

                  {/* Floating subject badges */}
                  <g transform="translate(420 76)">
                    <circle r="34" fill="#1E3A8A" />
                    <path d="M-16 -4 0 -12 16 -4 0 4 -16 -4Z" fill="#93C5FD" />
                    <path d="M-9 0 -9 10 Q0 16 9 10 L9 0" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <text x="420" y="122" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="10.5" fill="#93C5FD">Foundation</text>

                  <g transform="translate(462 178)">
                    <circle r="30" fill="#134E4A" />
                    <ellipse rx="24" ry="9" fill="none" stroke="#5EEAD4" strokeWidth="2" />
                    <ellipse rx="24" ry="9" fill="none" stroke="#5EEAD4" strokeWidth="2" transform="rotate(60)" />
                    <ellipse rx="24" ry="9" fill="none" stroke="#5EEAD4" strokeWidth="2" transform="rotate(120)" />
                    <circle r="4.5" fill="#5EEAD4" />
                  </g>
                  <text x="462" y="220" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="10.5" fill="#5EEAD4">IIT-JEE</text>

                  <g transform="translate(468 40)">
                    <circle r="20" fill="#7C2D12" />
                    <circle r="8" fill="none" stroke="#FDBA74" strokeWidth="2.2" cy="-3" />
                    <path d="M-6 4 -9 15 0 10 9 15 6 4" fill="#FDBA74" />
                  </g>

                  <path d="M368 90 Q392 90 404 100" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 4" />
                  <path d="M368 160 Q400 168 418 178" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 4" />
                </svg>
              </div>
            </div>

            <div className="float-card float-card-highlight fc-1">
              <span className="fc-icon" style={{ background: 'rgba(96,165,250,.28)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              </span>
              <div>
                <b>{BLOG_POSTS.length}+ In-Depth Guides</b>
              </div>
            </div>
            <div className="float-card fc-2">
              <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#10B981,#059669)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg>
              </span>
              <div><b>Written by IIT Faculty</b><small>Dilip Sah · IIT Kanpur</small></div>
            </div>
            <div className="float-card fc-3">
              <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#F59E0B,#D97706)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
              </span>
              <div><b>{categoriesWithPosts.length} Subject Tracks</b><small>Updated {formatDate(POSTS_BY_DATE[0].datePublished)}</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bb-section" id="guides" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-filter-tabs reveal" data-delay="4" aria-label="Browse guides by subject">
            <Link href="/blog" className="blog-filter-tab active">
              All Guides
            </Link>
            {categoriesWithPosts.map((category) => (
              <Link key={category} href={`/blog/${category}`} className="blog-filter-tab">
                {CATEGORY_LABELS[category]}
              </Link>
            ))}
          </div>

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

          {rest.length > 0 && (
            <div className="blog-grid blog-grid-rich">
              {rest.map((post, i) => {
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

          {categoriesWithoutPosts.length > 0 && (
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
