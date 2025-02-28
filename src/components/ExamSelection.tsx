import React from 'react';
import { useNavigate } from 'react-router-dom';

const skills = ['RestApi'];
const subjects = ['java', 'dotnet'];

export const ExamSelection: React.FC = () => {
  const navigate = useNavigate();
  const [skill, setSkill] = React.useState('');
  const [subject, setSubject] = React.useState('');

  const handleStartExam = () => {
    if (skill && subject) {
      navigate(`/exam/${skill}/${subject}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Online Examination System</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Skill</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            >
              <option value="">Select a skill</option>
              {skills.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Subject</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select a subject</option>
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleStartExam}
            disabled={!skill || !subject}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            Start Exam
          </button>
        </div>
      </div>
    </div>
  );
};