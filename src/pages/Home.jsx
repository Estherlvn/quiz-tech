import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import de la fonction useNavigate pour la redirection
import ellipse from '../assets/ellipse.png'; // Import de l'image ellipse
import avatarHomepage from '../assets/avatar-homepage.png'; // Import de l'image avatarHomepage
import arbre from '../assets/arbre.png'; // Import de l'image arbre
import styles from './Home.module.css'; // Import des styles CSS spécifiques à ce composant
import PetitCarousel from '../components/PetitCarousel'; // Import du composant PetitCarousel
import AutoplayCarousel from '../components/AutoplayCarousel'; // Import du composant AutoplayCarousel
import GrandCarousel from '../components/GrandCarousel'; // Import du composant GrandCarousel
import ModuleBlock from '../components/ModuleBlock'; // Import du composant ModuleBlock
import searchIcon from '../assets/Search.png'; // Importez l'image depuis les assets

// Définition du composant Home
const Home = () => {
  const navigate = useNavigate(); // Hook pour la navigation programmatique entre les pages
  const [searchTerm, setSearchTerm] = useState(''); // État pour stocker le terme de recherche saisi par l'utilisateur

  const fullText = "Testez vos connaissances Tech et développement web"; // Texte de description affiché sur la page

  // Fonction pour gérer les changements dans le champ de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Met à jour l'état avec la valeur du champ de recherche
  };

  // Fonction pour gérer la soumission de la recherche
  const handleSearchSubmit = () => {
    const themes = ['technos', 'uxui', 'css', 'html']; // Liste des thèmes de quiz disponibles

    if (themes.includes(searchTerm.toLowerCase())) {
      // Si le thème saisi est disponible, redirige vers la page du quiz correspondant
      navigate(`/quiz?theme=${searchTerm.toLowerCase()}`);
    } else {
      // Sinon, affiche une alerte indiquant que le thème n'est pas trouvé
      alert('Thème non trouvé');
    }
  };

  // Fonction pour démarrer un quiz général
  const handleStartQuiz = () => {
    navigate('/quiz'); // Redirige vers la page de quiz sans paramètre de thème
  };

  // Rendu du composant Home
  return (
    <div className={styles.home}> {/* Conteneur principal avec des styles appliqués */}
      <div className={styles.UpContainer}> {/* Section supérieure contenant le titre et le champ de recherche */}
        <h1>QuizTech</h1> {/* Titre principal de la page */}
        <h2>{fullText}</h2> {/* Affiche le texte de description */}
        <div className={styles.searchAndButtonContainer}> {/* Conteneur pour la barre de recherche et les boutons */}
          <div className={styles.searchBar}> {/* Barre de recherche */}
            <input 
              type="text" 
              placeholder="Rechercher un Quiz" 
              value={searchTerm} 
              onChange={handleSearchChange} // Appelée à chaque changement de la valeur du champ de recherche
            />
                     <button className={styles.validationButton} onClick={handleSearchSubmit}>
            <img src={searchIcon} alt="Search Icon" /> {/* Utilisez l'image ici */}
          </button>
          </div>
          <button className={styles.startQuizButton} onClick={handleStartQuiz}>
            Lancer un Quiz {/* Bouton pour démarrer un quiz général */}
          </button>
        </div>
      </div>
      
      {/* Images décoratives */}
      <img src={arbre} alt="Arbre" className={styles.arbre} /> {/* Image d'un arbre */}
      <div className={styles.ellipseContainer}> {/* Conteneur pour les images elliptiques et avatar */}
        <img src={ellipse} alt="Ellipse" className={styles.ellipse} /> {/* Image d'une ellipse */}
        <img src={avatarHomepage} alt="Avatar Homepage" className={styles['avatar-homepage']} /> {/* Image de l'avatar de la page d'accueil */}
      </div>

      {/* Affichage des carousels et des modules */}
      <AutoplayCarousel /> {/* Carrousel qui défile automatiquement */}
      <PetitCarousel /> {/* Petit carrousel interactif */}
      <GrandCarousel /> {/* Grand carrousel interactif */}
      <ModuleBlock /> {/* Bloc de module avec des liens vers des vidéos ou des ressources */}
    </div>
  );
};

export default Home;
