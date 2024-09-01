const python = [
    {
      text: "Quelle est la sortie de cette expression : `print(type([]) == list)` ?",
      answers: [
        { text: "True", isCorrect: true },
        { text: "False", isCorrect: false },
        { text: "Erreur", isCorrect: false },
        { text: "None", isCorrect: false },
      ],
    },
    {
      text: "Quelle est la syntaxe correcte pour définir une fonction en Python ?",
      answers: [
        { text: "function myFunction() {}", isCorrect: false },
        { text: "def myFunction():", isCorrect: true },
        { text: "function:myFunction()", isCorrect: false },
        { text: "def:myFunction {}", isCorrect: false },
      ],
    },
    {
      text: "Quel mot-clé est utilisé pour créer une boucle qui s'exécute tant qu'une condition est vraie en Python ?",
      answers: [
        { text: "for", isCorrect: false },
        { text: "while", isCorrect: true },
        { text: "loop", isCorrect: false },
        { text: "do-while", isCorrect: false },
      ],
    },
    {
      text: "Comment créer un dictionnaire vide en Python ?",
      answers: [
        { text: "dict = {}", isCorrect: true },
        { text: "dict = []", isCorrect: false },
        { text: "dict = ()", isCorrect: false },
        { text: "dict = ''", isCorrect: false },
      ],
    },
    {
      text: "Quelle méthode est utilisée pour ajouter un élément à la fin d'une liste en Python ?",
      answers: [
        { text: "append()", isCorrect: true },
        { text: "add()", isCorrect: false },
        { text: "insert()", isCorrect: false },
        { text: "push()", isCorrect: false },
      ],
    },
    {
      text: "Quelle est la sortie de cette expression : `len('Hello World!')` ?",
      answers: [
        { text: "10", isCorrect: false },
        { text: "11", isCorrect: false },
        { text: "12", isCorrect: false },
        { text: "13", isCorrect: true },
      ],
    },
    {
      text: "Quel mot-clé est utilisé pour gérer les exceptions en Python ?",
      answers: [
        { text: "catch", isCorrect: false },
        { text: "except", isCorrect: true },
        { text: "try", isCorrect: false },
        { text: "throw", isCorrect: false },
      ],
    },
    {
      text: "Quel est le résultat de l'opération : `2 ** 3` ?",
      answers: [
        { text: "6", isCorrect: false },
        { text: "8", isCorrect: true },
        { text: "9", isCorrect: false },
        { text: "4", isCorrect: false },
      ],
    },
    {
      text: "Comment accède-t-on à la dernière valeur d'une liste en Python nommée `my_list` ?",
      answers: [
        { text: "my_list[-1]", isCorrect: true },
        { text: "my_list[0]", isCorrect: false },
        { text: "my_list[len(my_list)]", isCorrect: false },
        { text: "my_list[last]", isCorrect: false },
      ],
    },
    {
      text: "Quelle est la sortie de cette expression : `print('Hello' + ' ' + 'World!')` ?",
      answers: [
        { text: "HelloWorld!", isCorrect: false },
        { text: "Hello World!", isCorrect: true },
        { text: "Hello World", isCorrect: false },
        { text: "Hello + World!", isCorrect: false },
      ],
    },
  ];
  
  export default python;
  