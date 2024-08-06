import React from 'react';
import Answer from './Answer';
import styles from './Question.module.css';

const Question = ({ question, onAnswer }) => (
  <div className={styles.question}>
    <h2>{question.text}</h2>
    <div className={styles.answers}>
      {question.answers.map((answer) => (
        <Answer key={answer.text} answer={answer} onAnswer={onAnswer} />
      ))}
    </div>
  </div>
);

export default Question;
