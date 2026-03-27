import React, { useState } from 'react';
import {
  Plus,
  RefreshCcw,
  ChevronDown,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Upload,
  X
} from 'lucide-react';
import Navbar from '../Navbar';

interface Brand {
  id: number;
  title: string;
  scopeType: string;
  image: string;
  status: string;
  createdAt: string;
  description?: string;
  scopeCategory?: string;
}

interface BrandsProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

const initialTableData: Brand[] = [
  {
    id: 1,
    title: 'Premium',
    scopeType: 'CATEGORY',
    scopeCategory: 'DAL & PULSES',
    image: 'https://cdn-icons-png.flaticon.com/512/3014/3014498.png',
    status: 'ACTIVE',
    createdAt: '2026-03-13',
    description: 'Premium Quality Every Seed & Pulses'
  },
  {
    id: 2,
    title: 'Freedom',
    scopeType: 'GLOBAL',
    image: 'https://cdn-icons-png.flaticon.com/512/3144/3144557.png',
    status: 'ACTIVE',
    createdAt: '2026-03-13',
    description: 'Global reach brand'
  },
  {
    id: 3,
    title: 'Priya',
    scopeType: 'GLOBAL',
    image: 'https://cdn-icons-png.flaticon.com/512/3081/3081918.png',
    status: 'ACTIVE',
    createdAt: '2026-03-13',
    description: 'Trusted household name'
  }
];

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function Brands({ onLogout, onNavigate }: BrandsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isStatusActive, setIsStatusActive] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const handleEditClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setIsEditModalOpen(true);
    setIsStatusActive(brand.status === 'ACTIVE');
  };

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

        {/* Row 1: Header and Primary Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '20px', color: 'white', margin: 0 }}>Brands</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
              <span
                onClick={() => onNavigate?.('dashboard')}
                style={{ color: '#007bff', fontWeight: "400", cursor: 'pointer' }}
              >
                Home
              </span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Brands</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'rgba(0, 123, 255, 0.05)', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}
            >
              <Plus size={16} /> Add Brand
            </button>
            <button
              onClick={() => onNavigate?.('bulk-upload-brands')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #28a745', backgroundColor: 'rgba(40, 167, 69, 0.05)', color: '#28a745', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}
            >
              <Upload size={16} /> Bulk Upload
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
                <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 40px 8px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none', fontStyle: 'normal' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>TITLE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SCOPE TYPE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>IMAGE <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
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
              {initialTableData.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #2d3748', transition: 'background-color 0.2s' }}>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '14px', fontWeight: "400", color: 'white' }}>{row.id}</td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', fontSize: '14px', fontWeight: "400", color: 'white' }}>{row.title}</td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748' }}>
                    <div style={{ backgroundColor: '#1e2736', color: '#007bff', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: "400", display: 'inline-block' }}>
                      {row.scopeType === 'CATEGORY' ? `CATEGORY (${row.scopeCategory})` : row.scopeType}
                    </div>
                  </td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{ width: '85px', height: '60px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', border: '1px solid #2d3748' }}>
                        <img src={row.image} alt={row.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center' }}>
                    <span style={{ color: '#28a745', fontSize: '13px', fontWeight: "400" }}>{row.status}</span>
                  </td>
                  <td style={{ padding: '16px', borderRight: '1px solid #2d3748', textAlign: 'center', fontSize: '14px', fontWeight: "400", color: 'white' }}>{row.createdAt}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                      <button
                        onClick={() => handleEditClick(row)}
                        style={{ border: '1px solid rgba(0, 123, 255, 0.4)', borderRadius: '4px', padding: '6px', color: '#007bff', cursor: 'pointer', backgroundColor: 'transparent' }}
                      >
                        <Edit2 size={14} strokeWidth={2.5} />
                      </button>
                      <button style={{ border: '1px solid rgba(220, 53, 69, 0.4)', borderRadius: '4px', padding: '6px', color: '#dc3545', cursor: 'pointer', backgroundColor: 'transparent' }}>
                        <Trash2 size={14} strokeWidth={2.5} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', padding: '0 8px' }}>
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 1 to {initialTableData.length} of {initialTableData.length} entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronLeft size={16} /></button>
            <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: "400", fontSize: '13px' }}>1</div>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'default' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Add Brand Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#1a2233',
            width: '100%',
            maxWidth: '600px',
            borderRadius: '12px',
            border: '1px solid #2d3748',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '18px', fontWeight: "400", color: 'white', margin: 0 }}>Create Brand</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ backgroundColor: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', maxHeight: '70vh', overflowY: 'auto' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Scope Type <span style={{ color: '#ef4444' }}>*</span></label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: 'white', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                    <option>Global</option>
                    <option>Region</option>
                    <option>Local</option>
                  </select>
                  <ChevronDown size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Brand Name <span style={{ color: '#ef4444' }}>*</span></label>
                <input type="text" placeholder="Enter brand name" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: 'white', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Description</label>
                <textarea placeholder="Enter description" rows={4} style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: 'white', outline: 'none', resize: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Logo <span style={{ color: '#ef4444' }}>*</span></label>
                <div style={{ backgroundColor: '#f1f5f9', border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '40px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                    Drag & Drop your files or <span style={{ color: '#007bff', fontWeight: "400", textDecoration: 'underline' }}>Browse</span>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  onClick={() => setIsStatusActive(!isStatusActive)}
                  style={{ width: '36px', height: '20px', backgroundColor: isStatusActive ? '#007bff' : '#334155', borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}
                >
                  <div style={{ width: '14px', height: '14px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: isStatusActive ? '19px' : '3px', transition: '0.2s' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Status</span>
              </div>

            </div>

            <div style={{ padding: '20px 24px', borderTop: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
              <button onClick={() => setIsModalOpen(false)} style={{ backgroundColor: '#2d3748', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}>Cancel</button>
              <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}>Create new Brand</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Brand Modal */}
      {isEditModalOpen && selectedBrand && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#1a2233',
            width: '100%',
            maxWidth: '600px',
            borderRadius: '12px',
            border: '1px solid #2d3748',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '18px', fontWeight: "400", color: 'white', margin: 0 }}>Edit Brand</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                style={{ backgroundColor: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', maxHeight: '70vh', overflowY: 'auto' }}>

              {/* Scope Type */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Scope Type <span style={{ color: '#ef4444' }}>*</span></label>
                <div style={{ position: 'relative' }}>
                  <select
                    defaultValue="Category"
                    style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: 'white', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                  >
                    <option>Global</option>
                    <option>Category</option>
                    <option>Region</option>
                  </select>
                  <ChevronDown size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>

              {/* Scope Category - Only for Category scope */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Scope Category</label>
                <div style={{ position: 'relative' }}>
                  <select
                    defaultValue="Dal & Pulses"
                    style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: 'white', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                  >
                    <option>Dal & Pulses</option>
                    <option>Beverages</option>
                    <option>Snacks</option>
                  </select>
                  <ChevronDown size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>

              <div style={{ borderTop: '1px solid #2d3748', marginTop: '-12px' }}></div>

              {/* Brand Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Brand Name <span style={{ color: '#ef4444' }}>*</span></label>
                <input
                  type="text"
                  defaultValue={selectedBrand.title}
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: 'white', outline: 'none' }}
                />
              </div>

              {/* Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Description</label>
                <textarea
                  defaultValue={selectedBrand.description}
                  rows={4}
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', color: 'white', outline: 'none', resize: 'none' }}
                />
              </div>

              {/* Logo Preview Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Logo <span style={{ color: '#ef4444' }}>*</span></label>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '12px',
                  position: 'relative',
                  border: '1px solid #2d3748',
                  overflow: 'hidden',
                  width: '100%',
                  height: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    zIndex: 2
                  }}>
                    <div style={{ backgroundColor: 'black', color: 'white', padding: '2px', borderRadius: '2px', cursor: 'pointer' }}><X size={12} /></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '10px', color: 'white', fontWeight: "400" }}>1000404576.jpg</span>
                      <span style={{ fontSize: '8px', color: '#94a3b8' }}>47 KB</span>
                    </div>
                  </div>
                  <img
                    src="https://chotabeta.app/storage/app/public/category/2024-03-31-660946d97c6ce.png"
                    alt="Logo preview"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Status Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  onClick={() => setIsStatusActive(!isStatusActive)}
                  style={{ width: '36px', height: '20px', backgroundColor: isStatusActive ? '#007bff' : '#334155', borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}
                >
                  <div style={{ width: '14px', height: '14px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: isStatusActive ? '19px' : '3px', transition: '0.2s' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: "400", color: '#f8fafc' }}>Status</span>
              </div>

            </div>

            {/* Modal Footer */}
            <div style={{ padding: '20px 24px', borderTop: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => setIsEditModalOpen(false)}
                style={{ backgroundColor: '#2d3748', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}
              >
                Update Brand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
