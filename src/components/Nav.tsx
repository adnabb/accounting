import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const Nav = styled.nav`
  > ul {
    display: flex;
    justify-content: space-around;
  }
`

function GNav () {
  return (
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
  )
}

export default GNav;