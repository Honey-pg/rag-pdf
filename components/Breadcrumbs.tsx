import React from 'react';
import styles from '../styles/Breadcrumbs.module.css';
import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      {items.map((crumb, idx) => (
        <span key={idx} className={styles.item}>
          {crumb.href ? (
            <Link href={crumb.href} className={styles.link}>{crumb.label}</Link>
          ) : (
            <span className={styles.current}>{crumb.label}</span>
          )}
          {idx < items.length - 1 && <span className={styles.separator}>/</span>}
        </span>
      ))}
    </nav>
  );
}
