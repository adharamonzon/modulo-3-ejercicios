import React from 'react';
import Header from './Header';

import api from '../data/data.json';
import ShowList from './ShowList';
import '../stylesheets/App.css';

function renderCardList() {
  return;
}
function App() {
  return (
    <div className='app'>
      <Header />
      <ShowList items={api} />
      <ul>{renderCardList()}</ul>
    </div>
  );
}

export default App;
