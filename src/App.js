import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Найкраща мова програмування?",
      answerOptions: [
        { answerText: "JavaScript", isCorrect: false },
        { answerText: "Scala", isCorrect: false },
        { answerText: "Java", isCorrect: true },
        { answerText: "C++", isCorrect: false },
      ],
    },
    {
      questionText: "Любимі тваринки?",
      answerOptions: [
        { answerText: "Котики", isCorrect: false },
        { answerText: "Шиншили", isCorrect: true },
        { answerText: "Собаки", isCorrect: false },
        { answerText: "Єноти", isCorrect: false },
      ],
    },
    {
      questionText: "Рідне місто?",
      answerOptions: [
        { answerText: "Кам'янка Пуська", isCorrect: true },
        { answerText: "Кам'янка Буська", isCorrect: false },
        { answerText: "Львів", isCorrect: false },
        { answerText: "Варшава", isCorrect: false },
      ],
    },
    {
      questionText: "Скільки всього частин Гаррі Потера(в книгах)?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "Улюблений колір?",
      answerOptions: [
        { answerText: "Фіолетовий", isCorrect: true },
        { answerText: "Жовтий", isCorrect: false },
        { answerText: "Синій", isCorrect: false },
        { answerText: "Червоний", isCorrect: true },
      ],
    },
    {
      questionText: "Щоб я зараз замовила?",
      answerOptions: [
        { answerText: "Роли", isCorrect: true },
        { answerText: "Епік", isCorrect: false },
        { answerText: "Мак", isCorrect: true },
        { answerText: "Поголодаю", isCorrect: false },
      ],
    },
    {
      questionText: "Яка група крові?",
      answerOptions: [
        { answerText: "9", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "2", isCorrect: false },
        { answerText: "1", isCorrect: false },
      ],
    },
    {
      questionText: "Солодке, гостре, гірке, смажене?",
      answerOptions: [
        { answerText: "Гірке", isCorrect: false },
        { answerText: "Гостре", isCorrect: false },
        { answerText: "Смажене", isCorrect: false },
        { answerText: "Солодке", isCorrect: true },
      ],
    },
    {
      questionText: "Ти сьогодні",
      answerOptions: [
        { answerText: "Пуська", isCorrect: true },
        { answerText: "Чемнуська", isCorrect: true },
        { answerText: "Тільтуська", isCorrect: true },
        { answerText: "Жопуська", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
