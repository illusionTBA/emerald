if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const f=e=>r(e,c),o={module:{uri:c},exports:a,require:f};i[c]=Promise.all(s.map((e=>o[e]||f(e)))).then((e=>(d(...e),a)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"all-sw.js",revision:"7d66ce932565da634ab3e64664ea7d98"},{url:"dip-sw.js",revision:"e6454078900b1ae28738364af64105b0"},{url:"favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"images/192x192.png",revision:"23ecab91b405e301a2c44993cd67b503"},{url:"images/512x512.png",revision:"ef216c5e29c5fc4ce6394c789586d304"},{url:"images/apple-touch-icon.png",revision:"6a32972b051e564ca8ef76fdc2af73b0"},{url:"images/emerald.png",revision:"1556f44f8412349249854f44872f2d65"},{url:"images/favicon-16x16.png",revision:"a50dcf9c894a186e32283e6b1e27d6c6"},{url:"images/favicon-32x32.png",revision:"d2890f3a58702ae6fa93779ad8fb5fa8"},{url:"images/favicon.ico",revision:"202c799b38da554b736e2075860cd000"},{url:"images/waves.svg",revision:"00b32eec2edb38f2bdb1cf1a4ac345db"},{url:"manifest.json",revision:"d4f430e5416e2c70e55ccefb3f93ff34"},{url:"proxies/dip/dip.client.js",revision:"cdf73ba21d931b567622166a53d738d7"},{url:"proxies/dip/dip.config.js",revision:"f46cab818a84f5e54f08ea30a1dc076c"},{url:"proxies/dip/dip.handler.js",revision:"52a6c6080150bc10839391795cb40f66"},{url:"proxies/dip/dip.page.js",revision:"815d20dd6da681513469a06a9c3da839"},{url:"proxies/dip/dip.worker.js",revision:"eb953820d6d3560b3af46f5bf4ddee5a"},{url:"proxies/uv/README.md",revision:"89edacfe01f195b21c0fa4e06605c977"},{url:"proxies/uv/uv.bundle.js",revision:"82ffc402b84c64790847f0de755afdb4"},{url:"proxies/uv/uv.config.js",revision:"bc3d365b1c8263cf563bebfe097bae2e"},{url:"proxies/uv/uv.handler.js",revision:"f851487bd084c494d1c978b75b57e3f5"},{url:"proxies/uv/uv.sw.js",revision:"3d076dd72e93513a65322c83291d4a3f"},{url:"register/dip.js",revision:"5caccc408fe3dda8e7d4758d09a40288"},{url:"register/uv.js",revision:"adfdcf0fd92eee3569849b08d286a93c"},{url:"uv-sw.js",revision:"bb9059c5273c599c5e6d4af4dfa64e9a"},{url:"vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map