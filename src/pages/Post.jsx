import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Post = () => {
  return (
    <Layout>
      <PostMain>{}</PostMain>
    </Layout>
  );
};

export default Post;

const PostMain = styled.div`
  color: red;
`;
