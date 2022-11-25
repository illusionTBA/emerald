import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, useToast } from '@chakra-ui/react';
import { useEffect, useState, createContext } from 'react';
import { Workbox } from 'workbox-window';
import { AnimatePresence } from 'framer-motion';
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

  return (
    <div className="flex w-full h-screen bg-primary-500">
      <AnimatePresence exitBeforeEnter initial={false}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;