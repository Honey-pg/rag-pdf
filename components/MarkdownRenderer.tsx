import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/MarkdownRenderer.module.css';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
