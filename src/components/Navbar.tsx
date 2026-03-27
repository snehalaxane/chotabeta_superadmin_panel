import React from 'react';
import { Sun, Languages, Bell } from 'lucide-react';

interface NavbarProps {
  onLogout: () => void;
}

export default function Navbar({ onLogout }: NavbarProps) {
  return (
    <div className="dashboard-card flex justify-end gap-6 mb-8 px-6 py-3 items-center">
      <button className="p-2 hover:bg-slate-800/50 rounded-full transition-colors text-white">
        <Sun size={20} />
      </button>
      <button className="p-2 hover:bg-slate-800/50 rounded-full transition-colors text-white">
        <Languages size={20} />
      </button>
      <button className="p-2 hover:bg-slate-800/50 rounded-full transition-colors text-white relative">
        <Bell size={20} />
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0c0e17]"></span>
      </button>
      <div 
        onClick={onLogout}
        className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center overflow-hidden shadow-xl cursor-pointer"
      >
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
