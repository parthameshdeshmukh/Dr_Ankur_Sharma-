import React, { useState } from 'react';
import { Award, Filter, ArrowRight, User, Clock, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/websiteData';

export default function CaseStudiesPage({ setActiveTab, setSelectedCaseStudy, openBookingModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sports', 'MSK', 'Cardiac', 'Orthopedic'];

  const filteredCases = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>Case Studies</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '8px' }}>
            Real people. Real progress. A glimpse of my clinical and sports rehabilitation work.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="section-padding">
        <div className="container">
          
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    border: isSelected ? '1px solid var(--primary-emerald)' : '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: isSelected ? 'var(--primary-emerald)' : 'rgba(255, 255, 255, 0.05)',
                    color: isSelected ? '#000' : 'var(--text-muted)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat === 'All' ? 'All Cases' : cat}
                </button>
              );
            })}
          </div>

          {/* Clinical Diagnostic Case Studies Grid */}
          <div className="grid-3">
            {filteredCases.map((c) => (
              <div key={c.id} className="card-case-study">
                <div>
                  <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                    <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                      <span className="glass-pill" style={{ fontSize: '0.7rem', padding: '4px 10px', backgroundColor: 'rgba(5, 11, 10, 0.85)' }}>
                        {c.category}
                      </span>
                      <span className="glass-pill" style={{ fontSize: '0.7rem', padding: '4px 10px', backgroundColor: 'rgba(5, 11, 10, 0.85)', color: '#fff', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                        {c.subCategory}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '10px', fontSize: '0.82rem', color: 'var(--primary-emerald)', fontWeight: 700 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <User size={14} /> {c.patientType}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
                        <Clock size={14} /> {c.timeline}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', color: '#fff', lineHeight: '1.3' }}>{c.title}</h3>
                    
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                      {c.summary}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 230, 153, 0.1)',
                      border: '1px solid var(--primary-emerald)',
                      color: 'var(--primary-emerald)',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Award size={16} style={{ flexShrink: 0 }} /> Outcome: {c.keyOutcome}
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(c)}
                    className="btn-emerald"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    View Clinical Protocol <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Have a Similar Condition CTA */}
          <div
            className="glass-card"
            style={{
              marginTop: '64px',
              padding: '36px',
              borderRadius: '20px',
              backgroundColor: 'rgba(0, 230, 153, 0.08)',
              border: '1px solid var(--primary-emerald)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '6px' }}>
                Have a Similar Condition?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                Let's discuss how I can help you return to pain-free movement.
              </p>
            </div>
            <button onClick={() => openBookingModal()} className="btn-emerald">
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
