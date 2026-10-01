import React from 'react';
import { Activity, Check, ArrowRight, Play, Calendar, HelpCircle, ChevronRight } from 'lucide-react';
import { services } from '../data/websiteData';

export default function ServicesPage({ setActiveTab, setSelectedService, openBookingModal, openVideoModal }) {
  const approachSteps = [
    { num: "01", title: "Assessment", desc: "31-point biomechanical screening, ROM testing, and functional diagnostic movement analysis." },
    { num: "02", title: "Planning", desc: "Individualized phased rehabilitation program tailored to your sport or mobility goals." },
    { num: "03", title: "Treatment", desc: "Evidence-based manual therapy, dry needling, K-taping, and neuromuscular re-education." },
    { num: "04", title: "Progress", desc: "Regular objective re-testing, load progression monitoring, and full return-to-play clearance." }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>My Services</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '8px' }}>
            Comprehensive physiotherapy care tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {services.map((srv) => (
              <div 
                key={srv.id} 
                className="glass-card"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Service Image Banner */}
                <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                  <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(9, 21, 18, 0.95), transparent 70%)',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'flex-end'
                    }}
                  >
                    <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{srv.title}</h3>
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', gap: '20px' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {srv.fullDesc}
                  </p>

                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Key Focus Areas:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {srv.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <Check size={16} color="var(--primary-emerald)" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedService(srv);
                      setActiveTab('service-detail');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-emerald"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
                  >
                    View Details & Protocols <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Not Sure Banner */}
          <div 
            className="glass-card"
            style={{
              marginTop: '56px',
              padding: '36px',
              borderRadius: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              border: '1px solid rgba(0, 230, 153, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(0, 230, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)' }}>
                <HelpCircle size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '4px' }}>Not Sure Which Service is Right for You?</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Let's discuss your symptoms and goals to create a personalized rehab pathway.
                </p>
              </div>
            </div>
            <button onClick={() => openBookingModal()} className="btn-emerald">
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header center">
            <span className="glass-pill"><Activity size={14} /> Clinical Workflow</span>
            <h2 className="section-title">Our 4-Step Rehabilitation Approach</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {approachSteps.map((step) => (
              <div key={step.num} className="glass-card" style={{ padding: '28px', position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(0, 230, 153, 0.2)', marginBottom: '8px' }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '8px' }}>{step.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO BANNER */}
      <section className="section-padding">
        <div className="container">
          <div 
            className="glass-card"
            style={{
              padding: '60px 36px',
              textAlign: 'center',
              borderRadius: '24px',
              backgroundImage: 'linear-gradient(rgba(5, 11, 10, 0.85), rgba(5, 11, 10, 0.85)), url(https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid var(--primary-emerald)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <h2 style={{ fontSize: '2.2rem', color: '#fff' }}>
              Focused on Recovery. Committed to Performance.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px' }}>
              Watch how Dr. Ankur Sharma evaluates movement biomechanics and guides return-to-play training.
            </p>
            <button onClick={() => openVideoModal()} className="btn-emerald pulse-glow">
              <Play size={18} fill="#000" /> Watch How I Work
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
