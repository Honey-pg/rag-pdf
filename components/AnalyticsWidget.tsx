import React from 'react';
import Card from './Card';
import styles from '../styles/AnalyticsWidget.module.css';

interface AnalyticsWidgetProps {
  totalDocuments: number;
  totalQueries: number;
  tokensProcessed: number;
}

export default function AnalyticsWidget({ totalDocuments, totalQueries, tokensProcessed }: AnalyticsWidgetProps) {
  return (
    <Card className={styles.card} title="Usage Analytics">
      <div className={styles.grid}>
        <div className={styles.stat}>
          <div className={styles.value}>{totalDocuments}</div>
          <div className={styles.label}>Documents</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>{totalQueries}</div>
          <div className={styles.label}>Queries</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>{(tokensProcessed / 1000).toFixed(1)}k</div>
          <div className={styles.label}>Tokens</div>
        </div>
      </div>
    </Card>
  );
}
