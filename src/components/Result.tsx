import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state as { score: number; total: number };
  const percentage = (score / total) * 100;
  const isPassed = percentage >= 60;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Exam Results</h1>
        
        <div className="space-y-4">
          <div className={`text-4xl font-bold ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
            {isPassed ? 'PASSED' : 'FAILED'}
          </div>
          
          <div className="text-xl">
            Score: {score}/{total}
          </div>
          
          <div className="text-lg">
            Percentage: {percentage.toFixed(1)}%
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Take Another Exam
          </button>
        </div>
      </div>
    </div>
  );
};