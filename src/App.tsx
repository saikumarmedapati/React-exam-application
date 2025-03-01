import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import ExamSelection from './components/ExamSelection';
import Exam from './components/Exam';
import Result from './components/Result';

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Online Examination System</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-exam" element={<ExamSelection />} />
        <Route path="/exam/:skill/:subject" element={<Exam />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;