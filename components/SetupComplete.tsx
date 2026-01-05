
import React from 'react';
import { motion } from 'framer-motion';

interface SetupCompleteProps {
  onFinish: () => void;
}

const SetupComplete: React.FC<SetupCompleteProps> = ({ onFinish }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-white dark:bg-slate-900 md:shadow-2xl overflow-hidden p-8">
      <div className="flex-1 flex flex-col items-center justify-center pt-12 text-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="relative w-48 h-48 mb-12"
        >
          <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30"
            >
              <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6"
        >
          Setup Complete
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-sm"
        >
          Your CRM account has been successfully configured. You can now manage calls, leads and your team efficiently.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-sm"
        >
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <span className="text-slate-600 dark:text-slate-300 font-medium text-sm">Your data is secure & encrypted</span>
        </motion.div>
      </div>

      <div className="pt-8 pb-4 text-center space-y-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onFinish}
          className="w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xl rounded-2xl shadow-xl shadow-indigo-200 dark:shadow-indigo-900/20 transition-all"
        >
          Go to Dashboard
        </motion.button>
        <p className="text-slate-400 text-sm">You can update organization settings anytime</p>
      </div>
    </div>
  );
};

export default SetupComplete;
