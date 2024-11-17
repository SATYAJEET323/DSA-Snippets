import React from 'react';
import CodeCard from './CodeCard';
import { codes } from './data';

const CodeList = ({ difficulty, language, searchQuery }) => {
  const filteredCodes = codes.filter((code) => {
    const matchesDifficulty = difficulty === 'all' || code.difficulty === difficulty;
    const matchesLanguage = language === 'all' || code.language === language;
    const matchesSearch = code.title.toLowerCase().includes(searchQuery); // Match by title
    return matchesDifficulty && matchesLanguage && matchesSearch;
  });

  return (
    <div className="code-list">
      {filteredCodes.length > 0 ? (
        filteredCodes.map((code) => (
          <CodeCard 
            key={code.id} 
            title={code.title} 
            code={code.code} 
            difficulty={code.difficulty} 
            language={code.language} 
          />
        ))
      ) : (
        <p className="no-results">No matching algorithms found.</p>
      )}
    </div>
  );
};

export default CodeList;
