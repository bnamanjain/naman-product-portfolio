import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const resumes = [
  {
    source: new URL(
      "../resume/revised/Naman-Jain-Product-Manager-Resume.html",
      import.meta.url,
    ),
    destination: new URL(
      "../public/downloads/Naman-Jain-Product-Manager-Resume.pdf",
      import.meta.url,
    ),
  },
];
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

await mkdir(new URL("../public/downloads/", import.meta.url), { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--no-sandbox"],
});
for (const resume of resumes) {
  const page = await browser.newPage();
  await page.goto(resume.source.href, { waitUntil: "load" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: fileURLToPath(resume.destination),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
  });
  await page.close();
  console.log(`Generated ${fileURLToPath(resume.destination)}`);
}
await browser.close();
