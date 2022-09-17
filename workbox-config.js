module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{js,ico,png,svg,json,md}"],
  swDest: "public/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
