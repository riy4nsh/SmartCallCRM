
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProfileSetupProps {
  onContinue: () => void;
  onBack: () => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onContinue, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'admin' | 'agent' | null>(null);

  const isValid = name.trim().length > 0 && email.includes('@') && role !== null;

  return (
    <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-white dark:bg-slate-900 md:shadow-2xl overflow-hidden p-8">
      {/* Back Button */}
      <div className="pt-4 mb-4">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Setup Your Profile</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10">Tell us a bit about you to get started</p>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full h-14 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full h-14 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm dark:text-white"
            />
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Select Role</label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setRole('admin')}
                className={`h-14 rounded-2xl border-2 transition-all font-semibold ${role === 'admin' ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400'}`}
              >
                Admin
              </button>
              <button 
                onClick={() => setRole('agent')}
                className={`h-14 rounded-2xl border-2 transition-all font-semibold ${role === 'agent' ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400'}`}
              >
                Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContinue}
          disabled={!isValid}
          className={`w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-lg rounded-2xl shadow-xl transition-all ${!isValid ? 'opacity-50 grayscale cursor-not-allowed' : 'shadow-indigo-200 dark:shadow-indigo-900/20'}`}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileSetup;
