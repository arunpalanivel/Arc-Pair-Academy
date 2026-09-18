import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Download, Award, ArrowRight, FileText } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export default function ForColleges({ onOpenPilotModal }) {
  const [formData, setFormData] = useState({
    collegeName: '',
    cityState: '',
    contactPerson: '',
    roleType: '',
    email: '',
    phone: '',
    department: '',
    batchSize: '',
    tier: 'Free Pilot (1-2D)',
    preferredDates: ''
  });

  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(
      `Thank you! Proposal request for "${formData.collegeName}" has been received. Our academic secretariat will contact ${formData.email} within 6 business hours.`
    );
  };

  return (
    <div>
      {/* College Hero */}
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
            Institutional Campus Partnerships 2026-2027
          </span>
          <h1>Practical AI training for the next generation of builders.</h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '32px' }}>
            Turn college lecture halls into production-ready AI engineering hubs. On-campus labs, intensive deployment bootcamps, and semester programs with GitHub-verifiable project outcomes.
          </p>
          <div className="action-row">
            <a href="#pilot-form" className="button dark">
              Request Institutional Proposal ↓
            </a>
            <button
              className="button light"
              onClick={() => alert('Curriculum PDF (2026/27 Edition) download initiated.')}
            >
              <Download size={16} /> Download Syllabus PDF
            </button>
          </div>
        </div>
      </section>

      {/* On-Campus Execution Ladder */}
      <section className="section">
        <h2>The On-Campus Execution Ladder</h2>
        <div className="card-grid three">
          {ACADEMY_DATA.engagementTiers.map((tier) => (
            <article key={tier.id} className="program-card">
              <span className={`ribbon ${tier.ribbonClass}`}>{tier.ribbon}</span>
              <small style={{ color: 'var(--muted)', fontWeight: 'bold', display: 'block', marginTop: '10px' }}>
                {tier.duration}
              </small>
              <h3 style={{ marginTop: '4px' }}>{tier.title}</h3>
              <p>{tier.desc}</p>

              <div className="commercial">
                <small>Commercial Terms</small>
                <strong>{tier.commercial}</strong>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{tier.commercialSub}</span>
              </div>

              <h4>Program Deliverables</h4>
              <ul>
                {tier.deliverables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <button
                className={`button ${tier.buttonClass} block`}
                onClick={() => {
                  onOpenPilotModal();
                }}
              >
                {tier.buttonText} &gt;
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* 6-Stage Applied Pedagogy */}
      <section className="section muted">
        <h2>Our 6-Stage Applied Pedagogy</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '640px', marginBottom: '36px' }}>
          Every Arc Pair session enforces immediate code authorship. Students do not listen to theoretical slides: they build, test, break, and deploy.
        </p>

        <div className="card-grid three">
          {ACADEMY_DATA.pedagogyStages.map((stage) => (
            <article key={stage.num} className="outline-card" style={{ background: 'var(--white)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'var(--red)'
                  }}
                >
                  {stage.num}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: 'var(--muted)'
                  }}
                >
                  Applied Stage
                </span>
              </div>
              <h3 style={{ margin: '12px 0 8px 0' }}>{stage.title}</h3>
              <p style={{ margin: 0, fontSize: '14px' }}>{stage.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Institutional Request Form */}
      <section className="section" id="pilot-form">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'start' }}>
          <div>
            <h2>Bring Production AI to Your Campus</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
              Complete this institutional request form. Our academic team coordinates directly with TPOs, Department HODs, and Directors to design a tailored engagement timeline.
            </p>

            <div
              style={{
                background: 'var(--yellow)',
                border: '3px solid var(--line)',
                boxShadow: 'var(--card-shadow)',
                padding: '24px',
                marginTop: '32px'
              }}
            >
              <strong style={{ fontFamily: 'Oswald, sans-serif', fontSize: '18px', display: 'block', marginBottom: '6px' }}>
                TPO Guarantee
              </strong>
              <p style={{ margin: 0, fontSize: '14px', color: '#111' }}>
                Eligible engineering institutions receive a zero-cost, 100% free 1-day pilot workshop. Evaluate student engagement and curriculum rigor with zero financial risk.
              </p>
            </div>

            <div style={{ marginTop: '32px', fontSize: '14px', lineHeight: '1.8' }}>
              <strong style={{ display: 'block', textTransform: 'uppercase', fontFamily: 'Oswald, sans-serif' }}>
                Institutional Secretariat
              </strong>
              <div>Email: <a href="mailto:support@arcpair.academy" style={{ fontWeight: 'bold' }}>support@arcpair.academy</a></div>
              <div>Hotline: <strong>+91 88888 88888</strong></div>
              <div>Response SLA: <strong>Within 6 Business Hours</strong></div>
            </div>
          </div>

          <div>
            {submittedMessage ? (
              <div
                style={{
                  background: 'var(--white)',
                  border: '3px solid var(--line)',
                  boxShadow: 'var(--card-shadow-lg)',
                  padding: '40px',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={56} color="var(--green)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Proposal Submitted</h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px' }}>{submittedMessage}</p>
                <button
                  className="button dark"
                  onClick={() => setSubmittedMessage('')}
                  style={{ marginTop: '20px' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="college-form" onSubmit={handleSubmit}>
                <label>
                  Institution / College Name *
                  <input
                    required
                    placeholder="e.g. M.K.T Institute of Technology"
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  />
                </label>

                <label>
                  City & State *
                  <input
                    required
                    placeholder="e.g. Trichy, Tamil Nadu"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  />
                </label>

                <label>
                  Contact Person & Title *
                  <input
                    required
                    placeholder="Prof. / Dr. / Head of Placement"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  />
                </label>

                <label>
                  Role Type *
                  <input
                    required
                    placeholder="TPO / HOD / Director"
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  />
                </label>

                <label>
                  Official Email *
                  <input
                    type="email"
                    required
                    placeholder="tpo@college.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>

                <label>
                  Phone / WhatsApp Contact *
                  <input
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </label>

                <label>
                  Target Department(s)
                  <input
                    placeholder="CSE, ECE, IT, AI&DS"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  />
                </label>

                <label>
                  Batch Size
                  <input
                    placeholder="e.g. 100 Students"
                    value={formData.batchSize}
                    onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                  />
                </label>

                <fieldset>
                  <legend>Preferred Tier</legend>
                  <label>
                    <input
                      type="radio"
                      name="tierOption"
                      checked={formData.tier === 'Free Pilot (1-2D)'}
                      onChange={() => setFormData({ ...formData, tier: 'Free Pilot (1-2D)' })}
                    />{' '}
                    Free Pilot (1-2D)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="tierOption"
                      checked={formData.tier === 'Bootcamp (3-5D)'}
                      onChange={() => setFormData({ ...formData, tier: 'Bootcamp (3-5D)' })}
                    />{' '}
                    Bootcamp (3-5D)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="tierOption"
                      checked={formData.tier === 'Builder Cohort'}
                      onChange={() => setFormData({ ...formData, tier: 'Builder Cohort' })}
                    />{' '}
                    Builder Cohort
                  </label>
                </fieldset>

                <label className="wide">
                  Tentative Preferred Semester Window
                  <textarea
                    placeholder="e.g. Preferred in August 2026 during placement preparation week"
                    value={formData.preferredDates}
                    onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                  />
                </label>

                <button className="button dark block" type="submit">
                  Submit Institutional Proposal Request &gt;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Honest Placement Statement */}
      <section className="section muted">
        <div
          style={{
            background: 'var(--white)',
            border: '3px solid var(--line)',
            boxShadow: 'var(--card-shadow)',
            padding: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>
              Zero false 100% placement guarantees. Honest engineering only.
            </h2>
            <p style={{ color: 'var(--muted)', margin: 0 }}>
              Arc Pair Academy does not operate as an unregulated placement agency or market fraudulent guarantees. We equip students with rigorously tested GitHub-verifiable repositories, hands-on production toolchains, and authentic engineering competence.
            </p>
          </div>
          <span
            style={{
              background: 'var(--ink)',
              color: 'var(--yellow)',
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 'bold',
              padding: '8px 16px',
              fontSize: '13px'
            }}
          >
            Verified Standard 2026.1
          </span>
        </div>
      </section>
    </div>
  );
}
