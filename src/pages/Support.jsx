// Support.jsx
import React from 'react';
import Formulaire from '../components/Formulaire'; // Assurez-vous que le chemin est correct
import styles from './Support.module.css'; // Créez ce fichier pour styliser la page Support

const Support = () => (
  <div className={styles.supportPage}>
    <h1>Support</h1>
    <p>Si vous avez des questions, contactez notre équipe via le formulaire ci-dessous :</p>
    <Formulaire />
  </div>
);

export default Support;
