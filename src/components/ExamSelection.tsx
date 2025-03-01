import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const skills = ['RestApi'];
const subjects = ['Java', 'dotnet'];
 
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
    // <div className="container-fluid bg-info bg-gradient min-vh-100 d-flex align-items-center justify-content-center">
    //   <div className="card shadow-sm border-0 w-50 "style={{ height: "400px" }}>
    //     <div className="card-body p-4">
    //       <h1 className="h4 text-center mb-4 text-primary fw-bold">Online Examination System</h1>
         
    //       <div className="mb-3">
    //         <label className="form-label fw-medium text-dark">Select Skill</label>
    //         <select
    //           className="form-select"
    //           value={skill}
    //           onChange={(e) => setSkill(e.target.value)}
    //         >
    //           <option value="">Select a skill</option>
    //           {skills.map((s) => (
    //             <option key={s} value={s}>{s}</option>
    //           ))}
    //         </select>
    //       </div>
 
    //       <div className="mb-4">
    //         <label className="form-label fw-medium text-dark">Select Subject</label>
    //         <select
    //           className="form-select"
    //           value={subject}
    //           onChange={(e) => setSubject(e.target.value)}
    //         >
    //           <option value="">Select a subject</option>
    //           {subjects.map((s) => (
    //             <option key={s} value={s}>{s}</option>
    //           ))}
    //         </select>
    //       </div>
 
    //       <button
    //         onClick={handleStartExam}
    //         disabled={!skill || !subject}
    //         className="btn btn-primary w-100"
    //       >
    //         Start Exam
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid bg-info bg-gradient min-vh-100 d-flex align-items-center justify-content-center">
  <div className="card shadow-lg border border-2 border-dark w-50 rounded-4" style={{ height: "400px" }}>
    <div className="card-body p-4 d-flex flex-column justify-content-center">
      <h1 className="h4 text-center mb-4 text-primary fw-bold">Online Examination System</h1>
 
      {/* Select Skill */}
      <div className="mb-3">
        <label className="form-label fw-semibold text-dark">Select Skill</label>
        <select
          className="form-select border border-2 border-success rounded-3"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        >
          <option value="">Select a skill</option>
          {skills.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
 
      {/* Select Subject */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark">Select Subject</label>
        <select
          className="form-select border border-2 border-success rounded-3"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
 
      {/* Start Exam Button */}
      <button
        onClick={handleStartExam}
        disabled={!skill || !subject}
        className="btn btn-primary w-100 fw-bold py-2 rounded-3"
      >
        Start Exam
      </button>
    </div>
  </div>
</div>
 
  );
};