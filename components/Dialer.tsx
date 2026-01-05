
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Dialer: React.FC = () => {
  const [number, setNumber] = useState('');

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  const addDigit = (d: string) => setNumber(prev => prev + d);
  const backspace = () => setNumber(prev => prev.slice(0, -1));

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950 items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 flex flex-col items-center">
        {/* Number Display */}
        <div className="w-full h-20 flex items-center justify-center mb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white tracking-tighter">
            {number || <span className="text-slate-200 dark:text-slate-800/50">Phone Number</span>}
          </div>
        </div>

        {/* Dial Pad Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 w-full">
          {keys.map((key) => (
            <motion.button
              key={key}
              whileTap={{ scale: 0.92 }}
              onClick={() => addDigit(key)}
              className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-slate-50 dark:bg-slate-800/50 text-2xl font-bold text-slate-800 dark:text-white flex flex-col items-center justify-center transition-all hover:bg-indigo-50 dark:hover:bg-indigo-900/20 active:bg-indigo-100 dark:active:bg-indigo-900/40 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
            >
              {key}
              {key === '0' && <span className="text-[10px] text-slate-400 font-bold mt-[-4px]">+</span>}
            </motion.button>
          ))}
          
          <div /> {/* Empty space for alignment */}
          
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => {}}
            className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition-all"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={backspace}
            className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center text-slate-300 hover:text-red-500 transition-all"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clipRule="evenodd"/></svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Dialer;
