import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import QuestionForm from '../components/QuestionForm';
import AnswerDisplay from '../components/AnswerDisplay';
import Footer from '../components/Footer';
import { askQuestion } from '../utils/api';
import { useState } from 'react';

import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (question: string) => {
    setLoading(true);
    try {
      const res = await askQuestion(question);
      setAnswer(res);
    } catch (e) {
      setAnswer('Error: ' + (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>RAG PDF Demo</title>
        <meta name="description" content="Interactive Retrieval Augmented Generation with PDFs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>RAG PDF</h1>
        <p className={styles.description}>Ask questions about your PDFs using Gemini-powered LLM.</p>
        <QuestionForm onSubmit={handleSubmit} />
        {loading && <LoadingSpinner />}
        {answer && <AnswerDisplay answer={answer} />}
      </main>
      <Footer />
    </div>
  );
}

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
