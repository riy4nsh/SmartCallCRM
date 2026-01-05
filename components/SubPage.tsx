
import React from 'react';
import { motion } from 'framer-motion';

interface SubPageProps {
  title: string;
  onBack: () => void;
  children?: React.ReactNode;
}

const SubPage: React.FC<SubPageProps> = ({ title, onBack, children }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={onBack} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">{title}</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
         {children || (
           <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                 <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h2 className="text-2xl font-bold dark:text-white mb-4">Under Construction</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                We are working hard to bring you the {title} feature. Please check back later for updates.
              </p>
           </div>
         )}
      </div>
    </div>
  );
};

export default SubPage;
