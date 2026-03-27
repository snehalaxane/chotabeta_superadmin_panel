import React, { useState } from 'react';
import logo from '../assets/logo.png';

interface ForgotPasswordProps {
  onBack: () => void;
}

export default function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for sending reset link would go here
    alert('Reset link sent to ' + email);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '40px 24px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}
    >
      {/* Logo Container */}
      <div
        style={{
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <img
          src={logo}
          alt="Chota Beta Logo"
          style={{
            height: '70px',
            width: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Forgot Password Card */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          boxShadow: '0 5px 30px rgba(0,0,0,0.05)',
          width: '100%',
          maxWidth: '480px',
          padding: '40px',
          border: '1px solid #eaedf0',
          boxSizing: 'border-box'
        }}
      >
        <h1
          style={{
            fontSize: '22px',
            fontWeight: 600,
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '40px',
            marginTop: 0
          }}
        >
          Forgot your password?
        </h1>

        <p
          style={{
            fontSize: '15px',
            color: '#6b7280',
            textAlign: 'center',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}
        >
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#4b5563',
                marginBottom: '8px'
              }}
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '14px',
                color: '#1f2937'
              }}
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Send button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#007bff',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '6px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 123, 255, 0.2)'
            }}
          >
            Send password reset link
          </button>

          {/* Back link */}
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              Remember your password?{' '}
            </span>
            <button
              type="button"
              onClick={onBack}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: '#007bff',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
