import React from 'react';
import './App.css';

const users = [
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Gregory Goyle', time: 56 },
];

const {
  winners: [first, second, third],
} = users;
console.log(users);

function App() {
  return <div></div>;
}

export default App;
