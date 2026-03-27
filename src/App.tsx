import React, { useState } from 'react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (isAuthenticated) {
    return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  return (
    <Login 
      onLogin={() => setIsAuthenticated(true)} 
      onForgotPassword={() => setShowForgotPassword(true)} 
    />
  );
}
