import React from "react";
import styled from "styled-components";

// Create a styled header component
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

// Create a styled navigation component
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
