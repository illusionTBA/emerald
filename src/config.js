/* eslint-disable no-undef */
import { xor } from "./components/xor"
export const config = {
    prefix: '/~/',
    bare: 'https://bare.illusionss.dev/',
    encodeUrl: xor.encode,
    decodeUrl: xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
}