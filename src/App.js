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
        }),
      );
    }
  }, []);
  return (
    <div className='flex w-full h-screen bg-primary-500 overflow-hidden'>
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
