import sharp from 'sharp';

async function main() {
  const svgPath = 'app/icon.svg';

  // Transparent PNG fallback (32x32) for contexts that need a raster icon.
  await sharp(svgPath, { density: 900 }).resize(64, 64).png().toFile('app/icon.png');

  // Apple touch icon: solid white background (Apple discourages transparency
  // in touch icons), generous padding so the mark doesn't touch the edges.
  const size = 180;
  const inner = 116;
  const iconBuf = await sharp(svgPath, { density: 900 }).resize(inner, inner).png().toBuffer();

  await sharp({ create: { width: size, height: size, channels: 4, background: '#ffffff' } })
    .composite([{ input: iconBuf, left: Math.round((size - inner) / 2), top: Math.round((size - inner) / 2) }])
    .png()
    .toFile('app/apple-icon.png');

  console.log('done');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
