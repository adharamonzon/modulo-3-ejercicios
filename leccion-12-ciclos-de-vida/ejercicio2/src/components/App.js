import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Counter from './Counter';
import Relax from './Relax';
import '../stylesheets/App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/relax'>Relax</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path='/counter' component={Counter} />
          <Route path='/relax' component={Relax} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
