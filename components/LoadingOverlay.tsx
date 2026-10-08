import React from 'react';
import styles from '../styles/LoadingOverlay.module.css';

interface LoadingOverlayProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

export default function LoadingOverlay({ isLoading, children }: LoadingOverlayProps) {
  return (
    <div className={styles.container}>
      {isLoading && <div className={styles.backdrop} />}
      {isLoading && <div className={styles.spinner} />}
      {children}
    </div>
  );
}
