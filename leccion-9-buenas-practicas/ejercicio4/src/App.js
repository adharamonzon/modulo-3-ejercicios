import React from 'react';
import './App.css';

const users = [
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Gregory Goyle', time: 56 },
];
function App() {
  let { first, second, third } = users;
  console.log(`el podium es: en primer lugar ${first.name} con un tiempo de ${first.time} segundos, en segundo lugar ${second.name} con un tiempo de  ${second.time} segundos y en tercer lugar ${third.name} con un tiempo de  ${third.time}`);

  return <div></div>;
}

export default App;
