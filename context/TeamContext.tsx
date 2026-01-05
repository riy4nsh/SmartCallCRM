
import React, { createContext, useContext, useState, useEffect } from 'react';

export type TeamMemberStatus = 'Online' | 'On Call' | 'Offline';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: TeamMemberStatus;
  initial: string;
}

interface TeamContextType {
  members: TeamMember[];
  addMember: (name: string, role: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState<TeamMember[]>([
    { id: '1', name: 'Ravi Kumar', role: 'Admin', status: 'Online', initial: 'R' },
    { id: '2', name: 'Ankit Sharma', role: 'Sales Agent', status: 'On Call', initial: 'A' },
    { id: '3', name: 'Priya Verma', role: 'Sales Agent', status: 'Offline', initial: 'P' },
    { id: '4', name: 'Neha Singh', role: 'Sales Agent', status: 'Online', initial: 'N' },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem('smart_crm_team');
    if (saved) setMembers(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('smart_crm_team', JSON.stringify(members));
  }, [members]);

  const addMember = (name: string, role: string) => {
    const statuses: TeamMemberStatus[] = ['Online', 'On Call', 'Offline'];
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name,
      role,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      initial: name.charAt(0).toUpperCase(),
    };
    setMembers(prev => [newMember, ...prev]);
  };

  return (
    <TeamContext.Provider value={{ members, addMember }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) throw new Error('useTeam must be used within a TeamProvider');
  return context;
};
