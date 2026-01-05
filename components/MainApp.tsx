
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainTab } from '../types';
import Dashboard from './Dashboard';
import Leads from './Leads';
import Dialer from './Dialer';
import Team from './Team';
import More from './More';
import SubPage from './SubPage';
import RecentActivity from './RecentActivity';
import { Logo } from '../constants';

interface MainAppProps {
  onLogout: () => void;
  onOpenNotifications: () => void;
}

const MainApp: React.FC<MainAppProps> = ({ onLogout, onOpenNotifications }) => {
  const [activeTab, setActiveTab] = useState<MainTab>('HOME');
  const [subView, setSubView] = useState<string | null>(null);

  const navItems = [
    { id: 'HOME', label: 'Home', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
    )},
    { id: 'LEADS', label: 'Leads', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
    )},
    { id: 'DIALER', label: 'Dialer', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 5h6v12H9V5z"/></svg>
    )},
    { id: 'TEAM', label: 'Team', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>
    )},
    { id: 'MORE', label: 'More', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/></svg>
    )},
  ];

  const renderSubPage = () => {
    if (!subView) return null;
    if (subView === 'RECENT_ACTIVITY') {
      return <RecentActivity onBack={() => setSubView(null)} />;
    }
    const title = subView.split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
    return <SubPage title={title} onBack={() => setSubView(null)} />;
  };

  const handleTabChange = (tab: MainTab) => {
    setActiveTab(tab);
    setSubView(null);
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Logo className="w-10 h-10 rounded-xl" />
          <span className="font-bold text-xl tracking-tight dark:text-white">Smart CRM</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id as MainTab)}
              className={`flex items-center w-full px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button 
            onClick={onLogout}
            className="flex items-center w-full px-4 py-3 text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Fix: Unified scrollable container with consistent bottom padding for mobile menu */}
        <div className="flex-1 overflow-y-auto pb-[100px] lg:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={subView ? `sub-${subView}` : `tab-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {subView ? renderSubPage() : (
                <>
                  {activeTab === 'HOME' && (
                    <Dashboard 
                      onOpenNotifications={onOpenNotifications} 
                      onNavigate={(tab) => {
                        if (tab === 'RECENT_ACTIVITY' as any) {
                           setSubView('RECENT_ACTIVITY');
                        } else {
                           handleTabChange(tab);
                        }
                      }}
                    />
                  )}
                  {activeTab === 'LEADS' && <Leads />}
                  {activeTab === 'DIALER' && <Dialer />}
                  {activeTab === 'TEAM' && <Team onBack={() => handleTabChange('HOME')} />}
                  {activeTab === 'MORE' && (
                    <More 
                      onBack={() => handleTabChange('HOME')} 
                      onLogout={onLogout} 
                      onNavigate={(view) => setSubView(view)} 
                    />
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Bottom Navigation - Mobile & Tablet Only */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50 flex justify-center h-20">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-100 dark:border-slate-800 rounded-[32px] shadow-2xl shadow-indigo-200/50 dark:shadow-slate-950 px-4 py-2 flex items-center justify-between w-full max-w-md transition-all">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id as MainTab)}
                  className={`relative flex flex-col items-center justify-center py-2 px-3 rounded-2xl transition-all duration-300 ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400'}`}
                >
                  <div className="mb-1">
                    {React.cloneElement(item.icon as React.ReactElement<any>, {
                      className: `w-6 h-6 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`
                    })}
                  </div>
                  <span className={`text-[11px] font-bold tracking-tight transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainApp;
