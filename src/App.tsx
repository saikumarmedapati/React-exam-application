import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExamSelection } from './components/ExamSelection';
import { Exam } from './components/Exam';
import { Result } from './components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExamSelection />} />
        <Route path="/exam/:skill/:subject" element={<Exam />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;