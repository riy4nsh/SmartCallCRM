
import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../constants';

const Splash: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Logo className="w-32 h-32 md:w-40 md:h-40 mb-8" />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2"
      >
        Smart Call CRM
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-slate-500 dark:text-slate-400 text-lg md:text-xl text-center mb-12"
      >
        Call smarter. Convert faster. Scale better.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative"
      >
        <div className="w-12 h-12 border-4 border-indigo-100 dark:border-indigo-900 border-t-indigo-600 rounded-full animate-spin"></div>
      </motion.div>
    </div>
  );
};

export default Splash;
