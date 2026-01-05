
import React from 'react';
import { motion } from 'framer-motion';

interface NotificationsProps {
  onBack: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onBack }) => {
  const notifications = [
    { title: 'New lead assigned', detail: 'You have been assigned a new lead: Rohit Sharma.', time: '2 mins ago', icon: 'bg-indigo-50 text-indigo-600' },
    { title: 'Follow-up reminder', detail: 'Upcoming follow-up with Ankit Singh at 11:00 AM tomorrow.', time: '1 hour ago', icon: 'bg-amber-50 text-amber-600' },
    { title: 'Call missed', detail: 'You missed a call from +91 9871234567.', time: '3 hours ago', icon: 'bg-red-50 text-red-600' },
    { title: 'Team Update', detail: 'Sarah Wilson joined the project.', time: '1 day ago', icon: 'bg-violet-50 text-violet-600' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950">
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-6 flex items-center gap-4">
        <button onClick={onBack} className="p-2 text-slate-800 dark:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Notifications</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {notifications.map((notif, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4"
          >
            <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center ${notif.icon} dark:bg-slate-800`}>
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800 dark:text-white">{notif.title}</h3>
                <span className="text-xs text-slate-400">{notif.time}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{notif.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
