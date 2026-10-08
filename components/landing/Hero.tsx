import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import styles from '../../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>✨ Next-Gen PDF Intelligence</div>
      <h1 className={styles.title}>
        Chat with Any PDF in <span className={styles.gradientText}>Seconds</span>
      </h1>
      <p className={styles.subtitle}>
        Upload your document, ask questions, and retrieve instant, accurate citations powered by vector RAG technology.
      </p>
      <div className={styles.actions}>
        <Link href="/" passHref>
          <Button variant="primary" size="lg">Get Started Free</Button>
        </Link>
        <Link href="/about" passHref>
          <Button variant="secondary" size="lg">Learn More</Button>
        </Link>
      </div>
    </section>
  );
}
