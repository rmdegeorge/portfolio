import React from 'react';
import {Switch, Route} from 'react-router-dom';

import GlobalStyle from './themes/GlobalStyle';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
