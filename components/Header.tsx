import React from 'react';
import styles from '../styles/Header.module.css';
import ThemeToggle from './ThemeToggle';
import SignInButton from './SignInButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>RAG PDF</div>
      <nav className={styles.nav}>
        <a href="/">App</a>
        <a href="/landing">Features</a>
        <a href="/faq">FAQ</a>
        <a href="/about">About</a>
        <ThemeToggle />
        <SignInButton />
      </nav>
    </header>
  );
}
