import React from 'react';

//componente funcional
const Card = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
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
