import fs from 'fs';
import path from 'path';

const COLORS = {
  navy: '#0F172A',
  navyLight: '#1E293B',
  blue: '#0B51C1',
  blueLight: '#5EA0E4',
  amber: '#ECA626',
  amberLight: '#F2C466',
  white: '#FFFFFF',
};

/** The real BuzzyBrains bee-mark logo, embedded as a data URI so the
 * generated OG cards use the actual brand mark instead of a fabricated
 * text monogram — always in sync with the source asset, no giant literal
 * base64 string checked into the template itself. */
const LOGO_DATA_URI = (() => {
  const logoPath = path.join(__dirname, '..', '..', 'app', 'apple-icon.png');
  const base64 = fs.readFileSync(logoPath).toString('base64');
  return `data:image/png;base64,${base64}`;
})();

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Picks a title font size that keeps long titles from overflowing the card,
 * using a character-length heuristic (fast — avoids per-post render-measure loops). */
function titleFontSize(title: string): number {
  const len = title.length;
  if (len <= 40) return 58;
  if (len <= 65) return 46;
  if (len <= 90) return 37;
  return 31;
}

export interface OgTemplateParams {
  title: string;
  category: string;
  width: number;
  height: number;
}

/** BuzzyBrains Academy OG card template — navy ground, amber spine, the
 * real bee-mark logo, amber category pill, serif headline, sans-serif
 * wordmark/URL. Colors match the corrected site brand tokens in
 * app/globals.css (--blue, --amber, --navy). */
export function renderOgHtml({ title, category, width, height }: OgTemplateParams): string {
  const safeTitle = escapeHtml(title);
  const safeCategory = escapeHtml(category.toUpperCase());
  const fontSize = titleFontSize(title);

  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Archivo:wght@500;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${width}px; height: ${height}px; overflow: hidden; }
  body {
    position: relative;
    background: ${COLORS.navy};
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
  }
  .diagonal {
    position: absolute; top: 0; right: 0; bottom: 0;
    width: 46%;
    background: ${COLORS.navyLight};
    clip-path: polygon(28% 0, 100% 0, 100% 100%, 0% 100%);
    opacity: 0.9;
  }
  .dots {
    position: absolute; left: 40px; bottom: 78px;
    width: 220px; height: 90px;
    background-image: radial-gradient(${COLORS.blueLight} 1.6px, transparent 1.6px);
    background-size: 16px 16px;
    opacity: 0.28;
  }
  .spine {
    position: absolute; left: 72px; top: 112px; bottom: 158px;
    width: 6px;
    background: ${COLORS.amber};
    border-radius: 3px;
  }
  .brand-row {
    position: absolute; top: 56px; left: 92px;
    display: flex; align-items: center; gap: 18px;
  }
  .monogram {
    width: 64px; height: 64px; flex-shrink: 0;
    background: ${COLORS.white};
    border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
  }
  .monogram img { width: 48px; height: 48px; display: block; }
  .wordmark { display: flex; flex-direction: column; }
  .wordmark .name {
    font-family: 'Archivo', Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 1px;
    color: ${COLORS.white};
  }
  .wordmark .name .accent { color: ${COLORS.amber}; }
  .wordmark .sub {
    font-family: 'Archivo', Arial, sans-serif;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 4px;
    color: ${COLORS.blueLight};
    margin-top: 3px;
  }
  .pill {
    position: absolute; left: 96px; top: 168px;
    display: inline-flex; align-items: center;
    padding: 8px 20px;
    border: 1.5px solid ${COLORS.amber};
    border-radius: 999px;
    font-family: 'Archivo', Arial, sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
    color: ${COLORS.amberLight};
  }
  .title {
    position: absolute; left: 94px; top: 232px; right: 420px;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700;
    font-size: ${fontSize}px;
    line-height: 1.22;
    color: ${COLORS.white};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .footer {
    position: absolute; left: 94px; right: 60px; bottom: 46px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .footer .url {
    font-family: 'Archivo', Arial, sans-serif;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 0.5px;
    color: ${COLORS.blueLight};
  }
  .footer .rule {
    position: absolute; left: 0; right: 0; top: -22px;
    height: 1px;
    background: rgba(94,160,228,0.35);
  }
</style>
</head>
<body>
  <div class="diagonal"></div>
  <div class="dots"></div>
  <div class="spine"></div>

  <div class="brand-row">
    <div class="monogram">
      <img src="${LOGO_DATA_URI}" alt="" />
    </div>
    <div class="wordmark">
      <span class="name">BUZZY <span class="accent">BRAINS</span></span>
      <span class="sub">ACADEMY</span>
    </div>
  </div>

  <div class="pill">${safeCategory}</div>
  <div class="title">${safeTitle}</div>

  <div class="footer">
    <div class="rule"></div>
    <span class="url">www.buzzybrainsacademy.com</span>
  </div>
</body>
</html>`;
}
