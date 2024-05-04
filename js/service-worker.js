const CACHE_NAME = "minimalistic_writer_cache_v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js",
  "/manifest/icon-192x192.png",
  "/manifest/icon-256x256.png",
  "/manifest/icon-384x384.png",
  "/manifest/icon-212x212.png",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(urlsToCache);
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;
      else {
        try {
          return await fetch(event.request);
        } catch (error) {
          console.error("Fetch failed:", error);
        }
      }
    })()
  );
});
