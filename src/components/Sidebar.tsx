import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {
  Home,
  Sparkles,
  UsersRound,
  CircleDot,
  Package,
  Users,
  Store,
  Box,
  Percent,
  Truck,
  Star,
  TicketPercent,
  CircleHelp,
  MapPin,
  Bell,
  Image,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  LayoutGrid,
  UserCog,
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ currentPage, onNavigate, onLogout }: SidebarProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'orders', label: 'Orders', icon: ClipboardList },
    {
      id: 'categories',
      label: 'Categories',
      icon: LayoutGrid,
      submenu: [
        { id: 'categories', label: 'Categories', icon: CircleDot },
        { id: 'sort', label: 'Sort', icon: CircleDot },
        { id: 'bulk-upload', label: 'Bulk Upload', icon: CircleDot }
      ]
    },
    { id: 'brands', label: 'Brands', icon: Sparkles },
    {
      id: 'customers',
      label: 'Customers',
      icon: Users,
      submenu: [
        { id: 'customers', label: 'Customers', icon: CircleDot },
        { id: 'wallet transactions', label: 'Wallet Transactions', icon: CircleDot },
        { id: 'pending wallet deposits', label: 'Pending Wallet Deposits', icon: CircleDot }
      ]
    },
    {
      id: 'seller-management',
      label: 'Seller Management',
      icon: UserCog,
      submenu: [
        { id: 'sellers', label: 'Sellers', icon: CircleDot },
        { id: 'add-seller', label: 'Add New Seller', icon: CircleDot },
        { id: 'settlement-overview', label: 'Settlement Overview', icon: CircleDot },
        { id: 'seller-withdrawals', label: 'Seller Withdrawals', icon: CircleDot },
        { id: 'withdrawal-history', label: 'Withdrawal History', icon: CircleDot },
      ]
    },
    { id: 'stores', label: 'Stores', icon: Store },
    {
      id: 'products',
      label: 'Products',
      icon: Box,
      submenu: [
        { id: 'newsletter', label: 'Products', icon: CircleDot },
        { id: 'pending-approval-products', label: 'Pending Approval Products', icon: CircleDot },
        { id: 'product-faqs', label: 'Product Faqs', icon: CircleDot }
      ]
    },
    { id: 'tax-rates', label: 'Tax-Rates', icon: Percent },
    {
      id: 'manage-delivery-boys',
      label: 'Manage Delivery Boys',
      icon: Truck,
      submenu: [
        { id: 'delivery-boys', label: 'Delivery Boys', icon: CircleDot },
        { id: 'delivery-boys-earnings', label: 'Delivery Boy Earnings', icon: CircleDot },
        { id: 'delivery-boys-earnings-history', label: 'Earning History', icon: CircleDot },
        { id: 'delivery-boys-cash-collections', label: 'Delivery Boy Cash Collections', icon: CircleDot },
        { id: 'cash-collection-history', label: 'Cash Collection History', icon: CircleDot },
        { id: 'delivery-boys-withdrawals', label: 'Delivery Boy Withdrawals', icon: CircleDot },
        { id: 'delivery-boys-withdrawal-history', label: 'Withdrawal History', icon: CircleDot },
      ]
    },
    { id: 'banners', label: 'Banners', icon: Image },
    {
      id: 'manage-featured-section',
      label: 'Manage Featured Section',
      icon: Star,
      submenu: [
        { id: 'manage-featured-section', label: 'Manage Featured Section', icon: CircleDot },
        { id: 'sort-featured-section', label: 'Sort Featured Section', icon: CircleDot },
      ]
    },
    { id: 'promos', label: 'Promos', icon: TicketPercent },
    { id: 'faqs', label: 'FAQs', icon: CircleHelp },
    { id: 'delivery-zones', label: 'Delivery Zones', icon: MapPin },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    {
      id: 'roles-permissions',
      label: 'Roles & Permissions',
      icon: UsersRound,
      submenu: [
        { id: 'roles', label: 'Roles', icon: CircleDot },
        { id: 'system-users', label: 'System Users', icon: CircleDot },
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      submenu: [
        { id: 'system', label: 'System', icon: CircleDot },
        { id: 'web', label: 'Web', icon: CircleDot },
        { id: 'app', label: 'App', icon: CircleDot },
        { id: 'home-general-settings', label: 'Home General Settings', icon: CircleDot },
        { id: 'storage', label: 'Storage', icon: CircleDot },
        { id: 'authentication', label: 'Authentication', icon: CircleDot },
        { id: 'email', label: 'Email', icon: CircleDot },
        { id: 'payment', label: 'Payment', icon: CircleDot },
        { id: 'notification', label: 'Notification', icon: CircleDot },
        { id: 'delivery-boy', label: 'Delivery Boy', icon: CircleDot },
        { id: 'seller', label: 'Seller', icon: CircleDot },
      ]
    },
    { id: 'system-updates', label: 'System Updates', icon: Package },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-[#16181D] via-[#16181D] to-[#0F1115] text-white flex flex-col border-r border-[rgba(136,136,136,0.25)] shadow-xl">
      <div className="p-1 border-b border-[rgba(136,136,136,0.15)] bg-gradient-to-r from-[#16181D] to-[#1a1d24]">
        <img src={logo} alt="R&P Logo" className="w-7 h-7 object-contain" />
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {menuItems.map((item) => (
          <div key={item.id}>
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.id)}
                  className={`w-full px-6 py-3 flex items-center gap-3 transition-all duration-300 text-[#888888] hover:text-[#E6E6E6] relative group ${openSubmenu === item.id ? 'bg-gradient-to-r from-[rgba(136,136,136,0.1)] to-transparent' : ''}`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                  {openSubmenu === item.id ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSubmenu === item.id && (
                  <div className="bg-[rgba(255,255,255,0.02)]">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => onNavigate(subItem.id)}
                        className={`w-full py-2.5 pl-14 pr-4 flex items-start gap-3 transition-all duration-300 relative group ${currentPage === subItem.id
                          ? 'bg-[#022683] text-[#E6E6E6]'
                          : 'text-[#888888] hover:text-[#E6E6E6]'
                          }`}
                      >
                        <subItem.icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-left leading-tight">{subItem.label}</span>
                        {currentPage === subItem.id && (
                          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full px-6 py-3 flex items-center gap-3 transition-all duration-300 relative group ${currentPage === item.id
                  ? 'bg-[#022683] text-[#E6E6E6]'
                  : 'text-[#888888] hover:text-[#E6E6E6]'
                  }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
                {currentPage === item.id && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                )}
              </button>
            )}
          </div>
        ))}
      </nav>

      <button
        onClick={onLogout}
        className="px-6 py-4 flex items-center gap-3 border-t border-[rgba(136,136,136,0.25)] text-[#888888] hover:text-white"
      >
        <LogOut className="w-5 h-5" />
        <span className="text-sm">Logout</span>
      </button>
    </div>
  );
}
