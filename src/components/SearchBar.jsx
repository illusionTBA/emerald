/* eslint-disable no-undef */
import React from 'react';
import { useRef, useState } from 'react';
import { config } from '../config';
import BareClient from '@tomphttp/bare-client';
function SearchBar() {
  const input = useRef(null);
  const [Seggustions, setSuggestions] = useState([]);
  const bare = new BareClient(config.bare);
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

  const search_phrase = (phrase) => {
    window.navigator.serviceWorker
      .register('/sw.js', {
        scope: config.prefix,
      })
      .then(() => {
        let url = phrase;
        if (!isUrl(url)) url = 'https://search.brave.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://')))
          url = 'http://' + url;

        window.location.href = config.prefix + config.encodeUrl(url);
      });
  };

  const on_input = async () => {
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      return;
    }
    const res = await bare.fetch(
      'https://duckduckgo.com/ac/?q=' + input.current.value + '&type=list',
    );

    if (!res.ok) {
      console.log(res.status);
      return;
    }
    const data = await res.json();
    // only show the first 5 results
    if (data[1] !== undefined) {
      setSuggestions(data[1].slice(0, 5));
      console.log(data[1].slice(0, 5));
    }
  };

  const suggestions_map = () => {
    if (Seggustions.length === 0) return null;
    return (
      <div className="suggestions fixed bottom-0 p-1 w-fit rounded-md bg-primary-300">
        {Seggustions &&
          Seggustions.map((phrase, index) => {
            return (
              <div
                className="suggestion px-1 rounded-sm bg-primary-200 hover:cursor-pointer hover:bg-primary-300 transition-all"
                key={index}
              >
                <span
                  onClick={() => {
                    input.current.value = phrase;
                    search_phrase(phrase);
                  }}
                >
                  {phrase}
                </span>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <>
      <div className="flex relative flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Emerald Search"
            type="search"
            className="input"
            onKeyDown={(e) => {
              if (e.key === 'Enter') search();
            }}
            onInput={on_input}
            ref={input}
          />
          <button className="search-button flex flex-row" onClick={search}>
            <span>Search</span>
          </button>
        </div>

        {suggestions_map()}
      </div>
    </>
  );
}
function isUrl(val = '') {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes('.') && val.substr(0, 1) !== ' ')
  )
    return true;
  return false;
}
export default SearchBar;
