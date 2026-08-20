// v2.5 - 彻底无缓存版，确保手机端加载最新内容
var CACHE_VERSION = "v2.5";

self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(keys) {
        return Promise.all(keys.map(function(key) {
          return caches.delete(key);
        }));
      })
      .then(function() {
        return self.clients.claim();
      })
      .then(function() {
        return self.clients.matchAll();
      })
      .then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({ type: "SW_ACTIVATED", version: CACHE_VERSION });
        });
      })
  );
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request, {
      cache: "no-store",
      credentials: "same-origin"
    }).then(function(response) {
      var newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      newResponse.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
      newResponse.headers.set("Pragma", "no-cache");
      newResponse.headers.set("Expires", "0");
      return newResponse;
    }).catch(function() {
      return new Response("网络错误，请检查网络连接", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    })
  );
});
