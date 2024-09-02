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
import javascript from '../data/javascript';
import python from '../data/python';

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
    : selectedTheme === 'javascript'
    ? javascript
    : selectedTheme === 'python'
    ? python
    : technos; 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); 

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleValidate = () => {
    if (selectedAnswer !== null) {
      const updatedAnswersHistory = [...answersHistory];
      updatedAnswersHistory[currentQuestionIndex] = selectedAnswer;
      setAnswersHistory(updatedAnswersHistory);

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
      setSelectedAnswer(null); 
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
    setIncorrectAnswers([]); 
  };

  const calculateScore = useCallback(() => {
    return answersHistory.reduce((score, answer) => (answer && answer.isCorrect ? score + 1 : score), 0);
  }, [answersHistory]);

  useEffect(() => {
    setScore(calculateScore());
  }, [answersHistory, calculateScore]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswersHistory([]);
    setIncorrectAnswers([]); 

    // Fonction de défilement vers la position spécifique
    const scrollToPosition = () => {
      window.scrollTo({ top: window.innerHeight * 0.90, behavior: 'smooth' });
    };

    // Appeler la fonction pour effectuer le défilement
    scrollToPosition();
  }, [selectedTheme]);

  return (
    <div className={styles.quiz}>
      {showResult ? (
        <>
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
              selectedTheme === 'javascript' ? 'JavaScript' :
              selectedTheme === 'python' ? 'Python' :
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
