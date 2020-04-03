import React from 'react';

/* const InputText = () => {
  function handlerInput(ev) {
    setState({ value: ev.target.value });
  }
  return (
    <div className='App'>
      <input className='input' type='text' placeholder='escribe aquí....' onChange={handlerInput} />
      <p className='text'>{state.value}</p>
    </div>
  );
};

export default InputText; */

class InputText extends React.Component {
  constructor(props) {
    console.log(props.value);

    super(props);
    this.state = { value: 'texto vacío' };
    this.handlerInput = this.handlerInput.bind(this);
  }
  handlerInput(ev) {
    this.setState({ value: ev.target.value });
  }

  render() {
    return (
      <div className='App'>
        <input className='input' type='text' placeholder='escribe aquí....' onChange={this.handlerInput} />
        <p className='text'>{this.state.value}</p>
      </div>
    );
  }
}

export default InputText;
