import React from 'react';
import Form from './Form';
import Card from './Card';

import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      languaje: '',
    };
    this.handleName = this.handleName.bind(this);
  }

  handleName(value) {
    this.setState({
      name: value.name,
      description: value.description,
      languaje: value.languaje,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className='form'>
        <Form handleName={this.handleName} />
        <Card name={this.state.name} description={this.state.description} languaje={this.state.languaje} />
      </div>
    );
  }
}

export default App;
