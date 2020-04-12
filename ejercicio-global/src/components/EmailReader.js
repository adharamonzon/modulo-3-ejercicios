import React from 'react';

class EmailReader extends React.Component {
  constructor(props) {
    console.log(props);
    super(props); //si se mete dentro de la f(x) se hace al vuelo, y había que quitar el bind
    /* this.handleDeleteEmail = this.handleDeleteEmail.bind(this); */ this.handleCloseEmail = this.hadleCloseEmail.bind(this);
  } // se puede meter dentro del JSX

  /* handleDeleteEmail() {
    this.props.handleDeleteEmail(this.props.id);
  } */ hadleCloseEmail() {
    this.props.hadleCloseEmail();
  }

  render() {
    return (
      <div>
        <div className='col2 mt-1 pt-1'>
          <div>
            <h2 className='title--meidum'>{this.props.subject}</h2>
            <h3 className='title--small'>
              <span className='text--bold display-inline-block mr-1'>{this.props.fromName}</span>
              <span className='text-normal display-inline-block'>&lt;{this.props.email}&gt;</span>
            </h3>
          </div>
          <div className='text-align-right'>
            <button className='fas fa-times-circle form__btn' onClick={this.hadleCloseEmail}></button>
            <button
              className='fas fa-trash form__btn'
              onClick={() => {
                this.props.handleDeleteEmail(this.props.id);
              }}
            ></button>
          </div>
        </div>

        <p>{this.props.body}</p>

        <div className='mt-1'>
          <button className='form__btn' type='button'>
            {/* // IMPORTANTE: this. ya que es una clase, tiene que ser algo ejecutable, pero sólo se llama a la función. Se pone donde sería el querySelector. */}
            <span className='fas fa-reply'></span>
            Responder
          </button>

          <button className='form__btn'>
            <span className='fas fa-reply-all'></span>
            Responder a todos
          </button>

          <button className='form__btn'>
            <span className='fas fa-share'></span>
            Reenviar a todos
          </button>
        </div>
      </div>
    );
  }
}

export default EmailReader;
