import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { CATEGORY_LABELS, CATEGORY_STYLE, type BlogCategory } from '../_data/categories';

export interface BlogCardPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  datePublished: string;
  readingMinutes: number;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

/** Wraps the first case-insensitive occurrence of `query` in `text` with
 * <mark>. Fuzzy (typo) matches that have no literal substring in the text
 * simply render unhighlighted — the highlight is a visual aid, not a proof
 * of exactly where the search scorer found a match. */
function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export function BlogCard({
  post,
  reveal,
  delay,
  priority,
  highlightQuery,
}: {
  post: BlogCardPost;
  reveal?: boolean;
  delay?: number;
  priority?: boolean;
  /** When set, highlights the first matching occurrence in the title and
   * description — used on search results to show why a card matched. */
  highlightQuery?: string;
}) {
  const style = CATEGORY_STYLE[post.category];
  return (
    <Link
      prefetch={false}
      href={`/blog/${post.slug}`}
      className={`blog-card blog-card-rich${reveal ? ' reveal' : ''}`}
      data-delay={delay !== undefined ? String(delay) : undefined}
    >
      <div className="blog-card-thumb">
        <Image
          src={`/images/og/${post.slug}.png`}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 30vw"
          className="blog-card-thumb-img"
          priority={priority}
        />
        <span className="blog-card-cat-chip" style={{ background: style.gradient }}>
          {CATEGORY_LABELS[post.category]}
        </span>
      </div>
      <div className="blog-card-body">
        <h3>{highlightQuery ? highlightMatch(post.title, highlightQuery) : post.title}</h3>
        <p>{highlightQuery ? highlightMatch(post.description, highlightQuery) : post.description}</p>
        <span className="blog-card-meta">
          <span>{formatDate(post.datePublished)}</span>
          <span className="blog-stat-dot" aria-hidden="true" />
          <span><Clock size={12} /> {post.readingMinutes} min</span>
        </span>
      </div>
    </Link>
  );
}
