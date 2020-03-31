import React from 'react';
import '../App.css';
import RandomCat from './RandomCat';
import MediaList from './MediaList';

function App() {
  return (
    <div className="App">
      <RandomCat 
      width={200}
      height ={200}/>
      <MediaList
      name='Segismundo'/>
      <RandomCat 
      width={200}
      height ={400}/>
      <MediaList
      name='Transilvania'/>
      <RandomCat 
      width={200}
      height ={400}/>
      <MediaList
      name='Maligna'/>
    </div>
  );
}

export default App;
