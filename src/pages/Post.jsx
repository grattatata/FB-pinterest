import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Pin from "../components/Pin";

const Post = () => {
  return <Layout></Layout>;
};

export default Post;

const Pincontainer = styled.div`
  margin: 0;
  padding: 0;
  width: 80vw;
  background-color: black;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: 10px;
`;
