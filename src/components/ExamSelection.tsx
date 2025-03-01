import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Skill {
  id: number;
  name: string;
}

interface Subject {
  id: number;
  name: string;
  skillId: number;
}

const ExamSelection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const skillsResponse = await axios.get('http://localhost:3001/skills');
        setSkills(skillsResponse.data);

        const subjectsResponse = await axios.get('http://localhost:3001/subjects');
        setSubjects(subjectsResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        setLoading(false);
        console.error('Error in fetchData:', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedSkill) {
      const skill = skills.find(s => s.name === selectedSkill);
      if (skill) {
        const filtered = subjects.filter(subject => subject.skillId === skill.id);
        setFilteredSubjects(filtered);
      } else {
        setFilteredSubjects([]);
      }
      setSelectedSubject('');
    } else {
      setFilteredSubjects([]);
    }
  }, [selectedSkill, skills, subjects]);

  const handleStartExam = () => {
    if (selectedSkill && selectedSubject) {
      navigate(`/exam/${selectedSkill}/${selectedSubject}`);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <div className="card-header">
        <h2 className="card-title">Select Your Exam</h2>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="skillSelect" className="form-label">Select Skill:</label>
          <select 
            id="skillSelect" 
            className="form-select"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="">-- Select a Skill --</option>
            {skills.map(skill => (
              <option key={skill.id} value={skill.name}>{skill.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold text-dark">Select Subject</label>
          <select
            className="form-select border border-2 border-success rounded-3"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select a subject</option>
            {filteredSubjects.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>

        <button 
          className="btn btn-primary w-100" 
          onClick={handleStartExam}
          disabled={!selectedSkill || !selectedSubject}
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default ExamSelection;