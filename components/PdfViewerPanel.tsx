import React from 'react';
import styles from '../styles/PdfViewerPanel.module.css';

export default function PdfViewerPanel({ fileUrl }: { fileUrl: string | null }) {
  if (!fileUrl) {
    return (
      <div className={styles.emptyContainer}>
        <p>No PDF uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <iframe src={fileUrl} className={styles.iframe} title="PDF Viewer" />
    </div>
  );
}
