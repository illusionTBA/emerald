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
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/proxy:id" element={<Proxy />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
