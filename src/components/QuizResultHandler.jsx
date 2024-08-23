import { useEffect } from 'react';

const QuizResultHandler = ({ quizTitle, score }) => {
  useEffect(() => {
    const saveQuizResult = () => {
      // Récupérer les résultats de quiz existants
      let quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];

      // Vérifier si le résultat est déjà enregistré pour éviter les doublons
      const existingResult = quizResults.find(result => result.title === quizTitle && result.score === score);
      if (existingResult) return; // Si le résultat existe déjà, on ne fait rien

      // Ajouter le nouveau résultat
      const newResult = { title: quizTitle, score: score, date: new Date().toLocaleDateString() };
      quizResults.push(newResult);

      // Sauvegarder les résultats dans LocalStorage
      localStorage.setItem('quizResults', JSON.stringify(quizResults));
    };

    saveQuizResult();
  }, [quizTitle, score]); // L'effet dépend de quizTitle et score, mais s'exécute une seule fois

  return null; // Ce composant n'affiche rien
};

export default QuizResultHandler;
