importScripts('/proxies/dip/dip.worker.js');
importScripts('/proxies/uv/uv.sw.js');
const dip_sw = new DIPServiceWorker('/proxies/dip/dip.worker.js');
const uv_sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(location.origin + __DIP.config.prefix)) event.respondWith(dip_sw.fetch(event));
    if (event.request.url.startsWith(location.origin + __uv$config.prefix)) event.respondWith(uv_sw.fetch(event));
});