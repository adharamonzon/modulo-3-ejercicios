import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(20);
  const onClickListener = () => {
    setNumber(number + 1);
  };
  return (
    <div className='app'>
      <p>Hoy tengo {number} años de edad!</p>
      <button type='button' onClick={onClickListener}>
        Hazme más viejo
      </button>
    </div>
  );
}

export default App;
