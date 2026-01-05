
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OrgSetupProps {
  onContinue: () => void;
  onBack: () => void;
}

const OrgSetup: React.FC<OrgSetupProps> = ({ onContinue, onBack }) => {
  const [orgName, setOrgName] = useState('');
  const [industry, setIndustry] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [phone, setPhone] = useState('');

  const isValid = orgName.trim() !== '' && industry !== '' && teamSize !== '' && phone.trim() !== '';

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
        <div className="mb-6 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 w-16 h-16 rounded-2xl">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Add Your Organization</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          Set up your business to start managing calls, leads and teams
        </p>

        <div className="bg-slate-50/50 dark:bg-slate-800/40 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Organization Name</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/></svg>
              </span>
              <input 
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Company / Business name"
                className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Industry Type</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </span>
              <select 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full h-14 pl-12 pr-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white appearance-none"
              >
                <option value="" disabled>Select industry</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Team Size</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </span>
              <select 
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="w-full h-14 pl-12 pr-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white appearance-none"
              >
                <option value="" disabled>Select team size</option>
                <option value="1-10">1-10 Members</option>
                <option value="11-50">11-50 Members</option>
                <option value="51-200">51-200 Members</option>
                <option value="200+">200+ Members</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Business Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </span>
              <input 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="Official contact number"
                className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-4 text-center">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContinue}
          disabled={!isValid}
          className={`w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-lg rounded-2xl shadow-xl transition-all mb-4 ${!isValid ? 'opacity-50 grayscale cursor-not-allowed' : 'shadow-indigo-200 dark:shadow-indigo-900/20'}`}
        >
          Continue Setup
        </motion.button>
        <p className="text-slate-400 text-sm">You can edit this information later</p>
      </div>
    </div>
  );
};

export default OrgSetup;
