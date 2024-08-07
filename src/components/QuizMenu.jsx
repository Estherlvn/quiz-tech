// QuizMenu.jsx
import React, { useState } from 'react';
import QuizBox from './QuizBox';
import styles from './QuizMenu.module.css';

const QuizMenu = () => {
  const [selectedTheme, setSelectedTheme] = useState('devweb');

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className={styles.quizMenu}>
      <div className={styles.themeContainer}>
        <h1 className={styles.themeTitle}>Choix du thème</h1>
        <div className={styles.themeSelector}>
          <div
            className={`${styles.themeBlock} ${selectedTheme === 'devweb' ? styles.selected : ''}`}
            onClick={() => handleThemeChange('devweb')}
          >
            Développement Web
          </div>
          <div
            className={`${styles.themeBlock} ${selectedTheme === 'uiux' ? styles.selected : ''}`}
            onClick={() => handleThemeChange('uiux')}
          >
            UI/UX
          </div>
          {/* Ajoutez d'autres thèmes ici */}
        </div>
      </div>
      <QuizBox selectedTheme={selectedTheme} />
    </div>
  );
};

export default QuizMenu;
