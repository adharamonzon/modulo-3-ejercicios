import React from 'react';
import { fetchReasons } from '../services/ReasonService.js';
import UsersList from './UsersList';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
    };
    /*     this.getDataFromApi = this.getDataFromApi.bind(this); */
  }

  /* getDataFromApi() {
    fetchReasons().then((data) => {
      this.setState({ data
          gender: data.results[i].gender,
          location: data.results[i].location.country,
          name: data.results[i].name.first,
          lastname: data.results[i].name.last,
          image: data.results[i].picture.medium,
          age: data.results[i].dob.age,
      });
    });
    console.log(fetchReasons);
  } 
  componentDidMount() {
    this.getDataFromApi();
  }
*/
  render() {
    console.log(this.users);
    return (
      <div>
        ...
        <UsersList state={this.state.users} />
      </div>
    );
  }
}

export default App;
