import React, { useState } from 'react';
import { Search, Clock, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/websiteData';

export default function BlogPage({ setActiveTab, setSelectedBlogPost }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Injury Prevention', 'Sports Rehab', 'Back Pain', 'Performance'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>Learn. Apply. Move Better.</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '8px', maxWidth: '600px' }}>
                Practical insights, tips and evidence-based guides on injury prevention, rehabilitation, and performance.
              </p>
            </div>

            {/* Search Input Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 230, 153, 0.25)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters & Posts Grid */}
      <section className="section-padding">
        <div className="container">
          
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No articles found matching "{searchQuery}".
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="glass-card"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                      <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', gap: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} /> {post.readTime}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      
                      <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px' }}>
                        {post.title}
                      </h3>
                      
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        {post.excerpt}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedBlogPost(post);
                        setActiveTab('blog-detail');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="btn-outline-emerald"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Read Full Article <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
