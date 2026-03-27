import React from 'react';
import {
  Upload,
  Download,
  ArrowLeft,
  FileText
} from 'lucide-react';
import Navbar from '../Navbar';

interface BulkUploadBrandsProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

export default function BulkUploadBrands({ onLogout, onNavigate }: BulkUploadBrandsProps) {
  return (
    <div className="p-8 font-sans selection:bg-blue-500/30 text-white min-h-screen bg-[#070b14]">
      <Navbar onLogout={onLogout} />

      <div className="dashboard-card p-0 rounded-lg border border-[#1e293b] bg-[#1a2233] shadow-xl overflow-hidden">
        {/* Integrated Header Section */}
        <div className="px-6 py-6 border-b border-[#1e293b]/50">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="font-normal text-white mb-0.5 tracking-tight" style={{ fontSize: '20px' }}>Bulk Upload Brands</h1>
              <nav className="flex items-center gap-2" style={{ fontSize: '12px' }}>
                <span
                  className="text-blue-500 font-medium cursor-pointer hover:underline"
                  onClick={() => onNavigate?.('dashboard')}
                >
                  Home
                </span>
                <span className="text-slate-500">/</span>
                <span
                  className="text-blue-500 font-medium cursor-pointer hover:underline"
                  onClick={() => onNavigate?.('brands')}
                >
                  Brands
                </span>
                <span className="text-slate-500">/</span>
                <span className="text-blue-200/80">Bulk Upload</span>
              </nav>
            </div>

            <button
              onClick={() => onNavigate?.('brands')}
              className="px-6 py-2 rounded-md font-normal text-slate-400 border border-[#1e293b] hover:bg-[#1e293b] transition-all"
              style={{ fontSize: '13px' }}
            >
              Back
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Instructions Section */}
          <div className="bg-[#161f30] border border-[#2d3748] rounded-md p-6 mb-8 relative">
            <div className="flex flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex gap-4">
                  <span className="text-slate-300 font-normal whitespace-nowrap" style={{ fontSize: '14px' }}>Instructions</span>
                  <ul className="text-slate-400 space-y-2 list-disc list-inside" style={{ fontSize: '14px' }}>
                    <li>Upload a CSV up to 10MB. First row should include headers.</li>
                    <li>Required fields: <span className="text-slate-200 font-normal">title, logo, scope_type</span></li>
                    <li className="leading-relaxed">
                      Optional fields: <span className="text-slate-300">description, scope_id, status</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-normal transition-colors border border-blue-500/20 px-4 py-3 rounded-md bg-blue-500/5" style={{ fontSize: '13px' }}>
                Download Template
              </button>
            </div>
          </div>

          {/* Upload Area */}
          <div className="mb-6">
            <label className="block text-white font-normal mb-4" style={{ fontSize: '15px' }}>Drag & drop CSV here, or click to browse</label>

            <div className="bg-white rounded-md p-6 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-blue-400 transition-all cursor-pointer group min-h-[180px]">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 underline">Drag & Drop your CSV or Browse</span>
              </div>
            </div>

            <p className="text-slate-500 mt-3" style={{ fontSize: '13px' }}>.csv, max 10MB</p>
          </div>

          {/* Footer Controls */}
          <div className="flex justify-start gap-3 mt-8 pt-6 border-t border-[#1e293b]/50">
            <button
              className="hover:opacity-90 text-white px-6 py-2.5 rounded-md font-normal transition-all shadow-lg"
              style={{ fontSize: '14px', backgroundColor: '#007bff', boxShadow: '0 10px 15px -3px rgba(0, 123, 255, 0.3)' }}
            >
              Upload
            </button>
            <button
              className="px-6 py-2.5 rounded-md font-normal text-slate-400 border border-[#1e293b] hover:bg-[#1e293b] transition-all"
              style={{ fontSize: '14px' }}
            >
              Download Template
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
