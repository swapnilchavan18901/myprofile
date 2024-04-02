import React from "react";
import styled from "styled-components";
import prf from "../assets/profile1.png";
import Fade from "react-reveal/Fade";
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
          <Fade duration={2000} delay={1500}>
            <Content2>
              Hello! Myself Swapnil. I have completed my&nbsp;
              <u>Diploma in Computer Engineering</u>, Currently I am
              pursuing&nbsp;
              <u>Bachelor of Engineering in PHCET college</u>. I have 3 years of
              experience in web development. I have completed many
              projects,currently some of them are in production. My journey in
              the world of software development began during academic years of
              diploma. My interest in web development and problem-solving
              started back in 2020 when we undertook a project during the second
              semester of our college program. This commitment for continuous
              learning ensures that I can deliver cutting-edge solutions that
              meet the evolving needs of clients and end-users.
            </Content2>
          </Fade>
        </Div2>
      </Content>
    </DIV>
  );
};

export default About;
const DIV = styled.div`
  display: flex;
  // align-items: center;
  height: 100vh;
  justify-content: center;

  @media (max-width: 400px) {
    height: 100vh;
    width: 400px;
  }
`;
const Div1 = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;

  @media (max-width: 400px) {
    display: flex;
    width: 400px;
    height: 300px;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
  }
`;
const Div2 = styled.div`
  // width: 750px;

  @media (max-width: 400px) {
    height: 400px;
    margin-top: 20px;
    width: 400px;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.img`
  // padding: 20px 20px 20px 20px;

  border-radius: 100px;
  width: 150px;
  height: 150px;
  @media (max-width: 400px) {
    width: 300px;

    height: 300px;
    border: none;
    margin: 0px;
    // margin-top: 100px;
    padding: 0px 0px;
  }
`;
const Content = styled.div`
  display: flex;

  // text-align: left;
  width: 1100px;
  word-spacing: 3px;
  // justify-content: center;
  align-items: center;
  // height: 30vh;
  flex-direction: column;
  // color: #282c35;
  color: #fff;

  font-size: 17px;
  @media (max-width: 400px) {
    flex-direction: column;
    margin-top: 0vh;

    width: 400px;
  }
`;

const Content2 = styled.div`
  font-size: 28px;
  // color: #100c08;
  color: #fff;

  // font-weight: bold;
  text-align: center;
  width: 1200px;
  // font-style: oblique;
  font-family: "Gruppo", cursive;
  @media (max-width: 400px) {
    border: none;
    margin-top: 0px;
    margin-left: 0px;
    width: 360px;
    font-size: 18px;
    padding: 10px 10px 10px 10px;
  }
`;
