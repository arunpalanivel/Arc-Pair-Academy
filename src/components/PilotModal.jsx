import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle, Building, Mail, Phone, User, Calendar } from 'lucide-react';

export default function PilotModal({ isOpen, onClose, onSubmitted }) {
  const [formData, setFormData] = useState({
    collegeName: '',
    cityState: '',
    contactPerson: '',
    roleType: 'TPO / Placement Head',
    email: '',
    phone: '',
    batchSize: '50 - 100 Students',
    tier: 'Free Pilot (1-2D)',
    preferredDates: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const closeRef = useRef(onClose);
  const submissionTimerRef = useRef(null);

  closeRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    modalRef.current?.querySelector('button')?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        clearTimeout(submissionTimerRef.current);
        submissionTimerRef.current = null;
        setSubmitted(false);
        closeRef.current();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(submissionTimerRef.current);
      submissionTimerRef.current = null;
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => () => clearTimeout(submissionTimerRef.current), []);

  const handleClose = () => {
    clearTimeout(submissionTimerRef.current);
    submissionTimerRef.current = null;
    setSubmitted(false);
    closeRef.current();
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitted) {
      onSubmitted(`Pilot proposal request sent for ${formData.collegeName || 'your institution'}!`);
    }
    submissionTimerRef.current = setTimeout(() => {
      submissionTimerRef.current = null;
      setSubmitted(false);
      closeRef.current();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 id="pilot-modal-title">Institutional Campus Pilot Request</h3>
          <button className="modal-close" onClick={handleClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle size={56} color="var(--green)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Request Received!</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
                Our academic curriculum secretariat will reach out to <strong>{formData.email || 'you'}</strong> within 6 business hours.
              </p>
            </div>
          ) : (
            <form className="college-form" onSubmit={handleSubmit} style={{ padding: 0, border: 'none', boxShadow: 'none' }}>
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
                  placeholder="Prof. / Dr. / Placement Head"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
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
                Estimated Batch Size
                <select
                  value={formData.batchSize}
                  onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                >
                  <option>30 - 60 Students</option>
                  <option>50 - 100 Students</option>
                  <option>100 - 200 Students</option>
                  <option>200+ Students</option>
                </select>
              </label>

              <fieldset>
                <legend>Preferred Tier</legend>
                <label>
                  <input
                    type="radio"
                    name="modalTier"
                    checked={formData.tier === 'Free Pilot (1-2D)'}
                    onChange={() => setFormData({ ...formData, tier: 'Free Pilot (1-2D)' })}
                  />{' '}
                  Free Pilot (1-2D)
                </label>
                <label>
                  <input
                    type="radio"
                    name="modalTier"
                    checked={formData.tier === 'Bootcamp (3-5D)'}
                    onChange={() => setFormData({ ...formData, tier: 'Bootcamp (3-5D)' })}
                  />{' '}
                  Bootcamp (3-5D)
                </label>
                <label>
                  <input
                    type="radio"
                    name="modalTier"
                    checked={formData.tier === 'Builder Cohort'}
                    onChange={() => setFormData({ ...formData, tier: 'Builder Cohort' })}
                  />{' '}
                  Builder Cohort
                </label>
              </fieldset>

              <label className="wide">
                Tentative Dates or Notes
                <textarea
                  placeholder="Preferred dates, department details, or specific requirements"
                  value={formData.preferredDates}
                  onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                />
              </label>

              <button className="button dark block" type="submit">
                Submit Campus Pilot Proposal &gt;
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
