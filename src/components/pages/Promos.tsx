import React from 'react';
import {
  RefreshCcw,
  Plus,
  Search,
  ChevronDown,
  Download,
  Database,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from 'lucide-react';
import Navbar from '../Navbar';

interface PromosProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function Promos({ onLogout, onNavigate }: PromosProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', boxSizing: 'border-box' }}>
      <Navbar onLogout={onLogout} />

      <div style={{
        marginTop: '32px',
        backgroundColor: '#1a2233',
        borderRadius: '8px',
        border: '1px solid #2d3748',
        padding: '24px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Inside Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '18px', fontWeight: "400", margin: '0 0 4px 0' }}>Promos</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => onNavigate?.('dashboard')}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Promos</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: '1px solid #007bff', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}
            >
              <Plus size={16} /> Add Promo
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: '1px solid #007bff', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              <RefreshCcw size={16} /> Refresh
            </button>
          </div>
        </div>
        {/* Filter Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search..."
                style={{ width: '240px', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 12px', fontSize: '13px', color: 'white', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
              </div>
              <span style={{ fontSize: '14px', color: 'white' }}>entries per page</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #2d3748', backgroundColor: 'transparent', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              Columns <ChevronDown size={14} />
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}>
              <Download size={16} /> Export <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Table Area */}
        <div style={{ width: '100%', overflowX: 'auto', border: '1px solid #2d3748', borderRadius: '4px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1400px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px', width: '80px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PROMO CODE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PROMO MODE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>DISCOUNT TYPE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>DISCOUNT AMOUNT <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>START DATE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>END DATE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>USAGE COUNT <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>MAX USAGE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '100px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #2d3748' }}>
                <td colSpan={11} style={{ padding: '80px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <Database size={24} style={{ color: '#64748b', opacity: 0.5 }} />
                    <span style={{ color: '#64748b', fontSize: '14px' }}>No data available.</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Line (the white line in screenshot) */}
        <div style={{ height: '2.5px', backgroundColor: 'white', width: '100%', marginTop: '30px', opacity: 0.9 }}></div>

        {/* Footer info line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>Showing 0 to 0 of 0 entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronLeft size={16} /></button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Create Promo Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: '#161d2b', borderRadius: '12px', width: '100%', maxWidth: '750px', border: '1px solid #2d3748', overflow: 'hidden' }}>
            {/* Modal Header */}
            <div style={{ padding: '20px', borderBottom: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ color: 'white', fontSize: '16px', fontWeight: "400", margin: 0 }}>Create Promo</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <Plus size={20} style={{ transform: 'rotate(45deg)' }} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', maxHeight: '80vh', overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Promo Code */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Promo Code <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="text" placeholder="Enter promo code" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                </div>

                {/* Discount Type */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Discount Type <span style={{ color: '#ef4444' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                      <option>Select Discount Type</option>
                    </select>
                    <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                  </div>
                </div>

                {/* Description */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Description <span style={{ color: '#ef4444' }}>*</span></label>
                  <textarea placeholder="Enter description" rows={3} style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none', resize: 'none' }} />
                </div>

                {/* Discount Amount */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Discount Amount / Percent <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="text" placeholder="Enter discount amount" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                  <p style={{ color: '#64748b', fontSize: '11px', marginTop: '6px', lineHeight: '1.5' }}>
                    If Discount Type is Percentage, then Discount Amount should be between 0 and 100. If Discount Type is Flat, then Discount Amount should be greater than 0.
                  </p>
                </div>

                {/* Max Discount Value */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Max Discount Value</label>
                  <input type="text" placeholder="Enter maximum discount value" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                  <p style={{ color: '#64748b', fontSize: '11px', marginTop: '6px' }}>Required for percentage discounts</p>
                </div>

                {/* Start Date */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Start Date <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="datetime-local" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', colorScheme: 'dark', color: 'white', outline: 'none' }} />
                </div>

                {/* End Date */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>End Date <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="datetime-local" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', colorScheme: 'dark', color: 'white', outline: 'none' }} />
                </div>

                {/* Minimum Order Total */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Minimum Order Total <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="text" placeholder="Enter minimum order total" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                </div>

                {/* Promo Mode */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Promo Mode <span style={{ color: '#ef4444' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                      <option>Select Promo Mode</option>
                    </select>
                    <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                  </div>
                </div>

                {/* Max Total Usage */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Max Total Usage <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="text" placeholder="Enter maximum total usage" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                </div>

                {/* Max Usage Per User */}
                <div>
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Max Usage Per User <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="text" placeholder="Enter maximum usage per user" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '20px', borderTop: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
              <button 
                onClick={() => setIsModalOpen(false)} 
                style={{ backgroundColor: 'transparent', border: '1px solid #2d3748', color: 'white', padding: '10px 24px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 24px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Plus size={16} /> Create New Promo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
