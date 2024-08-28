import React from 'react';
import QuizMenu from '../components/QuizMenu';
import styles from './Quiz.module.css';

const Quiz = () => (
  <div className={styles.quizPage}>
    <div className={styles.backgroundImage}></div>
    <QuizMenu />
  </div>
);

export default Quiz;
