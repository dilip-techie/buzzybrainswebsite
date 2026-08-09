import sharp from 'sharp';

async function main() {
  const src = 'public/logo-badge.png';
  const meta = await sharp(src).metadata();
  const { width, height } = meta;

  const bg = '#2248B7';

  // Flatten the badge onto its own blue first, so its baked-in rounded
  // corners disappear into a plain rectangle before we pad it into a square
  // — otherwise the source's own rounding nests inside the square's mask.
  const flatRect = await sharp(src).flatten({ background: bg }).png().toBuffer();

  const size = Math.max(width, height);
  const radius = Math.round(size * 0.2);
  const maskSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`
  );

  const padded = await sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  })
    .composite([
      { input: flatRect, left: Math.round((size - width) / 2), top: Math.round((size - height) / 2) },
      { input: maskSvg, blend: 'dest-in' },
    ])
    .png()
    .toBuffer();

  await sharp(padded).resize(512, 512).toFile('public/favicon-square.png');
  await sharp(padded).resize(180, 180).toFile('app/apple-icon.png');
  await sharp(padded).resize(32, 32).toFile('app/icon.png');
  await sharp(padded).resize(32, 32).toFile('public/favicon-32.png');

  console.log('done');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
