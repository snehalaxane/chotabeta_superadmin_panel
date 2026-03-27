import React from 'react';
import {
  RefreshCcw,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Database,
} from 'lucide-react';
import Navbar from '../Navbar';

interface ProductFaqsProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function ProductFaqs({ onLogout, onNavigate }: ProductFaqsProps) {
  return (
    <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', position: 'relative', boxSizing: 'border-box' }}>
      <Navbar onLogout={onLogout} />

      {/* Main Container Card */}
      <div style={{
        marginTop: '32px',
        backgroundColor: '#1a2233',
        borderRadius: '8px',
        border: '1px solid #2d3748',
        padding: '24px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Row 1: Header and Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }}>
          <div>
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>Product Faqs</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }} onClick={() => onNavigate('dashboard')}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }} onClick={() => onNavigate('products')}>Products</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Product Faqs</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 40px 8px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none', width: '200px' }}>
                <option>Search Product</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                <option>Status</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'rgba(0, 123, 255, 0.05)', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              <RefreshCcw size={16} /> Refresh
            </button>
          </div>
        </div>

        {/* Filters and Actions Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search..."
                style={{ width: '240px', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 40px 8px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
              </div>
              <span style={{ fontSize: '14px', color: 'white' }}>entries per page</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #2d3748', backgroundColor: 'transparent', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              Columns <ChevronDown size={14} />
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'transparent', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              <Download size={16} /> Export <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ width: '100%', overflowX: 'auto', border: '1px solid #2d3748', borderRadius: '4px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1100px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '10px', width: '80px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PRODUCT <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', minWidth: '200px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>QUESTION <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', minWidth: '200px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ANSWER <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '180px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} style={{ padding: '60px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Database size={24} style={{ color: '#64748b' }} />
                    <span style={{ color: '#64748b', fontSize: '16px' }}>No data available.</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Vertical whitespace before footer line */}
        <div style={{ height: '30px' }}></div>
        <div style={{ height: '2.5px', backgroundColor: 'white', width: '100%', opacity: 0.9 }}></div>

        {/* Footer Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', padding: '0 8px' }}>
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 0 to 0 of 0 entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
