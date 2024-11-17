import React from 'react';
import './App.css';

const CodeCard = ({ title, code, difficulty, language }) => {
  return (
    <div className={`code-card ${difficulty}`}>
      <h3 className="code-title">{title}</h3>
      <pre className="code-content">{code}</pre>
      <div className="code-details">
        <span className={`difficulty-tag ${difficulty}`}>{difficulty}</span>
        <span className="language-tag">{language}</span>
      </div>
    </div>
  );
};

export default CodeCard;
