const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// SVG with WordPress logo on red background
const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <circle cx="128" cy="128" r="128" fill="#e63946"/>
  <g transform="scale(0.75) translate(42.5, 42.5)">
    <path fill="#fff" d="M18.1,127.5c0,43.3,25.2,80.7,61.6,98.4L27.6,83c-6.1,13.6-9.5,28.7-9.5,44.5h0ZM201.3,122c0-13.5-4.9-22.9-9-30.2-5.5-9-10.7-16.6-10.7-25.6s7.6-19.4,18.4-19.4.9,0,1.4,0c-19.5-17.8-45.4-28.7-73.9-28.7s-71.8,19.6-91.4,49.3c2.6,0,5,.1,7,.1,11.4,0,29.2-1.4,29.2-1.4,5.9-.3,6.6,8.3.7,9,0,0-5.9.7-12.5,1l39.8,118.5,23.9-71.8-17-46.7c-5.9-.3-11.5-1-11.5-1-5.9-.3-5.2-9.4.7-9,0,0,18.1,1.4,28.8,1.4s29.2-1.4,29.2-1.4c5.9-.3,6.6,8.3.7,9,0,0-5.9.7-12.5,1l39.5,117.6,10.9-36.5c4.7-15.1,8.3-26,8.3-35.4h0ZM129.4,137.1l-32.8,95.4c9.8,2.9,20.2,4.5,30.9,4.5s25-2.2,36.3-6.2c-.3-.5-.6-1-.8-1.5l-33.6-92.1h0ZM223.5,75c.5,3.5.7,7.2.7,11.2,0,11.1-2.1,23.6-8.3,39.2l-33.4,96.6c32.5-19,54.4-54.2,54.4-94.5,0-19-4.9-36.9-13.4-52.5h0Z"/>
  </g>
</svg>`;

// OG Image SVG (1200x630)
const ogImageSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f2040"/>
      <stop offset="100%" style="stop-color:#1a3a5c"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- WordPress Logo -->
  <g transform="translate(500, 140) scale(0.5)">
    <circle cx="200" cy="200" r="180" fill="#e63946"/>
    <g transform="scale(1.4) translate(0, 0)">
      <path fill="#fff" d="M18.1,127.5c0,43.3,25.2,80.7,61.6,98.4L27.6,83c-6.1,13.6-9.5,28.7-9.5,44.5h0ZM201.3,122c0-13.5-4.9-22.9-9-30.2-5.5-9-10.7-16.6-10.7-25.6s7.6-19.4,18.4-19.4.9,0,1.4,0c-19.5-17.8-45.4-28.7-73.9-28.7s-71.8,19.6-91.4,49.3c2.6,0,5,.1,7,.1,11.4,0,29.2-1.4,29.2-1.4,5.9-.3,6.6,8.3.7,9,0,0-5.9.7-12.5,1l39.8,118.5,23.9-71.8-17-46.7c-5.9-.3-11.5-1-11.5-1-5.9-.3-5.2-9.4.7-9,0,0,18.1,1.4,28.8,1.4s29.2-1.4,29.2-1.4c5.9-.3,6.6,8.3.7,9,0,0-5.9.7-12.5,1l39.5,117.6,10.9-36.5c4.7-15.1,8.3-26,8.3-35.4h0ZM129.4,137.1l-32.8,95.4c9.8,2.9,20.2,4.5,30.9,4.5s25-2.2,36.3-6.2c-.3-.5-.6-1-.8-1.5l-33.6-92.1h0ZM223.5,75c.5,3.5.7,7.2.7,11.2,0,11.1-2.1,23.6-8.3,39.2l-33.4,96.6c32.5-19,54.4-54.2,54.4-94.5,0-19-4.9-36.9-13.4-52.5h0Z"/>
    </g>
  </g>

  <!-- Title -->
  <text x="600" y="420" font-family="Arial, sans-serif" font-size="56" font-weight="bold" fill="#ffffff" text-anchor="middle">
    The WordPress Team
  </text>

  <!-- Tagline -->
  <text x="600" y="490" font-family="Arial, sans-serif" font-size="28" fill="rgba(255,255,255,0.8)" text-anchor="middle">
    WordPress maintenance for everyone
  </text>

  <!-- CTA Badge -->
  <rect x="475" y="520" width="250" height="40" rx="20" fill="#e63946"/>
  <text x="600" y="548" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
    Pause or cancel anytime
  </text>
</svg>`;

async function generateImages() {
  console.log('Generating favicon images...');

  // Generate PNG favicons at various sizes
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
    { size: 150, name: 'mstile-150x150.png' },
  ];

  for (const { size, name } of sizes) {
    await sharp(Buffer.from(faviconSvg))
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Generate favicon.ico (multi-size)
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Generate OG image
  await sharp(Buffer.from(ogImageSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png');

  // Generate Twitter image (same as OG)
  await sharp(Buffer.from(ogImageSvg))
    .resize(1200, 600)
    .png()
    .toFile(path.join(publicDir, 'twitter-image.png'));
  console.log('Generated twitter-image.png');

  console.log('All images generated successfully!');
}

generateImages().catch(console.error);
