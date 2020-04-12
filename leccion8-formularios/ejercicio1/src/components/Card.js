import React from 'react';
import arrayOfItems from './';

function Card(props) {
  console.log('soy card', props);

  return (
    <div className='form'>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>idoma: {props.languaje}</p>
    </div>
  );
}

export default Card;
