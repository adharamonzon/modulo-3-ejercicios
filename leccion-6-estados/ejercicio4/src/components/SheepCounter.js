import React from 'react';
import Sheep from '../images/oveja.jpg';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(
      this.setState({
        counter: this.state.counter + 1
      })
    );
  }

  render() {
    return (
      <div className='sheep-container'>
        <p>contador de ovejas: {this.state.counter}</p>
        <button className='btn' type='button' onClick={this.handleClick}>
          Otra ovejita mas...
        </button>
      </div>
    );
  }
}

export default SheepCounter;
