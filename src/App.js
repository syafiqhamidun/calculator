import React, { useState } from 'react';

// A simple React Calculator App
const CalculatorApp = () => {
  // State to store the input and result
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle when a button is pressed
  const handleButtonClick = (value) => {
    // If 'C' is pressed, clear the input and result
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      // When '=' is pressed, try to evaluate the input
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      // For other buttons, append their value to the input string
      setInput(input + value);
    }
  };

  // Render the calculator buttons and display
  return (
    <div className="calculator">
      <div className="display">
        {input || "0"} {/* Show the input or '0' */}
      </div>
      <div className="result">
        {result}
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default CalculatorApp;
