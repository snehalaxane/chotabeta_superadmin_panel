import React from 'react';
import {
  RefreshCcw,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Database
} from 'lucide-react';
import Navbar from '../Navbar';

interface PendingWalletDepositsProps {
  onLogout: () => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function PendingWalletDeposits({ onLogout }: PendingWalletDepositsProps) {
  const hasData = false;

  return (
    <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', position: 'relative', boxSizing: 'border-box' }}>
      <Navbar onLogout={onLogout} />

      {/* Main Container Card */}
      <div style={{ 
        marginTop: '32px', 
        backgroundColor: '#1a2233', 
        borderRadius: '8px', 
        border: '1px solid #2d3748', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', 
        padding: '24px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        {/* Row 1: Header and Refresh Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: "400", color: 'white', margin: 0 }}>Pending Wallet Deposits</h1>
          </div>

          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'rgba(0, 123, 255, 0.05)', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: "400", cursor: 'pointer' }}>
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>

        {/* Row 2: Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search..."
                style={{ width: '210px', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px', width: '60px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CUSTOMER <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>AMOUNT <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PAYMENT METHOD <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {!hasData && (
                <tr style={{ borderBottom: '1px solid #2d3748' }}>
                  <td colSpan={6} style={{ padding: '48px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                      <Database size={32} style={{ color: '#94a3b8', opacity: 0.5 }} />
                      <span style={{ fontSize: '14px', color: '#94a3b8' }}>No data available.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* White bottom border line matching screenshot */}
        <div style={{ height: '2px', backgroundColor: 'white', opacity: 0.9, width: '100%', marginTop: '0px' }}></div>

        {/* Footer Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', padding: '0 8px' }}>
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 0 to 0 of 0 entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.5 }}>
              <button disabled style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsLeft size={14} /></button>
              <button disabled style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronLeft size={14} /></button>
              <button disabled style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronRight size={14} /></button>
              <button disabled style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsRight size={14} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
