import React from 'react';
import { useNavigate } from 'react-router-dom'; // Pour naviguer vers la QuizBox
import styles from './PetitCarousel.module.css';

const PetitCarousel = () => {
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

  const themes = [
    { title: 'Développement Web', slug: 'developpementweb' },
    { title: 'UX UI', slug: 'uxui' },
    { title: 'CSS', slug: 'css' },
    { title: 'HTML', slug: 'html' },
  ];

  const handleThemeClick = (slug) => {
    navigate(`/quiz?theme=${slug}`); // Redirige vers la page Quiz avec le thème en paramètre
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowLeft}>{"<"}</div> {/* Flèche gauche */}
      <div className={styles.carousel}>
        {themes.map((theme, index) => (
          <div key={index} className={styles.card} onClick={() => handleThemeClick(theme.slug)}>
            <div className={styles.quizTitle}>{theme.title}</div>
            <button className={styles.playButton}>Voir Quiz</button>
          </div>
        ))}
      </div>
      <div className={styles.arrowRight}>{">"}</div>
    </div>
  );
};

export default PetitCarousel;
