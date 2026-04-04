var CACHE_NAME = "chaoxing-portal-v3";
var APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./app.webmanifest",
  "./app.en.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
];

function isCacheableResponse(response) {
  return !!response && response.ok && (response.type === "basic" || response.type === "default");
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key !== CACHE_NAME;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      ).then(function () {
        return self.clients.claim();
      });
    })
  );
});

self.addEventListener("fetch", function (event) {
  var request = event.request;
  var url = new URL(request.url);

  if (request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then(function (response) {
        if (isCacheableResponse(response)) {
          var clone = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then(function (cache) {
              return cache.put(request, clone);
            })
          );
        }
        return response;
      })
      .catch(function () {
        return caches.match(request).then(function (cached) {
          if (cached) return cached;
          if (request.mode === "navigate") return caches.match("./index.html");
          throw new Error("offline-and-uncached");
        });
      })
  );
});
