import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import styles from './GrandCarousel.module.css';
import htmlImg from '../assets/HTML.png';
import cssImg from '../assets/CSS.png';
import jsImg from '../assets/JS.png';
import reactImg from '../assets/REACT.png';
import bootstrapImg from '../assets/Bootstrap.png';
import pythonImg from '../assets/PYTHON.png';

const GrandCarousel = () => {
  const carouselRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection
  const [cardWidth, setCardWidth] = useState(0);

  // Images data avec les slugs pour les thèmes
  const items = [
    { imgSrc: jsImg, title: 'JavaScript', slug: 'javascript' },
    { imgSrc: reactImg, title: 'React', slug: 'react' },
    { imgSrc: pythonImg, title: 'Python', slug: 'python' },
    { imgSrc: bootstrapImg, title: 'Bootstrap', slug: 'bootstrap' },
    { imgSrc: htmlImg, title: 'HTML', slug: 'html' },
    { imgSrc: cssImg, title: 'CSS', slug: 'css' },
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current && contentRef.current.firstChild) {
        setCardWidth(contentRef.current.firstChild.offsetWidth + 30); // Ajoutez la largeur de l'écart (gap)
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePlayClick = (slug) => {
    if (slug) {
      navigate(`/quiz?theme=${slug}`); // Redirige vers la page Quiz avec le thème en paramètre
    }
  };

  return (
    <div className={styles.carouselHeader}>
      <h2 className={styles.header}>Aller plus loin</h2>
      <div className={styles.wrapper}>
        <button className={styles.prev} onClick={() => handleScroll('prev')}>
          &lt;
        </button>
        <div ref={carouselRef} className={styles.carousel}>
          <div ref={contentRef} className={styles.content}>
            {items.map((item, index) => (
              <div key={index} className={styles.card}>
                <img src={item.imgSrc} alt={item.title} className={styles.image} />
                <div className={styles.title}>{item.title}</div>
                <button className={styles.playButton} onClick={() => handlePlayClick(item.slug)}>Jouer</button>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.next} onClick={() => handleScroll('next')}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GrandCarousel;
