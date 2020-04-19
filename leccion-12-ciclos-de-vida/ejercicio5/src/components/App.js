import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    console.log(ev.target.value, this.state);
    this.setState({ text: ev.target.value });
  }

  componentDidMount() {
    let info = JSON.parse(localStorage.getItem('text'));
    if (info !== null) {
      this.setState({
        text: info.text,
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('text', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className='container'>
        <input className='input' type='text' placeholder='escribe lo que quieras' onChange={this.handleChange} />
        <p className='text'> {this.state.text}</p>
      </div>
    );
  }
}

export default App;
