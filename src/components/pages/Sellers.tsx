import React from 'react';
import {
  RefreshCcw,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Edit2,
  Trash2
} from 'lucide-react';
import Navbar from '../Navbar';

interface SellersProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const tableData = [
  {
    id: 2,
    seller: 'Soori Food',
    email: 'soorifood.cb@gmail.com',
    mobile: '08886660031',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    stores: 1,
    createdAt: '2026-03-15 16:12:17'
  },
  {
    id: 1,
    seller: 'pickflys',
    email: 'chotabeta2026@gmail.com',
    mobile: '8886660032',
    verificationStatus: 'APPROVED',
    visibilityStatus: 'VISIBLE',
    stores: 6,
    createdAt: '2026-03-12 19:09:59'
  }
];

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function Sellers({ onLogout, onNavigate }: SellersProps) {
  return (
    <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', position: 'relative', boxSizing: 'border-box' }}>
      <Navbar onLogout={onLogout} />

      {/* Main Container Card */}
      <div style={{
        marginTop: '32px',
        backgroundColor: '#1a2233',
        borderRadius: '8px',
        border: '1px solid #2d3748',
        padding: '14px',
        width: '100%',
        boxSizing: 'border-box'
      }}>

        {/* Row 1: Header and Buttons */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }}>
          <div>
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>Sellers</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Sellers</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => onNavigate('add-seller')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', border: 'none', cursor: 'pointer', fontWeight: "400" }}>
              <Plus size={16} /> Add Seller
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'rgba(0, 123, 255, 0.05)', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              <RefreshCcw size={16} /> Refresh
            </button>
          </div>
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1200px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '10px', width: '50px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SELLER <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>EMAIL <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '100px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>MOBILE <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '100px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>VERIFICATION STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '100px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>VISIBILITY STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '100px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STORES <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #2d3748' }}>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '13px', color: 'white' }}>{row.id}</td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', fontSize: '13px', fontWeight: "400", color: 'white' }}>{row.seller}</td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', fontSize: '13px', color: 'white' }}>{row.email}</td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '13px', color: 'white' }}>{row.mobile}</td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center' }}>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: "400" }}>{row.verificationStatus}</span>
                  </td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center' }}>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: "400" }}>{row.visibilityStatus}</span>
                  </td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center' }}>
                    <button style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)', border: 'none', color: '#007bff', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: "400", cursor: 'pointer' }}>
                      {row.stores} {row.stores === 1 ? 'STORE' : 'STORES'}
                    </button>
                  </td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '13px', color: 'white' }}>{row.createdAt}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <button style={{ border: '1px solid #007bff', backgroundColor: 'transparent', color: '#007bff', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                        <Edit2 size={14} />
                      </button>
                      <button style={{ border: '1px solid #ef4444', backgroundColor: 'transparent', color: '#ef4444', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Simple whitespace and then white line */}
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
