import React, { useState } from 'react';
import { ACADEMY_DATA } from '../data/academyData';
import { BookOpen, Layers, CheckCircle, ArrowRight } from 'lucide-react';

export default function Programs({ onOpenPilotModal }) {
  const [selectedModule, setSelectedModule] = useState('all');

  const filteredModules = selectedModule === 'all'
    ? ACADEMY_DATA.modules
    : ACADEMY_DATA.modules.filter(m => m.id === selectedModule);

  return (
    <div>
      {/* Header */}
      <section style={{ padding: '64px 32px', borderBottom: '3px solid var(--line)', background: 'var(--paper)' }}>
        <div style={{ maxWidth: '750px' }}>
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
            Curriculum Architecture & Syllabus
          </span>
          <h1>Production-grade AI engineering programs.</h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)' }}>
            Every module is designed to eliminate passive learning. Students write code, integrate live API endpoints, query vector stores, and build deployable software products.
          </p>
        </div>
      </section>

      {/* Module Filter Tabs */}
      <section className="section">
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <button
            className={`button ${selectedModule === 'all' ? 'yellow' : 'secondary'}`}
            onClick={() => setSelectedModule('all')}
          >
            All Curriculum Modules
          </button>
          {ACADEMY_DATA.modules.map(mod => (
            <button
              key={mod.id}
              className={`button ${selectedModule === mod.id ? 'yellow' : 'secondary'}`}
              onClick={() => setSelectedModule(mod.id)}
            >
              {mod.number}: {mod.title}
            </button>
          ))}
        </div>

        {/* Modules List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredModules.map((mod) => (
            <article
              key={mod.id}
              style={{
                background: 'var(--white)',
                border: '3px solid var(--line)',
                boxShadow: 'var(--card-shadow-lg)',
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '32px'
              }}
            >
              <div>
                <span
                  style={{
                    background: 'var(--ink)',
                    color: 'var(--paper)',
                    fontFamily: 'Oswald, sans-serif',
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  {mod.number}
                </span>
                <h3 style={{ fontSize: '26px', margin: '12px 0 8px 0' }}>{mod.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px' }}>{mod.desc}</p>
                
                <div className="tags" style={{ marginTop: '16px' }}>
                  {mod.tags.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ borderLeft: '2px solid var(--paper-deep)', paddingLeft: '32px' }}>
                <h4 style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Core Competencies & Lab Deliverables
                </h4>
                <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                  {mod.details}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={16} color="var(--green)" /> Terminal-based API exercises
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={16} color="var(--green)" /> Public GitHub repository commit
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={16} color="var(--green)" /> Evaluation metric benchmark
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={16} color="var(--green)" /> Peer code review defense
                  </div>
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                  <button className="button dark" onClick={onOpenPilotModal}>
                    Enroll Campus Cohort &gt;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Week-by-Week Syllabus Timeline */}
      <section className="section muted">
        <h2>12-Day Flagship Cohort Timeline</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '640px', marginBottom: '32px' }}>
          Detailed schedule breakdown for our 4-week on-campus AI Application Development track.
        </p>

        <div className="card-grid three">
          <article className="outline-card" style={{ background: 'var(--white)' }}>
            <small>Days 01 - 03</small>
            <h3>Week 1: Foundations & APIs</h3>
            <p>Mastering raw HTTP calls to LLM providers, token economics, parameter tuning, and strict Pydantic schemas.</p>
          </article>
          <article className="outline-card" style={{ background: 'var(--white)' }}>
            <small>Days 04 - 06</small>
            <h3>Week 2: RAG & Vector Systems</h3>
            <p>Chunking strategies, embedding vectors, similarity search, pgvector, and grounded document retrieval.</p>
          </article>
          <article className="outline-card" style={{ background: 'var(--white)' }}>
            <small>Days 07 - 09</small>
            <h3>Week 3: Agents & Tool Calling</h3>
            <p>Connecting LLMs to external APIs, function calling, state management, and webhooks.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
