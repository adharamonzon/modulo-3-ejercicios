import React from 'react';
import CityImage from './CityImage';

// evento escuchador (no hase na!, no importar)
const SelectCity = (ev) => {
  let cities = ev.target.value;
  if (cities === CityImage.id);
};

//función que si trabaja
const Destiny = () => {
  return (
    <div>
      <select className='select' onChange={SelectCity}>
        <option value='Buenos Aires'>Buenos Aires</option>
        <option value='Sydney'>Sydney</option>
        <option value='Praga'>Praga</option>
        <option value='Boston'>Boston</option>
        <option value='Tokio'>Tokio</option>
      </select>
    </div>
  );
};
export default Destiny;
