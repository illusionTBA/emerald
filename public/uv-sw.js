importScripts('/proxies/uv.bundle.js');
importScripts('/proxies/uv.config.js');
importScripts('/proxies/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
