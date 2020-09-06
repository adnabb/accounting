import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Tag} from './views/tag';
import Tags from './views/Tags';
import Account from './views/Account';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

function App() {
  return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/account"/>
          <Route path="/tags/:tag">
              <Tag/>
          </Route>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
