import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const pageVariants = {
  initial: { opacity: 0, x: '100vh' },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-100vh' },
};

function Settings() {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen bg-primary-500"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-0 left-0 m-5 select-none"
      >
        <NavLink to={'/'}>
          <img width={50} height={50} src="/emerald.png" alt="emerald" />
        </NavLink>
      </motion.div>

      <div className="flex relative h-5/6 w-2/5 bg-primary-400 rounded-md">
        <div className="flex flex-col mt-5 space-y-4 items-center w-full h-full"></div>
      </div>
    </motion.div>
  );
}

export default Settings;
