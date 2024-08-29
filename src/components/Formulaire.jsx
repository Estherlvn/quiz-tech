// Formulaire.jsx
import React, { useState } from 'react';
import styles from './Formulaire.module.css'; // Assurez-vous que le chemin est correct

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire ou envoyer un e-mail
    setConfirmation('Votre message a été envoyé avec succès !');
    setNom('');
    setEmail('');
    setSujet('');
    setMessage('');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Contactez-nous</h2>
      {confirmation && <p className={styles.confirmation}>{confirmation}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="sujet">Sujet</label>
          <input
            type="text"
            id="sujet"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {/* Conteneur pour le bouton de soumission */}
        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
