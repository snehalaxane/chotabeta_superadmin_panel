import React from 'react';
import {
  RefreshCcw,
  Download,
  ChevronDown,
  Database,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import Navbar from '../Navbar';

interface OrdersProps {
  onLogout: () => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function Orders({ onLogout }: OrdersProps) {
  return (
    <div className="p-8 font-sans selection:bg-blue-500/30 text-white min-h-screen bg-[#070b14]">
      <Navbar onLogout={onLogout} />

      {/* Main Container - matching the structure of the second image */}
      <div className="dashboard-card p-6 shadow-2xl overflow-hidden">

        {/* Row 1: Title and Filters */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] text-slate-100">
            Order Items (0 Order Item)
          </h2>

          <div className="flex items-center gap-2">
            {/* Payment Type */}
            <div className="relative min-w-[160px]">
              <select className="w-full bg-[#0a0f18] border border-[#2d3748] rounded-md px-4 py-1.5 text-[13px] text-slate-300 appearance-none focus:outline-none cursor-pointer">
                <option>Payment Type</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" /> */}
            </div>

            {/* Status */}
            <div className="relative min-w-[150px]">
              <select className="w-full bg-[#0a0f18] border border-[#2d3748] rounded-md px-4 py-1.5 text-[13px] text-slate-300 appearance-none focus:outline-none cursor-pointer">
                <option>Status</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" /> */}
            </div>

            {/* Date Range */}
            <div className="relative min-w-[140px]">
              <select className="w-full bg-[#0a0f18] border border-[#2d3748] rounded-md px-4 py-1.5 text-[13px] text-slate-300 appearance-none focus:outline-none cursor-pointer">
                <option>Date Range</option>
              </select>
              {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" /> */}
            </div>

            {/* Refresh Button */}
            <button className="flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500/5 px-4 py-1.5 rounded-md text-[13px] font-normal transition-all">
              <RefreshCcw size={16} />
              Refresh
            </button>
          </div>
        </div>

        {/* Row 2: Search and Table Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="min-w-[200px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#1e2736] border border-[#2d3748] rounded-md px-4 py-1.5 text-[13px] text-slate-300 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="bg-[#1e2736] border border-[#2d3748] rounded-md pl-3 pr-8 py-1.5 text-[13px] text-slate-300 appearance-none focus:outline-none cursor-pointer">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                {/* <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" /> */}
              </div>
              <span className="text-[13px] text-slate-300">entries per page</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button className="flex items-center gap-2 bg-[#0a0f18] border border-[#2d3748] px-4 py-1.5 rounded-md text-[13px] text-slate-200">
                Columns <ChevronDown size={14} className="opacity-60" />
              </button>
            </div>
            <button className="flex items-center gap-2 border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500/5 px-4 py-1.5 rounded-md text-[13px] font-normal transition-all">
              <Download size={16} />
              Export <ChevronDown size={14} className="opacity-60" />
            </button>
          </div>
        </div>

        {/* Row 3: Table Header and Body */}
        <div className="border border-[#2d3748] overflow-hidden rounded-t-sm">
          <table className="w-full text-center text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e2736] border-b border-[#2d3748]">
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ORDER DATE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ORDER DETAILS <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PRODUCT DETAILS <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTIONS <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-24 text-center bg-[#0a0f18]/20">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <Database size={40} className="text-slate-600 opacity-50" />
                    <p className="text-[14px] text-slate-500 font-medium">No data available.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Bottom Border - matching the white line in image */}
        <div className="h-[2px] bg-slate-200/90 w-full mb-6"></div>

        {/* Row 4: Pagination Footer */}
        <div className="flex justify-between items-center px-1">
          <p className="text-[13px] text-slate-300 font-medium">
            Showing 0 to 0 of 0 entries
          </p>

          <div className="flex items-center gap-6">
            <button className="text-slate-600 cursor-not-allowed" disabled>
              <ChevronsLeft size={16} />
            </button>
            <button className="text-slate-600 cursor-not-allowed" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="text-slate-600 cursor-not-allowed" disabled>
              <ChevronRight size={16} />
            </button>
            <button className="text-slate-600 cursor-not-allowed" disabled>
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
