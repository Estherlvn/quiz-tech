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
        {quizResults.length > 0 ? (
          <table className={styles.tableContainer}>
            <thead>
              <tr>
                <th className={styles.tableHeader}>Titre</th>
                <th className={styles.tableHeader}>Score</th>
                <th className={styles.tableHeader}>Date</th>
              </tr>
            </thead>
            <tbody>
              {quizResults.map((result, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableCell}>{result.title}</td>
                  <td className={styles.tableCell}>{result.score}</td>
                  <td className={styles.tableCell}>{result.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.noResults}>Aucun résultat disponible.</p>
        )}
      </div>
    </div>
  );
};

export default Board;
