import React, { useState, useCallback, useEffect } from 'react';
import Result from './Result';
import QuizResultHandler from './QuizResultHandler';
import styles from './QuizBox.module.css';
import technos from '../data/technos';
import uxui from '../data/uxui';
import css from '../data/css';
import html from '../data/html';
import react from '../data/react';
import bootstrap from '../data/bootstrap';
import python from '../data/python';
import javascript from '../data/javascript';

const QuizBox = ({ selectedTheme }) => {
  const questions = selectedTheme === 'uxui'
    ? uxui
    : selectedTheme === 'css'
      ? css
      : selectedTheme === 'html'
        ? html
        : selectedTheme === 'react'
          ? react
          : selectedTheme === 'bootstrap'
            ? bootstrap
            : selectedTheme === 'python'
            ? python
            : selectedTheme === 'javascript'
            ? javascript
            : technos; // Sélectionne les questions en fonction du thème

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); // État pour suivre les mauvaises réponses

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleValidate = () => {
    if (selectedAnswer !== null) {
      const updatedAnswersHistory = [...answersHistory];
      updatedAnswersHistory[currentQuestionIndex] = selectedAnswer;
      setAnswersHistory(updatedAnswersHistory);

      // Vérifiez si la réponse est incorrecte
      if (!selectedAnswer.isCorrect) {
        setIncorrectAnswers((prev) => [
          ...prev,
          { question: questions[currentQuestionIndex], chosenAnswer: selectedAnswer },
        ]);
      }

      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowResult(true);
      }
      setSelectedAnswer(null); // Réinitialise la réponse sélectionnée pour la question suivante
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answersHistory[currentQuestionIndex - 1] || null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setAnswersHistory([]);
    setIncorrectAnswers([]); // Réinitialise les mauvaises réponses
  };

  const calculateScore = useCallback(() => {
    return answersHistory.reduce((score, answer) => (answer && answer.isCorrect ? score + 1 : score), 0);
  }, [answersHistory]);

  useEffect(() => {
    setScore(calculateScore());
  }, [answersHistory, calculateScore]);

  // Réinitialiser l'état du quiz lorsque le thème change
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswersHistory([]);
    setIncorrectAnswers([]); // Réinitialise les mauvaises réponses
  }, [selectedTheme]);

  return (
    <div className={styles.quiz}>
      {showResult ? (
        <>
          {/* Intégrer QuizResultHandler pour enregistrer le résultat */}
          <QuizResultHandler quizTitle={selectedTheme} score={score} />
          <Result score={score} total={questions.length} onRestart={handleRestart} />
          {incorrectAnswers.length > 0 && (
            <div className={styles.incorrectAnswers}>
              <h3>Réponses Incorrectes</h3>
              {incorrectAnswers.map((item, index) => (
                <div key={index} className={styles.incorrectAnswer}>
                  <p><strong>Question :</strong> {item.question.text}</p>
                  <p><strong>Votre réponse :</strong> {item.chosenAnswer.text}</p>
                  <p><strong>Bonne réponse :</strong> {item.question.answers.find(ans => ans.isCorrect).text}</p>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className={styles.quizBox}>
          <div className={styles.backgroundImage}></div>
          <div className={styles.questionBox}>
            <div className={styles.header}>
              <div className={styles.progress}>
                <div className={styles.current}>{currentQuestionIndex + 1}</div>
                <div className={styles.total}>{questions.length}</div>
              </div>
              <div className={styles.score}>
                <span>Score</span>
                <div className={styles.scoreValue}>{score}</div>
                <div className={styles.totalValue}>{questions.length}</div>
              </div>
            </div>
            <h1 className={styles.title}>
              {selectedTheme === 'uxui' ? 'UX UI' :
              selectedTheme === 'css' ? 'CSS' : 
              selectedTheme === 'html' ? 'HTML' : 
              selectedTheme === 'react' ? 'React' :
              selectedTheme === 'bootstrap' ? 'Bootstrap' :
              selectedTheme === 'python' ? 'Python' :
              selectedTheme === 'javascript' ? 'Javascript':
              'Technos'}
            </h1>
            <h2 className={styles.questionTitle}>Question {currentQuestionIndex + 1}</h2>
            <p className={styles.questionText}>{questions[currentQuestionIndex].text}</p>
            <div className={styles.answers}>
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <div
                  key={index}
                  className={`${styles.answer} ${selectedAnswer === answer ? styles.selected : ''}`}
                  onClick={() => handleAnswerClick(answer)}
                >
                  <span className={styles.answerLetter}>{String.fromCharCode(65 + index)}</span>
                  <span className={styles.answerText}>{answer.text}</span>
                </div>
              ))}
            </div>
            <div className={styles.actions}>
              <button className={styles.backButton} onClick={handleBack}>Retour</button>
              <button className={styles.submitButton} onClick={handleValidate}>Valider</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizBox;
