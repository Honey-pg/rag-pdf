import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import styles from '../styles/Error.module.css';

export default function Custom500() {
  return (
    <div className={styles.container}>
      <Head>
        <title>500 - Server Error</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title} style={{ background: 'linear-gradient(135deg, #f44336, #e91e63)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>500</h1>
          <h2 className={styles.subtitle}>Internal Server Error</h2>
          <p className={styles.text}>Something went wrong on our end. We're working on it!</p>
          <Link href="/" passHref>
            <Button variant="primary" size="lg">Go back home</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
