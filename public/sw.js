/* eslint-disable */
importScripts('/uv/uv.sw.js');
importScripts('/dip/dip.worker.js');

const sw = new UVServiceWorker();
const dipsw = new DIPServiceWorker('./dip/dip.worker.js');
self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(location.origin + '/~/dip/')) event.respondWith(dipsw.fetch(event));
    if (event.request.url.startsWith(location.origin + '/~/uv/')) event.respondWith(sw.fetch(event));
});