import React, { useState } from 'react';
import styles from '../styles/PdfUploader.module.css';

export default function PdfUploader({ onUpload }: { onUpload: (file: File) => void }) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      className={`${styles.container} ${dragActive ? styles.active : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className={styles.icon}>📄</div>
      <p>Drag and drop your PDF here, or click to browse</p>
      <input type="file" accept=".pdf" className={styles.fileInput} onChange={(e) => e.target.files && onUpload(e.target.files[0])} />
    </div>
  );
}
