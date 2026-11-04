const CACHE_NAME = 'gidravlika-v3';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  if (e.request.url.includes('firebaseio.com') || e.request.url.includes('googleapis.com')) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});