
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLeads } from '../context/LeadsContext';

const Leads: React.FC = () => {
  const { leads, addLead } = useLeads();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim() && newPhone.trim()) {
      addLead(newName, newPhone);
      setNewName('');
      setNewPhone('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-6 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Leads</h1>
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-bold">
            {leads.length} Total
          </span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
          Add Lead
        </button>
      </div>

      {/* Leads List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {leads.map((lead, i) => (
          <motion.div 
            key={`${lead.name}-${i}-${leads.length}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-slate-900 p-5 rounded-[28px] flex items-center gap-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-[22px] bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl group-hover:scale-110 transition-transform">
              {lead.initial}
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg text-slate-800 dark:text-white">{lead.name}</div>
              <div className="text-slate-400 text-sm font-medium">{lead.phone}</div>
            </div>
            <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider ${lead.statusColor}`}>
              {lead.status}
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAB - Add Lead (Mobile) */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-32 right-8 md:hidden bg-indigo-600 text-white flex items-center justify-center w-16 h-16 rounded-2xl shadow-2xl shadow-indigo-600/30 z-30 transition-all"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
      </motion.button>

      {/* Add Lead Modal */}
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
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Add New Lead</h2>
              <form onSubmit={handleAddLead} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Lead Name</label>
                  <input 
                    autoFocus
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter lead name"
                    className="w-full h-14 px-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Contact Number</label>
                  <input 
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full h-14 px-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                  />
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
                    Add Lead
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

export default Leads;
