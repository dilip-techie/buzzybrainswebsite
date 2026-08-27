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

export function BlogCard({
  post,
  reveal,
  delay,
  priority,
}: {
  post: BlogCardPost;
  reveal?: boolean;
  delay?: number;
  priority?: boolean;
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
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className="blog-card-meta">
          <span>{formatDate(post.datePublished)}</span>
          <span className="blog-stat-dot" aria-hidden="true" />
          <span><Clock size={12} /> {post.readingMinutes} min</span>
        </span>
      </div>
    </Link>
  );
}
