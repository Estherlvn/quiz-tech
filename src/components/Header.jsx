import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct
import boutonLog from '../assets/bouton-log.png'; // Assurez-vous que le chemin est correct

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <Link to="/">
      <img src={logo} alt="Logo QuizTech" className={styles.logo} />
      </Link>
    </div>
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">ACCUEIL</Link></li>
        <li><Link to="/quiz">QUIZ</Link></li>
        <li><Link to="/dashboard">TABLEAU DE BORD</Link></li>
        <li><Link to="/support">SUPPORT</Link></li>
        <li className={styles.boutonLog}>
          <img src={boutonLog} alt="Bouton Log" className={styles.boutonLogImage} />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
