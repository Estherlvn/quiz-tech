// src/components/ModuleBlock.jsx
import React from 'react';
import styles from './ModuleBlock.module.css';

const ModuleBlock = () => {
  // Liste des modules vidéo avec titre et lien
  const videoModules = [
    { title: 'Créer des applications web avec HTML5', videoLink: 'https://www.example.com/video4' },
    { title: 'Techniques avancées de CSS', videoLink: 'https://www.example.com/video2' },
    { title: 'Comprendre l\'UX/UI', videoLink: 'https://www.example.com/video5' },
    { title: 'Bootstrap pour les débutants', videoLink: 'https://www.example.com/video6' },
    { title: 'Introduction à JavaScript', videoLink: 'https://www.example.com/video1' },
    { title: 'Les bases de React', videoLink: 'https://www.example.com/video3' },
  ];

  return (
    <div className={styles.moduleContainer}>
      <h2 className={styles.header}>Ressources pour apprendre</h2> 
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
