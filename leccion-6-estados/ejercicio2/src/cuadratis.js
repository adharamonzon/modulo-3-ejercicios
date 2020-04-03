import React from 'react';

class Cuadrado extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: 'blue' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState, props) => ({ background: prevState.background === 'blue' ? 'red' : 'blue' }));
  }

  render() {
    return <div className={`cuadrado background-${this.state.background}`} onClick={this.handleClick}></div>;
  }
}

export default Cuadrado;
