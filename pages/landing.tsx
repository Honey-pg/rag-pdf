import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Cta from '../components/landing/Cta';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>RAG PDF - AI-Powered Document Intelligence</title>
        <meta name="description" content="Chat with your PDF documents using Retrieval-Augmented Generation" />
      </Head>

      <Header />

      <main style={{ flex: 1, paddingTop: '80px' }}>
        <Hero />
        <Features />
        <HowItWorks />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
