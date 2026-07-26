import { spawnSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const nextCli = resolve(projectRoot, "node_modules/next/dist/bin/next");
const outputRoot = resolve(projectRoot, "out");
const publicRoot = resolve(projectRoot, "public");

for (const generatedPath of [
  resolve(publicRoot, "_next"),
  resolve(publicRoot, "_not-found"),
  resolve(publicRoot, "index.html"),
  resolve(publicRoot, "index.rsc"),
  resolve(publicRoot, "index.txt"),
  resolve(publicRoot, "404.html"),
  resolve(publicRoot, "404"),
  resolve(publicRoot, "icon.svg"),
  resolve(publicRoot, "__next.__PAGE__.txt"),
  resolve(publicRoot, "__next._full.txt"),
  resolve(publicRoot, "__next._head.txt"),
  resolve(publicRoot, "__next._index.txt"),
  resolve(publicRoot, "__next._tree.txt"),
  resolve(publicRoot, "work"),
]) {
  rmSync(generatedPath, { recursive: true, force: true });
}

rmSync(outputRoot, { recursive: true, force: true });

const result = spawnSync(process.execPath, [nextCli, "build"], {
  cwd: projectRoot,
  env: process.env,
  stdio: "inherit",
});

if (result.status !== 0 || !existsSync(resolve(outputRoot, "index.html"))) {
  throw new Error("Next.js static export failed.");
}

cpSync(outputRoot, publicRoot, { recursive: true });
console.log("Built static portfolio routes into public/.");
