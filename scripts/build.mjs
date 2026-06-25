import {readFile, rm, mkdir, writeFile, cp} from "node:fs/promises";
import {dirname, extname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = resolve(projectRoot, "dist");
const assetPaths = [
  "index.html",
  "styles.css",
  "app.js",
  "hero.jpg",
  "assets/movia-logo-wide.png",
  "assets/blog-airport.jpg",
  "assets/blog-passengers.jpg",
  "assets/blog-belongings.jpg",
  "assets/blog-family.jpg",
  "assets/blog-business.jpg",
  "assets/blog-electric.jpg",
  "assets/taxi-service.jpg",
  "assets/airport-transfer.jpg",
  "assets/shuttle-service.jpg",
  "assets/charter-bus.jpg"
];

await rm(distRoot, {recursive: true, force: true});
await mkdir(resolve(distRoot, "server"), {recursive: true});
await mkdir(resolve(distRoot, ".openai", "drizzle"), {recursive: true});

const assets = {};
for (const relativePath of assetPaths) {
  const buffer = await readFile(resolve(projectRoot, relativePath));
  assets[`/${relativePath}`] = buffer.toString("base64");
}

const workerTemplate = await readFile(resolve(projectRoot, "worker/index.js"), "utf8");
const workerSource = workerTemplate.replace("__EMBEDDED_ASSETS__", JSON.stringify(assets));
if (workerSource.includes("__EMBEDDED_ASSETS__")) throw new Error("Worker asset placeholder was not replaced.");

await writeFile(resolve(distRoot, "server/index.js"), workerSource);
await cp(resolve(projectRoot, ".openai/hosting.json"), resolve(distRoot, ".openai/hosting.json"));
await cp(resolve(projectRoot, ".openai/drizzle"), resolve(distRoot, ".openai/drizzle"), {recursive: true});

console.log(`Built ${distRoot} with ${Object.keys(assets).length} embedded assets (${assetPaths.filter((path) => extname(path)).length} files).`);
