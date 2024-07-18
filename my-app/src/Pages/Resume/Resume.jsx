import React, { useState } from 'react';
import { ResumeData } from '../../Resume'; // Assuming ResumeData is your array of resume items

const ResumeComponent = () => {
  const [resumes, setResumes] = useState(ResumeData); // Assuming ResumeData is your initial array of resume items

  const FilterResume = (resumeId) => {
    const filteredResume = resumes.filter((resume) => resume.id === resumeId);
    setResumes(filteredResume);
  }

  return (
    <div>
      {resumes.map((resume) => (
        <div key={resume.id} style={{ backgroundColor: "black", textAlign: "center", marginBottom: "9%" }}>
          <img src={resume.image} alt="Not Found" style={{ display: "block", margin: "0 auto" }} />
        </div>
      ))}
    </div>
  );
}

export default ResumeComponent;
