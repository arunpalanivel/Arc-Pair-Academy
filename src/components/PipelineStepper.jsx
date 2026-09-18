import React, { useState } from 'react';
import { ACADEMY_DATA } from '../data/academyData';
import { Layers, ArrowRight } from 'lucide-react';

export default function PipelineStepper() {
  const [activeStep, setActiveStep] = useState(3); // Default to Step 04 Core Build

  const currentStage = ACADEMY_DATA.pipelineStages[activeStep];

  return (
    <div style={{ marginTop: '24px' }}>
      <div className="pipeline">
        {ACADEMY_DATA.pipelineStages.map((stage, idx) => (
          <article
            key={stage.id}
            className={idx === activeStep ? 'active' : ''}
            onClick={() => setActiveStep(idx)}
          >
            <b>{stage.label}</b>
            <strong>{stage.name}</strong>
            <span>Click to inspect</span>
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: '24px',
          background: 'var(--white)',
          border: '3px solid var(--line)',
          boxShadow: 'var(--card-shadow)',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span
              style={{
                background: 'var(--ink)',
                color: 'var(--yellow)',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '12px',
                padding: '2px 8px',
                fontWeight: 'bold'
              }}
            >
              STAGE {currentStage.id}
            </span>
            <h3 style={{ margin: 0, textTransform: 'uppercase', fontSize: '20px' }}>
              {currentStage.name} Phase
            </h3>
          </div>
          <p style={{ margin: 0, color: 'var(--ink)', fontSize: '15px', fontWeight: '500' }}>
            {currentStage.desc}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            className="button secondary"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            style={{ padding: '6px 14px', fontSize: '13px' }}
          >
            Previous
          </button>
          <button
            className="button dark"
            disabled={activeStep === ACADEMY_DATA.pipelineStages.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(ACADEMY_DATA.pipelineStages.length - 1, prev + 1))}
            style={{ padding: '6px 14px', fontSize: '13px' }}
          >
            Next <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
