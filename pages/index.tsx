import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RAG PDF Demo</title>
        <meta name="description" content="Interactive Retrieval Augmented Generation with PDFs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>RAG PDF</h1>
        <p className={styles.description}>Ask questions about your PDFs using Gemini-powered LLM.</p>
        {/* Placeholder for future UI components */}
      </main>
    </div>
  );
}
