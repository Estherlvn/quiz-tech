// src/pages/MentionsLegales.jsx
import React from 'react';
import styles from './MentionsLegales.module.css'; // Vous pouvez ajouter un fichier CSS pour styliser cette page

const MentionsLegales = () => {
  return (
    <div className={styles.container}>
      <h1>Mentions Légales</h1>
      <section>
        <h2>1. Éditeur du Site</h2>
        <p>
          Le site QuizTech est édité par QuizMachine.
        </p>
      </section>
      <section>
        <h2>2. Directeur de la Publication</h2>
        <p>
          Le directeur de la publication du site est la société QuizMachine.
        </p>
      </section>
      <section>
        <h2>3. Hébergement</h2>
        <p>
          Le site est hébergé par OVH.
        </p>
      </section>
      <section>
        <h2>4. Propriété Intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur le site (textes, images, vidéos, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle et sont la propriété exclusive de la société QuizMachine.
        </p>
      </section>
      <section>
        <h2>5. Responsabilité</h2>
        <p>
          QuizTech ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site.
        </p>
      </section>
      {/* Ajoutez d'autres sections si nécessaire */}
    </div>
  );
};

export default MentionsLegales;
