/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import React, { useEffect } from 'react'
import Head from "next/head";
import dynamic from "next/dynamic";
const DynamicSearchbox = dynamic(
  () => import("../components/proxy/Searchbox"),
  {
    suspense: true,
  }
);
const DynamicNavbar = dynamic(() => import("../components/ui/Navbar"), {
  suspense: true,
});
import { Spinner, useToast } from "@chakra-ui/react";
import { Suspense } from "react";
import Wave from "react-wavify";
import { useSw } from "../components/hooks";

const Home: NextPage = () => {
	const toast = useToast();
	useEffect(() => {
		toast({
			title: "Games",
			description: "Later today i will be adding a games feature to emerald. These games would include flash, html games. Including emulators",
			status: "info",
			isClosable: true,
			duration: 2000
		})		
	}, [])
  useSw('/uv-sw.js', `/~/uv/`)
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Head>
        <title>Emerald | Home</title>
        <meta
          name="description"
          content="Emerald is an excelent utility service that provides hundreds of things . An astral service. "
        />
      </Head>
      <Suspense fallback={<Spinner className="fixed top-0" />}>
        <DynamicNavbar isFrame={false} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <DynamicSearchbox />
      </Suspense>
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
