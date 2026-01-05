
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from '../constants';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index === SLIDES.length - 1) {
      onComplete();
    } else {
      setIndex(prev => prev + 1);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen max-w-lg mx-auto md:max-w-4xl bg-white dark:bg-slate-900 md:shadow-2xl overflow-hidden">
      {/* Skip Button */}
      <div className="absolute top-6 right-6 z-10">
        <button 
          onClick={onComplete}
          className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 md:flex-row md:gap-12">
        <div className="w-full md:w-1/2 overflow-hidden h-80 md:h-[400px] mb-8 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={index}
              src={SLIDES[index].image}
              alt={SLIDES[index].title}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full h-full object-cover rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800"
            />
          </AnimatePresence>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {SLIDES[index].title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {SLIDES[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex gap-2 mb-10">
            {SLIDES.map((_, i) => (
              <div 
                key={i}
                className={`h-2 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200 dark:bg-slate-700'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-8 pb-12 w-full max-w-md mx-auto">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={nextSlide}
          className="w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xl rounded-2xl shadow-xl shadow-indigo-200 dark:shadow-indigo-900/20 transition-all"
        >
          {index === SLIDES.length - 1 ? 'Get Started' : 'Next'}
        </motion.button>
      </div>
    </div>
  );
};

export default Onboarding;
