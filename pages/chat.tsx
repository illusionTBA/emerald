/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next';
import React, { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/ui';
import { Input, Stack } from '@chakra-ui/react';
const Chat = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Head>
        <title>Emerald | Chat</title>
        <meta
          name="description"
          content="Emerald is an excelent utility service that provides hundreds of things . An astral service. "
        />
      </Head>
      <Navbar />

      <div className=" chatContainer flex w-full h-screen relative flex-col">
        <div className=" controls-container items-center justify-center flex flex-row bg-primary-400 rounded-t-md fixed h-20 bottom-0 w-full">
          <Input
            placeholder="large size"
            size="lg"
            variant="flushed"
            width={'96'}
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
