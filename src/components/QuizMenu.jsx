import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import QuizBox from './QuizBox';
import styles from './QuizMenu.module.css';
import arrow from '../assets/arrow.png'; // Import de l'image de la flèche

const QuizMenu = () => {
  const [selectedTheme, setSelectedTheme] = useState('développementweb');
  const [searchParams] = useSearchParams();
  const [showScrollToTop, setShowScrollToTop] = useState(false); // État pour contrôler la visibilité de la flèche
  const quizBoxRef = useRef(null);

  useEffect(() => {
    const theme = searchParams.get('theme');
    if (theme) {
      setSelectedTheme(theme);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Affiche la flèche lorsque l'utilisateur défile de plus de 200px
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    if (quizBoxRef.current) {
      quizBoxRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        </div>
      </div>
      <div ref={quizBoxRef}>
        <QuizBox selectedTheme={selectedTheme} />
      </div>

      {showScrollToTop && ( // Affiche la flèche seulement si showScrollToTop est true
        <div className={styles.scrollToTopButton} onClick={scrollToTop}>
          <img src={arrow} alt="Remonter en haut" />
        </div>
      )}
    </div>
  );
};

export default QuizMenu;
