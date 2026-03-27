import React, { useState } from 'react';
import {
  RefreshCcw,
  History,
  ChevronDown,
  Download,
  Database,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowLeft
} from 'lucide-react';
import Navbar from '../Navbar';

interface SellerWithdrawalsProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function SellerWithdrawals({ onLogout, onNavigate, currentPage }: SellerWithdrawalsProps) {
  const [showHistory, setShowHistory] = useState(currentPage === 'withdrawal-history');

  React.useEffect(() => {
    setShowHistory(currentPage === 'withdrawal-history');
  }, [currentPage]);

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
        boxSizing: 'border-box',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>

        {/* Row 1: Header and Buttons */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', marginBottom: '24px' }}>
          <div>
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>
              {showHistory ? 'Withdrawal History' : 'Pending Withdrawal Requests'}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span 
                onClick={() => onNavigate('dashboard')}
                style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>{showHistory ? 'Withdrawal History' : 'Seller Withdrawals'}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {showHistory && (
              <>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Search With Seller"
                    style={{ width: '180px', backgroundColor: '#131b2d', border: '1px solid #2d3748', borderRadius: '6px', padding: '8px 12px', fontSize: '13px', color: 'white', outline: 'none' }}
                  />
                </div>
                <div style={{ position: 'relative' }}>
                  <select style={{ backgroundColor: '#131b2d', border: '1px solid #2d3748', borderRadius: '6px', padding: '8px 40px 8px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none', minWidth: '100px' }}>
                    <option>Status</option>
                  </select>
                  <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </>
            )}

            {!showHistory ? (
              <button 
                onClick={() => onNavigate('withdrawal-history')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  border: '1px solid #007bff', 
                  backgroundColor: 'rgba(0, 123, 255, 0.05)', 
                  color: '#007bff', 
                  padding: '8px 16px', 
                  borderRadius: '6px', 
                  fontSize: '13px', 
                  fontWeight: '600', 
                  cursor: 'pointer' 
                }}>
                <History size={16} /> Withdrawal History
              </button>
            ) : (
              <button 
                onClick={() => onNavigate('seller-withdrawals')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  border: '1px solid #007bff', 
                  backgroundColor: 'rgba(0, 123, 255, 0.05)', 
                  color: '#007bff', 
                  padding: '8px 16px', 
                  borderRadius: '6px', 
                  fontSize: '13px', 
                  fontWeight: '600', 
                  cursor: 'pointer' 
                }}>
                <ArrowLeft size={16} /> Back to Pending Requests
              </button>
            )}
            
            <button style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              border: '1px solid #007bff', 
              backgroundColor: 'rgba(0, 123, 255, 0.05)', 
              color: '#007bff', 
              padding: '8px 16px', 
              borderRadius: '6px', 
              fontSize: '13px', 
              fontWeight: '600', 
              cursor: 'pointer' 
            }}>
              <RefreshCcw size={16} /> Refresh
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search..."
                style={{ width: '250px', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', color: 'white', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 40px 10px 12px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
              </div>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>entries per page</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #2d3748', backgroundColor: 'transparent', color: 'white', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              Columns <ChevronDown size={14} />
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'transparent', color: '#007bff', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              <Download size={16} /> Export <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ width: '100%', border: '1px solid #2d3748', borderRadius: '8px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: showHistory ? '1000px' : 'auto' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px 16px', width: '80px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                {!showHistory ? (
                  <>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SELLER <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>AMOUNT <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>REQUEST NOTE <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                    </th>
                  </>
                ) : (
                  <>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SELLER <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>AMOUNT <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>REQUEST NOTE <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ADMIN REMARK <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PROCESSED AT <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PROCESSED BY <SortIcons /></div>
                    </th>
                  </>
                )}
                <th style={{ padding: '12px 16px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={showHistory ? 9 : 7} style={{ padding: '80px 0', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', opacity: 0.5 }}>
                    <Database size={48} color="#94a3b8" />
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>No data available.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', padding: '0 8px' }}>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>Showing 0 to 0 of 0 entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
