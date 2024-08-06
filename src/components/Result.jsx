import React from 'react';
import styles from './Result.module.css';

const Result = ({ score, total, onRestart }) => (
  <div className={styles.result}>
    <h2>Résultat</h2>
    <p>
      Vous avez répondu correctement à {score} questions sur {total}.
    </p>
    <button className={styles.restartButton} onClick={onRestart}>
      Recommencer
    </button>
  </div>
);

export default Result;
