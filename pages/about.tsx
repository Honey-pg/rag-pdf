import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - RAG PDF</title>
        <meta name="description" content="Learn about RAG PDF" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>About RAG PDF</h1>
          <p className={styles.subtitle}>
            Your intelligent assistant for parsing, analyzing, and chatting with documents.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Retrieval-Augmented Generation</h3>
              <p>We use state-of-the-art vector embeddings to accurately retrieve context from your PDFs before generating a response, ensuring highly accurate answers.</p>
            </div>
            <div className={styles.card}>
              <h3>Gemini Powered</h3>
              <p>Backed by the powerful Gemini models, our LLM integration ensures fast, reliable, and intelligent multi-turn conversations.</p>
            </div>
            <div className={styles.card}>
              <h3>Private & Secure</h3>
              <p>Your documents are processed securely and only used for your personal chat sessions. We don't train models on your data.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
