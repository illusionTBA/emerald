import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Script from 'next/script';
const Ultraviolet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register SW</title>
      </Head>
      <Script src="/register/dip.js"></Script>
    </>
  );
};

export default Ultraviolet;
