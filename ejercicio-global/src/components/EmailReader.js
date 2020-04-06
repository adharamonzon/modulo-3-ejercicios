import React from 'react';

class EmailReader extends React.Component {
  constructor(props) {
    super(props);
    this.handleReplyClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    console.log('me han clickado con el evento:', ev.currentTarget);
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
            <a href='/'>
              <button className='fas fa-times-circle form__btn'></button>
            </a>
            <a href='/'>
              <button className='fas fa-trash form__btn'></button>
            </a>
          </div>
        </div>

        <p>FrontFest es un evento anual y sin ánimo de lucro. Está organizado y gestionado por un equipo de voluntarios y voluntarias que pertenecen a la comunidad de desarrollo frontend. Celebrado por primera vez en 2017, pretende ser un punto de encuentro a nivel nacional, principalmente en castellano, para todas aquellas personas interesadas en las tecnologías de frontend, donde compartir experiencias y aprender acerca de las nuevas tendencias en el sector. Y por supuesto, acabar divirtiéndose en buena compañía.</p>

        <div className='mt-1'>
          <button className='form__btn' onClick={this.handleClick}>
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
