
import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES } from './Dashboard';

interface RecentActivityProps {
  onBack: () => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={onBack} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Recent Activity</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4">
        {/* Reusing the same activity list style */}
        {[...ACTIVITIES, ...ACTIVITIES, ...ACTIVITIES].map((act, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ x: 5 }}
            className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-[24px] md:rounded-[32px] flex items-center gap-4 md:gap-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-[18px] flex-shrink-0 flex items-center justify-center ${act.icon} dark:bg-slate-800 group-hover:scale-110 transition-transform duration-500`}>
              {act.svg}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-slate-800 dark:text-white text-base md:text-xl truncate">{act.title}</div>
              <div className="text-slate-400 text-sm md:text-base font-medium mt-0.5 truncate">{act.detail}</div>
              <div className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-1">2 hours ago</div>
            </div>
            <div className="text-slate-300 group-hover:text-indigo-600 transition-all transform group-hover:translate-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </motion.div>
        ))}
        {/* Ensuring we have extra space at the bottom just in case */}
        <div className="h-12" />
      </div>
    </div>
  );
};

export default RecentActivity;
