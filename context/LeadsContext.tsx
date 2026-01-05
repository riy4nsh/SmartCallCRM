
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Lead {
  name: string;
  phone: string;
  status: string;
  statusColor: string;
  initial: string;
}

interface LeadsContextType {
  leads: Lead[];
  addLead: (name: string, phone: string) => void;
}

const LeadsContext = createContext<LeadsContextType | undefined>(undefined);

export const LeadsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<Lead[]>([
    { name: 'Rohit Sharma', phone: '+91 9876543210', status: 'Interested', statusColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400', initial: 'R' },
    { name: 'Ankit Singh', phone: '+91 9123456780', status: 'New Lead', statusColor: 'bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400', initial: 'A' },
    { name: 'Priya Jain', phone: '+91 9988776655', status: 'Follow-up', statusColor: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400', initial: 'P' },
    { name: 'Amit Kumar', phone: '+91 9871234567', status: 'Interested', statusColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400', initial: 'A' },
    { name: 'Sonia Verma', phone: '+91 9000111222', status: 'Closed', statusColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400', initial: 'S' },
  ]);

  // Optionally load from localStorage on mount
  useEffect(() => {
    const savedLeads = localStorage.getItem('smart_crm_leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  // Save to localStorage whenever leads change
  useEffect(() => {
    localStorage.setItem('smart_crm_leads', JSON.stringify(leads));
  }, [leads]);

  const addLead = (name: string, phone: string) => {
    const newLead: Lead = {
      name,
      phone,
      status: 'New Lead',
      statusColor: 'bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400',
      initial: name.charAt(0).toUpperCase()
    };
    setLeads(prev => [newLead, ...prev]);
  };

  return (
    <LeadsContext.Provider value={{ leads, addLead }}>
      {children}
    </LeadsContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadsContext);
  if (!context) throw new Error('useLeads must be used within a LeadsProvider');
  return context;
};
