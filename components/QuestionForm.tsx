import { useState } from "react";
import styles from "../styles/QuestionForm.module.css";

export default function QuestionForm({ onSubmit }: { onSubmit: (q: string) => void }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question.trim());
      setQuestion("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Ask a question about your PDFs..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Ask
      </button>
    </form>
  );
}
