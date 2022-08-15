import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Proxy from './pages/Proxy';
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
function App() {
  const location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem('settings')) {
      localStorage.setItem(
        'settings',
        JSON.stringify({
          proxy: 'uv',
          cloakType: 'none',
          bare: 'https://bare-server-vercel.vercel.app/',
        }),
      );
    }
  }, []);
  const settings = JSON.parse(localStorage.getItem('settings') || '{}');

  const firefoxua = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  const inFrame = () => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }

  }
  if (settings.cloaktype === 'about:blank') {
    if (!inFrame() && !firefoxua) {
      const windowLocation = window.location.href;
      const ab = window.open('about:blank', '_blank');

      if (!ab || ab.closed || typeof ab.closed == 'undefined') {
        alert('Please allow popups to use this app');
      } else {

        // write a iframe to the new window

        ab.document.write(`<html><body style="margin: 0;"><iframe src="${windowLocation}" style="width: 100%; height: 100%; border: none;"></iframe></body></html>`);

        //         ab.document.write(`
        //         <!DOCTYPE html>
        //         <html>
        //           <head>
        //             <style>
        //               body {
        //                 margin: 0;
        //                 overflow: hidden;
        //               }
        //               </style>
        //               </head>
        //               <body> 
        //               <iframe src="${windowLocation}" style="width: 100%; height: 100%; border: none;"></iframe>
        //               </body>
        //               </html>
        // `);
        window.location.replace("https://google.com");
        window.close()
      }



    }




  }

  return (
    <div className='flex w-full h-screen bg-primary-500 overflow-x-hidden'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/proxy/:url" element={<Proxy />} />
        </Routes>
      </AnimatePresence>
    </div>

  );
}

export default App;
