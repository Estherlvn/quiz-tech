import React, { useState } from 'react';
import styles from './GrandCarousel.module.css';
import htmlImg from '../assets/HTML.png';
import cssImg from '../assets/CSS.png';
import jsImg from '../assets/JS.png';
import reactImg from '../assets/REACT.png';
import bootstrapImg from '../assets/Bootstrap.png';
import pythonImg from '../assets/PYTHON.png';

const GrandCarousel = () => {
  const items = [
    { imgSrc: jsImg, title: 'JavaScript' },
    { imgSrc: reactImg, title: 'React' },
    { imgSrc: pythonImg, title: 'Python' },
    { imgSrc: htmlImg, title: 'HTML' },
    { imgSrc: cssImg, title: 'CSS' },
    { imgSrc: bootstrapImg, title: 'Bootstrap' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    // Si l'utilisateur est au début, il passe à la fin
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    // Si l'utilisateur est à la fin, il revient au début
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowLeft} onClick={handlePrevClick}>
        {"<"}
      </div>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={item.imgSrc} alt={item.title} className={styles.carouselImage} />
            <button className={styles.playButton}>Jouer</button>
          </div>
        ))}
      </div>
      <div className={styles.arrowRight} onClick={handleNextClick}>
        {">"}
      </div>
    </div>
  );
};

export default GrandCarousel;
