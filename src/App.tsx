import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  border: 1px solid green;
  flex-grow: 1;
  overflow-y: auto;
`
const Nav = styled.nav`
  > ul {
    display: flex;
    justify-content: space-around;
  }
`

function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
            <Switch>
              <Redirect exact from="/" to="/account" />
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
                <NoMatch />
              </Route>
            </Switch>
          </Main>
          <Nav>
            <ul>
              <li>
                <Link to="/tags">标签页</Link>
              </li>
              <li>
                <Link to="/account">记账页</Link>
              </li>
              <li>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </Router>
  );
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Account() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function NoMatch() {
  return <h2>页面不存在</h2>
}

export default App;
