const cssQuestions = [
    {
      text: 'Quel est le but principal du CSS ?',
      answers: [
        { text: 'Ajouter de l\'interactivité à la page', isCorrect: false },
        { text: 'Définir le style et la présentation d\'une page Web', isCorrect: true },
        { text: 'Structurer le contenu de la page', isCorrect: false },
        { text: 'Gérer les bases de données', isCorrect: false }
      ]
    },
    {
      text: 'Quelle propriété CSS est utilisée pour changer la couleur du texte ?',
      answers: [
        { text: 'color', isCorrect: true },
        { text: 'font-color', isCorrect: false },
        { text: 'text-color', isCorrect: false },
        { text: 'background-color', isCorrect: false }
      ]
    },
    {
      text: 'Quelle propriété CSS est utilisée pour changer la couleur de fond d\'un élément ?',
      answers: [
        { text: 'background-color', isCorrect: true },
        { text: 'color', isCorrect: false },
        { text: 'background', isCorrect: false },
        { text: 'bg-color', isCorrect: false }
      ]
    },
    {
      text: 'Comment centrer un bloc horizontalement en CSS ?',
      answers: [
        { text: 'margin: auto;', isCorrect: true },
        { text: 'text-align: center;', isCorrect: false },
        { text: 'float: center;', isCorrect: false },
        { text: 'padding: auto;', isCorrect: false }
      ]
    },
    {
      text: 'Quelle unité est relative à la taille de la police dans CSS ?',
      answers: [
        { text: 'em', isCorrect: true },
        { text: 'px', isCorrect: false },
        { text: 'pt', isCorrect: false },
        { text: '%', isCorrect: false }
      ]
    },
    {
      text: 'Comment appliquer un style à un élément avec un identifiant unique en CSS ?',
      answers: [
        { text: '.identifiant', isCorrect: false },
        { text: '#identifiant', isCorrect: true },
        { text: '*identifiant', isCorrect: false },
        { text: '@identifiant', isCorrect: false }
      ]
    },
    {
      text: 'Quel est l\'effet de la propriété "display: none;" en CSS ?',
      answers: [
        { text: 'Cache l\'élément mais réserve son espace', isCorrect: false },
        { text: 'Cache l\'élément sans réserver son espace', isCorrect: true },
        { text: 'Affiche l\'élément en ligne', isCorrect: false },
        { text: 'Affiche l\'élément en bloc', isCorrect: false }
      ]
    },
    {
      text: 'Quel sélecteur est utilisé pour cibler un élément enfant direct en CSS ?',
      answers: [
        { text: '>', isCorrect: true },
        { text: '+', isCorrect: false },
        { text: '~', isCorrect: false },
        { text: '*', isCorrect: false }
      ]
    },
    {
      text: 'Comment créer une bordure arrondie en CSS ?',
      answers: [
        { text: 'border-radius', isCorrect: true },
        { text: 'border-round', isCorrect: false },
        { text: 'round-border', isCorrect: false },
        { text: 'corner-radius', isCorrect: false }
      ]
    },
    {
      text: 'Quel est l\'effet de la propriété "position: absolute;" en CSS ?',
      answers: [
        { text: 'Positionne l\'élément en fonction de son parent le plus proche positionné', isCorrect: true },
        { text: 'Positionne l\'élément en fonction de la fenêtre du navigateur', isCorrect: false },
        { text: 'Positionne l\'élément de manière relative à son état d\'origine', isCorrect: false },
        { text: 'Positionne l\'élément à la fin du document', isCorrect: false }
      ]
    },
    {
      text: 'Comment appliquer un dégradé linéaire en arrière-plan avec CSS ?',
      answers: [
        { text: 'background: linear-gradient();', isCorrect: true },
        { text: 'background: gradient-linear();', isCorrect: false },
        { text: 'background: gradient();', isCorrect: false },
        { text: 'background: linear-color();', isCorrect: false }
      ]
    }
  ];
  
  export default cssQuestions;
  