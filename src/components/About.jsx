import React from "react";
import styled from "styled-components";
import prf from "../assets/prf.jpg";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <DIV name="about">
      <Content>
        <Div1>
          <Fade delay={1500}>
            <Img src={prf} />
          </Fade>
        </Div1>
        <Div2>
          <Fade duration={2000} delay={700}>
            <Header>About Me</Header>
            <Header2>
              Front-end <span>& </span>
              Back-end Developer
            </Header2>
          </Fade>
          <LightSpeed right duration={2000} delay={1500}>
            <Content2>
              A self-taught Front-end and Back-end Developer. I can provide
              clean code with perfect pixel design UI. I can make more and more
              interactive with web animations. My created responisve websites
              are accessible to all users regardless of their device. I learning
              new technologies every day. A well-organized person, problem
              solver, and a guy with acute attention to detail and creativity.
              Interested in the entire front-end and back-end spectrum on
              ambitious projects with a great team.
            </Content2>
          </LightSpeed>
          <Zoom left delay={2000} duration={1000}>
            <Button2>Download CV</Button2>
          </Zoom>
        </Div2>
      </Content>
    </DIV>
  );
};

export default About;
const DIV = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #212529;
  align-items: center;
`;
const Div1 = styled.div`
  width: 450px;
`;
const Div2 = styled.div`
  width: 750px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const SD1 = styled.div`
  // height: 20vh;
  display: flex;
`;
const Button2 = styled.button`
  border: 3px solid rgb(255, 221, 64);
  width: 200px;
  height: 70px;
  background: transparent;
  margin-top: 40px;
  margin-left: 40px;
  transition: all 250ms ease-in-out;
  border: 2px solid rgb(255, 221, 64);
  border-radius: 10px;
  color: rgb(255, 221, 64);
  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  margin: 40px;
  margin-right: 40px;
  border-left: 3px solid rgb(255, 221, 64);
  border-bottom: 3px solid rgb(255, 221, 64);
  // border-radius: 10px;
  margin-top: 120px;
  padding: 30px 30px;
  width: 400px;
  height: 400px;
`;
const Header = styled.div`
  height: 90px;
  font-size: 60px;
  width: 740px;
  text-align: left;
  border-right: 3px solid rgb(255, 221, 64);
  border-top: 3px solid rgb(255, 221, 64);
  margin-left: 40px;
  color: #fff;
`;
const Header2 = styled.div`
  color: rgb(255, 221, 64);
  font-size: 30px;
  margin-left: 40px;
  width: 740px;
  text-align: left;
  border-right: 3px solid rgb(255, 221, 64);
  margin-top: 20px;
  height: 30px;
  span {
    color: #fff;
  }
`;
const Content = styled.div`
  display: flex;
  text-align: left;
  // border-right: 3px solid rgb(255, 221, 64);
  margin-top: 20vh;
  height: 70vh;
`;

const Content2 = styled.div`
  font-size: 20px;
  color: #fff;
  text-align: left;
  text-align: left;
  width: 740px;
  border-right: 3px solid rgb(255, 221, 64);
  margin-top: 40px;
  margin-left: 40px;
  word-spacing: 4px;
`;
