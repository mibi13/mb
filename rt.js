importScripts('https://raw.githubusercontent.com/mibi13/mb/master/client.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('ramaibeud').then(function(cache) {
return cache.addAll([
'/'
]);
})
);
});
self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});
