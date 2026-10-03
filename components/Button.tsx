import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
