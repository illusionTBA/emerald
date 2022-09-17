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
        destination: "http://localhost:3001/",
      },
      {
        source: "/bare/:path*/",
        destination: "http://localhost:3001/:path*/",
      },
    ];
  },
};

module.exports = nextconfig;