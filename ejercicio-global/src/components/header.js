import React from 'react';
import HeaderForm from './HeaderForm';

const Header = (props) => {
  /* const handleInboxClick = () => {
    console.log('header: me han clickado');
    props.handleHeaderClick();
  }; */ //esto es un paso intermedio que si igualamos la f(x) de la madre a la de la hija se pueden omitir estos pasos de código.

  return (
    <header className='col2 mb-1'>
      <h1 className='title'>
        <span className='fas fa-envelope-open-text'></span>
        Gmail
      </h1>
      <HeaderForm handleInboxFilter={props.handleInboxFilter} handleDeleteFilter={props.handleDeleteFilter} handleTextFilter={props.handleTextFilter} />
    </header> //el primer handleInboxFilter viene de App (abuela) y el 2º es la nieta.
  );
}; //la función de mi hija es = a la función de mi madre linea 16:HedaerForm

export default Header;
