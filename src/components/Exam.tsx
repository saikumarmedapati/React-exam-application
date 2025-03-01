import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Timer } from './Timer';
import { questionBank } from '../data/questionBank';
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
 
  if (!questions.length) return <div className="text-center mt-5">Loading...</div>;
 
  return (
    <div className="container-fluid bg-info bg-gradient min-vh-100 py-5">
      <div className="container w-50">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="h3 mb-0 text-primary">
                {skill} - {subject} Examination
              </h1>
              <Timer duration={10} onTimeUp={handleSubmit} />
            </div>
 
            <div className="row row-cols-5 g-2 mb-4">
              {questions.map((_, index) => (
                <div key={index} className="col">
                  <button
                    onClick={() => setCurrentQuestion(index)}
                    className={`btn w-100 ${
                      isAnswered(questions[index].id)
                        ? 'btn-success'
                        : 'btn-outline-secondary'
                    } ${currentQuestion === index ? 'border-primary border-2' : ''}`}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
 
            <div className="mb-4">
              <h2 className="h4 fw-bold text-dark">
                Question {currentQuestion + 1}:
              </h2>
              <p className="lead text-muted">{questions[currentQuestion].question}</p>
              <div className="d-grid gap-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`btn text-start ${
                      answers.find(
                        (a) => a.questionId === questions[currentQuestion].id
                      )?.selectedAnswer === option
                        ? 'btn-primary'
                        : 'btn-outline-primary'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
 
            <div className="d-flex justify-content-between">

            <button
              onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
              className="btn btn-primary"
              disabled={currentQuestion === 0}>
                 <i className="bi bi-arrow-left"></i> Previous
            </button>

              <button
                onClick={() => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1))}
                className="btn btn-primary"
                disabled={currentQuestion === questions.length - 1}
              >
                Next
              </button>
              <button
                onClick={handleSubmit}
                className="btn btn-success"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};