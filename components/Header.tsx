import React from 'react';
import styles from '../styles/Header.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>RAG PDF</div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
