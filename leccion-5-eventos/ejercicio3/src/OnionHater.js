import React from 'react';

//función que si trabaja
class HatePiña extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHating: false
    };
    this.OnionHater = this.OnionHater.bind(this);
  }
  OnionHater = ev => {
    let cebollitis = ev.target.value;
    if (cebollitis.toLowerCase().includes('cebolla')) {
      this.setState({ isHating: true });
    } else {
      this.setState({ isHating: false });
    }
  };
  render() {
    return (
      <div className={this.state.isHating ? 'textarea red' : 'container'}>
        <textarea className='' onChange={this.OnionHater}></textarea>
      </div>
    );
  }
}
export default HatePiña;
