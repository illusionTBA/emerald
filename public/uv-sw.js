importScripts('/proxies/uv/uv.bundle.js');
importScripts('/proxies/uv/uv.config.js');
importScripts(__uv$config.sw || 'uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
