
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../constants';

interface OTPProps {
  onVerify: () => void;
  onBack: () => void;
}

const OTP: React.FC<OTPProps> = ({ onVerify, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(v => v !== '');

  return (
    <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-white dark:bg-slate-900 md:shadow-2xl overflow-hidden p-8">
      {/* Back Button */}
      <div className="pt-4 mb-4">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center pt-8">
        <Logo className="w-24 h-24 mb-12" />
        
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 text-center">
          Verify OTP
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 text-center max-w-[250px]">
          Enter the 6-digit OTP sent to your mobile number
        </p>

        <div className="flex justify-between w-full gap-2 mb-12">
          {otp.map((digit, i) => (
            <input 
              key={i}
              // Fixed: ref callback should return void, wrapping in braces to prevent returning the element
              ref={el => { inputs.current[i] = el; }}
              type="tel"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-full aspect-square bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl text-center text-2xl font-bold focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all"
              maxLength={1}
            />
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onVerify}
          disabled={!isComplete}
          className={`w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xl rounded-2xl shadow-xl transition-all ${!isComplete ? 'opacity-50 cursor-not-allowed grayscale' : 'shadow-indigo-200 dark:shadow-indigo-900/20'}`}
        >
          Verify & Continue
        </motion.button>

        <button className="mt-8 text-indigo-600 dark:text-indigo-400 font-semibold hover:opacity-80 transition-opacity">
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OTP;
