import React from 'react';
import styles from './Answer.module.css';

const Answer = ({ answer, onAnswer }) => (
  <button className={styles.answer} onClick={() => onAnswer(answer.isCorrect)}>
    {answer.text}
  </button>
);

export default Answer;
