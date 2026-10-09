import React, { useState, useEffect } from 'react';
import styles from '../styles/VoiceInput.module.css';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
}

export default function VoiceInput({ onTranscript }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setSupported(true);
    }
  }, []);

  const toggleListening = () => {
    if (!supported) return;

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);

    recognition.start();
  };

  if (!supported) return null;

  return (
    <button
      className={`${styles.micBtn} ${isListening ? styles.listening : ''}`}
      onClick={toggleListening}
      type="button"
      title={isListening ? 'Stop recording' : 'Voice search'}
    >
      🎤
    </button>
  );
}
