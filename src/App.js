import React from 'react';
import {Route, Switch, withRouter} from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
