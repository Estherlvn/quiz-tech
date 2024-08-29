import React, { useRef, useState, useEffect } from 'react';
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
  const [cardWidth, setCardWidth] = useState(0);

  // Images data
  const items = [
    { imgSrc: jsImg, title: 'JavaScript' },
    { imgSrc: reactImg, title: 'React' },
    { imgSrc: pythonImg, title: 'Python' },
    { imgSrc: bootstrapImg, title: 'Bootstrap' },
    { imgSrc: htmlImg, title: 'HTML' },
    { imgSrc: cssImg, title: 'CSS' },
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
                <button className={styles.playButton}>Jouer</button>
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
