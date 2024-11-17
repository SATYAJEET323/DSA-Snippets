import React, { useState } from 'react';
import CodeList from './CodeList';
import SplashScreen from "./SplashScreen"; // Import the splash screen
import MainContent from "./MainContent"; // Import your main content component
import './App.css';

const App = () => {

  const [showSplash, setShowSplash] = useState(true);

  // Hide the splash screen after it ends
  const handleAnimationEnd = () => {
    setShowSplash(false);
  };

  const [difficulty, setDifficulty] = useState('all');
  const [language, setLanguage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // Track if the menu is open

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearchButtonClick = () => {
    console.log('Search triggered with:', searchQuery);
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div className="app">
    <div>
      {showSplash ? (
        <SplashScreen onAnimationEnd={handleAnimationEnd} />
      ) : (
        <MainContent />
      )}
    </div>

      {/* Hamburger Menu Button */}
      <button className="menu-button" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      

      {/* Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <nav className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#algorithms">Algorithms</a></li>
            <li><a href="#themes">Themes</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>

      <h1 className="title">DSA Code Snippets</h1>

      <div className="filters">
        {/* Filters */}
        <div className="dropdown-container">
          <label htmlFor="difficulty" className="dropdown-label">Filter by Difficulty:</label>
          <select 
            id="difficulty" 
            className="dropdown" 
            value={difficulty} 
            onChange={handleDifficultyChange}
          >
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="dropdown-container">
          <label htmlFor="language" className="dropdown-label">Filter by Language:</label>
          <select 
            id="language" 
            className="dropdown" 
            value={language} 
            onChange={handleLanguageChange}
          >
            <option value="all">All</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>

        {/* Search Input and Button */}
        <div className="search-container">
          <label htmlFor="search" className="search-label">Search Algorithm:</label>
          <input 
            type="text" 
            id="search" 
            className="search-input" 
            placeholder="Type algorithm name..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <button 
            className="search-button" 
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </div>
      </div>

      <CodeList difficulty={difficulty} language={language} searchQuery={searchQuery} />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 LoopxCoder. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/satyajeet-desai-09b471306" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SATYAJEET323" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://satyajeet323.github.io/Loopxcoder/" target="_blank" rel="noopener noreferrer">Loopxcoder.in</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
