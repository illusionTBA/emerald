import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

function Settings() {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen"
      variants={animations}
    >
      <div className=" h-5/6 w-2/5 border-primary-400">test</div>
    </motion.div>
  );
}

export default Settings;
