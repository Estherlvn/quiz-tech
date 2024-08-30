// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct
import livre from '../assets/livre.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <img src={livre} alt="Livre" className={styles.livre} />
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.column1}>
        <h4>Ressources</h4>
        <ul>
          <li>Wireframing</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className={styles.column2}>
        <h4>Contact</h4>
        <ul>
          <li>Support</li>
          <li>Team</li>
        </ul>
      </div>
    </div>

    {/* Placer la ligne horizontale et les mentions légales ici */}
    <hr className={styles.horizontalLine} />
    <div className={styles.legalMentions}>
        <p>
        <Link to="/mentions-legales">Mentions légales</Link>
        </p>
      </div>
  </footer>
);

export default Footer;
