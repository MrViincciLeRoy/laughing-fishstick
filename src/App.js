import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Simple Counter App
      </h2>
      <div className="text-center">
        <p className="text-lg mb-4 text-gray-600">
          Current count: <span className="font-semibold text-blue-600">{count}</span>
        </p>
        <div className="space-x-2">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          GitHub Actions React Test App
        </h1>
        <Counter />
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            This app demonstrates a simple React component with state management,
            perfect for testing with GitHub Actions CI/CD pipeline.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
