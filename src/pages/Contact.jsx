import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Academic & Institutional Secretariat
          </span>
          <h1>Talk to Arc Pair Academy.</h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)' }}>
            For college partnerships, student cohorts, workshops, or curriculum discussions, send a message and our academic team will respond within 6 business hours.
          </p>
        </div>
      </section>

      {/* Inquiry Grid */}
      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'start' }}>
          {/* Contact Details */}
          <div>
            <h2>Direct Communications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
              <article
                style={{
                  background: 'var(--white)',
                  border: '3px solid var(--line)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Mail size={18} color="var(--red)" />
                  <strong style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>
                    College Partnerships
                  </strong>
                </div>
                <a href="mailto:support@arcpair.academy" style={{ color: 'var(--blue)', fontWeight: 'bold' }}>
                  support@arcpair.academy
                </a>
              </article>

              <article
                style={{
                  background: 'var(--white)',
                  border: '3px solid var(--line)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Phone size={18} color="var(--red)" />
                  <strong style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>
                    Phone / WhatsApp Hotline
                  </strong>
                </div>
                <a href="tel:+918888888888" style={{ color: 'var(--ink)', fontWeight: 'bold', fontSize: '16px' }}>
                  +91 88888 88888
                </a>
              </article>

              <article
                style={{
                  background: 'var(--yellow)',
                  border: '3px solid var(--line)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Clock size={18} color="#111" />
                  <strong style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', color: '#111' }}>
                    Response SLA
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#111', fontWeight: '500' }}>
                  Within 6 business hours for TPOs, Department HODs, and Institutional Leaders.
                </p>
              </article>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
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
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Message Delivered</h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our academic coordinator will respond to{' '}
                  <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  className="button dark"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '20px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="college-form" onSubmit={handleSubmit}>
                <label>
                  Full Name *
                  <input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>

                <label>
                  Email Address *
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>

                <label>
                  Organization / Institution
                  <input
                    placeholder="College / company / student club"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </label>

                <label>
                  Primary Interest
                  <input
                    placeholder="Pilot workshop, bootcamp, partnership"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  />
                </label>

                <label className="wide">
                  Message *
                  <textarea
                    required
                    placeholder="Tell us what you want to build, organize, or inquire about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </label>

                <button className="button dark block" type="submit">
                  Send Message &gt;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section muted">
        <h2>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', marginTop: '24px' }}>
          {ACADEMY_DATA.faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <article
                key={idx}
                style={{
                  background: 'var(--white)',
                  border: '3px solid var(--line)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '20px',
                  cursor: 'pointer'
                }}
                onClick={() => setExpandedFaq(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>{faq.q}</h3>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {isOpen && (
                  <p style={{ margin: '12px 0 0 0', color: 'var(--muted)', fontSize: '15px' }}>
                    {faq.a}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
