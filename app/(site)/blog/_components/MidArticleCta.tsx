import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { CATEGORY_STYLE, type BlogCategory } from '../_data/categories';
import type { BlogBlock } from '../_data/posts';

const WHATSAPP_NUMBER = '919850570525';

/** Program labels that start with a vowel *sound* (not just a vowel letter —
 * "NMTC" is said "en-em-tee-see", "SAT" is said as a word), so "an" reads
 * correctly. Everything else defaults to "a". */
const AN_PREFIXES = ['IIT', 'IOQM', 'IPMAT', 'International', 'Ivy', 'AP', 'AMC', 'NMTC', 'Olympiad'];

function articleFor(label: string): 'a' | 'an' {
  return AN_PREFIXES.some((prefix) => label.startsWith(prefix)) ? 'an' : 'a';
}

/** Posts shorter than this don't get a mid-article break — it would land
 * too close to the top or bottom CTA to feel like a natural pause. */
const MIN_BODY_LENGTH = 12;

export interface MidArticleCtaPost {
  title: string;
  category: BlogCategory;
  relatedProgramHref: string;
  relatedProgramLabel: string;
}

/** Finds the body index to insert the CTA before, snapped to the nearest
 * h2 boundary around the midpoint so it never interrupts a paragraph,
 * list or table mid-thought. Returns null for posts too short to need one. */
export function findMidArticleInsertIndex(body: BlogBlock[]): number | null {
  if (body.length < MIN_BODY_LENGTH) return null;
  const mid = Math.floor(body.length / 2);
  for (let offset = 0; offset < body.length; offset++) {
    const after = mid + offset;
    const before = mid - offset;
    if (after < body.length && body[after].kind === 'h2') return after;
    if (before >= 0 && body[before].kind === 'h2') return before;
  }
  return mid;
}

export function MidArticleCta({ post }: { post: MidArticleCtaPost }) {
  const style = CATEGORY_STYLE[post.category];
  const waMessage = `Hi! I was reading "${post.title}" on the BuzzyBrains blog and had a question about ${post.relatedProgramLabel}.`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="mid-article-cta">
      <span className="mid-article-cta-icon" style={{ background: style.gradient }}>
        <MessageCircle size={20} />
      </span>
      <div className="mid-article-cta-body">
        <p className="mid-article-cta-title">Got a question about this?</p>
        <p className="mid-article-cta-text">
          Talk to {articleFor(post.relatedProgramLabel)} {post.relatedProgramLabel} mentor directly — no form, just a quick WhatsApp chat.
        </p>
      </div>
      <div className="mid-article-cta-actions">
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-green">
          <MessageCircle size={17} />
          Chat on WhatsApp
        </a>
        <Link prefetch={false} href={post.relatedProgramHref} className="mid-article-cta-link">
          Explore {post.relatedProgramLabel} &rarr;
        </Link>
      </div>
    </div>
  );
}
