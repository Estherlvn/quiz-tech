// src/data/react.js

const reactQuestions = [
    {
      text: 'Qu\'est-ce que React ?',
      answers: [
        { text: 'Un framework JavaScript pour construire des interfaces utilisateur', isCorrect: false },
        { text: 'Une bibliothèque JavaScript pour construire des interfaces utilisateur', isCorrect: true },
        { text: 'Un langage de programmation', isCorrect: false },
        { text: 'Un système de gestion de bases de données', isCorrect: false }
      ]
    },
    {
      text: 'Que signifie le terme JSX en React ?',
      answers: [
        { text: 'JavaScript XML', isCorrect: true },
        { text: 'JavaScript Extension', isCorrect: false },
        { text: 'Java XML', isCorrect: false },
        { text: 'JavaScript Exchange', isCorrect: false }
      ]
    },
    {
      text: 'Quelle méthode est utilisée pour créer un composant dans React ?',
      answers: [
        { text: 'React.createElement', isCorrect: true },
        { text: 'React.makeComponent', isCorrect: false },
        { text: 'React.buildComponent', isCorrect: false },
        { text: 'React.newComponent', isCorrect: false }
      ]
    },
    {
      text: 'Comment peut-on gérer l\'état dans un composant React fonctionnel ?',
      answers: [
        { text: 'En utilisant this.state', isCorrect: false },
        { text: 'En utilisant useState hook', isCorrect: true },
        { text: 'En utilisant setState', isCorrect: false },
        { text: 'En utilisant React.State', isCorrect: false }
      ]
    },
    {
      text: 'Quel hook est utilisé pour effectuer des effets de bord dans un composant fonctionnel React ?',
      answers: [
        { text: 'useEffect', isCorrect: true },
        { text: 'useState', isCorrect: false },
        { text: 'useContext', isCorrect: false },
        { text: 'useReducer', isCorrect: false }
      ]
    },
    {
      text: 'Quel est le rôle de la méthode render() dans une classe React ?',
      answers: [
        { text: 'Initialiser l\'état du composant', isCorrect: false },
        { text: 'Afficher le composant dans le DOM', isCorrect: true },
        { text: 'Gérer les effets de bord', isCorrect: false },
        { text: 'Ajouter des styles au composant', isCorrect: false }
      ]
    },
    {
      text: 'Quelle est la manière correcte de lever un événement dans React ?',
      answers: [
        { text: 'onClick={activateLasers}', isCorrect: true },
        { text: 'onClick="activateLasers"', isCorrect: false },
        { text: 'onclick=activateLasers()', isCorrect: false },
        { text: 'on-click={activateLasers}', isCorrect: false }
      ]
    },
    {
      text: 'Quelle propriété est utilisée pour passer des données d\'un composant parent à un composant enfant ?',
      answers: [
        { text: 'props', isCorrect: true },
        { text: 'state', isCorrect: false },
        { text: 'setState', isCorrect: false },
        { text: 'context', isCorrect: false }
      ]
    },
    {
      text: 'Comment peut-on optimiser les performances d\'un composant React ?',
      answers: [
        { text: 'En utilisant React.memo', isCorrect: true },
        { text: 'En utilisant setTimeout', isCorrect: false },
        { text: 'En utilisant forceUpdate', isCorrect: false },
        { text: 'En utilisant useMemo uniquement', isCorrect: false }
      ]
    },
    {
      text: 'Quel est le rôle du hook useContext dans React ?',
      answers: [
        { text: 'Accéder à un contexte partagé dans l\'arborescence des composants', isCorrect: true },
        { text: 'Créer un contexte', isCorrect: false },
        { text: 'Gérer l\'état local du composant', isCorrect: false },
        { text: 'Déclencher des effets de bord', isCorrect: false }
      ]
    },
    {
      text: 'Quel hook permet de gérer des états complexes dans un composant fonctionnel React ?',
      answers: [
        { text: 'useReducer', isCorrect: true },
        { text: 'useEffect', isCorrect: false },
        { text: 'useState', isCorrect: false },
        { text: 'useMemo', isCorrect: false }
      ]
    }
  ];
  
  export default reactQuestions;
  