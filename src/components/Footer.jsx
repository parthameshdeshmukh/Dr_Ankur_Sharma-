import React, { useState } from 'react';
import { Stethoscope, Send, ArrowUpRight } from 'lucide-react';
import { doctorInfo } from '../data/websiteData';

// Custom Brand SVG Icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export default function Footer({ setActiveTab, openBookingModal, showToast }) {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast('Successfully subscribed to Dr. Ankur Sharma\'s newsletter!', 'success');
    setEmail('');
  };

  const handleNav = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#030807',
        borderTop: '1px solid rgba(0, 230, 153, 0.18)',
        paddingTop: '64px',
        paddingBottom: '32px',
        color: 'var(--text-muted)'
      }}
    >
      <div className="container">
        
        {/* Strict 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(0, 230, 153, 0.15)',
                  border: '1px solid var(--primary-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-emerald)',
                  flexShrink: 0
                }}
              >
                <Stethoscope size={22} />
              </div>
              <div style={{ whiteSpace: 'nowrap' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem' }}>{doctorInfo.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary-emerald)', fontWeight: 700, letterSpacing: '0.5px' }}>PHYSIOTHERAPIST</p>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: '#94a3b8' }}>
              Helping athletes recover faster, perform better and stay injury-free through evidence-based care.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              {[
                { icon: InstagramIcon, href: 'https://instagram.com' },
                { icon: LinkedinIcon, href: 'https://linkedin.com' },
                { icon: TwitterIcon, href: 'https://twitter.com' },
                { icon: YoutubeIcon, href: 'https://youtube.com' }
              ].map((s, idx) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-emerald)';
                      e.currentTarget.style.color = 'var(--primary-emerald)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 230, 153, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <IconComp />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '18px', whiteSpace: 'nowrap' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'case-studies', label: 'Case Studies' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    style={{
                      fontSize: '0.88rem',
                      color: '#94a3b8',
                      transition: 'color 0.2s ease',
                      textAlign: 'left',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-emerald)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '18px', whiteSpace: 'nowrap' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Sports Physiotherapy',
                'Musculoskeletal Rehab',
                'Cardiac Rehabilitation',
                'Injury Prevention'
              ].map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('services')}
                    style={{
                      fontSize: '0.88rem',
                      color: '#94a3b8',
                      transition: 'color 0.2s ease',
                      textAlign: 'left',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-emerald)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '18px', whiteSpace: 'nowrap' }}>Newsletter</h4>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '16px', lineHeight: '1.5' }}>
              Get late-breaking rehab updates, recovery guides and injury prevention tips.
            </p>
            <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.88rem',
                  outline: 'none',
                  minWidth: '0'
                }}
              />
              <button
                type="submit"
                className="btn-emerald"
                style={{ padding: '10px 16px', borderRadius: '10px', flexShrink: 0 }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '24px',
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <div>© 2026 Dr. Ankur Sharma. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#64748b', whiteSpace: 'nowrap' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748b', whiteSpace: 'nowrap' }}>Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}