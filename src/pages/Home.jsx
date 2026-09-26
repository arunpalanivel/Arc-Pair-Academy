import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Github, Code2, Users, Cpu } from 'lucide-react';
import PipelineStepper from '../components/PipelineStepper';
import { ACADEMY_DATA } from '../data/academyData';

export default function Home({ onOpenPilotModal }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-copy">
          <small style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', fontSize: '12px', color: 'var(--red)', marginBottom: '8px', display: 'block' }}>Arc Pair Academy</small>
          <h1>
            Learn AI.<br />
            Build With AI.
          </h1>
          <p>
            Practical AI education for students and faculty — from understanding modern AI to building, debugging and showcasing working applications.
          </p>
          <div className="action-row">
            <Link className="button dark" to="/programs">
              Explore Programs <ArrowRight size={16} />
            </Link>
            <button className="button red" onClick={onOpenPilotModal}>
              Partner With Us <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/assets/hero-student.png"
            alt="ARC Pair Student Ambassador"
            style={{
              maxHeight: '460px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(4px 8px 16px rgba(0, 0, 0, 0.12))'
            }}
          />
        </div>
      </section>

      {/* Proof Strip */}
      <section className="proof-strip" aria-label="Program proof points">
        {ACADEMY_DATA.proofPoints.map((item, idx) => (
          <article key={idx}>
            <strong>{item.title}</strong>
            <span>{item.desc}</span>
          </article>
        ))}
      </section>

      {/* Campus Band */}
      <section className="campus-band" id="workshops">
        <div className="campus-panel">
          <div className="campus-copy">
            <h2>Bring practical AI learning to your campus</h2>
            <p>
              Give students hands-on exposure to modern AI application development — not another theory-heavy seminar. Arc Pair Academy offers practical workshops and structured 12-day cohorts where students learn, build, debug and showcase working applications.
            </p>

            <div className="mini-grid">
              <article>
                <strong>1-2 Day Workshops</strong>
                <span>Focused practical AI experiences for colleges that want a workshop without enrolling students in the full cohort.</span>
                <Link className="button secondary" to="/workshops" style={{ marginTop: '12px', fontSize: '12px', padding: '6px 14px' }}>View Workshops <ArrowRight size={12} /></Link>
              </article>
              <article>
                <strong>12-Day Practical AI Cohort</strong>
                <span>Project-based AI application development with Python, FastAPI, Ollama, RAG and GitHub.</span>
                <button className="button secondary" onClick={onOpenPilotModal} style={{ marginTop: '12px', fontSize: '12px', padding: '6px 14px' }}>View Cohort <ArrowRight size={12} /></button>
              </article>
              <article>
                <strong>Campus Hackathon</strong>
                <span>A 12-Hour AI hackathon available as part of this larger campus cohort package.</span>
                <Link className="button secondary" to="/for-colleges" style={{ marginTop: '12px', fontSize: '12px', padding: '6px 14px' }}>Explore Campus Programs <ArrowRight size={12} /></Link>
              </article>
            </div>

            <div className="action-row">
              <button className="button dark" onClick={onOpenPilotModal}>
                Request College Partnership &amp; Syllabus PDF
              </button>
              <Link className="button red" to="/for-colleges">
                View Full MOU Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="stats-panel">
            <strong>12</strong>
            <span>Days • 4 Weeks</span>
            <strong>6</strong>
            <span>Stage Learning Framework</span>
            <strong>100%</strong>
            <span>Project-Focused</span>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section" id="programs">
        <div className="section-intro">
          <div>
            <h2>What We Teach &amp; Build</h2>
            <p style={{ color: 'var(--muted)', margin: 0 }}>
              Hands-on modules focused on real-world AI application development.
            </p>
          </div>
          <Link className="button secondary" to="/programs">
            View Full Curriculum <ArrowRight size={14} />
          </Link>
        </div>

        <div className="card-grid three">
          {ACADEMY_DATA.modules.map((mod) => (
            <article key={mod.id} className="outline-card">
              <small>{mod.number}</small>
              <h3>{mod.title}</h3>
              <p>{mod.desc}</p>
              <div className="tags">
                {mod.tags.map((tag, tIdx) => (
                  <span key={tIdx}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pipeline Stepper Section */}
      <section className="section muted">
        <h2>From Understanding to Showcase</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '640px' }}>
          Our 6-stage learning framework for practical AI education.
        </p>
        <PipelineStepper />
      </section>

      {/* Curriculum Tracks */}
      <section className="section">
        <h2>Choose Your Campus Cohort</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
          The same 12-day practical AI program, with additional institutional experiences based on cohort size.
        </p>

        <div className="card-grid three">
          <article className="program-card">
            <h3>Campus AI Cohort <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--muted)' }}>60+ Students</span></h3>
            <ul>
              <li>10-Day Student Cohort</li>
              <li>1-Day Faculty Development Programme</li>
            </ul>
            <div style={{ margin: '16px 0', borderTop: '2px solid var(--line)', paddingTop: '12px' }}>
              <strong style={{ fontSize: '22px' }}>₹2,000</strong>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}> / student</span>
            </div>
            <button className="button dark block" onClick={onOpenPilotModal}>
              View Cohort <ArrowRight size={14} />
            </button>
          </article>

          <article className="program-card" style={{ border: '3px solid var(--red)' }}>
            <span className="ribbon red-ribbon">Most Popular</span>
            <h3>Campus AI Plus <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--muted)' }}>120+ Students</span></h3>
            <ul>
              <li>12-Day Student Cohort</li>
              <li>1-Day Faculty Development Programme</li>
              <li>1-Day Student AI Workshop</li>
            </ul>
            <div style={{ margin: '16px 0', borderTop: '2px solid var(--line)', paddingTop: '12px' }}>
              <strong style={{ fontSize: '22px' }}>₹2,000</strong>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}> / student</span>
            </div>
            <button className="button yellow block" onClick={onOpenPilotModal}>
              View Cohort <ArrowRight size={14} />
            </button>
          </article>

          <article className="program-card">
            <h3>Campus AI Challenge <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--muted)' }}>200-250+ Students</span></h3>
            <ul>
              <li>1-Day Student Cohort</li>
              <li>1-Day Faculty Development Programme</li>
              <li>12-Hour AI Hackathon</li>
              <li>₹50,000 Prize Pool</li>
            </ul>
            <div style={{ margin: '16px 0', borderTop: '2px solid var(--line)', paddingTop: '12px' }}>
              <strong style={{ fontSize: '22px' }}>₹2,000</strong>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}> / student</span>
            </div>
            <button className="button dark block" onClick={onOpenPilotModal}>
              View Cohort <ArrowRight size={14} />
            </button>
          </article>
        </div>
      </section>

      {/* Verified Capstone Showcase */}
      <section className="section muted">
        <div className="section-intro">
          <div>
            <h2>Verified Capstone Showcase</h2>
            <p style={{ color: 'var(--muted)', margin: 0 }}>
              Representative capstone repositories engineered by Arc Pair Academy cohorts.
            </p>
          </div>
          <Link className="button secondary" to="/projects">
            Explore All Capstones &gt;
          </Link>
        </div>

        <div className="card-grid three">
          {ACADEMY_DATA.projects.slice(0, 3).map((proj) => (
            <article key={proj.id} className="showcase-card">
              <small>{proj.slug}</small>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tags">
                {proj.tags.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
              <a
                href={proj.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  color: 'var(--ink)'
                }}
              >
                <Github size={14} /> View Code Base &gt;
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '64px 32px',
          borderBottom: '3px solid var(--line)',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--paper)', marginBottom: '16px' }}>
          Don't just collect certificates.<br />
          <span style={{ color: 'var(--yellow)' }}>Build Skills.</span>
        </h2>
        <p style={{ color: '#a1a1aa', maxWidth: '640px', margin: '0 auto 32px auto', fontSize: '18px' }}>
          Students leave with practical coding experience, working applications, a GitHub repository and a final project showcase — not just a certificate.
        </p>
        <div className="action-row" style={{ justifyContent: 'center' }}>
          <Link className="button yellow" to="/programs">
            Explore The Cohort <ArrowRight size={16} />
          </Link>
          <button className="button red" onClick={onOpenPilotModal}>
            Partner With Us <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
