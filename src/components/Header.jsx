import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  //   const navigate = useNavigate();
  return (
    <HeadContainer>
      <Logo src={require("../image/Logo.png")} />
      <HomeBtnBox>
        <HeaderHome>홈</HeaderHome>
      </HomeBtnBox>
      <PostBtnBox>
        <HeaderPost>만들기</HeaderPost>
      </PostBtnBox>
      <ProfileBox>
        <p>프로필</p>
      </ProfileBox>
    </HeadContainer>
  );
};

export default Header;

const HeadContainer = styled.header`
  display: flex;
  align-items: center;
  height: 74px;
  background-color: white;
  border-bottom: 1px solid black;
  padding: 0 5px;
`;

const Logo = styled.img`
  margin-left: 10px;
  height: 40px;
  display: flex;
  font-size: 10px;
  border: none;
`;
const HomeBtnBox = styled.div`
  margin: 0 10px;
  background-color: black;
  border-radius: 20px;
  height: 40px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderHome = styled.span`
  padding: 0 10px;
  font-size: 15px;
  color: white;
  font-weight: bolder;
`;

const PostBtnBox = styled.div`
  margin: 0 10px;
  height: 40px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderPost = styled.span`
  padding: 0 10px;
  font-size: 15px;
  font-weight: bolder;
`;

const ProfileBox = styled.div`
  float: right;
`;
