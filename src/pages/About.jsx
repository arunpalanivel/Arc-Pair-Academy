import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Zap, Target, Cpu, CheckCircle } from 'lucide-react';

export default function About({ onOpenPilotModal }) {
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
            About Arc Pair Academy
          </span>
          <h1>Form follows function. Skills over certificates.</h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)' }}>
            We exist to eliminate passive theoretical lectures in engineering education. Arc Pair Academy equips students and campus faculties with actual systems engineering capability in Generative AI, RAG, and automation.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section">
        <h2>Our Core Engineering Principles</h2>
        <div className="card-grid three">
          <article className="outline-card">
            <small>Principle 01</small>
            <h3>Zero Theoretical Fluff</h3>
            <p>We do not use generic slide decks or un-runnable pseudocode. Every session begins with terminal setups and real API key credentials.</p>
          </article>
          <article className="outline-card">
            <small>Principle 02</small>
            <h3>Verifiable GitHub Outcomes</h3>
            <p>A printed paper certificate proves attendance; a clean GitHub commit history proves engineering competence. We require public deployment for every student.</p>
          </article>
          <article className="outline-card">
            <small>Principle 03</small>
            <h3>Honest Transparency</h3>
            <p>We refuse to sell fake 100% job guarantees. Instead, we teach production toolchains (Docker, FastAPI, LangChain, pgvector) that real product teams require.</p>
          </article>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="section muted" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Ready to transform your campus AI curriculum?</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 32px auto' }}>
          Partner with Arc Pair Academy for your 2026-2027 academic year. Schedule a free pilot workshop for your department today.
        </p>
        <button className="button yellow" onClick={onOpenPilotModal}>
          Request Institutional Pilot &gt;
        </button>
      </section>
    </div>
  );
}
