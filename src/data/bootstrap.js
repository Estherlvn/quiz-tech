// bootstrap.js

const bootstrapQuestions = [
    {
      text: "Quelle est la classe Bootstrap pour créer un conteneur fluide qui prend toute la largeur de l'écran?",
      answers: [
        { text: "container", isCorrect: false },
        { text: "container-fluid", isCorrect: true },
        { text: "container-full", isCorrect: false },
        { text: "container-fullwidth", isCorrect: false }
      ]
    },
    {
      text: "Quelle classe est utilisée pour créer une barre de navigation fixe en haut de la page?",
      answers: [
        { text: "navbar-top", isCorrect: false },
        { text: "navbar-fixed-top", isCorrect: true },
        { text: "navbar-header", isCorrect: false },
        { text: "navbar-static-top", isCorrect: false }
      ]
    },
    {
      text: "Quelle est la classe Bootstrap pour un bouton de succès?",
      answers: [
        { text: "btn-warning", isCorrect: false },
        { text: "btn-danger", isCorrect: false },
        { text: "btn-success", isCorrect: true },
        { text: "btn-primary", isCorrect: false }
      ]
    },
    {
      text: "Comment centrer un texte à l'aide de Bootstrap?",
      answers: [
        { text: "text-middle", isCorrect: false },
        { text: "text-centered", isCorrect: false },
        { text: "text-center", isCorrect: true },
        { text: "text-align-center", isCorrect: false }
      ]
    },
    {
      text: "Quelle classe Bootstrap est utilisée pour rendre une image responsive?",
      answers: [
        { text: "img-responsive", isCorrect: true },
        { text: "img-fluid", isCorrect: true },  // Les deux réponses sont correctes, car Bootstrap 4 utilise "img-fluid"
        { text: "image-responsive", isCorrect: false },
        { text: "responsive-img", isCorrect: false }
      ]
    },
    {
      text: "Quelle est la classe Bootstrap pour créer un tableau avec des lignes alternées de couleurs?",
      answers: [
        { text: "table-striped", isCorrect: true },
        { text: "table-bordered", isCorrect: false },
        { text: "table-hover", isCorrect: false },
        { text: "table-dark", isCorrect: false }
      ]
    },
    {
      text: "Quelle classe est utilisée pour masquer un élément Bootstrap sur les écrans de petite taille?",
      answers: [
        { text: "d-none d-md-block", isCorrect: true },
        { text: "d-sm-none", isCorrect: false },
        { text: "d-block d-sm-none", isCorrect: false },
        { text: "d-hide-sm", isCorrect: false }
      ]
    },
    {
      text: "Quelle est la classe pour créer un bouton large en utilisant Bootstrap?",
      answers: [
        { text: "btn-lg", isCorrect: true },
        { text: "btn-large", isCorrect: false },
        { text: "btn-wide", isCorrect: false },
        { text: "btn-big", isCorrect: false }
      ]
    },
    {
      text: "Quelle classe Bootstrap permet d'ajouter des espacements marginaux (margin) sur tous les côtés d'un élément?",
      answers: [
        { text: "m-3", isCorrect: true },
        { text: "p-3", isCorrect: false },
        { text: "m-padding-3", isCorrect: false },
        { text: "margin-3", isCorrect: false }
      ]
    },
    {
      text: "Quelle classe Bootstrap est utilisée pour créer une liste de groupe?",
      answers: [
        { text: "list-group", isCorrect: true },
        { text: "group-list", isCorrect: false },
        { text: "list-style", isCorrect: false },
        { text: "list-items", isCorrect: false }
      ]
    }
  ];
  
  export default bootstrapQuestions;
  