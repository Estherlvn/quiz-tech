import React, { useState, useCallback, useEffect } from 'react';
import Result from './Result';
import styles from './QuizBox.module.css';
import développementweb from '../data/développementweb';
import uxui from '../data/uxui';
import css from '../data/css'; // Import du fichier de questions CSS
import html from '../data/html'; // Import du fichier de questions HTML

const QuizBox = ({ selectedTheme }) => {
  const questions = selectedTheme === 'uxui'
    ? uxui
    : selectedTheme === 'css'
      ? css
      : selectedTheme === 'html'
        ? html
        : développementweb; // Sélectionne les questions en fonction du thème

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersHistory, setAnswersHistory] = useState([]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleValidate = () => {
    if (selectedAnswer !== null) {
      const updatedAnswersHistory = [...answersHistory];
      updatedAnswersHistory[currentQuestionIndex] = selectedAnswer;
      setAnswersHistory(updatedAnswersHistory);

      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowResult(true);
      }
      setSelectedAnswer(null); // Reset selected answer for the next question
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
  };

  const calculateScore = useCallback(() => {
    return answersHistory.reduce((score, answer) => (answer && answer.isCorrect ? score + 1 : score), 0);
  }, [answersHistory]);

  useEffect(() => {
    setScore(calculateScore());
  }, [answersHistory, calculateScore]);

  // Code ajouté : Réinitialiser l'état du quiz lorsque le thème change
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswersHistory([]);
  }, [selectedTheme]);

  return (
    <div className={styles.quiz}>
      {showResult ? (
        <Result score={score} total={questions.length} onRestart={handleRestart} />
      ) : (
        <div className={styles.quizBox}>
          <div className={styles.backgroundImage}></div> {/* Ajout de l'image de fond */}
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
              'Développement Web'}
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
