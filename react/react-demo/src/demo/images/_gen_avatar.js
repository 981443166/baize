const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const size = 200;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Blue circle background
ctx.fillStyle = '#00aeec';
ctx.fillRect(0, 0, size, size);

// Draw "bo" text
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 80px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('bo', size / 2, size / 2);

const outPath = path.join(__dirname, 'bozai.png');
const buf = canvas.toBuffer('image/png');
fs.writeFileSync(outPath, buf);
console.log('Saved:', outPath);
