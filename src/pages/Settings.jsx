import React from 'react';
import { motion } from 'framer-motion';

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
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
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-5/6 w-2/5 bg-primary-400 rounded-md">
        test
      </div>
    </motion.div>
  );
}

export default Settings;
