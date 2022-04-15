/*
  Component which represents menu and give choices for routes
  to history (previous drawals and tickets) and play (choose tickets for game play)
*/

import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Play from '../../routes/component-routes/Play';
import History from '../../routes/component-routes/History';
import Game from '../../routes/component-routes/Game';

import './Header.css';

const Header = () => (
  <Router>
    <div className="mainHeader">
      <Link to="/play" className="headerTitle">
        Lucky Six
      </Link>

      <div className="headerMenu">
        <Link to="/play">Play</Link>
        <Link to="/history">History</Link>
      </div>
    </div>

    <Switch>
      <Redirect exact from="/" to="/play" />
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/play">
        <Play />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </Switch>
  </Router>
);

export default Header;
