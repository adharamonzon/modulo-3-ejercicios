import React from 'react';
import './App.css';

const numbers = [1, 4, 6, 8, 45, 89];

function App() {
  const [number, setState] = useState(numbers);
  const result = number.map((numb, index));

  return (
    <div>
      <label htmlFor='numberInput'>añade tu número</label>
      <input type='number' name='numberInput' onChange={handleNumber} />
      <ul>handleNumber={handleNumber()}</ul>
    </div>
  );
}

export default App;
