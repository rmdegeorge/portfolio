import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App(props) {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/About" component={About} />
      </Switch>
      new App!
    </div>
  );
}

export default App;