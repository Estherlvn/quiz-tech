// src/components/Footer.jsx
import React from 'react';
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
        <h4>Resources</h4>
        <ul>
          <li>Wireframing</li>
          <li>Diagramming</li>
          <li>Brainstorming</li>
          <li>Online whiteboard</li>
        </ul>
      </div>
      <div className={styles.column2}>
        <h4>Support</h4>
        <ul>
          <li>Development features</li>
          <li>Collaboration features</li>
          <li>Developers</li>
          <li>Resource library</li>
        </ul>
      </div>
    </div>

    {/* Placer la ligne horizontale et les mentions légales ici */}
    <hr className={styles.horizontalLine} />
    <div className={styles.legalMentions}>
      <p>Mentions légales | Politique de confidentialité</p>
    </div>
  </footer>
);

export default Footer;
