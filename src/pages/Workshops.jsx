import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Workshops({ onOpenPilotModal }) {
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
            On-Campus Experiential Learning
          </span>
          <h1>Workshops & Intensive Bootcamps.</h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)' }}>
            From 1-day foundational sprints to 5-day immersive campus bootcamps, our programs transform traditional software education into verifiable production capability.
          </p>
          <div className="action-row" style={{ marginTop: '24px' }}>
            <button className="button dark" onClick={onOpenPilotModal}>
              Request Campus Workshop
            </button>
            <Link className="button secondary" to="/for-colleges">
              View TPO Pricing & MOU
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="section">
        <h2>Workshop vs. Bootcamp Format Matrix</h2>
        <div style={{ overflowX: 'auto', marginTop: '24px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'var(--white)',
              border: '3px solid var(--line)',
              boxShadow: 'var(--card-shadow-lg)'
            }}
          >
            <thead>
              <tr style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontFamily: 'Oswald, sans-serif', fontSize: '16px' }}>Feature</th>
                <th style={{ padding: '16px', textAlign: 'left', fontFamily: 'Oswald, sans-serif', fontSize: '16px', color: 'var(--yellow)' }}>1-2 Day Pilot Workshop</th>
                <th style={{ padding: '16px', textAlign: 'left', fontFamily: 'Oswald, sans-serif', fontSize: '16px', color: 'var(--yellow)' }}>12-Day Flagship Bootcamp</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              <tr style={{ borderBottom: '1px solid var(--paper-deep)' }}>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>Target Audience</td>
                <td style={{ padding: '16px' }}>All B.Tech/BCA/MCA Students & Faculty</td>
                <td style={{ padding: '16px' }}>Selected Placement Cohorts (60-120 students)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--paper-deep)', background: 'var(--paper-light)' }}>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>Pedagogy Format</td>
                <td style={{ padding: '16px' }}>Live Hands-on Coding + API Labs</td>
                <td style={{ padding: '16px' }}>6-Stage Applied Architecture & Capstone Build</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--paper-deep)' }}>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>Key Deliverable</td>
                <td style={{ padding: '16px' }}>1 Verified Micro-API Repo per Student</td>
                <td style={{ padding: '16px' }}>Full Production RAG System Deployed Live</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--paper-deep)', background: 'var(--paper-light)' }}>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>Institutional Cost</td>
                <td style={{ padding: '16px', color: 'var(--green)', fontWeight: 'bold' }}>100% FREE for Approved Colleges</td>
                <td style={{ padding: '16px' }}>Institutional MOU Pricing / Subsidized</td>
              </tr>
              <tr>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>Outcome Audit Report</td>
                <td style={{ padding: '16px' }}>Summary Feedback Report for HOD</td>
                <td style={{ padding: '16px' }}>Detailed Student-by-Student Skills Matrix for TPO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Outcome Reports */}
      <section className="section muted">
        <h2>What TPOs & HODs Receive</h2>
        <div className="card-grid three">
          <article className="outline-card" style={{ background: 'var(--white)' }}>
            <h3>1. Before & After Assessment</h3>
            <p>An objective diagnostic benchmarking student syntax comprehension before and after the bootcamp.</p>
          </article>
          <article className="outline-card" style={{ background: 'var(--white)' }}>
            <h3>2. Institutional Code Directory</h3>
            <p>A single public directory containing links to all student GitHub repositories for campus verification.</p>
          </article>
          <article className="outline-card" style={{ background: 'var(--white)' }}>
            <h3>3. Hiring Partner Showcase</h3>
            <p>Top performing students are featured directly to Arc Pair partner tech recruiters.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
