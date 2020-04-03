import React from 'react';

// evento escuchador (no hase na!, no importar)
const SelectCity = ev => {
  let cities = ev.target.value;
  alert(`tu destino es viajar a ${cities}`);
};

//función que si trabaja
const Destiny = () => {
  return (
    <select onChange={SelectCity}>
      <option value='Buenos Aires'>Buenos Aires</option>
      <option value='Sydney'>Sydney</option>
      <option value='Praga'>Praga</option>
      <option value='Boston'>Boston</option>
      <option value='Tokio'>Tokio</option>
    </select>
  );
};
export default Destiny;
