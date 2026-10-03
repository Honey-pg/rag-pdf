import React from 'react';
import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Sidebar({ isOpen, onClose, children }: SidebarProps) {
  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <div className={styles.content}>{children}</div>
      </aside>
    </>
  );
}
