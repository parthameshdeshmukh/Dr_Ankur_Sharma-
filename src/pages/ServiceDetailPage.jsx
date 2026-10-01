import React from 'react';
import { Activity, Check, ArrowRight, Calendar, UserCheck, Shield, Award, ChevronRight } from 'lucide-react';
import { caseStudies, services } from '../data/websiteData';

export default function ServiceDetailPage({ service, setActiveTab, setSelectedCaseStudy, openBookingModal }) {
  // Fallback to first service if none selected
  const activeService = service || services[0];

  // Filter related case studies
  const relatedCases = caseStudies.filter((c) => {
    if (activeService.id === 'sports-physiotherapy') return c.category === 'Sports';
    if (activeService.id === 'musculoskeletal-rehab') return c.category === 'MSK' || c.category === 'Orthopedic';
    if (activeService.id === 'cardiac-rehabilitation') return c.category === 'Cardiac';
    return true;
  });

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      
      {/* Breadcrumb Header */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <div>
              <span className="glass-pill" style={{ marginBottom: '8px' }}>
                <Activity size={14} /> Specialized Care
              </span>
              <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>{activeService.title}</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '6px', maxWidth: '650px' }}>
                {activeService.shortDesc}
              </p>
            </div>
            <button onClick={() => openBookingModal()} className="btn-emerald">
              <Calendar size={18} /> Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section style={{ paddingTop: '32px' }}>
        <div className="container">
          <div style={{ width: '100%', height: '360px', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0, 230, 153, 0.3)' }}>
            <img src={activeService.image} alt={activeService.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            {/* Overview & What I Offer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '14px', color: 'var(--primary-emerald)' }}>
                  Overview
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {activeService.fullDesc}
                </p>
              </div>

              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '18px' }}>
                  What I Offer
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: '#e2e8f0' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(0, 230, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)', flexShrink: 0 }}>
                        <Check size={14} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Target Audience & Outcomes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <UserCheck size={20} color="var(--primary-emerald)" /> Who is it for?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeService.whoIsItFor.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#cbd5e1' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-emerald)' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card" style={{ padding: '32px', borderColor: 'rgba(0, 230, 153, 0.3)' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={20} color="var(--primary-emerald)" /> Expected Outcomes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeService.expectedOutcomes.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#fff', fontWeight: 500 }}>
                      <Check size={16} color="var(--primary-emerald)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Process Timeline */}
          <div style={{ marginTop: '56px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '24px' }}>
              Rehabilitation Process Timeline
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: "1", title: "Assessment", desc: "Detailed evaluation & screening" },
                { step: "2", title: "Treatment Plan", desc: "Individualized rehab program" },
                { step: "3", title: "Rehabilitation", desc: "Hands-on therapy & exercises" },
                { step: "4", title: "Return to Play", desc: "Sport-specific testing & re-entry" }
              ].map((p) => (
                <div key={p.step} className="glass-card" style={{ padding: '24px', borderLeft: '3px solid var(--primary-emerald)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-emerald)', color: '#000', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    {p.step}
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '4px' }}>{p.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div 
            className="glass-card"
            style={{
              marginTop: '56px',
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
                Ready to Start Your Recovery Journey?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                Book an appointment with Dr. Ankur Sharma today.
              </p>
            </div>
            <button onClick={() => openBookingModal()} className="btn-emerald">
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>

          {/* Related Case Studies */}
          {relatedCases.length > 0 && (
            <div style={{ marginTop: '64px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '24px' }}>
                Related Case Studies
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {relatedCases.map((c) => (
                  <div key={c.id} className="glass-card" style={{ padding: '20px' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--primary-emerald)', fontWeight: 700, marginBottom: '6px' }}>
                      {c.category} • {c.subCategory}
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '12px' }}>{c.title}</h4>
                    <button 
                      onClick={() => setSelectedCaseStudy(c)}
                      style={{ color: 'var(--primary-emerald)', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      View Case Protocol <ChevronRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
