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
  Edit2,
  Trash2,
  ShieldCheck,
  X,
} from 'lucide-react';
import Navbar from '../Navbar';

interface RolesProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

export default function Roles({ onLogout, onNavigate }: RolesProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [editingRole, setEditingRole] = React.useState<any>(null);
  
  const roles = [
    {
      id: 4,
      name: 'Managing Director',
      guardName: 'admin',
      createdAt: '2026-02-27',
    },
  ];

  const handleEdit = (role: any) => {
    setEditingRole(role);
    setIsEditModalOpen(true);
  };

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
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '18px', fontWeight: "400", margin: '0 0 4px 0' }}>Roles</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => onNavigate?.('dashboard')}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Roles</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}
            >
              <Plus size={16} /> Add New Role
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px', width: '80px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>NAME <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>GUARD NAME <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>PERMISSIONS <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id} style={{ borderBottom: '1px solid #2d3748' }}>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', textAlign: 'center', fontWeight: "400", borderRight: '1px solid #2d3748' }}>{role.id}</td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{role.name}</td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{role.guardName}</td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{role.createdAt}</td>
                  <td style={{ padding: '12px', borderRight: '1px solid #2d3748' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#007bff', cursor: 'pointer', fontSize: '13px' }}>
                      <ShieldCheck size={14} /> Permissions
                    </div>
                  </td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                      <button 
                        onClick={() => handleEdit(role)}
                        style={{ backgroundColor: 'transparent', border: '1px solid #007bff', color: '#007bff', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        <Edit2 size={14} />
                      </button>
                      <button style={{ backgroundColor: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Line */}
        <div style={{ height: '2.5px', backgroundColor: 'white', width: '100%', marginTop: '30px', opacity: 0.9 }}></div>

        {/* Footer info line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>Showing 1 to 1 of 1 entry</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronLeft size={16} /></button>
            <button style={{ backgroundColor: '#007bff', border: 'none', color: 'white', width: '24px', height: '24px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}>1</button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Add New Role Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#1a2233', width: '600px', borderRadius: '8px', border: '1px solid #2d3748', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #2d3748' }}>
              <h2 style={{ color: 'white', fontSize: '16px', fontWeight: "400", margin: 0 }}>Add New Role</h2>
              <X size={20} style={{ color: '#64748b', cursor: 'pointer' }} onClick={() => setIsModalOpen(false)} />
            </div>
            <div style={{ padding: '24px 20px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: 'white', fontSize: '13px', fontWeight: "400", marginBottom: '8px' }}>
                  Role Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Administrator, Editor, etc." 
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '12px 16px', fontSize: '13px', color: 'white', outline: 'none', boxSizing: 'border-box' }} 
                />
              </div>
              <div style={{ height: '1px', backgroundColor: '#2d3748', margin: '0 -20px 20px -20px' }}></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{ backgroundColor: 'transparent', border: '1px solid #2d3748', color: 'white', padding: '8px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button 
                  style={{ backgroundColor: '#007bff', border: 'none', color: 'white', padding: '8px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}
                >
                  Add new Role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Role Modal */}
      {isEditModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#1a2233', width: '600px', borderRadius: '8px', border: '1px solid #2d3748', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #2d3748' }}>
              <h2 style={{ color: 'white', fontSize: '16px', fontWeight: "400", margin: 0 }}>Edit Role</h2>
              <X size={20} style={{ color: '#64748b', cursor: 'pointer' }} onClick={() => setIsEditModalOpen(false)} />
            </div>
            <div style={{ padding: '24px 20px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: 'white', fontSize: '13px', fontWeight: "400", marginBottom: '8px' }}>
                  Role Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input 
                  type="text" 
                  defaultValue={editingRole?.name || ''}
                  placeholder="Role Name" 
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '12px 16px', fontSize: '13px', color: 'white', outline: 'none', boxSizing: 'border-box' }} 
                />
              </div>
              <div style={{ height: '1px', backgroundColor: '#2d3748', margin: '0 -20px 20px -20px' }}></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  style={{ backgroundColor: 'transparent', border: '1px solid #2d3748', color: 'white', padding: '8px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button 
                  style={{ backgroundColor: '#007bff', border: 'none', color: 'white', padding: '8px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}
                >
                  Update Role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
