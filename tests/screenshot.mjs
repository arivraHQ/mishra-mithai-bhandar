import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function main() {
  const outputDir = path.resolve("./screenshots");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("pageerror", (err) => {
    consoleErrors.push(err.toString());
  });

  // 1. Desktop Viewport (1440 x 900)
  console.log("Capturing Desktop 1440px...");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Hide Next.js dev badge if present
  await page.evaluate(() => {
    const nextBadge = document.querySelector("nextjs-portal");
    if (nextBadge) nextBadge.style.display = "none";
  });

  await page.screenshot({
    path: path.join(outputDir, "hero-desktop-1440px.png"),
    fullPage: false,
  });

  // 2. Mobile Viewport (375 x 812)
  console.log("Capturing Mobile 375px...");
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    const nextBadge = document.querySelector("nextjs-portal");
    if (nextBadge) nextBadge.style.display = "none";
  });

  await page.screenshot({
    path: path.join(outputDir, "hero-mobile-375px.png"),
    fullPage: false,
  });

  console.log("Console Errors Logged:", consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log("Errors:", consoleErrors);
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
}

main().catch((err) => {
  console.error("Execution error:", err);
  process.exit(1);
});
