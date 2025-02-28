import React, { useState, useEffect } from 'react';


import { useParams, useNavigate } from 'react-router-dom';
import { Timer } from './Timer';
import { questionBank } from '../data/questionBank';
import data from "../../db.json";

import { Question, Answer } from '../types';

export const Exam: React.FC = () => {
  const { skill, subject } = useParams<{ skill: string; subject: string }>();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (skill && subject && questionBank[skill]?.[subject]) {
      const allQuestions = questionBank[skill][subject];
      const randomQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      setQuestions(randomQuestions);
    }
  }, [skill, subject]);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => [
      ...prev.filter((a) => a.questionId !== questions[currentQuestion].id),
      { questionId: questions[currentQuestion].id, selectedAnswer: answer },
    ]);
  };

  const handleSubmit = () => {
    const score = answers.reduce((acc, answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
      return question?.correctAnswer === answer.selectedAnswer ? acc + 1 : acc;
    }, 0);

    navigate('/result', { state: { score, total: questions.length } });
  };

  const isAnswered = (questionId: number) => 
    answers.some((a) => a.questionId === questionId);

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              {skill} - {subject} Examination
            </h1>
            <Timer duration={10} onTimeUp={handleSubmit} />
          </div>

          <div className="grid grid-cols-5 gap-2 mb-6">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`p-4 rounded ${
                  isAnswered(questions[index].id)
                    ? 'bg-green-500 text-white'
                    : 'bg-white border'
                } ${currentQuestion === index ? 'ring-2 ring-blue-500' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              Question {currentQuestion + 1}:
            </h2>
            <p className="text-lg">{questions[currentQuestion].question}</p>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-3 text-left rounded ${
                    answers.find(
                      (a) => a.questionId === questions[currentQuestion].id
                    )?.selectedAnswer === option
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          

          <div className="mt-6 flex justify-between">
          <button
    onClick={() => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1))}
    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
    disabled={currentQuestion === questions.length - 1}
  >
    Next
  </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
