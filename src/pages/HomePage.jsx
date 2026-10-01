import React from 'react';
import { 
  Activity, 
  Trophy, 
  Heart, 
  Shield, 
  ArrowRight, 
  Play, 
  Calendar, 
  Check, 
  Award,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Users,
  Clock,
  User,
  ArrowUpRight
} from 'lucide-react';
import { 
  doctorInfo, 
  stats, 
  partners, 
  services, 
  caseStudies, 
  pastEvents, 
  testimonials, 
  blogPosts,
  journeyPictures 
} from '../data/websiteData';

export default function HomePage({ 
  setActiveTab, 
  openBookingModal, 
  openVideoModal, 
  setSelectedCaseStudy,
  setSelectedService,
  setSelectedBlogPost 
}) {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* 01. HERO SECTION */}
      <section 
        style={{ 
          position: 'relative', 
          paddingTop: '64px', 
          paddingBottom: '88px',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 75% 25%, rgba(0, 230, 153, 0.15) 0%, rgba(5, 11, 10, 0) 65%)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '48px', 
              alignItems: 'center' 
            }}
          >
            {/* Left Hero Content */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
              <div className="glass-pill" style={{ fontSize: '0.8rem', padding: '6px 16px' }}>
                <Sparkles size={14} /> SPORTS & MUSCULOSKELETAL PHYSIOTHERAPIST
              </div>
              
              <h1 
                style={{ 
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', 
                  fontWeight: 800, 
                  lineHeight: '1.05',
                  color: '#fff',
                  letterSpacing: '-1.5px'
                }}
              >
                {doctorInfo.name}
              </h1>

              <h2 
                style={{ 
                  fontSize: 'clamp(1.3rem, 2.4vw, 1.85rem)', 
                  fontWeight: 600, 
                  color: '#e2e8f0', 
                  lineHeight: '1.3' 
                }}
              >
                {doctorInfo.tagline}
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: '1.65' }}>
                {doctorInfo.bio}
              </p>

              {/* Buttons & Cursive Tag */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginTop: '12px' }}>
                <button 
                  onClick={() => openBookingModal()} 
                  className="btn-emerald pulse-glow"
                  style={{ padding: '14px 32px', fontSize: '1rem' }}
                >
                  Book Consultation
                </button>

                <button 
                  onClick={() => openVideoModal()} 
                  className="btn-ghost"
                  style={{ padding: '14px 28px', fontSize: '1rem' }}
                >
                  <Play size={18} fill="var(--primary-emerald)" color="var(--primary-emerald)" /> View My Work
                </button>

                {/* Move Recover Perform cursive graphic tag */}
                <div 
                  style={{
                    fontFamily: "'Georgia', 'Brush Script MT', cursive",
                    fontSize: '1.5rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontStyle: 'italic',
                    lineHeight: '1.1',
                    transform: 'rotate(-6deg)',
                    userSelect: 'none'
                  }}
                >
                  Move<br />
                  <span style={{ color: 'var(--primary-emerald)' }}>Recover</span><br />
                  Perform
                </div>
              </div>
            </div>

            {/* Right Hero Doctor Image */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '35px',
                  background: 'radial-gradient(circle, rgba(0, 230, 153, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
                  filter: 'blur(25px)',
                  zIndex: 0
                }}
              />

              <div 
                className="animate-float"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  maxWidth: '420px',
                  height: '480px',
                  borderRadius: '28px',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="/hero_doctor.jpg" 
                  alt={doctorInfo.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Stats Bar Container */}
          <div 
            className="glass-card"
            style={{ 
              marginTop: '64px',
              padding: '24px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              alignItems: 'center',
              backgroundColor: 'rgba(10, 22, 19, 0.85)',
              borderColor: 'rgba(0, 230, 153, 0.25)'
            }}
          >
            {stats.map((st, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'baseline', 
                  gap: '12px',
                  borderRight: idx < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                  paddingRight: '16px'
                }}
              >
                <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: '1' }}>
                  {st.value}
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.3' }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. PARTNER LOGOS MARQUEE */}
      <section style={{ padding: '24px 0', borderTop: '1px solid rgba(0, 230, 153, 0.15)', borderBottom: '1px solid rgba(0, 230, 153, 0.15)', backgroundColor: '#030807', overflow: 'hidden' }}>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div className="animate-marquee" style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
            {[...partners, ...partners, ...partners].map((p, i) => (
              <div 
                key={i} 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.55)', 
                  fontWeight: 700, 
                  fontSize: '0.95rem',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.25s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-emerald)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}
              >
                {p.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. MY JOURNEY IN PICTURES */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>My Journey in Pictures</h2>
          </div>

          {/* Gallery Grid Matching Mockup Layout */}
          <div className="grid-5" style={{ marginBottom: '32px' }}>
            {/* Card 1 */}
            <div className="glass-card" style={{ height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={journeyPictures[0].image} alt="Triage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Card 2 */}
            <div className="glass-card" style={{ height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={journeyPictures[1].image} alt="Knee assessment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Card 3 */}
            <div className="glass-card" style={{ height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={journeyPictures[2].image} alt="RR training" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Card 4 (2 Stacked Thumbnails) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '220px' }}>
              <div className="glass-card" style={{ flex: 1, borderRadius: '12px', overflow: 'hidden' }}>
                <img src={journeyPictures[3].image} alt="Marathon recovery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="glass-card" style={{ flex: 1, borderRadius: '12px', overflow: 'hidden' }}>
                <img src={journeyPictures[4].image} alt="Ankle mobility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Card 5: Watch My Journey Video Card */}
            <div 
              onClick={() => openVideoModal()}
              className="glass-card"
              style={{
                height: '220px',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid var(--primary-emerald)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80"
                alt="Watch My Journey"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  textAlign: 'center',
                  padding: '16px',
                  background: 'rgba(5, 11, 10, 0.45)',
                  backdropFilter: 'blur(3px)'
                }}
              >
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-emerald)',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 25px rgba(0, 230, 153, 0.8)'
                  }}
                >
                  <Play size={24} fill="#000" />
                </div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', whiteSpace: 'nowrap' }}>
                  Watch My Journey
                </div>
              </div>
            </div>
          </div>

          {/* Partner Banner Below Gallery */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '32px 36px',
              borderRadius: '20px',
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              gap: '24px',
              border: '1px solid rgba(0, 230, 153, 0.35)',
              background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.08) 0%, rgba(14, 28, 25, 0.85) 100%)'
            }}
          >
            <div style={{ maxWidth: '750px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>
                More Than a Physiotherapist, A Partner in Your Recovery
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                I combine clinical expertise with real-world sports experience to help individuals return to the activities they love.
              </p>
            </div>
            <button 
              onClick={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn-outline-emerald"
            >
              Know More About Me <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 04. COMPREHENSIVE PHYSIOTHERAPY CARE */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Comprehensive Physiotherapy Care</h2>
          </div>

          <div className="grid-4">
            {services.map((srv) => (
              <div key={srv.id} className="card-service" style={{ padding: '0', borderRadius: '18px', overflow: 'hidden' }}>
                <div style={{ height: '170px', width: '100%', position: 'relative' }}>
                  <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-emerald)', marginBottom: '8px' }}>
                      <Activity size={20} />
                      <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>{srv.title}</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                      {srv.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-emerald)', flexShrink: 0 }} />
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
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--primary-emerald)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. FEATURED CASE STUDIES */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Featured Case Studies</h2>
          </div>

          <div className="grid-4">
            {caseStudies.slice(0, 4).map((c) => (
              <div key={c.id} className="glass-card" style={{ padding: '0', borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '170px', width: '100%', position: 'relative' }}>
                    <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 800 }}>{c.title}</h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                      {c.keyOutcome}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 20px 20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span 
                    className="glass-pill" 
                    style={{ 
                      fontSize: '0.75rem', 
                      padding: '4px 14px', 
                      backgroundColor: c.category === 'Sports' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                      borderColor: c.category === 'Sports' ? '#3b82f6' : 'rgba(255, 255, 255, 0.2)',
                      color: c.category === 'Sports' ? '#60a5fa' : '#fff'
                    }}
                  >
                    {c.category}
                  </span>

                  <button 
                    onClick={() => setSelectedCaseStudy(c)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-emerald)';
                      e.currentTarget.style.color = 'var(--primary-emerald)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = '#fff';
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. PAST EVENTS */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Past Events</h2>
          </div>

          <div className="grid-4">
            {pastEvents.map((ev) => (
              <div key={ev.id} className="glass-card" style={{ padding: '0', borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '160px', width: '100%', position: 'relative' }}>
                    <img src={ev.image} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{ev.title}</h4>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {ev.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. WORDS FROM ATHLETES, PATIENTS & COACHES */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Words from Athletes, Patients & Coaches</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <ChevronLeft size={18} />
              </button>
              <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid-3">
            {testimonials.map((t) => (
              <div 
                key={t.id} 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#0f172a',
                  borderRadius: '18px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.5' }}>
                    "{t.quote}"
                  </p>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a' }}>— {t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{t.affiliation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. LATEST FROM BLOG & LET'S WORK TOGETHER GRID */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Latest from Blog</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'start' }}>
            
            {/* Left 2 Blog Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {blogPosts.slice(0, 2).map((post, idx) => (
                <div key={post.id} className="glass-card" style={{ padding: '0', borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ height: '160px', width: '100%', position: 'relative' }}>
                      <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ padding: '20px' }}>
                      <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 800, lineHeight: '1.35', marginBottom: '12px' }}>
                        {post.title}
                      </h4>
                    </div>
                  </div>

                  <div style={{ padding: '0 20px 20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>{post.readTime}</span>
                    {idx === 1 && (
                      <button
                        onClick={() => {
                          setSelectedBlogPost(post);
                          setActiveTab('blog-detail');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                      >
                        <ArrowUpRight size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Let's Work Together Banner */}
            <div 
              className="glass-card"
              style={{
                padding: '36px',
                borderRadius: '24px',
                backgroundColor: 'rgba(10, 24, 21, 0.95)',
                border: '1px solid rgba(0, 230, 153, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>Let's Work Together</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  For consultations, sports events or collaborations, feel free to reach out.
                </p>

                <button 
                  onClick={() => openBookingModal()} 
                  className="btn-emerald"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}
                >
                  Book a Free Consultation <ArrowRight size={16} />
                </button>
              </div>

              {/* Bottom Sub Box */}
              <div 
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>Latest from Blog</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Event, physiotherapy tips for diverse sports req</div>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <img src={pastEvents[0].image} alt="thumb" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                  <img src={pastEvents[1].image} alt="thumb" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK INQUIRY CATEGORIES */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header">
            <span className="glass-pill"><Sparkles size={14} /> Direct Engagement</span>
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Quick Inquiry Categories</h2>
          </div>

          <div className="grid-4">
            {[
              { title: "Clinic Consultation", icon: Activity, desc: "In-person assessment, manual therapy & targeted joint rehab." },
              { title: "Sports Events", icon: Trophy, desc: "On-field injury management, acute triage & pitch-side coverage." },
              { title: "Teams & Collaboration", icon: Users, desc: "Seasonal athletic conditioning, load monitoring & team rehab." },
              { title: "Academic & Speaker Queries", icon: BookOpen, desc: "Guest lectures & workshops on biomechanics & injury prevention." }
            ].map((iq) => {
              const IconComp = iq.icon;
              return (
                <div 
                  key={iq.title} 
                  className="glass-card" 
                  style={{ 
                    padding: '28px', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    gap: '16px',
                    cursor: 'pointer'
                  }}
                  onClick={() => openBookingModal()}
                >
                  <div>
                    <div 
                      style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '12px', 
                        backgroundColor: 'rgba(0, 230, 153, 0.15)', 
                        border: '1px solid var(--primary-emerald)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'var(--primary-emerald)', 
                        marginBottom: '16px' 
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '8px' }}>{iq.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: '1.55' }}>{iq.desc}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-emerald)', fontWeight: 700, fontSize: '0.85rem' }}>
                    Inquire Now <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
