import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour naviguer vers la QuizBox
import styles from './PetitCarousel.module.css';

const PetitCarousel = () => {
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection
  const carouselRef = useRef(null); // Référence pour le conteneur du carousel

  const themes = [
    { title: 'HTML', slug: 'html' },
    { title: 'CSS', slug: 'css' },
    { title: 'UX UI', slug: 'uxui' },
    { title: 'Développement Web', slug: 'developpementweb' },
    { title: '', slug: '' },  // Bloc vide 1
    { title: '', slug: '' },  // Bloc vide 2
  ];

  const handleThemeClick = (slug) => {
    if (slug) {
      navigate(`/quiz?theme=${slug}`); // Redirige vers la page Quiz avec le thème en paramètre
    }
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(`.${styles.card}`).offsetWidth;
      const scrollAmount = cardWidth * 5; // Définit le défilement nombre de cartes
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowLeft} onClick={() => handleScroll('left')}>
        {"<"}
      </div>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={carouselRef}>
          {themes.map((theme, index) => (
            <div key={index} className={styles.card} onClick={() => handleThemeClick(theme.slug)}>
              <div className={styles.quizTitle}>{theme.title || 'A venir'}</div>
              {theme.slug ? (
                <button className={styles.playButton}>Jouer</button>
              ) : (
                <div className={styles.emptyBlockContent}>Contenu à venir</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.arrowRight} onClick={() => handleScroll('right')}>
        {">"}
      </div>
    </div>
  );
};

export default PetitCarousel;
