import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 14px; // Default font size for footer text

  @media (min-width: 600px) {
    font-size: 16px; // Slightly larger font size for screens wider than 600px
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 My Website</p>
    </FooterWrapper>
  );
}

export default Footer;
