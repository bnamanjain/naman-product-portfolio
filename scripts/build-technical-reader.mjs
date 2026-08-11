import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const source = new URL(
  "../career/technical-reader/Allo-Health-Technical-Systems-Reader.html",
  import.meta.url,
);
const stylesheet = new URL(
  "../career/technical-reader/reader.css",
  import.meta.url,
);
const personalDrive = new URL(
  "file:///Users/namanjain/Library/CloudStorage/GoogleDrive-bnamanjain@gmail.com/My%20Drive/Resumes/Naman%20Jain/Technical%20Systems%20Reader/",
);
const htmlDestination = new URL(
  "Allo-Health-Technical-Systems-Reader.html",
  personalDrive,
);
const pdfDestination = new URL(
  "Allo-Health-Technical-Systems-Reader.pdf",
  personalDrive,
);
const markdownDestination = new URL(
  "README-How-to-use-this-reader.txt",
  personalDrive,
);

const diagramFiles = [
  "system-context.svg",
  "api-lifecycle.svg",
  "journey-orchestration.svg",
  "schema-model.svg",
];

let html = await readFile(source, "utf8");
const css = await readFile(stylesheet, "utf8");
html = html.replace(
  '<link rel="stylesheet" href="./reader.css" />',
  `<style>${css}</style>`,
);

for (const name of diagramFiles) {
  const diagram = new URL(
    `../public/assets/healthcare-systems/${name}`,
    import.meta.url,
  );
  const svg = await readFile(diagram);
  const dataUrl = `data:image/svg+xml;base64,${svg.toString("base64")}`;
  html = html.replaceAll(
    `../../public/assets/healthcare-systems/${name}`,
    dataUrl,
  );
}

await mkdir(personalDrive, { recursive: true });
await writeFile(htmlDestination, html, "utf8");
await writeFile(
  markdownDestination,
  [
    "Allo Health Technical Systems Reader",
    "",
    "Open the PDF for the best reading experience.",
    "Open the HTML version in any browser if you want searchable, selectable text.",
    "",
    "This is a private study document. The live portfolio contains a separate sanitized public case study.",
  ].join("\n"),
  "utf8",
);

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.goto(htmlDestination.href, { waitUntil: "load" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: fileURLToPath(pdfDestination),
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  tagged: true,
});
await page.close();
await browser.close();

console.log(`Generated ${fileURLToPath(htmlDestination)}`);
console.log(`Generated ${fileURLToPath(pdfDestination)}`);
