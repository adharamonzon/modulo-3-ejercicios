import React from 'react';
import './App.css';

const numbers = [1, 4, 6, 8, 45, 89];
const newNumbers = [];

function App() {
  const handleNumber = (ev) => {
    let newNumber = ev.target.value;
    const newNumbers = [...numbers, parseInt(newNumber)];
    console.log(newNumbers);

    numbers.map((number, index) => {
      return <li key={index}>{number}</li>;
    });
    newNumbers.filter((number, index) => {
      return number > 6 ? <li key={index}> {number} </li> : 'lo siento mucho no entiendo nada';
    });
  };

  return (
    <div>
      <label htmlFor='numberInput'>añade tu número</label>
      <input type='number' name='numberInput' onChange={handleNumber} />
      <ul>handleNumber={handleNumber()}</ul>
    </div>
  );
}

export default App;
