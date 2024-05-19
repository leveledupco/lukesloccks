import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import BestBets from './components/BestBets';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/events" component={EventList} />
        <Route path="/best-bets" component={BestBets} />
        <Route path="/" exact component={() => <div>Welcome to Luke's Locks</div>} />
      </Switch>
    </Router>
  );
};

export default App;
