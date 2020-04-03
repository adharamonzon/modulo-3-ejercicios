import React from 'react';
import Sheep from '../images/oveja.jpg';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.arraySheeps = [];
    this.state = { counter: 0, sheeps: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    debugger;

    this.setState({
      counter: this.state.counter + 1,
      /* sheeps: this.ArraySheeps.map(sheep => { */
      sheep: this.arraySheeps.push(()=>{}
        this.sheeps.state)
    });
    /* }); */
  }

  render() {
    return (
      <div className='sheep-container'>
        <p>contador de ovejas: {this.state.counter}</p>
        <button className='btn' type='button' onClick={this.handleClick}>
          Otra ovejita mas...
        </button>
        <img>{this.state.sheep}</img>
      </div>
    );
  }
}

export default SheepCounter;
