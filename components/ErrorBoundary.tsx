import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from '../styles/Error.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.content}>
              <h2 className={styles.subtitle}>Oops, something went wrong in this component.</h2>
              <p className={styles.text}>{this.state.error?.message}</p>
              <button 
                onClick={() => this.setState({ hasError: false })}
                style={{ padding: '0.75rem 1.5rem', background: '#00bcd4', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}
              >
                Try again
              </button>
            </div>
          </main>
        </div>
      );
    }

    return this.props.children;
  }
}
