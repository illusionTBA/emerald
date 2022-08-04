import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Proxy from './components/Proxy';
import { AnimatePresence } from "framer-motion";
function App() {

  const location = useLocation();

  return (
    <div className='flex w-full h-screen bg-primary-500 overflow-hidden'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/proxy:id" element={<Proxy />} />
        </Routes>
      </AnimatePresence>
    </div>

  );
}

export default App;
