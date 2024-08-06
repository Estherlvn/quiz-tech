import React from 'react';
import homeBar from '../assets/home-bar.png';
import ellipse from '../assets/ellipse.png';
import avatarHomepage from '../assets/avatar-homepage.png';
import arbre from '../assets/arbre.png';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.UpContainer}>
      <h1>QuizTech</h1>
      <h2>Testez vos connaissances Tech et développement web</h2>
    </div>
    <img src={arbre} alt="Arbre" className={styles.arbre} />
    <div className={styles.ellipseContainer}>
      <img src={ellipse} alt="Ellipse" className={styles.ellipse} />
      <img src={avatarHomepage} alt="Avatar Homepage" className={styles['avatar-homepage']} />
    </div>
    <div className={styles.searchAndButtonContainer}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Rechercher un Quiz" />
        <button className={styles.validationButton}></button>
      </div>
      <button className={styles.startQuizButton}>Lancer un Quiz</button>
    </div>
    <img src={homeBar} alt="Home Bar" className={styles['home-bar']} />
  </div>
);

export default Home;
