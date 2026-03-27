import React from 'react';
import {
  RefreshCcw,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Plus,
  Pencil,
  Trash2,
  X,
} from 'lucide-react';
import Navbar from '../Navbar';

interface TaxRatesProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const tableData = [
  {
    id: 2,
    title: 'CGST',
    rate: '2.00%',
    createdAt: '2026-03-14'
  },
  {
    id: 1,
    title: 'SGST',
    rate: '2.00%',
    createdAt: '2026-03-14'
  }
];

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function TaxRates({ onLogout, onNavigate }: TaxRatesProps) {
  const [modalType, setModalType] = React.useState<'add' | 'edit' | null>(null);
  const [groupModalType, setGroupModalType] = React.useState<'create' | 'edit' | null>(null);

  const showModal = !!modalType;
  const showGroupModal = !!groupModalType;

  return (
    <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', position: 'relative', boxSizing: 'border-box' }}>
      <Navbar onLogout={onLogout} />

      {/* Add Tax Rate Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          {/* Modal Container */}
          <div style={{
            backgroundColor: '#1a2233',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '500px',
            overflow: 'hidden',
            border: '1px solid #2d3748',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid #2d3748',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: "400" }}>
                {modalType === 'edit' ? 'Edit Tax Rate' : 'Add Tax Rate'}
              </h3>
              <button 
                onClick={() => setModalType(null)}
                style={{ backgroundColor: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: 'white', fontSize: '14px', marginBottom: '8px', fontWeight: "400" }}>
                  Title <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="CGST"
                  style={{
                    width: '100%',
                    backgroundColor: '#0c111d',
                    border: '1px solid #2d3748',
                    borderRadius: '6px',
                    padding: '12px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '8px' }}>
                <label style={{ display: 'block', color: 'white', fontSize: '14px', marginBottom: '8px', fontWeight: "400" }}>
                  Rate(%) <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="10"
                  style={{
                    width: '100%',
                    backgroundColor: '#0c111d',
                    border: '1px solid #2d3748',
                    borderRadius: '6px',
                    padding: '12px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '20px 24px',
              borderTop: '1px solid #2d3748',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px'
            }}>
              <button 
                onClick={() => setModalType(null)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  border: '1px solid #2d3748',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: "400",
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button style={{
                padding: '10px 24px',
                borderRadius: '6px',
                backgroundColor: '#007bff',
                border: 'none',
                color: 'white',
                fontSize: '14px',
                fontWeight: "400",
                cursor: 'pointer'
              }}>
                {modalType === 'edit' ? 'Edit Tax Rate' : 'Add Tax Rate'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Tax Class Modal */}
      {showGroupModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          {/* Modal Container */}
          <div style={{
            backgroundColor: '#1a2233',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '500px',
            overflow: 'hidden',
            border: '1px solid #2d3748',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid #2d3748',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: "400" }}>
                {groupModalType === 'edit' ? 'Edit Tax Class' : 'Create Tax Class'}
              </h3>
              <button 
                onClick={() => setGroupModalType(null)}
                style={{ backgroundColor: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: 'white', fontSize: '14px', marginBottom: '8px', fontWeight: "400" }}>
                  Title <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="GST"
                  style={{
                    width: '100%',
                    backgroundColor: '#0c111d',
                    border: '1px solid #2d3748',
                    borderRadius: '6px',
                    padding: '12px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '8px' }}>
                <label style={{ display: 'block', color: 'white', fontSize: '14px', marginBottom: '8px', fontWeight: "400" }}>
                  Sub taxes <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <select 
                    style={{
                      width: '100%',
                      backgroundColor: '#0c111d',
                      border: '1px solid #2d3748',
                      borderRadius: '6px',
                      padding: '12px 40px 12px 12px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value=""></option>
                  </select>
                  <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '20px 24px',
              borderTop: '1px solid #2d3748',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px'
            }}>
              <button 
                onClick={() => setGroupModalType(null)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  border: '1px solid #2d3748',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: "400",
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button style={{
                padding: '10px 24px',
                borderRadius: '6px',
                backgroundColor: '#007bff',
                border: 'none',
                color: 'white',
                fontSize: '14px',
                fontWeight: "400",
                cursor: 'pointer'
              }}>
                {groupModalType === 'edit' ? 'Edit Tax Class' : 'Create Tax Class'}
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
        boxSizing: 'border-box'
      }}>
        {/* Row 1: Header and Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }}>
          <div>
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>Tax Rates</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }} onClick={() => onNavigate('dashboard')}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Tax Rates</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => setModalType('add')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}
            >
              <Plus size={16} /> Add Tax Rate
            </button>
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px', width: '80px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '200px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><SortIcons /> TITLE</div>
                </th>
                <th style={{ padding: '12px', width: '200px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><SortIcons /> RATE</div>
                </th>
                <th style={{ padding: '12px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><SortIcons /> CREATED AT</div>
                </th>
                <th style={{ padding: '12px', width: '120px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #2d3748' }}>
                  <td style={{ padding: '14px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '14px', color: 'white' }}>{row.id}</td>
                  <td style={{ padding: '14px', borderRight: '1px solid #2d3748', fontSize: '14px', color: 'white', fontWeight: "400" }}>{row.title}</td>
                  <td style={{ padding: '14px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '14px', color: 'white', fontWeight: "400" }}>{row.rate}</td>
                  <td style={{ padding: '14px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '14px', color: 'white' }}>{row.createdAt}</td>
                  <td style={{ padding: '14px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <button 
                        onClick={() => setModalType('edit')}
                        style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', border: '1px solid rgba(52, 152, 219, 0.5)', color: '#3498db', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        <Pencil size={14} />
                      </button>
                      <button style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', border: '1px solid rgba(231, 76, 60, 0.5)', color: '#e74c3c', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info line */}
        <div style={{ height: '30px' }}></div>
        <div style={{ height: '2.5px', backgroundColor: 'white', width: '100%', opacity: 0.9 }}></div>

        {/* Footer Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', padding: '0 8px' }}>
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 1 to {tableData.length} of {tableData.length} entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronLeft size={16} /></button>
            <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: "400", fontSize: '13px' }}>1</div>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Tax Groups Section */}
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
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>Tax Groups</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }} onClick={() => onNavigate('dashboard')}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Tax Rates</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => setGroupModalType('create')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}
            >
              <Plus size={16} /> Create Tax Group
            </button>
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px', width: '80px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '200px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>TITLE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '300px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>RATES <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', width: '120px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '14px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '14px', color: 'white' }}>1</td>
                <td style={{ padding: '14px', borderRight: '1px solid #2d3748', fontSize: '14px', color: 'white', fontWeight: "400" }}>GST</td>
                <td style={{ padding: '14px', borderRight: '1px solid #2d3748', fontSize: '14px', color: 'white' }}>SGST (2.00%), CGST (2.00%)</td>
                <td style={{ padding: '14px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '14px', color: 'white' }}>2026-03-14</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <button 
                      onClick={() => setGroupModalType('edit')}
                      style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', border: '1px solid rgba(52, 152, 219, 0.5)', color: '#3498db', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      <Pencil size={14} />
                    </button>
                    <button style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', border: '1px solid rgba(231, 76, 60, 0.5)', color: '#e74c3c', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer info line */}
        <div style={{ height: '30px' }}></div>
        <div style={{ height: '2.5px', backgroundColor: 'white', width: '100%', opacity: 0.9 }}></div>

        {/* Footer Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', padding: '0 8px' }}>
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 1 to 1 of 1 entry</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronLeft size={16} /></button>
            <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: "400", fontSize: '13px' }}>1</div>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
