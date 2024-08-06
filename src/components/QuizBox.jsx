import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import styles from './QuizBox.module.css';
import questions from '../data/général';
import avatar from '../assets/avatar-homepage.png'; // Assurez-vous que le chemin est correct

const Quiz = () => {
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

  const calculateScore = () => {
    return answersHistory.reduce((score, answer) => (answer && answer.isCorrect ? score + 1 : score), 0);
  };

  React.useEffect(() => {
    setScore(calculateScore());
  }, [answersHistory]);

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
            <h1 className={styles.title}>JavaScript</h1>
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
                  <input type="checkbox" checked={selectedAnswer === answer} readOnly />
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

export default Quiz;
