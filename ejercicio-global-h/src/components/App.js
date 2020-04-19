import React from 'react';
import Header from './Header';
import ShowList from './ShowList';
import '../stylesheets/App.css';
import getDataApi from '../data/api';
import Loader from './Loader';
import localStorage from '../localStorage/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      favs: [],
      searchText: localStorage.get('searchText', ''), //se le pide el search text = item, y el default value (1º vez en la web) es igual a '' vacío.
      loading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }
  search() {
    console.log('Buscando...', this.state.searchText);
    this.setState({
      loading: true,
    });
    getDataApi(this.state.searchText).then((data) => {
      this.setState({
        shows: data,
        loading: false,
      });
    });
  }

  //necestia recoger los datos de la nieta por parámetros (x=aqui searchText)
  handleSearch(searchText) {
    localStorage.set('searchText', searchText);
    this.setState({ searchText });
  }

  addFavorite(favId) {
    const favShow = this.state.shows.find((show) => show.id === favId);

    this.setState((prevState) => {
      debugger;
      prevState.favs.push(favShow);
      return {
        favs: prevState.favs,
      };
    }); //puede ser que no sea instantáneo, para evitar eso se le pasa una f(x) sino: this.setState{(favs: this.state.favs)},
  } //usamos this.setState cuando queremos MACHACAR DATOS!
  //prevState lo usamos cuando el dato que estamos actualizando depende de sí mismo
  render() {
    return (
      <div>
        <Loader isLoading={this.state.loading} />
        <Header search={this.search} handleSearch={this.handleSearch} />
        <p>La serie buscada es: {this.state.searchText} </p>
        <div className='col2'>
          <ShowList title='Resultados' emptyListMessage='No hay resultados!' items={this.state.shows} addFavorite={this.addFavorite} />
          <ShowList title='Favoritos' emptyListMessage='No hay series favoritas!' items={this.state.favs} />
        </div>
      </div>
    );
  }
}

export default App;
