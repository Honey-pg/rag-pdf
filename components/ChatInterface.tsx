import React, { useState } from 'react';
import styles from '../styles/ChatInterface.module.css';
import LoadingSpinner from './LoadingSpinner';
import MarkdownRenderer from './MarkdownRenderer';
import VoiceInput from './VoiceInput';
import { exportChatToMarkdown } from '../utils/exportChat';
import { useUser } from '@clerk/nextjs';
import { insertChatMessage } from '../services/supabase';

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
      // Persist user message
      if (user?.id) await insertChatMessage(user.id, 'user', userMsg);
      const resp = await onSend(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: resp }]);
      // Persist assistant response
      if (user?.id) await insertChatMessage(user.id, 'assistant', resp);
    } catch (e) {
      const errMsg = 'Error: ' + (e as Error).message;
      setMessages(prev => [...prev, { role: 'assistant', content: errMsg }]);
      if (user?.id) await insertChatMessage(user.id, 'assistant', errMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    const formatted = messages.map(m => ({ sender: m.role, text: m.content }));
    exportChatToMarkdown(formatted, 'pdf-chat-export');
  };

  return (
    <div className={styles.chatContainer}>
      {messages.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 1rem 0' }}>
          <button 
            onClick={handleExport}
            style={{ background: 'none', border: 'none', color: '#00bcd4', cursor: 'pointer', fontSize: '0.8rem' }}
          >
            📥 Export Chat
          </button>
        </div>
      )}
      <div className={styles.messages}>
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? styles.userMsg : styles.assistantMsg}>
            {m.role === 'user' ? m.content : <MarkdownRenderer content={m.content} />}
          </div>
        ))}
        {loading && <div className={styles.loadingContainer}><LoadingSpinner /></div>}
      </div>
      <div className={styles.inputArea}>
        <VoiceInput onTranscript={text => setInput(prev => (prev ? `${prev} ${text}` : text))} />
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Ask a question about your PDF..." 
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          className={styles.input}
        />
        <button onClick={handleSend} className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}
