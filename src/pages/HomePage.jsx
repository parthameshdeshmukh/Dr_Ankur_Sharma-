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
  Sparkles,
  Users,
  Clock,
  User,
  BookOpen
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
          background: 'radial-gradient(circle at 75% 25%, rgba(0, 230, 153, 0.14) 0%, rgba(5, 11, 10, 0) 65%)'
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
              <div className="glass-pill">
                <Sparkles size={14} /> SPORTS & MUSCULOSKELETAL PHYSIOTHERAPIST
              </div>
              
              <h1 
                style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
                  fontWeight: 800, 
                  lineHeight: '1.08',
                  color: '#fff',
                  letterSpacing: '-1.5px'
                }}
              >
                {doctorInfo.name}
              </h1>

              <h2 
                style={{ 
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.75rem)', 
                  fontWeight: 600, 
                  color: 'var(--primary-emerald)', 
                  lineHeight: '1.3' 
                }}
              >
                {doctorInfo.tagline}
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: '1.65' }}>
                Evidence-based physiotherapy with a focus on sports, rehabilitation, peak performance, and long-term injury prevention.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px' }}>
                <button 
                  onClick={() => openBookingModal()} 
                  className="btn-emerald pulse-glow"
                >
                  <Calendar size={18} /> Book Consultation
                </button>
                <button 
                  onClick={() => openVideoModal()} 
                  className="btn-ghost"
                >
                  <Play size={18} color="var(--primary-emerald)" /> View My Work
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
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
                className="glass-card animate-float"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  maxWidth: '440px',
                  height: '480px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 230, 153, 0.35)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80" 
                  alt={doctorInfo.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Floating Neon Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(5, 11, 10, 0.9)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--primary-emerald)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--primary-emerald)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 0 20px rgba(0, 230, 153, 0.3)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Activity size={14} /> Move • Recover • Perform
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar Grid */}
          <div 
            className="grid-4"
            style={{ 
              marginTop: '64px'
            }}
          >
            {stats.map((st, idx) => (
              <div 
                key={idx} 
                className="glass-card"
                style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  gap: '6px'
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-emerald)', fontFamily: 'var(--font-heading)', lineHeight: '1' }}>
                  {st.value}
                </div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
                  {st.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {st.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS INFINITE MARQUEE */}
      <section style={{ padding: '24px 0', borderTop: '1px solid rgba(0, 230, 153, 0.15)', borderBottom: '1px solid rgba(0, 230, 153, 0.15)', backgroundColor: '#030807', overflow: 'hidden' }}>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div className="animate-marquee" style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
            {[...partners, ...partners, ...partners].map((p, i) => (
              <div 
                key={i} 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.5)', 
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
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)')}
              >
                {p.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY JOURNEY IN PICTURES */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="glass-pill"><Trophy size={14} /> Gallery & On-Field Action</span>
            <h2 className="section-title">My Journey in Pictures</h2>
          </div>

          {/* 4-Column Balanced Grid */}
          <div className="grid-4" style={{ marginBottom: '40px' }}>
            {journeyPictures.map((pic) => (
              <div 
                key={pic.id} 
                className="glass-card"
                style={{ height: '220px', overflow: 'hidden', position: 'relative', borderRadius: '18px' }}
              >
                <img 
                  src={pic.image} 
                  alt={pic.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5, 11, 10, 0.95), transparent 60%)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <span style={{ fontSize: '0.72rem', color: 'var(--primary-emerald)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {pic.tag}
                  </span>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.92rem' }}>
                    {pic.title}
                  </span>
                </div>
              </div>
            ))}

          </div>

          {/* Sub Banner */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '36px',
              borderRadius: '24px',
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              alignItems: 'center', 
              gap: '32px',
              border: '1px solid rgba(0, 230, 153, 0.35)',
              background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.08) 0%, rgba(14, 28, 25, 0.8) 100%)'
            }}
          >
            {/* Left Info Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px' }}>
              <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '4px 12px' }}>
                <Sparkles size={12} /> Clinical Philosophy
              </span>
              <h3 style={{ fontSize: '1.65rem', color: '#fff', lineHeight: '1.25' }}>
                More Than a Physiotherapist, A Partner in Your Recovery
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                I combine clinical expertise with real-world sports experience to help individuals return to the activities they love safely and efficiently.
              </p>
              <button 
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="btn-outline-emerald"
                style={{ marginTop: '6px' }}
              >
                Know More About Me <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Action Photo Column */}
            <div style={{ height: '220px', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(0, 230, 153, 0.25)', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Ankur Sharma treatment" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 11, 10, 0.85), transparent 70%)',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'flex-end'
                }}
              >
                <span style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 600 }}>
                  Personalized Knee & Joint Bio-mechanics Rehabilitation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE PHYSIOTHERAPY CARE (STRICT EQUAL SERVICE CARDS) */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header">
            <span className="glass-pill"><Activity size={14} /> Specialized Care</span>
            <h2 className="section-title">Comprehensive Physiotherapy Care</h2>
            <p className="section-subtitle">
              Evidence-based treatments customized for athletic performance, spinal rehabilitation, and chronic pain management.
            </p>
          </div>

          <div className="grid-4">
            {services.map((srv) => (
              <div key={srv.id} className="card-service">
                <div>
                  <div 
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(0, 230, 153, 0.15)',
                      border: '1px solid var(--primary-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-emerald)',
                      marginBottom: '20px'
                    }}
                  >
                    <Activity size={26} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '10px', height: '2.4em', display: 'flex', alignItems: 'center' }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.55', minHeight: '3.1em' }}>
                    {srv.shortDesc}
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    {srv.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.84rem', color: '#e2e8f0' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(0, 230, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Check size={12} color="var(--primary-emerald)" />
                        </div>
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
                  className="btn-outline-emerald"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL CASE STUDIES (DISTINCT CLINICAL DIAGNOSTIC CARDS) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px' }}>
            <div>
              <span className="glass-pill"><Award size={14} /> Proven Results</span>
              <h2 className="section-title">Featured Case Studies</h2>
            </div>
            <button 
              onClick={() => {
                setActiveTab('case-studies');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-ghost"
            >
              View All Case Studies <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-4">
            {caseStudies.slice(0, 4).map((c) => (
              <div key={c.id} className="card-case-study">
                <div>
                  <div style={{ height: '180px', width: '100%', position: 'relative' }}>
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

                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--primary-emerald)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={14} /> {c.patientType}
                    </div>

                    <h4 style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.3' }}>{c.title}</h4>
                    
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {c.summary}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 20px 20px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div 
                    style={{ 
                      padding: '10px 14px', 
                      borderRadius: '10px', 
                      backgroundColor: 'rgba(0, 230, 153, 0.1)',
                      border: '1px solid var(--primary-emerald)',
                      fontSize: '0.8rem',
                      color: 'var(--primary-emerald)',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Award size={16} flexShrink={0} /> {c.keyOutcome}
                  </div>

                  <button 
                    onClick={() => setSelectedCaseStudy(c)}
                    className="btn-emerald"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.85rem' }}
                  >
                    Clinical Protocol <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED FULL VIDEO SPOTLIGHT SECTION DIRECTLY ON HOME PAGE */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div 
            className="glass-card"
            style={{
              padding: '64px 36px',
              textAlign: 'center',
              borderRadius: '28px',
              backgroundImage: 'linear-gradient(rgba(5, 11, 10, 0.88), rgba(5, 11, 10, 0.88)), url(https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid var(--primary-emerald)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 15px 50px rgba(0, 230, 153, 0.2)'
            }}
          >
            <span className="glass-pill"><Play size={14} fill="var(--primary-emerald)" /> Video Spotlight</span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#fff', maxWidth: '800px', lineHeight: '1.2' }}>
              Focused on Recovery. Committed to Performance.
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', maxWidth: '650px', lineHeight: '1.65' }}>
              Watch how Dr. Ankur Sharma evaluates athletic movement biomechanics, pitch-side triage, and customized return-to-play training.
            </p>

            <button onClick={() => openVideoModal()} className="btn-emerald pulse-glow" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              <Play size={20} fill="#000" /> Watch How I Work
            </button>
          </div>
        </div>
      </section>

      {/* LATEST FROM BLOG (DISTINCT EDITORIAL MAGAZINE CARDS) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px' }}>
            <div>
              <span className="glass-pill"><BookOpen size={14} /> Clinical Guides</span>
              <h2 className="section-title">Latest Articles & Rehabilitation Insights</h2>
            </div>
            <button 
              onClick={() => {
                setActiveTab('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-ghost"
            >
              View All Articles <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-3">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="card-blog-post">
                <div>
                  <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                      <span className="glass-pill" style={{ fontSize: '0.7rem', padding: '4px 10px', backgroundColor: 'rgba(5, 11, 10, 0.85)' }}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14} color="var(--primary-emerald)" /> {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', color: '#fff', lineHeight: '1.35' }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 24px 24px 24px' }}>
                  <button
                    onClick={() => {
                      setSelectedBlogPost(post);
                      setActiveTab('blog-detail');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-ghost"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Read Article <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="section-padding" style={{ backgroundColor: '#030807' }}>
        <div className="container">
          <div className="section-header">
            <span className="glass-pill"><Trophy size={14} /> On-Field Sports Coverage</span>
            <h2 className="section-title">Past Events & Tournaments</h2>
          </div>

          <div className="grid-4">
            {pastEvents.map((ev) => (
              <div key={ev.id} className="glass-card" style={{ padding: '20px', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '140px', borderRadius: '12px', overflow: 'hidden', marginBottom: '14px' }}>
                    <img src={ev.image} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '4px' }}>{ev.title}</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary-emerald)', fontWeight: 700, marginBottom: '8px' }}>
                    {ev.role} • {ev.location}
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header center">
            <span className="glass-pill"><Users size={14} /> Testimonials</span>
            <h2 className="section-title">Words from Athletes, Patients & Coaches</h2>
          </div>

          <div className="grid-3">
            {testimonials.map((t) => (
              <div 
                key={t.id} 
                className="glass-card" 
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}
              >
                <p style={{ fontSize: '0.92rem', color: '#e2e8f0', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "{t.quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--primary-emerald)', flexShrink: 0 }} 
                  />
                  <div>
                    <h5 style={{ color: '#fff', fontSize: '0.95rem' }}>{t.name}</h5>
                    <div style={{ fontSize: '0.8rem', color: 'var(--primary-emerald)', fontWeight: 700 }}>{t.role}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.affiliation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK TOGETHER CTA BANNER */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div 
            className="glass-card"
            style={{
              padding: '48px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.18) 0%, rgba(5, 11, 10, 0.95) 100%)',
              border: '1px solid var(--primary-emerald)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '8px' }}>Let's Work Together</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px' }}>
                For clinic consultations, sports events coverage, athletic team partnerships, or academic lectures, reach out today.
              </p>
            </div>
            <button 
              onClick={() => openBookingModal()} 
              className="btn-emerald pulse-glow"
              style={{ padding: '14px 32px', fontSize: '1rem' }}
            >
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
