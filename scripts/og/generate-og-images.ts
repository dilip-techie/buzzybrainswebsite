/**
 * Generates Open Graph share-card PNGs for every BuzzyBrains Academy blog
 * post AND every blog category page.
 *
 * Usage:
 *   npx tsx scripts/og/generate-og-images.ts            # generate missing only
 *   npx tsx scripts/og/generate-og-images.ts --force     # regenerate all
 *
 * Output:
 *   public/images/og/{slug}.png                 (1200x630, per post)
 *   public/images/og/category-{category}.png     (1200x630, per category)
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { BLOG_POSTS, CATEGORY_LABELS, type BlogCategory } from '../../app/(site)/blog/_data/posts';
import { CATEGORY_CONTENT } from '../../app/(site)/blog/_data/categoryContent';
import { renderOgHtml } from './template';

const OUT_DIR = path.join(__dirname, '..', '..', 'public', 'images', 'og');
const WIDTH = 1200;
const HEIGHT = 630;
const FORCE = process.argv.includes('--force');

interface Row {
  title: string;
  slug: string;
  category: string;
  path: string;
  dimensions: string;
  status: 'created' | 'skipped' | 'failed';
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });

  const rows: Row[] = [];

  for (const post of BLOG_POSTS) {
    const outPath = path.join(OUT_DIR, `${post.slug}.png`);
    const relPath = `/images/og/${post.slug}.png`;
    const categoryLabel = CATEGORY_LABELS[post.category];

    if (!FORCE && fs.existsSync(outPath)) {
      rows.push({ title: post.title, slug: post.slug, category: categoryLabel, path: relPath, dimensions: `${WIDTH}x${HEIGHT}`, status: 'skipped' });
      continue;
    }

    try {
      const html = renderOgHtml({ title: post.title, category: categoryLabel, width: WIDTH, height: HEIGHT });
      await page.setContent(html, { waitUntil: 'networkidle' });
      // Give web fonts a moment to paint after network-idle, since font swap can lag one frame.
      await page.evaluate(() => (document as any).fonts?.ready);
      await page.screenshot({ path: outPath, type: 'png' });
      rows.push({ title: post.title, slug: post.slug, category: categoryLabel, path: relPath, dimensions: `${WIDTH}x${HEIGHT}`, status: 'created' });
    } catch (err) {
      console.error(`Failed to render ${post.slug}:`, err);
      rows.push({ title: post.title, slug: post.slug, category: categoryLabel, path: relPath, dimensions: `${WIDTH}x${HEIGHT}`, status: 'failed' });
    }
  }

  const categoryKeys = Object.keys(CATEGORY_LABELS) as BlogCategory[];
  for (const category of categoryKeys) {
    const content = CATEGORY_CONTENT[category];
    const categoryLabel = CATEGORY_LABELS[category];
    const slug = `category-${category}`;
    const outPath = path.join(OUT_DIR, `${slug}.png`);
    const relPath = `/images/og/${slug}.png`;

    if (!FORCE && fs.existsSync(outPath)) {
      rows.push({ title: content.h1, slug, category: categoryLabel, path: relPath, dimensions: `${WIDTH}x${HEIGHT}`, status: 'skipped' });
      continue;
    }

    try {
      const html = renderOgHtml({ title: content.h1, category: categoryLabel, width: WIDTH, height: HEIGHT });
      await page.setContent(html, { waitUntil: 'networkidle' });
      await page.evaluate(() => (document as any).fonts?.ready);
      await page.screenshot({ path: outPath, type: 'png' });
      rows.push({ title: content.h1, slug, category: categoryLabel, path: relPath, dimensions: `${WIDTH}x${HEIGHT}`, status: 'created' });
    } catch (err) {
      console.error(`Failed to render ${slug}:`, err);
      rows.push({ title: content.h1, slug, category: categoryLabel, path: relPath, dimensions: `${WIDTH}x${HEIGHT}`, status: 'failed' });
    }
  }

  // Default/organization card — the sitewide fallback OG/Twitter image
  // (public/images/buzzybrains_social.jpg), referenced directly by ~32
  // layout.tsx/page.tsx files and by the EducationalOrganization JSON-LD
  // `logo` field. Same template, same pipeline, just no specific post.
  const socialOutPath = path.join(__dirname, '..', '..', 'public', 'images', 'buzzybrains_social.jpg');
  if (!FORCE && fs.existsSync(socialOutPath)) {
    rows.push({ title: 'Default site social card', slug: 'buzzybrains_social', category: 'Sitewide default', path: '/images/buzzybrains_social.jpg', dimensions: `${WIDTH}x${HEIGHT}`, status: 'skipped' });
  } else {
    try {
      const html = renderOgHtml({
        title: 'Maths & Science Mastery, IIT-Led.',
        category: "Pune's Premier Coaching Institute",
        width: WIDTH,
        height: HEIGHT,
      });
      await page.setContent(html, { waitUntil: 'networkidle' });
      await page.evaluate(() => (document as any).fonts?.ready);
      await page.screenshot({ path: socialOutPath, type: 'jpeg', quality: 92 });
      rows.push({ title: 'Default site social card', slug: 'buzzybrains_social', category: 'Sitewide default', path: '/images/buzzybrains_social.jpg', dimensions: `${WIDTH}x${HEIGHT}`, status: 'created' });
    } catch (err) {
      console.error('Failed to render buzzybrains_social.jpg:', err);
      rows.push({ title: 'Default site social card', slug: 'buzzybrains_social', category: 'Sitewide default', path: '/images/buzzybrains_social.jpg', dimensions: `${WIDTH}x${HEIGHT}`, status: 'failed' });
    }
  }

  await browser.close();

  // Write a machine-readable manifest alongside the human summary.
  fs.writeFileSync(path.join(__dirname, 'og-manifest.json'), JSON.stringify(rows, null, 2), 'utf8');

  const created = rows.filter((r) => r.status === 'created').length;
  const skipped = rows.filter((r) => r.status === 'skipped').length;
  const failed = rows.filter((r) => r.status === 'failed').length;

  console.log('\n=== OG Image Generation Summary ===');
  console.log(`Total posts + categories: ${rows.length} | Created: ${created} | Skipped (already existed): ${skipped} | Failed: ${failed}\n`);

  const colWidth = (key: keyof Row) => Math.max(...rows.map((r) => String(r[key]).length), key.length) + 2;
  const titleW = Math.min(colWidth('title'), 50);
  const slugW = Math.min(colWidth('slug'), 45);
  const catW = colWidth('category');

  console.log(
    'TITLE'.padEnd(titleW) + 'SLUG'.padEnd(slugW) + 'CATEGORY'.padEnd(catW) + 'STATUS'
  );
  for (const r of rows) {
    const title = r.title.length > titleW - 2 ? r.title.slice(0, titleW - 5) + '...' : r.title;
    console.log(title.padEnd(titleW) + r.slug.padEnd(slugW) + r.category.padEnd(catW) + r.status);
  }

  if (failed > 0) process.exitCode = 1;
}

main();
