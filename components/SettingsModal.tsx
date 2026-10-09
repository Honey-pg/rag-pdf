import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import styles from '../styles/SettingsModal.module.css';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (settings: { temperature: number; maxTokens: number; systemPrompt: string }) => void;
}

export default function SettingsModal({ isOpen, onClose, onSave }: SettingsModalProps) {
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1024);
  const [systemPrompt, setSystemPrompt] = useState('You are a helpful AI assistant that answers questions based on retrieved PDF context.');

  const handleSave = () => {
    if (onSave) onSave({ temperature, maxTokens, systemPrompt });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="RAG Settings">
      <div className={styles.form}>
        <div className={styles.group}>
          <label className={styles.label}>Temperature ({temperature})</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={temperature}
            onChange={e => setTemperature(parseFloat(e.target.value))}
            className={styles.range}
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label}>Max Output Tokens</label>
          <input
            type="number"
            value={maxTokens}
            onChange={e => setMaxTokens(parseInt(e.target.value) || 256)}
            className={styles.input}
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label}>System Prompt</label>
          <textarea
            value={systemPrompt}
            onChange={e => setSystemPrompt(e.target.value)}
            rows={4}
            className={styles.textarea}
          />
        </div>

        <div className={styles.actions}>
          <Button variant="outline" size="sm" onClick={onClose}>Cancel</Button>
          <Button variant="primary" size="sm" onClick={handleSave}>Save Settings</Button>
        </div>
      </div>
    </Modal>
  );
}
