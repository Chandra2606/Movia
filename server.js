import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = process.cwd();
const types = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png"};

http.createServer(async (request, response) => {
  try {
    const requestPath = request.url === "/" ? "/index.html" : request.url.split("?")[0];
    const safePath = normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
    const filePath = join(root, safePath);
    const content = await readFile(filePath);
    response.writeHead(200, {"content-type": types[extname(filePath).toLowerCase()] || "application/octet-stream"});
    response.end(content);
  } catch {
    response.writeHead(404, {"content-type":"text/plain; charset=utf-8"});
    response.end("File tidak ditemukan");
  }
}).listen(port, () => {
  console.log(`Website Movia aktif di http://localhost:${port}`);
  console.log("Tekan Ctrl+C untuk menghentikan server.");
});
