import React from 'react';
import items from './arrayList';

class App extends React.Component {
  items.map(item)
  render() {
    /*     const comidillas = items => {
      console.log(App); */

    return <li>{items}</li>;
  }
}

export default App;
