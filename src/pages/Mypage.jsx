import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { faPen, faUpload } from "@fortawesome/free-solid-svg-icons";
import { actionCreators as MyActions } from "../redux/modules/my";
import Flex from "../elements/Flex";
import Avatar from "../elements/Avatar";
import Button from "../elements/Button";
import Icon from "../elements/Icon";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const myPins = useSelector((state) => state.my.pins);
  const myNick = useSelector((state) => state.my.nickName);
  const name = localStorage.getItem("user_name");

  useEffect(() => {
    dispatch(MyActions.getMyAPI());
  }, []);

  return (
    <Wrapper className="Wrapper">
      <Flex mg="16px 0px" ai="center">
        <Avatar width="80px" fontSize="1.8rem" fontWeight="700">
          {name.slice(0, 1).toUpperCase()}
        </Avatar>
      </Flex>
      <TextInfo className="TextInfo">
        <h1>{myNick}</h1>
      </TextInfo>

      <Flex className="Btn__Container" width="95%" justify_content="flex-start">
        <Flex className="Buttons">
          <Button
            width="48px"
            height="48px"
            padding="0"
            font_size="20px"
            color="black"
            background_color="transparent"
            border="none"
          >
            <Icon className=" header__tools hover__bg" icon={faPen} />
          </Button>
          <Button
            width="48px"
            height="48px"
            padding="0"
            font_size="20px"
            color="black"
            background_color="transparent"
            border="none"
          >
            <Icon className=" header__tools hover__bg" icon={faUpload} />
          </Button>
        </Flex>
      </Flex>

      <Container className="mainboard__container">
        {myPins.map((pin, index) => {
          return (
            <ImageWrapper>
              <ImageContainer>
                <div>
                  <img src={pin.imgURL} alt="pin" />
                </div>
              </ImageContainer>
            </ImageWrapper>
          );
        })}
      </Container>

      <FloatButton>?</FloatButton>
      <GloatButton>+</GloatButton>
    </Wrapper>
  );
};
export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 15px;
`;

const TextInfo = styled.div`
  width: 100%;

  line-height: 1.2;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }
  span {
    font-weight: 600;
  }
  text-align: center;
`;

const GloatButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-color: #fff;
  color: black;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 600;
  position: fixed;
  bottom: 110px;
  right: 30px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  &:hover {
    background-color: #d0d0d0;
    cursor: pointer;
  }
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
  color: black;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 600;
  position: fixed;
  bottom: 50px;
  right: 30px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  &:hover {
    background-color: #d0d0d0;
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 100%;
  background-color: white;
`;
const ImageWrapper = styled.div`
  display: flex;
  margin: 8px 8px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: pointer;
    border-radius: 16px;
    object-fit: cover;
    &:hover {
      filter: brightness(60%);
    }
  }
`;
