self.__uv$config = {
  prefix: '/~/uv/',
  bare: '/bare/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/proxies/old-uv/uv.handler.js',
  bundle: '/proxies/old-uv/uv.bundle.js',
  config: '/proxies/old-uv/uv.config.js',
  sw: '/proxies/old-uv/uv.sw.js',
};
