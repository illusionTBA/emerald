import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDisclosure, Text, Button, Spinner, Stack } from '@chakra-ui/react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  AiOutlineReload as Reload,
  AiOutlineTool as Devtools,
} from 'react-icons/ai';
import { BsBookmark as Bookmark } from 'react-icons/bs';
import { MdExitToApp as Exit } from 'react-icons/md';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
const DynamicSearchbox = dynamic(() => import('../proxy/Searchbox'), {
  suspense: true,
});
import { useRouter } from 'next/router';
const Servicenav = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex relative top-0 bg-primary-400 h-16 w-full rounded-b-lg justify-center items-center md:hidden">
        <div className="flex items-center m-2 w-full h-full justify-between">
          <div className="flex items-center justify-center flex-row space-x-6">
            <Image
              src={'/images/emerald.png'}
              alt="emerald"
              width={50}
              height={50}
              className="m-5"
            />
            <Text fontSize="3xl" className="flex text-primary-100">
              {`Emerald`}
            </Text>
          </div>
          <Suspense fallback={<Spinner />}>
            <DynamicSearchbox />
          </Suspense>
          <div className="space-x-3 flex flex-row mr-5">
            <Tooltip
              hasArrow
              label={'Soon'}
              bg="base.300"
              color={'base.100'}
              placement="bottom"
            >
              <IconButton
                aria-label="Reload page"
                colorScheme={'base'}
                textColor={'base.400'}
                fontSize={'2xl'}
                icon={<Bookmark />}
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label={'Soon'}
              bg="base.300"
              color={'base.100'}
              placement="bottom"
            >
              <IconButton
                aria-label="Open a chrome like devtool menu"
                colorScheme={'base'}
                textColor={'base.400'}
                fontSize={'2xl'}
                icon={<Devtools />}
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label={'Soon'}
              bg="base.300"
              color={'base.100'}
              placement="bottom"
            >
              <IconButton
                aria-label="Reload page"
                colorScheme={'base'}
                textColor={'base.400'}
                fontSize={'2xl'}
                icon={<Reload />}
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label={'Exit'}
              bg="base.300"
              color={'base.100'}
              placement="bottom"
            >
              <IconButton
                aria-label="Exit"
                colorScheme={'base'}
                fontSize={'2xl'}
                icon={<Exit />}
                onClick={() => {
                  router.push('/');
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicenav;
