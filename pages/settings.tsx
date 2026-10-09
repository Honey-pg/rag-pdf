import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import styles from '../styles/Settings.module.css';

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Settings - RAG PDF</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Preferences & Settings</h1>
          <p className={styles.subtitle}>Manage your API keys, model parameters, and default options.</p>

          <div className={styles.section}>
            <h3>API Keys</h3>
            <div className={styles.field}>
              <label>Gemini API Key</label>
              <input type="password" placeholder="AIzaSy..." className={styles.input} />
            </div>
            <div className={styles.field}>
              <label>Groq API Key (Voice transcription)</label>
              <input type="password" placeholder="gsk_..." className={styles.input} />
            </div>
          </div>

          <div className={styles.section}>
            <h3>Default Model Configuration</h3>
            <div className={styles.field}>
              <label>Default Model</label>
              <select className={styles.select}>
                <option value="gemini-2.0-flash">Gemini 2.0 Flash (Fastest)</option>
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Highest Accuracy)</option>
              </select>
            </div>
          </div>

          <Button variant="primary" size="md">Save Preferences</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
