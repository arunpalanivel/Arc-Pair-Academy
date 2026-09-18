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
          <h1>
            Learn AI.<br />
            Create What's Next.
          </h1>
          <p>
            Practical AI education for students and faculties who refuse passive slide-decks. We build real applications, retrieval-augmented systems, and deploy verifiable code directly to GitHub.
          </p>
          <div className="action-row">
            <Link className="button dark" to="/programs">
              Explore Programs <ArrowRight size={16} />
            </Link>
            <button className="button red" onClick={onOpenPilotModal}>
              Partner With Us (TPO / Colleges)
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
              Colleges do not need more theoretical seminars. Arc Pair Academy runs zero-cost pilot workshops, then a structured 12-day bootcamp with before-and-after outcome reports for every batch.
            </p>

            <div className="mini-grid">
              <article>
                <strong>Free Pilot Workshop</strong>
                <span>Test the pedagogy with a small student group.</span>
              </article>
              <article>
                <strong>Baseline vs. Final Report</strong>
                <span>An objective before/after skills audit.</span>
              </article>
              <article>
                <strong>Capstone Repos</strong>
                <span>Real, working software delivered before graduation.</span>
              </article>
            </div>

            <div className="action-row">
              <button className="button yellow" onClick={onOpenPilotModal}>
                Request College Partnership & Syllabus PDF
              </button>
              <Link className="button secondary" to="/for-colleges">
                View Full MOU Details
              </Link>
            </div>
          </div>

          <div className="stats-panel">
            <strong>12</strong>
            <span>Days / 4 weeks</span>
            <strong>6</strong>
            <span>Stage applied pedagogy</span>
            <strong>100%</strong>
            <span>Hosted on GitHub</span>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section" id="programs">
        <div className="section-intro">
          <div>
            <h2>What We Teach & Build</h2>
            <p style={{ color: 'var(--muted)', margin: 0 }}>
              Hands-on modules focused on immediate production capability.
            </p>
          </div>
          <Link className="button secondary" to="/programs">
            View All Syllabus Specs &gt;
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
        <h2>From prompt to product: the pipeline</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '640px' }}>
          Every engineering cohort works through our 7-stage production workflow from initial constraint framing to containerized deployment.
        </p>
        <PipelineStepper />
      </section>

      {/* Curriculum Tracks */}
      <section className="section">
        <h2>Curriculum Tracks</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
          Two campus-ready formats, plus a standalone track for working professionals.
        </p>

        <div className="card-grid three">
          <article className="program-card">
            <span className="ribbon dark-ribbon">1-2 Days</span>
            <h3>AI Foundations Workshop</h3>
            <p>Fast-paced entry point for engineering cohorts to demystify generative AI hands-on.</p>
            <ul>
              <li>LLM parameters and temperature control</li>
              <li>Prompting and structured JSON output basics</li>
              <li>One verified working GitHub repo by end of day</li>
            </ul>
            <Link className="button secondary block" to="/programs">
              View Track Syllabus
            </Link>
          </article>

          <article className="program-card" style={{ border: '3px solid var(--red)' }}>
            <span className="ribbon red-ribbon">Flagship — 12 Days</span>
            <h3>AI Application Development</h3>
            <p>Our core cohort program. Build a full RAG pipeline, deploy it, and defend it live on demo day.</p>
            <ul>
              <li>FastAPI, LangChain, RAG architecture and retrieval</li>
              <li>Tool calling and structured, validated outputs</li>
              <li>Complete capstone hosted and demoed publicly</li>
            </ul>
            <button className="button yellow block" onClick={onOpenPilotModal}>
              Enroll / Apply for Cohort
            </button>
          </article>

          <article className="program-card">
            <span className="ribbon blue-ribbon">Advanced</span>
            <h3>AI Automation Systems</h3>
            <p>For senior undergraduates and developers building autonomous webhooks and event-driven agents.</p>
            <ul>
              <li>LangGraph multi-agent orchestration</li>
              <li>Vector store indexing and memory persistence</li>
              <li>Docker containerization and cloud deployment</li>
            </ul>
            <Link className="button dark block" to="/programs">
              Explore Automation Track
            </Link>
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
          <span style={{ color: 'var(--yellow)' }}>Build skills.</span>
        </h2>
        <p style={{ color: '#a1a1aa', maxWidth: '640px', margin: '0 auto 32px auto', fontSize: '18px' }}>
          Every line of code committed to GitHub. Every project reviewed. Real engineering practice over a printed badge.
        </p>
        <div className="action-row" style={{ justifyContent: 'center' }}>
          <Link className="button yellow" to="/programs">
            Join Upcoming Cohort
          </Link>
          <button className="button light" onClick={onOpenPilotModal}>
            Request College Pilot
          </button>
        </div>
      </section>
    </div>
  );
}
