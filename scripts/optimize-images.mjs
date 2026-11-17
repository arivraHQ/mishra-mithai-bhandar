import fs from "fs";
import path from "path";
import sharp from "sharp";

async function optimizeDirectory(dir, maxWidth) {
  const fullDir = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) return;
  const files = fs.readdirSync(fullDir);

  for (const file of files) {
    if (!file.endsWith(".jpg") && !file.endsWith(".jpeg") && !file.endsWith(".png")) continue;
    const inputPath = path.join(fullDir, file);
    const baseName = path.parse(file).name;
    const webpPath = path.join(fullDir, `${baseName}.webp`);

    try {
      await sharp(inputPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      const oldSize = Math.round(fs.statSync(inputPath).size / 1024);
      const newSize = Math.round(fs.statSync(webpPath).size / 1024);
      console.log(`✓ ${file}: ${oldSize}KB -> ${baseName}.webp: ${newSize}KB`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

async function run() {
  console.log("Optimizing hero images...");
  await optimizeDirectory("public/images/hero", 700);

  console.log("Optimizing product images...");
  await optimizeDirectory("public/images/products", 480);

  console.log("Image optimization complete!");
}

run();
