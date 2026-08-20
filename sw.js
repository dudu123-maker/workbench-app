// v2.6 - 最简版：不拦截任何请求，仅清理旧缓存
self.addEventListener("install", function() {
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
  );
});

// 不注册 fetch 事件，让浏览器正常处理所有请求
