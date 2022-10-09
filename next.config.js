/** @type {import('next').NextConfig} */

const nextconfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  productionBrowserSourceMaps: false,
  trailingSlash: true,
  rewrites() {
    return [
      /* if you have another bare server you would like to use for this
        instead of the built in one just replace the " destination " value (leave the slashes)
      */
      {
        source: "/bare/",
        destination: "http://0.0.0.0:3006/",
      },
      {
        source: "/bare/:path*/",
        destination: "http://0.0.0.0:3006/:path*/",
      },
      {
        source: '/apps/',
        destination: "http://0.0.0.0:4545"
      },
      {
        source: '/umami.js',
        destination: "http://0.0.0.0:4000/umami.js"
      }
	
    ];
  },
};

module.exports = nextconfig;
