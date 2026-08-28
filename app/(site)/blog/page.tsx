'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight, Clock, Atom, Stethoscope, BookOpen, Trophy, Calculator,
  Target, Award, Globe, Compass, Scale, Landmark, Code2, Briefcase, Building2, BarChart3, Swords,
  ClipboardCheck,
  Search, X,
  type LucideIcon,
} from 'lucide-react';
import { CATEGORY_LABELS, CATEGORY_PILLAR_HREF, CATEGORY_STYLE, type BlogCategory } from './_data/categories';
import { BLOG_POSTS_META as BLOG_POSTS } from './_data/posts-meta';
import { FaqJsonLd } from '@/app/components/JsonLd';
import { BlogCard } from './_components/BlogCard';

const BLOG_FAQS = [
  {
    question: 'Who writes the BuzzyBrains Academy blog?',
    answer: "Every guide is written by our IIT/IIM alumni faculty, based on how we actually teach the topic in class — not generic, syndicated exam-prep content.",
  },
  {
    question: 'What subjects does the blog cover?',
    answer: 'IIT-JEE, NEET, Foundation (Grades 6-10), Olympiads, Maths Tuition, SAT, AP, IGCSE, IB, CLAT, Ivy League admissions, Coding, Commerce (CUET/CA Foundation), IPMAT, CAT, coding olympiads, and CBSE/ICSE board exams.',
  },
  {
    question: 'How often is new content added?',
    answer: 'New guides are added regularly across all subject tracks — the blog currently holds 200+ in-depth articles and keeps growing.',
  },
  {
    question: 'Are these guides free to read?',
    answer: 'Yes — every guide on the blog is free, with no signup required.',
  },
];

const CATEGORY_ORDER: BlogCategory[] = [
  'iit-jee',
  'neet',
  'foundation',
  'olympiad',
  'maths-tuition',
  'sat-exam',
  'ap-exam',
  'igcse',
  'ib',
  'commerce',
  'ipmat',
  'cat',
  'coding',
  'coding-olympiad',
  'clat',
  'ivy-colleges',
  'board-exams',
];

const CATEGORY_ICON: Record<BlogCategory, LucideIcon> = {
  'iit-jee': Atom,
  neet: Stethoscope,
  foundation: BookOpen,
  olympiad: Trophy,
  'maths-tuition': Calculator,
  'sat-exam': Target,
  'ap-exam': Award,
  igcse: Globe,
  ib: Compass,
  clat: Scale,
  'ivy-colleges': Landmark,
  coding: Code2,
  commerce: Briefcase,
  ipmat: Building2,
  cat: BarChart3,
  'coding-olympiad': Swords,
  'board-exams': ClipboardCheck,
};

const CATEGORY_BLURB: Record<BlogCategory, string> = {
  'iit-jee': 'JEE Main & Advanced strategy',
  neet: 'NCERT-first Biology, Physics & Chemistry',
  foundation: 'Grade 6–10 conceptual groundwork',
  olympiad: 'IOQM, NSO & competition maths',
  'maths-tuition': 'Advanced problem-solving beyond the syllabus',
  'sat-exam': 'Digital SAT format & scoring',
  'ap-exam': 'Calculus, Computer Science & Physics',
  igcse: 'Cambridge Maths tiers & technique',
  ib: 'AA vs AI, IB Physics, IA strategy',
  clat: "India's national law entrance exam",
  'ivy-colleges': 'Holistic US admissions, honestly explained',
  coding: 'Programming & AI for school students',
  commerce: 'CUET, CA Foundation & B.Com',
  ipmat: '5-year integrated IIM entrance, after Class 12',
  cat: 'MBA/PGP entrance, after graduation',
  'coding-olympiad': 'ZIO, INOI, IOI & competitive programming',
  'board-exams': 'CBSE/ICSE mock papers & examiner-style evaluation',
};

const POSTS_BY_DATE = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
);

/** Rendering all 200+ posts (each now with a thumbnail) on first load makes
 * this the heaviest page on the site. Both the main grid and search results
 * load in batches of this size instead, via a "Load more" button. */
const PAGE_SIZE = 24;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogIndexPage() {
  const [query, setQuery] = useState('');
  const [tickerPaused, setTickerPaused] = useState(false);
  const [gridVisibleCount, setGridVisibleCount] = useState(PAGE_SIZE);
  const [searchVisibleCount, setSearchVisibleCount] = useState(PAGE_SIZE);
  const trimmedQuery = query.trim();
  const isSearching = trimmedQuery.length > 0;

  // A new search query is a new result set — start it back at one page.
  useEffect(() => {
    setSearchVisibleCount(PAGE_SIZE);
  }, [trimmedQuery]);

  const featured = POSTS_BY_DATE[0];
  const rest = POSTS_BY_DATE.slice(1);
  const latestTen = POSTS_BY_DATE.slice(0, 10);

  const categoriesWithPosts = useMemo(
    () => CATEGORY_ORDER.filter((category) => BLOG_POSTS.some((post) => post.category === category)),
    []
  );

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = trimmedQuery.toLowerCase();
    return POSTS_BY_DATE.filter((post) => {
      const haystack = `${post.title} ${post.description} ${CATEGORY_LABELS[post.category]}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [isSearching, trimmedQuery]);

  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero blog-hero-compact">
        <div className="container">
          <div className="blog-hero-top">
            <div>
              <span className="eyebrow">The BuzzyBrains Academy Blog</span>
              <h1>The strategies behind the top ranks,<br />from Master Educators.</h1>
              <p className="lede">
                Written by our IIT/IIM alumni faculty · <b>{BLOG_POSTS.length}</b> guides across{' '}
                <b>{categoriesWithPosts.length}</b> subject tracks · Updated {formatDate(POSTS_BY_DATE[0].datePublished)}
              </p>
            </div>
            <div className="blog-hero-actions">
              <Link prefetch={false} href="/#contact" className="btn btn-primary">
                Book Free Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a href="#all-guides" className="btn btn-ghost">All Guides ↓</a>
            </div>
          </div>
          <div className="blog-search">
            <Search size={18} className="blog-search-icon" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${BLOG_POSTS.length} guides — e.g. "IOQM syllabus", "NEET biology", "SAT score"`}
              aria-label="Search blog guides"
            />
            {isSearching && (
              <button type="button" className="blog-search-clear" onClick={() => setQuery('')} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="latest-blogs-ticker">
            <div className="latest-blogs-ticker-head">
              <span className="latest-blogs-live-dot" aria-hidden="true" />
              <h2>Top 10 Latest</h2>
            </div>
            <div
              className="latest-blogs-viewport"
              onMouseEnter={() => setTickerPaused(true)}
              onMouseLeave={() => setTickerPaused(false)}
            >
              <div className={`latest-blogs-track${tickerPaused ? ' is-paused' : ''}`}>
                {[...latestTen, ...latestTen].map((post, i) => {
                  const style = CATEGORY_STYLE[post.category];
                  const isDuplicate = i >= latestTen.length;
                  return (
                    <Link
                      prefetch={false}
                      href={`/blog/${post.slug}`}
                      key={`${post.slug}-${i}`}
                      className="latest-blog-card"
                      aria-hidden={isDuplicate || undefined}
                      tabIndex={isDuplicate ? -1 : undefined}
                    >
                      <div className="latest-blog-card-thumb">
                        <Image
                          src={`/images/og/${post.slug}.png`}
                          alt=""
                          fill
                          sizes="240px"
                          priority={i < latestTen.length}
                        />
                        <span className="latest-blog-card-cat" style={{ background: style.gradient }}>
                          {CATEGORY_LABELS[post.category]}
                        </span>
                      </div>
                      <div className="latest-blog-card-body">
                        <h3>{post.title}</h3>
                        <span className="latest-blog-card-meta">
                          <span>{formatDate(post.datePublished)}</span>
                          <span className="blog-stat-dot" aria-hidden="true" />
                          <span><Clock size={11} /> {post.readingMinutes} min</span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isSearching ? (
        <section className="bb-section" id="all-guides" style={{ paddingTop: 0 }}>
          <div className="container">
            <p className="blog-search-count">
              {searchResults.length === 0
                ? `No guides match "${trimmedQuery}"`
                : `${searchResults.length} guide${searchResults.length === 1 ? '' : 's'} matching "${trimmedQuery}"`}
            </p>
            {searchResults.length > 0 ? (
              <>
                <div className="blog-grid blog-grid-rich">
                  {searchResults.slice(0, searchVisibleCount).map((post) => (
                    <BlogCard post={post} key={post.slug} />
                  ))}
                </div>
                {searchVisibleCount < searchResults.length && (
                  <div className="blog-load-more">
                    <button type="button" className="btn btn-ghost" onClick={() => setSearchVisibleCount((c) => c + PAGE_SIZE)}>
                      Load More Guides ({searchResults.length - searchVisibleCount} more)
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="blog-search-empty">
                <p>Try a different keyword, or browse by subject instead.</p>
                <button type="button" className="btn btn-ghost" onClick={() => setQuery('')}>Clear search</button>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="bb-section category-section" id="guides">
            <div className="container">
              <div className="category-grid category-grid-compact reveal" aria-label="Browse guides by subject">
                {CATEGORY_ORDER.map((category) => {
                  const Icon = CATEGORY_ICON[category];
                  const style = CATEGORY_STYLE[category];
                  const count = BLOG_POSTS.filter((p) => p.category === category).length;
                  const href = count > 0 ? `/blog/${category}` : CATEGORY_PILLAR_HREF[category];
                  return (
                    <Link prefetch={false}
                      key={category}
                      href={href}
                      className="category-card category-card-compact"
                      title={CATEGORY_BLURB[category]}
                      aria-label={`${CATEGORY_LABELS[category]} — ${CATEGORY_BLURB[category]}`}
                      style={{ ['--cc-gradient' as string]: style.gradient, ['--cc-solid' as string]: style.solid, ['--cc-glow' as string]: style.glow }}
                    >
                      <div className="category-card-top">
                        <span className="category-card-icon"><Icon /></span>
                        {count > 0 ? (
                          <span className="category-card-count">{count}</span>
                        ) : (
                          <span className="category-card-count soon">Soon</span>
                        )}
                      </div>
                      <h3>{CATEGORY_LABELS[category]}</h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bb-section" id="all-guides" style={{ paddingTop: 0 }}>
            <div className="container">
              <Link prefetch={false} href={`/blog/${featured.slug}`} className="blog-featured reveal">
                <div className="blog-featured-accent" style={{ background: CATEGORY_STYLE[featured.category].gradient }} />
                <div className="blog-featured-thumb">
                  <Image
                    src={`/images/og/${featured.slug}.png`}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 260px"
                    priority
                  />
                </div>
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
                <>
                  <div className="blog-grid blog-grid-rich">
                    {rest.slice(0, gridVisibleCount).map((post, i) => (
                      <BlogCard post={post} key={post.slug} reveal delay={(i % 3) + 1} />
                    ))}
                  </div>
                  {gridVisibleCount < rest.length && (
                    <div className="blog-load-more">
                      <button type="button" className="btn btn-ghost" onClick={() => setGridVisibleCount((c) => c + PAGE_SIZE)}>
                        Load More Guides ({rest.length - gridVisibleCount} more)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </>
      )}

      {/* ============ FAQ ============ */}
      <section className="bb-section" id="faq" aria-labelledby="faq-title">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="section-title reveal" id="faq-title">Frequently asked questions</h2>
          </div>
          <FaqJsonLd items={BLOG_FAQS} />
          <div className="article-faq reveal" style={{ marginTop: 32 }}>
            {BLOG_FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
