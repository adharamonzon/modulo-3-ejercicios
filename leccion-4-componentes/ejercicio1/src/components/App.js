import React from 'react';
import Item from './Item';
import arrayOfItems from './itemList';

class App extends React.Component {
  render() {
    return <Item items={arrayOfItems} />;
  }
}

export default App;
