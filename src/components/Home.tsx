import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div className="mb-4">
        <BookOpen size={64} className="mx-auto text-primary" />
      </div>
      <h2>Welcome to the Online Examination System</h2>
      <p className="lead mb-4">
        Test your knowledge in various skills and subjects with our online examination platform.
      </p>
      <div className="card mb-4 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h5 className="card-title">Exam Instructions</h5>
          <ul className="text-start">
            <li>Each exam consists of 10 random questions from our question bank.</li>
            <li>You have 10 minutes to complete the exam.</li>
            <li>Navigate between questions using the previous and next buttons.</li>
            <li>You can also click on question numbers to jump to specific questions.</li>
            <li>Answered questions will be marked in green.</li>
            <li>The exam will be automatically submitted when the time expires.</li>
            <li>You can submit the exam early by clicking the submit button.</li>
          </ul>
        </div>
      </div>
      <button 
        className="btn btn-primary btn-lg" 
        onClick={() => navigate('/select-exam')}
      >
        Start an Exam
      </button>
    </div>
  );
};

export default Home;