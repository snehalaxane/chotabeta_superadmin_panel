import React from 'react';
import {
  RefreshCcw,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Eye,
  Info,
  X
} from 'lucide-react';
import Navbar from '../Navbar';

interface StoresProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const tableData = [
  {
    id: 7,
    name: 'Athidi Grand Inn Family Restaurant',
    city: 'Utukuru',
    contactNumber: '08886660031',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    createdAt: '2026-03-15',
    sellerName: 'Soori Food'
  },
  {
    id: 6,
    name: 'Meat Mart',
    city: 'Rajampet',
    contactNumber: '08886660031',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    createdAt: '2026-03-14',
    sellerName: 'pickflys'
  },
  {
    id: 5,
    name: 'Fresh Vegetables',
    city: 'Rajampet',
    contactNumber: '08886660031',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    createdAt: '2026-03-14',
    sellerName: 'pickflys'
  },
  {
    id: 4,
    name: 'Athidi Restaurant',
    city: 'Utukuru',
    contactNumber: '9966399663',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    createdAt: '2026-03-13',
    sellerName: 'pickflys'
  },
  {
    id: 3,
    name: 'Juice Centre',
    city: 'Rajampet',
    contactNumber: '08886660031',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    createdAt: '2026-03-13',
    sellerName: 'pickflys'
  },
  {
    id: 2,
    name: 'Juice Centre',
    city: 'Rajampet',
    contactNumber: '08886660031',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    createdAt: '2026-03-13',
    sellerName: 'pickflys'
  },
  {
    id: 1,
    name: 'YVG General Store',
    city: 'Rajampet',
    contactNumber: '8886660033',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    createdAt: '2026-03-13',
    sellerName: 'pickflys'
  }
];

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function Stores({ onLogout, onNavigate }: StoresProps) {
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
        {/* Row 1: Header and Buttons */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }}>
          <div>
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>Stores</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Stores</span>
            </div>
          </div>

          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'rgba(0, 123, 255, 0.05)', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>

        {/* Filters Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '20px', alignItems: 'flex-end', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', color: 'white', fontSize: '13px', fontWeight: "400", marginBottom: '8px' }}>Filter by Seller</label>
            <input
              type="text"
              placeholder="Search With Seller"
              style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: 'white', fontSize: '13px', fontWeight: "400", marginBottom: '8px' }}>Filter by Verification Status</label>
            <div style={{ position: 'relative' }}>
              <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                <option>Select Status</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', color: 'white', fontSize: '13px', fontWeight: "400", marginBottom: '8px' }}>Filter by Visibility Status</label>
            <div style={{ position: 'relative' }}>
              <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                <option>Select Status</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>
          </div>
          <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 24px', borderRadius: '6px', fontSize: '13px', border: 'none', cursor: 'pointer', fontWeight: "400" }}>
            Filter
          </button>
        </div>

        {/* Info Box */}
        <div style={{
          backgroundColor: 'rgba(52, 152, 219, 0.05)',
          border: '1px solid rgba(52, 152, 219, 0.2)',
          borderRadius: '4px',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: '#007bff' }}><Info size={18} /></div>
            <p style={{ color: '#007bff', fontSize: '13px', margin: 0 }}>To verify a store, simply click the Eye icon from the Store table.</p>
          </div>
          <div style={{ color: '#64748b', cursor: 'pointer', opacity: 0.5 }}><X size={16} /></div>
        </div>

        {/* Search and Entries Row */}
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1200px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '10px', width: '60px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', minWidth: '200px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>NAME <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '120px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CITY <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CONTACT NUMBER <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>VERIFICATION STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>VISIBILITY STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '140px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '140px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SELLER NAME <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTIONS <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #2d3748' }}>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '13px', color: 'white' }}>{row.id}</td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '13px', color: 'white' }}>{row.name}</td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '13px', color: 'white' }}>{row.city}</td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '13px', color: 'white' }}>{row.contactNumber}</td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748' }}>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: "400" }}>{row.verificationStatus}</span>
                  </td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748' }}>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: "400" }}>{row.visibilityStatus}</span>
                  </td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '13px', color: 'white' }}>{row.createdAt}</td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #2d3748', fontSize: '13px', color: 'white' }}>{row.sellerName}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <button
                      onClick={() => onNavigate('store-details')}
                      style={{ backgroundColor: '#3498db', border: 'none', color: 'white', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                      <Eye size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vertical whitespace before footer line */}
        <div style={{ height: '30px' }}></div>
        <div style={{ height: '2.5px', backgroundColor: 'white', width: '100%', opacity: 0.9 }}></div>

        {/* Footer Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', padding: '0 8px' }}>
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 1 to {tableData.length} of {tableData.length} entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronLeft size={16} /></button>
            <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: "400", fontSize: '13px' }}>1</div>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
