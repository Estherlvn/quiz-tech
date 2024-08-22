import React from 'react';
import styles from './Board.module.css';

const Board = () => {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.userCard}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Esther</div>
          <div className={styles.userStatus}>Connecté</div>
        </div>
        <div className={styles.userIcon}>
          <img src='' alt="Icône Utilisateur" />
        </div>
      </div>

      <div className={styles.gamesContainer}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={styles.gameCard}>
            <div className={styles.gameCardTitle}>Dernières parties</div>
            <ul className={styles.gameList}>
              <li className={styles.gameListItem}>
                <span className={styles.gameStar}>★</span>
                <div>
                  <div className={styles.gameMenuLabel}>Menu Label</div>
                  <div className={styles.gameMenuDescription}>Description du menu.</div>
                </div>
              </li>
              <li className={styles.gameListItem}>
                <span className={styles.gameStar}>★</span>
                <div>
                  <div className={styles.gameMenuLabel}>Menu Label</div>
                  <div className={styles.gameMenuDescription}>Description du menu.</div>
                </div>
              </li>
              <li className={styles.gameListItem}>
                <span className={styles.gameStar}>★</span>
                <div>
                  <div className={styles.gameMenuLabel}>Menu Label</div>
                  <div className={styles.gameMenuDescription}>Description du menu.</div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
