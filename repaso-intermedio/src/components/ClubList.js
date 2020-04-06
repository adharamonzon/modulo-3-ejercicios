import React from 'react';
import Club from './Club';

const ClubList = (props) => {
  // se puede hacer con un for //se necesita una KEY en el elemento más grande que se repita (ej.)
  const items = props.clubs.map((club, index) => {
    //para usar el index no se puede olvidar poner index como parámetro en la función!!
    //se puede llamar renderClubs, para dejar en el nombre implícito que hace la función
    return (
      <li key={index}>
        <Club club={club} />
      </li>
    ); //cuando hay un map en el primer < hay que poner la key
  });
  return <ul>{items}</ul>;
  //esta función map se puede meter dentro del return, dentro del <ul>, pero es más legible fuera, guardarlo en una constante y meterlo en el ul.
};

export default ClubList;
