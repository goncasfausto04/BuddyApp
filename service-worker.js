const cacheName = "buddyapp-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/login.html",
  "/calendar.html",
  "/games.html",
  "/forum.html",
  "/buddy.html",
  "/settings.html",
  "/css/buddy-page.css",
  "/css/calendar-page.css",
  "/css/forum-page.css",
  "/css/games-page.css",
  "/css/login-page.css",
  "/css/settings-page.css",
  "/css/index-page.css",
  "buddy.png",
  "buddyface.png",
  "buddyhello.png",
  "icon-192.png",
  "icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
