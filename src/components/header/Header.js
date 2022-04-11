import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Game from '../../routes/component-routes/Game';
import Tickets from '../../routes/component-routes/Tickets';
import History from '../../routes/component-routes/History';

import './Header.css';

const Header = () => (
  <Router>
    <div className="mainHeader">
      <Link to="/game" className="headerTitle">
        Lucky Six
      </Link>

      <div className="headerMenu">
        <Link to="/game">Game</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/history">History</Link>
      </div>
    </div>

    <Switch>
      <Redirect exact from="/" to="/tickets" />
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/tickets">
        <Tickets />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </Switch>
  </Router>
);

export default Header;
