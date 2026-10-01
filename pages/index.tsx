import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PdfUploader from '../components/PdfUploader';
import PdfViewerPanel from '../components/PdfViewerPanel';
import ChatInterface from '../components/ChatInterface';
import { useState } from 'react';

export default function Home() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleUpload = (file: File) => {
    setPdfFile(file);
    setPdfUrl(URL.createObjectURL(file));
  };

  const handleSendMsg = async (msg: string) => {
    // Placeholder response simulation
    await new Promise(r => setTimeout(r, 1000));
    return `This is a simulated response to "${msg}" using the uploaded PDF.`;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>RAG PDF Demo</title>
        <meta name="description" content="Interactive Retrieval Augmented Generation with PDFs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <PdfUploader onUpload={handleUpload} />
          <PdfViewerPanel fileUrl={pdfUrl} />
        </div>
        <div className={styles.rightColumn}>
          <h2 className={styles.chatTitle}>Ask about the document</h2>
          <ChatInterface onSend={handleSendMsg} />
        </div>
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
