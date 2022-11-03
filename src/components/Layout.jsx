import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StLayout>{children}</StLayout>
    </>
  );
};

export default Layout;

const StLayout = styled.div`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
