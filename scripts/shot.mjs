import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:3000/ioqm-amc-coaching-pune';
const out = process.argv[3] || 'shot.png';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

await page.evaluate(async () => {
  const step = 400;
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  let y = 0;
  const max = document.body.scrollHeight;
  while (y < max) {
    window.scrollTo(0, y);
    await delay(150);
    y += step;
  }
  window.scrollTo(0, 0);
  await delay(400);
});

await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log('saved', out);
