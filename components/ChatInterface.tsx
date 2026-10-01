import React, { useState } from 'react';
import styles from '../styles/ChatInterface.module.css';
import LoadingSpinner from './LoadingSpinner';

export default function ChatInterface({ onSend }: { onSend: (msg: string) => Promise<string> }) {
  const [messages, setMessages] = useState<{role: 'user'|'assistant', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setLoading(true);
    try {
      const resp = await onSend(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: resp }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: ' + (e as Error).message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? styles.userMsg : styles.assistantMsg}>
            {m.content}
          </div>
        ))}
        {loading && <div className={styles.loadingContainer}><LoadingSpinner /></div>}
      </div>
      <div className={styles.inputArea}>
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Ask a follow-up question..." 
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          className={styles.input}
        />
        <button onClick={handleSend} className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}
