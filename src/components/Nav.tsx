import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon'
import '../helper.sass';

const Nav = styled.nav`
  //TODO：怎么使用变量？ 
  //border-top: 1px solid $gray;
  border-top: 1px solid rgba(0, 0, 0, .25);
  > ul {
    display: flex;
    justify-content: space-around;
    margin: 2px;
    padding: 0;
    background: #fff;
    
    > li > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      position: relative;
      
      svg {
        margin: 0 auto 4px auto;
      }
      
      &.nav-selected {
        > svg {
          width: 40px;
          height: 40px;
          position: absolute;
          top: -13px;
          background: $background-color;
        }
        > span {
          margin-top: 32px
        }
      }
    }
  }
`

function GNav() {
  return (
      <Nav>
        <ul>
          <li>
            <NavLink to="/tags" activeClassName="nav-selected">
              <Icon name="tag"></Icon>
              <span>标签页</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" activeClassName="nav-selected">
              <Icon name="account"></Icon>
              <span>记账页</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" activeClassName="nav-selected">
              <Icon name="statistic"></Icon>
              <span>统计页</span>
            </NavLink>
          </li>
        </ul>
      </Nav>
  )
}

export default GNav;