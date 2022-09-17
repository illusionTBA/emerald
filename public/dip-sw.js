importScripts('/proxies/dip/dip.worker.js');

const dip_sw = new DIPServiceWorker('/proxies/dip/dip.worker.js');

self.addEventListener('install', e => {
    console.log('> [sw] installed DIP sw')
})

self.addEventListener('fetch', event => {
    event.respondWith(dip_sw.fetch(event))
});