import React from 'react';
import clubs from '../data/clubs.json';
import ClubList from './ClubList';
import '../stylesheets/App.css';

function App() {
  return (
    <div>
      <ClubList clubs={clubs} />
    </div>
  );
}

export default App;
