// Service Worker minimal pour permettre l'installation de la PWA
self.addEventListener('install', (event) => {
  console.log('Service Worker installé !');
});

self.addEventListener('fetch', (event) => {
  // Nécessaire pour valider les critères d'une PWA
  event.respondWith(fetch(event.request));
});
