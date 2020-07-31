import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

import GNav from './components/Nav';

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

function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
            <Switch>
              <Redirect exact from="/" to="/account"/>
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
          </Main>
          <GNav />
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
