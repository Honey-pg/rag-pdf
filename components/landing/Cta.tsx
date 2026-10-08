import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import styles from '../../styles/Cta.module.css';

export default function Cta() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>Ready to unlock your PDF documents?</h2>
        <p className={styles.subtitle}>
          Start asking questions and get accurate citations from your files in seconds.
        </p>
        <Link href="/" passHref>
          <Button variant="primary" size="lg">Try RAG PDF Now</Button>
        </Link>
      </div>
    </section>
  );
}
