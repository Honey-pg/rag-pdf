import React from 'react';
import styles from '../styles/SearchInput.module.css';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export default function SearchInput({ 
  value, 
  onChange, 
  placeholder = 'Search...', 
  onClear 
}: SearchInputProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>🔍</span>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button 
          className={styles.clearBtn} 
          onClick={() => {
            onChange('');
            if (onClear) onClear();
          }}
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
}
