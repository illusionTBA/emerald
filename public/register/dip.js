if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/dip-sw.js', { scope: '/~' }).then(e => location.reload())

    console.log('register dip')
}