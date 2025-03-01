import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
 
export const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state as { score: number; total: number };
  const percentage = (score / total) * 100;
  const isPassed = percentage >= 60;
 
  return (
    <div className="container-fluid bg-info bg-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-sm border-0 w-25">
        <div className="card-body p-4 text-center">
          <h1 className="h4 mb-4 text-primary fw-bold">Exam Results</h1>
         
          <div className={`display-6 fw-bold mb-3 ${isPassed ? 'text-success' : 'text-danger'}`}>
            {isPassed ? 'PASSED' : 'FAILED'}
          </div>
         
          <div className="h5 text-muted">
            Score: {score}/{total}
          </div>
         
          <div className="h6 text-muted mb-4">
            Percentage: {percentage.toFixed(1)}%
          </div>
 
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary w-100"
          >
            Take Another Exam
          </button>
        </div>
      </div>
    </div>
  );
};