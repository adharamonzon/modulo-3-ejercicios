import React from 'react';
import '../stylesheets/App.css';
import List from './List';
import apiSeries from '../data/api.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      series: apiSeries,
      favs: [],
    });
    console.log(this.state.series);
  }

  render() {
    return (
      <ul>
        <List series={this.state.series} />
      </ul>
    );
  }
}

export default App;
