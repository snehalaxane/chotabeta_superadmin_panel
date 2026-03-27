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
  Info,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import Navbar from '../Navbar';

interface DeliveryZonesProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

const SortIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.3 }}>
    <ChevronDown size={12} style={{ transform: 'rotate(180deg)', display: 'block' }} />
    <ChevronDown size={12} style={{ display: 'block' }} />
  </div>
);

const FormField = ({ label, placeholder, required = false, info = false, suffix = '' }: { label: string, placeholder: string, required?: boolean, info?: boolean, suffix?: string }) => (
  <div style={{ flex: 1 }}>
    <label style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'white', fontSize: '13px', fontWeight: "400", marginBottom: '8px' }}>
      {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
      {info && <Info size={14} style={{ color: '#64748b', cursor: 'pointer' }} />}
    </label>
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: '100%',
          backgroundColor: '#0c111d',
          border: '1px solid #2d3748',
          borderRadius: '4px',
          padding: `10px ${suffix ? '60px' : '16px'} 10px 16px`,
          fontSize: '13px',
          color: 'white',
          outline: 'none',
          boxSizing: 'border-box'
        }}
      />
      {suffix && (
        <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '12px', borderLeft: '1px solid #2d3748', paddingLeft: '12px' }}>
          {suffix}
        </span>
      )}
    </div>
  </div>
);

export default function DeliveryZones({ onLogout, onNavigate }: DeliveryZonesProps) {
  const [view, setView] = React.useState<'list' | 'add'>('list');
  const [rushEnabled, setRushEnabled] = React.useState(false);

  const deliveryZones = [
    {
      id: 2,
      name: 'Rajampet Zone',
      centerCoordinates: '14.20116878, 79.16439568',
      radius: '6.596 km',
      deliveryTimePerKm: '2 Minutes',
      bufferTime: '7 Minutes',
      status: 'ACTIVE',
      createdAt: '2026-03-12',
    },
    {
      id: 1,
      name: 'Hyderabad Zone',
      centerCoordinates: '17.41581757, 78.50075745',
      radius: '31.409 km',
      deliveryTimePerKm: '3 Minutes',
      bufferTime: '20 Minutes',
      status: 'ACTIVE',
      createdAt: '2026-03-12',
    },
  ];

  if (view === 'add') {
    return (
      <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', boxSizing: 'border-box' }}>
        <Navbar onLogout={onLogout} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', marginBottom: '24px' }}>
          <h1 style={{ color: 'white', fontSize: '20px', fontWeight: "400", margin: 0 }}>Delivery Zones</h1>
          <button
            onClick={() => setView('add')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}
          >
            <Plus size={16} /> Add Delivery Zone
          </button>
        </div>

        <div style={{ backgroundColor: '#1a2233', borderRadius: '8px', border: '1px solid #2d3748', overflow: 'hidden' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #2d3748' }}>
            <h2 style={{ color: 'white', fontSize: '15px', fontWeight: "400", margin: 0 }}>Select Delivery Zones</h2>
          </div>

          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
                Remove Polygon
              </button>
            </div>

            {/* Map Placeholder */}
            <div style={{ position: 'relative', width: '100%', height: '400px', backgroundColor: '#2d3748', borderRadius: '4px', overflow: 'hidden', border: '1px solid #2d3748' }}>
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=40.712776,-74.005974&zoom=12&size=1200x400&key=YOUR_API_KEY_HERE&style=feature:all|element:labels|visibility:off&style=feature:geometry|color:0x242f3e&style=feature:water|color:0x17263c"
                alt="Map Background"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
              />

              {/* Map Search Box */}
              <div style={{ position: 'absolute', top: '20px', left: '20px', width: '300px', backgroundColor: 'white', borderRadius: '2px', padding: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Search for a place here:</p>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                  <input type="text" style={{ width: '100%', padding: '8px 8px 8px 32px', border: '1px solid #ccc', borderRadius: '2px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              {/* Map Controls */}
              <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button style={{ backgroundColor: 'white', border: 'none', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', cursor: 'pointer' }}><Maximize2 size={16} /></button>
              </div>
              <div style={{ position: 'absolute', bottom: '100px', right: '20px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <button style={{ backgroundColor: 'white', border: 'none', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px 2px 0 0', cursor: 'pointer', fontSize: '20px' }}>+</button>
                <button style={{ backgroundColor: 'white', border: 'none', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0 0 2px 2px', cursor: 'pointer', fontSize: '20px' }}>-</button>
              </div>
            </div>

            {/* Form Fields */}
            <div style={{ marginTop: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: 'white', fontSize: '13px', fontWeight: "400", marginBottom: '8px' }}>
                  Zone Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai Central"
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '12px 16px', fontSize: '13px', color: 'white', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <h3 style={{ color: 'white', fontSize: '15px', fontWeight: "400", marginBottom: '20px' }}>Delivery Charges and Details</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <FormField label="Free Delivery Amount" placeholder="e.g. 500" info />
                <FormField label="Buffer Time" placeholder="e.g. 10" required info suffix="Minutes" />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div
                    onClick={() => setRushEnabled(!rushEnabled)}
                    style={{
                      width: '36px',
                      height: '20px',
                      backgroundColor: rushEnabled ? '#007bff' : '#2d3748',
                      borderRadius: '10px',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <div style={{
                      width: '14px',
                      height: '14px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '3px',
                      left: rushEnabled ? '19px' : '3px',
                      transition: 'left 0.2s'
                    }} />
                  </div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'white', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
                    Rush Delivery Enabled
                    <Info size={14} style={{ color: '#64748b' }} />
                  </label>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <FormField label="Rush Delivery Time Per KM" placeholder="e.g. 3" info suffix="Minutes" />
                <FormField label="Rush Delivery Charges" placeholder="e.g. 100" info />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <FormField label="Delivery Time Per KM" placeholder="e.g. 5" required info suffix="Minutes" />
                <FormField label="Regular Delivery Charges" placeholder="e.g. 50" required info />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                <FormField label="Distance Based Delivery Charges" placeholder="e.g. 10" info />
                <FormField label="Per Store Drop Off Fee" placeholder="e.g. 20" info />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                <FormField label="Handling Charges" placeholder="e.g. 15" info />
                <div style={{ flex: 1 }}></div>
              </div>

              <h3 style={{ color: 'white', fontSize: '15px', fontWeight: "400", marginBottom: '20px' }}>Delivery Boy Earnings</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <FormField label="Base Fee" placeholder="e.g. 50.00" info />
                <FormField label="Per Store Pickup Fee" placeholder="e.g. 15.00" info />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                <FormField label="Distance-Based Fee" placeholder="e.g. 10.00" info />
                <FormField label="Per-Order Incentive" placeholder="e.g. 20.00" info />
              </div>

              <h3 style={{ color: 'white', fontSize: '15px', fontWeight: "400", marginBottom: '20px' }}>Status</h3>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '12px 16px', fontSize: '13px', color: 'white', cursor: 'pointer', appearance: 'none', outline: 'none' }}>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid #2d3748', paddingTop: '24px' }}>
                {/* <button 
                  onClick={() => setView('list')}
                  style={{ backgroundColor: 'transparent', border: '1px solid #2d3748', color: 'white', padding: '10px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}
                >
                  Cancel
                </button> */}
                <button style={{ backgroundColor: '#007bff', border: 'none', color: 'white', padding: '10px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <h1 style={{ color: 'white', fontSize: '18px', fontWeight: "400", margin: '0 0 4px 0' }}>Delivery Zones List</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => onNavigate?.('dashboard')}>Home</span>
              <span style={{ color: '#64748b' }}>/</span>
              <span style={{ color: 'white' }}>Delivery Zones</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => setView('add')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: "400", border: 'none', cursor: 'pointer' }}
            >
              <Plus size={16} /> Add Delivery Zone
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: '1px solid #007bff', color: '#007bff', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: "400", cursor: 'pointer' }}>
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1200px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2233', borderBottom: '1px solid #2d3748' }}>
                <th style={{ padding: '12px', width: '60px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ID <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '150px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>NAME <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '200px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CENTER COORDINATES <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '120px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>RADIUS (KM) <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '180px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>DELIVERY TIME PER KM <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '120px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>BUFFER TIME <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '100px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>STATUS <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', minWidth: '120px', borderRight: '1px solid #2d3748', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>CREATED AT <SortIcons /></div>
                </th>
                <th style={{ padding: '12px', width: '100px', fontSize: '11px', color: '#94a3b8', fontWeight: "400", textTransform: 'uppercase', textAlign: 'left', letterSpacing: '0.05em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>ACTION <SortIcons /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {deliveryZones.map((zone) => (
                <tr key={zone.id} style={{ borderBottom: '1px solid #2d3748' }}>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', textAlign: 'center', fontWeight: "400", borderRight: '1px solid #2d3748' }}>{zone.id}</td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{zone.name}</td>
                  <td style={{ padding: '12px', color: '#007bff', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{zone.centerCoordinates}</td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{zone.radius}</td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{zone.deliveryTimePerKm}</td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{zone.bufferTime}</td>
                  <td style={{ padding: '12px', borderRight: '1px solid #2d3748' }}>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: "400" }}>
                      {zone.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px', color: 'white', fontSize: '13px', borderRight: '1px solid #2d3748' }}>{zone.createdAt}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                      <button style={{ backgroundColor: 'transparent', border: '1px solid #007bff', color: '#007bff', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
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
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>Showing 1 to 2 of 2 entries</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronsLeft size={16} /></button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronLeft size={16} /></button>
            <button style={{ backgroundColor: '#007bff', border: 'none', color: 'white', width: '24px', height: '24px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}>1</button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronRight size={16} /></button>
            <button disabled style={{ opacity: 0.3, backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'not-allowed' }}><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
