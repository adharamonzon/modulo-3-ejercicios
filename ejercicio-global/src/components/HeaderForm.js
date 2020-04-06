import React from 'react';

const HeaderForm = (props) => {
  const handleInboxClick = (ev) => {
    ev.preventDefault();
    props.handleInboxFilter();
  }; //podemos poner la funcion del click dentro o fuera, a no ser que algo que necesitemos algo que sólo esté dentro del comp. funcional EJ. PROPS.
  //los valores que reciba por handleClick()la función, tendrán que ser recogidos en app como parámetro de la f(x) ej aqui handleClick(123), el app sería handleInboxFilter(value)
  const handleDeleteClick = (ev) => {
    ev.preventDefault();
    props.handleDeleteFilter();
  };

  const handleTextFilter = (ev) => {
    ev.preventDefault();
    props.handleTextFilter({
      value: ev.target.value,
    });
    //aquí tmbn se puede meter un objeto, ej un formulario con muchos campos de texto {value: name:} NO ENVIAR EL EVENTO ENTERO
  };

  return (
    <form className='text-align-right'>
      <button className='form__btn' onClick={handleInboxClick}>
        <span className='fas fa-inbox'></span>
        Recibidos
      </button>
      <button className='form__btn' onClick={handleDeleteClick}>
        <span className='fas fa-trash'></span>
        Papelera
      </button>
      <input className='form__input-text' type='text' placeholder='Buscar un correo' onKeyUp={handleTextFilter} />
    </form>
  );
};

export default HeaderForm;
