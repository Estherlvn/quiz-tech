// src/components/ModuleBlock.jsx
import React from 'react';
import styles from './ModuleBlock.module.css';

const ModuleBlock = () => {
  // Liste des modules vidéo avec titre et lien
  const videoModules = [
    { title: 'Débuter avec HTML5', videoLink: 'https://grafikart.fr/tutoriels/introduction-1019#autoplay' },
    { title: 'Techniques avancées de CSS', videoLink: 'https://grafikart.fr/tutoriels/presentation-css-1034#autoplay' },
    { title: 'Comprendre l\'UX/UI', videoLink: 'https://grafikart.fr/blog/webdesign-inspiration-developpeur' },
    { title: 'Découvrir Bootstrap', videoLink: 'https://grafikart.fr/tutoriels/framework-css-1063' },
    { title: 'Introduction à JavaScript', videoLink: 'https://grafikart.fr/tutoriels/introduction-2054#autoplay' },
    { title: 'Les bases de React', videoLink: 'https://grafikart.fr/tutoriels/introduction-react-1312#autoplay' },
  ];

  return (
    <div className={styles.moduleContainer}>
      <h2 className={styles.header}>Ressources pédagogiques</h2> 
      <div className={styles.gridContainer}>
        {videoModules.map((module, index) => (
          <div key={index} className={styles.moduleBlock}>
            <h3 className={styles.title}>{module.title}</h3>
            <a href={module.videoLink} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
              Lancer la vidéo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleBlock;
