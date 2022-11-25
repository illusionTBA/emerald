// UV types

type UVEncode = (encoded: string) => string;
type UVDecode = (encoded: string) => string;

export type UVConfig = {
  bare: string;
  prefix: string;
  handler: string;
  bundle: string;
  config: string;
  sw: string;
  encodeUrl: UVEncode;
  decodeUrl: UVDecode;
};

// DIP types

type DIPEncode = (encoded: string) => string;
type DIPDecode = (encoded: string) => string;

export type DIPconfig = {
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
};

export type DIP = {
  config: DIPconfig;
  decodeURL: DIPDecode;
  encodeURL: DIPEncode;
};
