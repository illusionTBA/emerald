/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next';
import React, { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Searchbox } from '../components/proxy';
import { Navbar } from '../components/ui';
import { Spinner, useToast, Text } from '@chakra-ui/react';
import { Suspense } from 'react';
import Wave from 'react-wavify';
import { useSw } from '../components/hooks';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const Home: NextPage = () => {
  const bareLoad = useQuery(
    ['bareMemory'],
    (): Promise<any> =>
      axios
        .get('/bare/')
        .then((res) => res.data)
        .catch((e) => {
          if (e) {
            return;
          }
        }),
  );
  const users = useQuery(
    ['usersOnline'],
    (): Promise<any> => axios.get('/api/users').then((res) => res.data),
  );
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
      <div className="absolute left-10 bottom-10">
        {bareLoad.isLoading ? (
          <p>loading...</p>
        ) : (
          <p className="text-white">
            Bare usage:{' '}
            <span className="text-primary-100">
              {bareLoad.data?.memoryUsage}
            </span>
          </p>
        )}
      </div>
      <div className="absolute right-10 bottom-10">
        {users.isLoading ? (
          <p>loading...</p>
        ) : (
          <p className="text-white">
            Online users: <span className="text-primary-100">{users.data}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
