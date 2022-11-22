import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, useToast } from '@chakra-ui/react';
import { useEffect, useState, createContext } from 'react';
import { Workbox } from 'workbox-window';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { io } from 'socket.io-client';
const theme = extendTheme({
  colors: {
    base: {
      100: '#CAD2C5',
      200: '#84A98C',
      300: '#52796F',
      400: '#354F52',
      500: '#2F3E46',
      600: '#18262e',
    },
  },
});
interface Ialert {
  title: string;
  description: string;
  type?: 'info' | 'warning' | 'success' | 'error' | 'loading';
}

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  const toast = useToast();
  useEffect(() => {
    if (
      !('serviceWorker' in navigator) ||
      process.env.NODE_ENV !== 'production'
    ) {
      console.warn('Progressive Web App support is disabled');
      return;
    }
    const wb = new Workbox('/sw.js', { scope: '/' });
    wb.register();
    console.log('beep');
  }, []);
  useEffect((): any => {
    fetch('/api/socket');
    const s = io();

    s.on('connect', () => {
      console.log('connect');
    });

    s.on('alert', (options: Ialert) => {
      // console.log("alert", options);
      toast({
        position: 'bottom-right',
        title: options.title,
        description: options.description,
        status: options.type ? options.type : 'info',
        duration: 2000,
        isClosable: true,
      });
    });

    s.on('disconnect', () => {
      s.emit('user-leave');
      console.log('disconnect');
    });
    return () => s.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Added [] as useEffect filter so it will be executed only once, when component is mounted

  return (
    <div className="flex w-full h-screen bg-primary-500">
      <QueryClientProvider client={queryClient}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AnimatePresence>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
