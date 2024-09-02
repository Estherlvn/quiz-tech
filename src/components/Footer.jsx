// src/components/Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct
import livre from '../assets/livre.png';

const Footer = () => {
  const navigate = useNavigate(); // Utiliser useNavigate pour la navigation

  // Fonction pour faire défiler vers le haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fonction pour gérer la navigation et le défilement en haut
  const handleNavigation = (path) => {
    scrollToTop();
    navigate(path); // Navigue vers le chemin spécifié
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={livre} alt="Livre" className={styles.livre} />
        <div className={styles.logoContainer}>
          {/* Lien vers l'accueil avec défilement en haut */}
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.column1}>
          <h4>Plan du site</h4>
          <ul>
            <li onClick={() => handleNavigation('/')}>Accueil</li>
            <li onClick={() => handleNavigation('/quiz')}>Quiz</li>
            <li onClick={() => handleNavigation('/dashboard')}>Tableau de bord</li>
            <li onClick={() => handleNavigation('/support')}>Support</li>
          </ul>
        </div>
        <div className={styles.column2}>
          <h4>Contact</h4>
          <ul>
            <li onClick={() => handleNavigation('/support')}>Mail</li>
            <li>
              <a 
                href="https://www.linkedin.com/in/esther-ledoux-levin-a84983301/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={scrollToTop}
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Placer la ligne horizontale et les mentions légales ici */}
      <hr className={styles.horizontalLine} />
      <div className={styles.legalMentions}>
        <p>
          <Link to="/mentions-legales" onClick={scrollToTop}>Mentions légales</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
