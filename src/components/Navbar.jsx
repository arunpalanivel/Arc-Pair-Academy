import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export default function Navbar({ onOpenPilotModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('arc_theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('arc_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Topbar Announcement */}
      <div className="topbar">
        <div className="topbar-content">
          <span className="topbar-badge">MOU 2026-27</span>
          <span>{ACADEMY_DATA.announcement}</span>
        </div>
        <button 
          onClick={onOpenPilotModal}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span style={{ color: 'var(--yellow)', fontWeight: 'bold', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Request Pilot <ArrowRight size={14} />
          </span>
        </button>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setMobileOpen(false)} aria-label="Arc Pair Academy">
          <img src="/assets/arc-logo.png" alt="Arc Pair Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className={`main-nav ${mobileOpen ? 'mobile-open' : ''}`}>
          <Link 
            className={`nav-link ${isActive('/') ? 'active' : ''}`} 
            to="/" 
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link 
            className={`nav-link ${isActive('/for-colleges') ? 'active' : ''}`} 
            to="/for-colleges" 
            onClick={() => setMobileOpen(false)}
          >
            For Colleges <span className="nav-tag">Primary</span>
          </Link>
          <Link 
            className={`nav-link ${isActive('/programs') ? 'active' : ''}`} 
            to="/programs" 
            onClick={() => setMobileOpen(false)}
          >
            Programs
          </Link>
          <Link 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`} 
            to="/projects" 
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <Link 
            className={`nav-link ${isActive('/workshops') ? 'active' : ''}`} 
            to="/workshops" 
            onClick={() => setMobileOpen(false)}
          >
            Workshops
          </Link>
          <Link 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
            to="/about" 
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
            to="/contact" 
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <button className="button yellow" onClick={onOpenPilotModal}>
            Partner With Us
          </button>
        </div>
      </header>
    </>
  );
}
