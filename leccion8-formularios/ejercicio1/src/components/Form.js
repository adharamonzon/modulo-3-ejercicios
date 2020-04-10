import React from 'react';

const objeto = {
  name: '',
  description: '',
  languaje: '',
};

const Form = (props) => {
  const handleChangeTitle = (ev) => {
    const valueTitle = ev.target.value;
    objeto.name = valueTitle;
    props.handleName(objeto);
  };
  const handleChangeDescription = (ev) => {
    const valueDescription = ev.target.value;
    objeto.description = valueDescription;
    props.handleName(objeto);
  };

  const handleChangeSelect = (ev) => {
    const valueSelect = ev.target.value;
    objeto.languaje = valueSelect;
    props.handleName(objeto);
  };

  return (
    <form className='form'>
      <label htmlFor='name'>nombre:</label>
      <input className='input' id='name' type='text' placeholder='nombre de la película' onChange={handleChangeTitle} />
      <label htmlFor='description'>descripción</label>
      <textarea className='input textarea' id='description' placeholder='descripción de la película' onChange={handleChangeDescription}></textarea>
      <select className='select' onClick={handleChangeSelect}>
        Idioma
        <option value='Español'>Español</option>
        <option value='Inglés'>Inglés</option>
        <option value='Portugués'>Portugués</option>
      </select>
    </form>
  );
};

export default Form;
