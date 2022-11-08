import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
const Ultraviolet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register SW</title>
      </Head>
      <Script src="/register/uv.js"></Script>
    </>
  );
};

export default Ultraviolet;
