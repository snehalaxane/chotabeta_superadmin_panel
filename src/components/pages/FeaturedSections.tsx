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
  Plus,
} from 'lucide-react';
import Navbar from '../Navbar';

interface FeaturedSectionsProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function FeaturedSections({ onLogout, onNavigate }: FeaturedSectionsProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        {/* Row 1: Header (Left) and Filters (Right) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '22px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ fontSize: '18px', color: 'white', margin: 0 }}>Featured Sections</h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                <option>All Types</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                <option>All Status</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 32px 8px 12px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                <option>All Scopes</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              <Plus size={16} /> Add Featured Section
            </button>

            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #007bff', backgroundColor: 'transparent', color: '#007bff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
              <RefreshCcw size={16} /> Refresh
            </button>
          </div>
        </div>

        {/* Row 2: Search and Pagination Actions */}
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
                <select style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '8px 40px 8px 12px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
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
                <th style={{ padding: '10px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>TITLE <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', minWidth: '120px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SLUG <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SCOPE TYPE <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SECTION TYPE <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '130px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>SORT ORDER <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '120px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '10px', width: '80px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={9} style={{ padding: '80px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Database size={24} style={{ color: '#64748b' }} />
                    <span style={{ color: '#64748b', fontSize: '16px' }}>No data available.</span>
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
          <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Showing 0 to 0 of 0 entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronLeft size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.2, backgroundColor: 'transparent', border: 'none', color: 'white' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Modal Backdrop and Content */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: '#161d2b', borderRadius: '12px', width: '100%', maxWidth: '700px', border: '1px solid #2d3748', overflow: 'hidden' }}>
            {/* Modal Header */}
            <div style={{ padding: '20px', borderBottom: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ color: 'white', fontSize: '16px', fontWeight: "400", margin: 0 }}>Add Featured Section</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
                <Plus size={20} style={{ transform: 'rotate(45deg)' }} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', maxHeight: '80vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Scope Type */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ color: 'white', fontSize: '13px', marginBottom: '8px' }}>Scope Type <span style={{ color: '#ef4444' }}>*</span></label>
                  <div style={{ position: 'relative', width: '300px' }}>
                    <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                      <option>Global</option>
                    </select>
                    <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #2d3748', paddingTop: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Title */}
                    <div>
                      <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Title <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="text" placeholder="Enter featured section name" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {/* Section Type */}
                      <div>
                        <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Section Type <span style={{ color: '#ef4444' }}>*</span></label>
                        <div style={{ position: 'relative' }}>
                          <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                            <option>Select Section Type</option>
                          </select>
                          <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                        </div>
                      </div>

                      {/* Sort Order */}
                      <div>
                        <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Sort Order</label>
                        <input type="text" placeholder="Enter sort order" style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none' }} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {/* Style */}
                      <div>
                        <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Style <span style={{ color: '#ef4444' }}>*</span></label>
                        <div style={{ position: 'relative' }}>
                          <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                            <option>Select Section Type</option>
                          </select>
                          <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                        </div>
                      </div>

                      {/* Categories */}
                      <div>
                        <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Categories</label>
                        <div style={{ position: 'relative' }}>
                          <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                            <option>Search Category</option>
                          </select>
                          <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                        </div>
                      </div>
                    </div>

                    {/* Short Description */}
                    <div>
                      <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Short Description</label>
                      <textarea placeholder="Short Description" rows={3} style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', outline: 'none', resize: 'none' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {/* Background Type */}
                      <div>
                        <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Background Type</label>
                        <div style={{ position: 'relative' }}>
                          <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                            <option>Select Background Type</option>
                          </select>
                          <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                        </div>
                      </div>

                      {/* Text Color */}
                      <div>
                        <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Text Color</label>
                        <div style={{ width: '100%', height: '38px', backgroundColor: '#000', border: '1px solid #2d3748', borderRadius: '6px', cursor: 'pointer' }}></div>
                      </div>
                    </div>

                    {/* Status Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                      <div style={{ position: 'relative', width: '44px', height: '22px', backgroundColor: '#007bff', borderRadius: '11px', cursor: 'pointer' }}>
                        <div style={{ position: 'absolute', left: '22px', top: '2px', width: '18px', height: '18px', backgroundColor: 'white', borderRadius: '50%', transition: '0.3s' }}></div>
                      </div>
                      <span style={{ color: 'white', fontSize: '13px', fontWeight: '500' }}>Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '20px', borderTop: '1px solid #2d3748', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
              <button onClick={() => setIsModalOpen(false)} style={{ backgroundColor: '#64748b', color: 'white', padding: '10px 24px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}>Cancel</button>
              <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 24px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
