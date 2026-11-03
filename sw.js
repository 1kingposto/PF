const CACHE='pf-posto-fitness-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(res=>{if(res.ok&&new URL(event.request.url).origin===self.location.origin){const copy=res.clone();caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{})}return res}).catch(()=>caches.match(event.request).then(res=>res||caches.match('./index.html'))))});
