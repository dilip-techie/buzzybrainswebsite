const COLORS = {
  navy: '#0E2148',
  navyLight: '#15316B',
  gold: '#C9A227',
  goldLight: '#E4C458',
  steelBlue: '#5E7FB5',
  royalBlue: '#2C5BA8',
  white: '#FFFFFF',
};

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

/** BuzzyBrains Academy "Steel Echo" OG card template — navy ground, gold
 * spine, layered BB monogram (steel-blue echo behind a white front glyph),
 * gold category pill, serif headline, sans-serif wordmark/URL. */
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
    background-image: radial-gradient(${COLORS.steelBlue} 1.6px, transparent 1.6px);
    background-size: 16px 16px;
    opacity: 0.28;
  }
  .spine {
    position: absolute; left: 72px; top: 112px; bottom: 158px;
    width: 6px;
    background: ${COLORS.gold};
    border-radius: 3px;
  }
  .brand-row {
    position: absolute; top: 56px; left: 92px;
    display: flex; align-items: center; gap: 18px;
  }
  .monogram { position: relative; width: 64px; height: 64px; flex-shrink: 0; }
  .monogram .echo, .monogram .front {
    position: absolute; top: 0; left: 0;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 800;
    font-size: 64px;
    line-height: 64px;
  }
  .monogram .echo { color: ${COLORS.steelBlue}; opacity: 0.75; transform: translate(7px, 7px); }
  .monogram .front { color: ${COLORS.white}; }
  .wordmark { display: flex; flex-direction: column; }
  .wordmark .name {
    font-family: 'Archivo', Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 1px;
    color: ${COLORS.white};
  }
  .wordmark .name .accent { color: ${COLORS.gold}; }
  .wordmark .sub {
    font-family: 'Archivo', Arial, sans-serif;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 4px;
    color: ${COLORS.steelBlue};
    margin-top: 3px;
  }
  .pill {
    position: absolute; left: 96px; top: 168px;
    display: inline-flex; align-items: center;
    padding: 8px 20px;
    border: 1.5px solid ${COLORS.gold};
    border-radius: 999px;
    font-family: 'Archivo', Arial, sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
    color: ${COLORS.goldLight};
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
    color: ${COLORS.steelBlue};
  }
  .footer .rule {
    position: absolute; left: 0; right: 0; top: -22px;
    height: 1px;
    background: rgba(94,127,181,0.35);
  }
</style>
</head>
<body>
  <div class="diagonal"></div>
  <div class="dots"></div>
  <div class="spine"></div>

  <div class="brand-row">
    <div class="monogram">
      <span class="echo">B</span>
      <span class="front">B</span>
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
