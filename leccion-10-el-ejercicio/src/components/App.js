import React from 'react';
import { getDataFromApi } from '../services/ReasonService.js';
import UsersList from './UsersList';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  getDataFromApi() {
    getDataFromApi().then((data) => {
      this.setState({
        users: data,
      });
    });
  }
  componentDidMount() {
    this.getDataFromApi();
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <UsersList users={this.state} />
      </div>
    );
  }
}

export default App;
