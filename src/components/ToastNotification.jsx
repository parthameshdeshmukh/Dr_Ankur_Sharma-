import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function ToastNotification({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 2000,
        minWidth: '300px',
        maxWidth: '420px',
        backgroundColor: '#0a1a16',
        border: `1px solid ${isSuccess ? 'var(--primary-emerald)' : isError ? '#ef4444' : '#3b82f6'}`,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
        borderRadius: '14px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        color: '#fff',
        animation: 'fadeIn 0.3s ease-out forwards'
      }}
    >
      <div style={{ color: isSuccess ? 'var(--primary-emerald)' : isError ? '#ef4444' : '#3b82f6' }}>
        {isSuccess ? <CheckCircle size={22} /> : isError ? <AlertCircle size={22} /> : <Info size={22} />}
      </div>
      <div style={{ flex: 1, fontSize: '0.9rem', lineHeight: '1.4' }}>
        {toast.message}
      </div>
      <button
        onClick={onClose}
        style={{ color: 'var(--text-muted)', padding: '4px', background: 'none', border: 'none' }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
