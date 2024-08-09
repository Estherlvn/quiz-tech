import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import QuizBox from './QuizBox';
import styles from './QuizMenu.module.css';

const QuizMenu = () => {
  const [selectedTheme, setSelectedTheme] = useState('développementweb');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const theme = searchParams.get('theme');
    if (theme) {
      setSelectedTheme(theme);
    }
  }, [searchParams]);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className={styles.quizMenu}>
      <div className={styles.themeContainer}>
        <h1 className={styles.themeTitle}>Choix du thème</h1>
        <div className={styles.themeSelector}>
          <div
            className={`${styles.themeBlock} ${selectedTheme === 'développementweb' ? styles.selected : ''}`}
            onClick={() => handleThemeChange('développementweb')}
          >
            Développement Web
          </div>
          <div
            className={`${styles.themeBlock} ${selectedTheme === 'uxui' ? styles.selected : ''}`}
            onClick={() => handleThemeChange('uxui')}
          >
            UX UI
          </div>
          <div
            className={`${styles.themeBlock} ${selectedTheme === 'css' ? styles.selected : ''}`}
            onClick={() => handleThemeChange('css')}
          >
            CSS
          </div>
          <div
            className={`${styles.themeBlock} ${selectedTheme === 'html' ? styles.selected : ''}`}
            onClick={() => handleThemeChange('html')}
          >
            HTML
          </div>
          {/* Ajoutez d'autres thèmes ici */}
        </div>
      </div>
      <QuizBox selectedTheme={selectedTheme} />
    </div>
  );
};

export default QuizMenu;
