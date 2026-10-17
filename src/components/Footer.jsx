import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPilotModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/arc-logo.png" alt="Arc Pair Academy" />
          <h2>Arc Pair Academy</h2>
          <strong>Learn. Practice. Build. Don't just collect certificates — build skills.</strong>
          <p>
            Practical AI education focused on helping college students understand, build, debug and showcase real AI applications.
          </p>
        </div>

        <div className="footer-column">
          <h3>Programs</h3>
          <nav>
            <Link to="/programs">AI Foundations</Link>
            <Link to="/programs">AI Application Development</Link>
            <Link to="/programs">AI Projects &amp; Automation</Link>
            <Link to="/workshops">1–2 Day Workshops</Link>
            <Link to="/programs">12-Day Practical AI Cohort</Link>
          </nav>
        </div>

        <div className="footer-column">
          <h3>For Colleges</h3>
          <nav>
            <button 
              onClick={onOpenPilotModal} 
              style={{ background: 'none', border: 'none', color: '#ccc', textAlign: 'left', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Campus Pilot
            </button>
            <Link to="/workshops">1–2 Day Workshops</Link>
            <Link to="/programs">12-Day Practical AI Cohort</Link>
            <Link to="/for-colleges">Campus AI Programs</Link>
            <Link to="/for-colleges">FDPs</Link>
            <button
              onClick={onOpenPilotModal}
              style={{ background: 'none', border: 'none', color: '#ccc', textAlign: 'left', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Partner With Us
            </button>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Academy</h3>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/#learning-framework">Learning Framework</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026-2027 Arc Pair Academy. Form Follows Function. All rights reserved.</span>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Training</a>
          <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Architecture</a>
          <button 
            onClick={scrollToTop} 
            className="button secondary" 
            style={{ padding: '4px 10px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            Top <ArrowUp size={12} />
          </button>
        </nav>
      </div>
    </footer>
  );
}
