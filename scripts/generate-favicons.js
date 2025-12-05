const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Group10.svg - Dark purple circle with white WordPress logo
const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.76 121.76">
  <circle fill="#1b142b" cx="60.88" cy="60.88" r="60.88"/>
  <path fill="#fff" d="M18.88,61.38c0,16.62,9.67,30.98,23.65,37.77l-20-54.86c-2.34,5.22-3.65,11.02-3.65,17.08h0ZM89.21,59.27c0-5.18-1.88-8.79-3.45-11.59-2.11-3.45-4.11-6.37-4.11-9.83s2.92-7.45,7.06-7.45.35,0,.54,0c-7.49-6.83-17.43-11.02-28.37-11.02s-27.56,7.52-35.09,18.93c1,0,1.92.04,2.69.04,4.38,0,11.21-.54,11.21-.54,2.26-.12,2.53,3.19.27,3.45,0,0-2.26.27-4.8.38l15.28,45.49,9.17-27.56-6.53-17.93c-2.26-.12-4.41-.38-4.41-.38-2.26-.12-2-3.61.27-3.45,0,0,6.95.54,11.06.54s11.21-.54,11.21-.54c2.26-.12,2.53,3.19.27,3.45,0,0-2.26.27-4.8.38l15.16,45.14,4.18-14.01c1.8-5.8,3.19-9.98,3.19-13.59h0v.08ZM61.61,65.06l-12.59,36.62c3.76,1.11,7.75,1.73,11.86,1.73s9.6-.84,13.94-2.38c-.12-.19-.23-.38-.31-.58l-12.9-35.36h0v-.04ZM97.73,41.23c.19,1.34.27,2.76.27,4.3,0,4.26-.81,9.06-3.19,15.05l-12.82,37.08c12.48-7.29,20.88-20.81,20.88-36.28,0-7.29-1.88-14.17-5.14-20.15h0ZM60.88,12.43c-26.99,0-48.95,21.96-48.95,48.95s21.96,48.95,48.95,48.95,48.95-21.96,48.95-48.95S87.87,12.43,60.88,12.43h0ZM60.88,108.1c-25.76,0-46.72-20.96-46.72-46.72S35.12,14.66,60.88,14.66s46.72,20.96,46.72,46.72-20.96,46.72-46.72,46.72h0Z"/>
</svg>`;

// OG Image SVG (1200x630) - Updated with new branding
const ogImageSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1b142b"/>
      <stop offset="100%" style="stop-color:#2d2145"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- WordPress Logo -->
  <g transform="translate(480, 100) scale(1.8)">
    <circle fill="#1b142b" stroke="#fff" stroke-width="3" cx="60.88" cy="60.88" r="60.88"/>
    <path fill="#fff" d="M18.88,61.38c0,16.62,9.67,30.98,23.65,37.77l-20-54.86c-2.34,5.22-3.65,11.02-3.65,17.08h0ZM89.21,59.27c0-5.18-1.88-8.79-3.45-11.59-2.11-3.45-4.11-6.37-4.11-9.83s2.92-7.45,7.06-7.45.35,0,.54,0c-7.49-6.83-17.43-11.02-28.37-11.02s-27.56,7.52-35.09,18.93c1,0,1.92.04,2.69.04,4.38,0,11.21-.54,11.21-.54,2.26-.12,2.53,3.19.27,3.45,0,0-2.26.27-4.8.38l15.28,45.49,9.17-27.56-6.53-17.93c-2.26-.12-4.41-.38-4.41-.38-2.26-.12-2-3.61.27-3.45,0,0,6.95.54,11.06.54s11.21-.54,11.21-.54c2.26-.12,2.53,3.19.27,3.45,0,0-2.26.27-4.8.38l15.16,45.14,4.18-14.01c1.8-5.8,3.19-9.98,3.19-13.59h0v.08ZM61.61,65.06l-12.59,36.62c3.76,1.11,7.75,1.73,11.86,1.73s9.6-.84,13.94-2.38c-.12-.19-.23-.38-.31-.58l-12.9-35.36h0v-.04ZM97.73,41.23c.19,1.34.27,2.76.27,4.3,0,4.26-.81,9.06-3.19,15.05l-12.82,37.08c12.48-7.29,20.88-20.81,20.88-36.28,0-7.29-1.88-14.17-5.14-20.15h0ZM60.88,12.43c-26.99,0-48.95,21.96-48.95,48.95s21.96,48.95,48.95,48.95,48.95-21.96,48.95-48.95S87.87,12.43,60.88,12.43h0ZM60.88,108.1c-25.76,0-46.72-20.96-46.72-46.72S35.12,14.66,60.88,14.66s46.72,20.96,46.72,46.72-20.96,46.72-46.72,46.72h0Z"/>
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
  console.log('Generating favicon images with Group10.svg design...');

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
