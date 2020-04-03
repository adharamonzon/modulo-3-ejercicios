import React from 'react';

// evento escuchador (no hase na!, no importar)
const OnionHater = ev => {
  let cebollitis = ev.target.value;
  if (cebollitis.includes('cebolla' || 'CEBOLLA')) {
    alert('ODIO LA CEBOLLA');
  }
};
//función que si trabaja
const HatePiña = () => {
  return (
    <div>
      <textarea onChange={OnionHater}></textarea>
    </div>
  );
};
export default HatePiña;
