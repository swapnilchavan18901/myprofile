import React from "react";
import styled, { keyframes } from "styled-components";
import prf from "../assets/prf.jpg";
import "animate.css";
import Fade from "react-reveal/Fade";
function Talkwithme() {
  return (
    <Container name="talkwithme">
      <Fade duration={1000} delay={1000}>
        <Header>Connect With me</Header>
      </Fade>
      <Fade duration={1000} delay={1300}>
        <Div>
          <Sdiv>
            <Headers>
              <SH>Let's Talk</SH>
              <SH2>Let me know about you !</SH2>
            </Headers>
            <Content>
              <Input1 type="text" placeholder="First Name" />
              <Input1 type="text" placeholder="Last Name" />
            </Content>
            <Content>
              <Input1 type="text" placeholder="Mail" />
              <Input1 type="text" placeholder="Phone" />
            </Content>
            <Content>
              <Input2 type="text" placeholder="Message" />
            </Content>
            <Content>
              <Button> Submit </Button>
            </Content>
          </Sdiv>
        </Div>
      </Fade>
    </Container>
  );
}

export default Talkwithme;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // padding-top: 80px;
  height: 57vh;
  align-items: center;
  width: 100%;
  @media (max-width: 400px) {
    width: 400px;
    height: 70vh;
  }
`;
const Header = styled.div`
  font-size: 25px;
  color: #fff;
  width: 100%;
  letter-spacing: 7px;
  margin: 10px;
  text-align: center;
  border-bottom: 3px solid #000;
  @media (max-width: 400px) {
    // width: 400px;
    padding-top: 0px;
  }
`;
const Headers = styled.div`
  color: #fff;
  padding-bottom: 10px;
  text-align: center;
`;
const Div = styled.div`
  // padding-top: 70px;
  display: flex;
  // margin-left: 40px;
  // margin-right: 40px;

  // margin-bottom: 200px;
  @media (max-width: 400px) {
    align-items: center;
    width: 400px;
    justify-content: center;
  }
`;
const DIV1 = styled.div`
  // background: red;
  margin: 10px;
  padding-top: 30px;
  width: 40%;
  @media (max-width: 400px) {
    display: none;
  }
`;
const DIV2 = styled.div`
  width: 60%;
  // background: green;
  padding-top: 30px;
  @media (max-width: 400px) {
  }
`;
const Sdiv = styled.div``;

const SH = styled.div`
  font-size: 20px;
`;
const SH2 = styled.div`
  font-size: 15px;
`;
// const Sdiv = styled.div``;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;
const Input1 = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 4px;
  margin: 10px;
  text-align: center;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  ::placeholder {
    color: #fff;
  }
  @media (max-width: 400px) {
    // margin: 20px;
    width: 150px;
  }
`;
const Input2 = styled.textarea`
  color: #fff;
  width: 460px;
  height: 60px;
  border-radius: 4px;
  // margin: 10px;
  background: transparent;
  text-align: center;
  border: 1px solid #fff;
  ::placeholder {
    color: #fff;
  }
  @media (max-width: 400px) {
    // margin: 20px;
    width: 300px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 20px;
  border-radius: 4px;
  border: 1px solid #fff;

  color: #ffff;
  background: transparent;
  transition: all 250ms ease-in-out;
  color: #fff;
  &:hover {
    transform: scale(1.07);
    color: #000;
    background: #fff;
  }
  @media (max-width: 400px) {
    margin: 20px;
    width: 180px;
  }
`;

const IMG = styled.img`
  width: 300px;
  height: 300px;
  // margin: 10px;
  // margin-top: 70px;
  padding: 20px 20px 20px 20px;

  @media (max-width: 400px) {
    display: none;
  }
`;
