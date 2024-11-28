import React from 'react';
import './ResumeDownload.css';

const ResumeDownload = () => {
  return (
    <div className="resume-download">
      <a
        href="/Shailly---Agarwal.pdf"
        download="Shailly-Agarwal_Resume.pdf"
        className="resume-link"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
