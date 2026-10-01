import React from 'react';
import { X, CheckCircle, Clock, User, Award, ArrowRight, Activity } from 'lucide-react';

export default function CaseStudyModal({ caseItem, onClose, openBookingModal }) {
  if (!caseItem) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
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
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          border: '1px solid rgba(0, 230, 153, 0.3)',
          backgroundColor: '#091512'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'var(--text-muted)',
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }}
        >
          <X size={20} />
        </button>

        {/* Category Badge & Title */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <span className="glass-pill">{caseItem.category}</span>
          <span className="glass-pill" style={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}>
            {caseItem.subCategory}
          </span>
        </div>

        <h3 style={{ fontSize: '1.7rem', color: '#fff', marginBottom: '12px', lineHeight: '1.25' }}>
          {caseItem.title}
        </h3>

        {/* Patient Profile Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            backgroundColor: 'rgba(0, 230, 153, 0.08)',
            padding: '12px 18px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 230, 153, 0.2)',
            marginBottom: '24px',
            fontSize: '0.88rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff' }}>
            <User size={16} color="var(--primary-emerald)" />
            <strong>Patient:</strong> {caseItem.patientType}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff' }}>
            <Clock size={16} color="var(--primary-emerald)" />
            <strong>Timeline:</strong> {caseItem.timeline}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-emerald)', fontWeight: 700 }}>
            <Award size={16} />
            {caseItem.keyOutcome}
          </div>
        </div>

        {/* Case Cover Image */}
        {caseItem.image && (
          <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
            <img src={caseItem.image} alt={caseItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        {/* Deep Dive Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
          <div
            style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <h4 style={{ color: 'var(--primary-emerald)', fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={16} /> Clinical Assessment & Diagnosis
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {caseItem.details.problem}
            </p>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <h4 style={{ color: 'var(--primary-emerald)', fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={16} /> Rehabilitation Protocol Executed
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {caseItem.details.protocol}
            </p>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 230, 153, 0.1)',
              border: '1px solid var(--primary-emerald)'
            }}
          >
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} color="var(--primary-emerald)" /> Verified Outcome & clearance
            </h4>
            <p style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 500, lineHeight: '1.6' }}>
              {caseItem.details.result}
            </p>
          </div>
        </div>

        {/* CTA Footer */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Have a similar sports or joint condition?
          </div>
          <button
            onClick={() => {
              onClose();
              openBookingModal();
            }}
            className="btn-emerald"
          >
            Book a Consultation <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
