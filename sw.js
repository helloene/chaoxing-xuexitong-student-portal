// Cache only the local app shell so offline mode never stores personal Chaoxing content.
// 只缓存本站点自己的应用外壳，避免离线缓存个人学习通内容。
var CACHE_NAME = "chaoxing-portal-v5";
var APP_SHELL = [
  "./",
  "./index.html",
  "./en.html",
  "./faq.html",
  "./faq.en.html",
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

function getNavigationFallback(pathname) {
  if (/\/faq\.en\.html$/.test(pathname)) return "./faq.en.html";
  if (/\/faq\.html$/.test(pathname)) return "./faq.html";
  if (/\/en\.html$/.test(pathname)) return "./en.html";
  return "./index.html";
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

  // Use a network-first strategy for fresh local assets, then fall back to cache when offline.
  // 对本站资源采用“网络优先”策略，离线时再回退到缓存。
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
          // For page navigations, fall back to the shell entry so the portal still opens offline.
          // 对页面导航请求，回退到入口页缓存，保证离线时仍能打开门户壳层。
          if (request.mode === "navigate") {
            return caches.match(getNavigationFallback(url.pathname));
          }
          throw new Error("offline-and-uncached");
        });
      })
  );
});
