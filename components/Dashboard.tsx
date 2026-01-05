
import React from 'react';
import { motion } from 'framer-motion';
import { MainTab } from '../types';

interface DashboardProps {
  onOpenNotifications: () => void;
  onNavigate: (tab: MainTab) => void;
}

export const ACTIVITIES = [
  { 
    title: 'Call with Rohit', 
    detail: '2 min - Interested', 
    icon: 'bg-indigo-50 text-indigo-600', 
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
    ) 
  },
  { 
    title: 'Lead Added', 
    detail: 'Ankit - Real Estate', 
    icon: 'bg-violet-50 text-violet-600', 
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
      </svg>
    ) 
  },
  { 
    title: 'Follow-up Scheduled', 
    detail: 'Tomorrow - 11 AM', 
    icon: 'bg-amber-50 text-amber-600', 
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
      </svg>
    ) 
  },
];

const Dashboard: React.FC<DashboardProps> = ({ onOpenNotifications, onNavigate }) => {
  const secondaryStats = [
    { 
      label: 'Calls', 
      value: '48', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      )
    },
    { 
      label: 'Leads', 
      value: '12', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
        </svg>
      )
    },
    { 
      label: 'Follow-ups', 
      value: '7', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
        </svg>
      )
    },
  ];

  const quickActions = [
    { 
      id: 'DIALER' as MainTab, 
      label: 'New Call', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ) 
    },
    { 
      id: 'LEADS' as MainTab, 
      label: 'Add Lead', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
        </svg>
      ) 
    },
    { 
      id: 'FOLLOW_UPS' as MainTab, 
      label: 'Follow-up', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ) 
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-500 overflow-x-hidden">
      {/* Header Container */}
      <div className="relative">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-b-[40px] px-8 pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20 shadow-2xl relative transition-all duration-500 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-10 -mb-10 blur-2xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto flex justify-end items-start relative z-10 px-0 lg:px-4">
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenNotifications}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all shadow-lg"
            >
              <div className="relative">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-indigo-600"></span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="relative -mt-10 md:-mt-12 lg:-mt-16 px-8 z-20 flex justify-center">
          <div className="max-w-7xl w-full flex gap-4 md:gap-6 lg:px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="flex-1 bg-white dark:bg-slate-800 text-slate-800 dark:text-white p-5 md:p-6 lg:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-indigo-600 dark:text-indigo-400">48</div>
              <div className="text-[10px] md:text-sm font-semibold text-slate-400 mt-1 uppercase tracking-widest">Calls Today</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="flex-1 bg-white dark:bg-slate-800 text-slate-800 dark:text-white p-5 md:p-6 lg:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-indigo-600 dark:text-indigo-400">5</div>
              <div className="text-[10px] md:text-sm font-semibold text-slate-400 mt-1 uppercase tracking-widest">Conversions</div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 mt-12 md:mt-16 lg:mt-24 pb-8 space-y-12 lg:px-12 transition-all duration-500">
        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {secondaryStats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white dark:bg-slate-900 p-4 md:p-6 lg:p-8 rounded-[24px] md:rounded-[32px] text-center shadow-md border border-slate-100 dark:border-slate-800 transition-all cursor-pointer group"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-2 md:mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300 scale-90 md:scale-100">
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-black dark:text-white tracking-tight">{stat.value}</div>
              <div className="text-[9px] md:text-xs text-slate-400 font-bold mt-1 uppercase tracking-widest opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Quick Actions Column */}
          <div className="flex flex-col lg:col-span-5">
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white mb-6 ml-1 tracking-tight">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 flex-1">
              {quickActions.map((action) => (
                <motion.button 
                  key={action.label}
                  whileHover={{ x: 5, backgroundColor: 'rgb(79, 70, 229)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate(action.id)}
                  className="flex items-center justify-between px-6 py-4 md:py-6 lg:py-5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold rounded-[20px] md:rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-sm transition-all group overflow-hidden relative"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      {action.icon}
                    </div>
                    <span className="text-sm md:text-base group-hover:text-white transition-colors duration-300">{action.label}</span>
                  </div>
                  <div className="relative z-10">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all transform -translate-x-3 group-hover:translate-x-0 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Activity Column */}
          <div className="lg:col-span-7 pb-12">
            <div className="flex justify-between items-center mb-6 ml-1">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">Recent Activity</h3>
              <button 
                onClick={() => onNavigate('RECENT_ACTIVITY' as any)}
                className="text-indigo-600 dark:text-indigo-400 font-bold text-xs hover:underline decoration-2 underline-offset-4 transition-all uppercase tracking-widest"
              >
                See all activity
              </button>
            </div>
            <div className="space-y-4">
              {ACTIVITIES.map((act, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-[24px] md:rounded-[32px] flex items-center gap-4 md:gap-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-[18px] flex-shrink-0 flex items-center justify-center ${act.icon} dark:bg-slate-800 group-hover:scale-110 transition-transform duration-500`}>
                    {act.svg}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-slate-800 dark:text-white text-base md:text-xl truncate">{act.title}</div>
                    <div className="text-slate-400 text-sm md:text-base font-medium mt-0.5 truncate">{act.detail}</div>
                  </div>
                  <div className="text-slate-300 group-hover:text-indigo-600 transition-all transform group-hover:translate-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
