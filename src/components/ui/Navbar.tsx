import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDisclosure, Text, Button, Stack } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Input,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoIosApps } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { xor, isUrl } from '../utils';
import { useApps } from '../hooks';
import { useRouter } from 'next/router';
interface App {
  title: string;
  icon: string | React.ReactNode;
  source: string;
}

const Navbar = () => {
  const [apps, setApps] = useState<any[]>([]);
  const [appInput, setAppInput] = useState('');
  const [appTitle, setAppTitle] = useState('');
  const { apps: getApps, createApp } = useApps();
  useEffect(() => {
    const asyncfetch = async () => {
      await fetch('/api/apps/')
        .then((res) => res.json())
        .then((data) => setApps(data));
    };

    asyncfetch();
  }, []);
  const toast = useToast();
  const createAppCheck = (app: { url: string; title: string }) => {
    if (!app.url.startsWith('https://') || app.url.startsWith('http://')) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter https:// or http://',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else if (!isUrl(app.url)) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter a valid URL',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      createApp(app);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isAppOpen,
    onOpen: onAppOpen,
    onClose: onAppClose,
  } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <motion.div
        className="flex fixed top-0 bg-primary-400 h-20 w-7/12 rounded-b-lg justify-center items-center md:hidden"
        exit={{
          scale: 1,
        }}
        transition={{ type: 'linear' }}
      >
        <div className="flex items-center m-2 w-full h-full justify-between">
          <div className="flex items-center justify-center flex-row space-x-6">
            <Image
              src={'/images/emerald.png'}
              alt="emerald"
              width={50}
              height={50}
              className="m-5"
            />
            <Text fontSize="5xl" className="flex text-primary-100">
              Emerald
            </Text>
          </div>

          <div className="space-x-3 flex flex-row">
            <Button
              colorScheme={'purple'}
              variant="outline"
              leftIcon={<FaDiscord />}
              onClick={() => {
                router.push({
                  pathname: 'https://discord.gg/nq5xqEbHtp',
                });
              }}
            >
              Discord
            </Button>
            <Button
              colorScheme={'twitter'}
              variant="outline"
              leftIcon={<IoIosApps />}
              onClick={onAppOpen}
            >
              Apps
            </Button>
            <Tooltip label={'soon'} placement={'bottom'}>
              <Button
                colorScheme={'base'}
                variant="outline"
                leftIcon={<BsFillPeopleFill />}
              >
                Theater
              </Button>
            </Tooltip>
            <Tooltip label={'soon'} placement={'bottom'}>
              <Button
                colorScheme={'base'}
                variant="outline"
                leftIcon={<FaCog />}
              >
                Settings
              </Button>
            </Tooltip>
          </div>
        </div>
      </motion.div>
      {/* App drawer */}
      <Drawer onClose={onAppClose} isOpen={isAppOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={'#354f52'} textColor={'base.100'}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize={'4xl'}>Your Apps</Text>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex space-x-5 flex-wrap">
              {Array.isArray(apps)
                ? apps.map<any>((app: App, i) => {
                    return (
                      <motion.div
                        key={i}
                        whileFocus={{
                          scale: 0.9,
                        }}
                        whileHover={{
                          scale: 0.9,
                        }}
                        className="mx-2 my-2 drop-shadow-lg"
                      >
                        <Tooltip
                          hasArrow
                          label={app.title}
                          bg="base.300"
                          color={'base.100'}
                          placement="bottom"
                        >
                          <div
                            className="flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all"
                            onClick={() =>
                              router.push({
                                pathname: '/service',
                                query: { s: xor.encode(app.source) },
                              })
                            }
                          >
                            <span>
                              <Image
                                src={app.icon as any}
                                alt={app.title}
                                width={200}
                                height={200}
                              />
                            </span>
                          </div>
                        </Tooltip>
                      </motion.div>
                    );
                  })
                : null}
              {Array.isArray(getApps)
                ? getApps.map<any>((app: any, i: number) => {
                    return (
                      <motion.div
                        key={i}
                        whileFocus={{
                          scale: 0.9,
                        }}
                        whileHover={{
                          scale: 0.9,
                        }}
                        className="m-2 drop-shadow-lg"
                      >
                        <Tooltip
                          hasArrow
                          label={app.title}
                          bg="base.300"
                          color={'base.100'}
                          placement="bottom"
                        >
                          <div
                            className="flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all"
                            onClick={() =>
                              router.push({
                                pathname: '/service',
                                query: { s: xor.encode(app.url) },
                              })
                            }
                          >
                            <span>
                              <Image
                                src={'/images/world.svg'}
                                alt={app.title}
                                width={200}
                                height={200}
                              />
                            </span>
                          </div>
                        </Tooltip>
                      </motion.div>
                    );
                  })
                : null}
              <motion.div className="m-2 drop-shadow-lg">
                <Tooltip
                  hasArrow
                  label={'add app'}
                  bg="base.300"
                  color={'base.100'}
                  placement="bottom"
                >
                  <Popover>
                    <PopoverTrigger>
                      <div className="flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all">
                        <span>
                          <AiOutlinePlus className="text-8xl" />
                        </span>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent bg="#354F52">
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader className="text-primary-100">
                        Add Custom app
                      </PopoverHeader>
                      <PopoverBody>
                        <Stack direction={'column'}>
                          <Input
                            value={appTitle}
                            onChange={(e) => setAppTitle(e.target.value)}
                            placeholder="App title"
                          />
                          <Input
                            value={appInput}
                            onChange={(e) => setAppInput(e.target.value)}
                            placeholder="App url"
                          />

                          <Button
                            bg={'#354F52'}
                            __css={{
                              '&:hover': {
                                bg: '#52796F',
                              },
                              height: '2rem',
                              transition: 'all 0.2s ease-in-out',
                              borderRadius: '0.25rem',
                              '&:active': {
                                boxShadow: 'none',
                                bg: '#52796F',
                              },
                            }}
                            onClick={() => {
                              createAppCheck({
                                url: appInput,
                                title: appTitle,
                              });
                            }}
                          >
                            Add
                          </Button>
                        </Stack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Tooltip>
              </motion.div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Drawer for mobile users */}
      <div className="tablet:visible laptop:hidden desktop:hidden">
        <GiHamburgerMenu
          onClick={onOpen}
          className="fixed top-0 right-0 m-5 text-3xl text-primary-100 p-1 rounded-md hover:bg-primary-600 hover:cursor-pointer transition-all"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          colorScheme="green"
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor={'#354f52'} textColor={'base.100'}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text fontSize={'3xl'}>Emerald</Text>
            </DrawerHeader>

            <DrawerBody>
              <div className="space-y-3 flex flex-col">
                <Button
                  colorScheme={'twitter'}
                  variant="outline"
                  leftIcon={<IoIosApps />}
                >
                  Apps
                </Button>
                <Button
                  colorScheme={'whiteAlpha'}
                  variant="outline"
                  leftIcon={<BsFillPeopleFill />}
                >
                  Theater
                </Button>
                <Button
                  colorScheme={'green'}
                  variant="outline"
                  leftIcon={<FaCog />}
                >
                  Settings
                </Button>
              </div>
            </DrawerBody>

            <DrawerFooter>
              <Text color={'gray'}>© Emerald 2022-2023</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
