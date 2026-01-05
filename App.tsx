
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Screen } from './types';
import Splash from './components/Splash';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import OTP from './components/OTP';
import ProfileSetup from './components/ProfileSetup';
import OrgSetup from './components/OrgSetup';
import SetupComplete from './components/SetupComplete';
import MainApp from './components/MainApp';
import Notifications from './components/Notifications';
import { LeadsProvider } from './context/LeadsContext';
import { TeamProvider } from './context/TeamContext';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('SPLASH');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('ONBOARDING');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <LeadsProvider>
      <TeamProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-200 overflow-x-hidden">
          <AnimatePresence mode="wait">
            {currentScreen === 'SPLASH' && (
              <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <Splash />
              </motion.div>
            )}
            {currentScreen === 'ONBOARDING' && (
              <motion.div key="onboarding" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
                <Onboarding onComplete={() => setCurrentScreen('LOGIN')} />
              </motion.div>
            )}
            {currentScreen === 'LOGIN' && (
              <motion.div key="login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                <Login onSendOTP={() => setCurrentScreen('OTP')} />
              </motion.div>
            )}
            {currentScreen === 'OTP' && (
              <motion.div key="otp" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                <OTP onVerify={() => setCurrentScreen('PROFILE_SETUP')} onBack={() => setCurrentScreen('LOGIN')} />
              </motion.div>
            )}
            {currentScreen === 'PROFILE_SETUP' && (
              <motion.div key="profile" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
                <ProfileSetup onContinue={() => setCurrentScreen('ORG_SETUP')} onBack={() => setCurrentScreen('OTP')} />
              </motion.div>
            )}
            {currentScreen === 'ORG_SETUP' && (
              <motion.div key="org" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
                <OrgSetup onContinue={() => setCurrentScreen('SETUP_COMPLETE')} onBack={() => setCurrentScreen('PROFILE_SETUP')} />
              </motion.div>
            )}
            {currentScreen === 'SETUP_COMPLETE' && (
              <motion.div key="complete" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <SetupComplete onFinish={() => setCurrentScreen('MAIN_APP')} />
              </motion.div>
            )}
            {currentScreen === 'MAIN_APP' && (
              <motion.div key="main-app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <MainApp 
                  onLogout={() => setCurrentScreen('LOGIN')} 
                  onOpenNotifications={() => setCurrentScreen('NOTIFICATIONS')}
                />
              </motion.div>
            )}
            {currentScreen === 'NOTIFICATIONS' && (
              <motion.div key="notifications" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}>
                <Notifications onBack={() => setCurrentScreen('MAIN_APP')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </TeamProvider>
    </LeadsProvider>
  );
};

export default App;
