import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle, ChevronRight, Stethoscope } from 'lucide-react';
import { services, doctorInfo } from '../data/websiteData';

export default function ConsultationModal({ isOpen, onClose, showToast }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: services[0].title,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 AM - 10:45 AM',
    fullName: '',
    phone: '',
    email: '',
    concern: ''
  });
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM - 09:45 AM',
    '10:00 AM - 10:45 AM',
    '11:30 AM - 12:15 PM',
    '02:00 PM - 02:45 PM',
    '04:00 PM - 04:45 PM',
    '06:00 PM - 06:45 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      showToast('Please provide your full name and phone number.', 'error');
      return;
    }
    const ref = 'ANK-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep(3);
    showToast(`Consultation requested! Booking Reference: ${ref}`, 'success');
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      service: services[0].title,
      date: new Date().toISOString().split('T')[0],
      timeSlot: '10:00 AM - 10:45 AM',
      fullName: '',
      phone: '',
      email: '',
      concern: ''
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
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
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          border: '1px solid rgba(0, 230, 153, 0.3)',
          backgroundColor: '#0a1613'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'var(--text-muted)',
            padding: '6px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div className="glass-pill" style={{ marginBottom: '8px', width: 'fit-content' }}>
            <Stethoscope size={14} /> Book Appointment
          </div>
          <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>Consultation with {doctorInfo.name}</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Select your service, preferred date & time slot for evidence-based assessment.
          </p>
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '2px',
                backgroundColor: step >= s ? 'var(--primary-emerald)' : 'rgba(255, 255, 255, 0.1)'
              }}
            />
          ))}
        </div>

        {/* STEP 1: Select Service & Slot */}
        {step === 1 && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
                1. Select Rehabilitation Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 230, 153, 0.2)',
                  color: '#fff',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              >
                {services.map((srv) => (
                  <option key={srv.id} value={srv.title} style={{ backgroundColor: '#0a1613' }}>
                    {srv.title}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
                2. Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 230, 153, 0.2)',
                  color: '#fff',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>
                3. Choose Available Time Slot
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {timeSlots.map((slot) => {
                  const isSelected = formData.timeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: isSelected ? '1px solid var(--primary-emerald)' : '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: isSelected ? 'rgba(0, 230, 153, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        color: isSelected ? 'var(--primary-emerald)' : 'var(--text-muted)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Clock size={14} /> {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="btn-emerald"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Next: Patient Information <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 2: Patient Info */}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>
                Injury / Concern Description
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your pain, injury history, or fitness goal..."
                value={formData.concern}
                onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-ghost"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Back
              </button>
              <button
                type="submit"
                className="btn-emerald"
                style={{ flex: 2, justifyContent: 'center' }}
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 230, 153, 0.15)',
                border: '2px solid var(--primary-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--primary-emerald)'
              }}
            >
              <CheckCircle size={40} />
            </div>

            <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>
              Consultation Booked!
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
              Thank you {formData.fullName}. Dr. Ankur Sharma's clinic desk will reach out shortly on {formData.phone} to confirm your appointment.
            </p>

            <div
              style={{
                backgroundColor: 'rgba(0, 230, 153, 0.08)',
                border: '1px dashed var(--primary-emerald)',
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '24px',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Booking Reference</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-emerald)', marginBottom: '8px' }}>
                {bookingRef}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#fff' }}>
                <strong>Service:</strong> {formData.service}<br />
                <strong>Date:</strong> {formData.date}<br />
                <strong>Slot:</strong> {formData.timeSlot}<br />
                <strong>Location:</strong> Apex Sports Rehab Center, Mumbai
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-emerald"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
