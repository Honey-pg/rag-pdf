import React from 'react';
import Modal from './Modal';
import styles from '../styles/CitationViewer.module.css';

export interface Citation {
  pageNumber: number;
  snippet: string;
  relevanceScore?: number;
}

interface CitationViewerProps {
  isOpen: boolean;
  onClose: () => void;
  citations: Citation[];
  documentName?: string;
}

export default function CitationViewer({ isOpen, onClose, citations, documentName }: CitationViewerProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Citations ${documentName ? `(${documentName})` : ''}`}>
      <div className={styles.container}>
        {citations.length === 0 ? (
          <p className={styles.empty}>No citations found for this answer.</p>
        ) : (
          citations.map((c, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.badge}>Page {c.pageNumber}</div>
              <blockquote className={styles.quote}>"{c.snippet}"</blockquote>
              {c.relevanceScore && (
                <div className={styles.score}>
                  Score: {Math.round(c.relevanceScore * 100)}%
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </Modal>
  );
}
