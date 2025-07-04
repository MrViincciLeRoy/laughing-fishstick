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
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
        <h1>GitHub Actions React Test App</h1>
      </header>
      
      <div style={{ 
        margin: '20px 0', 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        backgroundColor: '#f9f9f9' 
      }}>
        <h2>Simple Counter App</h2>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          margin: '20px 0', 
          color: '#333' 
        }}>
          Current count: {count}
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <button 
            className="bg-green-500" 
            onClick={increase}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#10b981'
            }}
          >
            Increase
          </button>
          <button 
            className="bg-red-500" 
            onClick={decrease}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#ef4444'
            }}
          >
            Decrease
          </button>
          <button 
            className="bg-gray-500" 
            onClick={reset}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#6b7280'
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;