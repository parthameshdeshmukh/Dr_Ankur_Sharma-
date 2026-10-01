import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  BookOpen, 
  CheckCircle, 
  ShieldCheck, 
  Microscope, 
  Activity, 
  HeartPulse,
  Quote,
  ArrowRight
} from 'lucide-react';
import { 
  doctorInfo, 
  educationAndExp, 
  whyChooseMe, 
  certifications,
  journeyPictures 
} from '../data/websiteData';

export default function AboutPage({ setActiveTab, openBookingModal }) {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      
      {/* Page Header & Breadcrumb */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>About Me</h1>
        </div>
      </section>

      {/* Main Bio Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Bio Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="glass-pill"><Award size={14} /> Background & Philosophy</span>
              <h2 style={{ fontSize: '2.2rem', color: '#fff', lineHeight: '1.2' }}>
                More Than a Physiotherapist, A Partner in Your Recovery
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {doctorInfo.bio}
              </p>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                Whether managing pitch-side acute trauma for competitive athletes or guiding non-surgical post-op spine and joint recovery, my focus is always on objective bio-mechanical feedback, quad reactivation, and long-term functional autonomy.
              </p>

              {/* Signature Graphic */}
              <div style={{ marginTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px' }}>
                <div style={{ fontFamily: "'Brush Script MT', cursive, var(--font-heading)", fontSize: '1.8rem', color: 'var(--primary-emerald)' }}>
                  Dr. Ankur Sharma
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Sports & Musculoskeletal Physiotherapist
                </div>
              </div>
            </div>

            {/* Doctor Photo Card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                className="glass-card"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: '460px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 230, 153, 0.3)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                  alt={doctorInfo.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>

          {/* 4 Pillars Grid */}
          <div 
            style={{ 
              marginTop: '64px', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '24px' 
            }}
          >
            {/* 1. Education */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.12)', border: '1px solid var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)', marginBottom: '16px' }}>
                <GraduationCap size={22} />
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '6px' }}>{educationAndExp.education.title}</h4>
              <div style={{ color: 'var(--primary-emerald)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '4px' }}>
                {educationAndExp.education.institution}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {educationAndExp.education.degree} ({educationAndExp.education.year})
              </div>
            </div>

            {/* 2. Experience */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.12)', border: '1px solid var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)', marginBottom: '16px' }}>
                <Briefcase size={22} />
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '6px' }}>{educationAndExp.experience.title}</h4>
              <div style={{ color: 'var(--primary-emerald)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '4px' }}>
                {educationAndExp.experience.detail}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {educationAndExp.experience.description}
              </div>
            </div>

            {/* 3. Clinical Training */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.12)', border: '1px solid var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)', marginBottom: '16px' }}>
                <Award size={22} />
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '6px' }}>{educationAndExp.clinicalTraining.title}</h4>
              <div style={{ color: 'var(--primary-emerald)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '4px' }}>
                {educationAndExp.clinicalTraining.detail}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {educationAndExp.clinicalTraining.description}
              </div>
            </div>

            {/* 4. Research Interest */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 153, 0.12)', border: '1px solid var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)', marginBottom: '16px' }}>
                <BookOpen size={22} />
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '6px' }}>{educationAndExp.researchInterest.title}</h4>
              <div style={{ color: 'var(--primary-emerald)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '4px' }}>
                {educationAndExp.researchInterest.detail}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {educationAndExp.researchInterest.description}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME? */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header">
            <span className="glass-pill"><ShieldCheck size={14} /> Core Competencies</span>
            <h2 className="section-title">Why Choose Me?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {whyChooseMe.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '28px' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 230, 153, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-emerald)',
                    marginBottom: '16px'
                  }}
                >
                  <CheckCircle size={22} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & TRAININGS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="glass-pill"><Award size={14} /> Credentials</span>
            <h2 className="section-title">Certifications & Trainings</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {certifications.map((c) => (
              <div 
                key={c.id} 
                className="glass-card"
                style={{ 
                  padding: '24px', 
                  borderLeft: '4px solid var(--primary-emerald)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px' 
                }}
              >
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>{c.title}</div>
                <div style={{ color: 'var(--primary-emerald)', fontSize: '0.85rem', fontWeight: 600 }}>{c.issuer}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Issued: {c.year}</div>
              </div>
            ))}
          </div>

          {/* Quote Banner Card */}
          <div 
            className="glass-card"
            style={{
              marginTop: '56px',
              padding: '40px',
              textAlign: 'center',
              borderRadius: '24px',
              border: '1px solid var(--primary-emerald)',
              backgroundColor: 'rgba(0, 230, 153, 0.05)'
            }}
          >
            <Quote size={36} color="var(--primary-emerald)" style={{ opacity: 0.6, marginBottom: '16px' }} />
            <blockquote style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 600, fontStyle: 'italic', maxWidth: '800px', margin: '0 auto 16px' }}>
              "My goal is to help every individual move better, recover stronger, and return to what they love."
            </blockquote>
            <cite style={{ color: 'var(--primary-emerald)', fontWeight: 700, fontStyle: 'normal' }}>
              — Dr. Ankur Sharma
            </cite>
          </div>
        </div>
      </section>

    </div>
  );
}
