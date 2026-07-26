import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = process.env.PORTFOLIO_URL || "http://localhost:3000";
const outputDir = new URL("../test-artifacts/", import.meta.url);
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--no-sandbox"],
});

const failures = [];

function observe(page, label) {
  page.on("console", (message) => {
    if (message.type() === "error") {
      failures.push(`${label} console: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    failures.push(`${label} page error: ${error.message}`);
  });
  page.on("requestfailed", (request) => {
    failures.push(
      `${label} request failed: ${request.url()} (${request.failure()?.errorText || "unknown"})`,
    );
  });
  page.on("response", (response) => {
    if (response.status() >= 400) {
      failures.push(`${label} HTTP ${response.status()}: ${response.url()}`);
    }
  });
}

async function assertNoOverflow(page, label) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  if (dimensions.scrollWidth > dimensions.clientWidth + 1) {
    failures.push(
      `${label} horizontal overflow: ${dimensions.scrollWidth} > ${dimensions.clientWidth}`,
    );
  }
}

async function verifyHome(viewport, label) {
  const page = await browser.newPage({ viewport });
  observe(page, label);
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: "Naman Jain", exact: true }).waitFor();
  await assertNoOverflow(page, `${label} home`);

  if (viewport.width <= 820) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).waitFor();
    await page.getByRole("button", { name: "Close navigation" }).click();
  }

  await page.screenshot({
    path: new URL(`${label}-home.png`, outputDir).pathname,
    fullPage: true,
  });
  await page.getByRole("link", { name: /View flagship case/i }).click();
  await page.getByRole("heading", {
    name: "Affordable Commerce inside super.money",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `${label} case`);
  await page.screenshot({
    path: new URL(`${label}-case.png`, outputDir).pathname,
    fullPage: true,
  });
  await page.getByRole("button", { name: /Seller web/i }).click();
  await page.getByRole("tab", { name: "Catalogue", exact: true }).click();
  await page.getByRole("heading", { name: "Make financeability actionable" }).waitFor();
  await assertNoOverflow(page, `${label} seller gallery`);
  await page.getByRole("button", { name: /Expand Make financeability/i }).click();
  await page.getByRole("dialog", {
    name: "Make financeability actionable screenshot",
  }).waitFor();
  await page.keyboard.press("Escape");
  await page.getByRole("tab", { name: "Checkout", exact: true }).click();
  await page.getByRole("heading", { name: "A durable checkout saga" }).waitFor();
  await assertNoOverflow(page, `${label} diagram gallery`);
  await page.close();
}

await verifyHome({ width: 1440, height: 1000 }, "desktop");
await verifyHome({ width: 390, height: 844 }, "mobile");

for (const width of [360, 430, 768]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  observe(page, `responsive ${width}`);
  await page.goto(`${baseUrl}/work/affordable-commerce`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Affordable Commerce inside super.money",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `case ${width}px`);
  await page.close();
}

const assetPage = await browser.newPage();
for (const asset of [
  "/downloads/Naman-Jain-Product-Manager-Resume.pdf",
  "/downloads/super-money-affordable-commerce-pitch.pptx",
]) {
  const response = await assetPage.request.get(`${baseUrl}${asset}`);
  if (!response.ok()) {
    failures.push(`download ${asset} returned ${response.status()}`);
  }
}
await assetPage.close();

await browser.close();

if (failures.length) {
  console.error("Portfolio verification failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Portfolio verification passed on desktop and mobile.");
