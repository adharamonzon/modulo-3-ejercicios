import React from 'react';

const Aside = (props) => {
  const handleFilterGender = (ev) => {
    console.log(ev.target.name);
    props.filterGenre({
      genre: ev.target.name,
    });
  };

  return (
    <div className='aside'>
      <h1 className='aside-title'> Haz tu búsqueda: </h1>
      <label className='label' htmlFor='name'>
        Buscar por nombre:
        <input className='text-input' type='text' name='name' placeholder=' nombre' />
      </label>
      <label htmlFor='genre' className='label'>
        Filtrar por:
        <hr />
        <p>Género:</p>
        <input name='genre-female' className='check-input' type='checkbox' onChange={handleFilterGender} /> Mujer
        <input name='genre-male' className='check-input' type='checkbox' onChange={handleFilterGender} /> Hombre
      </label>
    </div>
  );
};

export default Aside;
