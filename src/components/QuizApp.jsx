import React, { useState } from 'react';
import Question from './QuestionCard';

const quizData = [
  {
    question: 'What is React?',
    options: ['Library', 'Framework', 'Language', 'IDE'],
    correctAnswer: 'Library'
  },
  {
    question: 'What is JSX?',
    options: ['JavaScript', 'JavaScript XML', 'Java', 'None of the above'],
    correctAnswer: 'JavaScript XML'
  },
  {
    question: 'Which hook is used to manage state in React?',
    options: ['useEffect', 'useState', 'useContext', 'useReducer'],
    correctAnswer: 'useState'
  },
  {
    question: 'Which company developed React?',
    options: ['Facebook', 'Google', 'Microsoft', 'Twitter'],
    correctAnswer: 'Facebook'
  },
  {
    question: 'What does JSX stand for?',
    options: ['JavaScript XML', 'Java Syntax XML', 'JavaScript XCode', 'None of the above'],
    correctAnswer: 'JavaScript XML'
  },
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      {!showResult ? (
        <>
          <Question
            question={quizData[currentQuestionIndex].question}
            options={quizData[currentQuestionIndex].options}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <div className="result">
          <h2>Your Score: {score}/{quizData.length}</h2>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
