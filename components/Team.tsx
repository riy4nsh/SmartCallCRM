
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTeam } from '../context/TeamContext';

interface TeamProps {
  onBack: () => void;
}

const Team: React.FC<TeamProps> = ({ onBack }) => {
  const { members, addMember } = useTeam();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('Sales Agent');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim()) {
      addMember(newName.trim(), newRole);
      setNewName('');
      setIsModalOpen(false);
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400';
      case 'On Call': return 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400';
      default: return 'bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-400';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-emerald-500';
      case 'On Call': return 'bg-amber-500';
      default: return 'bg-slate-400';
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-6 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Team</h1>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
          </svg>
        </button>
      </div>

      {/* Team List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {members.map((member, i) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-slate-900 p-5 rounded-[28px] flex items-center gap-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl group-hover:scale-105 transition-transform">
                {member.initial}
              </div>
              <div className={`absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${getStatusDot(member.status)}`} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg text-slate-800 dark:text-white">{member.name}</div>
              <div className="text-slate-400 text-sm font-medium">{member.role}</div>
            </div>
            <div className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider ${getStatusStyle(member.status)}`}>
              {member.status}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Member Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 p-8"
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Add Team Member</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center mb-4">
                   <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 mb-2 cursor-pointer">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                   </div>
                   <span className="text-xs text-slate-400 font-medium">Click to upload photo</span>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Full Name</label>
                  <input 
                    autoFocus
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter member name"
                    className="w-full h-14 px-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Role / Designation</label>
                  <select 
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full h-14 px-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white appearance-none"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales Agent">Sales Agent</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 h-14 rounded-2xl font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 h-14 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
                  >
                    Add Member
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
