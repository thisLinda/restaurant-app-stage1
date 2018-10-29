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
                "/index.html",
                "/restaurant.html",
                "/css/styles.css",
                "/data/restaurants.json",
                "/img/1.jpg",
                "/img/2.jpg",
                "/img/3.jpg",
                "/img/4.jpg",
                "/img/5.jpg",
                "/img/6.jpg",
                "/img/7.jpg",
                "/img/8.jpg",
                "/img/9.jpg",
                "/img/10.jpg",
                "/js/dbhelper.js",
                "/js/main.js",
                "/js/restaurant_info.js",
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