/**
 * Generates Open Graph share-card PNGs for every BuzzyBrains Academy blog post.
 *
 * Usage:
 *   npx tsx scripts/og/generate-og-images.ts            # generate missing only
 *   npx tsx scripts/og/generate-og-images.ts --force     # regenerate all
 *
 * Output: public/images/og/{slug}.png (1200x630)
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { BLOG_POSTS, CATEGORY_LABELS } from '../../app/(site)/blog/_data/posts';
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

  await browser.close();

  // Write a machine-readable manifest alongside the human summary.
  fs.writeFileSync(path.join(__dirname, 'og-manifest.json'), JSON.stringify(rows, null, 2), 'utf8');

  const created = rows.filter((r) => r.status === 'created').length;
  const skipped = rows.filter((r) => r.status === 'skipped').length;
  const failed = rows.filter((r) => r.status === 'failed').length;

  console.log('\n=== OG Image Generation Summary ===');
  console.log(`Total posts: ${rows.length} | Created: ${created} | Skipped (already existed): ${skipped} | Failed: ${failed}\n`);

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
