import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export default function Navbar({ onOpenPilotModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('arc_theme') || 'light');
  const location = useLocation();
  const menuButtonRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('arc_theme', theme);
  }, [theme]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

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
            Partner With Us <ArrowRight size={14} />
          </span>
        </button>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setMobileOpen(false)} aria-label="Arc Pair Academy">
          <img src="/assets/arc-logo.png" alt="Arc Pair Logo" />
        </Link>

        {/* Navigation Links */}
        <nav id="primary-navigation" className={`main-nav ${mobileOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
          <Link 
            className={`nav-link ${isActive('/') ? 'active' : ''}`} 
            to="/" 
            aria-current={isActive('/') ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link 
            className={`nav-link ${isActive('/for-colleges') ? 'active' : ''}`} 
            to="/for-colleges" 
            aria-current={isActive('/for-colleges') ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            For Colleges <span className="nav-tag">Primary</span>
          </Link>
          <Link 
            className={`nav-link ${isActive('/programs') ? 'active' : ''}`} 
            to="/programs" 
            aria-current={isActive('/programs') ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            Programs
          </Link>
          <Link 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`} 
            to="/projects" 
            aria-current={isActive('/projects') ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <Link 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
            to="/about" 
            aria-current={isActive('/about') ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            className={`nav-link ${isActive('/workshops') ? 'active' : ''}`}
            to="/workshops"
            aria-current={isActive('/workshops') ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            Workshops
          </Link>
          <Link
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            to="/contact"
            aria-current={isActive('/contact') ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <button className="nav-partner-btn" onClick={onOpenPilotModal}>
            Partner With Us <ArrowRight size={14} />
          </button>
          <button
            className="menu-toggle"
            ref={menuButtonRef}
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
