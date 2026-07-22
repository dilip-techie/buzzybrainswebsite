import fs from 'fs';
import path from 'path';
import { BLOG_POSTS, CATEGORY_LABELS } from '../../app/(site)/blog/_data/posts';

const rows = BLOG_POSTS.map((post) => ({
  slug: post.slug,
  title: post.title,
  category: CATEGORY_LABELS[post.category],
  datePublished: post.datePublished,
}));

const outPath = path.join(__dirname, 'posts-manifest.json');
fs.writeFileSync(outPath, JSON.stringify(rows, null, 2), 'utf8');
console.log(`Extracted ${rows.length} posts to ${outPath}`);
