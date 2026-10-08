import React from 'react';
import Card from '../Card';
import styles from '../../styles/Features.module.css';

export default function Features() {
  const featureList = [
    {
      icon: '⚡',
      title: 'Instant Extraction',
      description: 'Upload any document and get real-time page-by-page text parsing and embedding.'
    },
    {
      icon: '🎯',
      title: 'Precise Citations',
      description: 'Every AI response references exact page numbers and quotes from your document.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Your PDFs are processed in isolation and are never used to train global AI models.'
    },
    {
      icon: '💬',
      title: 'Multi-turn Chat',
      description: 'Engage in fluid conversations with deep contextual memory across your files.'
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Built for High Performance</h2>
      <p className={styles.subheading}>Everything you need to digest complex documents in seconds.</p>
      <div className={styles.grid}>
        {featureList.map((f, i) => (
          <Card key={i} className={styles.featureCard}>
            <div className={styles.icon}>{f.icon}</div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
