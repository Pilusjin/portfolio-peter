import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      margin-right: 20px;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>My Portfolio</h1>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
