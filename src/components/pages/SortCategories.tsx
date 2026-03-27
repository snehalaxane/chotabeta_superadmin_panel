import React from 'react';
import {
  Plus,
  Search,
  RotateCcw,
  Save,
  ChevronLeft,
  ArrowLeft
} from 'lucide-react';
import Navbar from '../Navbar';

interface SortCategoriesProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

export default function SortCategories({ onLogout, onNavigate }: SortCategoriesProps) {
  return (
    <div className="p-8 font-sans selection:bg-blue-500/30 text-white min-h-screen bg-[#070b14]">
      <Navbar onLogout={onLogout} />

      <div className="dashboard-card p-0 rounded-lg border border-[#1e293b] bg-[#0c111c] shadow-xl overflow-hidden">
        {/* Integrated Header Section */}
        <div className="px-6 py-6 border-b border-[#1e293b]/50">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="font-normal text-white mb-0.5 tracking-tight" style={{ fontSize: '20px' }}>Sort Categories (0)</h1>
              <nav className="flex items-center gap-2" style={{ fontSize: '12px' }}>
                <span
                  className="text-blue-500 font-medium cursor-pointer hover:underline"
                  onClick={() => onNavigate?.('dashboard')}
                >
                  Home
                </span>
                <span className="text-slate-500">/</span>
                <span
                  className="text-blue-500 font-medium cursor-pointer hover:underline"
                  onClick={() => onNavigate?.('categories')}
                >
                  Categories
                </span>
                <span className="text-slate-500">/</span>
                <span className="text-blue-200/80">Sort Categories</span>
              </nav>
            </div>



            <button
              onClick={() => onNavigate?.('categories')}
              className="px-6 py-2 rounded-md font-normal text-slate-400 border border-[#1e293b] hover:bg-[#1e293b] transition-all"
              style={{ fontSize: '13px' }}
            >
              Back
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Home Parent Categories section */}
          <div className="mb-8">
            <label className="block text-white font-normal mb-3" style={{ fontSize: '15px' }}>Home Parent Categories</label>
            <div className="relative mb-2">
              <select 
                className="w-full bg-[#0a0f18] border border-[#2d3748] rounded-md px-4 py-2.5 text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500/50 appearance-none cursor-pointer" 
                style={{ fontSize: '14px', colorScheme: 'dark' }}
              >
                <option value="">Search Category</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <Search size={18} />
              </div>
            </div>
            <p className="text-slate-500 mb-4" style={{ fontSize: '13px' }}>Choose parent categories to be shown on home page</p>
            <div className="flex justify-end">
              <button className="hover:opacity-90 text-white px-6 py-2 rounded-md font-normal transition-all shadow-lg" style={{ fontSize: '14px', backgroundColor: '#007bff', boxShadow: '0 10px 15px -3px rgba(0, 123, 255, 0.3)' }}>
                Save
              </button>
            </div>
          </div>

          {/* Sorting Instructions Section */}
          <style>{`
            #sorting-instructions-box h3, 
            #sorting-instructions-box p {
              color: #1e293b !important;
            }
          `}</style>
          <div id="sorting-instructions-box" className="bg-white p-2 rounded-md mb-8 shadow-sm" style={{ backgroundColor: '#ffffff' }}>
            <h3 className="font-normal mb-2 uppercase tracking-wide" style={{ fontSize: '12px' }}>Sorting Instructions</h3>
            <p className="font-medium" style={{ fontSize: '11px' }}>
              Drag and drop the sections below to change their display order. Click "Save Order" to apply changes.
            </p>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-[#94a3b8] font-normal mb-1" style={{ fontSize: '16px' }}>No categories found</p>
            <p className="text-slate-500 mb-6" style={{ fontSize: '15px' }}>Create some categories first to start sorting.</p>
            <button
              onClick={() => onNavigate?.('add-category')}
              className="hover:opacity-90 text-white px-6 py-2 rounded-md font-normal transition-all flex items-center gap-2 shadow-lg"
              style={{ fontSize: '14px', backgroundColor: '#007bff', boxShadow: '0 10px 15px -3px rgba(0, 123, 255, 0.3)' }}
            >
              Add Category
            </button>
          </div>

          {/* Footer Controls integrated into card */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#1e293b]/50">
            <button className="px-6 py-2 rounded-md font-normal text-slate-400 border border-[#1e293b] hover:bg-[#1e293b] transition-all" style={{ fontSize: '14px' }}>
              Reset Order
            </button>
            <button className="hover:opacity-90 text-white px-6 py-2 rounded-md font-normal transition-all shadow-lg" style={{ fontSize: '14px', backgroundColor: '#007bff', boxShadow: '0 10px 15px -3px rgba(0, 123, 255, 0.3)' }}>
              Save Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
