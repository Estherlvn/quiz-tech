const javascript = [
    {
      text: "Quelle est la sortie de l'expression `typeof NaN` ?",
      answers: [
        { text: "'number'", isCorrect: true },
        { text: "'NaN'", isCorrect: false },
        { text: "'undefined'", isCorrect: false },
        { text: "'object'", isCorrect: false },
      ],
    },
    {
      text: "Comment déclare-t-on une fonction en JavaScript ?",
      answers: [
        { text: "function myFunction() {}", isCorrect: true },
        { text: "def myFunction() {}", isCorrect: false },
        { text: "function: myFunction {}", isCorrect: false },
        { text: "function = myFunction() {}", isCorrect: false },
      ],
    },
    {
      text: "Quel est le résultat de l'expression `2 + '2'` en JavaScript ?",
      answers: [
        { text: "'22'", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "NaN", isCorrect: false },
        { text: "Erreur", isCorrect: false },
      ],
    },
    {
      text: "Quelle méthode est utilisée pour ajouter un ou plusieurs éléments à la fin d'un tableau en JavaScript ?",
      answers: [
        { text: "append()", isCorrect: false },
        { text: "push()", isCorrect: true },
        { text: "insert()", isCorrect: false },
        { text: "add()", isCorrect: false },
      ],
    },
    {
      text: "Quelle est la sortie de cette expression : `console.log(0.1 + 0.2 === 0.3)` ?",
      answers: [
        { text: "true", isCorrect: false },
        { text: "false", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "Erreur", isCorrect: false },
      ],
    },
    {
      text: "Quelle est la différence entre `let` et `var` en JavaScript ?",
      answers: [
        { text: "`let` est utilisé dans la portée globale, `var` est utilisé dans la portée locale", isCorrect: false },
        { text: "`let` est utilisé dans la portée de bloc, `var` est utilisé dans la portée de fonction", isCorrect: true },
        { text: "`var` est utilisé dans la portée de bloc, `let` est utilisé dans la portée de fonction", isCorrect: false },
        { text: "Il n'y a pas de différence", isCorrect: false },
      ],
    },
    {
      text: "Quel est le résultat de `typeof null` en JavaScript ?",
      answers: [
        { text: "'object'", isCorrect: true },
        { text: "'null'", isCorrect: false },
        { text: "'undefined'", isCorrect: false },
        { text: "'boolean'", isCorrect: false },
      ],
    },
    {
      text: "Comment crée-t-on un objet en JavaScript ?",
      answers: [
        { text: "let obj = {}", isCorrect: true },
        { text: "let obj = []", isCorrect: false },
        { text: "let obj = new Object[]", isCorrect: false },
        { text: "let obj = Object()", isCorrect: false },
      ],
    },
    {
      text: "Quelle est la sortie de cette expression : `Boolean('')` ?",
      answers: [
        { text: "false", isCorrect: true },
        { text: "true", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "Erreur", isCorrect: false },
      ],
    },
    {
      text: "Quel mot-clé est utilisé pour vérifier si une propriété existe dans un objet JavaScript ?",
      answers: [
        { text: "exists", isCorrect: false },
        { text: "in", isCorrect: true },
        { text: "has", isCorrect: false },
        { text: "contains", isCorrect: false },
      ],
    },
  ];
  
  export default javascript;
  