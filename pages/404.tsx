import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import styles from '../styles/Error.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.text}>The page you are looking for doesn't exist or has been moved.</p>
          <Link href="/" passHref>
            <Button variant="primary" size="lg">Go back home</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
