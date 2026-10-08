import React from 'react';
import styles from '../../styles/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload PDF',
      description: 'Drag & drop any PDF document into the dashboard uploader.'
    },
    {
      number: '02',
      title: 'Vector Indexing',
      description: 'Text is parsed, chunked, and stored into high-dimensional vector embeddings.'
    },
    {
      number: '03',
      title: 'Ask & Discover',
      description: 'Ask questions in natural language and receive grounded, cited answers.'
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>How It Works</h2>
      <div className={styles.steps}>
        {steps.map(step => (
          <div key={step.number} className={styles.stepCard}>
            <div className={styles.stepNum}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
