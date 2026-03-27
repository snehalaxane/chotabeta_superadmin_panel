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
} from 'lucide-react';
import Navbar from '../Navbar';
import ProductDetails from './ProductDetails';

interface ProductsProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const tableData = [
  {
    id: 7,
    title: 'Plain Mandi Rice',
    category: 'Biryani',
    brand: '',
    featured: 'No',
    type: 'Product Type',
    status: 'ACTIVE',
    approvalStatus: 'Verification Status',
    createdAt: '2026-03-19',
    image: 'https://via.placeholder.com/50?text=Rice'
  },
  {
    id: 6,
    title: 'Nijayoy',
    category: 'chicken pickle',
    brand: '',
    featured: 'Yes',
    type: 'Product Type',
    status: 'ACTIVE',
    approvalStatus: 'Verification Status',
    createdAt: '2026-03-16',
    image: 'https://via.placeholder.com/50?text=Pickle'
  },
  {
    id: 5,
    title: 'test',
    category: 'Pickles',
    brand: 'Priya',
    featured: 'No',
    type: 'Product Type',
    status: 'ACTIVE',
    approvalStatus: 'Verification Status',
    createdAt: '2026-03-16',
    image: 'https://via.placeholder.com/50?text=Test'
  },
  {
    id: 4,
    title: 'Chicken Dum Biryani',
    category: 'Biryani',
    brand: '',
    featured: 'No',
    type: 'Product Type',
    status: 'ACTIVE',
    approvalStatus: 'Verification Status',
    createdAt: '2026-03-15',
    image: 'https://via.placeholder.com/50?text=Biryani'
  },
  {
    id: 3,
    title: 'Green Moong, Pesalu, పెసలు',
    category: 'Dal & Pulses',
    brand: 'Premium',
    featured: 'No',
    type: 'Product Type',
    status: 'ACTIVE',
    approvalStatus: 'Verification Status',
    createdAt: '2026-03-13',
    image: 'https://via.placeholder.com/50?text=Dal'
  },
  {
    id: 2,
    title: 'Dal',
    category: 'Dal & Pulses',
    brand: 'Premium',
    featured: 'No',
    type: 'Product Type',
    status: 'ACTIVE',
    approvalStatus: 'Verification Status',
    createdAt: '2026-03-13',
    image: 'https://via.placeholder.com/50?text=Dal2'
  },
  {
    id: 1,
    title: 'Toor dal',
    category: 'Dal & Pulses',
    brand: 'Premium',
    featured: 'Yes',
    type: 'Product Type',
    status: 'ACTIVE',
    approvalStatus: 'Verification Status',
    createdAt: '2026-03-13',
    image: 'https://via.placeholder.com/50?text=Dal3'
  }
];

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function Products({ onLogout, onNavigate }: ProductsProps) {
  const [viewingProduct, setViewingProduct] = React.useState<any>(null);

  if (viewingProduct) {
    return (
      <ProductDetails
        onLogout={onLogout}
        onBack={() => setViewingProduct(null)}
        product={viewingProduct}
      />
    );
  }

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
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>Products</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Products</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none', fontWeight: "400" }}>
                <option>Product Type</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                <option>Product Status</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                <option>Verification Status</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none', width: '160px' }}>
                <option>Category</option>
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
                <th style={{ padding: '10px', minWidth: '350px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PRODUCT DETAILS <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '250px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ADMIN APPROVAL STATUS <SortIcons /></div>
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
                  <td style={{ padding: '12px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '13px', color: 'white' }}>{row.id}</td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0, border: '1px solid #2d3748' }}>
                        <img src={row.image} alt={row.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <h4 style={{ margin: 0, color: '#007bff', fontSize: '13px', fontWeight: "400" }}>Title: {row.title}</h4>
                        <p style={{ margin: 0, color: 'white', fontSize: '12px' }}>Category: {row.category}</p>
                        <p style={{ margin: 0, color: 'white', fontSize: '12px' }}>Brand: {row.brand || 'None'}</p>
                        <p style={{ margin: 0, color: 'white', fontSize: '12px' }}>Featured: {row.featured}</p>
                        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                          <span style={{ fontSize: '10px', color: '#3498db', fontWeight: "400" }}>{row.type}</span>
                          <span style={{ fontSize: '10px', color: '#10b981', fontWeight: "400" }}>{row.status}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '12px', borderRight: '1px solid #2d3748', textAlign: 'center' }}>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: "400" }}>{row.approvalStatus}</span>
                  </td>
                  <td style={{ padding: '12px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '13px', color: 'white' }}>{row.createdAt}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button
                      onClick={() => setViewingProduct(row)}
                      style={{ backgroundColor: 'rgba(241, 196, 15, 0.1)', border: '1px solid rgba(241, 196, 15, 0.5)', color: '#f1c40f', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}
                    >
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
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 1 to {tableData.length} of {tableData.length} entries (filtered from 8 total entries)</p>
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
