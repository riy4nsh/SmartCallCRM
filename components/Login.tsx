
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../constants';

interface LoginProps {
  onSendOTP: () => void;
}

const Login: React.FC<LoginProps> = ({ onSendOTP }) => {
  const [mobile, setMobile] = useState('');

  return (
    <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-white dark:bg-slate-900 md:shadow-2xl overflow-hidden p-8">
      <div className="flex-1 flex flex-col items-center pt-16">
        <Logo className="w-24 h-24 mb-12" />
        
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 text-center">
          Login to CRM
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 text-center">
          Enter your mobile number to continue
        </p>

        <div className="w-full space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <span className="text-indigo-600 font-bold border-r border-slate-200 pr-3">+91</span>
            </div>
            <input 
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="Enter mobile number"
              className="w-full h-16 pl-16 pr-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSendOTP}
            disabled={mobile.length !== 10}
            className={`w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xl rounded-2xl shadow-xl transition-all ${mobile.length !== 10 ? 'opacity-50 cursor-not-allowed grayscale' : 'shadow-indigo-200 dark:shadow-indigo-900/20'}`}
          >
            Send OTP
          </motion.button>
        </div>
      </div>

      <div className="py-8 text-center">
        <p className="text-slate-400 text-sm">
          By continuing, you agree to our <span className="text-indigo-600 dark:text-indigo-400 cursor-pointer font-medium underline underline-offset-4">Terms & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
