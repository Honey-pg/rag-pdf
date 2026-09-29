import React from "react";
import styles from "../styles/AnswerDisplay.module.css";

export default function AnswerDisplay({ answer }: { answer: string }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Answer</h2>
      <p className={styles.text}>{answer}</p>
    </div>
  );
}
