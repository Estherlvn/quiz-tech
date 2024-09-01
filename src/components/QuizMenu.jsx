import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import QuizBox from './QuizBox';
import styles from './QuizMenu.module.css';
import arrow from '../assets/arrow.png'; // Import de l'image de la flèche

const QuizMenu = () => {
  const [selectedTheme, setSelectedTheme] = useState('technos');
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
      setShowScrollToTop(window.scrollY > 200);
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
          {['technos', 'uxui', 'css', 'html', 'react', 'bootstrap', 'python', 'javascript'].map((theme, index) => (
            <div
              key={theme}
              className={`${styles.themeBlock} ${selectedTheme === theme ? styles.selected : ''}`}
              onClick={() => handleThemeChange(theme)}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1).replace('web', ' Web').replace('uxui', 'UX UI')}
            </div>
          ))}
        </div>
      </div>
      <div ref={quizBoxRef}>
        <QuizBox selectedTheme={selectedTheme} />
      </div>

      {showScrollToTop && (
        <div className={styles.scrollToTopButton} onClick={scrollToTop}>
          <img src={arrow} alt="Remonter en haut" />
        </div>
      )}
    </div>
  );
};

export default QuizMenu;
