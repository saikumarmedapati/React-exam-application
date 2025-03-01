import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, Award } from 'lucide-react';

interface ResultState {
  skill: string;
  subject: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    answer: string;
  }[];
  userAnswers: Record<number, string>;
  timeSpent: number;
  score: number;
  totalQuestions: number;
  passed: boolean;
}

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state as ResultState;

  // If no result data, redirect to home
  if (!result) {
    navigate('/');
    return null;
  }

  const { skill, subject, questions, userAnswers, timeSpent, score, totalQuestions, passed } = result;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Format time spent
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} minute${mins !== 1 ? 's' : ''} and ${secs} second${secs !== 1 ? 's' : ''}`;
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: '800px' }}>
      <div className="card-header bg-primary text-white">
        <h2 className="card-title">Exam Results</h2>
      </div>
      <div className="card-body">
        <div className="text-center mb-4">
          {passed ? (
            <div className="mb-3">
              <CheckCircle size={64} className="text-success" />
              <h3 className="text-success mt-2">Congratulations! You Passed</h3>
            </div>
          ) : (
            <div className="mb-3">
              <XCircle size={64} className="text-danger" />
              <h3 className="text-danger mt-2">Sorry! You Failed</h3>
            </div>
          )}
          
          <h4>{skill} - {subject}</h4>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-4 text-center">
            <Award size={32} className="text-primary mb-2" />
            <h5>Score</h5>
            <p className="lead">{score} / {totalQuestions}</p>
            <p className="lead">({percentage}%)</p>
          </div>
          <div className="col-md-4 text-center">
            <Clock size={32} className="text-primary mb-2" />
            <h5>Time Spent</h5>
            <p className="lead">{formatTime(timeSpent)}</p>
          </div>
          <div className="col-md-4 text-center">
            <div className={passed ? "text-success" : "text-danger"}>
              {passed ? <CheckCircle size={32} className="mb-2" /> : <XCircle size={32} className="mb-2" />}
              <h5>Result</h5>
              <p className="lead">{passed ? "Pass" : "Fail"}</p>
            </div>
          </div>
        </div>
        
        <h4 className="mb-3">Question Summary</h4>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => {
                const isCorrect = userAnswers[question.id] === question.answer;
                return (
                  <tr key={question.id}>
                    <td>{index + 1}</td>
                    <td>{question.question}</td>
                    <td>{userAnswers[question.id] || "Not answered"}</td>
                    <td>{question.answer}</td>
                    <td>
                      {isCorrect ? (
                        <CheckCircle size={20} className="text-success" />
                      ) : (
                        <XCircle size={20} className="text-danger" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/select-exam')}
          >
            Take Another Exam
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;