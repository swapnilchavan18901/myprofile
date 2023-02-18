import React from "react";
import styled, { keyframes } from "styled-components";
import prf from "../assets/prf.jpg";
import "animate.css";
import animhome from "../Animations/animationhome";
function Talkwithme() {
  return (
    <Container name="talkwithme">
      <Header>Connect With me</Header>
      <Div>
        <DIV1>
          <IMG src={prf} />
        </DIV1>
        <DIV2>
          <Sdiv>
            <Headers>
              <SH>Just Say Hello !</SH>
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
            <Button> Submit</Button>
          </Sdiv>
        </DIV2>
      </Div>
    </Container>
  );
}

export default Talkwithme;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #212529;
  height: 90vh;
  width: 100%;
`;
const Header = styled.div`
  font-size: 45px;
  margin-top: 110px;
  color: #fff;
  width: 100%;
  height: 200px;
  padding-top: 20px;
  border-top: 3px solid rgb(255, 221, 64);
`;
const Headers = styled.div`
  color: #ffff;
  height: 130px;
  // margin-bottom: 70px;
  // margin-bottom : 70px;
`;
const Div = styled.div`
  margin-top: 70px;
  display: flex;
  margin-left: 40px;
  margin-right: 40px;

  margin-bottom: 200px;
`;
const DIV1 = styled.div`
  border-right: 2px solid #ffff;
  // background: red;

  width: 40%;
`;
const DIV2 = styled.div`
  width: 60%;
  // background: green;
`;
const Sdiv = styled.div`
  // margin-top: 90px;
`;

const SH = styled.div`
  font-size: 40px;
`;
const SH2 = styled.div`
  font-size: 30px;
`;
// const Sdiv = styled.div``;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;
const Input1 = styled.input`
  width: 270px;
  height: 60px;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  background: #212529;
  color: #fff;
  border: 3px solid rgb(255, 221, 64);
  ::placeholder {
    color: #ffff;
  }
  &:hover {
    border: 3px solid rgb(255, 221, 64);
  }
  &:focus {
    border: 2px solid red;
  }
`;
const Input2 = styled.textarea`
  color: #fff;
  width: 560px;
  height: 180px;
  border-radius: 10px;
  margin: 10px;
  background: #212529;
  text-align: center;
  border: 3px solid rgb(255, 221, 64);
  ::placeholder {
    color: #ffff;
  }
  &:hover {
    border: 3px solid rgb(255, 221, 64);
  }
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 20px;
  border-radius: 10px;
  border: 2px solid rgb(255, 221, 64);

  color: #ffff;
  background: transparent;
  transition: all 250ms ease-in-out;
  color: rgb(255, 221, 64);
  &:hover {
    transform: scale(1.07);
    // color: rgb(255, 221, 64);
    border: 2px solid rgb(255, 221, 64);
  }
`;

const IMG = styled.img`
  width: 500px;
  height: 400px;
  margin: 10px;
  margin-top: 70px;

  padding: 20px 20px 20px 20px;
`;
