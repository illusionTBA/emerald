importScripts('/proxies/old-uv/uv.bundle.js');
importScripts('/proxies/old-uv/uv.config.js');
importScripts('/proxies/old-uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
