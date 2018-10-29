/*all service worker code credit to Alexandro Perez https://alexandroperez.github.io/mws-walkthrough*/

const appName = "restaurant-review-app";
const staticCacheName = appName + "v1.0";
const contentImgsCache = appName + "img";

let allCaches = [
    staticCacheName,
    contentImgsCache
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                "/",
                "restaurant.html",
                "/css/styles.css",
                "/js/dbhelper.js",
                "/js/main.js",
                "js/restaurant_info.js",
                "data/restaurants.json"
            ]);
        })
    );
});

self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith(appName) &&
                        !allCaches.includes(cacheName);
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});