import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Upload = () => {
  return (
    <Layout>
      <UploadContainer>
        <UploadBox>
          <UploadTopCt>
            <UploadTop>
              <button>삭제추가</button>
              <button>저장</button>
            </UploadTop>
          </UploadTopCt>
          {/* 안에 이미지 넣기 */}
          <UploadMain>여기에 뭐 넣기</UploadMain>
        </UploadBox>
      </UploadContainer>
    </Layout>
  );
};

export default Upload;

const UploadContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  z-index: 200;
`;
const UploadBox = styled.div`
  width: inherit;
  clear: both; ;
`;

const UploadTopCt = styled.div``;

const UploadTop = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  margin-top: 20px;
  clear: both; ;
`;

const UploadMain = styled.div`
  border: 1px solid black;
`;
