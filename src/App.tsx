import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/tags">标签</Link>
              </li>
              <li>
                <Link to="/">记一笔</Link>
              </li>
              <li>
                <Link to="/statistics">统计</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            {/* path="/" 必须放在最后面*/}
            <Route path="/">
              <Account/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Tags() {
  return <h2>tags</h2>;
}

function Account() {
  return <h2>account</h2>;
}

function Statistics() {
  return <h2>statistics</h2>;
}

export default App;
