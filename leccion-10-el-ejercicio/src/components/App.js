import React from 'react';
import { getDataFromApi } from '../services/ReasonService.js';
import UsersList from './UsersList';
import Aside from './Aside';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
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

  filterGenre(filter) {
    console.log('app', filter, this.state.users);
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <main className='main'>
          <Aside className='aside' filterGenre={this.filterGenre} />
          <UsersList users={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
