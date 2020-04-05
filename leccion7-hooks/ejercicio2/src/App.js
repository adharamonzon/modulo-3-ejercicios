import React, { useState } from 'react';
import './App.css';

function App() {
  const [numberYears, setNumber] = useState(20);
  const changeYears = () => {
    setNumber(numberYears + 1);
  };
  const [numberGifts, setGifts] = useState(1);
  const changeGifts = () => {
    setGifts(numberGifts + 1);
  };
  return (
    <div className='app'>
      <p>Hoy tengo {numberYears} años de edad!</p>
      <button type='button' onClick={changeYears}>
        Hazme más viejo
      </button>
      <p>Tengo {numberGifts} regalos!</p>
      <button type='button' onClick={changeGifts}>
        Dame regalos!!
      </button>
    </div>
  );
}

export default App;
