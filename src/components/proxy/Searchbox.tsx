import type { NextPage } from 'next';
import { useToast } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Router from 'next/router';
import { isUrl } from '../utils';
import useSettings from '../hooks/useSettings';
import { xor } from '../utils';

const Searchbox: NextPage = () => {
  const [control, setControl] = useState<string>();
  const input = useRef<any>(null);
  const [proxy, cloak, engine] = useSettings();
  const toast = useToast();
  const Psearch = () => {
    if (input.current.value === '') {
      return toast({
        position: 'bottom-right',
        title: 'Oops',
        description: 'Looks like you forgot to provide a non-empty value',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    let url = input.current.value;
    console.log(url);
    if (!isUrl(url)) url = 'https://search.brave.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://')))
      url = 'http://' + url;
    console.log(url);
    url = xor.encode(url);
    console.log(url);
    Router.push({
      pathname: '/service',
      query: { s: url },
    });
  };
  return (
    <div>
      <div
        className="relative h-10 w-[25rem] rounded-md border-[1px] border-[#e2e8f0] bg-transparent hover:cursor-text"
        onClick={() => input.current?.focus()}
      >
        <div className="-ml-2 flex h-full w-full flex-row items-center justify-center space-x-3">
          <FaSearch className="text-lg text-primary-100" />
          <input
            type="text"
            className="ml-2 h-full w-10/12 bg-transparent text-primary-100 outline-none"
            placeholder="Search"
            ref={input}
            value={control}
            onChange={(e) => setControl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') Psearch();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
