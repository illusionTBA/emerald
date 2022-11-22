self.__uv$config = {
    prefix: '/~/uv/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/proxies/uv/uv.handler.js',
    bundle: '/proxies/uv/uv.bundle.js',
    config: '/proxies/uv/uv.config.js',
    sw: '/proxies/uv/uv.sw.js',
};