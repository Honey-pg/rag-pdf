import React, { useState, useEffect } from 'react';
import styles from '../styles/ThemeToggle.module.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggle = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <button className={styles.toggleBtn} onClick={toggle}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
