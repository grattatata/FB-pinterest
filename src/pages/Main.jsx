import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Main = () => {
  return (
    <Layout>
      <Maincontainer>
        <Posts>메인페이지</Posts>
      </Maincontainer>
    </Layout>
  );
};

export default Main;

const Maincontainer = styled.div``;

const Posts = styled.div``;
