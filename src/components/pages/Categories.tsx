import React from 'react';
import {
  Plus,
  Upload,
  ArrowUpDown,
  RefreshCcw,
  ChevronDown,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Columns,
  Download
} from 'lucide-react';
import Navbar from '../Navbar';

interface CategoriesProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

const tableData = [
  {
    id: 5,
    title: 'Biryani',
    image: 'https://cdn-icons-png.flaticon.com/512/2276/2276931.png',
    parent: 'N/A',
    commission: '10.00%',
    status: 'ACTIVE',
    approval: 'NOT REQUIRED',
    createdAt: '2026-03-15'
  },
  {
    id: 4,
    title: 'chicken pickle',
    image: 'https://cdn-icons-png.flaticon.com/512/2311/2311634.png',
    parent: 'Pickles',
    commission: '10.00%',
    status: 'ACTIVE',
    approval: 'NOT REQUIRED',
    createdAt: '2026-03-14'
  },
  {
    id: 3,
    title: 'Pickles',
    image: 'https://cdn-icons-png.flaticon.com/512/123/123307.png',
    parent: 'N/A',
    commission: '10.00%',
    status: 'ACTIVE',
    approval: 'NOT REQUIRED',
    createdAt: '2026-03-14'
  },
  {
    id: 2,
    title: 'Oils & Ghee',
    image: 'https://cdn-icons-png.flaticon.com/512/3050/3050854.png',
    parent: 'Dal & Pulses',
    commission: '2.75%',
    status: 'ACTIVE',
    approval: 'NOT REQUIRED',
    createdAt: '2026-03-13'
  },
  {
    id: 1,
    title: 'Dal & Pulses',
    image: 'https://cdn-icons-png.flaticon.com/512/2311/2311634.png',
    parent: 'N/A',
    commission: '3.00%',
    status: 'ACTIVE',
    approval: 'REQUIRED',
    createdAt: '2026-03-13'
  }
];

export default function Categories({ onLogout, onNavigate }: CategoriesProps) {
  return (
    <div className="p-8 font-sans selection:bg-blue-500/30 text-white min-h-screen bg-[#070b14]">
      <Navbar onLogout={onLogout} />

      {/* Categories Content Card */}
      <div className="dashboard-card p-0 shadow-2xl overflow-hidden rounded-md border-[#1e293b]">

        {/* Integrated Header Section - Inside Card */}
        <div className="px-6 py-6 border-b border-[#1e293b]/50">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col">
              <h1 className=" text-white mb-0.5 tracking-tight" style={{ fontSize: '20px' }}>Categories</h1>
              <nav className="flex items-center gap-2" style={{ fontSize: '12px' }}>
                <span className="text-blue-500 font-medium cursor-pointer hover:underline">Home</span>
                <span className="text-slate-500">/</span>
                <span className="text-blue-200/80">Categories</span>
              </nav>
            </div>

            <div className="flex flex-row items-center gap-2">
              <button className="flex items-center gap-2 border border-[#1e293b] text-white hover:bg-blue-600/5 px-4 py-1.5 rounded-md font-normal transition-all shadow-sm whitespace-nowrap" style={{ fontSize: '13px', minHeight: '38px' }}>
                <Plus size={16} className="text-blue-500" /> Add Category
              </button>
              <button
                onClick={() => onNavigate?.('bulk-upload')}
                className="flex items-center gap-2 border border-[#1e293b] text-white hover:bg-green-600/5 px-4 py-1.5 rounded-md font-normal transition-all shadow-sm whitespace-nowrap" style={{ fontSize: '13px', minHeight: '38px' }}
              >
                <Upload size={16} className="text-green-500" /> Bulk Upload
              </button>
              <button
                onClick={() => onNavigate?.('sort')}
                className="flex items-center gap-2 border border-[#1e293b] text-white hover:bg-blue-600/5 px-4 py-1.5 rounded-md font-normal transition-all shadow-sm whitespace-nowrap" style={{ fontSize: '13px', minHeight: '38px' }}
              >
                <ArrowUpDown size={16} className="text-blue-500" /> Sort
              </button>
              <button className="flex items-center gap-2 border border-[#1e293b] text-white hover:bg-blue-600/5 px-4 py-1.5 rounded-md font-normal transition-all shadow-sm whitespace-nowrap" style={{ fontSize: '13px', minHeight: '38px' }}>
                <RefreshCcw size={16} className="text-blue-500" /> Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Controls Bar - Injected with padding for spacing */}
        <div className="p-6">
          <div className="flex flex-row items-center justify-between gap-4 mb-6">
            <div className="flex flex-row items-center gap-4">
              <div className="relative" style={{ minWidth: '220px' }}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-[#0a0f18] border border-[#2d3748] rounded-md px-3 py-1.5 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all font-medium"
                  style={{ fontSize: '13px' }}
                />
              </div>

              <div className="flex flex-row items-center gap-3">
                <div className="relative">
                  <select
                    className="bg-[#0a0f18] border border-[#2d3748] rounded-md pl-3 pr-8 py-1.5 text-slate-300 appearance-none focus:outline-none cursor-pointer hover:border-slate-500 transition-all w-full"
                    style={{ fontSize: '13px', colorScheme: 'dark' }}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ChevronDown size={14} />
                  </div>
                </div>
                <span className="text-slate-300 whitespace-nowrap tracking-tight" style={{ fontSize: '13px' }}>entries per page</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <button className="flex items-center gap-2 bg-[#0a0f18] border border-[#2d3748] px-4 py-1.5 rounded-md text-slate-200 hover:border-slate-500 transition-all font-normal whitespace-nowrap" style={{ fontSize: '13px', minHeight: '36px' }}>
                Columns <ChevronDown size={14} className="opacity-60" />
              </button>
              <button className="flex items-center gap-2 border border-blue-500/80 text-[#3b82f6] px-4 py-1.5 rounded-md font-normal transition-all hover:bg-blue-500/5 whitespace-nowrap" style={{ fontSize: '13px', minHeight: '36px' }}>
                <Download size={16} /> Export <ChevronDown size={14} className="opacity-60" />
              </button>
            </div>
          </div>

          {/* Categories Table Area */}
          <div className="border border-[#2d3748] overflow-hidden rounded-t-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1e2736] border-b border-[#2d3748]">
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>TITLE <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>IMAGE <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PARENT <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>COMMISSION <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>REQUIRES APPROVAL <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                  </th>
                  <th style={{ padding: '12px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2d3748] bg-[#101726]/50">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-4 py-3 text-slate-300 border-r border-[#2d3748] text-center font-medium" style={{ fontSize: '13px' }}>{row.id}</td>
                    <td className="px-4 py-3 text-slate-100 border-r border-[#2d3748] font-normal" style={{ fontSize: '13px' }}>{row.title}</td>
                    <td className="px-4 py-3 border-r border-[#2d3748]">
                      <div className="flex justify-center">
                        <div className="bg-white rounded-sm overflow-hidden p-0.5 flex items-center justify-center border border-slate-700/50 shadow-inner" style={{ width: '60px', height: '45px', minWidth: '60px', minHeight: '45px' }}>
                          <img src={row.image} alt={row.title} className="max-w-full max-h-full object-contain" />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-300 border-r border-[#2d3748] font-medium" style={{ fontSize: '13px' }}>{row.parent}</td>
                    <td className="px-4 py-3 text-slate-300 border-r border-[#2d3748] font-normal text-right" style={{ fontSize: '13px' }}>{row.commission}</td>
                    <td className="px-4 py-3 border-r border-[#2d3748]">
                      <div className="flex justify-center">
                        <span className="text-[#22c55e] font-extrabold leading-tight uppercase" style={{ fontSize: '11px' }}>
                          {row.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-r border-[#2d3748]">
                      <div className="flex justify-center">
                        <span className={`${row.approval === 'REQUIRED' ? 'bg-[#1e1b4b] text-[#3b82f6]' : 'bg-[#1c1917] text-[#f97316]'} font-extrabold px-3 py-1.5 rounded-[4px] shadow-sm border border-transparent whitespace-nowrap uppercase tracking-tight`} style={{ fontSize: '13px' }}>
                          {row.approval}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-300 border-r border-[#2d3748] font-medium text-center" style={{ fontSize: '13px' }}>{row.createdAt}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center text-[#3b82f6] border border-blue-500/30 rounded-[4px] bg-[#1e293b]/50 hover:bg-blue-600/10 transition-colors shadow-sm">
                          <Edit2 size={13} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-[#ef4444] border border-red-500/30 rounded-[4px] bg-[#1e293b]/50 hover:bg-red-600/10 transition-colors shadow-sm">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-between px-2 pb-2">
            <p className="text-[13px] text-slate-400 font-medium tracking-tight">
              Showing 1 to 5 of 5 entries
            </p>

            <div className="flex items-center gap-1">
              <button className="p-2 text-slate-600 hover:text-slate-200 transition-colors disabled:opacity-20" disabled>
                <ChevronsLeft size={16} />
              </button>
              <button className="p-2 text-slate-600 hover:text-slate-200 transition-colors disabled:opacity-20" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 rounded border border-blue-600 bg-blue-600 text-white text-[13px] font-normal flex items-center justify-center shadow-lg shadow-blue-500/20">
                1
              </button>
              <button className="p-2 text-slate-600 hover:text-slate-200 transition-colors disabled:opacity-20" disabled>
                <ChevronRight size={16} />
              </button>
              <button className="p-2 text-slate-600 hover:text-slate-200 transition-colors disabled:opacity-20" disabled>
                <ChevronsRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
