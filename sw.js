// sw.js

const cacheName = 'numpad-cache-v1';
const assets = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './favicon-16x16.png',
    './favicon.ico',
    './README.md',
];

// Install event - caching files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('Files cached');
            return cache.addAll(assets);
        })
    );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== cacheName)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch event - serving cached content
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
