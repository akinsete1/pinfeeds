import styles from './ProcessSection.module.css';

export default function ProcessSection({ steps }: { steps?: { step: string; title: string; description: string }[] }) {
  const defaultSteps = [
    {
      step: '01',
      title: 'Choose a Service',
      description: 'Browse our comprehensive range of IT services and select the one that best aligns with your business goals and requirements.',
    },
    {
      step: '02',
      title: 'Request a Meeting',
      description: "Schedule a consultation with our expert team. We'll listen to your vision, understand your challenges, and assess your needs.",
    },
    {
      step: '03',
      title: 'Receive Custom Plan',
      description: "We'll craft a tailored strategy and detailed project proposal — timeline, deliverables, and pricing — designed specifically for you.",
    },
    {
      step: '04',
      title: "Let's Make it Happen",
      description: "Our team springs into action, building your solution with precision, creativity, and clear communication every step of the way.",
    },
  ];

  const activeSteps = steps && steps.length > 0 ? steps : defaultSteps;

  return (
    <section className={`section ${styles.process}`} id="process" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title" id="process-heading">
            Check Out Our Work <span>Process</span>
          </h2>
          <p className="section-desc">
            Our streamlined process ensures your project is delivered on time, on budget, and beyond expectations.
          </p>
        </div>

        <div className={styles.steps}>
          {activeSteps.map((step, i) => (
            <div key={step.step} className={styles.step}>
              {/* Connector line */}
              {i < activeSteps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <div className={styles.connectorLine} />
                  <div className={styles.connectorArrow}>›</div>
                </div>
              )}

              <div className={styles.stepInner}>
                <div className={styles.stepNumber} aria-hidden="true">
                  {step.step}
                </div>
                <div className={styles.iconCircle} aria-hidden="true">
                  <span className={styles.icon}>🎯</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
