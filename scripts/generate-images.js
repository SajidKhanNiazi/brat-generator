/**
 * Script to generate placeholder images for the Brat Generator app
 * Run with: node scripts/generate-images.js
 */

const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Generating placeholder images...');
console.log('Note: These are basic placeholders. Replace with proper branded images before production.');

// For og-image.png - create a simple HTML file that can be used to generate the image
// The user can open public/generate-og-image.html in a browser to create it

// For favicon.ico - create a minimal valid ICO file
// This is a minimal 16x16 ICO file (green square)
const minimalICO = Buffer.from([
  0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x10, 0x10, 0x00, 0x00, 0x01, 0x00, 0x20, 0x00, 0x68, 0x04,
  0x00, 0x00, 0x16, 0x00, 0x00, 0x00, 0x28, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x20, 0x00,
  0x00, 0x00, 0x01, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
]);

// Create a simple green square for favicon (minimal valid ICO)
// This creates a basic 16x16 green icon
const faviconPath = path.join(publicDir, 'favicon.ico');

// Create a minimal valid PNG for og-image (1x1 pixel, will be replaced)
// This is just a placeholder - user should generate proper 1200x630 image
const ogImagePath = path.join(publicDir, 'og-image.png');

// Write minimal ICO file
try {
  // Create a simple 16x16 green square ICO
  // Minimal valid ICO structure
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type (1 = ICO)
  icoHeader.writeUInt16LE(1, 4); // Number of images
  
  const icoImageEntry = Buffer.alloc(16);
  icoImageEntry[0] = 16; // Width
  icoImageEntry[1] = 16; // Height
  icoImageEntry[2] = 0; // Color palette
  icoImageEntry[3] = 0; // Reserved
  icoImageEntry.writeUInt16LE(1, 4); // Color planes
  icoImageEntry.writeUInt16LE(32, 6); // Bits per pixel
  icoImageEntry.writeUInt32LE(1024, 8); // Image size (16*16*4)
  icoImageEntry.writeUInt32LE(22, 12); // Offset to image data
  
  // Create 16x16 RGBA image data (green square)
  const imageData = Buffer.alloc(1024);
  for (let i = 0; i < 1024; i += 4) {
    imageData[i] = 0x8A;     // R
    imageData[i + 1] = 0xCE; // G
    imageData[i + 2] = 0x00; // B
    imageData[i + 3] = 0xFF; // A
  }
  
  const favicon = Buffer.concat([icoHeader, icoImageEntry, imageData]);
  fs.writeFileSync(faviconPath, favicon);
  console.log('✓ Created favicon.ico (16x16 green square placeholder)');
} catch (error) {
  console.error('Error creating favicon.ico:', error.message);
}

// Create a minimal valid PNG for og-image placeholder
// This is a 1x1 pixel PNG - user should replace with proper 1200x630 image
try {
  // Minimal valid 1x1 PNG
  const pngData = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
    0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52, // IHDR chunk
    0x00, 0x00, 0x00, 0x01, // Width: 1
    0x00, 0x00, 0x00, 0x01, // Height: 1
    0x08, 0x02, 0x00, 0x00, 0x00, // Bit depth, color type, etc.
    0x90, 0x77, 0x53, 0xDE, // CRC
    0x00, 0x00, 0x00, 0x0C, 0x49, 0x44, 0x41, 0x54, // IDAT chunk
    0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x02, // Image data
    0x00, 0x01, // CRC
    0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82 // IEND
  ]);
  
  fs.writeFileSync(ogImagePath, pngData);
  console.log('✓ Created og-image.png (1x1 pixel placeholder - REPLACE with 1200x630 image)');
  console.log('  → Open public/generate-og-image.html in a browser to generate a proper image');
} catch (error) {
  console.error('Error creating og-image.png:', error.message);
}

console.log('\n✓ Placeholder images created!');
console.log('⚠️  IMPORTANT: Replace these with proper branded images before production:');
console.log('   - og-image.png should be 1200×630px with your branding');
console.log('   - favicon.ico should be a proper icon (16×16, 32×32, or 48×48)');
