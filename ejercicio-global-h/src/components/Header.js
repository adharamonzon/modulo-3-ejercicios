import React from 'react';
import Form from './Form';

/* const handleSearch = (data) => {
  console.log(data);
 //esto sería pasarle la función por lifting hacia arriba con los datos de la nieta, pero con pasarlo por props vale, ya que no hace nada con los datos, sólo lso pasa.

}; */ const Header = (props) => {
  return (
    <header>
      <h1 className='title--big'>Buscador de series</h1>
      <Form handleSearch={props.handleSearch} />
    </header>
  );
};

export default Header;
