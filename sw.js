// cache name
const CACHE_NAME = 'pawero-v2'
const urlsToCache = [
  '/',
  '/index.html',
  '/khp.html',
  '/div.html',
  '/404.html',
  '/structure.html',
  '/css/bootstrap.min.css',
  '/css/404.css',
  '/css/style.css',
  '/js/app.js',
  '/js/bootstrap.min.js',
  '/js/main.js',
  '/img/pawero.png',
  '/fontawesome/css/all.css',
  '/fontawesome/js/all.js',
  '/fontawesome/metadata/icons.json'
]

self.addEventListener('install', function(event){
  // Perform install step
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('In install serviceworker... cache opened!')
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName != CACHE_NAME
        }).map(function(cacheName) {
          return caches.delete(cacheName)
        })
      )
    })
  )
})

/*self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
})
*/
