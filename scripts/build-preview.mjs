import {readFile, writeFile} from "node:fs/promises";
import {resolve, dirname, extname} from "node:path";
import {fileURLToPath} from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "..", "movia-preview.html");

const mimeTypes = {
  ".jpg": "image/jpeg",
  ".png": "image/png"
};

const imagePaths = [
  "hero.jpg",
  "assets/movia-logo-wide.png",
  "assets/taxi-service.jpg",
  "assets/airport-transfer.jpg",
  "assets/shuttle-service.jpg",
  "assets/charter-bus.jpg",
  "assets/blog-airport.jpg",
  "assets/blog-passengers.jpg",
  "assets/blog-belongings.jpg",
  "assets/blog-family.jpg",
  "assets/blog-business.jpg",
  "assets/blog-electric.jpg"
];

let [html, css, javascript] = await Promise.all([
  readFile(resolve(projectRoot, "index.html"), "utf8"),
  readFile(resolve(projectRoot, "styles.css"), "utf8"),
  readFile(resolve(projectRoot, "app.js"), "utf8")
]);

for (const imagePath of imagePaths) {
  const data = await readFile(resolve(projectRoot, imagePath));
  const dataUrl = `data:${mimeTypes[extname(imagePath)]};base64,${data.toString("base64")}`;
  html = html.replaceAll(imagePath, dataUrl);
  css = css.replaceAll(imagePath, dataUrl);
  javascript = javascript.replaceAll(imagePath, dataUrl);
}

html = html
  .replace('<link rel="stylesheet" href="styles.css">', `<style>${css}</style>`)
  .replace('<script src="app.js"></script>', `<script>${javascript.replaceAll("</script>", "<\\/script>")}</script>`);

await writeFile(outputPath, html);
console.log(`Standalone preview created at ${outputPath}`);
