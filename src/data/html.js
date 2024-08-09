// src/data/html.js

const htmlQuestions = [
    {
      text: "Quel est l'élément racine d'un document HTML?",
      answers: [
        { text: "<html>", isCorrect: true },
        { text: "<head>", isCorrect: false },
        { text: "<body>", isCorrect: false },
        { text: "<root>", isCorrect: false },
      ],
    },
    {
      text: "Quel élément HTML est utilisé pour créer un lien hypertexte?",
      answers: [
        { text: "<a>", isCorrect: true },
        { text: "<link>", isCorrect: false },
        { text: "<href>", isCorrect: false },
        { text: "<url>", isCorrect: false },
      ],
    },
    {
      text: "Quel est l'élément HTML correct pour insérer une image?",
      answers: [
        { text: "<image>", isCorrect: false },
        { text: "<img>", isCorrect: true },
        { text: "<src>", isCorrect: false },
        { text: "<picture>", isCorrect: false },
      ],
    },
    {
      text: "Quel attribut HTML est utilisé pour définir une classe dans un élément?",
      answers: [
        { text: "id", isCorrect: false },
        { text: "class", isCorrect: true },
        { text: "style", isCorrect: false },
        { text: "name", isCorrect: false },
      ],
    },
    {
      text: "Comment insérer une liste non ordonnée dans un document HTML?",
      answers: [
        { text: "<ul>", isCorrect: true },
        { text: "<ol>", isCorrect: false },
        { text: "<li>", isCorrect: false },
        { text: "<list>", isCorrect: false },
      ],
    },
    {
      text: "Quel élément HTML est utilisé pour définir un titre de niveau 1?",
      answers: [
        { text: "<title>", isCorrect: false },
        { text: "<h1>", isCorrect: true },
        { text: "<heading>", isCorrect: false },
        { text: "<header>", isCorrect: false },
      ],
    },
    {
      text: "Quel attribut HTML est utilisé pour spécifier une image alternative au cas où l'image ne peut pas être affichée?",
      answers: [
        { text: "alt", isCorrect: true },
        { text: "title", isCorrect: false },
        { text: "src", isCorrect: false },
        { text: "fallback", isCorrect: false },
      ],
    },
    {
      text: "Comment créer un commentaire en HTML?",
      answers: [
        { text: "<!-- Ceci est un commentaire -->", isCorrect: true },
        { text: "// Ceci est un commentaire", isCorrect: false },
        { text: "/* Ceci est un commentaire */", isCorrect: false },
        { text: "# Ceci est un commentaire", isCorrect: false },
      ],
    },
    {
      text: "Quel élément HTML est utilisé pour créer une table?",
      answers: [
        { text: "<table>", isCorrect: true },
        { text: "<tr>", isCorrect: false },
        { text: "<td>", isCorrect: false },
        { text: "<th>", isCorrect: false },
      ],
    },
    {
      text: "Quel élément HTML est utilisé pour définir une cellule de tableau?",
      answers: [
        { text: "<tr>", isCorrect: false },
        { text: "<td>", isCorrect: true },
        { text: "<table>", isCorrect: false },
        { text: "<th>", isCorrect: false },
      ],
    },
    {
      text: "Quel attribut HTML est utilisé pour ouvrir un lien dans un nouvel onglet?",
      answers: [
        { text: "href", isCorrect: false },
        { text: "target='_blank'", isCorrect: true },
        { text: "rel='new_tab'", isCorrect: false },
        { text: "window='new'", isCorrect: false },
      ],
    },
  ];
  
  export default htmlQuestions;
  