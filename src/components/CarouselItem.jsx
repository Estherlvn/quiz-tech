import React from "react";
import styles from './CarouselItem.module.css';

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className={styles.carouselCard}> {/* Utilisation de la classe CSS */}
      <img src={imgUrl} alt={imgTitle} className={styles.carouselImage}></img> {/* Exemple d'utilisation d'une autre classe CSS */}
    </div>
  );
}
