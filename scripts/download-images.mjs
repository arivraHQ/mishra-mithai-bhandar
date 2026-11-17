import fs from "fs";
import path from "path";

const filesToFetch = [
  {
    title: "File:Traditional Indian sweets on Diwali, New Delhi.jpg",
    destDir: "public/images/hero",
    destName: "hero-thali.jpg",
  },
  {
    title: "File:Kaju katli sweet.jpg",
    destDir: "public/images/products",
    destName: "kaju-katli.jpg",
  },
  {
    title: "File:Motichur ka laddu.JPG",
    destDir: "public/images/products",
    destName: "motichoor-laddu.jpg",
  },
  {
    title: "File:Laddu tradition.jpg",
    destDir: "public/images/products",
    destName: "besan-laddu.jpg",
  },
  {
    title: "File:Gulab Jamun as a Diwali Sweet.jpg",
    destDir: "public/images/products",
    destName: "gulab-jamun.jpg",
  },
  {
    title: "File:Rasgulla Sweet.JPG",
    destDir: "public/images/products",
    destName: "rasgulla.jpg",
  },
  {
    title: "File:Soan sohan papdi India Festive Sweets.jpg",
    destDir: "public/images/products",
    destName: "soan-papdi.jpg",
  },
  {
    title: "File:Mathura Peda.jpg",
    destDir: "public/images/products",
    destName: "mathura-peda.jpg",
  },
  {
    title: "File:Ras Malai.JPG",
    destDir: "public/images/products",
    destName: "rasmalai.jpg",
  },
  {
    title: "File:Gujhia.JPG",
    destDir: "public/images/products",
    destName: "gujiya.jpg",
  },
  {
    title: "File:Samosa 4.jpg",
    destDir: "public/images/products",
    destName: "kanpur-samosa.jpg",
  },
  {
    title: "File:Jalebi in a bowl.jpg",
    destDir: "public/images/products",
    destName: "jalebi.jpg",
  },
  {
    title: "File:Assorted Sweets Box 01.jpg",
    destDir: "public/images/products",
    destName: "gift-box-shahi.jpg",
  },
  {
    title: "File:Assorted Sweets Box 03.jpg",
    destDir: "public/images/products",
    destName: "gift-box-parivaar.jpg",
  },
  {
    title: "File:Diwali sweets India 2009.jpg",
    destDir: "public/images/products",
    destName: "gift-box-treasury.jpg",
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getImageUrl(title) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&titles=" +
    encodeURIComponent(title) +
    "&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=900&format=json";

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
    },
  });
  const data = await res.json();
  const page = Object.values(data?.query?.pages || {})[0];
  return page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url;
}

async function downloadFile(url, destPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
  return buffer.byteLength;
}

async function main() {
  console.log("Fetching Wikimedia Commons copyright-free images...");
  for (const item of filesToFetch) {
    const dir = path.resolve(process.cwd(), item.destDir);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const targetFile = path.join(dir, item.destName);

    try {
      console.log(`Resolving ${item.title}...`);
      await sleep(350);
      const downloadUrl = await getImageUrl(item.title);
      if (!downloadUrl) {
        console.warn(`Could not resolve URL for ${item.title}`);
        continue;
      }
      console.log(`Downloading ${item.destName} from ${downloadUrl.slice(0, 60)}...`);
      await sleep(350);
      const bytes = await downloadFile(downloadUrl, targetFile);
      console.log(`✓ Saved ${item.destName} (${Math.round(bytes / 1024)} KB)`);
    } catch (err) {
      console.error(`Failed ${item.destName}:`, err.message);
    }
  }
  console.log("All images processed successfully!");
}

main();
