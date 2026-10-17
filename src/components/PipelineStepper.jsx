import { ACADEMY_DATA } from '../data/academyData';

export default function PipelineStepper() {
  return (
    <div style={{ marginTop: '24px' }}>
      <div className="pipeline">
        {ACADEMY_DATA.pipelineStages.map((stage, idx) => (
          <article key={stage.id}>
            <b>{stage.label}</b>
            <strong>{stage.name}</strong>
            <span>{stage.desc}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
