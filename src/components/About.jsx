import React from "react";
import styled from "styled-components";
import prf from "../assets/profile1.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <DIV name="about">
      <Fade delay={1100}>
        <HEADER>ABOUT </HEADER>{" "}
      </Fade>

      <div>
        <Content>
          <Div1>
            <Fade delay={1500}>
              <Img src={prf} />
            </Fade>
          </Div1>
          <Div2>
            <Fade duration={2000} delay={1500}>
              <Content2>
                Hey there! I'm Swapnil, a Computer Engineering Graduate fueled
                by a passion for crafting innovative software solutions. With a
                solid foundation in programming languages, algorithms, and
                system architecture, I thrive on tackling complex challenges and
                engineering solutions that exceed expectations. With 3 years of
                experience, I've worked on diverse projects spanning web
                development, mobile applications, and embedded systems. I bring
                a blend of technical expertise and creative problem-solving
                skills to every project, ensuring that every line of code
                contributes to a seamless user experience.
                <br />
                &nbsp; You must be thinking What sets me apart from other right?
                It's my unwavering commitment to excellence and innovation. I
                approach each project with meticulous attention to detail and a
                focus on delivering tangible results. I pride myself on my
                ability to collaborate effectively with clients and stakeholders
                to understand their needs and translate them into actionable
                solutions. Whether you're a startup with a bold vision or an
                established enterprise seeking to enhance your digital presence,
                I'm here to help. Let's work together to turn your ideas into
                reality and create software that makes a difference. Ready to
                get started? Reach out, and let's explore how we can collaborate
                to achieve your goals.
              </Content2>
            </Fade>
          </Div2>
        </Content>
      </div>
    </DIV>
  );
};

export default About;
const HEADER = styled.div`
  height: 130px;
  padding-left: 80px;
  font-size: 80px;
  padding-bottom: 70px;
  font-weight: bold;
  color: #292040;
  font-family: "Helvetica", cursive;
`;
const DIV = styled.div`
  display: flex;
  width: 1200px;
  height: 100vh;
  // padding-top: 50px;
  flex-direction: column;
  @media (max-width: 400px) {
    height: 100vh;
    width: 400px;
  }
`;
const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 40px;
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
  width: 300px;

  height: 300px;
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
  word-spacing: 3px;
  // justify-content: center;
  align-items: center;
  // height: 30vh;
  // flex-direction: column;
  // color: #282c35;
  color: #fff;

  @media (max-width: 400px) {
    flex-direction: column;
    margin-top: 0vh;

    width: 400px;
  }
`;

const Content2 = styled.div`
  font-size: 18px;
  // color: #100c08;
  color: #fff;

  // font-weight: bold;
  text-align: left;
  // width: 980px;
  // font-style: oblique;
  font-family: "Helvetica", cursive;
  @media (max-width: 400px) {
    border: none;
    margin-top: 0px;
    margin-left: 0px;
    width: 360px;
    font-size: 18px;
    padding: 10px 10px 10px 10px;
    text-align: center;
  }
`;
