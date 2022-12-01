/** @type {import('next').NextConfig} */

const nextconfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  trailingSlash: true,
  rewrites() {
    return [
      /* if you have another bare server you would like to use for this
        instead of the built in one just replace the " destination " value (leave the slashes)
      */
      {
        source: '/bare/',
        destination: 'http://127.0.0.1:7071/',
      },
      {
        source: '/bare/:path*/',
        destination: 'http://127.0.0.1:7071/:path*/',
      },
    ];
  },
};

module.exports = nextconfig;
