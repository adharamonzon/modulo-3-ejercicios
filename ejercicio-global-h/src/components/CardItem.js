import React from 'react';

//componente funcional
const Card = (props) => {
  const handleBtn = () => {
    props.addFavorite(props.id);
  };

  return (
    <li className='card'>
      <img className='card__img' src={props.image} alt={props.name} />
      <h3 className='card__title'>{props.name}</h3>
      <button className='card__btn' onClick={handleBtn}>
        Añadir
      </button>
    </li>
  );
};

export default Card;

//componente de clase
/* class Card extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
export default Card; */
