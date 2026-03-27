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
  Wallet,
  Undo2,
  ArrowLeft,
  X,
  Check
} from 'lucide-react';
import Navbar from '../Navbar';

interface SettlementOverviewProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function SettlementOverview({ onLogout, onNavigate }: SettlementOverviewProps) {
  const [activeTab, setActiveTab] = useState('Payouts');
  const [showHistory, setShowHistory] = useState(false);
  const [showSettleModal, setShowSettleModal] = useState(false);

  return (
    <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', position: 'relative', boxSizing: 'border-box' }}>
      <Navbar onLogout={onLogout} />

      {/* Settle All Commissions Modal Overlay */}
      {showSettleModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            backgroundColor: '#1a2233',
            width: '400px',
            borderRadius: '12px',
            border: '1px solid #2d3748',
            position: 'relative',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
          }}>
            <button 
              onClick={() => setShowSettleModal(false)}
              style={{ position: 'absolute', right: '16px', top: '16px', backgroundColor: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer' }}>
              <X size={20} />
            </button>

            {/* Checkmark in dashed circle */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px dashed #007bff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              marginTop: '10px'
            }}>
              <Check size={32} color="#007bff" />
            </div>

            <h2 style={{ color: 'white', fontSize: '20px', fontWeight: "400", margin: '0 0 12px 0' }}>
              Settle All Commissions
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', textAlign: 'center', margin: '0 0 32px 0', lineHeight: '1.5' }}>
              Are you sure you want to settle all unsettled commissions?
            </p>

            <div style={{ display: 'flex', gap: '16px', width: '100%', borderTop: '1px solid #2d3748', paddingTop: '24px' }}>
              <button 
                onClick={() => setShowSettleModal(false)}
                style={{ 
                  flex: 1, 
                  backgroundColor: 'transparent', 
                  border: '1px solid #2d3748', 
                  color: 'white', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  fontSize: '14px', 
                  fontWeight: "400", 
                  cursor: 'pointer' 
                }}>
                Cancel
              </button>
              <button 
                onClick={() => setShowSettleModal(false)}
                style={{ 
                  flex: 1, 
                  backgroundColor: '#007bff', 
                  border: 'none', 
                  color: 'white', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  fontSize: '14px', 
                  fontWeight: "400", 
                  cursor: 'pointer' 
                }}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

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
              {showHistory ? 'Settlement History' : 'Earnings & Deductions'}
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <select style={{ 
                backgroundColor: '#131b2d', 
                border: '1px solid #2d3748', 
                borderRadius: '6px', 
                padding: '8px 40px 8px 16px', 
                fontSize: '13px', 
                color: 'white', 
                cursor: 'pointer', 
                appearance: 'none',
                minWidth: '150px'
              }}>
                <option>Store</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>
            
            {!showHistory ? (
              <button 
                onClick={() => setShowHistory(true)}
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
                <History size={16} /> Settlement History
              </button>
            ) : (
              <button 
                onClick={() => setShowHistory(false)}
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
                <ArrowLeft size={16} /> Back to Unsettled
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

        {!showHistory && (
          <>
            {/* Tabs Region */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <button 
                onClick={() => setActiveTab('Payouts')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '10px 20px', 
                  backgroundColor: activeTab === 'Payouts' ? '#0c111d' : 'transparent', 
                  color: activeTab === 'Payouts' ? 'white' : '#64748b', 
                  border: activeTab === 'Payouts' ? '1px solid #2d3748' : '1px solid transparent',
                  borderRadius: '6px 6px 0 0',
                  borderBottom: activeTab === 'Payouts' ? 'none' : '1px solid #2d3748',
                  fontSize: '14px', 
                  fontWeight: "400", 
                  cursor: 'pointer',
                  marginBottom: '-1px',
                  zIndex: 1
                }}>
                <Wallet size={16} /> Payouts
              </button>
              <button 
                onClick={() => setActiveTab('Returns')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '10px 20px', 
                  backgroundColor: activeTab === 'Returns' ? '#0c111d' : 'transparent', 
                  color: activeTab === 'Returns' ? 'white' : '#64748b', 
                  border: activeTab === 'Returns' ? '1px solid #2d3748' : '1px solid transparent',
                  borderRadius: '6px 6px 0 0',
                  borderBottom: activeTab === 'Returns' ? 'none' : '1px solid #2d3748',
                  fontSize: '14px', 
                  fontWeight: "400", 
                  cursor: 'pointer',
                  marginBottom: '-1px',
                  zIndex: 1
                }}>
                <Undo2 size={16} /> Returns & Deductions
              </button>
              <div style={{ flex: 1, borderBottom: '1px solid #2d3748', marginBottom: '-1px' }}></div>
            </div>

            {/* Action Button */}
            <div style={{ marginBottom: '24px' }}>
              <button 
                onClick={() => setShowSettleModal(true)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  padding: '10px 20px', 
                  borderRadius: '6px', 
                  fontSize: '14px', 
                  fontWeight: "400", 
                  border: 'none', 
                  cursor: 'pointer' 
                }}>
                <Wallet size={18} /> Settle All Commissions
              </button>
            </div>
          </>
        )}

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
        <div style={{ width: '100%', border: '1px solid #2d3748', borderRadius: '8px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px 16px', width: '80px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                {!showHistory ? (
                  <>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ORDER DETAILS <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>MARKETPLACE FEE <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PAYOUT AMOUNT <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>LAST UPDATED <SortIcons /></div>
                    </th>
                  </>
                ) : (
                  <>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ENTRY TYPE <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>DETAILS <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>DESCRIPTION <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>AMOUNT <SortIcons /></div>
                    </th>
                    <th style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SETTLEMENT DATE <SortIcons /></div>
                    </th>
                  </>
                )}
                {!showHistory && (
                  <th style={{ padding: '12px 16px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} style={{ padding: '80px 0', textAlign: 'center' }}>
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
