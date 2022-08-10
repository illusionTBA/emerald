/* eslint-disable no-undef */
import React from 'react';
import { useRef } from 'react';
import { config } from '../config';
function SearchBar() {
  const input = useRef(null);
  const search = () => {
    window.navigator.serviceWorker
      .register('/sw.js', {
        scope: config.prefix,
      })
      .then(() => {
        let url = input.current.value;
        if (!isUrl(url)) url = 'https://search.brave.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://')))
          url = 'http://' + url;

        window.location.href = config.prefix + config.encodeUrl(url);
      });
  };
  function isUrl(val = '') {
    if (
      /^http(s?):\/\//.test(val) ||
      (val.includes('.') && val.substr(0, 1) !== ' ')
    )
      return true;
    return false;
  }
  return (
    <div className="flex flex-row justify-center items-center">
      <input
        placeholder="Emerald Search"
        type="search"
        className="input"
        onKeyDown={(e) => {
          if (e.key === 'Enter') search();
        }}
        ref={input}
      />
      <button className="search-button flex flex-row" onClick={search}>
        <span>Search</span>
      </button>
    </div>
  );
}

export default SearchBar;
