/* eslint-disable */
if (!self.__DIP) self.__DIP = {};

self.__DIP.config = {
  prefix: '/~/dip/',
  encoding: 'xor',
  ws: true,
  cookies: true,
  worker: true,
  bare: {
    version: 2,
    path: 'https://bare-server-heroku.herokuapp.com/',
  },
  tab: {
    ua: 'Mozilla/5.0 (X11; CrOS x86_64 14388.61.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.107 Safari/537.36'
  }
};