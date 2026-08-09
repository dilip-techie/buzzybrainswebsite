import { chromium } from 'playwright';

const url = process.argv[2];
const out = process.argv[3];
const scrollTo = Number(process.argv[4] || 900);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1150 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.evaluate((y) => window.scrollTo(0, y), scrollTo);
await page.waitForTimeout(900);
await page.screenshot({ path: out });
await browser.close();
console.log('saved', out);
