import React, { useState, useEffect } from 'react';
import { Stethoscope, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { doctorInfo } from '../data/websiteData';

export default function Navbar({ activeTab, setActiveTab, openBookingModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(5, 11, 10, 0.92)' : 'rgba(5, 11, 10, 0.65)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(0, 230, 153, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.2), rgba(0, 230, 153, 0.05))',
            border: '1px solid var(--primary-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-emerald)'
          }}>
            <Stethoscope size={24} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.3px', lineHeight: '1.1' }}>
              {doctorInfo.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--primary-emerald)', fontWeight: 600, letterSpacing: '0.5px' }}>
              PHYSIOTHERAPIST
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary-emerald)' : 'var(--text-muted)',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.2s ease'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--primary-emerald)',
                      borderRadius: '2px',
                      boxShadow: '0 0 10px var(--primary-emerald)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => openBookingModal()}
            className="btn-emerald"
            style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          >
            <Calendar size={16} />
            <span>Book Consultation</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              padding: '8px',
              color: '#fff',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(6, 14, 12, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--bg-card-border-glow)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '10px',
                backgroundColor: activeTab === item.id ? 'rgba(0, 230, 153, 0.12)' : 'transparent',
                color: activeTab === item.id ? 'var(--primary-emerald)' : 'var(--text-main)',
                fontWeight: 600,
                fontSize: '1rem',
                textAlign: 'left'
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} opacity={0.6} />
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
