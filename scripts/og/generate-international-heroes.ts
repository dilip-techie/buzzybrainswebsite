/**
 * Generates the hero and social-share images for the four international
 * landing pages (USA, Canada, Singapore, Australia).
 *
 * Usage:  npx tsx scripts/og/generate-international-heroes.ts
 *
 * Output (public/images/international/):
 *   visual-{country}.png 1200x900   map-only visual beside the hero text (converted to .webp for the site)
 *   og-{country}.png     1200x630   used for Open Graph / Twitter cards
 *
 * The art is a branded graphic (graticule, nodes and an arc from Pune to the
 * destination). It deliberately contains no people and no dated offer text, so
 * it never goes out of date or implies anything about real students.
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const OUT = path.join(__dirname, '..', '..', 'public', 'images', 'international');

const COLORS = {
  navy: '#0F172A',
  navy2: '#16233f',
  blue: '#0B51C1',
  blueLight: '#5EA0E4',
  amber: '#ECA626',
  amberLight: '#F2C466',
};

const logo = `data:image/png;base64,${fs
  .readFileSync(path.join(__dirname, '..', '..', 'app', 'apple-icon.png'))
  .toString('base64')}`;

interface Country {
  slug: string;
  name: string;
  headline: string;
  chips: string[];
  city: string;
  lon: number;
  lat: number;
}

const PUNE = { lon: 73.86, lat: 18.52 };

const COUNTRIES: Country[] = [
  { slug: 'usa', name: 'the USA', headline: 'Online coaching for students in the USA', chips: ['SAT', 'AP', 'AMC 8/10/12', 'IB / IGCSE', 'UKMT', 'Olympiads'], city: 'USA', lon: -98, lat: 39 },
  { slug: 'canada', name: 'Canada', headline: 'Online coaching for students in Canada', chips: ['IB', 'AP', 'SAT', 'AMC', 'UKMT', 'Olympiads'], city: 'Canada', lon: -79.4, lat: 43.7 },
  { slug: 'singapore', name: 'Singapore', headline: 'Online coaching for students in Singapore', chips: ['SASMO', 'Singapore Maths Olympiad', 'AMC', 'UKMT', 'IB / IGCSE', 'SAT'], city: 'Singapore', lon: 103.8, lat: 1.35 },
  { slug: 'australia', name: 'Australia', headline: 'Online coaching for students in Australia', chips: ['Australian Maths Competition', 'AMC (USA)', 'UKMT', 'IB', 'SAT', 'AP'], city: 'Australia', lon: 151.2, lat: -33.9 },
];

/** Flat world map extent used for the graticule and the two markers. */
const LON_MIN = -170;
const LON_MAX = 180;
const LAT_MIN = -60;
const LAT_MAX = 80;

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Very coarse continent outlines (lon, lat). They are only used to place a
 * dot-matrix world map, where the dots hide the roughness of the outlines. */
const LAND: [number, number][][] = [
  // North America
  [[-168,66],[-160,70],[-140,70],[-125,70],[-95,72],[-80,70],[-62,60],[-55,52],[-66,45],[-70,42],[-76,35],[-81,30],[-80,25],[-84,30],[-90,29],[-97,26],[-97,21],[-92,18],[-87,21],[-88,15],[-83,10],[-79,8],[-84,10],[-92,15],[-105,20],[-110,24],[-114,30],[-117,33],[-124,40],[-124,48],[-130,54],[-140,60],[-150,60],[-160,58],[-165,62]],
  // Greenland
  [[-55,60],[-45,60],[-20,70],[-20,82],[-60,82],[-70,76],[-55,68]],
  // South America
  [[-80,9],[-72,12],[-62,10],[-52,5],[-50,0],[-35,-6],[-39,-14],[-41,-22],[-48,-26],[-54,-34],[-58,-38],[-65,-42],[-66,-48],[-69,-53],[-73,-52],[-74,-42],[-71,-30],[-70,-18],[-76,-14],[-81,-6],[-80,-1],[-77,4]],
  // Europe
  [[-10,36],[-9,43],[-1,46],[-4,48],[2,51],[8,54],[10,57],[5,60],[5,63],[14,68],[25,71],[31,70],[30,60],[28,56],[30,50],[34,46],[28,41],[26,37],[20,38],[15,38],[12,44],[8,44],[3,43],[-2,37]],
  // Africa
  [[-17,21],[-13,28],[-6,36],[10,37],[20,33],[32,31],[34,28],[43,12],[51,12],[45,0],[40,-10],[40,-16],[35,-25],[30,-31],[20,-35],[17,-30],[12,-17],[13,-5],[9,3],[5,5],[-8,4],[-17,14]],
  // Asia
  [[30,60],[40,68],[60,68],[80,73],[113,74],[140,72],[180,70],[180,65],[163,60],[155,57],[142,46],[130,43],[129,36],[126,35],[121,40],[122,37],[120,28],[109,21],[106,10],[103,10],[104,1],[100,3],[98,10],[94,17],[92,22],[87,21],[80,16],[80,13],[77,8],[73,16],[72,21],[67,25],[61,25],[52,27],[57,26],[59,22],[52,16],[43,13],[35,30],[36,36],[26,40],[30,50]],
  // Australia
  [[114,-22],[122,-18],[130,-12],[137,-12],[141,-11],[143,-14],[146,-19],[153,-26],[151,-34],[146,-39],[138,-35],[130,-32],[116,-35],[113,-26]],
  // Great Britain, Japan, Sumatra, Borneo, New Zealand, Madagascar
  [[-5,50],[1,51],[2,53],[-2,57],[-5,58],[-6,55],[-3,53]],
  [[130,31],[135,34],[141,38],[142,43],[145,44],[141,45],[139,40],[132,35]],
  [[95,5],[98,4],[106,-6],[102,-5],[96,2]],
  [[109,2],[117,7],[119,1],[116,-4],[110,-3]],
  [[172,-35],[178,-38],[175,-41],[170,-46],[167,-46],[172,-41]],
  [[44,-25],[49,-15],[50,-13],[47,-25]],
];

function inPoly(lon: number, lat: number, poly: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Builds the SVG map panel: graticule, nodes and an arc from Pune to the destination. */
function mapSvg(c: Country, w: number, h: number): string {
  const x = (lon: number) => ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * w;
  const y = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * h;
  const lines: string[] = [];
  for (let lon = -150; lon <= 180; lon += 30) lines.push(`<line x1="${x(lon)}" y1="0" x2="${x(lon)}" y2="${h}"/>`);
  for (let lat = -60; lat <= 80; lat += 20) lines.push(`<line x1="0" y1="${y(lat)}" x2="${w}" y2="${y(lat)}"/>`);
  const dots: string[] = [];
  const step = 2.6;
  for (let lat = LAT_MAX; lat >= LAT_MIN; lat -= step) {
    for (let lon = LON_MIN; lon <= LON_MAX; lon += step) {
      if (LAND.some((poly) => inPoly(lon, lat, poly))) dots.push(`<circle cx="${x(lon).toFixed(1)}" cy="${y(lat).toFixed(1)}" r="${(w / 330).toFixed(2)}"/>`);
    }
  }
  const a = { x: x(PUNE.lon), y: y(PUNE.lat) };
  const b = { x: x(c.lon), y: y(c.lat) };
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - Math.abs(a.x - b.x) * 0.28 - 30;
  const label = (px: number, py: number, text: string, above = false) => {
    const ry = above ? py - 70 : py + 30;
    return `<g><rect x="${px - text.length * 6.4 - 14}" y="${ry}" width="${text.length * 12.8 + 28}" height="38" rx="19" fill="#0F172A" fill-opacity="0.82" stroke="#5EA0E4" stroke-opacity="0.5"/>
     <text x="${px}" y="${ry + 26}" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="20" fill="#fff">${esc(text)}</text></g>`;
  };
  const node = (p: { x: number; y: number }, color: string) => `
    <circle cx="${p.x}" cy="${p.y}" r="22" fill="${color}" opacity="0.18"/>
    <circle cx="${p.x}" cy="${p.y}" r="11" fill="${color}" opacity="0.35"/>
    <circle cx="${p.x}" cy="${p.y}" r="6" fill="${color}"/>`;
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${COLORS.amberLight}"/><stop offset="1" stop-color="${COLORS.blueLight}"/>
      </linearGradient>
    </defs>
    <g stroke="#5EA0E4" stroke-opacity="0.08" stroke-width="1">${lines.join('')}</g>
    <g fill="#5EA0E4" fill-opacity="0.42">${dots.join('')}</g>
    <path d="M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}" fill="none" stroke="url(#arc)" stroke-width="3.5" stroke-dasharray="2 10" stroke-linecap="round"/>
    ${node(a, COLORS.amber)}${node(b, COLORS.blueLight)}
    ${label(a.x, a.y, 'Pune, India', b.y > a.y)}
    ${label(b.x, b.y, c.city)}
  </svg>`;
}

function html(c: Country, width: number, height: number): string {
  const compact = height < 700;
  const mapW = Math.round(width * (compact ? 0.5 : 0.5));
  const mapH = Math.round(height * 0.78);
  const titleSize = compact ? 50 : 62;
  const chipSize = compact ? 16 : 18;
  const chips = c.chips.map((t) => `<span class="chip">${esc(t)}</span>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{box-sizing:border-box;margin:0}
    body{width:${width}px;height:${height}px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
      background:radial-gradient(1200px 700px at 78% 20%, ${COLORS.navy2} 0%, ${COLORS.navy} 62%);position:relative}
    .glow{position:absolute;right:-120px;top:-160px;width:760px;height:760px;border-radius:50%;
      background:radial-gradient(circle, rgba(11,81,193,.45), transparent 66%)}
    .glow2{position:absolute;left:-200px;bottom:-260px;width:640px;height:640px;border-radius:50%;
      background:radial-gradient(circle, rgba(236,166,38,.18), transparent 65%)}
    .spine{position:absolute;left:0;top:${compact ? 70 : 90}px;bottom:${compact ? 70 : 90}px;width:8px;background:${COLORS.amber};border-radius:0 6px 6px 0}
    .map{position:absolute;right:${compact ? 30 : 44}px;top:${Math.round(height * 0.11)}px}
    .left{position:absolute;left:${compact ? 70 : 96}px;top:0;bottom:0;width:${Math.round(width * 0.56)}px;display:flex;flex-direction:column;justify-content:center}
    .brand{display:flex;align-items:center;gap:16px;margin-bottom:${compact ? 26 : 34}px}
    .brand img{width:${compact ? 56 : 66}px;height:${compact ? 56 : 66}px;border-radius:14px;background:#fff;padding:3px}
    .brand b{font-size:${compact ? 24 : 28}px;letter-spacing:.02em;font-weight:800}
    .brand b span{color:${COLORS.amber}}
    .brand small{display:block;font-size:${compact ? 12 : 14}px;letter-spacing:.3em;color:${COLORS.blueLight};font-weight:700;margin-top:4px}
    .eyebrow{display:inline-block;align-self:flex-start;border:1.5px solid ${COLORS.amber};color:${COLORS.amberLight};
      border-radius:999px;padding:7px 18px;font-size:${compact ? 14 : 16}px;font-weight:800;letter-spacing:.16em;margin-bottom:${compact ? 20 : 26}px}
    h1{font-size:${titleSize}px;line-height:1.08;font-weight:800;letter-spacing:-.02em;margin-bottom:${compact ? 22 : 30}px;max-width:${Math.round(width * 0.52)}px}
    h1 em{font-style:normal;color:${COLORS.amberLight}}
    .chips{display:flex;flex-wrap:wrap;gap:10px;max-width:${Math.round(width * 0.46)}px;margin-bottom:${compact ? 22 : 30}px}
    .chip{background:rgba(94,160,228,.14);border:1px solid rgba(94,160,228,.4);color:#dbeafe;border-radius:10px;padding:8px 16px;font-size:${chipSize}px;font-weight:700}
    .foot{display:flex;align-items:center;gap:14px;font-size:${compact ? 17 : 20}px;font-weight:600;color:#cbd5e1}
    .dot{width:6px;height:6px;border-radius:50%;background:${COLORS.amber}}
  </style></head><body>
    <div class="glow"></div><div class="glow2"></div><div class="spine"></div>
    <div class="map">${mapSvg(c, mapW, mapH)}</div>
    <div class="left">
      <div class="brand"><img src="${logo}" alt=""/><div><b>BUZZY <span>BRAINS</span></b><small>ACADEMY</small></div></div>
      <div class="eyebrow">LIVE · ONE-TO-ONE · ONLINE</div>
      <h1>${esc(c.headline).replace(esc(c.name), `<em>${esc(c.name)}</em>`)}</h1>
      <div class="chips">${chips}</div>
      <div class="foot"><span>IIT / IIM-alumni faculty</span><span class="dot"></span><span>Classes at convenient local timings</span></div>
    </div>
  </body></html>`;
}

/** Map-only visual for the side-by-side hero: no headline, so it never duplicates the page's H1. */
function visualHtml(c: Country, width: number, height: number): string {
  const mapW = width - 120;
  const mapH = Math.round(height * 0.66);
  const chips = c.chips.map((t) => `<span class="chip">${esc(t)}</span>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{box-sizing:border-box;margin:0}
    body{width:${width}px;height:${height}px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;position:relative;
      background:radial-gradient(900px 700px at 70% 15%, ${COLORS.navy2} 0%, ${COLORS.navy} 65%)}
    .glow{position:absolute;right:-140px;top:-160px;width:720px;height:720px;border-radius:50%;background:radial-gradient(circle, rgba(11,81,193,.5), transparent 66%)}
    .glow2{position:absolute;left:-180px;bottom:-240px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle, rgba(236,166,38,.2), transparent 65%)}
    .tag{position:absolute;left:60px;top:48px;display:flex;align-items:center;gap:14px}
    .tag img{width:56px;height:56px;border-radius:14px;background:#fff;padding:3px}
    .pill{border:1.5px solid ${COLORS.amber};color:${COLORS.amberLight};border-radius:999px;padding:8px 20px;font-size:17px;font-weight:800;letter-spacing:.16em}
    .map{position:absolute;left:60px;top:${Math.round(height * 0.14)}px}
    .chips{position:absolute;left:60px;right:60px;bottom:54px;display:flex;flex-wrap:wrap;gap:10px}
    .chip{background:rgba(94,160,228,.14);border:1px solid rgba(94,160,228,.4);color:#dbeafe;border-radius:10px;padding:9px 18px;font-size:19px;font-weight:700}
  </style></head><body>
    <div class="glow"></div><div class="glow2"></div>
    <div class="tag"><img src="${logo}" alt=""/><span class="pill">LIVE · ONE-TO-ONE · ONLINE</span></div>
    <div class="map">${mapSvg(c, mapW, mapH)}</div>
    <div class="chips">${chips}</div>
  </body></html>`;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const c of COUNTRIES) {
    for (const [name, w, h] of [['visual', 1200, 900], ['og', 1200, 630]] as const) {
      const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
      await page.setContent(name === 'visual' ? visualHtml(c, w, h) : html(c, w, h), { waitUntil: 'load' });
      await page.screenshot({ path: path.join(OUT, `${name}-${c.slug}.png`), type: 'png' });
      await page.close();
      console.log(`wrote ${name}-${c.slug}.png`);
    }
  }
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
