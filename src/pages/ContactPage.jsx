import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, MessageSquare, Send, CheckCircle, ExternalLink, Activity, Users } from 'lucide-react';
import { doctorInfo } from '../data/websiteData';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function ContactPage({ setActiveTab, openBookingModal, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    type: 'Clinic Consultation'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Thank you! Your message has been sent directly to Dr. Ankur Sharma.', 'success');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi Dr. Ankur, I would like to inquire about physiotherapy services.`);
    window.open(`https://wa.me/${doctorInfo.whatsappPhone}?text=${text}`, '_blank');
  };

  const inquiryTypes = [
    { title: "Clinic Consultation", icon: Activity, desc: "In-person assessment & manual therapy sessions." },
    { title: "Sports Events", icon: Calendar, desc: "On-field injury management & triage for tournaments." },
    { title: "Teams & Collaboration", icon: Users, desc: "Seasonal athletic conditioning & load monitoring." },
    { title: "Academic & Speaker Queries", icon: MessageSquare, desc: "Lectures on biomechanics & sports injury prevention." }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      
      {/* Header */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>Let's Work Together</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '8px', maxWidth: '600px' }}>
            For consultations, sports events, athletic team collaborations or any queries, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Card */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
            
            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '36px', border: '1px solid rgba(0, 230, 153, 0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>Send a Message</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Fill in your details and Dr. Ankur Sharma's clinic team will respond within 24 hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(0, 230, 153, 0.15)', color: 'var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle size={36} />
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '8px' }}>Message Received!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                    Thank you, {formData.name}. We will reach out to you via {formData.phone} shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', concern: '', type: 'Clinic Consultation' });
                    }} 
                    className="btn-outline-emerald"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>Inquiry Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t.title} value={t.title} style={{ backgroundColor: '#0a1613' }}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
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

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>Phone Number *</label>
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

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '6px' }}>Concern / Message</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your condition, event requirements, or question..."
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

                  <button type="submit" className="btn-emerald" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '20px' }}>Contact Information</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Call Direct</div>
                      <a href={`tel:${doctorInfo.phone}`} style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
                        {doctorInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)' }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email Address</div>
                      <a href={`mailto:${doctorInfo.email}`} style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                        {doctorInfo.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)' }}>
                      <InstagramIcon />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Instagram Handle</div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                        {doctorInfo.instagram}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Clinic Location</div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                        {doctorInfo.location}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {doctorInfo.clinicAddress}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>
                  <button onClick={() => openBookingModal()} className="btn-emerald" style={{ flex: 1, justifyContent: 'center' }}>
                    Book Consultation
                  </button>
                  <button onClick={handleWhatsApp} className="btn-ghost" style={{ flex: 1, justifyContent: 'center', borderColor: '#25D366', color: '#25D366' }}>
                    WhatsApp Chat
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Quick Inquiry Categories Grid */}
          <div style={{ marginTop: '64px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '24px' }}>Quick Inquiry Categories</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {inquiryTypes.map((iq) => {
                const IconComp = iq.icon;
                return (
                  <div key={iq.title} className="glass-card" style={{ padding: '24px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(0, 230, 153, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)', marginBottom: '14px' }}>
                      <IconComp size={20} />
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>{iq.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>{iq.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
