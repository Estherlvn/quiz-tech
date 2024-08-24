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
  const [width, setWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  // Images data
  const items = [
    { imgSrc: jsImg, title: 'JavaScript' },
    { imgSrc: reactImg, title: 'React' },
    { imgSrc: pythonImg, title: 'Python' },
    { imgSrc: htmlImg, title: 'HTML' },
    { imgSrc: cssImg, title: 'CSS' },
    { imgSrc: bootstrapImg, title: 'Bootstrap' },
  ];

  useEffect(() => {
    const updateWidth = () => {
      setWidth(carouselRef.current.offsetWidth);

      // Définir la largeur d'une seule carte
      if (contentRef.current && contentRef.current.firstChild) {
        setCardWidth(contentRef.current.firstChild.offsetWidth + 30); // Ajoutez la largeur de l'écart (gap)
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const carouselNode = carouselRef.current; // Capture la valeur actuelle de ref

    const checkScrollPosition = () => {
      if (carouselNode && contentRef.current) {
        const atStart = carouselNode.scrollLeft === 0;
        const atEnd =
          contentRef.current.scrollWidth <=
          width + carouselNode.scrollLeft;
        setShowPrev(!atStart);
        setShowNext(!atEnd);
      }
    };

    checkScrollPosition();
    carouselNode.addEventListener('scroll', checkScrollPosition);

    return () => {
      carouselNode.removeEventListener('scroll', checkScrollPosition);
    };
  }, [width]);

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy(cardWidth, 0); // Défile de la largeur d'une carte
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy(-cardWidth, 0); // Défile de la largeur d'une carte
    }
  };

  return (
    <div className={styles.wrapper}>
      {showPrev && (
        <button className={styles.prev} onClick={handlePrevClick}>
          &lt;
        </button>
      )}
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
      {showNext && (
        <button className={styles.next} onClick={handleNextClick}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default GrandCarousel;
