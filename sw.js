/* Odyssey Codex service worker: keeps the app usable offline.
   The page itself saves the Rulebook PDF (cache "ato-rulebook-v1") the first time the Rulebook tab is opened. */
const VERSION = "battles-6f5ed9";
const SHELL = "ato-shell-" + VERSION;
const ASSETS = ["./", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png",
  "icons/favicon-32.png", "vendor/pdfjs/pdf.min.js", "vendor/pdfjs/pdf.worker.min.js"];

self.addEventListener("install", e => {
  // bypass the browser's HTTP cache so a new version never stores an older page
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("ato-shell-") && k !== SHELL).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (url.pathname.endsWith(".pdf")) {
      e.respondWith(caches.open("ato-rulebook-v1").then(c => c.match(req, { ignoreSearch: true })).then(hit => hit || fetch(req)));
      return;
    }
    if (req.mode === "navigate") {
      // newest page when online, saved copy when offline
      e.respondWith(fetch(req.url, { cache: "no-cache", credentials: "same-origin" }).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put("./", copy)); }
        return res;
      }).catch(() => caches.match("./")));
      return;
    }
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open("ato-fonts").then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; }))));
  }
});
