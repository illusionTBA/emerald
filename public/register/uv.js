if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/uv-sw.js', {
    scope: window.__uv$config.prefix,
  });

  location.reload();
}
