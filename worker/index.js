const embeddedAssets = __EMBEDDED_ASSETS__;
const assetCache = new Map();

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function decodeAsset(path) {
  if (assetCache.has(path)) return assetCache.get(path);
  const encoded = embeddedAssets[path];
  if (!encoded) return null;
  const binary = atob(encoded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  assetCache.set(path, bytes);
  return bytes;
}

function assetResponse(path) {
  const bytes = decodeAsset(path);
  if (!bytes) return null;
  const extension = path.slice(path.lastIndexOf("."));
  const isDocument = extension === ".html" || extension === ".css" || extension === ".js";
  return new Response(bytes, {
    headers: {
      "content-type": contentTypes[extension] || "application/octet-stream",
      "cache-control": isDocument ? "no-cache" : "public, max-age=86400",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin"
    }
  });
}

async function readBody(request) {
  const type = request.headers.get("content-type") || "";
  if (!type.includes("application/json")) throw new Error("Format permintaan tidak didukung.");
  return request.json();
}

function cleanText(value, maximum) {
  return String(value || "").trim().replace(/[\u0000-\u001f\u007f]/g, "").slice(0, maximum);
}

async function listTestimonials(env) {
  if (!env.DB) return json({error: "Database server belum tersedia.", storage: "local"}, 503);
  const result = await env.DB.prepare(
    "SELECT id, name, rating, testimonial AS text, created_at AS createdAt FROM testimonials ORDER BY id DESC LIMIT 12"
  ).all();
  return json({testimonials: result.results || [], storage: "d1"});
}

async function createTestimonial(request, env) {
  if (!env.DB) return json({error: "Database server belum tersedia."}, 503);
  const body = await readBody(request);
  const name = cleanText(body.name, 80);
  const text = cleanText(body.text, 500);
  const rating = Number(body.rating);
  if (name.length < 2 || text.length < 10 || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({error: "Nama, rating, atau testimoni belum valid."}, 400);
  }
  const createdAt = new Date().toISOString();
  const result = await env.DB.prepare(
    "INSERT INTO testimonials (name, rating, testimonial, created_at) VALUES (?, ?, ?, ?)"
  ).bind(name, rating, text, createdAt).run();
  return json({id: result.meta?.last_row_id, name, rating, text, createdAt}, 201);
}

async function createSupportLead(request, env) {
  if (!env.DB) return json({saved: false, storage: "local"}, 202);
  const body = await readBody(request);
  const name = cleanText(body.name, 80);
  const phone = cleanText(body.phone, 30);
  if (name.length < 2 || phone.replace(/\D/g, "").length < 9) {
    return json({error: "Nama atau nomor HP belum valid."}, 400);
  }
  await env.DB.prepare(
    "INSERT INTO support_leads (name, phone, source, created_at) VALUES (?, ?, ?, ?)"
  ).bind(name, phone, "ai-chat", new Date().toISOString()).run();
  return json({saved: true, storage: "d1"}, 201);
}

async function handleApi(request, env, path) {
  try {
    if (path === "/api/testimonials" && request.method === "GET") return listTestimonials(env);
    if (path === "/api/testimonials" && request.method === "POST") return createTestimonial(request, env);
    if (path === "/api/support" && request.method === "POST") return createSupportLead(request, env);
    return json({error: "Endpoint tidak ditemukan."}, 404);
  } catch (error) {
    return json({error: "Permintaan belum dapat diproses.", detail: String(error.message || error)}, 500);
  }
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path.startsWith("/api/")) return handleApi(request, env, path);
    if (request.method !== "GET" && request.method !== "HEAD") return new Response("Method not allowed", {status: 405});

    const normalized = path === "/" || path === "/index.html" ? "/index.html" : path;
    const response = assetResponse(normalized);
    return response || new Response("Not found", {status: 404});
  }
};
