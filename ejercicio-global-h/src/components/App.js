import React from 'react';
import Header from './Header';
import shows from '../data/data.json';
import ShowList from './ShowList';
import '../stylesheets/App.css';

const favs = [];
//necestia recoger los datos de la nieta por parámetros (x=aqui data)
function handleSearch(data) {
  console.log(data);
}
/* function renderCardList() {
  return;
} */
function App() {
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <div className='col2'>
        <ShowList title='Resultados' emptyListMessage='No hay resultados!' items={shows} />
        <ShowList title='Favoritos' emptyListMessage='No hay series favoritas!' items={favs} />
        {/* <ul>{renderCardList()}</ul> */}
      </div>
    </div>
  );
}

export default App;
