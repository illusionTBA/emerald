importScripts('/proxies/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('install', e => {
    console.log('> [sw] installed UV sw')
})

self.addEventListener('fetch', event => {
    event.respondWith(
        sw.fetch(event)
    );
});

