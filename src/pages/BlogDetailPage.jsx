import React from 'react';
import { Clock, Calendar, User, ArrowLeft, Share2, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';
import { blogPosts, doctorInfo } from '../data/websiteData';

export default function BlogDetailPage({ post, setActiveTab, setSelectedBlogPost }) {
  const activePost = post || blogPosts[0];

  const relatedPosts = blogPosts.filter((p) => p.id !== activePost.id).slice(0, 3);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      
      {/* Header & Breadcrumb */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <button
            onClick={() => setActiveTab('blog')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-emerald)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '16px' }}
          >
            <ArrowLeft size={16} /> Back to All Articles
          </button>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span className="glass-pill">{activePost.category}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px', lineHeight: '1.25' }}>
            {activePost.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={16} color="var(--primary-emerald)" />
              <span>By {doctorInfo.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} color="var(--primary-emerald)" />
              <span>{activePost.readTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} color="var(--primary-emerald)" />
              <span>{activePost.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section style={{ paddingTop: '32px' }}>
        <div className="container">
          <div style={{ width: '100%', height: '400px', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0, 230, 153, 0.3)' }}>
            <img src={activePost.image} alt={activePost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
            
            {/* Left: Article Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <div 
                className="glass-card" 
                style={{ 
                  padding: '24px', 
                  borderLeft: '4px solid var(--primary-emerald)',
                  fontSize: '1.05rem',
                  color: '#fff',
                  lineHeight: '1.7',
                  backgroundColor: 'rgba(0, 230, 153, 0.05)'
                }}
              >
                {activePost.excerpt}
              </div>

              {activePost.sections.map((sec, idx) => (
                <div key={idx} id={`section-${idx}`} className="glass-card" style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '14px', color: 'var(--primary-emerald)' }}>
                    {sec.heading}
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                    {sec.text}
                  </p>
                </div>
              ))}

              {/* Takeaways Box */}
              <div 
                className="glass-card"
                style={{
                  padding: '32px',
                  backgroundColor: 'rgba(0, 230, 153, 0.08)',
                  border: '1px solid var(--primary-emerald)'
                }}
              >
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={20} color="var(--primary-emerald)" /> Key Clinical Takeaways
                </h4>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: '#e2e8f0', fontSize: '0.92rem' }}>
                  <li>Never push through sharp joint pain during isometric contraction phases.</li>
                  <li>Restore full active extension (0 degrees) before attempting heavy quadriceps loading.</li>
                  <li>Follow an objective timeline based on test batteries, not arbitrary calendar days.</li>
                </ul>
              </div>

            </div>

            {/* Right Sidebar: Table of Contents & Author Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '100px' }}>
              
              {/* Table of Contents */}
              <div className="glass-card" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={18} color="var(--primary-emerald)" /> Table of Contents
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activePost.sections.map((sec, idx) => (
                    <li key={idx}>
                      <a
                        href={`#section-${idx}`}
                        style={{ fontSize: '0.88rem', color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-emerald)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author Box */}
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--primary-emerald)', overflow: 'hidden', margin: '0 auto 12px' }}>
                  <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=200&q=80" alt={doctorInfo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{doctorInfo.name}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--primary-emerald)', fontWeight: 600, marginBottom: '12px' }}>
                  {doctorInfo.title}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Specialist in sports injury management, movement biomechanics, and return to sport programs.
                </p>
              </div>

            </div>

          </div>

          {/* Related Articles Footer */}
          <div style={{ marginTop: '80px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '48px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '24px' }}>Related Articles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {relatedPosts.map((rel) => (
                <div key={rel.id} className="glass-card" style={{ padding: '20px' }}>
                  <span className="glass-pill" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>{rel.category}</span>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', margin: '8px 0' }}>{rel.title}</h4>
                  <button
                    onClick={() => {
                      setSelectedBlogPost(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ color: 'var(--primary-emerald)', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}
                  >
                    Read Article <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
