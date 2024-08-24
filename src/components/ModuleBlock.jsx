// src/components/ModuleBlock.jsx
import React from 'react';
import styles from './ModuleBlock.module.css';

const ModuleBlock = () => {
  // Liste des modules vidéo avec titre et lien
  const videoModules = [
    { title: 'Introduction to JavaScript', videoLink: 'https://www.example.com/video1' },
    { title: 'Advanced CSS Techniques', videoLink: 'https://www.example.com/video2' },
    { title: 'React Basics', videoLink: 'https://www.example.com/video3' },
    { title: 'Building Web Apps with HTML5', videoLink: 'https://www.example.com/video4' },
    { title: 'Understanding UX/UI', videoLink: 'https://www.example.com/video5' },
    { title: 'Bootstrap for Beginners', videoLink: 'https://www.example.com/video6' },
  ];

  return (
    <div className={styles.gridContainer}>
      {videoModules.map((module, index) => (
        <div key={index} className={styles.moduleBlock}>
          <h3 className={styles.title}>{module.title}</h3>
          <a href={module.videoLink} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
            Watch Video
          </a>
        </div>
      ))}
    </div>
  );
};

export default ModuleBlock;
