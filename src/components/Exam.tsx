import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Clock } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface ExamParams {
  skill: string;
  subject: string;
}

const Exam: React.FC = () => {
  const { skill, subject } = useParams<keyof ExamParams>() as ExamParams;
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60); // 10 minutes in seconds
  const [showTimeWarning, setShowTimeWarning] = useState<boolean>(false);
  
  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle exam submission
  const handleSubmit = useCallback(() => {
    const result = {
      skill,
      subject,
      questions,
      userAnswers,
      timeSpent: 600 - timeLeft,
      score: 0,
      totalQuestions: questions.length,
      passed: false
    };

    // Calculate score
    let correctAnswers = 0;
    questions.forEach(question => {
      if (userAnswers[question.id] === question.answer) {
        correctAnswers++;
      }
    });

    result.score = correctAnswers;
    result.passed = (correctAnswers / questions.length) >= 0.6; // 60% passing score

    // Navigate to results page with the result data
    navigate('/result', { state: result });
  }, [navigate, questions, skill, subject, timeLeft, userAnswers]);

  // Fetch questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3001/questions/${skill}_${subject}`);
        
        if (response.data && Array.isArray(response.data)) {
          // Shuffle and select 10 random questions
          const shuffled = [...response.data].sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, 10);
          setQuestions(selected);
        } else {
          setError('No questions found for the selected skill and subject.');
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions. Please try again later.');
        setLoading(false);
        console.error('Error fetching questions:', err);
      }
    };

    fetchQuestions();
  }, [skill, subject]);

  // Timer effect
  useEffect(() => {
    if (loading || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, questions, handleSubmit]);

  // Time warning effect
  useEffect(() => {
    if (timeLeft <= 120 && timeLeft > 0) { // Last 2 minutes
      setShowTimeWarning(true);
    } else {
      setShowTimeWarning(false);
    }
  }, [timeLeft]);

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }));
  };

  // Navigation functions
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (questions.length === 0) {
    return <div className="alert alert-warning">No questions available for this exam.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3>Question {currentQuestionIndex + 1} of {questions.length}</h3>
            <div className={`d-flex align-items-center ${showTimeWarning ? 'timer-warning' : ''}`}>
              <Clock className="me-2" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="card-body">
            <h4 className="mb-4">{currentQuestion.question}</h4>
            <div className="list-group">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`list-group-item list-group-item-action ${
                    userAnswers[currentQuestion.id] === option ? 'active' : ''
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button 
              className="btn btn-secondary" 
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button 
              className="btn btn-primary" 
              onClick={goToNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
        <div className="mt-3 d-grid">
          <button className="btn btn-danger" onClick={handleSubmit}>
            Submit Exam
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h4>Question Navigator</h4>
          </div>
          <div className="card-body">
            <div className="d-flex flex-wrap justify-content-center">
              {questions.map((q, index) => (
                <div 
                  key={index}
                  className={`question-nav-item ${
                    index === currentQuestionIndex ? 'active' : ''
                  } ${userAnswers[q.id] ? 'answered' : ''}`}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="mt-3">
              <div className="d-flex align-items-center mb-2">
                <div className="question-nav-item me-2"></div>
                <span>Not Answered</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="question-nav-item active me-2"></div>
                <span>Current Question</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="question-nav-item answered me-2"></div>
                <span>Answered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showTimeWarning && (
        <div className="timer-alert">
          Warning: Less than 2 minutes remaining!
        </div>
      )}
    </div>
  );
};

export default Exam;