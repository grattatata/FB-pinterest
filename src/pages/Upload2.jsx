import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { TextareaAutosize, TextField } from "@mui/material";

const Upload = () => {
  return (
    <Layout>
      <UploadContainer>
        <UploadBox>
          <UploadTopCt>
            <UploadTop>
              <FontAwesomeIcon icon={faEllipsis} size="2x" />
              <img
                alt="Save"
                src="../image/저장.png"
                style={{ cursor: "pointer" }}
              />
            </UploadTop>
          </UploadTopCt>

          {/* 안에 이미지 넣기 */}
          {/* <UploadMain>
            <UploadLeft>
              <LeftImg
                alt="upload"
                src="../image/이미지 업로드.png"
                style={{ cursor: "pointer" }}
              />
              <LeftUploadBtn>사이트에서저장</LeftUploadBtn>
            </UploadLeft>

            <UploadRight>
              <input placeholder="제목추가"></input>
            </UploadRight>
          </UploadMain> */}

          <FormStyle>
            <ColumnWrap>
              {/* 좌짝 */}
              <ColumnLeft>
                <Label htmlFor="input-file" className="img_label">
                  <ImgPreview
                    src="../image/이미지 업로드.png"
                    alt="preview-img"
                  ></ImgPreview>
                  <FileInput
                    multiple
                    type="file"
                    accept="image/*"
                    id="input-file"
                    style={{ display: "none" }}
                  />
                </Label>
              </ColumnLeft>

              <ColumnRight>
                {/* <SubmitInput type="submit" value="저장" /> */}
                <TextField
                  id="standard-helperText"
                  defaultValue="제목추가"
                  variant="standard"
                  style={{ fontSize: "660px", paddingTop: "20px" }}
                />

                <UserProfileWrap>
                  <ProfileImg src="../image/profile.jpg" />
                  <p>닉네임</p>
                </UserProfileWrap>

                <TextareaAutosize
                  maxRows="4"
                  aria-label="maximum height"
                  placeholder="내용"
                  name="content"
                  style={{
                    width: "100%",
                    height: "80%",
                    resize: "none",
                    fontSize: "16px",
                    padding: "16.5px 14px",
                    border: "black",
                  }}
                />
              </ColumnRight>
            </ColumnWrap>
          </FormStyle>
        </UploadBox>
      </UploadContainer>
    </Layout>
  );
};

export default Upload;

const UploadContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  z-index: 200;
  margin-top: 50px;
  border: 1px solid black;
`;

const UploadBox = styled.div`
  width: 80%;
  /* margin-top: 30px; */
  clear: both;
`;

const UploadTopCt = styled.div``;

const UploadTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  clear: both; ;
`;

// const UploadMain = styled.div`
//   border: 1px solid black;
//   height: 80%;
// `;

// const UploadLeft = styled.div`
//   height: inherit;
//   width: 50%;
//   display: Flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const LeftImg = styled.img`
//   margin: 20px;
// `;

// const LeftUploadBtn = styled.button`
//   display: flex;
//   justify-content: left;
//   width: 280px;
//   clear: both;
// `;

// const UploadRight = styled.div`
//   height: 100%;
//   width: 45%;
//   display: Flex;
//   flex-direction: column;
//   gap: 15px;
//   justify-content: space-between;
//   align-content: right;
// `;

const FormStyle = styled.form`
  padding: 30px 10px;
  height: 100%;
  position: relative;
`;

const ColumnWrap = styled.div`
  margin: 0 auto;
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const ColumnLeft = styled.div`
  height: 100%;
  width: 35%;
  display: Flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  color: #bcbcbc;
`;

const ImgPreview = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 6px;
  z-index: 200;
  width: 300px;
`;

const FileInput = styled.input`
  cursor: pointer;
  width: 150px;
`;

const UserProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ColumnRight = styled.form`
  height: 100%;
  width: 45%;
  display: Flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  align-content: right;
`;

const ProfileImg = styled.img`
  width: 50px;
  border-radius: 25px;
`;
