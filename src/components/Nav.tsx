import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './icon'

const Nav = styled.nav`
  > ul {
    display: flex;
    justify-content: space-around;
    margin: 2px;
    padding: 0;
    
    > li > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      
      svg {
        margin: 0 auto 4px auto;
      }
    }
  }
`

function GNav() {
  return (
      <Nav>
        <ul>
          <li>
            <Link to="/tags">
              <Icon name="tag"></Icon>标签页</Link>
          </li>
          <li>
            <Link to="/account">
              <Icon name="account"></Icon>
              记账页</Link>
          </li>
          <li>
            <Link to="/statistics">
              <Icon name="statistic"></Icon>
              统计页</Link>
          </li>
        </ul>
      </Nav>
  )
}

export default GNav;