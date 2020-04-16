import React from 'react';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import { Route, Switch, Link } from 'react-router-dom';
import '../stylesheets/App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path='/pricing' component={Pricing}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
