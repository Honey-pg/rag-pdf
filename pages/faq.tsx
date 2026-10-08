import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import styles from '../styles/Faq.module.css';

export default function FAQ() {
  const faqItems = [
    {
      id: '1',
      title: 'What is RAG PDF?',
      content: 'RAG PDF is a Retrieval-Augmented Generation system that allows you to upload PDF documents and ask questions about their content using generative AI.'
    },
    {
      id: '2',
      title: 'What PDF file sizes are supported?',
      content: 'Currently, documents up to 50MB with several hundred pages are fully supported for fast vector indexing and retrieval.'
    },
    {
      id: '3',
      title: 'Is my document data kept private?',
      content: 'Yes! Your uploaded files are stored securely and used solely for generating responses during your session. We do not use your private documents to train AI models.'
    },
    {
      id: '4',
      title: 'Which AI models power the document chat?',
      content: 'The platform integrates with Google Gemini models and PyMuPDF text extractors for high-precision context retrieval and accurate answering.'
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ - RAG PDF</title>
        <meta name="description" content="Frequently asked questions about RAG PDF" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>Everything you need to know about parsing and querying PDFs with RAG AI.</p>
          <Accordion items={faqItems} allowMultiple={true} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
