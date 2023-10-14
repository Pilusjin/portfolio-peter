import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 My Website</p>
    </FooterWrapper>
  );
}

export default Footer;
