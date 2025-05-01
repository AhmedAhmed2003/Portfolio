'use client';
import { motion } from 'motion/react'; // Correct import
import React from 'react';

const TextAnimate = () => {
  const textVarient = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.p
      className="text-center md:tracking-wider mt-6 mb-4 text-sm md:text-lg lg:text-2xl z-10"
      variants={textVarient}
      transition={{ duration: 1 }}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      Hi I'm Ahmed Ahmed, a Next.js Developer based in Egypt
    </motion.p>
  );
};

export default TextAnimate;