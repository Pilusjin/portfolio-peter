// Layout.jsx

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-top: 200px;
`;

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
