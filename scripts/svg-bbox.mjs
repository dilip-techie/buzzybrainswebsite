import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const svg = readFileSync('public/logo-mark.svg', 'utf-8');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(`<!DOCTYPE html><html><body>${svg}</body></html>`);
const bbox = await page.evaluate(() => {
  const el = document.querySelector('svg');
  const b = el.getBBox();
  return { x: b.x, y: b.y, width: b.width, height: b.height };
});
console.log(JSON.stringify(bbox));
await browser.close();
