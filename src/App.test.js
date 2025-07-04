import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Test the main App component
describe('App Component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByText(/GitHub Actions React Test App/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the counter component', () => {
    render(<App />);
    const counterHeading = screen.getByText(/Simple Counter App/i);
    expect(counterHeading).toBeInTheDocument();
  });
});

// Test the Counter component functionality
describe('Counter Component', () => {
  test('displays initial count of 0', () => {
    render(<App />);
    const countDisplay = screen.getByText(/Current count:/i);
    expect(countDisplay).toHaveTextContent('Current count: 0');
  });

  test('increases count when increase button is clicked', () => {
    render(<App />);
    const increaseButton = screen.getByText(/Increase/i);
    const countDisplay = screen.getByText(/Current count:/i);
    
    fireEvent.click(increaseButton);
    expect(countDisplay).toHaveTextContent('Current count: 1');
    
    fireEvent.click(increaseButton);
    expect(countDisplay).toHaveTextContent('Current count: 2');
  });

  test('decreases count when decrease button is clicked', () => {
    render(<App />);
    const decreaseButton = screen.getByText(/Decrease/i);
    const countDisplay = screen.getByText(/Current count:/i);
    
    fireEvent.click(decreaseButton);
    expect(countDisplay).toHaveTextContent('Current count: -1');
    
    fireEvent.click(decreaseButton);
    expect(countDisplay).toHaveTextContent('Current count: -2');
  });

  test('resets count to 0 when reset button is clicked', () => {
    render(<App />);
    const increaseButton = screen.getByText(/Increase/i);
    const resetButton = screen.getByText(/Reset/i);
    const countDisplay = screen.getByText(/Current count:/i);
    
    // First increase the count
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(countDisplay).toHaveTextContent('Current count: 3');
    
    // Then reset it
    fireEvent.click(resetButton);
    expect(countDisplay).toHaveTextContent('Current count: 0');
  });

  test('all buttons are present and clickable', () => {
    render(<App />);
    
    const increaseButton = screen.getByText(/Increase/i);
    const decreaseButton = screen.getByText(/Decrease/i);
    const resetButton = screen.getByText(/Reset/i);
    
    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    
    expect(increaseButton).toBeEnabled();
    expect(decreaseButton).toBeEnabled();
    expect(resetButton).toBeEnabled();
  });
});

// Test for accessibility
describe('Accessibility Tests', () => {
  test('buttons have proper styling classes', () => {
    render(<App />);
    
    const increaseButton = screen.getByText(/Increase/i);
    const decreaseButton = screen.getByText(/Decrease/i);
    const resetButton = screen.getByText(/Reset/i);
    
    expect(increaseButton).toHaveClass('bg-green-500');
    expect(decreaseButton).toHaveClass('bg-red-500');
    expect(resetButton).toHaveClass('bg-gray-500');
  });
});
