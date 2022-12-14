/*global Ultraviolet*/
self.__uv$config = {
  prefix: '/~/uv/',
  bare: 'http://161.97.156.62:7000/bare/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/proxies/uv/uv.handler.js',
  client: '/proxies/uv/uv.client.js',
  bundle: '/proxies/uv/uv.bundle.js',
  config: '/proxies/uv/uv.config.js',
  sw: '/proxies/uv/uv.sw.js',
};
