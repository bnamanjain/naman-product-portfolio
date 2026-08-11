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
  await page
    .waitForFunction(
      () =>
        document.documentElement.scrollWidth <=
        document.documentElement.clientWidth + 1,
      undefined,
      { timeout: 5000 },
    )
    .catch(() => {});

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

  const wisprCaseLink = page.getByRole("link", {
    name: /Read Wispr Notetaker.*case study/i,
  });
  await wisprCaseLink.waitFor();
  if ((await wisprCaseLink.getAttribute("href")) !== "/work/wispr-screen-context") {
    failures.push(`${label} Wispr case-study link is missing or incorrect`);
  }

  const wisprPrototype = page.locator(
    'a[href="https://bnamanjain.github.io/wispr-flow-screen-aware-workflows-concept/"]',
  );
  if ((await wisprPrototype.count()) < 1) {
    failures.push(`${label} Wispr prototype link is missing`);
  }

  const handshakeCaseLink = page.getByRole("link", {
    name: /Read The 60-second Handshake case study/i,
  });
  await handshakeCaseLink.waitFor();
  if ((await handshakeCaseLink.getAttribute("href")) !== "/work/allo-handshake") {
    failures.push(`${label} Handshake case-study link is missing or incorrect`);
  }
  if (viewport.width <= 820) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).waitFor();
    await page.getByRole("button", { name: "Close navigation" }).click();
  }

  await page.screenshot({
    path: new URL(`${label}-home.png`, outputDir).pathname,
    fullPage: true,
  });
  await page.getByRole("link", { name: /View production work/i }).click();
  await page.getByRole("heading", {
    name: "Operating evidence from products I shipped.",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `${label} operating evidence`);
  await page.screenshot({
    path: new URL(`${label}-operating-evidence.png`, outputDir).pathname,
    fullPage: true,
  });

  await page.goto(`${baseUrl}/work/affordable-commerce`, {
    waitUntil: "networkidle",
  });
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

  await page.goto(`${baseUrl}/work/healthcare-journey-systems`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Healthcare Journey Systems",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `${label} healthcare systems case`);
  await page.screenshot({
    path: new URL(`${label}-healthcare-systems.png`, outputDir).pathname,
    fullPage: true,
  });
  await page.goto(`${baseUrl}/work/wispr-screen-context`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Wispr hears the meeting. What if it also understood the screen?",
    exact: true,
  }).waitFor();
  await page.getByText("What Wispr currently does.").waitFor();
  await page.getByText("Add one optional feature: Screen Context.").waitFor();
  await assertNoOverflow(page, `${label} Wispr case`);

  await page.goto(`${baseUrl}/blog`, { waitUntil: "networkidle" });
  await page.getByRole("heading", {
    name: "Notes on systems, money, and uncertain decisions.",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `${label} blog index`);
  await page.screenshot({
    path: new URL(`${label}-blog.png`, outputDir).pathname,
    fullPage: true,
  });
  await page.getByRole("link", {
    name: "Repeat revenue is a systems problem, not a reminder problem",
    exact: true,
  }).click();
  await page.getByRole("heading", {
    name: "Repeat revenue is a systems problem, not a reminder problem",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `${label} blog article`);
  await page.close();
}

async function verifyHandshakeCase(viewport, label) {
  const page = await browser.newPage({ viewport });
  observe(page, `${label} Handshake case`);
  await page.goto(`${baseUrl}/work/allo-handshake`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "The 60 seconds that protected a patient handoff.",
    exact: true,
  }).waitFor();
  await page.getByText("~55% → ~90%", { exact: true }).first().waitFor();
  await page.waitForTimeout(750);
  await page.getByRole("button", { name: "Submit Rx & alert agent" }).click();
  await page.getByText("Agent alerted · joining window", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Simulate agent joining" }).click();
  await page.getByText(/Care agent joined · doctor can introduce and leave/i).waitFor();
  await assertNoOverflow(page, `${label} Handshake case`);
  await page.screenshot({
    path: new URL(`${label}-handshake-case.png`, outputDir).pathname,
    fullPage: true,
  });
  await page.close();
}

await verifyHome({ width: 1440, height: 1000 }, "desktop");
await verifyHome({ width: 390, height: 844 }, "mobile");
await verifyHandshakeCase({ width: 1440, height: 1000 }, "desktop");
await verifyHandshakeCase({ width: 390, height: 844 }, "mobile");

for (const width of [360, 430, 768]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  observe(page, `responsive ${width}`);
  await page.goto(`${baseUrl}/work/operating-evidence`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Operating evidence from products I shipped.",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `operating evidence ${width}px`);

  await page.goto(`${baseUrl}/work/affordable-commerce`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Affordable Commerce inside super.money",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `case ${width}px`);

  await page.goto(`${baseUrl}/work/healthcare-journey-systems`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Healthcare Journey Systems",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `healthcare systems ${width}px`);

  await page.goto(`${baseUrl}/work/wispr-screen-context`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Wispr hears the meeting. What if it also understood the screen?",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `Wispr case ${width}px`);

  await page.goto(`${baseUrl}/work/allo-handshake`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "The 60 seconds that protected a patient handoff.",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `Handshake case ${width}px`);

  await page.goto(`${baseUrl}/blog/games-with-odds`, {
    waitUntil: "networkidle",
  });
  await page.getByRole("heading", {
    name: "Games with odds: markets, products, and deciding without certainty",
    exact: true,
  }).waitFor();
  await assertNoOverflow(page, `blog article ${width}px`);
  await page.close();
}

const assetPage = await browser.newPage();
for (const asset of [
  "/downloads/Naman-Jain-Product-Manager-Resume.pdf",
  "/downloads/super-money-affordable-commerce-pitch.pptx",
  "/assets/healthcare-systems/system-context.svg",
  "/assets/healthcare-systems/api-lifecycle.svg",
  "/assets/healthcare-systems/journey-orchestration.svg",
  "/assets/healthcare-systems/schema-model.svg",
  "/assets/wispr-screen-workflows/current-gap-proposal.png",
  "/assets/wispr-screen-workflows/workflow-ready.png",
]) {
  const response = await assetPage.request.get(`${baseUrl}${asset}`);
  if (!response.ok()) {
    failures.push(`download ${asset} returned ${response.status()}`);
  }
}

const privateResumeResponse = await assetPage.request.get(
  `${baseUrl}/downloads/Naman-Jain-Business-Program-Category-Resume.pdf`,
  { maxRedirects: 0 },
);
if (![302, 404].includes(privateResumeResponse.status())) {
  failures.push(
    `private resume path returned unexpected status ${privateResumeResponse.status()}`,
  );
}
await assetPage.close();

await browser.close();

if (failures.length) {
  console.error("Portfolio verification failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Portfolio verification passed on desktop and mobile.");
