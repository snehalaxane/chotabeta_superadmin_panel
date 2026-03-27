import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Eye,
  Sparkles
} from 'lucide-react';
import Navbar from '../Navbar';

interface AddSellerProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export default function AddSeller({ onLogout, onNavigate }: AddSellerProps) {
  const [activeTab, setActiveTab] = useState('Basic Details');

  const menuItems = [
    'Basic Details',
    'Location Details',
    'Business Documents',
    'Status and Metadata'
  ];

  return (
    <div style={{ backgroundColor: '#070b14', minHeight: '100vh', width: '100%', padding: '32px', position: 'relative', boxSizing: 'border-box' }}>
      <Navbar onLogout={onLogout} />

      {/* Header Section */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: "400", color: 'white', margin: 0 }}>Add Seller</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '13px' }}>
          <span
            onClick={() => onNavigate('sellers')}
            style={{ color: '#007bff', cursor: 'pointer' }}
          >
            Sellers
          </span>
          <ChevronRight size={14} style={{ color: '#64748b' }} />
          <span style={{ color: 'white' }}>Add Seller</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        {/* Left Side Menu */}
        <div style={{ width: '200px', flexShrink: 0 }}>
          <h3 style={{ color: 'white', fontSize: '16px', marginBottom: '16px', fontWeight: "400" }}>Menu</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  backgroundColor: activeTab === item ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  color: activeTab === item ? 'white' : '#94a3b8',
                  border: 'none',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontWeight: activeTab === item ? '600' : 'normal'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Form Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Basic Details Card */}
          <div style={{
            backgroundColor: '#1a2233',
            borderRadius: '8px',
            border: '1px solid #2d3748',
            padding: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{ fontSize: '14px', color: 'white', marginBottom: '12px', borderBottom: '1px solid #2d3748', paddingBottom: '12px' }}>
              Basic Details
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                  Seller Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Seller Name"
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                  Country <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                    <option>Search for a country</option>
                  </select>
                  <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                  Mobile <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                    Email <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    defaultValue="experts@chotabeta.com"
                    style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                    Password <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '0px' }}>
                    <input
                      type="password"
                      defaultValue="............"
                      style={{ flex: 1, backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px 0 0 4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                    />
                    <button style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderLeft: 'none', color: '#94a3b8', padding: '0 12px', fontSize: '13px', cursor: 'pointer' }}>
                      Show
                    </button>
                    <button style={{ backgroundColor: '#0c111d', border: '1px solid #2d3748', borderLeft: 'none', borderRadius: '0 4px 4px 0', color: '#94a3b8', padding: '0 12px', cursor: 'pointer' }}>
                      <Sparkles size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details Card */}
          <div style={{
            backgroundColor: '#1a2233',
            borderRadius: '8px',
            border: '1px solid #2d3748',
            padding: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{ fontSize: '14px', color: 'white', marginBottom: '12px', borderBottom: '1px solid #2d3748', paddingBottom: '12px' }}>
              Location Details
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                  Address <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter address"
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                    City <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                    Landmark <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter landmark"
                    style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                    State <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                    Zipcode <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter zipcode"
                    style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Documents Card */}
          <div style={{
            backgroundColor: '#1a2233',
            borderRadius: '8px',
            border: '1px solid #2d3748',
            padding: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{ fontSize: '14px', color: 'white', marginBottom: '12px', borderBottom: '1px solid #2d3748', paddingBottom: '16px' }}>
              Business Documents
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Business License */}
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '12px' }}>
                  Business License <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ width: '100%', height: '50px', border: '1px dashed #2d3748', borderRadius: '4px', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>Drag & Drop your files or <span style={{ color: '#007bff', textDecoration: 'underline' }}>Browse</span></p>
                </div>
                <p style={{ color: '#64748b', fontSize: '11px', marginTop: '8px' }}>Upload a clear copy of your business license. Accepted formats: JPEG, PNG, PDF. Max size: 2MB.</p>
              </div>

              {/* Articles of Incorporation */}
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '12px' }}>
                  Articles of Incorporation <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ width: '100%', height: '50px', border: '1px dashed #2d3748', borderRadius: '4px', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>Drag & Drop your files or <span style={{ color: '#007bff', textDecoration: 'underline' }}>Browse</span></p>
                </div>
                <p style={{ color: '#64748b', fontSize: '11px', marginTop: '8px' }}>Provide your company's articles of incorporation or certificate of incorporation. File must be clear and readable.</p>
              </div>

              {/* National Identity Card */}
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '12px' }}>
                  National Identity Card <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ width: '100%', height: '50px', border: '1px dashed #2d3748', borderRadius: '4px', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>Drag & Drop your files or <span style={{ color: '#007bff', textDecoration: 'underline' }}>Browse</span></p>
                </div>
                <p style={{ color: '#64748b', fontSize: '11px', marginTop: '8px' }}>Upload a government-issued photo ID (passport, driver's license, or national ID card). Both front and back sides if applicable.</p>
              </div>

              {/* Authorized Signature */}
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '12px' }}>
                  Authorized Signature <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ width: '100%', height: '50px', border: '1px dashed #2d3748', borderRadius: '4px', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>Drag & Drop your files or <span style={{ color: '#007bff', textDecoration: 'underline' }}>Browse</span></p>
                </div>
                <p style={{ color: '#64748b', fontSize: '11px', marginTop: '8px' }}>Upload a document with authorized signature samples or signature authorization letter from your company.</p>
              </div>
            </div>
          </div>

          {/* Status and Metadata Card */}
          <div style={{
            backgroundColor: '#1a2233',
            borderRadius: '8px',
            border: '1px solid #2d3748',
            padding: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{ fontSize: '14px', color: 'white', marginBottom: '12px', borderBottom: '1px solid #2d3748', paddingBottom: '16px' }}>
              Status and Metadata
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Verification Status */}
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                  Verification Status <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                    <option>Approved</option>
                  </select>
                  <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>

              {/* Metadata */}
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                  Metadata <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  placeholder="Enter metadata (JSON format)"
                  rows={4}
                  style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', outline: 'none', resize: 'vertical' }}
                />
              </div>

              {/* Visibility Status */}
              <div>
                <label style={{ display: 'block', color: 'white', fontSize: '12px', marginBottom: '8px' }}>
                  Visibility Status <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0c111d', border: '1px solid #2d3748', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', color: '#94a3b8', cursor: 'pointer', appearance: 'none' }}>
                    <option>Visible</option>
                  </select>
                  <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button Section */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <button
              onClick={() => onNavigate('sellers')}
              style={{ padding: '12px 24px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: "400", cursor: 'pointer' }}>
              Add Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
