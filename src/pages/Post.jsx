import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Post = () => {
  return (
    <Layout>
      <PostMain>글이 왜 안보이냐?</PostMain>
    </Layout>
  );
};

export default Post;

const PostMain = styled.div`
  color: red;
`;
