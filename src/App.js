import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Actions React Test App</h1>
      </header>
      
      <div className="counter-container">
        <h2>Simple Counter App</h2>
        <div className="counter-display">
          Current count: {count}
        </div>
        <div className="counter-buttons">
          <button 
            className="counter-button bg-green-500" 
            onClick={increase}
          >
            Increase
          </button>
          <button 
            className="counter-button bg-red-500" 
            onClick={decrease}
          >
            Decrease
          </button>
          <button 
            className="counter-button bg-gray-500" 
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;