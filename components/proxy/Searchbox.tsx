import type { NextPage } from "next";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Router from "next/router";
import { isUrl } from "../utils";
import useSettings from "../hooks/useSettings";
import { xor } from "../utils";
// Using HU method rn will change later!
type UVEncode = (encoded: string) => string;
type UVDecode = (encoded: string) => string;

interface UVConfig {
  bare: string;
  prefix: string;
  handler: string;
  bundle: string;
  config: string;
  sw: string;
  encodeUrl: UVEncode;
  decodeUrl: UVDecode;
}

declare const __uv$config: UVConfig;

type DIPEncode = (encoded: string) => string;
type DIPDecode = (encoded: string) => string;

interface DIPconfig {
  bare: string;
  cookies: boolean;
  encoding: string;
  prefix: string;
  tab: {
    title?: string;
    icon?: string;
    ua?: string;
  };
  worker: boolean;
  ws: boolean;
}
interface DIP {
  config: DIPconfig;
  decodeURL: DIPDecode;
  encodeURL: DIPEncode;
}

declare const __DIP: DIP;

const Searchbox: NextPage = () => {
  const [fallbackInput, setFallbackInput] = useState<string>();
  const input = useRef<any>(null);
  const [proxy, cloak, engine] = useSettings();
  const toast = useToast();
  const Search = () => {
    if (input.current.value === "") {
      return toast({
        position: "bottom-right",
        title: "Oops",
        description: "Looks like you forgot to provide a non-empty value",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    let url = input.current.value;
    console.log(url);
    if (!isUrl(url)) url = "https://duckduckgo.com/?q=" + url;
    else if (!(url.startsWith("https://") || url.startsWith("http://")))
      url = "http://" + url;
    console.log(url);
    url = xor.encode(url);
    console.log(url);
    Router.push({
      pathname: "/service",
      query: { s: url },
    });
  };
  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch className=" text-lg text-primary-100 hover:text-primary-200" />
        </InputLeftElement>
        <Input
          colorScheme="emerald"
          placeholder="Search"
          className=" text-primary-100"
          ref={input}
          width={400}
          onChange={(e) => setFallbackInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") Search();
          }}
        />
      </InputGroup>
    </div>
  );
};

export default Searchbox;
