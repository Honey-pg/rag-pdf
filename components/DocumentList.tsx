import React from 'react';
import styles from '../styles/DocumentList.module.css';
import Badge from './Badge';

export interface DocumentItem {
  id: string;
  name: string;
  size: string;
  pages: number;
  uploadedAt: string;
}

interface DocumentListProps {
  documents: DocumentItem[];
  selectedId?: string;
  onSelect: (doc: DocumentItem) => void;
  onDelete?: (id: string) => void;
}

export default function DocumentList({ documents, selectedId, onSelect, onDelete }: DocumentListProps) {
  if (documents.length === 0) {
    return <p className={styles.empty}>No documents uploaded yet.</p>;
  }

  return (
    <div className={styles.list}>
      {documents.map(doc => {
        const isSelected = doc.id === selectedId;
        return (
          <div
            key={doc.id}
            className={`${styles.item} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(doc)}
          >
            <div className={styles.icon}>📄</div>
            <div className={styles.info}>
              <h4 className={styles.name}>{doc.name}</h4>
              <div className={styles.meta}>
                <span>{doc.size}</span>
                <span>•</span>
                <Badge variant="primary" size="sm">{doc.pages} pages</Badge>
              </div>
            </div>
            {onDelete && (
              <button
                className={styles.deleteBtn}
                onClick={e => {
                  e.stopPropagation();
                  onDelete(doc.id);
                }}
                title="Delete document"
                type="button"
              >
                🗑️
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
