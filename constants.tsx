
import React from 'react';
import { OnboardingSlide } from './types';

export const SLIDES: OnboardingSlide[] = [
  {
    title: "Track Every Call",
    description: "Automatically log incoming and outgoing calls with complete history and recordings.",
    image: "https://picsum.photos/seed/call-track/600/600"
  },
  {
    title: "Manage Leads Smartly",
    description: "Organize leads, assign agents, schedule follow-ups and close deals faster.",
    image: "https://picsum.photos/seed/leads/600/600"
  },
  {
    title: "Monitor Team Performance",
    description: "Track agent activity, call duration, conversions and productivity in real time.",
    image: "https://picsum.photos/seed/performance/600/600"
  }
];

export const Logo: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <div className={`relative flex items-center justify-center bg-white rounded-3xl shadow-xl overflow-hidden ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGrad)" strokeWidth="4" />
      <path d="M30 65 Q 50 80 70 65" stroke="#10B981" strokeWidth="3" fill="none" />
      <path d="M30 35 Q 50 20 70 35" stroke="#F59E0B" strokeWidth="3" fill="none" />
      <g transform="translate(25, 40)">
        <circle cx="10" cy="10" r="8" fill="#3B82F6" />
        <circle cx="25" cy="10" r="8" fill="#10B981" />
        <circle cx="40" cy="10" r="8" fill="#F97316" />
      </g>
      <text x="50" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" fontFamily="Inter">CRM</text>
    </svg>
  </div>
);
