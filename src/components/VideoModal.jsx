import React from 'react';
import { X, Play, Shield } from 'lucide-react';
import { doctorInfo } from '../data/websiteData';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '24px',
          position: 'relative',
          border: '1px solid rgba(0, 230, 153, 0.3)',
          backgroundColor: '#0a1613'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: '#fff',
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Play size={20} color="var(--primary-emerald)" /> Watch {doctorInfo.name}'s Rehabilitation Journey
        </h3>

        {/* Video Player Container */}
        <div
          style={{
            position: 'relative',
            paddingTop: '56.25%',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#000'
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Dr. Ankur Sharma Physiotherapy Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p style={{ marginTop: '16px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Demonstrating high-performance sports assessment, pitch-side triage, and customized biomechanical rehab protocols with elite athletes.
        </p>
      </div>
    </div>
  );
}
