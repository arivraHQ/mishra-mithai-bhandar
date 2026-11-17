import fs from "fs";
import path from "path";
import sharp from "sharp";

const filesToFetch = [
  {
    title: "File:Roasted Cashew Nuts (52746470588).jpg",
    destName: "salted-cashews",
    folder: "products",
  },
  {
    title: "File:KASHMIRI MAMRA ALMONDS.jpg",
    destName: "mamra-almonds",
    folder: "products",
  },
  {
    title: "File:Pistachio Nuts (Unsplash).jpg",
    destName: "roasted-pista",
    folder: "products",
  },
  {
    title: "File:Raisins 01.jpg",
    destName: "sundried-raisins",
    folder: "products",
  },
  {
    title: "File:Making Sweets (427421012).jpg",
    destName: "craft-process-1",
    folder: "story",
  },
  {
    title: "File:Jalebi Making - Howrah 2004-04-11 00191.JPG",
    destName: "craft-process-2",
    folder: "story",
  },
  {
    title: "File:Jalebi making process at Old and famous Jalebiwala shop at Chandni Chowk, DelhiIMG 20150401 135545.jpg",
    destName: "craft-process-3",
    folder: "story",
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getImageUrl(title) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&titles=" +
    encodeURIComponent(title) +
    "&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=800&format=json";

  const res = await fetch(url, {
    headers: {
      "User-Agent": "MishraMithaiPortfolio/1.0 (dev@mishramithai.local; educational showcase)",
      "Accept": "application/json",
    },
  });
  const data = await res.json();
  const page = Object.values(data?.query?.pages || {})[0];
  return page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url;
}

async function downloadBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "MishraMithaiPortfolio/1.0 (dev@mishramithai.local; educational showcase)",
      "Referer": "https://commons.wikimedia.org/",
    },
  });
  if (!res.ok) {
    throw new Error(`HTTP error ${res.status} for ${url}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function main() {
  const productsDir = path.resolve("./public/images/products");
  const storyDir = path.resolve("./public/images/story");
  if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });
  if (!fs.existsSync(storyDir)) fs.mkdirSync(storyDir, { recursive: true });

  for (const item of filesToFetch) {
    try {
      console.log(`Looking up: ${item.title}...`);
      const directUrl = await getImageUrl(item.title);
      if (!directUrl) {
        console.warn(`Could not find URL for ${item.title}`);
        continue;
      }
      console.log(`Downloading from ${directUrl.slice(0, 70)}...`);
      const buffer = await downloadBuffer(directUrl);

      const targetDir = item.folder === "story" ? storyDir : productsDir;
      const targetPath = path.join(targetDir, `${item.destName}.webp`);

      // Optimize with sharp directly to WebP
      await sharp(buffer)
        .resize({ width: 480, height: 320, fit: "cover" })
        .webp({ quality: 80, effort: 4 })
        .toFile(targetPath);

      const stats = fs.statSync(targetPath);
      console.log(`Saved: ${targetPath} (${Math.round(stats.size / 1024)} KB)`);
      await sleep(1000);
    } catch (err) {
      console.error(`Error processing ${item.destName}:`, err.message);
    }
  }

  console.log("Done downloading and optimizing extra assets!");
}

main();
