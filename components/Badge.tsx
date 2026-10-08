import React from 'react';
import styles from '../styles/Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md';
}

export default function Badge({ children, variant = 'primary', size = 'sm' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
      {children}
    </span>
  );
}
