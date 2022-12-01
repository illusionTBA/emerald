/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
import { Searchbox } from '../components/proxy';
import { Navbar } from '../components/ui';
import Wave from 'react-wavify';
import { useSw } from '../components/hooks';
import Script from 'next/script';
const Home: NextPage = () => {
  useSw('/uv-sw.js', '/~/uv/');
  useEffect(() => {});
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Head>
        <title>Emerald | Home</title>
        <meta
          name="description"
          content="Emerald is an excelent utility service that provides hundreds of things . An astral service. "
        />
      </Head>
      <Navbar />
      <Searchbox />
      <div className="fixed bottom-0 w-full">
        <Wave
          fill="#354F52"
          paused={false}
          options={{
            height: 10,
            amplitude: 50,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
