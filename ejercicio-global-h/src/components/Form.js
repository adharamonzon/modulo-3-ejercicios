import React from 'react';

//COMPONENTE DE CLASE

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this); //así se le asigna el valor a this, sino en el método this sería undefined (tu=tu)
  }

  formHandle(ev) {
    ev.preventDefault();
  }

  handleSearch(ev) {
    /* console.log('valor del input:', ev.target.value);
    console.log('this', this); */
    this.props.handleSearch(ev.target.value); //esta f(x) se le pide a la hija que la ejecutue (viene de la madre), al pasarle los parámetros data...
    //...a la madre se ejecuta la información de la nieta!
  }

  render() {
    console.log(this.props.handleSearch);

    return (
      <form onSubmit={this.formHandle}>
        <label htmlFor='search' className='form__label'>
          Introduce el nombre de la serie a buscar:
        </label>
        <input type='text' id='search' name='search' className='form__input-text' onKeyUp={this.handleSearch} />
        <input type='submit' className='form__btn' />
      </form>
    );
  }
}

export default Form;

//COMPONENTE FUNCIONAL

/* const formHandle = (ev) => {
  ev.preventDefault();
};
const searchHandle = (ev) => {};

const Form = () => {
  return (
    <form onSubmit={formHandle}>
      <label htmlFor='search' className='form__label'>
        Introduce el nombre de la serie a buscar:
      </label>
      <input type='text' id='search' name='search' className='form__input-text' onKeyUp={searchHandle} />
      <input type='submit' className='form__btn' />
    </form>
  );
};

export default Form; */
