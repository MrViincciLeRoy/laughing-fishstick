import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🐠 Laughing Fishstick</h1>
        <p>
          Welcome to your React app deployed on GitHub Pages!
        </p>
        <p>
          This is a test to make sure everything is working correctly.
        </p>
        <div className="fish-animation">
          <span className="fish">🐠</span>
          <span className="fish">🐟</span>
          <span className="fish">🐠</span>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;