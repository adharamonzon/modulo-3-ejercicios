import React from 'react';
import Header from './Header';
import ShowList from './ShowList';
import '../stylesheets/App.css';
import getDataApi from '../data/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      favs: [],
      searchText: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
  }
  search() {
    console.log('Buscando...', this.state.searchText);
    getDataApi(this.state.searchText).then((data) => {
      this.setState({
        shows: data,
      });
    });
  }

  //necestia recoger los datos de la nieta por parámetros (x=aqui searchText)
  handleSearch(searchText) {
    this.setState({ searchText });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Header search={this.search} handleSearch={this.handleSearch} />
        <p>La serie buscada es: {this.state.searchText} </p>
        <div className='col2'>
          <ShowList title='Resultados' emptyListMessage='No hay resultados!' items={this.state.shows} />
          <ShowList title='Favoritos' emptyListMessage='No hay series favoritas!' items={this.state.favs} />
        </div>
      </div>
    );
  }
}

export default App;
