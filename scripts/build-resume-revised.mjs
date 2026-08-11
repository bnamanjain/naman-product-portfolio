import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const personalDrive = new URL(
  "file:///Users/namanjain/Library/CloudStorage/GoogleDrive-bnamanjain@gmail.com/My%20Drive/Resumes/Naman%20Jain/",
);

const resumes = [
  {
    source: new URL(
      "../resume/revised/Naman-Jain-Product-Manager-Resume.html",
      import.meta.url,
    ),
    destination: new URL(
      "Naman-Jain-Product-Manager-Resume.pdf",
      personalDrive,
    ),
  },
  {
    source: new URL(
      "../resume/revised/Naman-Jain-Business-Program-Category-Resume.html",
      import.meta.url,
    ),
    destination: new URL(
      "Naman-Jain-Business-Program-Category-Resume.pdf",
      personalDrive,
    ),
  },
];

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

await mkdir(personalDrive, { recursive: true });

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
