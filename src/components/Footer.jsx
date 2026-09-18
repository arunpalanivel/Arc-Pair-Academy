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
            Neo-brutalist tech accelerator equipping engineering students and technical faculties with production-grade AI engineering, automation frameworks, and hands-on systems.
          </p>
        </div>

        <div className="footer-column">
          <h3>Programs</h3>
          <nav>
            <Link to="/programs">AI Foundations</Link>
            <Link to="/programs">AI App Development</Link>
            <Link to="/programs">AI Automation Systems</Link>
            <Link to="/workshops">Workshops & Bootcamps</Link>
          </nav>
        </div>

        <div className="footer-column">
          <h3>For Colleges</h3>
          <nav>
            <button 
              onClick={onOpenPilotModal} 
              style={{ background: 'none', border: 'none', color: '#ccc', textAlign: 'left', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Free Pilot Workshop
            </button>
            <Link to="/for-colleges">12-Day Bootcamp for TPOs</Link>
            <Link to="/for-colleges">Campus Builder Program</Link>
            <Link to="/contact">Institutional MOU Inquiry</Link>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Platform & Engine</h3>
          <nav>
            <Link to="/projects">Project Showcase</Link>
            <Link to="/projects">Certificate Verification</Link>
            <Link to="/about">Our Pedagogy</Link>
            <Link to="/contact">Contact Academic Secretariat</Link>
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
