import React, { useState } from 'react';
import { ACADEMY_DATA } from '../data/academyData';
import { Search, Github, ExternalLink, Code2, Tag, Filter } from 'lucide-react';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'RAG', 'FastAPI', 'Agents', 'Docker'];

  const filteredProjects = ACADEMY_DATA.projects.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '64px 32px', borderBottom: '3px solid var(--line)', background: 'var(--paper)' }}>
        <div style={{ maxWidth: '800px' }}>
          <span
            style={{
              background: 'var(--yellow)',
              color: '#111',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '13px',
              padding: '4px 10px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '16px'
            }}
          >
            Verified Student Repository Showcase
          </span>
          <h1>What students actually build.</h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)' }}>
            Explore representative capstone software built, tested, and deployed by engineering students in Arc Pair Academy cohorts. Every project includes public GitHub source code and verifiable benchmarks.
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="section">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '36px',
            flexWrap: 'wrap'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`button ${selectedCategory === cat ? 'yellow' : 'secondary'}`}
                onClick={() => setSelectedCategory(cat)}
                style={{ padding: '6px 14px', fontSize: '13px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div style={{ position: 'relative', minWidth: '280px' }}>
            <Search
              size={18}
              color="var(--muted)"
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search by keyword, tool, or framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '38px',
                paddingRight: '14px',
                paddingTop: '10px',
                paddingBottom: '10px',
                border: '2px solid var(--line)',
                background: 'var(--paper-light)',
                outline: 'none',
                fontSize: '14px'
              }}
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'var(--white)',
              border: '3px solid var(--line)'
            }}
          >
            <h3 style={{ fontSize: '22px' }}>No Capstone Projects Match Your Filter</h3>
            <p style={{ color: 'var(--muted)' }}>Try changing your category or search query.</p>
            <button
              className="button dark"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="card-grid three">
            {filteredProjects.map((proj) => (
              <article key={proj.id} className="showcase-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <small style={{ color: 'var(--muted)', fontWeight: 'bold' }}>{proj.slug}</small>
                  <span
                    style={{
                      background: 'var(--ink)',
                      color: 'var(--yellow)',
                      fontSize: '10px',
                      fontFamily: 'Oswald, sans-serif',
                      padding: '2px 6px'
                    }}
                  >
                    {proj.category}
                  </span>
                </div>

                <h3 style={{ marginTop: 0, fontSize: '22px' }}>{proj.title}</h3>
                <p style={{ color: 'var(--ink)', fontSize: '14px', flex: 1 }}>{proj.desc}</p>

                <div className="tags" style={{ marginBottom: '16px' }}>
                  {proj.tags.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button dark block"
                    style={{ padding: '8px 12px', fontSize: '13px' }}
                  >
                    <Github size={14} /> View Code
                  </a>
                  <button
                    className="button secondary"
                    onClick={() => setActiveModalProject(proj)}
                    style={{ padding: '8px 12px', fontSize: '13px' }}
                  >
                    Inspect
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{activeModalProject.title}</h3>
              <button className="modal-close" onClick={() => setActiveModalProject(null)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <small style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'var(--muted)' }}>
                {activeModalProject.slug}
              </small>
              <p style={{ fontSize: '16px', marginBottom: '20px' }}>{activeModalProject.desc}</p>

              <h4 style={{ textTransform: 'uppercase', marginBottom: '8px' }}>Tech Stack & Tooling</h4>
              <div className="tags" style={{ marginBottom: '24px' }}>
                {activeModalProject.tags.map((t, idx) => (
                  <span key={idx} style={{ background: 'var(--yellow)', color: '#111', fontWeight: 'bold' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div
                style={{
                  background: '#111',
                  color: '#00ff88',
                  padding: '16px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  border: '2px solid var(--line)',
                  marginBottom: '20px'
                }}
              >
                <div>$ git clone {activeModalProject.repo}.git</div>
                <div>$ docker build -t {activeModalProject.slug.split('/')[1]} .</div>
                <div>$ docker run -p 8000:8000 {activeModalProject.slug.split('/')[1]}</div>
                <div style={{ color: '#aaa', marginTop: '8px' }}># Output: Server listening on http://localhost:8000</div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={activeModalProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button dark block"
                >
                  <Github size={16} /> Open GitHub Repository &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
