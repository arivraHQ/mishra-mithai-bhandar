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

  console.log("=== STARTING FULL SITE QA AUDIT ===");

  // 1. Desktop Viewport (1440 x 900)
  console.log("1. Auditing Desktop (1440px)...");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Capture full desktop page
  await page.screenshot({
    path: path.join(outputDir, "full-desktop-1440px.png"),
    fullPage: true,
  });

  // Capture individual desktop sections
  const catalogEl = page.locator("#catalog");
  if (await catalogEl.isVisible()) {
    await catalogEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await catalogEl.screenshot({
      path: path.join(outputDir, "section-catalog-1440px.png"),
    });
  }

  const giftBoxesEl = page.locator("#gift-boxes");
  if (await giftBoxesEl.isVisible()) {
    await giftBoxesEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await giftBoxesEl.screenshot({
      path: path.join(outputDir, "section-giftboxes-1440px.png"),
    });
  }

  const ourStoryEl = page.locator("#our-story");
  if (await ourStoryEl.isVisible()) {
    await ourStoryEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await ourStoryEl.screenshot({
      path: path.join(outputDir, "section-ourstory-1440px.png"),
    });
  }

  const bulkOrdersEl = page.locator("#bulk-orders");
  if (await bulkOrdersEl.isVisible()) {
    await bulkOrdersEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await bulkOrdersEl.screenshot({
      path: path.join(outputDir, "section-bulkorders-1440px.png"),
    });
  }

  const visitEl = page.locator("#visit");
  if (await visitEl.isVisible()) {
    await visitEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await visitEl.screenshot({
      path: path.join(outputDir, "section-visit-1440px.png"),
    });
  }

  // 2. Mobile Viewport (375 x 812)
  console.log("2. Auditing Mobile (375px)...");
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: path.join(outputDir, "full-mobile-375px.png"),
    fullPage: true,
  });

  // 3. Interactive Workflow Testing: Occasion filtering
  console.log("3. Testing Occasion Filter...");
  const diwaliChip = page.locator('button:has-text("Diwali Specials")').first();
  if (await diwaliChip.isVisible()) {
    await diwaliChip.click({ force: true });
    await page.waitForTimeout(400);
  }

  // 4. Weight Selection & Add To Cart
  console.log("4. Testing Weight Selection & Add to Cart...");
  const firstCard = page.locator('[data-testid="product-card"]').first();
  await firstCard.scrollIntoViewIfNeeded();

  // Click 1kg weight button
  const oneKgBtn = firstCard.locator('button:has-text("1 kg")');
  await oneKgBtn.click({ force: true });
  await page.waitForTimeout(300);

  // Click Add to Order
  const addBtn = firstCard.locator('button:has-text("Add to Order")');
  await addBtn.dispatchEvent('click');
  await page.waitForTimeout(600);

  // 5. Cart Drawer Verification & WhatsApp Link
  console.log("5. Testing Slide-Up Cart Drawer...");
  const cartTrigger = page.locator('button[aria-label="View sweet cart"]').first();
  await cartTrigger.click({ force: true });
  await page.waitForTimeout(600);

  // Screenshot cart drawer on mobile
  await page.screenshot({
    path: path.join(outputDir, "cart-drawer-mobile-375px.png"),
    fullPage: false,
  });

  // Fill customer details in cart drawer
  const nameInput = page.locator('input[placeholder="e.g. Rahul Sharma"]');
  if (await nameInput.isVisible()) {
    await nameInput.fill("Rahul Sharma");
  }

  // Check WhatsApp Checkout button presence
  const waButton = page.locator('button:has-text("Send Order on WhatsApp")');
  const isWaButtonVisible = await waButton.isVisible();
  console.log("WhatsApp Checkout Button Visible in Drawer:", isWaButtonVisible);

  console.log("Console Errors Logged:", consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error("Errors found:", consoleErrors);
    process.exit(1);
  }

  await browser.close();
  console.log("=== FULL SITE QA AUDIT COMPLETED WITH ZERO ERRORS ===");
}

main().catch((err) => {
  console.error("Execution failed:", err);
  process.exit(1);
});
