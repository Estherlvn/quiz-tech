// src/components/Board.jsx
import React, { useState, useEffect } from 'react';
import styles from './Board.module.css';

const Board = () => {
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    // Récupérer les résultats de quiz depuis LocalStorage
    const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    setQuizResults(storedResults);
  }, []);

  return (
    <div className={styles.boardContainer}>
      <div className={styles.scoreSection}>
        <h3>Mes Résultats de Quiz</h3>
        <ul>
          {quizResults.map((result, index) => (
            <li key={index}>
              <strong>{result.title}</strong> - Score: {result.score} - Date: {result.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
